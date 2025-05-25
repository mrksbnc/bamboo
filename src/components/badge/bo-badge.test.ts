import { BoSize } from '@/shared/bo-size.js';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test } from 'vitest';
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

		test('should have correct role attribute', () => {
			const badge = wrapper.find('[data-testid*="badge"]');
			expect(badge.attributes('role')).toBe('status');
		});

		test('should have correct aria-label', () => {
			const badge = wrapper.find('[data-testid*="badge"]');
			expect(badge.attributes('aria-label')).toBe('Badge: Test Badge');
		});
	});

	suite('Label Rendering', () => {
		test('should render label with correct test id', () => {
			const label = wrapper.find('[data-testid*="badge-label"]');
			expect(label.exists()).toBe(true);
		});

		test('should display correct label text', () => {
			const label = wrapper.find('[data-testid*="badge-label"]');
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

		test('should not render label when undefined', () => {
			const undefinedWrapper = mount(BoBadge);
			const label = undefinedWrapper.find('[data-testid*="badge-label"]');
			expect(label.exists()).toBe(false);
		});
	});

	suite('Icon Rendering', () => {
		test('should render prefix icon when provided', () => {
			const iconWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					icon: {
						prefix: Icon.star,
					},
				},
			});
			const prefixIcon = iconWrapper.find('[data-testid*="badge-prefix-icon"]');
			expect(prefixIcon.exists()).toBe(true);
		});

		test('should render suffix icon when provided', () => {
			const iconWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					icon: {
						suffix: Icon.check,
					},
				},
			});
			const suffixIcon = iconWrapper.find('[data-testid*="badge-suffix-icon"]');
			expect(suffixIcon.exists()).toBe(true);
		});

		test('should render both prefix and suffix icons', () => {
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

		test('should render icon-only badge without label', () => {
			const iconOnlyWrapper = mount(BoBadge, {
				props: {
					icon: {
						prefix: Icon.star,
					},
				},
			});
			const prefixIcon = iconOnlyWrapper.find('[data-testid*="badge-prefix-icon"]');
			const label = iconOnlyWrapper.find('[data-testid*="badge-label"]');
			expect(prefixIcon.exists()).toBe(true);
			expect(label.exists()).toBe(false);
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

		test('should not render icons when set to none', () => {
			const noIconWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					icon: {
						prefix: Icon.none,
						suffix: Icon.none,
					},
				},
			});
			const prefixIcon = noIconWrapper.find('[data-testid*="badge-prefix-icon"]');
			const suffixIcon = noIconWrapper.find('[data-testid*="badge-suffix-icon"]');
			expect(prefixIcon.exists()).toBe(false);
			expect(suffixIcon.exists()).toBe(false);
		});
	});

	suite('Size Variants', () => {
		test('should apply extra small size classes', () => {
			const sizeWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					size: BoSize.extra_small,
				},
			});
			const badge = sizeWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bo-badge--extra-small');
		});

		test('should apply small size classes', () => {
			const sizeWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					size: BoSize.small,
				},
			});
			const badge = sizeWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bo-badge--small');
		});

		test('should apply default size classes', () => {
			const sizeWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					size: BoSize.default,
				},
			});
			const badge = sizeWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bo-badge--default');
		});

		test('should apply large size classes', () => {
			const sizeWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					size: BoSize.large,
				},
			});
			const badge = sizeWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bo-badge--large');
		});

		test('should apply extra large size classes', () => {
			const sizeWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					size: BoSize.extra_large,
				},
			});
			const badge = sizeWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bo-badge--extra-large');
		});
	});

	suite('Shape Variants', () => {
		test('should apply default shape classes', () => {
			const shapeWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					shape: BoBadgeShape.default,
				},
			});
			const badge = shapeWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bo-badge--default');
		});

		test('should apply pill shape classes', () => {
			const shapeWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					shape: BoBadgeShape.pill,
				},
			});
			const badge = shapeWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bo-badge--pill');
		});

		test('should apply flat shape classes', () => {
			const shapeWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					shape: BoBadgeShape.flat,
				},
			});
			const badge = shapeWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bo-badge--flat');
		});

		test('should apply circle shape classes for icon-only badge', () => {
			const circleWrapper = mount(BoBadge, {
				props: {
					shape: BoBadgeShape.circle,
					icon: {
						prefix: Icon.star,
					},
				},
			});
			const badge = circleWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bo-badge--circle');
		});

		test('should render label in circle shape when label is provided with icon', () => {
			const circleWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					shape: BoBadgeShape.circle,
					icon: {
						prefix: Icon.star,
					},
				},
			});
			const label = circleWrapper.find('[data-testid*="badge-label"]');
			expect(label.exists()).toBe(true);
		});

		test('should not render label in circle shape when icon-only', () => {
			const circleIconOnlyWrapper = mount(BoBadge, {
				props: {
					shape: BoBadgeShape.circle,
					icon: {
						prefix: Icon.star,
					},
				},
			});
			const label = circleIconOnlyWrapper.find('[data-testid*="badge-label"]');
			expect(label.exists()).toBe(false);
		});
	});

	suite('Type Variants', () => {
		test('should apply default type classes', () => {
			const typeWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					type: BoBadgeType.default,
				},
			});
			const badge = typeWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bg-blue-600');
		});

		test('should apply outline type classes', () => {
			const typeWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					type: BoBadgeType.outline,
				},
			});
			const badge = typeWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bo-badge--outline');
			expect(badge.classes()).toContain('bg-transparent');
		});
	});

	suite('Color Variants', () => {
		test('should apply primary variant classes', () => {
			const variantWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					variant: BoBadgeVariant.primary,
				},
			});
			const badge = variantWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bo-badge--primary');
		});

		test('should apply secondary variant classes', () => {
			const variantWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					variant: BoBadgeVariant.secondary,
				},
			});
			const badge = variantWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bo-badge--secondary');
		});

		test('should apply danger variant classes', () => {
			const variantWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					variant: BoBadgeVariant.danger,
				},
			});
			const badge = variantWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bo-badge--danger');
		});

		test('should apply warning variant classes', () => {
			const variantWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					variant: BoBadgeVariant.warning,
				},
			});
			const badge = variantWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bo-badge--warning');
		});

		test('should apply success variant classes', () => {
			const variantWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					variant: BoBadgeVariant.success,
				},
			});
			const badge = variantWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bo-badge--success');
		});

		test('should apply light variant classes', () => {
			const variantWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					variant: BoBadgeVariant.light,
				},
			});
			const badge = variantWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bo-badge--light');
		});

		test('should apply dark variant classes', () => {
			const variantWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					variant: BoBadgeVariant.dark,
				},
			});
			const badge = variantWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bo-badge--dark');
		});
	});

	suite('Outline Type with Color Variants', () => {
		test('should apply outline primary variant classes', () => {
			const outlineWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					type: BoBadgeType.outline,
					variant: BoBadgeVariant.primary,
				},
			});
			const badge = outlineWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bo-badge--outline');
			expect(badge.classes()).toContain('bo-badge--primary');
			expect(badge.classes()).toContain('bg-transparent');
		});

		test('should apply outline danger variant classes', () => {
			const outlineWrapper = mount(BoBadge, {
				props: {
					label: 'Test',
					type: BoBadgeType.outline,
					variant: BoBadgeVariant.danger,
				},
			});
			const badge = outlineWrapper.find('.bo-badge');
			expect(badge.classes()).toContain('bo-badge--outline');
			expect(badge.classes()).toContain('bo-badge--danger');
			expect(badge.classes()).toContain('bg-transparent');
		});
	});

	suite('Default Props', () => {
		test('should use default props when none provided', () => {
			const defaultWrapper = mount(BoBadge);
			const badge = defaultWrapper.find('.bo-badge');

			expect(badge.classes()).toContain('bo-badge--default'); // default size and shape
			expect(badge.classes()).toContain('bo-badge--primary'); // default variant
		});

		test('should have default aria-label when no label provided', () => {
			const defaultWrapper = mount(BoBadge);
			const badge = defaultWrapper.find('[data-testid*="badge"]');
			expect(badge.attributes('aria-label')).toBe('Badge');
		});
	});

	suite('Slot Content', () => {
		test('should render slot content instead of label prop', () => {
			const slotWrapper = mount(BoBadge, {
				props: {
					label: 'Prop Label',
				},
				slots: {
					default: '<span data-testid="custom-content">Custom Content</span>',
				},
			});

			const customContent = slotWrapper.find('[data-testid="custom-content"]');
			expect(customContent.exists()).toBe(true);
			expect(customContent.text()).toBe('Custom Content');
		});
	});

	suite('Accessibility', () => {
		test('should have proper role attribute', () => {
			const badge = wrapper.find('[data-testid*="badge"]');
			expect(badge.attributes('role')).toBe('status');
		});

		test('should have proper aria-label for different states', () => {
			// With label
			const labelBadge = mount(BoBadge, { props: { label: 'New' } });
			expect(labelBadge.find('[data-testid*="badge"]').attributes('aria-label')).toBe('Badge: New');

			// Icon only
			const iconBadge = mount(BoBadge, { props: { icon: { prefix: Icon.star } } });
			expect(iconBadge.find('[data-testid*="badge"]').attributes('aria-label')).toBe(
				'Badge with icon',
			);

			// No content
			const emptyBadge = mount(BoBadge);
			expect(emptyBadge.find('[data-testid*="badge"]').attributes('aria-label')).toBe('Badge');
		});
	});
});
