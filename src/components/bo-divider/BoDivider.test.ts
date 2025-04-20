import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoDivider from './BoDivider.vue';
import { BoDividerVariant } from './bo-divider';

describe('BoDivider', () => {
	it('renders correctly with default props', () => {
		const wrapper = mount(BoDivider);

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.classes()).toContain('bo-divider');
		expect(wrapper.classes()).toContain('my-3');
		expect(wrapper.classes()).toContain('w-full');
		expect(wrapper.classes()).toContain('border-t');
		expect(wrapper.classes()).toContain('border-gray-300');
	});

	it('applies the correct id attribute', () => {
		const wrapper = mount(BoDivider, {
			props: {
				id: 'custom-divider-id',
			},
		});

		expect(wrapper.attributes('id')).toBe('custom-divider-id');
	});

	it('applies different variants correctly', async () => {
		const wrapper = mount(BoDivider, {
			props: {
				variant: BoDividerVariant.default,
			},
		});

		expect(wrapper.classes()).toContain('border-t');
		expect(wrapper.classes()).not.toContain('border-dotted');
		expect(wrapper.classes()).not.toContain('border-dashed');

		await wrapper.setProps({ variant: BoDividerVariant.dotted });
		expect(wrapper.classes()).toContain('border-t');
		expect(wrapper.classes()).toContain('border-dotted');
		expect(wrapper.classes()).not.toContain('border-dashed');

		await wrapper.setProps({ variant: BoDividerVariant.dashed });
		expect(wrapper.classes()).toContain('border-t');
		expect(wrapper.classes()).not.toContain('border-dotted');
		expect(wrapper.classes()).toContain('border-dashed');
	});

	it('applies hex color when colorHex is provided', () => {
		const wrapper = mount(BoDivider, {
			props: {
				colorHex: '#ff0000',
			},
		});

		expect(wrapper.attributes('style')).toContain('rgb(255, 0, 0);');
	});

	it('applies Tailwind color class when tailwindColor is provided', () => {
		const wrapper = mount(BoDivider, {
			props: {
				tailwindColor: 'border-blue-600',
			},
		});

		expect(wrapper.classes()).toContain('border-blue-600');
		expect(wrapper.classes()).not.toContain('border-gray-300');
	});

	it('prioritizes tailwindColor over colorHex when both are provided', () => {
		const wrapper = mount(BoDivider, {
			props: {
				colorHex: '#ff0000',
				tailwindColor: 'border-blue-600',
			},
		});

		expect(wrapper.classes()).toContain('border-blue-600');
		expect(wrapper.attributes('style')).toBe(undefined);
	});

	it('applies default color classes when no color props are provided', () => {
		const wrapper = mount(BoDivider);

		expect(wrapper.classes()).toContain('border-gray-300');
		expect(wrapper.classes()).toContain('dark:border-gray-600');
	});

	it('respects priority order of color application (tailwindColor > colorHex > default)', async () => {
		const wrapper = mount(BoDivider, {
			props: {
				tailwindColor: 'border-blue-600',
			},
		});

		expect(wrapper.classes()).toContain('border-blue-600');
		expect(wrapper.classes()).not.toContain('border-gray-300');

		await wrapper.setProps({
			tailwindColor: undefined,
			colorHex: '#ff0000',
		});

		expect(wrapper.classes()).not.toContain('border-blue-600');
		expect(wrapper.classes()).not.toContain('border-gray-300');
		expect(wrapper.attributes('style')).toContain('rgb(255, 0, 0);');

		await wrapper.setProps({
			tailwindColor: undefined,
			colorHex: undefined,
		});

		expect(wrapper.classes()).toContain('border-gray-300');
		expect(wrapper.attributes('style')).toBe('');
	});
});
