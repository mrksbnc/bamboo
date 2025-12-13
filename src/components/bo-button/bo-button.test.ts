import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import BoButton from './bo-button.vue';
import BoIcon from '@/components/bo-icon/bo-icon.vue';
import BoLoadingRing from '@/components/bo-loading-ring/bo-loading-ring.vue';
import BoLoadingSpinner from '@/components/bo-loading-spinner/bo-loading-spinner.vue';
import { BoText } from '@/components/bo-text';
import { BoSize } from '@/core/size';
import { BoVariant } from '@/core/variant';
import { BoLoaderType } from '@/core/loader';
import { BoButtonType } from './bo-button';
import { AriaLive } from '@/core/accessibility';

vi.mock('@/services/identity-service', () => ({
	IdentityService: {
		instance: {
			getComponentId: vi.fn(() => 'test-id'),
			getDataTestId: vi.fn(() => 'test-data-id'),
		},
	},
}));

vi.mock('@/services/color-service', () => ({
	ColorService: {
		instance: {
			getValidCssColor: vi.fn((color) => color),
		},
	},
}));

describe('BoButton', () => {
	const createWrapper = (props = {}) => {
		return mount(BoButton, {
			props,
			global: {
				stubs: {
					BoIcon,
					BoLoadingRing,
					BoLoadingSpinner,
					BoText,
				},
			},
		});
	};

	describe('Basic Rendering', () => {
		it('renders button element', () => {
			const wrapper = createWrapper();
			expect(wrapper.find('button').exists()).toBe(true);
		});

		it('renders with default props', () => {
			const wrapper = createWrapper();
			const button = wrapper.find('button');

			expect(button.attributes('type')).toBe('button');
			expect(button.classes()).toContain('bo-button');
			expect(button.classes()).toContain('bo-button--size-default');
			expect(button.classes()).toContain('bo-button--variant-primary');
		});

		it('renders label text when provided', () => {
			const wrapper = createWrapper({ label: 'Click me' });
			expect(wrapper.html()).toContain('Click me');
		});

		it('renders slot content when provided', () => {
			const wrapper = mount(BoButton, {
				slots: {
					default: '<span class="custom-content">Custom</span>',
				},
			});
			expect(wrapper.find('.custom-content').exists()).toBe(true);
		});
	});

	describe('Props - Type and Role', () => {
		it('sets button type attribute', () => {
			const wrapper = createWrapper({ type: BoButtonType.submit });
			expect(wrapper.find('button').attributes('type')).toBe('submit');
		});

		it('sets role attribute when provided', () => {
			const wrapper = createWrapper({ role: 'link' });
			expect(wrapper.find('button').attributes('role')).toBe('link');
		});
	});

	describe('Props - Sizes', () => {
		it.each([
			[BoSize.extra_small, 'bo-button--size-extra-small'],
			[BoSize.small, 'bo-button--size-small'],
			[BoSize.default, 'bo-button--size-default'],
			[BoSize.large, 'bo-button--size-large'],
			[BoSize.extra_large, 'bo-button--size-extra-large'],
		])('applies %s size class', (size, expectedClass) => {
			const wrapper = createWrapper({ size });
			expect(wrapper.find('button').classes()).toContain(expectedClass);
		});
	});

	describe('Props - Variants', () => {
		it.each([
			[BoVariant.primary, 'bo-button--variant-primary'],
			[BoVariant.secondary, 'bo-button--variant-secondary'],
			[BoVariant.success, 'bo-button--variant-success'],
			[BoVariant.warning, 'bo-button--variant-warning'],
			[BoVariant.danger, 'bo-button--variant-danger'],
			[BoVariant.white, 'bo-button--variant-white'],
			[BoVariant.black, 'bo-button--variant-black'],
		])('applies %s variant class', (variant, expectedClass) => {
			const wrapper = createWrapper({ variant });
			expect(wrapper.find('button').classes()).toContain(expectedClass);
		});
	});

	describe('Props - Disabled State', () => {
		it('sets disabled attribute when disabled', () => {
			const wrapper = createWrapper({ disabled: true });
			const button = wrapper.find('button');

			expect(button.attributes('disabled')).toBeDefined();
			expect(button.classes()).toContain('bo-button--disabled');
		});

		it('sets tabindex to -1 when disabled', () => {
			const wrapper = createWrapper({ disabled: true });
			expect(wrapper.find('button').attributes('tabindex')).toBe('-1');
		});

		it('does not set disabled attribute when not disabled', () => {
			const wrapper = createWrapper({ disabled: false });
			expect(wrapper.find('button').attributes('disabled')).toBeUndefined();
		});
	});

	describe('Props - Loading State', () => {
		it('applies loading class when isLoading is true', () => {
			const wrapper = createWrapper({ isLoading: true });
			expect(wrapper.find('button').classes()).toContain('bo-button--loading');
		});

		it('sets tabindex to -1 when loading', () => {
			const wrapper = createWrapper({ isLoading: true });
			expect(wrapper.find('button').attributes('tabindex')).toBe('-1');
		});

		it('renders loading spinner by default when loading', () => {
			const wrapper = createWrapper({
				isLoading: true,
				label: 'Loading',
			});
			expect(wrapper.findComponent(BoLoadingSpinner).exists()).toBe(true);
		});

		it('renders loading ring when loaderType is ring', () => {
			const wrapper = createWrapper({
				isLoading: true,
				loaderType: BoLoaderType.ring,
			});
			expect(wrapper.findComponent(BoLoadingRing).exists()).toBe(true);
		});

		it('hides prefix icon when loading', () => {
			const wrapper = createWrapper({
				isLoading: true,
				prefixIcon: 'icon-name',
				label: 'Button',
			});
			const icons = wrapper.findAllComponents(BoIcon);
			expect(icons.length).toBe(0);
		});
	});

	describe('Props - Icons', () => {
		it('renders prefix icon when provided and not loading', () => {
			const wrapper = createWrapper({
				prefixIcon: 'icon-prefix',
				label: 'Button',
			});
			const icons = wrapper.findAllComponents(BoIcon);
			expect(icons.length).toBeGreaterThan(0);
		});

		it('renders suffix icon when provided', () => {
			const wrapper = createWrapper({
				suffixIcon: 'icon-suffix',
				label: 'Button',
			});
			const icons = wrapper.findAllComponents(BoIcon);
			expect(icons.length).toBeGreaterThan(0);
		});

		it('renders both prefix and suffix icons', () => {
			const wrapper = createWrapper({
				prefixIcon: 'icon-prefix',
				suffixIcon: 'icon-suffix',
				label: 'Button',
			});
			const icons = wrapper.findAllComponents(BoIcon);
			expect(icons.length).toBe(2);
		});
	});

	describe('Props - Full Width', () => {
		it('applies full width class when fullWidth is true', () => {
			const wrapper = createWrapper({ fullWidth: true });
			expect(wrapper.find('button').classes()).toContain('bo-button--full-width');
		});

		it('does not apply full width class by default', () => {
			const wrapper = createWrapper();
			expect(wrapper.find('button').classes()).not.toContain('bo-button--full-width');
		});
	});

	describe('Props - Custom Color', () => {
		it('applies custom color as inline style', () => {
			const wrapper = createWrapper({ customColor: '#ff0000' });
			const button = wrapper.find('button');
			const style = button.attributes('style');

			expect(style).toContain('background-color: rgb(255, 0, 0)');
			expect(style).toContain('border-color: rgb(255, 0, 0)');
		});
	});

	describe('Props - Custom CSS Class', () => {
		it('applies custom CSS class', () => {
			const wrapper = createWrapper({ customCssClass: 'my-custom-class' });
			expect(wrapper.find('button').classes()).toContain('my-custom-class');
		});
	});

	describe('Accessibility - ARIA', () => {
		it('sets aria-label from prop', () => {
			const wrapper = createWrapper({ ariaLabel: 'Custom label' });
			expect(wrapper.find('button').attributes('aria-label')).toBe('Custom label');
		});

		it('uses label as aria-label when ariaLabel is not provided', () => {
			const wrapper = createWrapper({ label: 'Button text' });
			expect(wrapper.find('button').attributes('aria-label')).toBe('Button text');
		});

		it('does not set aria-label when ariaLabelledBy is provided', () => {
			const wrapper = createWrapper({
				ariaLabelledBy: 'external-label',
				label: 'Button text',
			});
			expect(wrapper.find('button').attributes('aria-label')).toBeUndefined();
		});

		it('sets aria-labelledby attribute', () => {
			const wrapper = createWrapper({ ariaLabelledBy: 'label-id' });
			expect(wrapper.find('button').attributes('aria-labelledby')).toBe('label-id');
		});

		it('sets aria-describedby attribute', () => {
			const wrapper = createWrapper({ ariaDescribedBy: 'description-id' });
			expect(wrapper.find('button').attributes('aria-describedby')).toBe('description-id');
		});

		it('sets aria-live attribute with default value', () => {
			const wrapper = createWrapper();
			expect(wrapper.find('button').attributes('aria-live')).toBe('polite');
		});

		it('sets custom aria-live attribute', () => {
			const wrapper = createWrapper({ ariaLive: AriaLive.assertive });
			expect(wrapper.find('button').attributes('aria-live')).toBe('assertive');
		});
	});

	describe('Accessibility - TabIndex', () => {
		it('uses custom tabindex when provided', () => {
			const wrapper = createWrapper({ tabIndex: 5 });
			expect(wrapper.find('button').attributes('tabindex')).toBe('5');
		});

		it('sets tabindex to -1 when disabled', () => {
			const wrapper = createWrapper({ disabled: true, tabIndex: 0 });
			expect(wrapper.find('button').attributes('tabindex')).toBe('-1');
		});

		it('sets tabindex to -1 when loading', () => {
			const wrapper = createWrapper({ isLoading: true, tabIndex: 0 });
			expect(wrapper.find('button').attributes('tabindex')).toBe('-1');
		});
	});

	describe('Data Attributes', () => {
		it('sets id attribute', () => {
			const wrapper = createWrapper({ id: 'custom-id' });
			expect(wrapper.find('button').attributes('id')).toBe('custom-id');
		});

		it('sets data-testid attribute', () => {
			const wrapper = createWrapper({ dataTestId: 'custom-test-id' });
			expect(wrapper.find('button').attributes('data-testid')).toBe('custom-test-id');
		});
	});

	describe('Computed Properties', () => {
		describe('cursor', () => {
			it('returns "not-allowed" when disabled', () => {
				const wrapper = createWrapper({ disabled: true });
				// Cursor is passed to child components
				expect(wrapper.vm.cursor).toBe('not-allowed');
			});

			it('returns "wait" when loading', () => {
				const wrapper = createWrapper({ isLoading: true });
				expect(wrapper.vm.cursor).toBe('wait');
			});

			it('returns "pointer" by default', () => {
				const wrapper = createWrapper();
				expect(wrapper.vm.cursor).toBe('pointer');
			});
		});

		describe('fontSize', () => {
			it.each([
				[BoSize.extra_small, 'xs'],
				[BoSize.small, 'sm'],
				[BoSize.default, 'default'],
				[BoSize.large, 'lg'],
				[BoSize.extra_large, 'xl'],
			])('returns correct fontSize for %s size', (size, expectedFontSize) => {
				const wrapper = createWrapper({ size });
				expect(wrapper.vm.fontSize).toContain(expectedFontSize);
			});
		});

		describe('iconSize', () => {
			it.each([
				[BoSize.extra_small, 12],
				[BoSize.small, 14],
				[BoSize.default, 16],
				[BoSize.large, 20],
				[BoSize.extra_large, 24],
			])('returns correct iconSize for %s size', (size, expectedSize) => {
				const wrapper = createWrapper({ size });
				expect(wrapper.vm.iconSize).toBe(expectedSize);
			});
		});

		describe('loadingSpinnerSize', () => {
			it.each([
				[BoSize.extra_small, BoSize.extra_small],
				[BoSize.small, BoSize.small],
				[BoSize.default, BoSize.small],
				[BoSize.large, BoSize.default],
				[BoSize.extra_large, BoSize.default],
			])('returns correct spinner size for %s button size', (buttonSize, expectedSpinnerSize) => {
				const wrapper = createWrapper({ size: buttonSize });
				expect(wrapper.vm.loadingSpinnerSize).toBe(expectedSpinnerSize);
			});
		});

		describe('loadingSpinnerVariant', () => {
			it('returns secondary for secondary button variant', () => {
				const wrapper = createWrapper({ variant: BoVariant.secondary });
				expect(wrapper.vm.loadingSpinnerVariant).toBe(BoVariant.secondary);
			});

			it('returns white for white button variant', () => {
				const wrapper = createWrapper({ variant: BoVariant.white });
				expect(wrapper.vm.loadingSpinnerVariant).toBe(BoVariant.white);
			});

			it.each([
				BoVariant.primary,
				BoVariant.success,
				BoVariant.warning,
				BoVariant.danger,
				BoVariant.black,
			])('returns white for %s variant', (variant) => {
				const wrapper = createWrapper({ variant });
				expect(wrapper.vm.loadingSpinnerVariant).toBe(BoVariant.white);
			});
		});
	});

	describe('Edge Cases', () => {
		it('handles empty label gracefully', () => {
			const wrapper = createWrapper({ label: '' });
			expect(wrapper.find('button').exists()).toBe(true);
		});

		it('handles both loading and disabled states', () => {
			const wrapper = createWrapper({ isLoading: true, disabled: true });
			const button = wrapper.find('button');

			expect(button.classes()).toContain('bo-button--loading');
			expect(button.classes()).toContain('bo-button--disabled');
			expect(button.attributes('tabindex')).toBe('-1');
		});

		it('handles all props together', () => {
			const wrapper = createWrapper({
				id: 'test-btn',
				label: 'Test Button',
				size: BoSize.large,
				variant: BoVariant.success,
				prefixIcon: 'check',
				suffixIcon: 'arrow',
				fullWidth: true,
				disabled: false,
				customCssClass: 'custom-class',
			});

			expect(wrapper.find('button').exists()).toBe(true);
			expect(wrapper.classes()).toContain('custom-class');
			expect(wrapper.classes()).toContain('bo-button--full-width');
		});
	});
});
