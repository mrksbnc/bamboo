import { BoSize } from '@/shared';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoDivider from './BoDivider.vue';
import { BoDividerVariant } from './bo-divider';

describe('BoDivider', () => {
	it('renders a horizontal divider by default', () => {
		const wrapper = mount(BoDivider);
		const divider = wrapper.find('[role="separator"]');

		expect(divider.attributes('aria-orientation')).toBe('horizontal');
		expect(divider.classes()).toContain('w-full');
		expect(divider.classes()).not.toContain('h-full');
		expect(divider.classes()).not.toContain('w-px');
	});

	it('renders a vertical divider when vertical prop is true', () => {
		const wrapper = mount(BoDivider, {
			props: {
				vertical: true,
			},
		});
		const divider = wrapper.find('[role="separator"]');

		expect(divider.attributes('aria-orientation')).toBe('vertical');
		expect(divider.classes()).toContain('h-full');
		expect(divider.classes()).toContain('w-px');
		expect(divider.classes()).not.toContain('w-full');
	});

	it('renders with label when label prop is provided', () => {
		const label = 'Section';
		const wrapper = mount(BoDivider, {
			props: {
				label,
			},
		});

		expect(wrapper.find('.flex-shrink-0').exists()).toBe(true);
		expect(wrapper.find('bo-text-stub').attributes('value')).toBe(label);
	});

	it('does not render label in vertical mode even when label prop is provided', () => {
		const wrapper = mount(BoDivider, {
			props: {
				label: 'Section',
				vertical: true,
			},
		});

		expect(wrapper.find('.flex-shrink-0').exists()).toBe(false);
		expect(wrapper.find('bo-text-stub').exists()).toBe(false);
	});

	it('applies dashed variant correctly', () => {
		const wrapper = mount(BoDivider, {
			props: {
				variant: BoDividerVariant.dashed,
			},
		});

		expect(wrapper.find('.border-dashed').exists()).toBe(true);
		expect(wrapper.find('.border-dotted').exists()).toBe(false);
	});

	it('applies dotted variant correctly', () => {
		const wrapper = mount(BoDivider, {
			props: {
				variant: BoDividerVariant.dotted,
			},
		});

		expect(wrapper.find('.border-dotted').exists()).toBe(true);
		expect(wrapper.find('.border-dashed').exists()).toBe(false);
	});

	it('applies correct text size based on size prop', () => {
		const wrapper = mount(BoDivider, {
			props: {
				label: 'Section',
				size: BoSize.large,
			},
		});

		expect(wrapper.find('bo-text-stub').attributes('size')).toBe('lg');
	});

	it('generates a unique id when not provided', () => {
		const wrapper = mount(BoDivider);
		const id = wrapper.find('[role="separator"]').attributes('data-testid');

		expect(id).toMatch(/^bo-divider-/);
	});

	it('uses provided id when available', () => {
		const customId = 'custom-divider-id';
		const wrapper = mount(BoDivider, {
			props: {
				id: customId,
			},
		});

		expect(wrapper.find('[role="separator"]').attributes('data-testid')).toBe(
			`bo-divider-${customId}`,
		);
	});

	it('applies dark mode classes correctly', () => {
		const wrapper = mount(BoDivider);

		expect(wrapper.find('.border-neutral-200').exists()).toBe(true);
		expect(wrapper.find('.dark\\:border-neutral-700').exists()).toBe(true);
	});
});
