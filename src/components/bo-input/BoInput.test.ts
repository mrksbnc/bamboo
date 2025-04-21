import { Icon } from '@/components/bo-icon';
import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import type { BoInputPill } from './bo-input';
import { BoInputSize, BoInputState, BoInputType, BoInputVariant } from './bo-input';
import BoInput from './BoInput.vue';

describe('BoInput.vue', () => {
	// Basic rendering tests
	it('renders with default props', () => {
		const wrapper = mount(BoInput);
		expect(wrapper.classes()).toContain('bo-input');
		expect(wrapper.find('input').exists()).toBe(true);
	});

	it('renders with label', () => {
		const wrapper = mount(BoInput, {
			props: { label: 'Test Label' },
		});
		expect(wrapper.find('.bo-input__label').text()).toBe('Test Label');
	});

	it('renders with placeholder', () => {
		const wrapper = mount(BoInput, {
			props: { placeholder: 'Enter text' },
		});
		expect(wrapper.find('input').attributes('placeholder')).toBe('Enter text');
	});

	// Icon tests
	it('renders with prefix icon', () => {
		const wrapper = mount(BoInput, {
			props: { prefixIcon: Icon.search },
		});
		expect(wrapper.find('.bo-input__prefix-icon').exists()).toBe(true);
	});

	it('renders with suffix icon', () => {
		const wrapper = mount(BoInput, {
			props: { suffixIcon: Icon.x },
		});
		expect(wrapper.find('.bo-input__suffix-icon').exists()).toBe(true);
	});

	it('emits prefix icon click event', async () => {
		const wrapper = mount(BoInput, {
			props: { prefixIcon: Icon.search },
		});
		await wrapper.find('.bo-input__prefix-icon').trigger('click');
		expect(wrapper.emitted('prefixIconClick')).toBeTruthy();
	});

	it('emits suffix icon click event', async () => {
		const wrapper = mount(BoInput, {
			props: { suffixIcon: Icon.x },
		});
		await wrapper.find('.bo-input__suffix-icon').trigger('click');
		expect(wrapper.emitted('suffixIconClick')).toBeTruthy();
	});

	// State tests
	it('renders as disabled', () => {
		const wrapper = mount(BoInput, {
			props: { disabled: true },
		});
		expect(wrapper.classes()).toContain('bo-input--disabled');
		expect(wrapper.find('input').attributes('disabled')).toBeDefined();
		expect(wrapper.find('input').attributes('aria-disabled')).toBe('true');
	});

	it('renders as readonly', () => {
		const wrapper = mount(BoInput, {
			props: { readonly: true },
		});
		expect(wrapper.classes()).toContain('bo-input--readonly');
		expect(wrapper.find('input').attributes('readonly')).toBeDefined();
		expect(wrapper.find('input').attributes('aria-readonly')).toBe('true');
	});

	it('renders as required', () => {
		const wrapper = mount(BoInput, {
			props: { required: true },
		});
		expect(wrapper.find('.bo-input__required').exists()).toBe(true);
		expect(wrapper.find('input').attributes('required')).toBeDefined();
		expect(wrapper.find('input').attributes('aria-required')).toBe('true');
	});

	// Variant tests
	it('renders with default variant', () => {
		const wrapper = mount(BoInput, {
			props: { variant: BoInputVariant.default },
		});
		expect(wrapper.classes()).toContain('bo-input--default');
	});

	it('renders with outline variant', () => {
		const wrapper = mount(BoInput, {
			props: { variant: BoInputVariant.outline },
		});
		expect(wrapper.classes()).toContain('bo-input--outline');
	});

	// State tests
	it('renders with error state', () => {
		const wrapper = mount(BoInput, {
			props: { state: BoInputState.error, error: 'Invalid input' },
		});
		expect(wrapper.classes()).toContain('bo-input--error');
		expect(wrapper.find('.bo-input__error').text()).toBe('Invalid input');
		expect(wrapper.find('input').attributes('aria-invalid')).toBe('true');
	});

	it('renders with success state', () => {
		const wrapper = mount(BoInput, {
			props: { state: BoInputState.success },
		});
		expect(wrapper.classes()).toContain('bo-input--success');
	});

	it('renders with warning state', () => {
		const wrapper = mount(BoInput, {
			props: { state: BoInputState.warning },
		});
		expect(wrapper.classes()).toContain('bo-input--warning');
	});

	// Size tests
	it('renders with extra small size', () => {
		const wrapper = mount(BoInput, {
			props: { size: BoInputSize.extra_small },
		});
		expect(wrapper.classes()).toContain('bo-input--extra-small');
	});

	it('renders with small size', () => {
		const wrapper = mount(BoInput, {
			props: { size: BoInputSize.small },
		});
		expect(wrapper.classes()).toContain('bo-input--small');
	});

	it('renders with default size', () => {
		const wrapper = mount(BoInput, {
			props: { size: BoInputSize.default },
		});
		expect(wrapper.classes()).toContain('bo-input--default');
	});

	it('renders with large size', () => {
		const wrapper = mount(BoInput, {
			props: { size: BoInputSize.large },
		});
		expect(wrapper.classes()).toContain('bo-input--large');
	});

	it('renders with extra large size', () => {
		const wrapper = mount(BoInput, {
			props: { size: BoInputSize.extra_large },
		});
		expect(wrapper.classes()).toContain('bo-input--extra-large');
	});

	// Type tests
	it('renders as text type', () => {
		const wrapper = mount(BoInput, {
			props: { type: BoInputType.text },
		});
		expect(wrapper.find('input').attributes('type')).toBe('text');
	});

	it('renders as password type', () => {
		const wrapper = mount(BoInput, {
			props: { type: BoInputType.password },
		});
		expect(wrapper.find('input').attributes('type')).toBe('password');
	});

	it('renders as number type', () => {
		const wrapper = mount(BoInput, {
			props: { type: BoInputType.number },
		});
		expect(wrapper.find('input').attributes('type')).toBe('number');
	});

	it('renders as email type', () => {
		const wrapper = mount(BoInput, {
			props: { type: BoInputType.email },
		});
		expect(wrapper.find('input').attributes('type')).toBe('email');
	});

	// Event tests
	it('emits update:modelValue on input', async () => {
		const wrapper = mount(BoInput);
		await wrapper.find('input').setValue('test');
		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
		expect(wrapper.emitted('update:modelValue')![0]).toEqual(['test']);
	});

	it('emits focus event', async () => {
		const wrapper = mount(BoInput);
		await wrapper.find('input').trigger('focus');
		expect(wrapper.emitted('focus')).toBeTruthy();
	});

	it('emits blur event', async () => {
		const wrapper = mount(BoInput);
		await wrapper.find('input').trigger('blur');
		expect(wrapper.emitted('blur')).toBeTruthy();
	});

	it('emits change event', async () => {
		const wrapper = mount(BoInput);
		await wrapper.find('input').setValue('test');
		await wrapper.find('input').trigger('change');
		expect(wrapper.emitted('change')).toBeTruthy();
		expect(wrapper.emitted('change')![0]).toEqual(['test']);
	});

	// Accessibility tests
	it('has proper ARIA attributes', () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				description: 'Test Description',
				error: 'Test Error',
				required: true,
			},
		});
		const input = wrapper.find('input');
		expect(input.attributes('aria-label')).toBe('Test Label');
		expect(input.attributes('aria-describedby')).toBeDefined();
		expect(input.attributes('aria-required')).toBe('true');
		expect(input.attributes('aria-invalid')).toBe('true');
	});

	it('has proper ARIA attributes when disabled', () => {
		const wrapper = mount(BoInput, {
			props: { disabled: true },
		});
		const input = wrapper.find('input');
		expect(input.attributes('aria-disabled')).toBe('true');
	});

	it('has proper ARIA attributes when readonly', () => {
		const wrapper = mount(BoInput, {
			props: { readonly: true },
		});
		const input = wrapper.find('input');
		expect(input.attributes('aria-readonly')).toBe('true');
	});

	// Edge cases
	it('handles empty model value', () => {
		const wrapper = mount(BoInput, {
			props: { modelValue: '' },
		});
		expect(wrapper.find('input').element.value).toBe('');
	});

	it('handles null model value', () => {
		const wrapper = mount(BoInput, {
			props: { modelValue: null },
		});
		expect(wrapper.find('input').element.value).toBe('');
	});

	it('handles undefined model value', () => {
		const wrapper = mount(BoInput, {
			props: { modelValue: undefined },
		});
		expect(wrapper.find('input').element.value).toBe('');
	});

	// Custom content tests
	it('renders with custom top right content', () => {
		const wrapper = mount(BoInput, {
			slots: {
				topRightContent: '<span class="custom-content">Custom</span>',
			},
		});
		expect(wrapper.find('.custom-content').exists()).toBe(true);
	});

	// Focus management
	it('handles focus state', async () => {
		const wrapper = mount(BoInput);
		await wrapper.find('input').trigger('focus');
		expect(wrapper.classes()).toContain('bo-input--focused');
	});

	// Password visibility toggle
	it('toggles password visibility', async () => {
		const wrapper = mount(BoInput, {
			props: { type: BoInputType.password, revealPassword: true },
		});
		await wrapper.find('.bo-input__password-toggle').trigger('click');
		expect(wrapper.find('input').attributes('type')).toBe('text');
		await wrapper.find('.bo-input__password-toggle').trigger('click');
		expect(wrapper.find('input').attributes('type')).toBe('password');
	});

	// Pills functionality
	it('renders with pills', () => {
		const wrapper = mount(BoInput, {
			props: { pills: ['pill1', 'pill2'] },
		});
		expect(wrapper.findAll('.bo-input__pill').length).toBe(2);
	});

	it('emits pill remove event', async () => {
		const wrapper = mount(BoInput, {
			props: { pills: ['pill1'] },
		});
		await wrapper.find('.bo-input__pill').trigger('click');
		expect(wrapper.emitted('pillRemove')).toBeTruthy();
	});

	// Keyboard interactions
	it('handles keyboard events', async () => {
		const wrapper = mount(BoInput);
		await wrapper.find('input').trigger('keydown.enter');
		expect(wrapper.emitted('keydown')).toBeTruthy();
	});

	// Custom class/style handling
	it('handles custom class names', () => {
		const wrapper = mount(BoInput, {
			props: { class: 'custom-class' },
		});
		expect(wrapper.classes()).toContain('custom-class');
	});

	it('handles custom styles', () => {
		const wrapper = mount(BoInput, {
			props: { style: { backgroundColor: 'red' } },
		});
		expect(wrapper.attributes('style')).toContain('background-color: red');
	});

	it('handles custom input pills', () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				pills: ['test'] as BoInputPill[],
			},
		});
		expect(wrapper.find('.bo-input-pills').exists()).toBe(true);
	});

	it('handles custom input pill colors', () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				pills: ['test'] as BoInputPill[],
				pillColor: 'primary',
			},
		});
		expect(wrapper.find('.bo-input-pill').classes()).toContain('bo-input-pill--primary');
	});

	it('handles custom input pill sizes', () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				pills: ['test'] as BoInputPill[],
				pillSize: 'small',
			},
		});
		expect(wrapper.find('.bo-input-pill').classes()).toContain('bo-input-pill--small');
	});
});

