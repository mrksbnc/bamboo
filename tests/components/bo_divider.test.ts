import { describe, test, suite, expect } from 'vitest';
import { BoDivider, BoDividerVariant } from '@/components/bo_divider';
import { mount } from '@vue/test-utils';

describe('bo_divider.vue', () => {
	test('the divider should have the default classes', () => {
		const wrapper = mount(BoDivider);

		expect(wrapper.classes()).toContain('my-2');
		expect(wrapper.classes()).toContain('w-full');
		expect(wrapper.classes()).toContain('bo-divider');
		expect(wrapper.classes()).toContain('border-t');
		expect(wrapper.classes()).toContain('border-gray-300');
	});

	suite('variants', () => {
		test('the divider should be a solid line if the variant is not set', () => {
			const wrapper = mount(BoDivider, {});

			expect(wrapper.classes()).toContain('border-t');
		});

		test('the divider should be a dotted line if the variant is dotted', () => {
			const wrapper = mount(BoDivider, {
				props: {
					variant: BoDividerVariant.dotted,
				},
			});

			expect(wrapper.classes()).toContain('border-t');
			expect(wrapper.classes()).toContain('border-dotted');
		});

		test('the divider should be a dashed line if the variant is dashed', () => {
			const wrapper = mount(BoDivider, {
				props: {
					variant: BoDividerVariant.dashed,
				},
			});

			expect(wrapper.classes()).toContain('border-t');
			expect(wrapper.classes()).toContain('border-dashed');
		});
	});

	suite('colors', () => {
		test('the divider should have the default color if the color is not set', () => {
			const wrapper = mount(BoDivider, {});

			expect(wrapper.classes()).toContain('border-gray-300');
		});

		test('the divider should support a custom color if the color is set', () => {
			const wrapper = mount(BoDivider, {
				props: {
					colorHex: '#123456',
				},
			});

			expect(wrapper.attributes('style')).toBe('border-color: #123456;');
			expect(wrapper.classes()).not.toContain('border-gray-300');
		});

		test('the divider should support a custom color if the color is set with tailwind', () => {
			const wrapper = mount(BoDivider, {
				props: {
					tailwindColor: 'border-blue-600',
				},
			});

			expect(wrapper.classes()).includes('border-blue-600');
			expect(wrapper.classes()).not.toContain('border-gray-300');
		});
	});
});
