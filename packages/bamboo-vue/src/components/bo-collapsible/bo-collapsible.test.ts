import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { BoIcon } from '../bo-icon';
import BoCollapsible from './bo-collapsible.vue';

describe('BoCollapsible', () => {
	it('toggles its controlled content state', async () => {
		const wrapper = mount(BoCollapsible, {
			props: { label: 'Details' },
			global: { components: { BoIcon } },
			slots: { default: 'Hidden content' },
		});

		const button = wrapper.find('button');
		expect(button.attributes('aria-expanded')).toBe('false');
		await button.trigger('click');
		expect(wrapper.emitted('update:open')).toEqual([[true]]);
		expect(button.attributes('aria-expanded')).toBe('true');
	});
});
