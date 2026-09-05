import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { nextTick } from 'vue';
import { BoButton } from '../bo-button';
import { BoText } from '../bo-text';
import BoSheet from './bo-sheet.vue';

describe('BoSheet', () => {
	it('closes from its backdrop', async () => {
		const wrapper = mount(BoSheet, {
			props: { open: true, side: 'bottom' },
			global: { components: { BoButton, BoText } },
		});

		document.body
			.querySelector('.bo-sheet-backdrop')
			?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		await nextTick();
		expect(wrapper.emitted('update:open')?.[0]).toEqual([false]);
		wrapper.unmount();
	});
});
