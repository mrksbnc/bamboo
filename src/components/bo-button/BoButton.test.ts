import { Icon } from '@/components/bo-icon';
import { BoLoaderType, BoSize, HtmlButtonType } from '@/shared';
import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { BoButtonShape, BoButtonVariant } from './bo-button';
import BoButton from './BoButton.vue';

describe('BoButton.vue', () => {
	it('renders with default props', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me' },
		});
		expect(wrapper.text()).toBe('Click me');
		expect(wrapper.classes()).toContain('bo-button');
		expect(wrapper.classes()).toContain('bo-button--primary');
		expect(wrapper.classes()).toContain('bo-button--default');
	});

	it('renders with icon', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', prefixIcon: Icon.search },
		});
		expect(wrapper.find('.bo-button-icon').exists()).toBe(true);
	});

	it('renders with prefix icon', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', prefixIcon: Icon.search },
		});
		expect(wrapper.find('.bo-button-prefix-icon').exists()).toBe(true);
	});

	it('renders with suffix icon', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', suffixIcon: Icon.search },
		});
		expect(wrapper.find('.bo-button-suffix-icon').exists()).toBe(true);
	});

	it('renders as disabled', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', disabled: true },
		});
		expect(wrapper.classes()).toContain('cursor-not-allowed');
		expect(wrapper.classes()).toContain('opacity-50');
	});

	it('renders with custom class', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', className: 'custom-class' },
		});
		expect(wrapper.classes()).toContain('custom-class');
	});

	it('renders with specified variant', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', variant: BoButtonVariant.primary },
		});
		expect(wrapper.classes()).toContain('bo-button--primary');
	});

	it('renders with specified shape', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', shape: BoButtonShape.pill },
		});
		expect(wrapper.classes()).toContain('bo-button--pill');
	});

	it('renders with specified size', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', size: BoSize.large },
		});
		expect(wrapper.classes()).toContain('bo-button--large');
	});

	it('renders with specified color', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', color: 'primary' },
		});
		expect(wrapper.classes()).toContain('bg-blue-600');
	});

	it('emits click event when clicked', async () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me' },
		});
		await wrapper.trigger('click');
		expect(wrapper.emitted('click')).toBeTruthy();
	});

	it('does not emit click event when disabled', async () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', disabled: true },
		});
		await wrapper.trigger('click');
		expect(wrapper.emitted('click')).toBeFalsy();
	});

	it('renders as loading', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', isLoading: true },
		});
		expect(wrapper.find('.bo-button-loading').exists()).toBe(true);
		expect(wrapper.classes()).toContain('cursor-not-allowed');
	});

	it('renders with custom content', () => {
		const wrapper = mount(BoButton, {
			slots: {
				default: '<span class="custom-content">Custom Content</span>',
			},
		});
		expect(wrapper.find('.custom-content').exists()).toBe(true);
	});

	it('renders with full width', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', fullWidth: true },
		});
		expect(wrapper.classes()).toContain('w-full');
	});

	it('renders with pressed state', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', pressed: true },
		});
		expect(wrapper.attributes('aria-pressed')).toBe('true');
	});

	it('renders with custom aria label', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', ariaLabel: 'Custom Label' },
		});
		expect(wrapper.attributes('aria-label')).toBe('Custom Label');
	});

	it('renders with custom aria attributes', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				ariaLabel: 'Custom Label',
				ariaDescribedby: 'description-id',
				ariaExpanded: true,
			},
		});
		expect(wrapper.attributes('aria-label')).toBe('Custom Label');
		expect(wrapper.attributes('aria-describedby')).toBe('description-id');
		expect(wrapper.attributes('aria-expanded')).toBe('true');
	});

	it('renders with custom data attributes', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				dataTestId: 'test-button',
				dataTrackingId: 'track-123',
			},
		});
		expect(wrapper.attributes('data-testid')).toBe('test-button');
		expect(wrapper.attributes('data-tracking-id')).toBe('track-123');
	});

	it('renders with custom styles', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				style: { backgroundColor: 'red', color: 'white' },
			},
		});
		expect(wrapper.attributes('style')).toContain('background-color: red');
		expect(wrapper.attributes('style')).toContain('color: white');
	});

	it('renders with custom classes', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				class: 'custom-class-1 custom-class-2',
			},
		});
		expect(wrapper.classes()).toContain('custom-class-1');
		expect(wrapper.classes()).toContain('custom-class-2');
	});

	it('renders with custom event handlers', async () => {
		const onMouseEnter = vi.fn();
		const onMouseLeave = vi.fn();
		const onFocus = vi.fn();
		const onBlur = vi.fn();

		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				onMouseEnter,
				onMouseLeave,
				onFocus,
				onBlur,
			},
		});

		await wrapper.trigger('mouseenter');
		expect(onMouseEnter).toHaveBeenCalled();

		await wrapper.trigger('mouseleave');
		expect(onMouseLeave).toHaveBeenCalled();

		await wrapper.trigger('focus');
		expect(onFocus).toHaveBeenCalled();

		await wrapper.trigger('blur');
		expect(onBlur).toHaveBeenCalled();
	});

	it('renders with custom slots', () => {
		const wrapper = mount(BoButton, {
			slots: {
				default: '<span class="custom-content">Custom Content</span>',
				prefix: '<span class="custom-prefix">Prefix</span>',
				suffix: '<span class="custom-suffix">Suffix</span>',
			},
		});

		expect(wrapper.find('.custom-content').exists()).toBe(true);
		expect(wrapper.find('.custom-prefix').exists()).toBe(true);
		expect(wrapper.find('.custom-suffix').exists()).toBe(true);
	});

	it('renders with custom transitions', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				transition: 'fade',
			},
		});
		expect(wrapper.classes()).toContain('fade-enter-active');
	});

	it('renders with custom loading indicator', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				isLoading: true,
				loadingIndicator: '<span class="custom-loading">Loading...</span>',
			},
		});
		expect(wrapper.find('.custom-loading').exists()).toBe(true);
	});

	it('renders with custom error state', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				hasError: true,
				errorMessage: 'Error occurred',
			},
		});
		expect(wrapper.classes()).toContain('bo-button--error');
		expect(wrapper.attributes('aria-invalid')).toBe('true');
	});

	it('renders with custom success state', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				hasSuccess: true,
				successMessage: 'Success!',
			},
		});
		expect(wrapper.classes()).toContain('bo-button--success');
	});

	it('renders with custom warning state', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				hasWarning: true,
				warningMessage: 'Warning!',
			},
		});
		expect(wrapper.classes()).toContain('bo-button--warning');
	});

	it('renders with prefix icon', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', prefixIcon: Icon.search },
		});
		expect(wrapper.find('.bo-button__prefix-icon').exists()).toBe(true);
		expect(wrapper.find('.bo-button__content').exists()).toBe(true);
	});

	it('renders as icon-only button', () => {
		const wrapper = mount(BoButton, {
			props: { prefixIcon: Icon.search },
		});
		expect(wrapper.find('.bo-button__prefix-icon').exists()).toBe(true);
		expect(wrapper.find('.bo-button__label').exists()).toBe(false);
		expect(wrapper.attributes('aria-label')).toBe('Button with icon');
	});

	it('renders as loading with spinner', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', isLoading: true },
		});
		expect(wrapper.find('.bo-button__loader').exists()).toBe(true);
		expect(wrapper.attributes('aria-busy')).toBe('true');
		expect(wrapper.classes()).toContain('bo-button--loading');
	});

	it('renders as loading with pulse', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', isLoading: true, loaderType: BoLoaderType.pulse },
		});
		expect(wrapper.find('.bo-button__loader').exists()).toBe(true);
		expect(wrapper.attributes('aria-busy')).toBe('true');
	});

	it('renders as pressed', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', pressed: true },
		});
		expect(wrapper.attributes('aria-pressed')).toBe('true');
		expect(wrapper.classes()).toContain('bo-button--pressed');
	});

	it('renders with primary variant', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', variant: BoButtonVariant.primary },
		});
		expect(wrapper.classes()).toContain('bo-button--primary');
	});

	it('renders with secondary variant', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', variant: BoButtonVariant.secondary },
		});
		expect(wrapper.classes()).toContain('bo-button--secondary');
	});

	it('renders with danger variant', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', variant: BoButtonVariant.danger },
		});
		expect(wrapper.classes()).toContain('bo-button--danger');
	});

	it('renders with warning variant', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', variant: BoButtonVariant.warning },
		});
		expect(wrapper.classes()).toContain('bo-button--warning');
	});

	it('renders with success variant', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', variant: BoButtonVariant.success },
		});
		expect(wrapper.classes()).toContain('bo-button--success');
	});

	it('renders with default shape', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', shape: BoButtonShape.default },
		});
		expect(wrapper.classes()).toContain('bo-button--default');
	});

	it('renders with outline shape', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', shape: BoButtonShape.outline },
		});
		expect(wrapper.classes()).toContain('bo-button--outline');
	});

	it('renders with link shape', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', shape: BoButtonShape.link },
		});
		expect(wrapper.classes()).toContain('bo-button--link');
	});

	it('renders with extra small size', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', size: BoSize.extra_small },
		});
		expect(wrapper.classes()).toContain('bo-button--extra-small');
	});

	it('renders with small size', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', size: BoSize.small },
		});
		expect(wrapper.classes()).toContain('bo-button--small');
	});

	it('renders with default size', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', size: BoSize.default },
		});
		expect(wrapper.classes()).toContain('bo-button--default');
	});

	it('renders with large size', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', size: BoSize.large },
		});
		expect(wrapper.classes()).toContain('bo-button--large');
	});

	it('renders with extra large size', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', size: BoSize.extra_large },
		});
		expect(wrapper.classes()).toContain('bo-button--extra-large');
	});

	it('has proper ARIA attributes', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				ariaLabel: 'Custom Label',
				ariaDescribedby: 'description-id',
				ariaExpanded: true,
			},
		});
		expect(wrapper.attributes('aria-label')).toBe('Custom Label');
		expect(wrapper.attributes('aria-describedby')).toBe('description-id');
		expect(wrapper.attributes('aria-expanded')).toBe('true');
	});

	it('has proper ARIA attributes when loading', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', isLoading: true },
		});
		expect(wrapper.attributes('aria-busy')).toBe('true');
		expect(wrapper.attributes('aria-disabled')).toBe('true');
	});

	it('has proper ARIA attributes when disabled', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', disabled: true },
		});
		expect(wrapper.attributes('aria-disabled')).toBe('true');
		expect(wrapper.attributes('disabled')).toBeDefined();
	});

	it('does not emit click event when loading', async () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', isLoading: true },
		});
		await wrapper.trigger('click');
		expect(wrapper.emitted('click')).toBeFalsy();
	});

	it('responds to keyboard events', async () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me' },
		});
		await wrapper.trigger('keydown.enter');
		expect(wrapper.emitted('click')).toBeTruthy();
		await wrapper.trigger('keydown.space');
		expect(wrapper.emitted('click')).toHaveLength(2);
	});

	it('does not respond to keyboard events when disabled', async () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', disabled: true },
		});
		await wrapper.trigger('keydown.enter');
		expect(wrapper.emitted('click')).toBeFalsy();
	});

	it('renders with custom content slot', () => {
		const wrapper = mount(BoButton, {
			slots: {
				default: '<span class="custom-content">Custom Content</span>',
			},
		});
		expect(wrapper.find('.custom-content').exists()).toBe(true);
	});

	it('renders with custom prefix slot', () => {
		const wrapper = mount(BoButton, {
			slots: {
				prefix: '<span class="custom-prefix">Prefix</span>',
			},
		});
		expect(wrapper.find('.custom-prefix').exists()).toBe(true);
	});

	it('renders with custom suffix slot', () => {
		const wrapper = mount(BoButton, {
			slots: {
				suffix: '<span class="custom-suffix">Suffix</span>',
			},
		});
		expect(wrapper.find('.custom-suffix').exists()).toBe(true);
	});

	it('handles empty label with icon', () => {
		const wrapper = mount(BoButton, {
			props: { prefixIcon: Icon.search },
		});
		expect(wrapper.find('.bo-button__prefix-icon').exists()).toBe(true);
		expect(wrapper.find('.bo-button__label').exists()).toBe(false);
	});

	it('handles empty label without icon', () => {
		const wrapper = mount(BoButton, {
			props: { label: '' },
		});
		expect(wrapper.find('.bo-button__label').exists()).toBe(false);
		expect(wrapper.attributes('aria-label')).toBe('Button');
	});

	it('handles custom class names', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', class: 'custom-class-1 custom-class-2' },
		});
		expect(wrapper.classes()).toContain('custom-class-1');
		expect(wrapper.classes()).toContain('custom-class-2');
	});

	it('handles custom styles', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				style: { backgroundColor: 'red', color: 'white' },
			},
		});
		expect(wrapper.attributes('style')).toContain('background-color: red');
		expect(wrapper.attributes('style')).toContain('color: white');
	});

	it('handles focus state', async () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me' },
		});
		await wrapper.trigger('focus');
		expect(wrapper.classes()).toContain('focus-visible:ring-2');
		expect(wrapper.classes()).toContain('focus-visible:ring-offset-2');
		expect(wrapper.classes()).toContain('focus-visible:ring-blue-500');
	});

	it('renders with full width', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', fullWidth: true },
		});
		expect(wrapper.classes()).toContain('bo-button--full-width');
		expect(wrapper.classes()).toContain('w-full');
	});
});

