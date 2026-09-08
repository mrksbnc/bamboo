import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { h, nextTick } from 'vue';
import { useDrawer } from '../../composables/use-drawer.js';
import { BoButton } from '../bo-button';
import { BoText } from '../bo-text';
import BoDrawerViewport from './bo-drawer-viewport.vue';
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

	it('renders shared drawer messages from the viewport', async () => {
		const viewport = mount(BoDrawerViewport, { attachTo: document.body });
		const state = useDrawer();
		state.clear();
		state.show({ title: 'Shared drawer', side: 'right', content: h('p', 'Content') });
		await viewport.vm.$nextTick();

		expect(document.body.textContent).toContain('Shared drawer');
		expect(document.body.textContent).toContain('Content');
		viewport.unmount();
		state.clear();
	});
});
