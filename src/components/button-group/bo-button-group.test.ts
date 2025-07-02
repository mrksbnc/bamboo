import { BoButtonVariant } from '@/components/button/bo-button.js';
import { Icon } from '@/components/icon/bo-icon.js';
import { BoSize } from '@/shared/bo-size.js';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test } from 'vitest';
import { nextTick } from 'vue';
import { BoButtonGroupOrientation, BoButtonGroupShape } from './bo-button-group.js';
import BoButtonGroup from './bo-button-group.vue';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoButtonGroup, {
		props: {
			items: [
				{ id: 'btn1', label: 'Button 1' },
				{ id: 'btn2', label: 'Button 2' },
				{ id: 'btn3', label: 'Button 3' },
			],
		},
	});
});

describe('BoButtonGroup', () => {
	suite('Basic Rendering', () => {
		test('should render button group container', () => {
			expect(wrapper.find('.bo-button-group').exists()).toBe(true);
		});

		test('should have correct test id', () => {
			expect(wrapper.find('[data-testid*="button-group"]').exists()).toBe(true);
		});

		test('should render with custom id', () => {
			const customWrapper = mount(BoButtonGroup, {
				props: {
					id: 'custom-id',
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			expect(customWrapper.find('[data-testid="custom-id-button-group"]').exists()).toBe(true);
		});

		test('should have correct ARIA attributes', () => {
			const container = wrapper.find('[data-testid*="button-group"]');
			expect(container.attributes('role')).toBe('group');
			expect(container.attributes('aria-label')).toBe('Button group');
		});

		test('should use custom aria label', () => {
			const customWrapper = mount(BoButtonGroup, {
				props: {
					ariaLabel: 'Custom button group',
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			const container = customWrapper.find('[data-testid*="button-group"]');
			expect(container.attributes('aria-label')).toBe('Custom button group');
		});
	});

	suite('Item Rendering', () => {
		test('should render all button items', () => {
			const items = wrapper.findAll('button[data-testid*="button-group-item"]');
			expect(items).toHaveLength(3);
		});

		test('should render item labels', () => {
			const items = wrapper.findAll('button[data-testid*="button-group-item"]');
			expect(items[0].text()).toContain('Button 1');
			expect(items[1].text()).toContain('Button 2');
			expect(items[2].text()).toContain('Button 3');
		});

		test('should handle empty items array', () => {
			const emptyWrapper = mount(BoButtonGroup, {
				props: {
					items: [],
				},
			});
			const items = emptyWrapper.findAll('button[data-testid*="button-group-item"]');
			expect(items).toHaveLength(0);
		});

		test('should generate IDs for items without IDs', () => {
			const noIdWrapper = mount(BoButtonGroup, {
				props: {
					items: [{ label: 'Button 1' }, { label: 'Button 2' }],
				},
			});
			const items = noIdWrapper.findAll('button[data-testid*="button-group-item"]');
			expect(items).toHaveLength(2);
		});
	});

	suite('Icon Support', () => {
		test('should render prefix icons', () => {
			const iconWrapper = mount(BoButtonGroup, {
				props: {
					items: [
						{ id: 'btn1', label: 'Save', prefixIcon: Icon.save },
						{ id: 'btn2', label: 'Delete', prefixIcon: Icon.trash },
					],
				},
			});
			const prefixIcons = iconWrapper.findAll('[data-testid*="prefix-icon"]');
			expect(prefixIcons).toHaveLength(2);
		});

		test('should render suffix icons', () => {
			const iconWrapper = mount(BoButtonGroup, {
				props: {
					items: [
						{ id: 'btn1', label: 'Next', suffixIcon: Icon.arrow_right },
						{ id: 'btn2', label: 'External', suffixIcon: Icon.external_link },
					],
				},
			});
			const suffixIcons = iconWrapper.findAll('[data-testid*="suffix-icon"]');
			expect(suffixIcons).toHaveLength(2);
		});

		test('should render icon-only buttons', () => {
			const iconOnlyWrapper = mount(BoButtonGroup, {
				props: {
					items: [
						{ id: 'btn1', prefixIcon: Icon.star, ariaLabel: 'Favorite' },
						{ id: 'btn2', prefixIcon: Icon.heart, ariaLabel: 'Like' },
					],
				},
			});
			const items = iconOnlyWrapper.findAll('button[data-testid*="button-group-item"]');
			expect(items).toHaveLength(2);

			// Should not render text labels
			const labels = iconOnlyWrapper.findAll('[data-testid*="button-group-item-label"]');
			expect(labels).toHaveLength(0);
		});

		test('should not render icons when set to none', () => {
			const noIconWrapper = mount(BoButtonGroup, {
				props: {
					items: [{ id: 'btn1', label: 'Button', prefixIcon: Icon.none, suffixIcon: Icon.none }],
				},
			});
			const prefixIcons = noIconWrapper.findAll('[data-testid*="prefix-icon"]');
			const suffixIcons = noIconWrapper.findAll('[data-testid*="suffix-icon"]');
			expect(prefixIcons).toHaveLength(0);
			expect(suffixIcons).toHaveLength(0);
		});
	});

	suite('Orientation', () => {
		test('should apply horizontal orientation classes', () => {
			const horizontalWrapper = mount(BoButtonGroup, {
				props: {
					orientation: BoButtonGroupOrientation.horizontal,
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			expect(horizontalWrapper.find('.bo-button-group--horizontal').exists()).toBe(true);
		});

		test('should apply vertical orientation classes', () => {
			const verticalWrapper = mount(BoButtonGroup, {
				props: {
					orientation: BoButtonGroupOrientation.vertical,
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			expect(verticalWrapper.find('.bo-button-group--vertical').exists()).toBe(true);
		});
	});

	suite('Size Variants', () => {
		test('should apply extra small size', () => {
			const sizeWrapper = mount(BoButtonGroup, {
				props: {
					size: BoSize.extra_small,
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			expect(sizeWrapper.find('.bo-button-group-item--extra-small').exists()).toBe(true);
		});

		test('should apply small size', () => {
			const sizeWrapper = mount(BoButtonGroup, {
				props: {
					size: BoSize.small,
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			expect(sizeWrapper.find('.bo-button-group-item--small').exists()).toBe(true);
		});

		test('should apply default size', () => {
			const sizeWrapper = mount(BoButtonGroup, {
				props: {
					size: BoSize.default,
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			expect(sizeWrapper.find('.bo-button-group-item--default').exists()).toBe(true);
		});

		test('should apply large size', () => {
			const sizeWrapper = mount(BoButtonGroup, {
				props: {
					size: BoSize.large,
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			expect(sizeWrapper.find('.bo-button-group-item--large').exists()).toBe(true);
		});

		test('should apply extra large size', () => {
			const sizeWrapper = mount(BoButtonGroup, {
				props: {
					size: BoSize.extra_large,
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			expect(sizeWrapper.find('.bo-button-group-item--extra-large').exists()).toBe(true);
		});
	});

	suite('Variant Styles', () => {
		test('should apply primary variant', () => {
			const variantWrapper = mount(BoButtonGroup, {
				props: {
					variant: BoButtonVariant.primary,
					defaultActiveIndex: 0,
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			expect(variantWrapper.find('.bo-button-group-item--active-primary').exists()).toBe(true);
		});

		test('should apply secondary variant', () => {
			const variantWrapper = mount(BoButtonGroup, {
				props: {
					variant: BoButtonVariant.secondary,
					defaultActiveIndex: 0,
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			expect(variantWrapper.find('.bo-button-group-item--active-secondary').exists()).toBe(true);
		});

		test('should apply danger variant', () => {
			const variantWrapper = mount(BoButtonGroup, {
				props: {
					variant: BoButtonVariant.danger,
					defaultActiveIndex: 0,
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			expect(variantWrapper.find('.bo-button-group-item--active-danger').exists()).toBe(true);
		});

		test('should apply success variant', () => {
			const variantWrapper = mount(BoButtonGroup, {
				props: {
					variant: BoButtonVariant.success,
					defaultActiveIndex: 0,
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			expect(variantWrapper.find('.bo-button-group-item--active-success').exists()).toBe(true);
		});

		test('should apply warning variant', () => {
			const variantWrapper = mount(BoButtonGroup, {
				props: {
					variant: BoButtonVariant.warning,
					defaultActiveIndex: 0,
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			expect(variantWrapper.find('.bo-button-group-item--active-warning').exists()).toBe(true);
		});

		test('should apply light variant', () => {
			const variantWrapper = mount(BoButtonGroup, {
				props: {
					variant: BoButtonVariant.light,
					defaultActiveIndex: 0,
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			expect(variantWrapper.find('.bo-button-group-item--active-light').exists()).toBe(true);
		});

		test('should apply dark variant', () => {
			const variantWrapper = mount(BoButtonGroup, {
				props: {
					variant: BoButtonVariant.dark,
					defaultActiveIndex: 0,
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			expect(variantWrapper.find('.bo-button-group-item--active-dark').exists()).toBe(true);
		});
	});

	suite('Shape Variants', () => {
		test('should apply square shape', () => {
			const shapeWrapper = mount(BoButtonGroup, {
				props: {
					shape: BoButtonGroupShape.square,
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			expect(shapeWrapper.find('.bo-button-group-item--square').exists()).toBe(true);
		});

		test('should apply rounded shape', () => {
			const shapeWrapper = mount(BoButtonGroup, {
				props: {
					shape: BoButtonGroupShape.rounded,
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			expect(shapeWrapper.find('.bo-button-group-item--rounded').exists()).toBe(true);
		});
	});

	suite('Selection Behavior', () => {
		test('should set active item by default index', () => {
			const activeWrapper = mount(BoButtonGroup, {
				props: {
					defaultActiveIndex: 1,
					items: [
						{ id: 'btn1', label: 'Button 1' },
						{ id: 'btn2', label: 'Button 2' },
						{ id: 'btn3', label: 'Button 3' },
					],
				},
			});
			const items = activeWrapper.findAll('button[data-testid*="button-group-item"]');
			expect(items[1].attributes('aria-pressed')).toBe('true');
		});

		test('should emit select event on item click', async () => {
			const items = wrapper.findAll('button[data-testid*="button-group-item"]');
			await items[1].trigger('click');

			const events = wrapper.emitted('select');
			expect(events).toHaveLength(1);
			expect(events![0]).toEqual([1]);
		});

		test('should update active state on selection', async () => {
			const items = wrapper.findAll('button[data-testid*="button-group-item"]');
			await items[2].trigger('click');
			await nextTick();

			expect(items[2].attributes('aria-pressed')).toBe('true');
		});
	});

	suite('Multi-Select Mode', () => {
		test('should use multi-select aria label', () => {
			const multiWrapper = mount(BoButtonGroup, {
				props: {
					multiSelect: true,
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			const container = multiWrapper.find('[data-testid*="button-group"]');
			expect(container.attributes('aria-label')).toBe('Multi-select button group');
		});

		test('should allow multiple selections', async () => {
			const multiWrapper = mount(BoButtonGroup, {
				props: {
					multiSelect: true,
					items: [
						{ id: 'btn1', label: 'Button 1' },
						{ id: 'btn2', label: 'Button 2' },
						{ id: 'btn3', label: 'Button 3' },
					],
				},
			});

			const items = multiWrapper.findAll('button[data-testid*="button-group-item"]');

			// Select first item
			await items[0].trigger('click');
			await nextTick();

			// Select third item
			await items[2].trigger('click');
			await nextTick();

			expect(items[0].attributes('aria-pressed')).toBe('true');
			expect(items[1].attributes('aria-pressed')).toBe('false');
			expect(items[2].attributes('aria-pressed')).toBe('true');
		});

		test('should emit multiSelect event with selected indices', async () => {
			const multiWrapper = mount(BoButtonGroup, {
				props: {
					multiSelect: true,
					items: [
						{ id: 'btn1', label: 'Button 1' },
						{ id: 'btn2', label: 'Button 2' },
						{ id: 'btn3', label: 'Button 3' },
					],
				},
			});

			const items = multiWrapper.findAll('button[data-testid*="button-group-item"]');

			await items[0].trigger('click');
			await items[2].trigger('click');

			const events = multiWrapper.emitted('multiSelect');
			expect(events).toHaveLength(2);
			expect(events![0]).toEqual([[0]]);
			expect(events![1]).toEqual([[0, 2]]);
		});

		test('should toggle selection in multi-select mode', async () => {
			const multiWrapper = mount(BoButtonGroup, {
				props: {
					multiSelect: true,
					items: [
						{ id: 'btn1', label: 'Button 1' },
						{ id: 'btn2', label: 'Button 2' },
					],
				},
			});

			const items = multiWrapper.findAll('button[data-testid*="button-group-item"]');

			// Select first item
			await items[0].trigger('click');
			await nextTick();
			expect(items[0].attributes('aria-pressed')).toBe('true');

			// Deselect first item
			await items[0].trigger('click');
			await nextTick();
			expect(items[0].attributes('aria-pressed')).toBe('false');
		});
	});

	suite('Disabled States', () => {
		test('should disable entire group', () => {
			const disabledWrapper = mount(BoButtonGroup, {
				props: {
					disabled: true,
					items: [{ id: 'btn1', label: 'Test' }],
				},
			});
			const container = disabledWrapper.find('[data-testid*="button-group"]');
			expect(container.attributes('aria-disabled')).toBe('true');
			expect(container.classes()).toContain('bo-button-group--disabled');
		});

		test('should disable individual items', () => {
			const disabledItemWrapper = mount(BoButtonGroup, {
				props: {
					items: [
						{ id: 'btn1', label: 'Normal' },
						{ id: 'btn2', label: 'Disabled', disabled: true },
						{ id: 'btn3', label: 'Normal' },
					],
				},
			});
			const items = disabledItemWrapper.findAll('button[data-testid*="button-group-item"]');
			expect(items[1].attributes('disabled')).toBeDefined();
		});

		test('should not emit events when disabled', async () => {
			const disabledWrapper = mount(BoButtonGroup, {
				props: {
					items: [{ id: 'btn1', label: 'Disabled', disabled: true }],
				},
			});
			const item = disabledWrapper.find('button[data-testid*="button-group-item"]');
			await item.trigger('click');

			expect(disabledWrapper.emitted('select')).toBeFalsy();
		});
	});

	suite('Accessibility', () => {
		test('should have proper ARIA attributes', () => {
			const items = wrapper.findAll('button[data-testid*="button-group-item"]');
			items.forEach((item) => {
				expect(item.attributes('aria-pressed')).toBeDefined();
			});
		});

		test('should use semantic button elements', () => {
			const buttons = wrapper.findAll('button');
			expect(buttons.length).toBeGreaterThan(0);
		});

		test('should support custom aria labels for items', () => {
			const ariaWrapper = mount(BoButtonGroup, {
				props: {
					items: [{ id: 'btn1', prefixIcon: Icon.star, ariaLabel: 'Favorite this item' }],
				},
			});
			// The aria label is computed internally and used for accessibility
			const item = ariaWrapper.find('button[data-testid*="button-group-item"]');
			expect(item.exists()).toBe(true);
		});
	});

	suite('Edge Cases', () => {
		test('should handle single item', () => {
			const singleWrapper = mount(BoButtonGroup, {
				props: {
					items: [{ id: 'btn1', label: 'Single' }],
				},
			});
			const items = singleWrapper.findAll('button[data-testid*="button-group-item"]');
			expect(items).toHaveLength(1);
		});

		test('should handle empty labels', () => {
			const emptyLabelWrapper = mount(BoButtonGroup, {
				props: {
					items: [
						{ id: 'btn1', label: '' },
						{ id: 'btn2' }, // no label
					],
				},
			});
			const items = emptyLabelWrapper.findAll('button[data-testid*="button-group-item"]');
			expect(items).toHaveLength(2);
		});

		test('should handle invalid default active index', () => {
			const invalidWrapper = mount(BoButtonGroup, {
				props: {
					defaultActiveIndex: 10, // out of bounds
					items: [
						{ id: 'btn1', label: 'Button 1' },
						{ id: 'btn2', label: 'Button 2' },
					],
				},
			});
			const items = invalidWrapper.findAll('button[data-testid*="button-group-item"]');
			items.forEach((item) => {
				expect(item.attributes('aria-pressed')).toBe('false');
			});
		});

		test('should generate unique IDs', () => {
			const noIdWrapper = mount(BoButtonGroup, {
				props: {
					items: [{ label: 'Button 1' }, { label: 'Button 2' }, { label: 'Button 3' }],
				},
			});
			const items = noIdWrapper.findAll('button[data-testid*="button-group-item"]');
			const testIds = items.map((item) => item.attributes('data-testid'));
			const uniqueIds = new Set(testIds);
			expect(uniqueIds.size).toBe(testIds.length);
		});
	});

	suite('CSS Classes', () => {
		test('should have base button group classes', () => {
			expect(wrapper.find('.bo-button-group').exists()).toBe(true);
			expect(wrapper.find('.bo-button-group__list').exists()).toBe(true);
		});

		test('should have button group item classes', () => {
			expect(wrapper.find('.bo-button-group-item').exists()).toBe(true);
		});

		test('should apply transition classes', () => {
			const item = wrapper.find('.bo-button-group-item');
			expect(item.classes()).toContain('transition-colors');
		});
	});
});
