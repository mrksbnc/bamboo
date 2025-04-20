import { Icon } from '@/components/bo-icon';
import { BoLoaderType, BoSize, HtmlButtonType } from '@/shared';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoButton from './BoButton.vue';
import { BoButtonShape, BoButtonVariant } from './bo-button';

describe('BoButton', () => {
	it('renders correctly with default props', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Button',
			},
		});

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.classes()).toContain('bo-button');
		expect(wrapper.attributes('type')).toBe('button');
	});

	it('renders with different variants', async () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Button',
				variant: BoButtonVariant.primary,
			},
		});

		expect(wrapper.classes()).toContain('bg-blue-600');

		await wrapper.setProps({ variant: BoButtonVariant.secondary });
		expect(wrapper.classes()).toContain('bg-neutral-400');

		await wrapper.setProps({ variant: BoButtonVariant.danger });
		expect(wrapper.classes()).toContain('bg-red-600');

		await wrapper.setProps({ variant: BoButtonVariant.warning });
		expect(wrapper.classes()).toContain('bg-yellow-500');

		await wrapper.setProps({ variant: BoButtonVariant.success });
		expect(wrapper.classes()).toContain('bg-green-600');

		await wrapper.setProps({ variant: BoButtonVariant.light });
		expect(wrapper.classes()).toContain('bg-white');

		await wrapper.setProps({ variant: BoButtonVariant.dark });
		expect(wrapper.classes()).toContain('bg-black');
	});

	it('renders with different shapes', async () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Button',
				shape: BoButtonShape.default,
			},
		});

		expect(wrapper.classes()).toContain('rounded-lg');

		await wrapper.setProps({ shape: BoButtonShape.pill });
		expect(wrapper.classes()).toContain('rounded-full');

		await wrapper.setProps({ shape: BoButtonShape.link });
		expect(wrapper.classes()).toContain('rounded-none');
		expect(wrapper.classes()).toContain('shadow-none');

		await wrapper.setProps({ shape: BoButtonShape.outline });
		expect(wrapper.classes()).toContain('rounded-lg');
		expect(wrapper.classes()).toContain('bg-transparent');
	});

	it('renders with different sizes', async () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Button',
				size: BoSize.default,
			},
		});

		expect(wrapper.classes()).toContain('px-4');
		expect(wrapper.classes()).toContain('py-2.5');

		await wrapper.setProps({ size: BoSize.small });
		expect(wrapper.classes()).toContain('px-2');
		expect(wrapper.classes()).toContain('py-2');

		await wrapper.setProps({ size: BoSize.large });
		expect(wrapper.classes()).toContain('px-4');
		expect(wrapper.classes()).toContain('py-3');

		await wrapper.setProps({ size: BoSize.extra_small });
		expect(wrapper.classes()).toContain('px-1');
		expect(wrapper.classes()).toContain('py-1');

		await wrapper.setProps({ size: BoSize.extra_large });
		expect(wrapper.classes()).toContain('px-5');
		expect(wrapper.classes()).toContain('py-3.5');
	});

	it('renders with prefix icon', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Button',
				prefixIcon: Icon.check,
			},
		});

		const icon = wrapper.findComponent({ name: 'bo-icon' });
		expect(icon.exists()).toBe(true);
		expect(icon.classes()).toContain('bo-button__prefix-icon');
	});

	it('renders with suffix icon', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Button',
				suffixIcon: Icon.check,
			},
		});

		const icon = wrapper.findComponent({ name: 'bo-icon' });
		expect(icon.exists()).toBe(true);
		expect(icon.classes()).toContain('bo-button__suffix-icon');
	});

	it('renders icon-only button correctly', () => {
		const wrapper = mount(BoButton, {
			props: {
				prefixIcon: Icon.check,
			},
		});

		const icon = wrapper.findComponent({ name: 'bo-icon' });
		expect(icon.exists()).toBe(true);
		expect(icon.classes()).toContain('bo-button__prefix-icon');

		// No label should be rendered
		expect(wrapper.find('.bo-button__label').exists()).toBe(false);
	});

	it('applies different padding for icon-only button', () => {
		const wrapper = mount(BoButton, {
			props: {
				prefixIcon: Icon.check,
				size: BoSize.default,
			},
		});

		expect(wrapper.classes()).toContain('p-3');
	});

	it('disables the button when disabled prop is true', async () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Button',
				disabled: false,
			},
		});

		expect(wrapper.attributes('disabled')).toBeUndefined();
		expect(wrapper.attributes('aria-disabled')).toBe('false');

		await wrapper.setProps({ disabled: true });
		expect(wrapper.attributes('disabled')).toBeDefined();
		expect(wrapper.attributes('aria-disabled')).toBe('true');
		expect(wrapper.classes()).toContain('disabled:cursor-not-allowed');
	});

	it('shows loading state correctly with spinner', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Button',
				isLoading: true,
				loaderType: BoLoaderType.spinner,
			},
		});

		expect(wrapper.findComponent({ name: 'bo-loading-spinner' }).exists()).toBe(true);
		expect(wrapper.attributes('aria-busy')).toBe('true');
		expect(wrapper.attributes('disabled')).toBeDefined();
	});

	it('shows loading state correctly with pulse', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Button',
				isLoading: true,
				loaderType: BoLoaderType.pulse,
			},
		});

		expect(wrapper.findComponent({ name: 'bo-loading-pulse' }).exists()).toBe(true);
		expect(wrapper.attributes('aria-busy')).toBe('true');
	});

	it('applies full width when fullWidth prop is true', async () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Button',
				fullWidth: false,
			},
		});

		expect(wrapper.classes()).toContain('w-auto');

		await wrapper.setProps({ fullWidth: true });
		expect(wrapper.classes()).toContain('w-full');
	});

	it('applies pressed state correctly', async () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Button',
				pressed: false,
			},
		});

		expect(wrapper.attributes('aria-pressed')).toBe('false');

		await wrapper.setProps({ pressed: true });
		expect(wrapper.attributes('aria-pressed')).toBe('true');
	});

	it('applies different button types', async () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Button',
				type: HtmlButtonType.button,
			},
		});

		expect(wrapper.attributes('type')).toBe('button');

		await wrapper.setProps({ type: HtmlButtonType.submit });
		expect(wrapper.attributes('type')).toBe('submit');

		await wrapper.setProps({ type: HtmlButtonType.reset });
		expect(wrapper.attributes('type')).toBe('reset');
	});

	it('applies aria-label correctly', async () => {
		const wrapper = mount(BoButton, {
			props: {
				prefixIcon: Icon.check,
				ariaLabel: 'Check button',
			},
		});

		expect(wrapper.attributes('aria-label')).toBe('Check button');
	});

	it('applies autofocus attribute when autofocus prop is true', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Button',
				autofocus: true,
			},
		});

		expect(wrapper.attributes('autofocus')).toBeDefined();
	});

	it('renders custom content when useSlot is true', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Button',
			},
			slots: {
				default: '<div data-test="custom-content">Custom Content</div>',
			},
		});

		expect(wrapper.find('[data-test="custom-content"]').exists()).toBe(true);
	});

	it('applies custom id when provided', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Button',
				id: 'custom-button-id',
			},
		});

		expect(wrapper.attributes('id')).toBe('custom-button-id');
	});
});
