import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoNavbar from './bo-navbar.vue';

describe('BoNavbar', () => {
	it('renders vertical content slots and toggles navigation with Escape', async () => {
		const wrapper = mount(BoNavbar, {
			slots: {
				header: 'Brand',
				content: '<a href="/">Home</a>',
				footer: 'Account',
			},
		});
		expect(wrapper.html()).toContain('Brand');
		expect(wrapper.html()).toContain('Home');
		expect(wrapper.html()).toContain('Account');
		const toggle = wrapper.find('button');

		expect(toggle.attributes('aria-expanded')).toBe('false');
		await toggle.trigger('click');
		expect(toggle.attributes('aria-expanded')).toBe('true');
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
		await wrapper.vm.$nextTick();
		expect(toggle.attributes('aria-expanded')).toBe('false');
	});
});
