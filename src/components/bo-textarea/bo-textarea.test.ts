import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import BoTextarea from './bo-textarea.vue';
import { BoSize } from '@/shared/size';

describe('BoTextarea', () => {
	test('should render with required props', () => {
		const wrapper = mount(BoTextarea);
		expect(wrapper.find('textarea').exists()).toBe(true);
	});

	test('should bind modelValue', async () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: 'Test value',
			},
		});

		expect(wrapper.find('textarea').element.value).toBe('Test value');
	});

	test('should emit update:modelValue on input', async () => {
		const wrapper = mount(BoTextarea);
		const textarea = wrapper.find('textarea');

		await textarea.setValue('New value');

		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
		expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['New value']);
	});

	test('should render label when provided', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				label: 'Test Label',
			},
		});

		expect(wrapper.find('.bo-textarea__label-wrapper').exists()).toBe(true);
		expect(wrapper.text()).toContain('Test Label');
	});

	test('should show required indicator', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				label: 'Test',
				required: true,
			},
		});

		expect(wrapper.text()).toContain('*');
	});

	test('should apply disabled state', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				disabled: true,
			},
		});

		expect(wrapper.find('textarea').attributes('disabled')).toBeDefined();
		expect(wrapper.find('textarea').classes()).toContain('bo-textarea__field--disabled');
	});

	test('should apply readonly state', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				readonly: true,
			},
		});

		expect(wrapper.find('textarea').attributes('readonly')).toBeDefined();
		expect(wrapper.find('textarea').classes()).toContain('bo-textarea__field--readonly');
	});

	test('should show error message', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				error: 'Error message',
			},
		});

		expect(wrapper.text()).toContain('Error message');
		expect(wrapper.find('textarea').classes()).toContain('bo-textarea__field--error');
	});

	test('should show helper text', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				helperText: 'Helper text',
			},
		});

		expect(wrapper.text()).toContain('Helper text');
	});

	test('should show character count', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: 'Test',
				maxLength: 100,
				showCount: true,
			},
		});

		expect(wrapper.text()).toContain('4/100');
	});

	test('should apply correct size classes', () => {
		const sizes = [BoSize.xs, BoSize.sm, BoSize.md, BoSize.lg, BoSize.xl];

		for (const size of sizes) {
			const wrapper = mount(BoTextarea, {
				props: { size },
			});

			expect(wrapper.find('textarea').classes()).toContain(`bo-textarea__field--size-${size}`);
		}
	});

	test('should emit blur event', async () => {
		const wrapper = mount(BoTextarea);
		await wrapper.find('textarea').trigger('blur');

		expect(wrapper.emitted('blur')).toBeTruthy();
	});
});
