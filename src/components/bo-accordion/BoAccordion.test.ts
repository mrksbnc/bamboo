import { Icon } from '@/components/bo-icon';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoAccordion from './BoAccordion.vue';

describe('BoAccordion.vue', () => {
	it('renders with title', () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Title' },
		});
		expect(wrapper.find('.bo-accordion-title').text()).toBe('Test Title');
	});

	it('renders with prefix icon', () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Title', prefixIcon: Icon.search },
		});
		expect(wrapper.find('.bo-accordion-icon').exists()).toBe(true);
	});

	it('renders with custom icon', () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Title', customIcon: Icon.plus },
		});
		expect(wrapper.find('.bo-accordion-collapse-icon').exists()).toBe(true);
	});

	it('toggles open state when clicked', async () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Title' },
		});
		await wrapper.find('.bo-accordion-header').trigger('click');
		expect(wrapper.find('.bo-accordion-body').exists()).toBe(true);
		await wrapper.find('.bo-accordion-header').trigger('click');
		expect(wrapper.find('.bo-accordion-body').exists()).toBe(false);
	});

	it('toggles open state with keyboard (Enter)', async () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Title' },
		});
		await wrapper.find('.bo-accordion-header').trigger('keydown.enter');
		expect(wrapper.find('.bo-accordion-body').exists()).toBe(true);
		await wrapper.find('.bo-accordion-header').trigger('keydown.enter');
		expect(wrapper.find('.bo-accordion-body').exists()).toBe(false);
	});

	it('toggles open state with keyboard (Space)', async () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Title' },
		});
		await wrapper.find('.bo-accordion-header').trigger('keydown.space');
		expect(wrapper.find('.bo-accordion-body').exists()).toBe(true);
		await wrapper.find('.bo-accordion-header').trigger('keydown.space');
		expect(wrapper.find('.bo-accordion-body').exists()).toBe(false);
	});

	it('rotates icon when open/closed', async () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Title' },
		});
		const icon = wrapper.find('.bo-accordion-collapse-icon');
		expect(icon.classes()).not.toContain('rotate-180');
		await wrapper.find('.bo-accordion-header').trigger('click');
		expect(icon.classes()).toContain('rotate-180');
		await wrapper.find('.bo-accordion-header').trigger('click');
		expect(icon.classes()).not.toContain('rotate-180');
	});

	it('renders as disabled', () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Title', disabled: true },
		});
		expect(wrapper.find('.bo-accordion-header').classes()).toContain('cursor-not-allowed');
		expect(wrapper.find('.bo-accordion-header').classes()).toContain('opacity-50');
	});

	it('does not toggle when disabled', async () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Title', disabled: true },
		});
		await wrapper.find('.bo-accordion-header').trigger('click');
		expect(wrapper.find('.bo-accordion-body').exists()).toBe(false);
	});

	it('renders with custom class', () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Title', className: 'custom-class' },
		});
		expect(wrapper.find('.bo-accordion-header').classes()).toContain('custom-class');
	});

	it('renders with default open state', () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Title', open: true },
		});
		expect(wrapper.find('.bo-accordion-body').exists()).toBe(true);
	});

	it('emits toggle event when clicked', async () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Title' },
		});
		await wrapper.find('.bo-accordion-header').trigger('click');
		expect(wrapper.emitted('toggle')).toBeTruthy();
		expect(wrapper.emitted('toggle')![0]).toEqual([{ id: wrapper.props('id'), open: true }]);
	});

	it('renders with custom content', () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Title', open: true },
			slots: {
				default: '<div class="custom-content">Custom Content</div>',
			},
		});
		expect(wrapper.find('.custom-content').exists()).toBe(true);
	});

	it('has correct accessibility attributes', () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Title', id: 'test-accordion' },
		});
		const header = wrapper.find('.bo-accordion-header');
		const body = wrapper.find('.bo-accordion-body');

		expect(header.attributes('aria-expanded')).toBe('false');
		expect(header.attributes('aria-controls')).toBe('accordion-body-test-accordion');
		expect(header.attributes('id')).toBe('accordion-header-test-accordion');
		expect(body.attributes('aria-labelledby')).toBe('accordion-header-test-accordion');
		expect(body.attributes('role')).toBe('region');
	});

	it('updates accessibility attributes when opened', async () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Title', id: 'test-accordion' },
		});
		await wrapper.find('.bo-accordion-header').trigger('click');
		expect(wrapper.find('.bo-accordion-header').attributes('aria-expanded')).toBe('true');
	});

	it('has hover state styling when not disabled', () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Title' },
		});
		expect(wrapper.find('.bo-accordion-header').classes()).toContain('hover:bg-blue-50');
	});

	it('does not have hover state styling when disabled', () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Title', disabled: true },
		});
		expect(wrapper.find('.bo-accordion-header').classes()).not.toContain('hover:bg-blue-50');
	});

	it('responds to external open state changes', async () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Title', open: false },
		});
		await wrapper.setProps({ open: true });
		expect(wrapper.find('.bo-accordion-body').exists()).toBe(true);
		await wrapper.setProps({ open: false });
		expect(wrapper.find('.bo-accordion-body').exists()).toBe(false);
	});
});
