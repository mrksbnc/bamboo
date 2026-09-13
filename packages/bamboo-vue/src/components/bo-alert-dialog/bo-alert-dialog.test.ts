import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { BoButton } from '../bo-button';
import { BoText } from '../bo-text';
import BoAlertDialog from './bo-alert-dialog.vue';

describe('BoAlertDialog', () => {
	it('renders confirmation actions', () => {
		const wrapper = mount(BoAlertDialog, {
			props: { open: true, title: 'Delete item', description: 'This cannot be undone.' },
			global: { components: { BoButton, BoText } },
		});

		expect(document.body.textContent).toContain('Delete item');
		expect(document.body.textContent).toContain('Continue');
		expect(document.body.textContent).toContain('Cancel');
		wrapper.unmount();
	});

	it('emits confirm and closes', async () => {
		const wrapper = mount(BoAlertDialog, {
			props: { open: true },
			global: { components: { BoButton, BoText } },
		});

		const confirmButton = Array.from(document.body.querySelectorAll('button')).find(
			(button) => button.textContent === 'Continue',
		);
		confirmButton?.click();

		expect(wrapper.emitted('confirm')).toHaveLength(1);
		expect(wrapper.emitted('update:open')?.[0]).toEqual([false]);
		wrapper.unmount();
	});
});
