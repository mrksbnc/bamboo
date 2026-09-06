import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { nextTick } from 'vue';
import { BoButton } from '../bo-button';
import { BoText } from '../bo-text';
import BoDrawer from './bo-drawer.vue';

describe('BoDrawer', () => {
	it('renders its panel and closes from Escape', async () => {
		const wrapper = mount(BoDrawer, {
			props: { open: true, title: 'Navigation', description: 'Choose a page.' },
			global: { components: { BoButton, BoText } },
		});

		expect(document.body.querySelector('[role="dialog"]')?.textContent).toContain('Navigation');
		document.body
			.querySelector('[role="dialog"]')
			?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
		await nextTick();
		expect(wrapper.emitted('update:open')?.[0]).toEqual([false]);
		wrapper.unmount();
	});
});
