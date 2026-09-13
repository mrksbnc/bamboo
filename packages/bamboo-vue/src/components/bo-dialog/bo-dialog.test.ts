import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { nextTick } from 'vue';
import { BoButton } from '../bo-button';
import { BoIcon } from '../bo-icon';
import { BoText } from '../bo-text';
import BoDialog from './bo-dialog.vue';

describe('BoDialog', () => {
	it('renders its accessible content when open', () => {
		const wrapper = mount(BoDialog, {
			props: { open: true, title: 'Settings', description: 'Update your preferences.' },
			global: { components: { BoButton, BoIcon, BoText } },
		});

		const dialog = document.body.querySelector('[role="dialog"]');
		expect(dialog?.textContent).toContain('Settings');
		expect(dialog?.textContent).toContain('Update your preferences.');
		wrapper.unmount();
	});

	it('closes from Escape when enabled', async () => {
		const wrapper = mount(BoDialog, {
			props: { open: true },
			global: { components: { BoButton, BoIcon, BoText } },
		});

		document.body
			.querySelector('[role="dialog"]')
			?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
		await nextTick();

		expect(wrapper.emitted('update:open')?.[0]).toEqual([false]);
		wrapper.unmount();
	});

	it.each(['info', 'warning', 'destructive'] as const)('applies the %s variant', (variant) => {
		const wrapper = mount(BoDialog, {
			props: { open: true, title: 'Dialog variant', variant },
			global: { components: { BoButton, BoIcon, BoText } },
		});

		expect(
			document.body
				.querySelector('[role="dialog"]')
				?.classList.contains(`bo-dialog-panel--variant-${variant}`),
		).toBe(true);
		wrapper.unmount();
	});

	it('renders a semantic icon for non-default variants', () => {
		const wrapper = mount(BoDialog, {
			props: { open: true, title: 'Warning', variant: 'warning' },
			global: { components: { BoButton, BoIcon, BoText } },
		});

		expect(document.body.querySelector('.bo-dialog-icon')).toBeTruthy();
		expect(document.body.querySelector('.bamboo-alert-triangle')).toBeTruthy();
		wrapper.unmount();
	});
});
