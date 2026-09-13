import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
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

	it('positions bottom-start below the trigger and follows scroll geometry', async () => {
		const wrapper = mount(BoPopover, {
			props: { placement: 'bottom-start', offset: 8 },
			global: { components: { BoPopoverTrigger, BoPopoverContent } },
			slots: {
				default: {
					components: { BoPopoverTrigger, BoPopoverContent },
					template:
						'<BoPopoverTrigger>Open</BoPopoverTrigger><BoPopoverContent>Details</BoPopoverContent>',
				},
			},
		});
		const trigger = wrapper.find('button');
		let triggerRect = {
			top: 100,
			bottom: 140,
			left: 50,
			right: 150,
			width: 100,
			height: 40,
		} as DOMRect;
		vi.spyOn(trigger.element, 'getBoundingClientRect').mockImplementation(() => triggerRect);
		Object.defineProperty(window, 'scrollY', { configurable: true, value: 20 });
		Object.defineProperty(window, 'scrollX', { configurable: true, value: 0 });

		await trigger.trigger('click');
		await nextTick();
		const content = document.body.querySelector<HTMLElement>('[data-slot="popover-content"]');
		expect(content).not.toBeNull();
		vi.spyOn(content!, 'getBoundingClientRect').mockReturnValue({
			width: 200,
			height: 100,
		} as DOMRect);
		window.dispatchEvent(new Event('scroll'));

		expect(content?.style.top).toBe('168px');
		expect(content?.style.left).toBe('50px');

		triggerRect.top = 60;
		triggerRect.bottom = 100;
		window.dispatchEvent(new Event('scroll'));
		await nextTick();
		expect(content?.style.top).toBe('128px');

		wrapper.unmount();
		Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 });
	});
});
