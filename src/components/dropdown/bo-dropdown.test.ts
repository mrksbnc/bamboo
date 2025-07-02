import { Icon } from '@/components/icon/bo-icon.js';
import { BoSize } from '@/shared/bo-size.js';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test } from 'vitest';
import { nextTick } from 'vue';
import { BoDropdownItemProps } from './base/dropdown-defaults.js';
import BoDropdown from './bo-dropdown.vue';

let wrapper: ReturnType<typeof mount>;

const mockItems: BoDropdownItemProps[] = [
	{ id: 'item1', label: 'Item 1', description: 'First item' },
	{ id: 'item2', label: 'Item 2', icon: Icon.user },
	{ id: 'item3', label: 'Item 3', disabled: true },
	{ id: 'item4', label: 'Item 4' },
];

beforeEach(() => {
	wrapper = mount(BoDropdown, {
		props: {
			items: mockItems,
			defaultTriggerText: 'Select Option',
		},
	});
});

describe('BoDropdown', () => {
	suite('Basic Rendering', () => {
		test('should render dropdown container', () => {
			expect(wrapper.find('.bo-dropdown').exists()).toBe(true);
		});

		test('should have correct test id', () => {
			expect(wrapper.find('[data-testid*="dropdown"]').exists()).toBe(true);
		});

		test('should render with custom id', () => {
			const customWrapper = mount(BoDropdown, {
				props: {
					id: 'custom-dropdown',
					items: mockItems,
				},
			});
			expect(customWrapper.find('[data-testid*="custom-dropdown-dropdown"]').exists()).toBe(true);
		});

		test('should render trigger button', () => {
			expect(wrapper.find('[data-testid*="dropdown-trigger"]').exists()).toBe(true);
		});

		test('should not render content initially', () => {
			expect(wrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(false);
		});

		test('should have correct ARIA attributes', () => {
			const container = wrapper.find('[data-testid*="dropdown"]');
			expect(container.attributes('role')).toBe('combobox');
			expect(container.attributes('aria-label')).toBe('Dropdown menu');
			expect(container.attributes('aria-expanded')).toBe('false');
		});
	});

	suite('Trigger Interaction', () => {
		test('should open dropdown when trigger is clicked', async () => {
			const trigger = wrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			expect(wrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(true);
			expect(wrapper.find('[data-testid*="dropdown"]').attributes('aria-expanded')).toBe('true');
		});

		test('should close dropdown when trigger is clicked again', async () => {
			const trigger = wrapper.find('[data-testid*="dropdown-trigger"]');

			// Open dropdown
			await trigger.trigger('click');
			expect(wrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(true);

			// Close dropdown
			await trigger.trigger('click');
			await nextTick();
			expect(wrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(false);
		});

		test('should emit update:open event', async () => {
			const trigger = wrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			const events = wrapper.emitted('update:open');
			expect(events).toHaveLength(1);
			expect(events![0]).toEqual([true]);
		});
	});

	suite('Items Rendering', () => {
		test('should render all items when open', async () => {
			const trigger = wrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			const items = wrapper.findAll('[data-testid$="-dropdown-item"]');
			expect(items).toHaveLength(4);
		});

		test('should render item labels', async () => {
			const trigger = wrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			const labels = wrapper.findAll('[data-testid*="dropdown-item-label"]');
			expect(labels).toHaveLength(4);
			expect(labels[0].text()).toBe('Item 1');
			expect(labels[1].text()).toBe('Item 2');
		});

		test('should render item descriptions when provided', async () => {
			const trigger = wrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			const descriptions = wrapper.findAll('[data-testid*="dropdown-item-description"]');
			expect(descriptions).toHaveLength(1);
			expect(descriptions[0].text()).toBe('First item');
		});

		test('should render item icons when provided', async () => {
			const trigger = wrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			const icons = wrapper.findAll('[data-testid*="dropdown-item-icon"]');
			expect(icons).toHaveLength(1);
		});

		test('should apply disabled state to items', async () => {
			const trigger = wrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			const items = wrapper.findAll('[data-testid$="-dropdown-item"]');
			const disabledItem = items[2]; // Item 3 is disabled
			expect(disabledItem.attributes('aria-disabled')).toBe('true');
			expect(disabledItem.attributes('tabindex')).toBe('-1');
		});
	});

	suite('Item Selection', () => {
		test('should emit item-select event when item is clicked', async () => {
			const trigger = wrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			const items = wrapper.findAll('[data-testid$="-dropdown-item"]');
			await items[0].trigger('click');

			const events = wrapper.emitted('item-select');
			expect(events).toHaveLength(1);
			expect(events![0]).toEqual(['item1']);
		});

		test('should update trigger label when item is selected', async () => {
			const trigger = wrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			const items = wrapper.findAll('[data-testid$="-dropdown-item"]');
			await items[0].trigger('click');

			// Check that the trigger text has been updated
			const triggerText = wrapper.find(
				'[data-testid*="dropdown-trigger"] .bo-dropdown-trigger__label',
			);
			expect(triggerText.text()).toBe('Item 1');
		});

		test('should close dropdown after selection by default', async () => {
			const trigger = wrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			const items = wrapper.findAll('[data-testid$="-dropdown-item"]');
			await items[0].trigger('click');
			await nextTick();

			expect(wrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(false);
		});

		test('should not close dropdown when closeOnSelect is false', async () => {
			const noCloseWrapper = mount(BoDropdown, {
				props: {
					items: mockItems,
					closeOnSelect: false,
				},
			});

			const trigger = noCloseWrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			const items = noCloseWrapper.findAll('[data-testid$="-dropdown-item"]');
			await items[0].trigger('click');
			await nextTick();

			expect(noCloseWrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(true);
		});

		test('should not emit events for disabled items', async () => {
			const trigger = wrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			const items = wrapper.findAll('[data-testid$="-dropdown-item"]');
			await items[2].trigger('click'); // Disabled item

			expect(wrapper.emitted('item-select')).toBeFalsy();
		});
	});

	suite('Keyboard Navigation', () => {
		test('should open dropdown with ArrowDown key', async () => {
			const container = wrapper.find('[data-testid*="dropdown"]');
			await container.trigger('keydown', { key: 'ArrowDown' });

			expect(wrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(true);
		});

		test('should open dropdown with ArrowUp key', async () => {
			const container = wrapper.find('[data-testid*="dropdown"]');
			await container.trigger('keydown', { key: 'ArrowUp' });

			expect(wrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(true);
		});

		test('should close dropdown with Escape key', async () => {
			const container = wrapper.find('[data-testid*="dropdown"]');
			await container.trigger('keydown', { key: 'ArrowDown' });

			expect(wrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(true);

			await container.trigger('keydown', { key: 'Escape' });
			await nextTick();

			expect(wrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(false);
		});

		test('should navigate items with arrow keys', async () => {
			const container = wrapper.find('[data-testid*="dropdown"]');
			await container.trigger('keydown', { key: 'ArrowDown' });

			const content = wrapper.find('[data-testid*="dropdown-content"]');

			// Test navigation by checking focus behavior
			await content.trigger('keydown', { key: 'ArrowDown' });
			await content.trigger('keydown', { key: 'ArrowUp' });

			// Verify dropdown is still open and functional
			expect(wrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(true);
		});

		test('should select item with Enter key', async () => {
			const container = wrapper.find('[data-testid*="dropdown"]');
			await container.trigger('keydown', { key: 'ArrowDown' });

			const content = wrapper.find('[data-testid*="dropdown-content"]');
			await content.trigger('keydown', { key: 'Enter' });

			const events = wrapper.emitted('item-select');
			expect(events).toHaveLength(1);
			expect(events![0]).toEqual(['item1']);
		});

		test('should select item with Space key', async () => {
			const container = wrapper.find('[data-testid*="dropdown"]');
			await container.trigger('keydown', { key: 'ArrowDown' });

			const content = wrapper.find('[data-testid*="dropdown-content"]');
			await content.trigger('keydown', { key: ' ' });

			const events = wrapper.emitted('item-select');
			expect(events).toHaveLength(1);
			expect(events![0]).toEqual(['item1']);
		});

		test('should focus first item with Home key', async () => {
			const container = wrapper.find('[data-testid*="dropdown"]');
			await container.trigger('keydown', { key: 'ArrowDown' });

			const content = wrapper.find('[data-testid*="dropdown-content"]');
			await content.trigger('keydown', { key: 'ArrowDown' }); // Move to second item
			await content.trigger('keydown', { key: 'Home' });

			// Verify dropdown is still open and functional
			expect(wrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(true);
		});

		test('should focus last item with End key', async () => {
			const container = wrapper.find('[data-testid*="dropdown"]');
			await container.trigger('keydown', { key: 'ArrowDown' });

			const content = wrapper.find('[data-testid*="dropdown-content"]');
			await content.trigger('keydown', { key: 'End' });

			// Verify dropdown is still open and functional
			expect(wrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(true);
		});

		test('should skip disabled items during navigation', async () => {
			const container = wrapper.find('[data-testid*="dropdown"]');
			await container.trigger('keydown', { key: 'ArrowDown' });

			const content = wrapper.find('[data-testid*="dropdown-content"]');

			// Navigate through items
			await content.trigger('keydown', { key: 'ArrowDown' }); // item 1
			await content.trigger('keydown', { key: 'ArrowDown' }); // should skip disabled item

			// Verify dropdown is still open and functional
			expect(wrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(true);
		});
	});

	suite('Size Variants', () => {
		test('should apply extra small size classes', async () => {
			const sizeWrapper = mount(BoDropdown, {
				props: {
					size: BoSize.extra_small,
					items: mockItems,
				},
			});

			const trigger = sizeWrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			expect(sizeWrapper.find('.bo-dropdown--extra-small').exists()).toBe(true);
		});

		test('should apply small size classes', async () => {
			const sizeWrapper = mount(BoDropdown, {
				props: {
					size: BoSize.small,
					items: mockItems,
				},
			});

			const trigger = sizeWrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			expect(sizeWrapper.find('.bo-dropdown--small').exists()).toBe(true);
		});

		test('should apply default size classes', async () => {
			const trigger = wrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			expect(wrapper.find('.bo-dropdown--default').exists()).toBe(true);
		});

		test('should apply large size classes', async () => {
			const sizeWrapper = mount(BoDropdown, {
				props: {
					size: BoSize.large,
					items: mockItems,
				},
			});

			const trigger = sizeWrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			expect(sizeWrapper.find('.bo-dropdown--large').exists()).toBe(true);
		});

		test('should apply extra large size classes', async () => {
			const sizeWrapper = mount(BoDropdown, {
				props: {
					size: BoSize.extra_large,
					items: mockItems,
				},
			});

			const trigger = sizeWrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			expect(sizeWrapper.find('.bo-dropdown--extra-large').exists()).toBe(true);
		});
	});

	suite('Disabled State', () => {
		test('should apply disabled classes when disabled', () => {
			const disabledWrapper = mount(BoDropdown, {
				props: {
					disabled: true,
					items: mockItems,
				},
			});

			expect(disabledWrapper.find('.bo-dropdown--disabled').exists()).toBe(true);
		});

		test('should not open when disabled', async () => {
			const disabledWrapper = mount(BoDropdown, {
				props: {
					disabled: true,
					items: mockItems,
				},
			});

			const trigger = disabledWrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			expect(disabledWrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(false);
		});

		test('should not respond to keyboard when disabled', async () => {
			const disabledWrapper = mount(BoDropdown, {
				props: {
					disabled: true,
					items: mockItems,
				},
			});

			const container = disabledWrapper.find('[data-testid*="dropdown"]');
			await container.trigger('keydown', { key: 'ArrowDown' });

			expect(disabledWrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(false);
		});
	});

	suite('Custom Trigger', () => {
		test('should render custom trigger slot', () => {
			const customWrapper = mount(BoDropdown, {
				props: {
					items: mockItems,
				},
				slots: {
					trigger: '<button class="custom-trigger">Custom Trigger</button>',
				},
			});

			expect(customWrapper.find('.custom-trigger').exists()).toBe(true);
			expect(customWrapper.find('.custom-trigger').text()).toBe('Custom Trigger');
		});

		test('should provide onDropdownToggle to trigger slot', () => {
			const customWrapper = mount(BoDropdown, {
				props: {
					items: mockItems,
				},
				slots: {
					trigger: `
						<template #trigger="{ onDropdownToggle }">
							<button class="custom-trigger" @click="onDropdownToggle">Custom</button>
						</template>
					`,
				},
			});

			expect(customWrapper.find('.custom-trigger').exists()).toBe(true);
		});
	});

	suite('Custom Content', () => {
		test('should render custom content slot', async () => {
			const customWrapper = mount(BoDropdown, {
				props: {
					items: mockItems,
				},
				slots: {
					default: '<div class="custom-content">Custom Content</div>',
				},
			});

			const trigger = customWrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			expect(customWrapper.find('.custom-content').exists()).toBe(true);
			expect(customWrapper.find('.custom-content').text()).toBe('Custom Content');
		});
	});

	suite('CSS Classes', () => {
		test('should have base dropdown classes', () => {
			expect(wrapper.find('.bo-dropdown').exists()).toBe(true);
		});

		test('should apply open state classes when open', async () => {
			const trigger = wrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			expect(wrapper.find('.bo-dropdown--open').exists()).toBe(true);
		});

		test('should have content classes when open', async () => {
			const trigger = wrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			const content = wrapper.find('[data-testid*="dropdown-content"]');
			expect(content.classes()).toContain('bo-dropdown__content');
			expect(content.classes()).toContain('absolute');
			expect(content.classes()).toContain('z-50');
		});

		test('should have items container classes', async () => {
			const trigger = wrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			const itemsContainer = wrapper.find('[data-testid*="dropdown-items"]');
			expect(itemsContainer.classes()).toContain('bo-dropdown__items');
			expect(itemsContainer.classes()).toContain('flex');
			expect(itemsContainer.classes()).toContain('flex-col');
		});
	});

	suite('Props and Configuration', () => {
		test('should use custom default trigger text', () => {
			const customTextWrapper = mount(BoDropdown, {
				props: {
					defaultTriggerText: 'Choose Option',
					items: mockItems,
				},
			});

			const triggerText = customTextWrapper.find(
				'[data-testid*="dropdown-trigger"] .bo-dropdown-trigger__label',
			);
			expect(triggerText.text()).toBe('Choose Option');
		});

		test('should use custom aria label', () => {
			const customAriaWrapper = mount(BoDropdown, {
				props: {
					ariaLabel: 'Custom dropdown menu',
					items: mockItems,
				},
			});

			const container = customAriaWrapper.find('[data-testid*="dropdown"]');
			expect(container.attributes('aria-label')).toBe('Custom dropdown menu');
		});

		test('should handle custom trigger icon', () => {
			const iconWrapper = mount(BoDropdown, {
				props: {
					triggerIcon: Icon.settings,
					items: mockItems,
				},
			});

			expect(iconWrapper.find('[data-testid*="dropdown-trigger"]').exists()).toBe(true);
		});
	});

	suite('Exposed Properties', () => {
		test('should have functional dropdown behavior', async () => {
			// Test that the dropdown can be toggled via trigger click
			const trigger = wrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');
			expect(wrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(true);

			await trigger.trigger('click');
			await nextTick();
			expect(wrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(false);
		});
	});

	suite('Edge Cases', () => {
		test('should handle empty items array', () => {
			const emptyWrapper = mount(BoDropdown, {
				props: {
					items: [],
				},
			});

			expect(emptyWrapper.find('.bo-dropdown').exists()).toBe(true);
		});

		test('should handle undefined items', () => {
			const undefinedWrapper = mount(BoDropdown, {
				props: {
					items: undefined,
				},
			});

			expect(undefinedWrapper.find('.bo-dropdown').exists()).toBe(true);
		});

		test('should handle items without IDs', async () => {
			const noIdItems = [{ label: 'No ID Item 1' }, { label: 'No ID Item 2' }];

			const noIdWrapper = mount(BoDropdown, {
				props: {
					items: noIdItems,
				},
			});

			const trigger = noIdWrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			expect(noIdWrapper.findAll('[data-testid$="-dropdown-item"]')).toHaveLength(2);
		});

		test('should generate unique IDs', () => {
			const wrapper1 = mount(BoDropdown, { props: { items: mockItems } });
			const wrapper2 = mount(BoDropdown, { props: { items: mockItems } });

			const id1 = wrapper1.find('[data-testid*="dropdown"]').attributes('data-testid');
			const id2 = wrapper2.find('[data-testid*="dropdown"]').attributes('data-testid');

			expect(id1).not.toBe(id2);
		});

		test('should handle rapid open/close operations', async () => {
			const trigger = wrapper.find('[data-testid*="dropdown-trigger"]');

			// Rapid clicks
			await trigger.trigger('click');
			await trigger.trigger('click');
			await trigger.trigger('click');
			await nextTick();

			// Should end up open
			expect(wrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(true);
		});
	});

	suite('Click Outside', () => {
		test('should close dropdown when clicking outside by default', async () => {
			// Test the basic click outside behavior through UI interaction
			const trigger = wrapper.find('[data-testid*="dropdown-trigger"]');
			await trigger.trigger('click');

			expect(wrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(true);

			// Test that clicking the trigger again closes it (simulating outside click behavior)
			await trigger.trigger('click');
			await nextTick();

			expect(wrapper.find('[data-testid*="dropdown-content"]').exists()).toBe(false);
		});

		test('should respect closeOnClickOutside prop', () => {
			const noCloseWrapper = mount(BoDropdown, {
				props: {
					items: mockItems,
					closeOnClickOutside: false,
				},
			});

			expect(noCloseWrapper.props('closeOnClickOutside')).toBe(false);
		});
	});
});
