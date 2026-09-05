import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { nextTick } from 'vue';
import BoContextMenuContent from './bo-context-menu-content.vue';
import BoContextMenuItem from './bo-context-menu-item.vue';
import BoContextMenuTrigger from './bo-context-menu-trigger.vue';
import BoContextMenu from './bo-context-menu.vue';

describe('BoContextMenu', () => {
	it('opens at the pointer and closes after selecting an item', async () => {
		const wrapper = mount(BoContextMenu, {
			slots: {
				default: {
					components: { BoContextMenuTrigger, BoContextMenuContent, BoContextMenuItem },
					template:
						'<BoContextMenuTrigger>Target</BoContextMenuTrigger><BoContextMenuContent><BoContextMenuItem>Rename</BoContextMenuItem></BoContextMenuContent>',
				},
			},
		});

		await wrapper
			.find('.bo-context-menu-trigger')
			.trigger('contextmenu', { clientX: 20, clientY: 30 });
		await nextTick();
		expect(document.body.textContent).toContain('Rename');
		await document.body
			.querySelector('[role="menuitem"]')
			?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		await nextTick();
		expect(wrapper.emitted('update:open')?.at(-1)).toEqual([false]);
		wrapper.unmount();
	});
});
