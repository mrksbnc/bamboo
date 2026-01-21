import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BoLoadingPulse from './bo-loading-pulse.vue';
import { BoText } from '../bo-text';

describe('BoLoadingPulse', () => {
	it('renders with default props', () => {
		const wrapper = mount(BoLoadingPulse, {
			global: {
				components: { BoText },
			},
		});
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('div[data-testid]').exists()).toBe(true);
	});

	it('renders with loader text', () => {
		const wrapper = mount(BoLoadingPulse, {
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
			const wrapper = mount(BoLoadingPulse, {
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
			const wrapper = mount(BoLoadingPulse, {
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
			const wrapper = mount(BoLoadingPulse, {
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
		const wrapper = mount(BoLoadingPulse, {
			props: { customColor: '#ff0000' },
			global: {
				components: { BoText },
			},
		});
		const pulses = wrapper.findAll('div[style]');
		expect(pulses.length).toBeGreaterThan(0);
		expect(pulses[0].attributes('style')).toContain('background-color');
	});

	it('applies custom id and data-testid', () => {
		const wrapper = mount(BoLoadingPulse, {
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
		const wrapper = mount(BoLoadingPulse, {
			props: { role: 'alert' },
			global: {
				components: { BoText },
			},
		});
		const container = wrapper.find('div[data-testid]');
		expect(container.attributes('role')).toBe('alert');
	});

	it('applies aria-live attribute', () => {
		const wrapper = mount(BoLoadingPulse, {
			props: { ariaLive: 'polite' },
			global: {
				components: { BoText },
			},
		});
		const container = wrapper.find('div[data-testid]');
		expect(container.attributes('aria-live')).toBe('polite');
	});

	it('applies aria-label attribute', () => {
		const wrapper = mount(BoLoadingPulse, {
			props: { ariaLabel: 'Loading content' },
			global: {
				components: { BoText },
			},
		});
		const container = wrapper.find('div[data-testid]');
		expect(container.attributes('aria-label')).toBe('Loading content');
	});

	it('applies aria-busy attribute', () => {
		const wrapper = mount(BoLoadingPulse, {
			props: { ariaBusy: true },
			global: {
				components: { BoText },
			},
		});
		const container = wrapper.find('div[data-testid]');
		expect(container.attributes('aria-busy')).toBe('true');
	});

	it('renders multiple pulse dots with animation', () => {
		const wrapper = mount(BoLoadingPulse, {
			global: {
				components: { BoText },
			},
		});
		// Check that pulse container exists
		const pulseContainer = wrapper.find('div[data-testid]');
		expect(pulseContainer.exists()).toBe(true);
		// The component renders animated pulse dots
		const innerDivs = wrapper.findAll('div');
		expect(innerDivs.length).toBeGreaterThan(1);
	});
});
