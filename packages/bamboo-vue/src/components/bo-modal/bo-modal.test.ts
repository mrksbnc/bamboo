import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoModal from './bo-modal.vue';

describe('BoModal', () => {
	it('renders dialog and emits close for close button and escape', async () => {
		const w = mount(BoModal, {
			props: { open: true, title: 'Confirm', closeOnEscape: true },
			slots: { default: 'Body' },
		});
		const panel = document.body.querySelector('[data-slot="modal-content"]')!;
		expect(panel.getAttribute('role')).toBe('dialog');
		expect(panel.getAttribute('aria-modal')).toBe('true');
		expect(document.body.textContent).toContain('Body');
		await (document.body.querySelector('[data-slot="modal-close"]') as HTMLElement).click();
		document.body
			.querySelector('[data-slot="modal-content"]')
			?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
		expect(w.emitted('close')).toHaveLength(2);
		w.unmount();
	});
});