describe('BoInput.vue - Additional Edge Cases and Accessibility', () => {
	it('handles dynamic state changes', async () => {
		const wrapper = mount(BoInput, {
			props: { modelValue: 'test' },
		});

		// Test disabled state change
		await wrapper.setProps({ disabled: true });
		expect(wrapper.classes()).toContain('bo-input--disabled');
		expect(wrapper.find('input').attributes('aria-disabled')).toBe('true');

		// Test error state change
		await wrapper.setProps({ state: BoInputState.error, error: 'Invalid input' });
		expect(wrapper.classes()).toContain('bo-input--error');
		expect(wrapper.find('input').attributes('aria-invalid')).toBe('true');

		// Test readonly state change
		await wrapper.setProps({ readonly: true });
		expect(wrapper.classes()).toContain('bo-input--readonly');
		expect(wrapper.find('input').attributes('aria-readonly')).toBe('true');
	});

	it('handles custom role attributes', () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				role: 'searchbox',
			},
		});
		expect(wrapper.find('input').attributes('role')).toBe('searchbox');
	});

	it('handles custom tabindex', () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				tabindex: -1,
			},
		});
		expect(wrapper.find('input').attributes('tabindex')).toBe('-1');
	});

	it('handles autocomplete attributes', () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				autocomplete: 'off',
			},
		});
		expect(wrapper.find('input').attributes('autocomplete')).toBe('off');
	});

	it('handles spellcheck attributes', () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				spellcheck: false,
			},
		});
		expect(wrapper.find('input').attributes('spellcheck')).toBe('false');
	});

	it('handles inputmode attributes', () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				inputmode: 'numeric',
			},
		});
		expect(wrapper.find('input').attributes('inputmode')).toBe('numeric');
	});

	it('handles pattern validation', () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				pattern: '[A-Za-z]{3}',
			},
		});
		expect(wrapper.find('input').attributes('pattern')).toBe('[A-Za-z]{3}');
	});

	it('handles min/max attributes for number input', () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				type: BoInputType.number,
				min: 0,
				max: 100,
			},
		});
		expect(wrapper.find('input').attributes('min')).toBe('0');
		expect(wrapper.find('input').attributes('max')).toBe('100');
	});

	it('handles step attribute for number input', () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				type: BoInputType.number,
				step: 0.1,
			},
		});
		expect(wrapper.find('input').attributes('step')).toBe('0.1');
	});

	it('handles maxlength attribute', () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				maxlength: 10,
			},
		});
		expect(wrapper.find('input').attributes('maxlength')).toBe('10');
	});

	it('handles minlength attribute', () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				minlength: 3,
			},
		});
		expect(wrapper.find('input').attributes('minlength')).toBe('3');
	});

	it('handles multiple states simultaneously', () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				disabled: true,
				readonly: true,
				required: true,
				state: BoInputState.error,
				error: 'Invalid input',
			},
		});
		expect(wrapper.classes()).toContain('bo-input--disabled');
		expect(wrapper.classes()).toContain('bo-input--readonly');
		expect(wrapper.classes()).toContain('bo-input--error');
		expect(wrapper.find('input').attributes('aria-disabled')).toBe('true');
		expect(wrapper.find('input').attributes('aria-readonly')).toBe('true');
		expect(wrapper.find('input').attributes('aria-required')).toBe('true');
		expect(wrapper.find('input').attributes('aria-invalid')).toBe('true');
	});

	it('handles custom validation messages', () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				state: BoInputState.error,
				error: 'Custom error message',
				success: 'Custom success message',
				warning: 'Custom warning message',
			},
		});
		expect(wrapper.find('.bo-input__error').text()).toBe('Custom error message');
		expect(wrapper.find('.bo-input__success').text()).toBe('Custom success message');
		expect(wrapper.find('.bo-input__warning').text()).toBe('Custom warning message');
	});

	it('handles custom validation patterns', () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				pattern: '[A-Za-z]{3}',
				title: 'Three letters only',
			},
		});
		expect(wrapper.find('input').attributes('pattern')).toBe('[A-Za-z]{3}');
		expect(wrapper.find('input').attributes('title')).toBe('Three letters only');
	});

	it('handles custom validation functions', async () => {
		const validate = vi.fn().mockReturnValue(true);
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				validate,
			},
		});
		await wrapper.find('input').setValue('test');
		expect(validate).toHaveBeenCalledWith('test');
	});

	it('handles custom input masks', () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				mask: '###-###-####',
			},
		});
		expect(wrapper.find('input').attributes('data-mask')).toBe('###-###-####');
	});

	it('handles custom input formatting', () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				format: 'currency',
			},
		});
		expect(wrapper.find('input').attributes('data-format')).toBe('currency');
	});

	it('handles custom input debouncing', async () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				debounce: 300,
			},
		});
		await wrapper.find('input').setValue('test');
		// Wait for debounce
		await new Promise((resolve) => setTimeout(resolve, 300));
		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
	});

	it('handles custom input throttling', async () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				throttle: 300,
			},
		});
		await wrapper.find('input').setValue('test');
		// Wait for throttle
		await new Promise((resolve) => setTimeout(resolve, 300));
		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
	});

	it('handles custom input validation on blur', async () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				validateOnBlur: true,
			},
		});
		await wrapper.find('input').setValue('test');
		await wrapper.find('input').trigger('blur');
		expect(wrapper.emitted('validate')).toBeTruthy();
	});

	it('handles custom input validation on change', async () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				validateOnChange: true,
			},
		});
		await wrapper.find('input').setValue('test');
		expect(wrapper.emitted('validate')).toBeTruthy();
	});

	it('handles custom input validation on input', async () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				validateOnInput: true,
			},
		});
		await wrapper.find('input').setValue('test');
		expect(wrapper.emitted('validate')).toBeTruthy();
	});

	it('handles custom input validation on keyup', async () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				validateOnKeyup: true,
			},
		});
		await wrapper.find('input').trigger('keyup');
		expect(wrapper.emitted('validate')).toBeTruthy();
	});

	it('handles custom input validation on paste', async () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				validateOnPaste: true,
			},
		});
		await wrapper.find('input').trigger('paste');
		expect(wrapper.emitted('validate')).toBeTruthy();
	});

	it('handles custom input validation on cut', async () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				validateOnCut: true,
			},
		});
		await wrapper.find('input').trigger('cut');
		expect(wrapper.emitted('validate')).toBeTruthy();
	});

	it('handles custom input validation on copy', async () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				validateOnCopy: true,
			},
		});
		await wrapper.find('input').trigger('copy');
		expect(wrapper.emitted('validate')).toBeTruthy();
	});

	it('handles custom input validation on drag', async () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				validateOnDrag: true,
			},
		});
		await wrapper.find('input').trigger('drag');
		expect(wrapper.emitted('validate')).toBeTruthy();
	});

	it('handles custom input validation on drop', async () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				validateOnDrop: true,
			},
		});
		await wrapper.find('input').trigger('drop');
		expect(wrapper.emitted('validate')).toBeTruthy();
	});

	it('handles custom input validation on focus', async () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				validateOnFocus: true,
			},
		});
		await wrapper.find('input').trigger('focus');
		expect(wrapper.emitted('validate')).toBeTruthy();
	});

	it('handles custom input validation on blur', async () => {
		const wrapper = mount(BoInput, {
			props: {
				label: 'Test Label',
				validateOnBlur: true,
			},
		});
		await wrapper.find('input').trigger('blur');
		expect(wrapper.emitted('validate')).toBeTruthy();
	});
});
