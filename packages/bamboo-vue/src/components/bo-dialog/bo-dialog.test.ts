import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { nextTick } from 'vue';
import { BoButton } from '../bo-button';
import { BoText } from '../bo-text';
import BoDialog from './bo-dialog.vue';

describe('BoDialog', () => {
	it('renders its accessible content when open', () => {
		const wrapper = mount(BoDialog, {
			props: { open: true, title: 'Settings', description: 'Update your preferences.' },
			global: { components: { BoButton, BoText } },
		});

		const dialog = document.body.querySelector('[role="dialog"]');
		expect(dialog?.textContent).toContain('Settings');
		expect(dialog?.textContent).toContain('Update your preferences.');
		wrapper.unmount();
	});

	it('closes from Escape when enabled', async () => {
		const wrapper = mount(BoDialog, {
			props: { open: true },
			global: { components: { BoButton, BoText } },
		});

		document.body
			.querySelector('[role="dialog"]')
			?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
		await nextTick();

		expect(wrapper.emitted('update:open')?.[0]).toEqual([false]);
		wrapper.unmount();
	});
});
