import { Icon } from '@/components/icon/bo-icon.js';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test } from 'vitest';
import { nextTick } from 'vue';
import { BoInputSize, BoInputState, BoInputType } from './bo-input.js';
import BoInput from './bo-input.vue';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoInput, {
		props: {
			modelValue: '',
		},
	});
});

describe('BoInput', () => {
	suite('Basic Rendering', () => {
		test('should render input wrapper', () => {
			expect(wrapper.find('[data-testid*="input-wrapper"]').exists()).toBe(true);
		});

		test('should render input field', () => {
			expect(wrapper.find('[data-testid*="input-field"]').exists()).toBe(true);
		});

		test('should have correct base classes', () => {
			const wrapper_element = wrapper.find('[data-testid*="input-wrapper"]');
			expect(wrapper_element.classes()).toContain('bo-input-wrapper');
		});

		test('should render with custom id', () => {
			const customWrapper = mount(BoInput, {
				props: {
					id: 'custom-input',
					modelValue: '',
				},
			});
			expect(customWrapper.find('[data-testid="custom-input-input-wrapper"]').exists()).toBe(true);
		});

		test('should generate unique IDs when not provided', () => {
			const wrapper1 = mount(BoInput, { props: { modelValue: '' } });
			const wrapper2 = mount(BoInput, { props: { modelValue: '' } });

			const id1 = wrapper1.find('[data-testid*="input-wrapper"]').attributes('data-testid');
			const id2 = wrapper2.find('[data-testid*="input-wrapper"]').attributes('data-testid');

			expect(id1).not.toBe(id2);
		});
	});

	suite('Props and Attributes', () => {
		test('should render with label', () => {
			const labelWrapper = mount(BoInput, {
				props: {
					label: 'Email Address',
					modelValue: '',
				},
			});

			expect(labelWrapper.find('[data-testid*="input-label"]').exists()).toBe(true);
			expect(labelWrapper.find('[data-testid*="input-label"]').text()).toBe('Email Address');
		});

		test('should render with placeholder', () => {
			const placeholderWrapper = mount(BoInput, {
				props: {
					placeholder: 'Enter your email',
					modelValue: '',
				},
			});

			const input = placeholderWrapper.find('input');
			expect(input.attributes('placeholder')).toBe('Enter your email');
		});

		test('should handle disabled state', () => {
			const disabledWrapper = mount(BoInput, {
				props: {
					disabled: true,
					modelValue: '',
				},
			});

			const input = disabledWrapper.find('input');
			expect(input.attributes('disabled')).toBeDefined();
		});

		test('should handle readonly state', () => {
			const readonlyWrapper = mount(BoInput, {
				props: {
					readonly: true,
					modelValue: '',
				},
			});

			const input = readonlyWrapper.find('input');
			expect(input.attributes('readonly')).toBeDefined();
		});

		test('should handle required state', () => {
			const requiredWrapper = mount(BoInput, {
				props: {
					required: true,
					modelValue: '',
				},
			});

			const input = requiredWrapper.find('input');
			expect(input.attributes('required')).toBeDefined();
			expect(input.attributes('aria-required')).toBe('true');
		});
	});

	suite('Size Variants', () => {
		test('should apply small size classes', () => {
			const sizeWrapper = mount(BoInput, {
				props: {
					size: BoInputSize.small,
					modelValue: '',
				},
			});

			const input = sizeWrapper.find('input');
			expect(input.classes()).toContain('h-9');
			expect(input.classes()).toContain('text-sm');
		});

		test('should apply default size classes', () => {
			const sizeWrapper = mount(BoInput, {
				props: {
					size: BoInputSize.default,
					modelValue: '',
				},
			});

			const input = sizeWrapper.find('input');
			expect(input.classes()).toContain('h-10');
			expect(input.classes()).toContain('text-sm');
		});

		test('should apply large size classes', () => {
			const sizeWrapper = mount(BoInput, {
				props: {
					size: BoInputSize.large,
					modelValue: '',
				},
			});

			const input = sizeWrapper.find('input');
			expect(input.classes()).toContain('h-11');
			expect(input.classes()).toContain('text-lg');
		});
	});

	suite('Input Types', () => {
		test('should handle text type', () => {
			const typeWrapper = mount(BoInput, {
				props: {
					type: BoInputType.text,
					modelValue: '',
				},
			});

			const input = typeWrapper.find('input');
			expect(input.attributes('type')).toBe('text');
		});

		test('should handle email type', () => {
			const typeWrapper = mount(BoInput, {
				props: {
					type: BoInputType.email,
					modelValue: '',
				},
			});

			const input = typeWrapper.find('input');
			expect(input.attributes('type')).toBe('email');
		});

		test('should handle password type', () => {
			const typeWrapper = mount(BoInput, {
				props: {
					type: BoInputType.password,
					modelValue: '',
				},
			});

			const input = typeWrapper.find('input');
			expect(input.attributes('type')).toBe('password');
		});

		test('should handle number type', () => {
			const typeWrapper = mount(BoInput, {
				props: {
					type: BoInputType.number,
					modelValue: '',
				},
			});

			const input = typeWrapper.find('input');
			expect(input.attributes('type')).toBe('number');
		});
	});

	suite('State Variants', () => {
		test('should apply default state classes', () => {
			const input = wrapper.find('input');
			expect(input.classes()).toContain('border-neutral-300');
		});

		test('should apply error state classes', () => {
			const errorWrapper = mount(BoInput, {
				props: {
					state: BoInputState.error,
					modelValue: '',
				},
			});

			const input = errorWrapper.find('input');
			expect(input.classes()).toContain('border-red-500');
		});

		test('should apply success state classes', () => {
			const successWrapper = mount(BoInput, {
				props: {
					state: BoInputState.success,
					modelValue: '',
				},
			});

			const input = successWrapper.find('input');
			expect(input.classes()).toContain('border-green-500');
		});

		test('should apply warning state classes', () => {
			const warningWrapper = mount(BoInput, {
				props: {
					state: BoInputState.warning,
					modelValue: '',
				},
			});

			const input = warningWrapper.find('input');
			expect(input.classes()).toContain('border-yellow-500');
		});
	});

	suite('Icons', () => {
		test('should render prefix icon', () => {
			const iconWrapper = mount(BoInput, {
				props: {
					prefixIcon: Icon.user,
					modelValue: '',
				},
			});

			expect(iconWrapper.find('[data-testid*="input-prefix-icon"]').exists()).toBe(true);
		});

		test('should render suffix icon', () => {
			const iconWrapper = mount(BoInput, {
				props: {
					suffixIcon: Icon.search,
					modelValue: '',
				},
			});

			expect(iconWrapper.find('[data-testid*="input-suffix-icon"]').exists()).toBe(true);
		});

		test('should apply correct padding with prefix icon', () => {
			const iconWrapper = mount(BoInput, {
				props: {
					prefixIcon: Icon.user,
					modelValue: '',
				},
			});

			const input = iconWrapper.find('input');
			expect(input.classes()).toContain('pl-8');
		});

		test('should apply correct padding with suffix icon', () => {
			const iconWrapper = mount(BoInput, {
				props: {
					suffixIcon: Icon.search,
					modelValue: '',
				},
			});

			const input = iconWrapper.find('input');
			expect(input.classes()).toContain('pr-8');
		});

		test('should not render icons when Icon.none', () => {
			const noIconWrapper = mount(BoInput, {
				props: {
					prefixIcon: Icon.none,
					suffixIcon: Icon.none,
					modelValue: '',
				},
			});

			expect(noIconWrapper.find('[data-testid*="input-prefix-icon"]').exists()).toBe(false);
			expect(noIconWrapper.find('[data-testid*="input-suffix-icon"]').exists()).toBe(false);
		});
	});

	suite('Helper Content', () => {
		test('should render description', () => {
			const descWrapper = mount(BoInput, {
				props: {
					description: 'Enter a valid email address',
					modelValue: '',
				},
			});

			expect(descWrapper.find('[data-testid*="input-description"]').exists()).toBe(true);
			expect(descWrapper.find('[data-testid*="input-description"]').text()).toBe(
				'Enter a valid email address',
			);
		});

		test('should render error message', () => {
			const errorWrapper = mount(BoInput, {
				props: {
					error: 'This field is required',
					modelValue: '',
				},
			});

			expect(errorWrapper.find('[data-testid*="input-error"]').exists()).toBe(true);
		});

		test('should render required message when required and no error', () => {
			const requiredWrapper = mount(BoInput, {
				props: {
					required: true,
					modelValue: '',
				},
			});

			expect(requiredWrapper.find('[data-testid*="input-required-message"]').exists()).toBe(true);
		});

		test('should not render required message when error exists', () => {
			const errorRequiredWrapper = mount(BoInput, {
				props: {
					required: true,
					error: 'Custom error message',
					modelValue: '',
				},
			});

			expect(errorRequiredWrapper.find('[data-testid*="input-required-message"]').exists()).toBe(
				false,
			);
			expect(errorRequiredWrapper.find('[data-testid*="input-error"]').exists()).toBe(true);
		});
	});

	suite('Events', () => {
		test('should emit change event on input', async () => {
			const input = wrapper.find('input');
			await input.setValue('test value');

			const changeEvents = wrapper.emitted('change');
			expect(changeEvents).toBeTruthy();
			expect(changeEvents![changeEvents!.length - 1]).toEqual(['test value']);
		});

		test('should emit focus event', async () => {
			const input = wrapper.find('input');
			await input.trigger('focus');

			expect(wrapper.emitted('focus')).toBeTruthy();
		});

		test('should emit blur event', async () => {
			const input = wrapper.find('input');
			await input.trigger('blur');

			expect(wrapper.emitted('blur')).toBeTruthy();
		});

		test('should update model value', async () => {
			await wrapper.setProps({ modelValue: 'initial value' });

			const input = wrapper.find('input');
			expect(input.element.value).toBe('initial value');

			await input.setValue('new value');
			await nextTick();

			const updateEvents = wrapper.emitted('update:modelValue');
			expect(updateEvents).toBeTruthy();
			expect(updateEvents![updateEvents!.length - 1]).toEqual(['new value']);
		});
	});

	suite('Accessibility', () => {
		test('should have correct ARIA attributes', () => {
			const accessibilityWrapper = mount(BoInput, {
				props: {
					label: 'Email',
					required: true,
					modelValue: '',
				},
			});

			const input = accessibilityWrapper.find('input');
			expect(input.attributes('aria-required')).toBe('true');
			expect(input.attributes('aria-labelledby')).toBeTruthy();
		});

		test('should have aria-invalid when in error state', () => {
			const errorWrapper = mount(BoInput, {
				props: {
					state: BoInputState.error,
					modelValue: '',
				},
			});

			const input = errorWrapper.find('input');
			expect(input.attributes('aria-invalid')).toBe('true');
		});

		test('should have aria-describedby when helper content exists', () => {
			const helperWrapper = mount(BoInput, {
				props: {
					description: 'Helper text',
					modelValue: '',
				},
			});

			const input = helperWrapper.find('input');
			expect(input.attributes('aria-describedby')).toBeTruthy();
		});

		test('should have custom aria-label', () => {
			const ariaWrapper = mount(BoInput, {
				props: {
					ariaLabel: 'Search input',
					modelValue: '',
				},
			});

			const input = ariaWrapper.find('input');
			expect(input.attributes('aria-label')).toBe('Search input');
		});
	});

	suite('Responsive and Styling', () => {
		test('should have proper wrapper structure', () => {
			const wrapper = mount(BoInput, {
				props: {
					modelValue: '',
				},
			});

			expect(wrapper.find('.bo-input-wrapper').exists()).toBe(true);
		});

		test('should apply transition classes', () => {
			const wrapper = mount(BoInput, {
				props: {
					modelValue: '',
				},
			});

			const wrapperElement = wrapper.find('[data-testid*="input-wrapper"]');
			expect(wrapperElement.classes()).toContain('transition-all');
			expect(wrapperElement.classes()).toContain('duration-200');
		});
	});

	suite('Edge Cases', () => {
		test('should handle empty model value', () => {
			const emptyWrapper = mount(BoInput, {
				props: {
					modelValue: '',
				},
			});

			const input = emptyWrapper.find('input');
			expect(input.element.value).toBe('');
		});

		test('should handle undefined optional props', () => {
			const minimalWrapper = mount(BoInput, {
				props: {
					modelValue: '',
					label: undefined,
					description: undefined,
					error: undefined,
				},
			});

			expect(minimalWrapper.find('[data-testid*="input-field"]').exists()).toBe(true);
		});

		test('should handle both prefix and suffix icons', () => {
			const bothIconsWrapper = mount(BoInput, {
				props: {
					prefixIcon: Icon.user,
					suffixIcon: Icon.search,
					modelValue: '',
				},
			});

			const input = bothIconsWrapper.find('input');
			expect(input.classes()).toContain('pl-8');
			expect(input.classes()).toContain('pr-8');
		});
	});

	suite('Component Integration', () => {
		test('should expose input functionality', () => {
			const input = wrapper.find('input');
			expect(input.exists()).toBe(true);
		});

		test('should have input container structure', () => {
			const container = wrapper.find('[data-testid*="input-container"]');
			expect(container.exists()).toBe(true);
		});
	});
});
