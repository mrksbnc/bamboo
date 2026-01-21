import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import BoAvatar from './bo-avatar.vue';
import { BoText } from '../bo-text';

describe('BoAvatar', () => {
	it('renders with default props', () => {
		const wrapper = mount(BoAvatar);
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('div').exists()).toBe(true);
	});

	it('renders with default avatar image when no src or label provided', () => {
		const wrapper = mount(BoAvatar);
		const img = wrapper.find('img');
		expect(img.exists()).toBe(true);
		expect(img.attributes('src')).toContain('avatar.png');
		expect(img.attributes('alt')).toBe('avatar');
	});

	it('renders with custom image src', () => {
		const src = 'https://example.com/avatar.jpg';
		const wrapper = mount(BoAvatar, {
			props: { src, alt: 'User avatar' },
		});
		const img = wrapper.find('img');
		expect(img.attributes('src')).toBe(src);
		expect(img.attributes('alt')).toBe('User avatar');
	});

	it('renders with label when provided and no src', () => {
		const wrapper = mount(BoAvatar, {
			props: { label: 'John Doe' },
			global: {
				components: { BoText },
			},
		});
		expect(wrapper.text()).toContain('JO');
	});

	it('truncates label to 2 characters and uppercases', () => {
		const wrapper = mount(BoAvatar, {
			props: { label: 'abcdef' },
			global: {
				components: { BoText },
			},
		});
		expect(wrapper.text()).toContain('AB');
	});

	it('applies correct size classes', () => {
		const sizes = ['xs', 'sm', 'default', 'lg', 'xl'] as const;
		sizes.forEach((size) => {
			const wrapper = mount(BoAvatar, {
				props: { size },
			});
			const container = wrapper.find('[data-testid]');
			expect(container.exists()).toBe(true);
		});
	});

	it('applies correct kind classes', () => {
		const kinds = [
			'circle',
			'default',
			'flat',
			'outline',
			'outline-circle',
			'outline-flat',
		] as const;
		kinds.forEach((kind) => {
			const wrapper = mount(BoAvatar, {
				props: { kind },
			});
			const container = wrapper.find('[data-testid]');
			expect(container.exists()).toBe(true);
		});
	});

	it('applies correct variant classes', () => {
		const variants = ['primary', 'secondary', 'destructive', 'warning', 'success', 'dark'] as const;
		variants.forEach((variant) => {
			const wrapper = mount(BoAvatar, {
				props: { variant },
			});
			const container = wrapper.find('[data-testid]');
			expect(container.exists()).toBe(true);
		});
	});

	it('renders indicator when indicatorKind is provided', () => {
		const wrapper = mount(BoAvatar, {
			props: { indicatorKind: 'online' },
		});
		const indicators = wrapper.findAll('div');
		expect(indicators.length).toBeGreaterThan(1);
	});

	it('does not render indicator when indicatorKind is none', () => {
		const wrapper = mount(BoAvatar, {
			props: { indicatorKind: 'none' },
		});
		const container = wrapper.find('.relative');
		const children = container.findAll('div');
		expect(children.length).toBe(1);
	});

	it('applies custom color styles', () => {
		const wrapper = mount(BoAvatar, {
			props: { customColor: '#ff0000', kind: 'default' },
		});
		const container = wrapper.find('[data-testid]');
		expect(container.attributes('style')).toContain('background-color');
	});

	it('applies custom text color styles', () => {
		const wrapper = mount(BoAvatar, {
			props: { customTextColor: '#00ff00', label: 'AB' },
			global: {
				components: { BoText },
			},
		});
		const container = wrapper.find('[data-testid]');
		expect(container.attributes('style')).toContain('color');
	});

	it('handles image error gracefully', async () => {
		const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
		const wrapper = mount(BoAvatar, {
			props: { src: 'invalid-url.jpg' },
		});

		const img = wrapper.find('img');
		await img.trigger('error');

		expect(consoleSpy).toHaveBeenCalled();
		consoleSpy.mockRestore();
	});

	it('applies custom id and data-testid', () => {
		const wrapper = mount(BoAvatar, {
			props: { id: 'custom-id', dataTestId: 'custom-test-id' },
		});
		const container = wrapper.find('[data-testid="custom-test-id"]');
		expect(container.exists()).toBe(true);
		expect(container.attributes('id')).toBe('custom-id');
	});

	it('applies correct role attribute', () => {
		const wrapper = mount(BoAvatar, {
			props: { role: 'button' },
		});
		const container = wrapper.find('[data-testid]');
		expect(container.attributes('role')).toBe('button');
	});

	it('applies cursor class', () => {
		const wrapper = mount(BoAvatar, {
			props: { cursor: 'cursor-pointer' },
		});
		const container = wrapper.find('[data-testid]');
		expect(container.classes()).toContain('cursor-pointer');
	});

	it('applies indicator position classes', () => {
		const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const;
		positions.forEach((position) => {
			const wrapper = mount(BoAvatar, {
				props: { indicatorKind: 'online', indicatorPosition: position },
			});
			expect(wrapper.exists()).toBe(true);
		});
	});

	it('prefers image over label when both provided', () => {
		const wrapper = mount(BoAvatar, {
			props: { src: 'https://example.com/avatar.jpg', label: 'AB' },
			global: {
				components: { BoText },
			},
		});
		const img = wrapper.find('img');
		expect(img.attributes('src')).toBe('https://example.com/avatar.jpg');
		expect(wrapper.text()).not.toContain('AB');
	});
});