describe('BoButton.vue - Edge Cases and Accessibility', () => {
	it('handles long text content gracefully', () => {
		const longText = 'A'.repeat(1000);
		const wrapper = mount(BoButton, {
			props: { label: longText },
		});
		expect(wrapper.find('.bo-button__label').exists()).toBe(true);
		expect(wrapper.find('.bo-button__label').text()).toBe(longText);
	});

	it('handles special characters in label', () => {
		const specialChars = '!@#$%^&*()_+{}|:"<>?';
		const wrapper = mount(BoButton, {
			props: { label: specialChars },
		});
		expect(wrapper.find('.bo-button__label').text()).toBe(specialChars);
	});

	it('handles RTL text direction', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'مرحبا', dir: 'rtl' },
		});
		expect(wrapper.attributes('dir')).toBe('rtl');
	});

	it('handles multiple states simultaneously', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				disabled: true,
				isLoading: true,
				pressed: true,
				hasError: true,
			},
		});
		expect(wrapper.classes()).toContain('bo-button--disabled');
		expect(wrapper.classes()).toContain('bo-button--loading');
		expect(wrapper.classes()).toContain('bo-button--pressed');
		expect(wrapper.classes()).toContain('bo-button--error');
		expect(wrapper.attributes('aria-disabled')).toBe('true');
		expect(wrapper.attributes('aria-busy')).toBe('true');
		expect(wrapper.attributes('aria-pressed')).toBe('true');
	});

	it('handles keyboard navigation with custom key bindings', async () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me' },
		});
		await wrapper.trigger('keydown.enter');
		expect(wrapper.emitted('click')).toBeTruthy();
		await wrapper.trigger('keydown.space');
		expect(wrapper.emitted('click')).toHaveLength(2);
		await wrapper.trigger('keydown.esc');
		expect(wrapper.emitted('keydown')).toBeTruthy();
	});

	it('handles focus management with keyboard', async () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me' },
		});
		await wrapper.trigger('focus');
		expect(wrapper.classes()).toContain('focus-visible:ring-2');
		await wrapper.trigger('blur');
		expect(wrapper.classes()).not.toContain('focus-visible:ring-2');
	});

	it('handles loading state transitions', async () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', isLoading: false },
		});
		expect(wrapper.find('.bo-button__loader').exists()).toBe(false);
		await wrapper.setProps({ isLoading: true });
		expect(wrapper.find('.bo-button__loader').exists()).toBe(true);
		expect(wrapper.classes()).toContain('bo-button--loading');
	});

	it('handles custom loading indicators', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				isLoading: true,
				loaderType: BoLoaderType.pulse,
			},
		});
		expect(wrapper.find('.bo-button__loader').exists()).toBe(true);
		expect(wrapper.classes()).toContain('bo-button--loading-pulse');
	});

	it('handles custom error states with messages', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				hasError: true,
				errorMessage: 'Invalid input',
			},
		});
		expect(wrapper.classes()).toContain('bo-button--error');
		expect(wrapper.attributes('aria-invalid')).toBe('true');
		expect(wrapper.attributes('aria-errormessage')).toBe('Invalid input');
	});

	it('handles custom success states with messages', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				hasSuccess: true,
				successMessage: 'Operation successful',
			},
		});
		expect(wrapper.classes()).toContain('bo-button--success');
		expect(wrapper.attributes('aria-describedby')).toBe('success-message');
	});

	it('handles custom warning states with messages', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				hasWarning: true,
				warningMessage: 'Proceed with caution',
			},
		});
		expect(wrapper.classes()).toContain('bo-button--warning');
		expect(wrapper.attributes('aria-describedby')).toBe('warning-message');
	});

	it('handles custom hover states', async () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me' },
		});
		await wrapper.trigger('mouseenter');
		expect(wrapper.classes()).toContain('hover:opacity-80');
		await wrapper.trigger('mouseleave');
		expect(wrapper.classes()).not.toContain('hover:opacity-80');
	});

	it('handles custom active states', async () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me' },
		});
		await wrapper.trigger('mousedown');
		expect(wrapper.classes()).toContain('active:opacity-90');
		await wrapper.trigger('mouseup');
		expect(wrapper.classes()).not.toContain('active:opacity-90');
	});

	it('handles custom focus states with keyboard', async () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me' },
		});
		await wrapper.trigger('focus');
		expect(wrapper.classes()).toContain('focus-visible:ring-2');
		expect(wrapper.classes()).toContain('focus-visible:ring-offset-2');
		expect(wrapper.classes()).toContain('focus-visible:ring-blue-500');
	});

	it('handles custom disabled states with keyboard', async () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', disabled: true },
		});
		await wrapper.trigger('keydown.enter');
		expect(wrapper.emitted('click')).toBeFalsy();
		expect(wrapper.classes()).toContain('cursor-not-allowed');
		expect(wrapper.classes()).toContain('opacity-50');
	});

	it('handles custom loading states with keyboard', async () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', isLoading: true },
		});
		await wrapper.trigger('keydown.enter');
		expect(wrapper.emitted('click')).toBeFalsy();
		expect(wrapper.classes()).toContain('cursor-not-allowed');
		expect(wrapper.attributes('aria-busy')).toBe('true');
	});

	it('handles custom pressed states with keyboard', async () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', pressed: true },
		});
		expect(wrapper.attributes('aria-pressed')).toBe('true');
		expect(wrapper.classes()).toContain('bo-button--pressed');
		await wrapper.trigger('keydown.space');
		expect(wrapper.emitted('click')).toBeTruthy();
	});

	it('handles custom full width states', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', fullWidth: true },
		});
		expect(wrapper.classes()).toContain('bo-button--full-width');
		expect(wrapper.classes()).toContain('w-full');
	});

	it('handles custom icon only states', () => {
		const wrapper = mount(BoButton, {
			props: { prefixIcon: Icon.search },
		});
		expect(wrapper.find('.bo-button__prefix-icon').exists()).toBe(true);
		expect(wrapper.find('.bo-button__label').exists()).toBe(false);
		expect(wrapper.attributes('aria-label')).toBe('Button with icon');
	});

	it('handles custom icon with label states', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', prefixIcon: Icon.search },
		});
		expect(wrapper.find('.bo-button__prefix-icon').exists()).toBe(true);
		expect(wrapper.find('.bo-button__label').exists()).toBe(true);
		expect(wrapper.find('.bo-button__content').exists()).toBe(true);
	});

	it('handles custom suffix icon states', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me', suffixIcon: Icon.search },
		});
		expect(wrapper.find('.bo-button__suffix-icon').exists()).toBe(true);
		expect(wrapper.find('.bo-button__label').exists()).toBe(true);
		expect(wrapper.find('.bo-button__content').exists()).toBe(true);
	});

	it('handles custom prefix and suffix icon states', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				prefixIcon: Icon.search,
				suffixIcon: Icon.arrow_right,
			},
		});
		expect(wrapper.find('.bo-button__prefix-icon').exists()).toBe(true);
		expect(wrapper.find('.bo-button__suffix-icon').exists()).toBe(true);
		expect(wrapper.find('.bo-button__label').exists()).toBe(true);
		expect(wrapper.find('.bo-button__content').exists()).toBe(true);
	});
});

