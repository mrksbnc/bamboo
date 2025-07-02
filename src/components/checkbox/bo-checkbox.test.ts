import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test } from 'vitest';
import BoCheckbox from './bo-checkbox.vue';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoCheckbox, {
		props: {
			label: 'Test Checkbox',
			value: 'test-value',
		},
	});
});

describe('BoCheckbox', () => {
	suite('Basic Rendering', () => {
		test('should render checkbox container', () => {
			expect(wrapper.find('.bo-checkbox').exists()).toBe(true);
		});

		test('should have correct test id', () => {
			expect(wrapper.find('[data-testid*="checkbox"]').exists()).toBe(true);
		});

		test('should render with custom id', () => {
			const customWrapper = mount(BoCheckbox, {
				props: {
					id: 'custom-id',
					label: 'Test',
				},
			});
			expect(customWrapper.find('[data-testid="custom-id-checkbox"]').exists()).toBe(true);
		});

		test('should render input element', () => {
			const input = wrapper.find('input[type="checkbox"]');
			expect(input.exists()).toBe(true);
		});

		test('should render label when provided', () => {
			const label = wrapper.find('[data-testid*="checkbox-label"]');
			expect(label.exists()).toBe(true);
			expect(label.text()).toBe('Test Checkbox');
		});

		test('should render description when provided', () => {
			const descWrapper = mount(BoCheckbox, {
				props: {
					label: 'Test',
					description: 'Test description',
				},
			});
			const description = descWrapper.find('[data-testid*="checkbox-description"]');
			expect(description.exists()).toBe(true);
			expect(description.text()).toBe('Test description');
		});

		test('should not render label when not provided', () => {
			const noLabelWrapper = mount(BoCheckbox);
			expect(noLabelWrapper.find('[data-testid*="checkbox-label"]').exists()).toBe(false);
		});

		test('should not render description when not provided', () => {
			expect(wrapper.find('[data-testid*="checkbox-description"]').exists()).toBe(false);
		});
	});

	suite('Input Attributes', () => {
		test('should have correct input attributes', () => {
			const input = wrapper.find('input[type="checkbox"]');
			expect(input.attributes('type')).toBe('checkbox');
			expect(input.attributes('value')).toBe('test-value');
		});

		test('should set name attribute', () => {
			const nameWrapper = mount(BoCheckbox, {
				props: {
					name: 'test-name',
					label: 'Test',
				},
			});
			const input = nameWrapper.find('input[type="checkbox"]');
			expect(input.attributes('name')).toBe('test-name');
		});

		test('should link description with aria-describedby', () => {
			const descWrapper = mount(BoCheckbox, {
				props: {
					id: 'test-id',
					label: 'Test',
					description: 'Test description',
				},
			});
			const input = descWrapper.find('input[type="checkbox"]');
			expect(input.attributes('aria-describedby')).toBe('test-id-checkbox-description');
		});

		test('should not have aria-describedby when no description', () => {
			const input = wrapper.find('input[type="checkbox"]');
			expect(input.attributes('aria-describedby')).toBeUndefined();
		});
	});

	suite('Checked State', () => {
		test('should be checked when modelValue is true', async () => {
			const checkedWrapper = mount(BoCheckbox, {
				props: {
					modelValue: true,
					label: 'Test',
				},
			});
			const input = checkedWrapper.find('input[type="checkbox"]');
			expect(input.attributes('checked')).toBeDefined();
		});

		test('should update checked state when modelValue changes', async () => {
			const reactiveWrapper = mount(BoCheckbox, {
				props: {
					modelValue: false,
					label: 'Test',
				},
			});

			await reactiveWrapper.setProps({ modelValue: true });
			const input = reactiveWrapper.find('input[type="checkbox"]');
			expect(input.attributes('checked')).toBeDefined();
		});
	});

	suite('Click Interaction', () => {
		test('should emit update:modelValue on click', async () => {
			await wrapper.trigger('click');

			const events = wrapper.emitted('update:modelValue');
			expect(events).toHaveLength(1);
			expect(events![0]).toEqual([true]);
		});

		test('should emit change event on click', async () => {
			await wrapper.trigger('click');

			const events = wrapper.emitted('change');
			expect(events).toHaveLength(1);
			expect(events![0][0]).toBeInstanceOf(Event);
		});
	});

	suite('Keyboard Interaction', () => {
		test('should toggle on Space key', async () => {
			await wrapper.trigger('keydown', { key: 'Space' });

			const events = wrapper.emitted('update:modelValue');
			expect(events).toHaveLength(1);
			expect(events![0]).toEqual([true]);
		});

		test('should toggle on Enter key', async () => {
			await wrapper.trigger('keydown', { key: 'Enter' });

			const events = wrapper.emitted('update:modelValue');
			expect(events).toHaveLength(1);
			expect(events![0]).toEqual([true]);
		});

		test('should not toggle on other keys', async () => {
			await wrapper.trigger('keydown', { key: 'Escape' });
			await wrapper.trigger('keydown', { key: 'Tab' });

			expect(wrapper.emitted('update:modelValue')).toBeFalsy();
		});
	});

	suite('Disabled State', () => {
		test('should apply disabled classes when disabled', () => {
			const disabledWrapper = mount(BoCheckbox, {
				props: {
					disabled: true,
					label: 'Test',
				},
			});

			const container = disabledWrapper.find('.bo-checkbox');
			const input = disabledWrapper.find('input[type="checkbox"]');

			expect(container.classes()).toContain('cursor-not-allowed');
			expect(input.attributes('disabled')).toBeDefined();
		});

		test('should not emit events when disabled', async () => {
			const disabledWrapper = mount(BoCheckbox, {
				props: {
					disabled: true,
					label: 'Test',
				},
			});

			await disabledWrapper.trigger('click');
			await disabledWrapper.trigger('keydown', { key: 'Space' });

			expect(disabledWrapper.emitted('update:modelValue')).toBeFalsy();
			expect(disabledWrapper.emitted('change')).toBeFalsy();
		});

		test('should have tabindex -1 when disabled', () => {
			const disabledWrapper = mount(BoCheckbox, {
				props: {
					disabled: true,
					label: 'Test',
				},
			});

			const container = disabledWrapper.find('.bo-checkbox');
			expect(container.attributes('tabindex')).toBe('-1');
		});

		test('should have tabindex 0 when enabled', () => {
			const container = wrapper.find('.bo-checkbox');
			expect(container.attributes('tabindex')).toBe('0');
		});
	});

	suite('Slot Content', () => {
		test('should render custom label slot', () => {
			const slotWrapper = mount(BoCheckbox, {
				slots: {
					label: '<div class="custom-label">Custom Label</div>',
				},
			});

			expect(slotWrapper.find('.custom-label').exists()).toBe(true);
			expect(slotWrapper.find('.custom-label').text()).toBe('Custom Label');
		});

		test('should prefer slot over label prop', () => {
			const slotWrapper = mount(BoCheckbox, {
				props: {
					label: 'Prop Label',
				},
				slots: {
					label: '<div class="custom-label">Slot Label</div>',
				},
			});

			expect(slotWrapper.find('.custom-label').exists()).toBe(true);
			expect(slotWrapper.find('[data-testid*="checkbox-label"]').exists()).toBe(false);
		});
	});

	suite('CSS Classes', () => {
		test('should have base checkbox classes', () => {
			expect(wrapper.find('.bo-checkbox').exists()).toBe(true);
			expect(wrapper.find('.bo-checkbox__input').exists()).toBe(true);
			expect(wrapper.find('.bo-checkbox__text-wrapper').exists()).toBe(true);
		});

		test('should have interactive classes when enabled', () => {
			const container = wrapper.find('.bo-checkbox');
			const input = wrapper.find('.bo-checkbox__input');

			expect(container.classes()).toContain('cursor-pointer');
			expect(input.classes()).toContain('cursor-pointer');
		});

		test('should have disabled classes when disabled', () => {
			const disabledWrapper = mount(BoCheckbox, {
				props: {
					disabled: true,
					label: 'Test',
				},
			});

			const container = disabledWrapper.find('.bo-checkbox');
			const input = disabledWrapper.find('.bo-checkbox__input');
			const textWrapper = disabledWrapper.find('.bo-checkbox__text-wrapper');

			expect(container.classes()).toContain('cursor-not-allowed');
			expect(container.classes()).toContain('opacity-50');
			expect(input.classes()).toContain('cursor-not-allowed');
			expect(input.classes()).toContain('opacity-50');
			expect(textWrapper.classes()).toContain('opacity-50');
		});
	});

	suite('Exposed Properties', () => {
		test('should expose isChecked computed property', () => {
			const checkedWrapper = mount(BoCheckbox, {
				props: {
					modelValue: true,
					label: 'Test',
				},
			});

			expect(checkedWrapper.vm.isChecked).toBe(true);
		});

		test('should update exposed isChecked when modelValue changes', async () => {
			const reactiveWrapper = mount(BoCheckbox, {
				props: {
					modelValue: false,
					label: 'Test',
				},
			});

			expect(reactiveWrapper.vm.isChecked).toBe(false);

			await reactiveWrapper.setProps({ modelValue: true });
			expect(reactiveWrapper.vm.isChecked).toBe(true);
		});
	});

	suite('Edge Cases', () => {
		test('should handle undefined modelValue', () => {
			const undefinedWrapper = mount(BoCheckbox, {
				props: {
					modelValue: undefined,
					label: 'Test',
				},
			});

			expect(undefinedWrapper.find('.bo-checkbox').exists()).toBe(true);
		});

		test('should handle empty value prop', () => {
			const emptyValueWrapper = mount(BoCheckbox, {
				props: {
					value: '',
					label: 'Test',
				},
			});

			const input = emptyValueWrapper.find('input[type="checkbox"]');
			expect(input.attributes('value')).toBe('');
		});

		test('should handle missing props gracefully', () => {
			const minimalWrapper = mount(BoCheckbox);
			expect(minimalWrapper.find('.bo-checkbox').exists()).toBe(true);
		});

		test('should generate unique IDs', () => {
			const wrapper1 = mount(BoCheckbox, { props: { label: 'Test 1' } });
			const wrapper2 = mount(BoCheckbox, { props: { label: 'Test 2' } });

			const input1 = wrapper1.find('input[type="checkbox"]');
			const input2 = wrapper2.find('input[type="checkbox"]');

			expect(input1.attributes('id')).not.toBe(input2.attributes('id'));
		});
	});
});
