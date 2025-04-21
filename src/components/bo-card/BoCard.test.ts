import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoCard from './BoCard.vue';
import type { BoCardPadding } from './bo-card';

describe('BoCard', () => {
	// Basic rendering tests
	it('renders properly with default props', () => {
		const wrapper = mount(BoCard, {
			slots: {
				content: 'Card content',
			},
		});

		expect(wrapper.text()).toContain('Card content');
		expect(wrapper.classes()).toContain('bo-card__container');
	});

	// Title and description tests
	it('renders title when provided', () => {
		const wrapper = mount(BoCard, {
			props: {
				title: 'Card Title',
			},
		});

		expect(wrapper.find('.bo-card__title').exists()).toBe(true);
		expect(wrapper.find('.bo-card__title').text()).toBe('Card Title');
	});

	it('renders description when provided', () => {
		const wrapper = mount(BoCard, {
			props: {
				description: 'Card Description',
			},
		});

		expect(wrapper.find('.bo-card__description').exists()).toBe(true);
		expect(wrapper.find('.bo-card__description').text()).toBe('Card Description');
	});

	// Padding tests
	it('applies all padding when default padding is used', () => {
		const wrapper = mount(BoCard);

		expect(wrapper.classes()).toContain('pt-5');
		expect(wrapper.classes()).toContain('pr-5');
		expect(wrapper.classes()).toContain('pb-5');
		expect(wrapper.classes()).toContain('pl-5');
	});

	it('applies specific padding when custom padding is provided', () => {
		const customPadding: BoCardPadding = {
			top: true,
			right: false,
			bottom: true,
			left: false,
		};

		const wrapper = mount(BoCard, {
			props: {
				padding: customPadding,
			},
		});

		expect(wrapper.classes()).toContain('pt-5');
		expect(wrapper.classes()).not.toContain('pr-5');
		expect(wrapper.classes()).toContain('pb-5');
		expect(wrapper.classes()).not.toContain('pl-5');
	});

	// Clickable tests
	it('renders clickable card with appropriate styles', () => {
		const wrapper = mount(BoCard, {
			props: {
				clickable: true,
			},
		});

		expect(wrapper.classes()).toContain('cursor-pointer');
		expect(wrapper.classes()).toContain('hover:bg-gray-50');
		expect(wrapper.classes()).toContain('transition-colors');
		expect(wrapper.attributes('role')).toBe('button');
		expect(wrapper.attributes('tabindex')).toBe('0');
	});

	it('renders non-clickable card with default styles', () => {
		const wrapper = mount(BoCard, {
			props: {
				clickable: false,
			},
		});

		expect(wrapper.classes()).toContain('cursor-default');
		expect(wrapper.classes()).not.toContain('cursor-pointer');
		expect(wrapper.attributes('role')).toBeUndefined();
		expect(wrapper.attributes('tabindex')).toBeUndefined();
	});

	// Disabled tests
	it('applies disabled styles when disabled prop is true', () => {
		const wrapper = mount(BoCard, {
			props: {
				disabled: true,
			},
		});

		expect(wrapper.classes()).toContain('opacity-60');
		expect(wrapper.classes()).toContain('cursor-not-allowed');
		expect(wrapper.classes()).toContain('pointer-events-none');
		expect(wrapper.attributes('aria-disabled')).toBe('true');
	});

	// Width tests
	it('applies width in pixels when widthInPx is provided', () => {
		const wrapper = mount(BoCard, {
			props: {
				widthInPx: 300,
			},
		});

		expect(wrapper.attributes('style')).toContain('width: 300px');
	});

	it('applies width in percentage when widthInPercent is provided', () => {
		const wrapper = mount(BoCard, {
			props: {
				widthInPercent: 50,
			},
		});

		expect(wrapper.attributes('style')).toContain('width: 50%');
	});

	it('applies Tailwind width class when widthAsTailwindClass is provided', () => {
		const wrapper = mount(BoCard, {
			props: {
				widthAsTailwindClass: 'w-full',
			},
		});

		expect(wrapper.classes()).toContain('w-full');
	});

	it('applies w-fit class by default if no width props are provided', () => {
		const wrapper = mount(BoCard);

		expect(wrapper.classes()).toContain('w-fit');
	});

	// Event tests
	it('emits click event when clickable card is clicked', async () => {
		const wrapper = mount(BoCard, {
			props: {
				clickable: true,
			},
		});

		await wrapper.trigger('click');
		expect(wrapper.emitted('click')).toBeTruthy();
		expect(wrapper.emitted('click')?.length).toBe(1);
	});

	it('does not emit click event when disabled card is clicked', async () => {
		const wrapper = mount(BoCard, {
			props: {
				clickable: true,
				disabled: true,
			},
		});

		await wrapper.trigger('click');
		expect(wrapper.emitted('click')).toBeFalsy();
	});

	// Slots tests
	it('renders content slot', () => {
		const wrapper = mount(BoCard, {
			slots: {
				content: '<div class="test-content">Content here</div>',
			},
		});

		expect(wrapper.find('.test-content').exists()).toBe(true);
		expect(wrapper.html()).toContain('Content here');
	});

	it('renders actions slot', () => {
		const wrapper = mount(BoCard, {
			slots: {
				actions: '<div class="test-actions">Actions here</div>',
			},
		});

		expect(wrapper.find('.test-actions').exists()).toBe(true);
		expect(wrapper.html()).toContain('Actions here');
	});
});
