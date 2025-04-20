import { BoSize } from '@/shared';
import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import BoIcon from './BoIcon.vue';
import { Icon } from './bo-icon';

describe('BoIcon', () => {
	it('renders correctly with default props', async () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.activity,
			},
		});

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.attributes('role')).toBe('img');
		expect(wrapper.attributes('aria-label')).toBe('icon');
	});

	it('applies size classes correctly', async () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.activity,
				size: BoSize.default,
			},
		});

		expect(wrapper.classes()).toContain('size-4');

		await wrapper.setProps({ size: BoSize.small });
		expect(wrapper.classes()).toContain('size-3.5');

		await wrapper.setProps({ size: BoSize.large });
		expect(wrapper.classes()).toContain('size-5');

		await wrapper.setProps({ size: BoSize.extra_small });
		expect(wrapper.classes()).toContain('size-3');

		await wrapper.setProps({ size: BoSize.extra_large });
		expect(wrapper.classes()).toContain('size-6');
	});

	it('applies custom color when provided', async () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.activity,
				color: '#ff0000',
			},
		});

		const style = wrapper.attributes('style');
		expect(style).toContain('color: rgb(255, 0, 0);');
	});

	it('uses currentColor as default color', () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.activity,
			},
		});

		const style = wrapper.attributes('style');
		expect(style).toContain('color: currentColor');
	});

	it('logs an error when an invalid icon name is provided', async () => {
		const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

		mount(BoIcon, {
			props: {
				// @ts-expect-error Testing invalid icon
				icon: 'invalid-icon',
			},
		});

		await new Promise((resolve) => setTimeout(resolve, 0));

		expect(consoleSpy).toHaveBeenCalled();

		consoleSpy.mockRestore();
	});
});
