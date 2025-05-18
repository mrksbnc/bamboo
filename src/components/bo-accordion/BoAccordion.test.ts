import { Icon } from '@/components/bo-icon/bo-icon.js';
import BoIcon from '@/components/bo-icon/BoIcon.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoAccordion from './BoAccordion.vue';

describe('BoAccordion.vue', () => {
	it('renders with default props', () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Accordion' },
		});
		expect(wrapper.text()).toContain('Test Accordion');
		expect(wrapper.classes()).toContain('bo-accordion');
	});

	it('renders with prefix icon', () => {
		const wrapper = mount(BoAccordion, {
			props: {
				title: 'Test Accordion',
				prefixIcon: Icon.info,
			},
		});
		const icon = wrapper.findComponent(BoIcon);
		expect(icon.exists()).toBe(true);
		expect(icon.props('icon')).toBe(Icon.info);
	});

	it('renders with custom toggle icon', () => {
		const wrapper = mount(BoAccordion, {
			props: {
				title: 'Test Accordion',
				customToggleIcon: Icon.x,
			},
		});
		const icon = wrapper.find('.bo-accordion__collapse-icon').findComponent(BoIcon);
		expect(icon.exists()).toBe(true);
		expect(icon.props('icon')).toBe(Icon.x);
	});

	it('toggles open state when clicked', async () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Accordion' },
		});
		await wrapper.find('.bo-accordion__header').trigger('click');
		expect(wrapper.emitted('toggle')).toBeTruthy();
		expect(wrapper.emitted('toggle')![0][0]).toEqual({
			id: expect.any(String),
			open: true,
		});
	});

	it('does not toggle when disabled', async () => {
		const wrapper = mount(BoAccordion, {
			props: {
				title: 'Test Accordion',
				disabled: true,
			},
		});
		await wrapper.find('.bo-accordion__header').trigger('click');
		expect(wrapper.emitted('toggle')).toBeFalsy();
	});

	it('renders with custom content', () => {
		const wrapper = mount(BoAccordion, {
			props: { title: 'Test Accordion' },
			slots: { default: 'Custom Content' },
		});
		expect(wrapper.text()).toContain('Custom Content');
	});

	it('starts open when open prop is true', () => {
		const wrapper = mount(BoAccordion, {
			props: {
				title: 'Test Accordion',
				open: true,
			},
		});
		expect(wrapper.find('.bo-accordion__body').isVisible()).toBe(true);
	});

	it('applies disabled styles when disabled', () => {
		const wrapper = mount(BoAccordion, {
			props: {
				title: 'Test Accordion',
				disabled: true,
			},
		});
		expect(wrapper.classes()).toContain('cursor-not-allowed');
		expect(wrapper.classes()).toContain('opacity-50');
	});
});
