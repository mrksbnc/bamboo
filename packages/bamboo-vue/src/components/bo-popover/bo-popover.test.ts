import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { nextTick } from 'vue';
import BoPopoverContent from './bo-popover-content.vue';
import BoPopoverTrigger from './bo-popover-trigger.vue';
import BoPopover from './bo-popover.vue';

describe('BoPopover', () => {
	it('toggles content from its trigger and closes outside', async () => {
		const wrapper = mount(BoPopover, {
			global: { components: { BoPopoverTrigger, BoPopoverContent } },
			slots: {
				default: {
					components: { BoPopoverTrigger, BoPopoverContent },
					template:
						'<BoPopoverTrigger>Open</BoPopoverTrigger><BoPopoverContent>Details</BoPopoverContent>',
				},
			},
		});

		await wrapper.find('button').trigger('click');
		await nextTick();
		expect(document.body.textContent).toContain('Details');
		document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
		await nextTick();
		expect(wrapper.emitted('update:open')?.at(-1)).toEqual([false]);
		wrapper.unmount();
	});
});
