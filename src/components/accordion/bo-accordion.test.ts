import { Icon } from '@/components/icon/bo-icon.js';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { BoAccordionShape } from './bo-accordion.js';
import BoAccordion from './bo-accordion.vue';

describe('BoAccordion', () => {
	const defaultProps = {
		id: 'test-accordion',
		title: 'Test Accordion',
	};

	it('renders with default props', () => {
		const wrapper = mount(BoAccordion, {
			props: defaultProps,
		});

		expect(wrapper.find('.bo-accordion').exists()).toBe(true);
		expect(wrapper.find('.bo-accordion__header').exists()).toBe(true);
		expect(wrapper.find('.bo-accordion__title').text()).toBe('Test Accordion');
	});

	it('toggles open state on click', async () => {
		const wrapper = mount(BoAccordion, {
			props: defaultProps,
		});

		expect(wrapper.find('.bo-accordion--open').exists()).toBe(false);

		await wrapper.find('.bo-accordion__header').trigger('click');
		await wrapper.vm.$nextTick();
		expect(wrapper.find('.bo-accordion--open').exists()).toBe(true);
		expect(wrapper.find('.bo-accordion__body').isVisible()).toBe(true);

		await wrapper.find('.bo-accordion__header').trigger('click');
		await wrapper.vm.$nextTick();
		expect(wrapper.find('.bo-accordion--open').exists()).toBe(false);
		expect(wrapper.find('.bo-accordion__body').isVisible()).toBe(false);
	});

	it('emits toggle event with correct payload', async () => {
		const wrapper = mount(BoAccordion, {
			props: defaultProps,
		});

		await wrapper.find('.bo-accordion__header').trigger('click');
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted('toggle')).toBeTruthy();
		expect(wrapper.emitted('toggle')?.[0]).toEqual([{ id: 'test-accordion', open: true }]);

		await wrapper.find('.bo-accordion__header').trigger('click');
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted('toggle')?.[1]).toEqual([{ id: 'test-accordion', open: false }]);
	});

	it('respects disabled state', async () => {
		const wrapper = mount(BoAccordion, {
			props: {
				...defaultProps,
				disabled: true,
			},
		});

		expect(wrapper.find('.bo-accordion--disabled').exists()).toBe(true);
		await wrapper.find('.bo-accordion__header').trigger('click');
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted('toggle')).toBeFalsy();
	});

	it('renders prefix icon when provided', () => {
		const wrapper = mount(BoAccordion, {
			props: {
				...defaultProps,
				prefixIcon: Icon.check,
			},
		});

		expect(wrapper.find('.bo-accordion__prefix-icon').exists()).toBe(true);
	});

	it('applies correct rounded styles based on shape prop', () => {
		const wrapper = mount(BoAccordion, {
			props: {
				...defaultProps,
				shape: BoAccordionShape.rounded,
			},
		});

		expect(wrapper.find('.bo-accordion--rounded').exists()).toBe(true);
	});

	it('handles keyboard navigation', async () => {
		const wrapper = mount(BoAccordion, {
			props: defaultProps,
		});

		await wrapper.find('.bo-accordion__header').trigger('keydown.enter');
		await wrapper.vm.$nextTick();
		expect(wrapper.find('.bo-accordion--open').exists()).toBe(true);

		await wrapper.find('.bo-accordion__header').trigger('keydown.space');
		await wrapper.vm.$nextTick();
		expect(wrapper.find('.bo-accordion--open').exists()).toBe(false);
	});

	it('renders custom header slot when provided', () => {
		const wrapper = mount(BoAccordion, {
			props: defaultProps,
			slots: {
				header: '<div class="custom-header">Custom Header</div>',
			},
		});

		expect(wrapper.find('.custom-header').exists()).toBe(true);
		expect(wrapper.find('.custom-header').text()).toBe('Custom Header');
	});

	it('applies custom background colors', () => {
		const wrapper = mount(BoAccordion, {
			props: {
				...defaultProps,
				headerBackgroundColor: 'bg-red-500',
				bodyBackgroundColor: 'bg-blue-500',
			},
		});

		expect(wrapper.find('.bo-accordion__header').classes()).toContain('bg-red-500');
		expect(wrapper.find('.bo-accordion__body').classes()).toContain('bg-blue-500');
	});

	it('handles text colors', () => {
		const wrapper = mount(BoAccordion, {
			props: {
				...defaultProps,
				headerTextColor: 'text-red-500',
				bodyTextColor: 'text-blue-500',
			},
		});

		expect(wrapper.find('.bo-accordion__header').classes()).toContain('text-red-500');
		expect(wrapper.find('.bo-accordion__body').classes()).toContain('text-blue-500');
	});

	it('handles custom toggle icon', () => {
		const wrapper = mount(BoAccordion, {
			props: {
				...defaultProps,
				customToggleIcon: Icon.arrow_down,
			},
		});

		expect(wrapper.find('.bo-accordion__toggle-icon').exists()).toBe(true);
	});

	it('handles aria labels', () => {
		const wrapper = mount(BoAccordion, {
			props: {
				...defaultProps,
				ariaLabel: 'Custom Aria Label',
			},
		});

		expect(wrapper.find('.bo-accordion__header').attributes('aria-label')).toBe(
			'Custom Aria Label',
		);
	});
});
