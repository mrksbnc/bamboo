import { BoLoaderType } from '@/shared/bo-loader.js';
import { BoSize } from '@/shared/bo-size.js';
import { HtmlButtonType } from '@/shared/html-button.js';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test } from 'vitest';
import { Icon } from '../icon/bo-icon.js';
import { BoButtonShape, BoButtonVariant } from './bo-button.js';
import BoButton from './bo-button.vue';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoButton, {
		props: {
			label: 'Test Button',
		},
	});
});

describe('BoButton', () => {
	suite('Basic Rendering', () => {
		test('should render button element', () => {
			expect(wrapper.find('button').exists()).toBe(true);
		});

		test('should have correct test id', () => {
			expect(wrapper.find('[data-testid*="button"]').exists()).toBe(true);
		});

		test('should render with custom id', () => {
			const customWrapper = mount(BoButton, {
				props: {
					id: 'custom-button-id',
					label: 'Test',
				},
			});
			expect(customWrapper.find('[data-testid="custom-button-id-button"]').exists()).toBe(true);
		});

		test('should have correct default type attribute', () => {
			const button = wrapper.find('button');
			expect(button.attributes('type')).toBe('button');
		});

		test('should apply custom type attribute', () => {
			const submitWrapper = mount(BoButton, {
				props: {
					label: 'Submit',
					type: HtmlButtonType.submit,
				},
			});
			const button = submitWrapper.find('button');
			expect(button.attributes('type')).toBe('submit');
		});

		test('should have correct base CSS classes', () => {
			const button = wrapper.find('button');
			expect(button.classes()).toContain('bo-button');
			expect(button.classes()).toContain('inline-flex');
			expect(button.classes()).toContain('items-center');
			expect(button.classes()).toContain('justify-center');
		});
	});

	suite('Label Rendering', () => {
		test('should render label with correct test id', () => {
			const label = wrapper.find('[data-testid*="button-label"]');
			expect(label.exists()).toBe(true);
		});

		test('should display correct label text', () => {
			const label = wrapper.find('[data-testid*="button-label"]');
			expect(label.text()).toBe('Test Button');
		});

		test('should not render label when empty', () => {
			const emptyWrapper = mount(BoButton, {
				props: {
					label: '',
				},
			});
			const label = emptyWrapper.find('[data-testid*="button-label"]');
			expect(label.exists()).toBe(false);
		});

		test('should not render label when undefined', () => {
			const undefinedWrapper = mount(BoButton);
			const label = undefinedWrapper.find('[data-testid*="button-label"]');
			expect(label.exists()).toBe(false);
		});

		test('should render content container', () => {
			const content = wrapper.find('[data-testid*="button-content"]');
			expect(content.exists()).toBe(true);
			expect(content.classes()).toContain('bo-button__content');
		});
	});

	suite('Icon Rendering', () => {
		test('should render prefix icon when provided', () => {
			const iconWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					prefixIcon: Icon.star,
				},
			});
			const prefixIcon = iconWrapper.find('[data-testid*="button-prefix-icon"]');
			expect(prefixIcon.exists()).toBe(true);
		});

		test('should render suffix icon when provided', () => {
			const iconWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					suffixIcon: Icon.check,
				},
			});
			const suffixIcon = iconWrapper.find('[data-testid*="button-suffix-icon"]');
			expect(suffixIcon.exists()).toBe(true);
		});

		test('should render both prefix and suffix icons', () => {
			const iconWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					prefixIcon: Icon.star,
					suffixIcon: Icon.check,
				},
			});
			const prefixIcon = iconWrapper.find('[data-testid*="button-prefix-icon"]');
			const suffixIcon = iconWrapper.find('[data-testid*="button-suffix-icon"]');
			expect(prefixIcon.exists()).toBe(true);
			expect(suffixIcon.exists()).toBe(true);
		});

		test('should render icon-only button without label', () => {
			const iconOnlyWrapper = mount(BoButton, {
				props: {
					prefixIcon: Icon.star,
				},
			});
			const prefixIcon = iconOnlyWrapper.find('[data-testid*="button-prefix-icon"]');
			const label = iconOnlyWrapper.find('[data-testid*="button-label"]');
			expect(prefixIcon.exists()).toBe(true);
			expect(label.exists()).toBe(false);
		});

		test('should render icon-only button with suffix icon', () => {
			const iconOnlyWrapper = mount(BoButton, {
				props: {
					suffixIcon: Icon.star,
				},
			});
			const prefixIcon = iconOnlyWrapper.find('[data-testid*="button-prefix-icon"]');
			const label = iconOnlyWrapper.find('[data-testid*="button-label"]');
			expect(prefixIcon.exists()).toBe(true);
			expect(label.exists()).toBe(false);
		});

		test('should not render suffix icon when loading', () => {
			const loadingWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					suffixIcon: Icon.check,
					isLoading: true,
				},
			});
			const suffixIcon = loadingWrapper.find('[data-testid*="button-suffix-icon"]');
			expect(suffixIcon.exists()).toBe(false);
		});

		test('should not render icons when set to none', () => {
			const noIconWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					prefixIcon: Icon.none,
					suffixIcon: Icon.none,
				},
			});
			const prefixIcon = noIconWrapper.find('[data-testid*="button-prefix-icon"]');
			const suffixIcon = noIconWrapper.find('[data-testid*="button-suffix-icon"]');
			expect(prefixIcon.exists()).toBe(false);
			expect(suffixIcon.exists()).toBe(false);
		});
	});

	suite('Size Variants', () => {
		test('should apply extra small size classes', () => {
			const sizeWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					size: BoSize.extra_small,
				},
			});
			const button = sizeWrapper.find('button');
			expect(button.classes()).toContain('bo-button--extra-small');
		});

		test('should apply small size classes', () => {
			const sizeWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					size: BoSize.small,
				},
			});
			const button = sizeWrapper.find('button');
			expect(button.classes()).toContain('bo-button--small');
		});

		test('should apply default size classes', () => {
			const sizeWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					size: BoSize.default,
				},
			});
			const button = sizeWrapper.find('button');
			expect(button.classes()).toContain('bo-button--default');
		});

		test('should apply large size classes', () => {
			const sizeWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					size: BoSize.large,
				},
			});
			const button = sizeWrapper.find('button');
			expect(button.classes()).toContain('bo-button--large');
		});

		test('should apply extra large size classes', () => {
			const sizeWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					size: BoSize.extra_large,
				},
			});
			const button = sizeWrapper.find('button');
			expect(button.classes()).toContain('bo-button--extra-large');
		});

		test('should apply icon-only size classes for icon-only buttons', () => {
			const iconOnlyWrapper = mount(BoButton, {
				props: {
					prefixIcon: Icon.star,
					size: BoSize.large,
				},
			});
			const button = iconOnlyWrapper.find('button');
			expect(button.classes()).toContain('bo-button--large');
		});
	});

	suite('Shape Variants', () => {
		test('should apply default shape classes', () => {
			const shapeWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					shape: BoButtonShape.default,
				},
			});
			const button = shapeWrapper.find('button');
			expect(button.classes()).toContain('bo-button--default');
			expect(button.classes()).toContain('rounded-md');
		});

		test('should apply pill shape classes', () => {
			const shapeWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					shape: BoButtonShape.pill,
				},
			});
			const button = shapeWrapper.find('button');
			expect(button.classes()).toContain('bo-button--pill');
			expect(button.classes()).toContain('rounded-full');
		});

		test('should apply outline shape classes', () => {
			const shapeWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					shape: BoButtonShape.outline,
				},
			});
			const button = shapeWrapper.find('button');
			expect(button.classes()).toContain('bo-button--outline');
			expect(button.classes()).toContain('rounded-md');
		});

		test('should apply link shape classes', () => {
			const shapeWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					shape: BoButtonShape.link,
				},
			});
			const button = shapeWrapper.find('button');
			expect(button.classes()).toContain('bo-button--link');
			expect(button.classes()).toContain('rounded-none');
		});
	});

	suite('Color Variants', () => {
		test('should apply primary variant classes', () => {
			const variantWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					variant: BoButtonVariant.primary,
				},
			});
			const button = variantWrapper.find('button');
			expect(button.classes()).toContain('bo-button--primary');
		});

		test('should apply secondary variant classes', () => {
			const variantWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					variant: BoButtonVariant.secondary,
				},
			});
			const button = variantWrapper.find('button');
			expect(button.classes()).toContain('bo-button--secondary');
		});

		test('should apply danger variant classes', () => {
			const variantWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					variant: BoButtonVariant.danger,
				},
			});
			const button = variantWrapper.find('button');
			expect(button.classes()).toContain('bo-button--danger');
		});

		test('should apply warning variant classes', () => {
			const variantWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					variant: BoButtonVariant.warning,
				},
			});
			const button = variantWrapper.find('button');
			expect(button.classes()).toContain('bo-button--warning');
		});

		test('should apply success variant classes', () => {
			const variantWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					variant: BoButtonVariant.success,
				},
			});
			const button = variantWrapper.find('button');
			expect(button.classes()).toContain('bo-button--success');
		});

		test('should apply light variant classes', () => {
			const variantWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					variant: BoButtonVariant.light,
				},
			});
			const button = variantWrapper.find('button');
			expect(button.classes()).toContain('bo-button--light');
		});

		test('should apply dark variant classes', () => {
			const variantWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					variant: BoButtonVariant.dark,
				},
			});
			const button = variantWrapper.find('button');
			expect(button.classes()).toContain('bo-button--dark');
		});
	});

	suite('Disabled State', () => {
		test('should be disabled when disabled prop is true', () => {
			const disabledWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					disabled: true,
				},
			});
			const button = disabledWrapper.find('button');
			expect(button.attributes('disabled')).toBeDefined();
			expect(button.attributes('aria-disabled')).toBe('true');
		});

		test('should apply disabled CSS classes', () => {
			const disabledWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					disabled: true,
				},
			});
			const button = disabledWrapper.find('button');
			expect(button.classes()).toContain('bo-button--disabled');
		});

		test('should be disabled when loading', () => {
			const loadingWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					isLoading: true,
				},
			});
			const button = loadingWrapper.find('button');
			expect(button.attributes('disabled')).toBeDefined();
			expect(button.attributes('aria-disabled')).toBe('true');
		});

		test('should not be disabled by default', () => {
			const button = wrapper.find('button');
			expect(button.attributes('disabled')).toBeUndefined();
			expect(button.attributes('aria-disabled')).toBe('false');
		});
	});

	suite('Loading State', () => {
		test('should show spinner loader by default', () => {
			const loadingWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					isLoading: true,
				},
			});
			const loader = loadingWrapper.find('[data-testid*="button-loader"]');
			expect(loader.exists()).toBe(true);
		});

		test('should show pulse loader when specified', () => {
			const loadingWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					isLoading: true,
					loaderType: BoLoaderType.pulse,
				},
			});
			const loader = loadingWrapper.find('[data-testid*="button-loader"]');
			expect(loader.exists()).toBe(true);
		});

		test('should apply loading CSS classes', () => {
			const loadingWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					isLoading: true,
				},
			});
			const button = loadingWrapper.find('button');
			expect(button.classes()).toContain('bo-button--loading');
			expect(button.classes()).toContain('cursor-wait');
		});

		test('should set aria-busy when loading', () => {
			const loadingWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					isLoading: true,
				},
			});
			const button = loadingWrapper.find('button');
			expect(button.attributes('aria-busy')).toBe('true');
		});

		test('should not show loader when not loading', () => {
			const loader = wrapper.find('[data-testid*="button-loader"]');
			expect(loader.exists()).toBe(false);
		});
	});

	suite('Full Width', () => {
		test('should apply full width classes when fullWidth is true', () => {
			const fullWidthWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					fullWidth: true,
				},
			});
			const button = fullWidthWrapper.find('button');
			expect(button.classes()).toContain('bo-button--full-width');
			expect(button.classes()).toContain('w-full');
		});

		test('should not apply full width classes by default', () => {
			const button = wrapper.find('button');
			expect(button.classes()).not.toContain('bo-button--full-width');
			expect(button.classes()).not.toContain('w-full');
		});
	});

	suite('Autofocus', () => {
		test('should have autofocus attribute when autofocus is true', () => {
			const autofocusWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					autofocus: true,
				},
			});
			const button = autofocusWrapper.find('button');
			expect(button.attributes('autofocus')).toBeDefined();
		});

		test('should not have autofocus attribute by default', () => {
			const button = wrapper.find('button');
			expect(button.attributes('autofocus')).toBeUndefined();
		});
	});

	suite('Accessibility', () => {
		test('should have correct aria-label from label prop', () => {
			const button = wrapper.find('button');
			expect(button.attributes('aria-label')).toBe('Test Button');
		});

		test('should use custom aria-label when provided', () => {
			const ariaWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					ariaLabel: 'Custom aria label',
				},
			});
			const button = ariaWrapper.find('button');
			expect(button.attributes('aria-label')).toBe('Custom aria label');
		});

		test('should have default aria-label for icon-only button', () => {
			const iconOnlyWrapper = mount(BoButton, {
				props: {
					prefixIcon: Icon.star,
				},
			});
			const button = iconOnlyWrapper.find('button');
			expect(button.attributes('aria-label')).toBe('Button with icon');
		});

		test('should have fallback aria-label when no label or icon', () => {
			const emptyWrapper = mount(BoButton);
			const button = emptyWrapper.find('button');
			expect(button.attributes('aria-label')).toBe('Button');
		});

		test('should have correct aria-busy attribute', () => {
			const button = wrapper.find('button');
			expect(button.attributes('aria-busy')).toBe('false');
		});

		test('should have correct aria-disabled attribute', () => {
			const button = wrapper.find('button');
			expect(button.attributes('aria-disabled')).toBe('false');
		});
	});

	suite('Events', () => {
		test('should emit click event when clicked', async () => {
			const button = wrapper.find('button');
			await button.trigger('click');

			expect(wrapper.emitted('click')).toBeTruthy();
			expect(wrapper.emitted('click')).toHaveLength(1);
		});

		test('should pass mouse event in click emission', async () => {
			const button = wrapper.find('button');
			await button.trigger('click');

			const clickEvents = wrapper.emitted('click');
			expect(clickEvents).toBeTruthy();
			expect(clickEvents![0][0]).toBeInstanceOf(MouseEvent);
		});

		test('should not emit click when disabled', async () => {
			const disabledWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					disabled: true,
				},
			});
			const button = disabledWrapper.find('button');
			await button.trigger('click');

			expect(disabledWrapper.emitted('click')).toBeFalsy();
		});

		test('should not emit click when loading', async () => {
			const loadingWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					isLoading: true,
				},
			});
			const button = loadingWrapper.find('button');
			await button.trigger('click');

			expect(loadingWrapper.emitted('click')).toBeFalsy();
		});
	});

	suite('Slots', () => {
		test('should render custom slot content', () => {
			const slotWrapper = mount(BoButton, {
				slots: {
					default: '<span class="custom-content">Custom Content</span>',
				},
			});
			const customContent = slotWrapper.find('.custom-content');
			expect(customContent.exists()).toBe(true);
			expect(customContent.text()).toBe('Custom Content');
		});

		test('should not render default content when slot is provided', () => {
			const slotWrapper = mount(BoButton, {
				props: {
					label: 'Test Button',
				},
				slots: {
					default: '<span class="custom-content">Custom Content</span>',
				},
			});
			const defaultContent = slotWrapper.find('[data-testid*="button-content"]');
			expect(defaultContent.exists()).toBe(false);
		});
	});

	suite('Combined States', () => {
		test('should handle outline shape with different variants', () => {
			const outlineWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					shape: BoButtonShape.outline,
					variant: BoButtonVariant.danger,
				},
			});
			const button = outlineWrapper.find('button');
			expect(button.classes()).toContain('bo-button--outline');
			expect(button.classes()).toContain('bo-button--danger');
		});

		test('should handle link shape with different variants', () => {
			const linkWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					shape: BoButtonShape.link,
					variant: BoButtonVariant.success,
				},
			});
			const button = linkWrapper.find('button');
			expect(button.classes()).toContain('bo-button--link');
			expect(button.classes()).toContain('bo-button--success');
		});

		test('should handle icon-only button with loading state', () => {
			const iconLoadingWrapper = mount(BoButton, {
				props: {
					prefixIcon: Icon.star,
					isLoading: true,
				},
			});
			const prefixIcon = iconLoadingWrapper.find('[data-testid*="button-prefix-icon"]');
			const loader = iconLoadingWrapper.find('[data-testid*="button-loader"]');
			expect(prefixIcon.exists()).toBe(true);
			expect(loader.exists()).toBe(true);
		});

		test('should handle full width with different sizes', () => {
			const fullWidthLargeWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					fullWidth: true,
					size: BoSize.large,
				},
			});
			const button = fullWidthLargeWrapper.find('button');
			expect(button.classes()).toContain('bo-button--full-width');
			expect(button.classes()).toContain('bo-button--large');
			expect(button.classes()).toContain('w-full');
		});
	});

	suite('Edge Cases', () => {
		test('should handle empty string label', () => {
			const emptyLabelWrapper = mount(BoButton, {
				props: {
					label: '',
				},
			});
			const label = emptyLabelWrapper.find('[data-testid*="button-label"]');
			expect(label.exists()).toBe(false);
		});

		test('should handle whitespace-only label', () => {
			const whitespaceWrapper = mount(BoButton, {
				props: {
					label: '   ',
				},
			});
			const label = whitespaceWrapper.find('[data-testid*="button-label"]');
			expect(label.exists()).toBe(false);
		});

		test('should handle both disabled and loading states', () => {
			const disabledLoadingWrapper = mount(BoButton, {
				props: {
					label: 'Test',
					disabled: true,
					isLoading: true,
				},
			});
			const button = disabledLoadingWrapper.find('button');
			expect(button.attributes('disabled')).toBeDefined();
			expect(button.attributes('aria-disabled')).toBe('true');
			expect(button.attributes('aria-busy')).toBe('true');
			expect(button.classes()).toContain('bo-button--disabled');
			expect(button.classes()).toContain('bo-button--loading');
		});

		test('should handle icon-only button with both prefix and suffix icons', () => {
			const bothIconsWrapper = mount(BoButton, {
				props: {
					prefixIcon: Icon.star,
					suffixIcon: Icon.check,
				},
			});
			const prefixIcon = bothIconsWrapper.find('[data-testid*="button-prefix-icon"]');
			const suffixIcon = bothIconsWrapper.find('[data-testid*="button-suffix-icon"]');
			const label = bothIconsWrapper.find('[data-testid*="button-label"]');

			// Should render prefix icon (icon-only mode uses prefix)
			expect(prefixIcon.exists()).toBe(true);
			// Should not render suffix icon in icon-only mode
			expect(suffixIcon.exists()).toBe(false);
			// Should not render label
			expect(label.exists()).toBe(false);
		});
	});
});
