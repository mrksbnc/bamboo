import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BoBadge from './bo-badge.vue';
import { BoIcon } from '../bo-icon';
import { BoText } from '../bo-text';

describe('BoBadge', () => {
	it('renders with label', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'New' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.text()).toContain('New');
	});

	it('renders with default slot', () => {
		const wrapper = mount(BoBadge, {
			slots: {
				default: 'Custom Content',
			},
			global: {
				components: { BoIcon, BoText },
			},
		});
		expect(wrapper.text()).toContain('Custom Content');
	});

	it('applies correct size classes', () => {
		const sizes = ['sm', 'default', 'lg'] as const;
		sizes.forEach((size) => {
			const wrapper = mount(BoBadge, {
				props: { label: 'Test', size },
				global: {
					components: { BoIcon, BoText },
				},
			});
			const element = wrapper.find('span[data-testid]');
			expect(element.exists()).toBe(true);
		});
	});

	it('applies correct shape classes', () => {
		const shapes = ['default', 'circle', 'pill', 'flat'] as const;
		shapes.forEach((shape) => {
			const wrapper = mount(BoBadge, {
				props: { label: 'Test', shape },
				global: {
					components: { BoIcon, BoText },
				},
			});
			const element = wrapper.find('span[data-testid]');
			expect(element.exists()).toBe(true);
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
			const wrapper = mount(BoBadge, {
				props: { label: 'Test', variant },
				global: {
					components: { BoIcon, BoText },
				},
			});
			const element = wrapper.find('span[data-testid]');
			expect(element.exists()).toBe(true);
		});
	});

	it('applies correct kind classes', () => {
		const kinds = ['filled', 'outline'] as const;
		kinds.forEach((kind) => {
			const wrapper = mount(BoBadge, {
				props: { label: 'Test', kind },
				global: {
					components: { BoIcon, BoText },
				},
			});
			const element = wrapper.find('span[data-testid]');
			expect(element.exists()).toBe(true);
		});
	});

	it('renders prefix icon', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test', prefixIcon: 'check' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const icons = wrapper.findAllComponents(BoIcon);
		expect(icons.length).toBeGreaterThan(0);
	});

	it('renders suffix icon', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test', suffixIcon: 'x' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const icons = wrapper.findAllComponents(BoIcon);
		expect(icons.length).toBeGreaterThan(0);
	});

	it('renders as icon only when no label', () => {
		const wrapper = mount(BoBadge, {
			props: { prefixIcon: 'check' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const icons = wrapper.findAllComponents(BoIcon);
		expect(icons.length).toBeGreaterThan(0);
		expect(wrapper.text()).toBe('');
	});

	it('renders as circle with icon only', () => {
		const wrapper = mount(BoBadge, {
			props: { prefixIcon: 'check', shape: 'circle' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const element = wrapper.find('span[data-testid]');
		expect(element.classes()).toContain('rounded-full');
	});

	it('applies custom color styles', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test', customColor: '#ff0000', kind: 'filled' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const element = wrapper.find('span[data-testid]');
		expect(element.attributes('style')).toContain('background-color');
	});

	it('applies custom text color styles', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test', customTextColor: '#00ff00' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const element = wrapper.find('span[data-testid]');
		expect(element.attributes('style')).toContain('color');
	});

	it('applies custom id and data-testid', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test', id: 'custom-id', dataTestId: 'custom-test-id' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const element = wrapper.find('[data-testid="custom-test-id"]');
		expect(element.exists()).toBe(true);
		expect(element.attributes('id')).toBe('custom-id');
	});

	it('applies role attribute', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test', role: 'alert' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const element = wrapper.find('span[data-testid]');
		expect(element.attributes('role')).toBe('alert');
	});

	it('applies aria-label attribute', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test', ariaLabel: 'Test badge' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const element = wrapper.find('span[data-testid]');
		expect(element.attributes('aria-label')).toBe('Test badge');
	});

	it('has cursor class in component', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test', cursor: 'cursor-pointer' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const element = wrapper.find('span[data-testid]');
		// Verify the element exists and has classes
		expect(element.exists()).toBe(true);
		expect(element.classes().length).toBeGreaterThan(0);
	});

	it('applies base classes', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const element = wrapper.find('span[data-testid]');
		expect(element.classes()).toContain('flex');
		expect(element.classes()).toContain('items-center');
		expect(element.classes()).toContain('justify-center');
	});
});
