import { BoAriaLive } from '@/shared/bo-aria.js';
import { BoSize } from '@/shared/bo-size.js';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test } from 'vitest/dist/index.js';
import { Icon } from '../icon/bo-icon.js';
import { BoBadgeShape, BoBadgeType, BoBadgeVariant } from './bo-badge.js';
import BoBadge from './bo-badge.vue';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoBadge, {
		props: {
			label: 'Test Badge',
		},
	});
});

describe('BoBadge', () => {
	suite('Basic Rendering', () => {
		test('should render badge container', () => {
			expect(wrapper.find('.bo-badge').exists()).toBe(true);
		});

		test('should have correct test id', () => {
			expect(wrapper.find('[data-testid*="badge"]').exists()).toBe(true);
		});

		test('should render with custom id', () => {
			const customWrapper = mount(BoBadge, {
				props: {
					id: 'custom-badge-id',
					label: 'Test',
				},
			});
			expect(customWrapper.find('[data-testid="custom-badge-id-badge"]').exists()).toBe(true);
		});
	});

	suite('Accessibility Features', () => {
		test('should have correct default accessibility attributes', () => {
			const badge = wrapper.find('[data-testid*="badge"]');
			expect(badge.attributes('role')).toBe('status');
			expect(badge.attributes('aria-label')).toBe('Badge: Test Badge');
			expect(badge.attributes('aria-live')).toBe(BoAriaLive.polite);
			expect(badge.attributes('aria-atomic')).toBe('true');
		});

		test('should apply custom aria-label', () => {
			const accessibleWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					ariaLabel: 'Custom Badge Label',
				},
			});
			const badge = accessibleWrapper.find('[data-testid*="badge"]');
			expect(badge.attributes('aria-label')).toBe('Custom Badge Label');
		});

		test('should apply assertive aria-live value', () => {
			const accessibleWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					ariaLive: BoAriaLive.assertive,
				},
			});
			const badge = accessibleWrapper.find('[data-testid*="badge"]');
			expect(badge.attributes('aria-live')).toBe(BoAriaLive.assertive);
		});

		test('should apply off aria-live value', () => {
			const accessibleWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					ariaLive: BoAriaLive.off,
				},
			});
			const badge = accessibleWrapper.find('[data-testid*="badge"]');
			expect(badge.attributes('aria-live')).toBe(BoAriaLive.off);
		});

		test('should have correct aria-label for icon-only badge', () => {
			const iconOnlyWrapper = mount(BoBadge, {
				props: {
					icon: {
						prefix: Icon.star,
					},
				},
			});
			const badge = iconOnlyWrapper.find('[data-testid*="badge"]');
			expect(badge.attributes('aria-label')).toBe('Badge with icon');
		});

		test('should have default aria-label when no content provided', () => {
			const emptyWrapper = mount(BoBadge);
			const badge = emptyWrapper.find('[data-testid*="badge"]');
			expect(badge.attributes('aria-label')).toBe('Badge');
		});
	});

	suite('Shape Variants', () => {
		test.each([
			[BoBadgeShape.default, ['bo-badge--default', 'rounded-md']],
			[BoBadgeShape.pill, ['bo-badge--pill', 'rounded-full']],
			[BoBadgeShape.flat, ['bo-badge--flat', 'rounded-none']],
			[BoBadgeShape.circle, ['bo-badge--circle', 'rounded-full']],
		])('should apply correct classes for %s shape', (shape, expectedClasses) => {
			const shapeWrapper = mount(BoBadge, {
				props: {
					label: shape === BoBadgeShape.circle ? undefined : 'Test',
					shape,
					icon: shape === BoBadgeShape.circle ? { prefix: Icon.star } : undefined,
				},
			});
			const badge = shapeWrapper.find('.bo-badge');
			expectedClasses.forEach((className) => {
				expect(badge.classes()).toContain(className);
			});
		});

		test('should handle circle shape with icon and label correctly', () => {
			const circleWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					shape: BoBadgeShape.circle,
					icon: {
						prefix: Icon.star,
					},
				},
			});
			const badge = circleWrapper.find('.bo-badge');
			const label = circleWrapper.find('[data-testid*="badge-label"]');
			expect(badge.classes()).toContain('bo-badge--circle');
			expect(label.exists()).toBe(true);
		});
	});

	suite('Type and Variant Combinations', () => {
		test.each([
			[
				BoBadgeType.default,
				BoBadgeVariant.primary,
				['bg-blue-600', 'text-white', 'dark:bg-blue-700'],
			],
			[
				BoBadgeType.outline,
				BoBadgeVariant.primary,
				['bg-transparent', 'text-blue-600', 'dark:text-blue-500'],
			],
			[
				BoBadgeType.default,
				BoBadgeVariant.secondary,
				['bg-neutral-600', 'text-white', 'dark:bg-neutral-700'],
			],
			[BoBadgeType.default, BoBadgeVariant.danger, ['bg-red-600', 'text-white', 'dark:bg-red-700']],
			[
				BoBadgeType.default,
				BoBadgeVariant.warning,
				['bg-yellow-500', 'text-white', 'dark:bg-yellow-600'],
			],
			[
				BoBadgeType.default,
				BoBadgeVariant.success,
				['bg-green-600', 'text-white', 'dark:bg-green-700'],
			],
			[
				BoBadgeType.default,
				BoBadgeVariant.light,
				['bg-neutral-100', 'text-neutral-800', 'dark:bg-neutral-200'],
			],
			[BoBadgeType.default, BoBadgeVariant.dark, ['bg-neutral-800', 'text-white', 'dark:bg-black']],
		])(
			'should apply correct classes for %s type and %s variant',
			(type, variant, expectedClasses) => {
				const variantWrapper = mount(BoBadge, {
					props: {
						label: 'Test',
						type,
						variant,
					},
				});
				const badge = variantWrapper.find('.bo-badge');
				expectedClasses.forEach((className) => {
					expect(badge.classes()).toContain(className);
				});
			},
		);
	});

	suite('Size Variants', () => {
		test.each([
			[BoSize.extra_small, 'bo-badge--extra-small'],
			[BoSize.small, 'bo-badge--small'],
			[BoSize.default, 'bo-badge--default'],
			[BoSize.large, 'bo-badge--large'],
			[BoSize.extra_large, 'bo-badge--extra-large'],
		])('should apply correct classes for %s size', (size, expectedClass) => {
			const sizeWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					size,
				},
			});
			const badge = sizeWrapper.find('.bo-badge');
			expect(badge.classes()).toContain(expectedClass);
		});

		test('should apply correct size classes for circle shape', () => {
			const sizes = [
				BoSize.extra_small,
				BoSize.small,
				BoSize.default,
				BoSize.large,
				BoSize.extra_large,
			];
			sizes.forEach((size) => {
				const wrapper = mount(BoBadge, {
					props: {
						shape: BoBadgeShape.circle,
						size,
						icon: {
							prefix: Icon.star,
						},
					},
				});
				const badge = wrapper.find('.bo-badge');
				expect(badge.classes()).toContain(`bo-badge--${size}`);
			});
		});
	});

	suite('Icon Handling', () => {
		test('should render prefix icon with correct size based on badge size', () => {
			const iconWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					size: BoSize.large,
					icon: {
						prefix: Icon.star,
					},
				},
			});
			const prefixIcon = iconWrapper.find('[data-testid*="badge-prefix-icon"]');
			expect(prefixIcon.exists()).toBe(true);
		});

		test('should handle both prefix and suffix icons', () => {
			const iconWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					icon: {
						prefix: Icon.star,
						suffix: Icon.check,
					},
				},
			});
			const prefixIcon = iconWrapper.find('[data-testid*="badge-prefix-icon"]');
			const suffixIcon = iconWrapper.find('[data-testid*="badge-suffix-icon"]');
			expect(prefixIcon.exists()).toBe(true);
			expect(suffixIcon.exists()).toBe(true);
		});
	});

	suite('Label Handling', () => {
		test('should render label when provided', () => {
			const label = wrapper.find('[data-testid*="badge-label"]');
			expect(label.exists()).toBe(true);
			expect(label.text()).toBe('Test Badge');
		});

		test('should not render label when empty', () => {
			const emptyWrapper = mount(BoBadge, {
				props: {
					label: '',
				},
			});
			const label = emptyWrapper.find('[data-testid*="badge-label"]');
			expect(label.exists()).toBe(false);
		});

		test('should not render label for icon-only badge', () => {
			const iconOnlyWrapper = mount(BoBadge, {
				props: {
					icon: {
						prefix: Icon.star,
					},
				},
			});
			const label = iconOnlyWrapper.find('[data-testid*="badge-label"]');
			expect(label.exists()).toBe(false);
		});
	});
});