describe('BoButton.vue - Additional Edge Cases and Accessibility', () => {
	it('handles dynamic state changes', async () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me' },
		});

		// Test disabled state change
		await wrapper.setProps({ disabled: true });
		expect(wrapper.classes()).toContain('bo-button--disabled');
		expect(wrapper.attributes('aria-disabled')).toBe('true');

		// Test loading state change
		await wrapper.setProps({ isLoading: true });
		expect(wrapper.classes()).toContain('bo-button--loading');
		expect(wrapper.attributes('aria-busy')).toBe('true');

		// Test pressed state change
		await wrapper.setProps({ pressed: true });
		expect(wrapper.classes()).toContain('bo-button--pressed');
		expect(wrapper.attributes('aria-pressed')).toBe('true');
	});

	it('handles custom role attributes', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				role: 'menuitem',
			},
		});
		expect(wrapper.attributes('role')).toBe('menuitem');
	});

	it('handles custom tabindex', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				tabindex: -1,
			},
		});
		expect(wrapper.attributes('tabindex')).toBe('-1');
	});

	it('handles form submission', async () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Submit',
				type: HtmlButtonType.submit,
			},
		});
		expect(wrapper.attributes('type')).toBe('submit');
		await wrapper.trigger('click');
		expect(wrapper.emitted('submit')).toBeTruthy();
	});

	it('handles form reset', async () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Reset',
				type: HtmlButtonType.reset,
			},
		});
		expect(wrapper.attributes('type')).toBe('reset');
		await wrapper.trigger('click');
		expect(wrapper.emitted('reset')).toBeTruthy();
	});

	it('handles custom data attributes for testing', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				dataTestId: 'test-button',
				dataTrackingId: 'track-123',
			},
		});
		expect(wrapper.attributes('data-testid')).toBe('test-button');
		expect(wrapper.attributes('data-tracking-id')).toBe('track-123');
	});

	it('handles custom event handlers with modifiers', async () => {
		const onKeydown = vi.fn();
		const onKeyup = vi.fn();
		const onKeypress = vi.fn();

		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				onKeydown,
				onKeyup,
				onKeypress,
			},
		});

		await wrapper.trigger('keydown.enter');
		expect(onKeydown).toHaveBeenCalled();

		await wrapper.trigger('keyup.enter');
		expect(onKeyup).toHaveBeenCalled();

		await wrapper.trigger('keypress.enter');
		expect(onKeypress).toHaveBeenCalled();
	});

	it('handles custom transition classes', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				transition: 'fade',
			},
		});
		expect(wrapper.classes()).toContain('fade-enter-active');
		expect(wrapper.classes()).toContain('fade-leave-active');
	});

	it('handles custom loading text', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				isLoading: true,
				loadingText: 'Loading...',
			},
		});
		expect(wrapper.find('.bo-button__loading-text').exists()).toBe(true);
		expect(wrapper.find('.bo-button__loading-text').text()).toBe('Loading...');
	});

	it('handles custom error icon', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				hasError: true,
				errorIcon: Icon.x_circle,
			},
		});
		expect(wrapper.find('.bo-button__error-icon').exists()).toBe(true);
		expect(wrapper.classes()).toContain('bo-button--error');
	});

	it('handles custom success icon', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				hasSuccess: true,
				successIcon: Icon.check,
			},
		});
		expect(wrapper.find('.bo-button__success-icon').exists()).toBe(true);
		expect(wrapper.classes()).toContain('bo-button--success');
	});

	it('handles custom warning icon', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				hasWarning: true,
				warningIcon: Icon.alert_triangle,
			},
		});
		expect(wrapper.find('.bo-button__warning-icon').exists()).toBe(true);
		expect(wrapper.classes()).toContain('bo-button--warning');
	});

	it('handles custom loading icon', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				isLoading: true,
				loadingIcon: Icon.refresh_cw,
			},
		});
		expect(wrapper.find('.bo-button__loading-icon').exists()).toBe(true);
		expect(wrapper.classes()).toContain('bo-button--loading');
	});

	it('handles custom pressed icon', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				pressed: true,
				pressedIcon: Icon.check,
			},
		});
		expect(wrapper.find('.bo-button__pressed-icon').exists()).toBe(true);
		expect(wrapper.classes()).toContain('bo-button--pressed');
	});

	it('handles custom disabled icon', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				disabled: true,
				disabledIcon: Icon.lock,
			},
		});
		expect(wrapper.find('.bo-button__disabled-icon').exists()).toBe(true);
		expect(wrapper.classes()).toContain('bo-button--disabled');
	});

	it('handles custom hover icon', async () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				hoverIcon: Icon.arrow_right,
			},
		});
		await wrapper.trigger('mouseenter');
		expect(wrapper.find('.bo-button__hover-icon').exists()).toBe(true);
		expect(wrapper.classes()).toContain('bo-button--hover');
	});

	it('handles custom focus icon', async () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				focusIcon: Icon.arrow_right,
			},
		});
		await wrapper.trigger('focus');
		expect(wrapper.find('.bo-button__focus-icon').exists()).toBe(true);
		expect(wrapper.classes()).toContain('bo-button--focus');
	});

	it('handles custom active icon', async () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
				activeIcon: Icon.arrow_right,
			},
		});
		await wrapper.trigger('mousedown');
		expect(wrapper.find('.bo-button__active-icon').exists()).toBe(true);
		expect(wrapper.classes()).toContain('bo-button--active');
	});
});
