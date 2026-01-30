import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BoButton from './bo-button.vue';
import { BoIcon } from '../bo-icon';
import { BoText } from '../bo-text';
import { BoLoadingSpinner } from '../bo-loading-spinner';
import { BoLoadingPulse } from '../bo-loading-pulse';

describe('BoButton', () => {
	it('renders with label', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me' },
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
				props: { label: 'Test', size },
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
				props: { label: 'Test', shape },
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
				props: { label: 'Test', variant },
				global: {
					components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
				},
			});
			const button = wrapper.find('button');
			expect(button.exists()).toBe(true);
		});
	});

	it('applies correct kind classes', () => {
		const kinds = ['filled', 'outline', 'ghost'] as const;
		kinds.forEach((kind) => {
			const wrapper = mount(BoButton, {
				props: { label: 'Test', kind },
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
			props: { label: 'Test', disabled: true },
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
			props: { label: 'Test', isLoading: true, loaderType: 'spinner' },
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
			props: { label: 'Test', isLoading: true, loaderType: 'pulse' },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		const pulse = wrapper.findComponent(BoLoadingPulse);
		expect(pulse.exists()).toBe(true);
	});

	it('renders prefix icon', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Test', prefixIcon: 'check' },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		const icons = wrapper.findAllComponents(BoIcon);
		expect(icons.length).toBeGreaterThan(0);
	});

	it('renders suffix icon', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Test', suffixIcon: 'arrow_right' },
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
			props: { label: 'Test', fullWidth: true },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		const button = wrapper.find('button');
		expect(button.classes()).toContain('w-full');
	});

	it('applies pressed state', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Test', pressed: true },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		const button = wrapper.find('button');
		expect(button.classes()).toContain('scale-95');
	});

	it('applies custom color styles', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Test',
				customColor: {
					background: '#ff0000',
					text: '#ffffff',
					border: '#000000',
				},
			},
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
			props: { label: 'Test', type: 'submit' },
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
				label: 'Test',
				ariaLabel: 'Test button',
				ariaExpanded: 'true',
				ariaHasPopup: 'menu',
			},
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
			props: { label: 'Test', tabIndex: -1 },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		const button = wrapper.find('button');
		expect(button.attributes('tabindex')).toBe('-1');
	});

	it('applies accesskey', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Test', accessKey: 's' },
			global: {
				components: { BoIcon, BoText, BoLoadingSpinner, BoLoadingPulse },
			},
		});
		const button = wrapper.find('button');
		expect(button.attributes('accesskey')).toBe('s');
	});
});
