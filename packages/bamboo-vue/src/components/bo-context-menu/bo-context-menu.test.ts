import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { h, nextTick, ref } from 'vue';
import BoContextMenuCheckboxItem from './bo-context-menu-checkbox-item.vue';
import BoContextMenuContent from './bo-context-menu-content.vue';
import BoContextMenuItem from './bo-context-menu-item.vue';
import BoContextMenuLabel from './bo-context-menu-label.vue';
import BoContextMenuRadioGroup from './bo-context-menu-radio-group.vue';
import BoContextMenuRadioItem from './bo-context-menu-radio-item.vue';
import BoContextMenuSeparator from './bo-context-menu-separator.vue';
import BoContextMenuTrigger from './bo-context-menu-trigger.vue';
import BoContextMenu from './bo-context-menu.vue';

describe('BoContextMenu', () => {
	it('opens at the pointer and closes after selecting an item', async () => {
		const wrapper = mount(BoContextMenu, {
			slots: {
				default: {
					components: {
						BoContextMenuTrigger,
						BoContextMenuContent,
						BoContextMenuItem,
						BoContextMenuLabel,
						BoContextMenuSeparator,
					},
					template:
						'<BoContextMenuTrigger>Target</BoContextMenuTrigger><BoContextMenuContent><BoContextMenuLabel>Actions</BoContextMenuLabel><BoContextMenuSeparator /><BoContextMenuItem>Rename</BoContextMenuItem></BoContextMenuContent>',
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

	it('clamps the position, focuses content, and navigates menu items', async () => {
		const wrapper = mount(BoContextMenu, {
			attachTo: document.body,
			global: {
				components: { BoContextMenuTrigger, BoContextMenuContent, BoContextMenuItem },
			},
			slots: {
				default:
					'<BoContextMenuTrigger>Target</BoContextMenuTrigger><BoContextMenuContent><BoContextMenuItem>One</BoContextMenuItem><BoContextMenuItem>Two</BoContextMenuItem></BoContextMenuContent>',
			},
		});

		await wrapper.find('.bo-context-menu-trigger').trigger('contextmenu', {
			clientX: 0,
			clientY: 2,
		});
		await nextTick();
		const content = document.body.querySelector<HTMLElement>('[role="menu"]');
		expect(content?.style.left).toBe('8px');
		expect(content?.style.top).toBe('8px');
		expect(document.activeElement).toBe(content);

		await content?.dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true }));
		expect(document.activeElement?.textContent).toBe('Two');
		await content?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
		await nextTick();
		expect(document.body.querySelector('[role="menu"]')).toBeNull();
		wrapper.unmount();
	});

	it('supports checkbox and radio item state', async () => {
		const checked = ref(true);
		const selected = ref('compact');
		const wrapper = mount(BoContextMenu, {
			attachTo: document.body,
			slots: {
				default: () => [
					h(BoContextMenuTrigger, null, () => 'Target'),
					h(BoContextMenuContent, null, () => [
						h(
							BoContextMenuCheckboxItem,
							{
								checked: checked.value,
								'onUpdate:checked': (value: boolean) => (checked.value = value),
							},
							() => 'Grid',
						),
						h(
							BoContextMenuRadioGroup,
							{
								value: selected.value,
								'onUpdate:value': (value: string) => (selected.value = value),
							},
							() => [
								h(BoContextMenuRadioItem, { value: 'comfortable' }, () => 'Comfortable'),
								h(BoContextMenuRadioItem, { value: 'compact' }, () => 'Compact'),
							],
						),
					]),
				],
			},
		});
		await wrapper
			.find('.bo-context-menu-trigger')
			.trigger('contextmenu', { clientX: 40, clientY: 50 });
		await nextTick();

		const checkbox = document.body.querySelector<HTMLElement>('[role="menuitemcheckbox"]')!;
		expect(checkbox.getAttribute('aria-checked')).toBe('true');
		checkbox.click();
		await nextTick();
		expect(checked.value).toBe(false);

		await wrapper
			.find('.bo-context-menu-trigger')
			.trigger('contextmenu', { clientX: 40, clientY: 50 });
		await nextTick();
		const radios = document.body.querySelectorAll<HTMLElement>('[role="menuitemradio"]');
		expect(radios[1]?.getAttribute('aria-checked')).toBe('true');
		wrapper.unmount();
	});

	it('respects the outside and escape close flags', async () => {
		const wrapper = mount(BoContextMenu, {
			props: { closeOnOutside: false, closeOnEscape: false },
			attachTo: document.body,
			global: { components: { BoContextMenuTrigger, BoContextMenuContent } },
			slots: {
				default:
					'<BoContextMenuTrigger>Target</BoContextMenuTrigger><BoContextMenuContent>Menu</BoContextMenuContent>',
			},
		});
		await wrapper
			.find('.bo-context-menu-trigger')
			.trigger('contextmenu', { clientX: 40, clientY: 50 });
		await nextTick();
		document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
		document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
		expect(document.body.textContent).toContain('Menu');
		wrapper.unmount();
	});
});
