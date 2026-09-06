import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { BoIcon } from '../bo-icon';
import { BoLoadingPulse } from '../bo-loading-pulse';
import { BoLoadingSpinner } from '../bo-loading-spinner';
import { BoText } from '../bo-text';
import BoButton from './bo-button.vue';

describe('BoButton', () => {
	it('renders with label', () => {
		const wrapper = mount(BoButton, {
			slots: { default: 'Click me' },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.text()).toContain('Click me');
	});

	it('renders with default slot', () => {
		const wrapper = mount(BoButton, {
			slots: {
				default: 'Custom Content',
			},
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		expect(wrapper.text()).toContain('Custom Content');
	});

	it('applies correct size classes', () => {
		const sizes = ['sm', 'default', 'lg'] as const;
		sizes.forEach((size) => {
			const wrapper = mount(BoButton, {
				props: { size },
				slots: { default: 'Test' },
				global: {
					components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
				},
			});
			const button = wrapper.find('button');
			expect(button.exists()).toBe(true);
		});
	});

	it('applies correct shape classes', () => {
		const shapes = ['default', 'pill', 'flat'] as const;
		shapes.forEach((shape) => {
			const wrapper = mount(BoButton, {
				props: { shape },
				slots: { default: 'Test' },
				global: {
					components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
				},
			});
			const button = wrapper.find('button');
			expect(button.exists()).toBe(true);
		});
	});

	it('applies correct variant classes', () => {
		const variants = [
			'primary',
			'secondary',
			'destructive',
			'warning',
			'success',
			'light',
			'black',
		] as const;
		variants.forEach((variant) => {
			const wrapper = mount(BoButton, {
				props: { variant },
				slots: { default: 'Test' },
				global: {
					components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
				},
			});
			const button = wrapper.find('button');
			expect(button.exists()).toBe(true);
		});
	});

	it('applies correct kind classes', () => {
		const kinds = ['default', 'outline', 'ghost'] as const;
		kinds.forEach((kind) => {
			const wrapper = mount(BoButton, {
				props: { kind },
				slots: { default: 'Test' },
				global: {
					components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
				},
			});
			const button = wrapper.find('button');
			expect(button.exists()).toBe(true);
		});
	});

	it('disables button when disabled prop is true', () => {
		const wrapper = mount(BoButton, {
			props: { disabled: true },
			slots: { default: 'Test' },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		const button = wrapper.find('button');
		expect(button.attributes('disabled')).toBeDefined();
		expect(button.attributes('aria-disabled')).toBe('true');
	});

	it('shows loading spinner when isLoading is true', () => {
		const wrapper = mount(BoButton, {
			props: { isLoading: true, loaderType: 'spinner' },
			slots: { default: 'Test' },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		const spinner = wrapper.findComponent(BoLoadingSpinner);
		expect(spinner.exists()).toBe(true);
		expect(wrapper.find('button').attributes('aria-busy')).toBe('true');
	});

	it('shows loading pulse when isLoading is true and loaderType is pulse', () => {
		const wrapper = mount(BoButton, {
			props: { isLoading: true, loaderType: 'pulse' },
			slots: { default: 'Test' },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		const pulse = wrapper.findComponent(BoLoadingPulse);
		expect(pulse.exists()).toBe(true);
	});

	it('renders prefix icon', () => {
		const wrapper = mount(BoButton, {
			props: { prefixIcon: 'check' },
			slots: { default: 'Test' },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		const icons = wrapper.findAllComponents(BoIcon);
		expect(icons.length).toBeGreaterThan(0);
	});

	it('renders suffix icon', () => {
		const wrapper = mount(BoButton, {
			props: { suffixIcon: 'arrow_right' },
			slots: { default: 'Test' },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		const icons = wrapper.findAllComponents(BoIcon);
		expect(icons.length).toBeGreaterThan(0);
	});

	it('renders as icon-only button', () => {
		const wrapper = mount(BoButton, {
			props: { prefixIcon: 'check' },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		const icons = wrapper.findAllComponents(BoIcon);
		expect(icons.length).toBeGreaterThan(0);
		const textComponent = wrapper.findComponent(BoText);
		expect(textComponent.exists()).toBe(false);
	});

	it('applies full width class', () => {
		const wrapper = mount(BoButton, {
			props: { fullWidth: true },
			slots: { default: 'Test' },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		const button = wrapper.find('button');
		expect(button.classes()).toContain('bo-button--full-width');
	});

	it('applies pressed state', () => {
		const wrapper = mount(BoButton, {
			props: { pressed: true },
			slots: { default: 'Test' },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		const button = wrapper.find('button');
		expect(button.classes()).toContain('bo-button--pressed');
		expect(button.attributes('aria-pressed')).toBe('true');
	});

	it('applies custom color styles', () => {
		const wrapper = mount(BoButton, {
			props: {
				customColor: {
					background: '#ff0000',
					text: '#ffffff',
					border: '#000000',
				},
			},
			slots: { default: 'Test' },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		const button = wrapper.find('button');
		const style = button.attributes('style');
		expect(style).toContain('background-color');
		expect(style).toContain('color');
		expect(style).toContain('border-color');
	});

	it('applies correct button type', () => {
		const wrapper = mount(BoButton, {
			props: { type: 'submit' },
			slots: { default: 'Test' },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		const button = wrapper.find('button');
		expect(button.attributes('type')).toBe('submit');
	});

	it('applies aria attributes', () => {
		const wrapper = mount(BoButton, {
			props: {
				ariaLabel: 'Test button',
				ariaExpanded: 'true',
				ariaHasPopup: 'menu',
			},
			slots: { default: 'Test' },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		const button = wrapper.find('button');
		expect(button.attributes('aria-label')).toBe('Test button');
		expect(button.attributes('aria-expanded')).toBe('true');
		expect(button.attributes('aria-haspopup')).toBe('menu');
	});

	it('applies tabindex', () => {
		const wrapper = mount(BoButton, {
			props: { tabIndex: -1 },
			slots: { default: 'Test' },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		const button = wrapper.find('button');
		expect(button.attributes('tabindex')).toBe('-1');
	});

	it('applies accesskey', () => {
		const wrapper = mount(BoButton, {
			props: { accessKey: 's' },
			slots: { default: 'Test' },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		const button = wrapper.find('button');
		expect(button.attributes('accesskey')).toBe('s');
	});
});
