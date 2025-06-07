import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { nextTick, ref } from 'vue';
import { BoRadioGroupOrientation } from './bo-radio-group.js';
import BoRadioGroup from './bo-radio-group.vue';

const defaultProps = {
	name: 'test-group',
};

const mountComponent = (props = {}, options = {}) => {
	return mount(BoRadioGroup, {
		props: { ...defaultProps, ...props },
		...options,
	});
};

describe('BoRadioGroup', () => {
	describe('rendering', () => {
		it('should render radio group with default props', () => {
			const wrapper = mountComponent();

			expect(wrapper.find('[data-testid*="radio-group"]').exists()).toBe(true);
			expect(wrapper.find('[role="radiogroup"]').exists()).toBe(true);
		});

		it('should render with custom name in data-testid', () => {
			const wrapper = mountComponent({ name: 'custom-group' });

			expect(wrapper.find('[data-testid="custom-group-radio-group"]').exists()).toBe(true);
		});

		it('should apply vertical orientation classes by default', () => {
			const wrapper = mountComponent();
			const container = wrapper.find('[data-testid*="radio-group"]');

			expect(container.classes()).toContain('bo-radio-group--vertical');
			expect(container.classes()).toContain('flex');
			expect(container.classes()).toContain('flex-col');
		});

		it('should apply horizontal orientation classes when specified', () => {
			const wrapper = mountComponent({
				orientation: BoRadioGroupOrientation.horizontal,
			});
			const container = wrapper.find('[data-testid*="radio-group"]');

			expect(container.classes()).toContain('bo-radio-group--horizontal');
			expect(container.classes()).toContain('flex');
			expect(container.classes()).toContain('flex-row');
		});
	});

	describe('accessibility', () => {
		it('should have radiogroup role', () => {
			const wrapper = mountComponent();

			expect(wrapper.find('[role="radiogroup"]').exists()).toBe(true);
		});

		it('should set aria-labelledby when provided', () => {
			const wrapper = mountComponent({ ariaLabelledBy: 'group-label' });
			const container = wrapper.find('[data-testid*="radio-group"]');

			expect(container.attributes('aria-labelledby')).toBe('group-label');
		});

		it('should set aria-describedby when provided', () => {
			const wrapper = mountComponent({ ariaDescribedBy: 'group-description' });
			const container = wrapper.find('[data-testid*="radio-group"]');

			expect(container.attributes('aria-describedby')).toBe('group-description');
		});

		it('should not set aria attributes when not provided', () => {
			const wrapper = mountComponent();
			const container = wrapper.find('[data-testid*="radio-group"]');

			expect(container.attributes('aria-labelledby')).toBeUndefined();
			expect(container.attributes('aria-describedby')).toBeUndefined();
		});
	});

	describe('v-model functionality', () => {
		it('should work with v-model', async () => {
			const modelValue = ref('');
			const wrapper = mount(BoRadioGroup, {
				props: {
					name: 'test-group',
					'onUpdate:modelValue': (value: string) => {
						modelValue.value = value;
					},
				},
			});

			// Simulate selecting a value
			const component = wrapper.vm as any;
			component.select('option1');

			await nextTick();
			expect(modelValue.value).toBe('option1');
		});

		it('should initialize with default value', async () => {
			const wrapper = mountComponent({ defaultValue: 'initial' });

			// Register an item with the default value
			const component = wrapper.vm as any;
			component.registerItem('initial', false);

			await nextTick();
			expect(component.selectedValue).toBe('initial');
		});

		it('should update modelValue when default value matches registered item', async () => {
			const modelValue = ref('');
			const wrapper = mount(BoRadioGroup, {
				props: {
					name: 'test-group',
					defaultValue: 'default-option',
					'onUpdate:modelValue': (value: string) => {
						modelValue.value = value;
					},
				},
			});

			// Register the default item
			const component = wrapper.vm as any;
			component.registerItem('default-option', false);

			await nextTick();
			expect(modelValue.value).toBe('default-option');
		});
	});

	describe('events', () => {
		it('should emit update:modelValue when value changes', async () => {
			const wrapper = mountComponent();

			const component = wrapper.vm as any;
			component.select('new-value');

			await nextTick();
			expect(wrapper.emitted('update:modelValue')).toBeTruthy();
			expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['new-value']);
		});

		it('should emit change when value changes', async () => {
			const wrapper = mountComponent();

			const component = wrapper.vm as any;
			component.select('new-value');

			await nextTick();
			expect(wrapper.emitted('change')).toBeTruthy();
			expect(wrapper.emitted('change')?.[0]).toEqual(['new-value']);
		});

		it('should not emit events when disabled', async () => {
			const wrapper = mountComponent({ disabled: true });

			const component = wrapper.vm as any;
			component.select('new-value');

			await nextTick();
			expect(wrapper.emitted('update:modelValue')).toBeFalsy();
			expect(wrapper.emitted('change')).toBeFalsy();
		});
	});

	describe('item registration', () => {
		it('should register items without duplication', async () => {
			const wrapper = mountComponent();
			const component = wrapper.vm as any;

			component.registerItem('item1', false);
			component.registerItem('item1', false); // Duplicate
			component.registerItem('item2', false);

			await nextTick();
			expect(component.registeredItems.size).toBe(2);
			expect(component.registeredItems.has('item1')).toBe(true);
			expect(component.registeredItems.has('item2')).toBe(true);
		});

		it('should set item as selected when isDefault is true', async () => {
			const modelValue = ref('');
			const wrapper = mount(BoRadioGroup, {
				props: {
					name: 'test-group',
					'onUpdate:modelValue': (value: string) => {
						modelValue.value = value;
					},
				},
			});

			const component = wrapper.vm as any;
			component.registerItem('default-item', true);

			await nextTick();
			expect(component.selectedValue).toBe('default-item');
			expect(modelValue.value).toBe('default-item');
		});

		it('should prioritize defaultValue prop over isDefault parameter', async () => {
			const wrapper = mountComponent({ defaultValue: 'prop-default' });
			const component = wrapper.vm as any;

			// Register non-default item first
			component.registerItem('other-item', true);
			// Then register the prop default
			component.registerItem('prop-default', false);

			await nextTick();
			expect(component.selectedValue).toBe('prop-default');
		});
	});

	describe('orientation variants', () => {
		it('should handle all orientation values', () => {
			const verticalWrapper = mountComponent({
				orientation: BoRadioGroupOrientation.vertical,
			});
			expect(verticalWrapper.find('.bo-radio-group--vertical').exists()).toBe(true);

			const horizontalWrapper = mountComponent({
				orientation: BoRadioGroupOrientation.horizontal,
			});
			expect(horizontalWrapper.find('.bo-radio-group--horizontal').exists()).toBe(true);
		});
	});

	describe('provide/inject context', () => {
		it('should provide radio group context to children', () => {
			const wrapper = mountComponent({
				name: 'context-test',
				disabled: true,
			});

			const component = wrapper.vm as any;

			// The provided context should include all necessary properties
			expect(component.selectedValue).toBeDefined();
			expect(typeof component.select).toBe('function');
			expect(typeof component.registerItem).toBe('function');
		});
	});

	describe('disabled state', () => {
		it('should not allow selection when disabled', async () => {
			const wrapper = mountComponent({ disabled: true });
			const component = wrapper.vm as any;

			const initialValue = component.selectedValue;
			component.select('new-value');

			await nextTick();
			expect(component.selectedValue).toBe(initialValue);
		});

		it('should still register items when disabled', async () => {
			const wrapper = mountComponent({ disabled: true });
			const component = wrapper.vm as any;

			component.registerItem('item1', false);

			await nextTick();
			expect(component.registeredItems.has('item1')).toBe(true);
		});
	});

	describe('slots', () => {
		it('should render slot content', () => {
			const wrapper = mount(BoRadioGroup, {
				props: { name: 'test-group' },
				slots: {
					default: '<div class="slot-content">Radio options here</div>',
				},
			});

			expect(wrapper.find('.slot-content').exists()).toBe(true);
			expect(wrapper.find('.slot-content').text()).toBe('Radio options here');
		});
	});

	describe('edge cases', () => {
		it('should handle empty name gracefully', () => {
			const wrapper = mountComponent({ name: '' });

			expect(wrapper.find('[data-testid="-radio-group"]').exists()).toBe(true);
		});

		it('should handle undefined defaultValue', () => {
			const wrapper = mountComponent({ defaultValue: undefined });
			const component = wrapper.vm as any;

			component.registerItem('test-item', false);

			// Should not throw error
			expect(component.selectedValue).toBe('');
		});

		it('should maintain selection state across re-renders', async () => {
			const wrapper = mountComponent();
			const component = wrapper.vm as any;

			component.select('persistent-value');
			await nextTick();

			// Force re-render
			await wrapper.setProps({ orientation: BoRadioGroupOrientation.horizontal });

			expect(component.selectedValue).toBe('persistent-value');
		});
	});
});
