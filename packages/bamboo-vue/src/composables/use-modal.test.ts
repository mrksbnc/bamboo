import { describe, expect, it } from 'vitest';
import { nextTick } from 'vue';
import { useModal } from './use-modal.js';

describe('useModal', () => {
	it('opens and closes modal instances', async () => {
		const modal = useModal();
		const component = {} as never;
		modal.open({ component });
		expect(modal.instances.value).toHaveLength(1);
		await modal.closeAndRestoreFocus(null);
		await nextTick();
		expect(modal.instances.value).toHaveLength(0);
	});
});
