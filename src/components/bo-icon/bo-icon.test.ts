import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import { BoIconVariant, Icon } from './bo-icon';
import { BoSize } from '@/core/constants/size.js';
import BoIcon from './bo-icon.vue';
import { ColorService } from '@/core/services/color-service.js';

vi.mock('@/core/services/color-service', () => ({
	ColorService: {
		instance: {
			getCustomColorStyle: vi.fn((color) => ({ color })),
		},
	},
}));

vi.mock('@/core/services/identity-service', () => ({
	IdentityService: {
		instance: {
			getComponentId: vi.fn(() => 'test-id'),
			getDataTestId: vi.fn(() => 'test-data-id'),
		},
	},
}));

vi.mock('@/core/svg', () => ({
	iconRegistry: {
		[Icon.none]: '<svg><path d="M0 0"/></svg>',
		[Icon.home]: '<svg><path d="M10 10"/></svg>',
		[Icon.user]: '<svg><path d="M20 20"/></svg>',
		[Icon.search]: '<svg><path d="M30 30"/></svg>',
	},
}));

describe('bo-icon', () => {
	describe('rendering', () => {
		it('should render the icon with default props', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
				},
			});

			expect(wrapper.find('i').exists()).toBe(true);
			expect(wrapper.html()).toContain(
				'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>',
			);
		});

		it('should render with custom id', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.user,
					id: 'custom-id',
				},
			});

			expect(wrapper.find('i').attributes('id')).toBe('custom-id');
		});

		it('should render with data-testid', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.search,
					dataTestId: 'custom-test-id',
				},
			});

			expect(wrapper.find('i').attributes('data-testid')).toBe('custom-test-id');
		});

		it('should fallback to Icon.none when icon not found in registry', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'nonExistentIcon' as Icon,
				},
			});

			// Check for the none icon path data
			expect(wrapper.html()).not.toContain('M0 0');
		});
	});

	describe('size', () => {
		it('should apply extra-small size class', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
					size: BoSize.extra_small,
				},
			});

			expect(wrapper.find('i').classes()).toContain('bo-icon--size-extra-small');
		});

		it('should apply small size class', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
					size: BoSize.small,
				},
			});

			expect(wrapper.find('i').classes()).toContain('bo-icon--size-small');
		});

		it('should apply default size class', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
					size: BoSize.default,
				},
			});

			expect(wrapper.find('i').classes()).toContain('bo-icon--size-default');
		});

		it('should apply large size class', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
					size: BoSize.large,
				},
			});

			expect(wrapper.find('i').classes()).toContain('bo-icon--size-large');
		});

		it('should apply extra-large size class', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
					size: BoSize.extra_large,
				},
			});

			expect(wrapper.find('i').classes()).toContain('bo-icon--size-extra-large');
		});
	});

	describe('variants', () => {
		it.each([
			[BoIconVariant.default, 'bo-icon--default'],
			[BoIconVariant.primary, 'bo-icon--primary'],
			[BoIconVariant.secondary, 'bo-icon--secondary'],
			[BoIconVariant.success, 'bo-icon--success'],
			[BoIconVariant.warning, 'bo-icon--warning'],
			[BoIconVariant.danger, 'bo-icon--danger'],
			[BoIconVariant.white, 'bo-icon--white'],
			[BoIconVariant.black, 'bo-icon--black'],
			[BoIconVariant.current, 'bo-icon--current'],
			[BoIconVariant.inherit, 'bo-icon--inherit'],
		])('should apply %s variant class', (variant, expectedClass) => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
					variant,
				},
			});

			expect(wrapper.find('i').classes()).toContain(expectedClass);
		});
	});

	describe('custom color', () => {
		it('should apply custom color when provided', () => {
			const customColor = '#ff0000';
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
					customColor,
				},
			});

			expect(ColorService.instance.getCustomColorStyle).toHaveBeenCalledWith(customColor);
			const style = wrapper.find('i').attributes('style');
			expect(style).toContain('color');
		});
	});

	describe('custom css class', () => {
		it('should apply custom CSS class', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
					customCssClass: 'my-custom-class',
				},
			});

			expect(wrapper.find('i').classes()).toContain('my-custom-class');
		});

		it('should apply base classes along with custom class', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
					customCssClass: 'my-custom-class',
				},
			});

			expect(wrapper.find('i').classes()).toContain('bo-icon');
			expect(wrapper.find('i').classes()).toContain('my-custom-class');
		});
	});

	describe('cursor', () => {
		it('should apply custom cursor', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
					cursor: 'pointer',
				},
			});

			const style = wrapper.find('i').attributes('style');
			expect(style).toContain('cursor: pointer');
		});

		it('should apply default cursor when not provided', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
				},
			});

			const style = wrapper.find('i').attributes('style');
			expect(style).toContain('cursor: default');
		});
	});

	describe('accessibility', () => {
		it('should have aria-hidden="true" for decorative icons (default)', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
					decorative: true,
				},
			});

			expect(wrapper.find('i').attributes('aria-hidden')).toBe('true');
			expect(wrapper.find('i').attributes('aria-label')).toBeUndefined();
		});

		it('should not have aria-hidden for non-decorative icons', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
					decorative: false,
				},
			});

			expect(wrapper.find('i').attributes('aria-hidden')).toBeUndefined();
		});

		it('should have aria-label with icon name for non-decorative icons', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
					decorative: false,
				},
			});

			expect(wrapper.find('i').attributes('aria-label')).toBe(Icon.home);
		});

		it('should use title as aria-label when provided for non-decorative icons', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
					decorative: false,
					title: 'Custom Title',
				},
			});

			expect(wrapper.find('i').attributes('aria-label')).toBe('Custom Title');
		});

		it('should set title attribute when provided', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
					title: 'Icon Title',
				},
			});

			expect(wrapper.find('i').attributes('title')).toBe('Icon Title');
		});

		it('should have default role of "img"', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
				},
			});

			expect(wrapper.find('i').attributes('role')).toBe('img');
		});

		it('should apply custom role when provided', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
					role: 'button',
				},
			});

			expect(wrapper.find('i').attributes('role')).toBe('button');
		});
	});

	describe('component base classes', () => {
		it('should always have bo-icon base class', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
				},
			});

			expect(wrapper.find('i').classes()).toContain('bo-icon');
		});

		it('should have variant class', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.home,
					variant: BoIconVariant.primary,
				},
			});

			expect(wrapper.find('i').classes()).toContain('bo-icon--primary');
		});
	});
});
