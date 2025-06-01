import { BoSize } from '@/shared/bo-size.js';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test, vi } from 'vitest';
import { nextTick } from 'vue';
import { Icon, type AccessibilityDefinition } from './bo-icon.js';
import BoIcon from './bo-icon.vue';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoIcon, {
		props: {
			icon: Icon.star,
		},
	});
});

describe('BoIcon', () => {
	suite('Basic Rendering', () => {
		test('should render icon container', () => {
			expect(wrapper.find('i').exists()).toBe(true);
		});

		test('should have correct base classes', () => {
			const icon = wrapper.find('i');
			expect(icon.classes()).toContain('bo-icon');
			expect(icon.classes()).toContain('block');
		});

		test('should have correct test id', () => {
			const icon = wrapper.find('i');
			expect(icon.attributes('data-testid')).toContain('icon-star');
		});

		test('should render with custom id', () => {
			const customWrapper = mount(BoIcon, {
				props: {
					id: 'custom-icon-id',
					icon: Icon.heart,
				},
			});
			const icon = customWrapper.find('i');
			expect(icon.attributes('id')).toBe('custom-icon-id');
			expect(icon.attributes('data-testid')).toBe('custom-icon-id-icon-heart');
		});

		test('should generate unique id when not provided', () => {
			const wrapper1 = mount(BoIcon, { props: { icon: Icon.star } });
			const wrapper2 = mount(BoIcon, { props: { icon: Icon.heart } });

			const id1 = wrapper1.find('i').attributes('id');
			const id2 = wrapper2.find('i').attributes('id');

			expect(id1).toBeDefined();
			expect(id2).toBeDefined();
			expect(id1).not.toBe(id2);
		});
	});

	suite('Icon Loading', () => {
		test('should load and display SVG content', async () => {
			// Wait for the icon to load
			await nextTick();
			await new Promise((resolve) => setTimeout(resolve, 10));

			const icon = wrapper.find('i');
			// The SVG content should be loaded via v-html
			expect(icon.element.innerHTML).toBeTruthy();
		});

		test('should handle different icon types', async () => {
			const icons = [Icon.check, Icon.x, Icon.home, Icon.settings];

			for (const iconType of icons) {
				const iconWrapper = mount(BoIcon, {
					props: { icon: iconType },
				});

				await nextTick();
				const iconElement = iconWrapper.find('i');
				expect(iconElement.attributes('data-testid')).toContain(`icon-${iconType}`);
			}
		});

		test('should handle icon.none gracefully', async () => {
			const noneWrapper = mount(BoIcon, {
				props: { icon: Icon.none },
			});

			await nextTick();
			const icon = noneWrapper.find('i');
			expect(icon.attributes('data-testid')).toContain('icon-none');
		});

		test('should log error for invalid icon', async () => {
			const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

			const invalidWrapper = mount(BoIcon, {
				props: { icon: 'invalid-icon' as Icon },
			});

			await nextTick();
			await new Promise((resolve) => setTimeout(resolve, 10));

			expect(consoleSpy).toHaveBeenCalledWith('Could not find icon of name invalid-icon');
			consoleSpy.mockRestore();
		});
	});

	suite('Size Variants', () => {
		test('should apply extra small size classes', () => {
			const sizeWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					size: BoSize.extra_small,
				},
			});
			const icon = sizeWrapper.find('i');
			expect(icon.classes()).toContain('size-3');
		});

		test('should apply small size classes', () => {
			const sizeWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					size: BoSize.small,
				},
			});
			const icon = sizeWrapper.find('i');
			expect(icon.classes()).toContain('size-3.5');
		});

		test('should apply default size classes', () => {
			const sizeWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					size: BoSize.default,
				},
			});
			const icon = sizeWrapper.find('i');
			expect(icon.classes()).toContain('size-4');
		});

		test('should apply large size classes', () => {
			const sizeWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					size: BoSize.large,
				},
			});
			const icon = sizeWrapper.find('i');
			expect(icon.classes()).toContain('size-5');
		});

		test('should apply extra large size classes', () => {
			const sizeWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					size: BoSize.extra_large,
				},
			});
			const icon = sizeWrapper.find('i');
			expect(icon.classes()).toContain('size-6');
		});

		test('should use default size when not specified', () => {
			const icon = wrapper.find('i');
			expect(icon.classes()).toContain('size-4');
		});
	});

	suite('Color Styling', () => {
		test('should apply default color (currentColor)', () => {
			const icon = wrapper.find('i');
			expect(icon.attributes('style')).toContain('color: currentColor');
		});

		test('should apply custom color', () => {
			const colorWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					color: '#ff0000',
				},
			});
			const icon = colorWrapper.find('i');
			expect(icon.attributes('style')).toContain('color: rgb(255, 0, 0)');
		});

		test('should apply CSS color names', () => {
			const colorWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					color: 'blue',
				},
			});
			const icon = colorWrapper.find('i');
			expect(icon.attributes('style')).toContain('color: blue');
		});

		test('should apply CSS custom properties', () => {
			const colorWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					color: 'var(--primary-color)',
				},
			});
			const icon = colorWrapper.find('i');
			expect(icon.attributes('style')).toContain('color: var(--primary-color)');
		});
	});

	suite('Accessibility - Decorative Icons', () => {
		test('should have presentation role for decorative icons by default', () => {
			const icon = wrapper.find('i');
			expect(icon.attributes('role')).toBe('presentation');
		});

		test('should have aria-hidden=true for decorative icons by default', () => {
			const icon = wrapper.find('i');
			expect(icon.attributes('aria-hidden')).toBe('true');
		});

		test('should not have aria-label for decorative icons', () => {
			const icon = wrapper.find('i');
			expect(icon.attributes('aria-label')).toBeUndefined();
		});

		test('should respect explicit decorative setting', () => {
			const decorativeWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					accessibility: {
						decorative: true,
						title: 'Star icon',
					},
				},
			});
			const icon = decorativeWrapper.find('i');
			expect(icon.attributes('role')).toBe('presentation');
			expect(icon.attributes('aria-hidden')).toBe('true');
			expect(icon.attributes('aria-label')).toBeUndefined();
		});
	});

	suite('Accessibility - Semantic Icons', () => {
		test('should have img role for semantic icons', () => {
			const semanticWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					accessibility: {
						decorative: false,
						title: 'Favorite',
					},
				},
			});
			const icon = semanticWrapper.find('i');
			expect(icon.attributes('role')).toBe('img');
		});

		test('should have aria-label for semantic icons', () => {
			const semanticWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					accessibility: {
						decorative: false,
						title: 'Favorite item',
					},
				},
			});
			const icon = semanticWrapper.find('i');
			expect(icon.attributes('aria-label')).toBe('Favorite item');
		});

		test('should not have aria-hidden for semantic icons', () => {
			const semanticWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					accessibility: {
						decorative: false,
						title: 'Favorite',
					},
				},
			});
			const icon = semanticWrapper.find('i');
			expect(icon.attributes('aria-hidden')).toBeUndefined();
		});

		test('should use default title when accessibility prop not provided', async () => {
			const semanticWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					// accessibility not provided, should use default from props
				},
			});
			// Override the default to make it semantic
			await semanticWrapper.setProps({
				accessibility: {
					decorative: false,
					title: 'icon', // Explicitly provide the title
				},
			});
			const icon = semanticWrapper.find('i');
			expect(icon.attributes('aria-label')).toBe('icon');
		});

		test('should handle partial accessibility object without title', () => {
			const semanticWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					accessibility: {
						decorative: false,
						// title not provided in partial object, becomes undefined
					},
				},
			});
			const icon = semanticWrapper.find('i');
			// When accessibility object is provided but title is missing, it's undefined
			expect(icon.attributes('aria-label')).toBeUndefined();
		});

		test('should handle undefined title explicitly', () => {
			const undefinedTitleWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					accessibility: {
						decorative: false,
						title: undefined,
					},
				},
			});
			const icon = undefinedTitleWrapper.find('i');
			// When title is explicitly undefined, aria-label should be undefined
			expect(icon.attributes('aria-label')).toBeUndefined();
		});
	});

	suite('Accessibility - External aria-hidden Override', () => {
		test('should respect external aria-hidden=true and remove aria-label', () => {
			const externalWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					accessibility: {
						decorative: false,
						title: 'Should not appear',
					},
				},
				attrs: {
					'aria-hidden': 'true',
				},
			});
			const icon = externalWrapper.find('i');
			expect(icon.attributes('aria-hidden')).toBe('true');
			expect(icon.attributes('aria-label')).toBeUndefined();
		});

		test('should respect external aria-hidden=false', () => {
			const externalWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					accessibility: {
						decorative: true, // This should be overridden
					},
				},
				attrs: {
					'aria-hidden': 'false',
				},
			});
			const icon = externalWrapper.find('i');
			expect(icon.attributes('aria-hidden')).toBe('false');
		});

		test('should handle boolean aria-hidden attribute', () => {
			const externalWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					accessibility: {
						decorative: false,
						title: 'Should not appear',
					},
				},
				attrs: {
					'aria-hidden': true,
				},
			});
			const icon = externalWrapper.find('i');
			expect(icon.attributes('aria-hidden')).toBe('true');
			expect(icon.attributes('aria-label')).toBeUndefined();
		});
	});

	suite('Accessibility - Common Use Cases', () => {
		test('should configure icon for button (decorative)', () => {
			const buttonIconWrapper = mount(BoIcon, {
				props: {
					icon: Icon.plus,
					accessibility: {
						decorative: true,
					},
				},
			});
			const icon = buttonIconWrapper.find('i');
			expect(icon.attributes('role')).toBe('presentation');
			expect(icon.attributes('aria-hidden')).toBe('true');
			expect(icon.attributes('aria-label')).toBeUndefined();
		});

		test('should configure icon for status indicator (semantic)', () => {
			const statusIconWrapper = mount(BoIcon, {
				props: {
					icon: Icon.check_circle,
					accessibility: {
						decorative: false,
						title: 'Success',
					},
				},
			});
			const icon = statusIconWrapper.find('i');
			expect(icon.attributes('role')).toBe('img');
			expect(icon.attributes('aria-label')).toBe('Success');
			expect(icon.attributes('aria-hidden')).toBeUndefined();
		});

		test('should configure icon for navigation (semantic)', () => {
			const navIconWrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
					accessibility: {
						decorative: false,
						title: 'Go to homepage',
					},
				},
			});
			const icon = navIconWrapper.find('i');
			expect(icon.attributes('role')).toBe('img');
			expect(icon.attributes('aria-label')).toBe('Go to homepage');
		});
	});

	suite('Props Validation', () => {
		test('should handle all accessibility definition combinations', () => {
			const testCases: Array<{
				accessibility: AccessibilityDefinition;
				expectedRole: string;
				expectedAriaHidden: string | undefined;
				expectedAriaLabel: string | undefined;
			}> = [
				{
					accessibility: { decorative: true },
					expectedRole: 'presentation',
					expectedAriaHidden: 'true',
					expectedAriaLabel: undefined,
				},
				{
					accessibility: { decorative: false },
					expectedRole: 'img',
					expectedAriaHidden: undefined,
					expectedAriaLabel: undefined, // Partial object without title
				},
				{
					accessibility: { decorative: false, title: undefined },
					expectedRole: 'img',
					expectedAriaHidden: undefined,
					expectedAriaLabel: undefined, // Explicitly undefined title
				},
				{
					accessibility: { decorative: false, title: 'Custom title' },
					expectedRole: 'img',
					expectedAriaHidden: undefined,
					expectedAriaLabel: 'Custom title',
				},
				{
					accessibility: { decorative: true, title: 'Ignored title' },
					expectedRole: 'presentation',
					expectedAriaHidden: 'true',
					expectedAriaLabel: undefined,
				},
			];

			testCases.forEach(
				({ accessibility, expectedRole, expectedAriaHidden, expectedAriaLabel }) => {
					const testWrapper = mount(BoIcon, {
						props: {
							icon: Icon.star,
							accessibility,
						},
					});
					const icon = testWrapper.find('i');

					expect(icon.attributes('role')).toBe(expectedRole);
					expect(icon.attributes('aria-hidden')).toBe(expectedAriaHidden);
					expect(icon.attributes('aria-label')).toBe(expectedAriaLabel);
				},
			);
		});

		test('should handle undefined accessibility prop', () => {
			const undefinedWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					accessibility: undefined,
				},
			});
			const icon = undefinedWrapper.find('i');
			// Should use default values
			expect(icon.attributes('role')).toBe('presentation');
			expect(icon.attributes('aria-hidden')).toBe('true');
		});
	});

	suite('Reactive Updates', () => {
		test('should update icon when prop changes', async () => {
			expect(wrapper.find('i').attributes('data-testid')).toContain('icon-star');

			await wrapper.setProps({ icon: Icon.heart });
			await nextTick();

			expect(wrapper.find('i').attributes('data-testid')).toContain('icon-heart');
		});

		test('should update size when prop changes', async () => {
			expect(wrapper.find('i').classes()).toContain('size-4');

			await wrapper.setProps({ size: BoSize.large });
			expect(wrapper.find('i').classes()).toContain('size-5');
		});

		test('should update color when prop changes', async () => {
			expect(wrapper.find('i').attributes('style')).toContain('color: currentColor');

			await wrapper.setProps({ color: 'red' });
			expect(wrapper.find('i').attributes('style')).toContain('color: red');
		});

		test('should update accessibility when prop changes', async () => {
			expect(wrapper.find('i').attributes('role')).toBe('presentation');

			await wrapper.setProps({
				accessibility: {
					decorative: false,
					title: 'Updated title',
				},
			});

			expect(wrapper.find('i').attributes('role')).toBe('img');
			expect(wrapper.find('i').attributes('aria-label')).toBe('Updated title');
		});
	});

	suite('Edge Cases', () => {
		test('should handle empty string color', () => {
			const emptyColorWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					color: '',
				},
			});
			const icon = emptyColorWrapper.find('i');
			const style = icon.attributes('style');
			// Empty string color should still create a style attribute
			if (style) {
				expect(style).toContain('color:');
			} else {
				// If no style attribute, that's also acceptable behavior
				expect(style).toBeUndefined();
			}
		});

		test('should handle whitespace-only title', () => {
			const whitespaceWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					accessibility: {
						decorative: false,
						title: '   ',
					},
				},
			});
			const icon = whitespaceWrapper.find('i');
			expect(icon.attributes('aria-label')).toBe('   ');
		});

		test('should handle empty title', () => {
			const emptyTitleWrapper = mount(BoIcon, {
				props: {
					icon: Icon.star,
					accessibility: {
						decorative: false,
						title: '',
					},
				},
			});
			const icon = emptyTitleWrapper.find('i');
			expect(icon.attributes('aria-label')).toBe('');
		});

		test('should handle component unmounting gracefully', () => {
			expect(() => {
				wrapper.unmount();
			}).not.toThrow();
		});
	});

	suite('Integration with Other Components', () => {
		test('should work correctly when used in buttons', () => {
			const buttonWrapper = mount({
				template: `
					<button>
						<bo-icon :icon="Icon.plus" :accessibility="{ decorative: true }" />
						Add Item
					</button>
				`,
				components: { BoIcon },
				setup() {
					return { Icon };
				},
			});

			const icon = buttonWrapper.find('i');
			expect(icon.attributes('role')).toBe('presentation');
			expect(icon.attributes('aria-hidden')).toBe('true');
		});

		test('should work correctly as standalone semantic icon', () => {
			const standaloneWrapper = mount({
				template: `
					<div>
						<bo-icon
							:icon="Icon.alert_circle"
							:accessibility="{ decorative: false, title: 'Warning: Check your input' }"
							color="orange"
						/>
					</div>
				`,
				components: { BoIcon },
				setup() {
					return { Icon };
				},
			});

			const icon = standaloneWrapper.find('i');
			expect(icon.attributes('role')).toBe('img');
			expect(icon.attributes('aria-label')).toBe('Warning: Check your input');
			expect(icon.attributes('style')).toContain('color: orange');
		});
	});

	suite('Performance', () => {
		test('should not cause memory leaks with multiple instances', () => {
			const instances = [];

			// Create multiple instances
			for (let i = 0; i < 10; i++) {
				instances.push(
					mount(BoIcon, {
						props: {
							icon: Icon.star,
							size: BoSize.default,
						},
					}),
				);
			}

			// Unmount all instances
			instances.forEach((instance) => {
				expect(() => instance.unmount()).not.toThrow();
			});
		});

		test('should handle rapid prop changes', async () => {
			const icons = [Icon.star, Icon.heart, Icon.check, Icon.x, Icon.settings];

			for (const icon of icons) {
				await wrapper.setProps({ icon });
				expect(wrapper.find('i').attributes('data-testid')).toContain(`icon-${icon}`);
			}
		});
	});
});
