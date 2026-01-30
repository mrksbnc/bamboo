import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BoLoadingSpinner from './bo-loading-spinner.vue';
import { BoText } from '../bo-text';

describe('BoLoadingSpinner', () => {
	it('renders with default props', () => {
		const wrapper = mount(BoLoadingSpinner, {
			global: {
				components: { BoText },
			},
		});
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('div[data-testid]').exists()).toBe(true);
	});

	it('renders with loader text', () => {
		const wrapper = mount(BoLoadingSpinner, {
			props: { loaderText: 'Loading...' },
			global: {
				components: { BoText },
			},
		});
		expect(wrapper.text()).toContain('Loading...');
	});

	it('applies correct size classes', () => {
		const sizes = ['xs', 'sm', 'default', 'lg'] as const;
		sizes.forEach((size) => {
			const wrapper = mount(BoLoadingSpinner, {
				props: { size },
				global: {
					components: { BoText },
				},
			});
			const container = wrapper.find('div[data-testid]');
			expect(container.exists()).toBe(true);
		});
	});

	it('applies correct variant classes', () => {
		const variants = [
			'primary',
			'secondary',
			'success',
			'warning',
			'destructive',
			'white',
			'black',
		] as const;
		variants.forEach((variant) => {
			const wrapper = mount(BoLoadingSpinner, {
				props: { variant },
				global: {
					components: { BoText },
				},
			});
			const container = wrapper.find('div[data-testid]');
			expect(container.exists()).toBe(true);
		});
	});

	it('applies correct text position classes', () => {
		const positions = ['before', 'after'] as const;
		positions.forEach((position) => {
			const wrapper = mount(BoLoadingSpinner, {
				props: { loaderText: 'Loading', textPosition: position },
				global: {
					components: { BoText },
				},
			});
			const container = wrapper.find('div[data-testid]');
			expect(container.exists()).toBe(true);
		});
	});

	it('applies custom color styles', () => {
		const wrapper = mount(BoLoadingSpinner, {
			props: { customColor: '#ff0000' },
			global: {
				components: { BoText },
			},
		});
		const spinner = wrapper.find('div[aria-hidden="true"]');
		expect(spinner.attributes('style')).toContain('color');
	});

	it('applies custom id and data-testid', () => {
		const wrapper = mount(BoLoadingSpinner, {
			props: { id: 'custom-id', dataTestId: 'custom-test-id' },
			global: {
				components: { BoText },
			},
		});
		const container = wrapper.find('[data-testid="custom-test-id"]');
		expect(container.exists()).toBe(true);
		expect(container.attributes('id')).toBe('custom-id');
	});

	it('applies role attribute', () => {
		const wrapper = mount(BoLoadingSpinner, {
			props: { role: 'alert' },
			global: {
				components: { BoText },
			},
		});
		const container = wrapper.find('div[data-testid]');
		expect(container.attributes('role')).toBe('alert');
	});

	it('applies aria-live attribute', () => {
		const wrapper = mount(BoLoadingSpinner, {
			props: { ariaLive: 'polite' },
			global: {
				components: { BoText },
			},
		});
		const container = wrapper.find('div[data-testid]');
		expect(container.attributes('aria-live')).toBe('polite');
	});

	it('applies aria-label attribute', () => {
		const wrapper = mount(BoLoadingSpinner, {
			props: { ariaLabel: 'Loading content' },
			global: {
				components: { BoText },
			},
		});
		const container = wrapper.find('div[data-testid]');
		expect(container.attributes('aria-label')).toBe('Loading content');
	});

	it('applies aria-busy attribute', () => {
		const wrapper = mount(BoLoadingSpinner, {
			props: { ariaBusy: true },
			global: {
				components: { BoText },
			},
		});
		const container = wrapper.find('div[data-testid]');
		expect(container.attributes('aria-busy')).toBe('true');
	});

	it('renders spinner with animation', () => {
		const wrapper = mount(BoLoadingSpinner, {
			global: {
				components: { BoText },
			},
		});
		const spinner = wrapper.find('div[aria-hidden="true"]');
		expect(spinner.exists()).toBe(true);
		expect(spinner.classes()).toContain('animate-spin');
	});
});
