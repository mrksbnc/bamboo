import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test } from 'vitest';
import { nextTick } from 'vue';
import { BoCheckboxGroupOrientation } from './bo-checkbox-group.js';
import BoCheckboxGroup from './bo-checkbox-group.vue';
import BoCheckbox from './bo-checkbox.vue';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoCheckboxGroup, {
		props: {
			name: 'test-group',
		},
		slots: {
			default: `
				<bo-checkbox value="option1" label="Option 1" />
				<bo-checkbox value="option2" label="Option 2" />
				<bo-checkbox value="option3" label="Option 3" />
			`,
		},
		global: {
			components: {
				BoCheckbox,
			},
		},
	});
});

describe('BoCheckboxGroup', () => {
	suite('Basic Rendering', () => {
		test('should render checkbox group container', () => {
			expect(wrapper.find('.bo-checkbox-group').exists()).toBe(true);
		});

		test('should have correct test id', () => {
			expect(wrapper.find('[data-testid*="checkbox-group"]').exists()).toBe(true);
		});

		test('should render with custom name', () => {
			const customWrapper = mount(BoCheckboxGroup, {
				props: {
					name: 'custom-group',
				},
			});
			expect(customWrapper.find('[data-testid="custom-group-checkbox-group"]').exists()).toBe(true);
		});

		test('should have correct role attribute', () => {
			const container = wrapper.find('[data-testid*="checkbox-group"]');
			expect(container.attributes('role')).toBe('group');
		});
	});

	suite('Orientation', () => {
		test('should apply vertical orientation by default', () => {
			expect(wrapper.find('.bo-checkbox-group--vertical').exists()).toBe(true);
			expect(wrapper.find('.flex-col').exists()).toBe(true);
		});

		test('should apply horizontal orientation when specified', () => {
			const horizontalWrapper = mount(BoCheckboxGroup, {
				props: {
					orientation: BoCheckboxGroupOrientation.horizontal,
				},
			});
			expect(horizontalWrapper.find('.bo-checkbox-group--horizontal').exists()).toBe(true);
			expect(horizontalWrapper.find('.flex-row').exists()).toBe(true);
		});
	});

	suite('Model Value', () => {
		test('should emit update:modelValue when selection changes', async () => {
			const groupWrapper = mount(BoCheckboxGroup, {
				props: {
					name: 'test-group',
					modelValue: [],
				},
				slots: {
					default: `
						<bo-checkbox value="option1" label="Option 1" />
						<bo-checkbox value="option2" label="Option 2" />
					`,
				},
				global: {
					components: {
						BoCheckbox,
					},
				},
			});

			const checkboxes = groupWrapper.findAllComponents(BoCheckbox);
			await checkboxes[0].trigger('click');

			const events = groupWrapper.emitted('update:modelValue');
			expect(events).toBeTruthy();
			expect(events![events!.length - 1]).toEqual([['option1']]);
		});

		test('should emit change event when selection changes', async () => {
			const groupWrapper = mount(BoCheckboxGroup, {
				props: {
					name: 'test-group',
					modelValue: [],
				},
				slots: {
					default: `
						<bo-checkbox value="option1" label="Option 1" />
						<bo-checkbox value="option2" label="Option 2" />
					`,
				},
				global: {
					components: {
						BoCheckbox,
					},
				},
			});

			const checkboxes = groupWrapper.findAllComponents(BoCheckbox);
			await checkboxes[0].trigger('click');

			const events = groupWrapper.emitted('change');
			expect(events).toHaveLength(1);
			expect(events![0]).toEqual([['option1']]);
		});

		test('should handle multiple selections', async () => {
			const groupWrapper = mount(BoCheckboxGroup, {
				props: {
					name: 'test-group',
					modelValue: [],
				},
				slots: {
					default: `
						<bo-checkbox value="option1" label="Option 1" />
						<bo-checkbox value="option2" label="Option 2" />
						<bo-checkbox value="option3" label="Option 3" />
					`,
				},
				global: {
					components: {
						BoCheckbox,
					},
				},
			});

			const checkboxes = groupWrapper.findAllComponents(BoCheckbox);

			// Select first checkbox
			await checkboxes[0].trigger('click');
			await nextTick();

			// Select third checkbox
			await checkboxes[2].trigger('click');
			await nextTick();

			const events = groupWrapper.emitted('update:modelValue');
			expect(events).toBeTruthy();
			expect(events!.length).toBeGreaterThanOrEqual(2);
			// Check that the final state contains both selections
			expect(events![events!.length - 1]).toEqual([['option1', 'option3']]);
		});

		test('should deselect when clicking selected checkbox', async () => {
			const groupWrapper = mount(BoCheckboxGroup, {
				props: {
					name: 'test-group',
					modelValue: ['option1'],
				},
				slots: {
					default: `
						<bo-checkbox value="option1" label="Option 1" />
						<bo-checkbox value="option2" label="Option 2" />
					`,
				},
				global: {
					components: {
						BoCheckbox,
					},
				},
			});

			const checkboxes = groupWrapper.findAllComponents(BoCheckbox);
			await checkboxes[0].trigger('click');

			const events = groupWrapper.emitted('update:modelValue');
			expect(events).toBeTruthy();
			expect(events![events!.length - 1]).toEqual([[]]);
		});
	});

	suite('Default Values', () => {
		test('should initialize with default values', () => {
			const defaultWrapper = mount(BoCheckboxGroup, {
				props: {
					name: 'test-group',
					defaultValue: ['option1', 'option3'],
				},
				slots: {
					default: `
						<bo-checkbox value="option1" label="Option 1" />
						<bo-checkbox value="option2" label="Option 2" />
						<bo-checkbox value="option3" label="Option 3" />
					`,
				},
				global: {
					components: {
						BoCheckbox,
					},
				},
			});

			// Check that the default values are set
			expect(defaultWrapper.vm.modelValue).toEqual(['option1', 'option3']);
		});

		test('should handle empty default values', () => {
			const emptyDefaultWrapper = mount(BoCheckboxGroup, {
				props: {
					name: 'test-group',
					defaultValue: [],
				},
				slots: {
					default: `
						<bo-checkbox value="option1" label="Option 1" />
						<bo-checkbox value="option2" label="Option 2" />
					`,
				},
				global: {
					components: {
						BoCheckbox,
					},
				},
			});

			expect(emptyDefaultWrapper.vm.modelValue).toEqual([]);
		});
	});

	suite('Disabled State', () => {
		test('should disable all checkboxes when group is disabled', () => {
			const disabledWrapper = mount(BoCheckboxGroup, {
				props: {
					name: 'test-group',
					disabled: true,
				},
				slots: {
					default: `
						<bo-checkbox value="option1" label="Option 1" />
						<bo-checkbox value="option2" label="Option 2" />
					`,
				},
				global: {
					components: {
						BoCheckbox,
					},
				},
			});

			const checkboxes = disabledWrapper.findAllComponents(BoCheckbox);
			checkboxes.forEach((checkbox) => {
				// Check that the checkbox input is disabled
				const input = checkbox.find('input[type="checkbox"]');
				expect(input.attributes('disabled')).toBeDefined();
			});
		});

		test('should not emit events when disabled', async () => {
			const disabledWrapper = mount(BoCheckboxGroup, {
				props: {
					name: 'test-group',
					disabled: true,
					modelValue: [],
				},
				slots: {
					default: `
						<bo-checkbox value="option1" label="Option 1" />
						<bo-checkbox value="option2" label="Option 2" />
					`,
				},
				global: {
					components: {
						BoCheckbox,
					},
				},
			});

			const checkboxes = disabledWrapper.findAllComponents(BoCheckbox);
			await checkboxes[0].trigger('click');

			expect(disabledWrapper.emitted('update:modelValue')).toBeFalsy();
			expect(disabledWrapper.emitted('change')).toBeFalsy();
		});
	});

	suite('Slot Content', () => {
		test('should render slot content', () => {
			const slotWrapper = mount(BoCheckboxGroup, {
				slots: {
					default: '<div class="custom-content">Custom Content</div>',
				},
			});

			expect(slotWrapper.find('.custom-content').exists()).toBe(true);
			expect(slotWrapper.find('.custom-content').text()).toBe('Custom Content');
		});

		test('should render multiple checkbox children', () => {
			const multipleWrapper = mount(BoCheckboxGroup, {
				props: {
					name: 'test-group',
				},
				slots: {
					default: `
						<bo-checkbox value="option1" label="Option 1" />
						<bo-checkbox value="option2" label="Option 2" />
						<bo-checkbox value="option3" label="Option 3" />
					`,
				},
				global: {
					components: {
						BoCheckbox,
					},
				},
			});

			expect(multipleWrapper.findAllComponents(BoCheckbox)).toHaveLength(3);
		});
	});

	suite('CSS Classes', () => {
		test('should have base checkbox group classes', () => {
			expect(wrapper.find('.bo-checkbox-group').exists()).toBe(true);
			expect(wrapper.find('.flex').exists()).toBe(true);
			expect(wrapper.find('.gap-2').exists()).toBe(true);
		});

		test('should apply orientation-specific classes', () => {
			// Vertical (default)
			expect(wrapper.find('.bo-checkbox-group--vertical').exists()).toBe(true);
			expect(wrapper.find('.flex-col').exists()).toBe(true);

			// Horizontal
			const horizontalWrapper = mount(BoCheckboxGroup, {
				props: {
					orientation: BoCheckboxGroupOrientation.horizontal,
				},
			});
			expect(horizontalWrapper.find('.bo-checkbox-group--horizontal').exists()).toBe(true);
			expect(horizontalWrapper.find('.flex-row').exists()).toBe(true);
		});
	});

	suite('Model Value Reactivity', () => {
		test('should react to external model value changes', async () => {
			const reactiveWrapper = mount(BoCheckboxGroup, {
				props: {
					name: 'test-group',
					modelValue: [],
				},
				slots: {
					default: `
						<bo-checkbox value="option1" label="Option 1" />
						<bo-checkbox value="option2" label="Option 2" />
					`,
				},
				global: {
					components: {
						BoCheckbox,
					},
				},
			});

			// Change model value externally
			await reactiveWrapper.setProps({ modelValue: ['option1'] });
			await nextTick();

			// Check that internal state is updated
			expect(reactiveWrapper.vm.modelValue).toEqual(['option1']);
		});

		test('should handle undefined model value', () => {
			const undefinedWrapper = mount(BoCheckboxGroup, {
				props: {
					name: 'test-group',
					modelValue: undefined,
				},
			});

			expect(undefinedWrapper.vm.modelValue).toEqual([]);
		});
	});

	suite('Edge Cases', () => {
		test('should handle empty group', () => {
			const emptyWrapper = mount(BoCheckboxGroup, {
				props: {
					name: 'empty-group',
				},
			});

			expect(emptyWrapper.find('.bo-checkbox-group').exists()).toBe(true);
		});

		test('should generate unique names', () => {
			const wrapper1 = mount(BoCheckboxGroup);
			const wrapper2 = mount(BoCheckboxGroup);

			const testId1 = wrapper1.find('[data-testid*="checkbox-group"]').attributes('data-testid');
			const testId2 = wrapper2.find('[data-testid*="checkbox-group"]').attributes('data-testid');

			expect(testId1).not.toBe(testId2);
		});

		test('should handle duplicate values gracefully', async () => {
			const duplicateWrapper = mount(BoCheckboxGroup, {
				props: {
					name: 'test-group',
					modelValue: [],
				},
				slots: {
					default: `
						<bo-checkbox value="option1" label="Option 1" />
						<bo-checkbox value="option1" label="Option 1 Duplicate" />
					`,
				},
				global: {
					components: {
						BoCheckbox,
					},
				},
			});

			const checkboxes = duplicateWrapper.findAllComponents(BoCheckbox);
			await checkboxes[0].trigger('click');

			// Should only add the value once
			const events = duplicateWrapper.emitted('update:modelValue');
			expect(events![0]).toEqual([['option1']]);
		});
	});
});
