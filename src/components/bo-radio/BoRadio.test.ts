import { mount } from '@vue/test-utils';
import { describe, expect, fail, it } from 'vitest';
import BoRadio from './BoRadio.vue';
import { BoRadioSize, BoRadioState } from './bo-radio';

describe('BoRadio', () => {
	it('renders correctly with default props', () => {
		const wrapper = mount(BoRadio, {
			props: {
				modelValue: '',
			},
			global: {
				stubs: {
					'bo-text': true,
					'bo-icon': true,
				},
			},
		});

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('input[type="radio"]').exists()).toBe(true);
	});

	it('applies different sizes correctly', async () => {
		const wrapper = mount(BoRadio, {
			props: {
				modelValue: '',
				size: BoRadioSize.default,
			},
			global: {
				stubs: {
					'bo-text': true,
					'bo-icon': true,
				},
			},
		});

		const input = wrapper.find('input[type="radio"]');
		expect(input.classes()).toContain('h-4');
		expect(input.classes()).toContain('w-4');

		await wrapper.setProps({ size: BoRadioSize.small });
		expect(input.classes()).toContain('h-3');
		expect(input.classes()).toContain('w-3');

		await wrapper.setProps({ size: BoRadioSize.large });
		expect(input.classes()).toContain('h-5');
		expect(input.classes()).toContain('w-5');
	});

	it('disables the radio button when disabled prop is true', async () => {
		const wrapper = mount(BoRadio, {
			props: {
				modelValue: '',
				disabled: true,
			},
			global: {
				stubs: {
					'bo-text': true,
					'bo-icon': true,
				},
			},
		});

		const input = wrapper.find('input[type="radio"]');
		expect(input.attributes('disabled')).toBeDefined();
		expect(input.attributes('aria-disabled')).toBe('true');
		expect(input.classes()).toContain('cursor-not-allowed');
		expect(input.classes()).toContain('opacity-50');
	});

	it('applies readonly attribute when readonly prop is true', () => {
		const wrapper = mount(BoRadio, {
			props: {
				modelValue: '',
				readonly: true,
			},
			global: {
				stubs: {
					'bo-text': true,
					'bo-icon': true,
				},
			},
		});

		const input = wrapper.find('input[type="radio"]');
		expect(input.attributes('readonly')).toBeDefined();
	});

	it('applies required attribute when required prop is true', () => {
		const wrapper = mount(BoRadio, {
			props: {
				modelValue: '',
				required: true,
			},
			global: {
				stubs: {
					'bo-text': true,
					'bo-icon': true,
				},
			},
		});

		const input = wrapper.find('input[type="radio"]');
		expect(input.attributes('required')).toBeDefined();
	});

	it('applies name attribute when name prop is provided', () => {
		const wrapper = mount(BoRadio, {
			props: {
				modelValue: '',
				name: 'test-radio',
			},
			global: {
				stubs: {
					'bo-text': true,
					'bo-icon': true,
				},
			},
		});

		const input = wrapper.find('input[type="radio"]');
		expect(input.attributes('name')).toBe('test-radio');
	});

	it('displays title when title prop is provided', () => {
		const wrapper = mount(BoRadio, {
			props: {
				modelValue: '',
				title: 'Radio Title',
			},
		});

		expect(wrapper.html()).toContain('Radio Title');
	});

	it('shows required indicator when required and title is provided', () => {
		const wrapper = mount(BoRadio, {
			props: {
				modelValue: '',
				title: 'Radio Title',
				required: true,
			},
		});

		expect(wrapper.find('.text-red-500').exists()).toBe(true);
		expect(wrapper.find('.text-red-500').text()).toBe('*');
		expect(wrapper.find('.sr-only').text()).toBe('(required)');
	});

	it('displays description when description prop is provided', () => {
		const wrapper = mount(BoRadio, {
			props: {
				modelValue: '',
				description: 'Radio Description',
			},
		});

		expect(wrapper.html()).toContain('Radio Description');
	});

	it('applies invalid state correctly', async () => {
		const wrapper = mount(BoRadio, {
			props: {
				modelValue: '',
				state: BoRadioState.invalid,
				errorMessage: 'Error message',
			},
			global: {
				stubs: {
					'bo-text': true,
					'bo-icon': true,
				},
			},
		});

		const input = wrapper.find('input[type="radio"]');
		expect(input.attributes('aria-invalid')).toBe('true');
		expect(input.classes()).toContain('border-red-500');
		expect(input.classes()).toContain('focus:ring-red-500');

		// Check if error message is displayed
		expect(wrapper.find('[role="alert"]').exists()).toBe(true);
		expect(wrapper.html()).toContain('Error message');
	});

	it('applies valid state correctly', async () => {
		const wrapper = mount(BoRadio, {
			props: {
				modelValue: '',
				state: BoRadioState.valid,
			},
			global: {
				stubs: {
					'bo-text': true,
					'bo-icon': true,
				},
			},
		});

		const input = wrapper.find('input[type="radio"]');
		expect(input.classes()).toContain('border-green-500');
		expect(input.classes()).toContain('focus:ring-green-500');
	});

	it('emits update:modelValue event when radio is clicked', async () => {
		const wrapper = mount(BoRadio, {
			props: {
				modelValue: '',
				value: 'option1',
			},
			global: {
				stubs: {
					'bo-text': true,
					'bo-icon': true,
				},
			},
		});

		await wrapper.find('input[type="radio"]').setValue(true);
		const emitted = wrapper.emitted('update:modelValue');
		expect(emitted).toBeTruthy();
		if (emitted) {
			expect(emitted[0]).toEqual(['option1']);
		}
	});

	it('emits change event when radio is clicked', async () => {
		const wrapper = mount(BoRadio, {
			props: {
				modelValue: '',
				value: 'option1',
			},
			global: {
				stubs: {
					'bo-text': true,
					'bo-icon': true,
				},
			},
		});

		await wrapper.find('input[type="radio"]').trigger('change');
		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('emits focus event when radio is focused', async () => {
		const wrapper = mount(BoRadio, {
			props: {
				modelValue: '',
			},
			global: {
				stubs: {
					'bo-text': true,
					'bo-icon': true,
				},
			},
		});

		await wrapper.find('input[type="radio"]').trigger('focus');
		expect(wrapper.emitted('focus')).toBeTruthy();
	});

	it('emits blur event when radio loses focus', async () => {
		const wrapper = mount(BoRadio, {
			props: {
				modelValue: '',
			},
			global: {
				stubs: {
					'bo-text': true,
					'bo-icon': true,
				},
			},
		});

		await wrapper.find('input[type="radio"]').trigger('blur');
		expect(wrapper.emitted('blur')).toBeTruthy();
	});

	it('uses provided id for input', () => {
		const wrapper = mount(BoRadio, {
			props: {
				modelValue: '',
				id: 'custom-radio-id',
			},
			global: {
				stubs: {
					'bo-text': true,
					'bo-icon': true,
				},
			},
		});

		const input = wrapper.find('input[type="radio"]');
		expect(input.attributes('id')).toBe('custom-radio-id');
	});

	it('sets aria-describedby when description or error message is provided', async () => {
		const wrapper = mount(BoRadio, {
			props: {
				modelValue: '',
				description: 'Radio Description',
			},
			global: {
				stubs: {
					'bo-text': true,
					'bo-icon': true,
				},
			},
		});

		const input = wrapper.find('input[type="radio"]');
		expect(input.attributes('aria-describedby')).toBeDefined();

		// Add error message and set invalid state
		await wrapper.setProps({
			errorMessage: 'Error message',
			state: BoRadioState.invalid,
		});

		// Should now include both description and error ids
		const ariaDescribedBy = input.attributes('aria-describedby');
		if (ariaDescribedBy) {
			expect(ariaDescribedBy.split(' ').length).toBe(2);
		} else {
			fail('aria-describedby attribute not found');
		}
	});
});
