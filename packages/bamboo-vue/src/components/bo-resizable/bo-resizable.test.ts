import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import BoResizableHandle from './bo-resizable-handle.vue';
import BoResizablePanel from './bo-resizable-panel.vue';
import BoResizable from './bo-resizable.vue';

function pointerEvent(type: string, values: Record<string, number> = {}): PointerEvent {
	const event = new Event(type, { bubbles: true, cancelable: true }) as PointerEvent;
	for (const [key, value] of Object.entries(values))
		Object.defineProperty(event, key, { configurable: true, value });
	return event;
}

describe('BoResizable', () => {
	it('renders panels and a keyboard-accessible handle', async () => {
		const wrapper = mount(BoResizable, {
			global: { components: { BoResizablePanel, BoResizableHandle } },
			slots: {
				default:
					'<bo-resizable-panel>A</bo-resizable-panel><bo-resizable-handle /><bo-resizable-panel>B</bo-resizable-panel>',
			},
		});
		expect(wrapper.findAll('[data-resizable-panel]')).toHaveLength(2);
		const handle = wrapper.find('[role="separator"]');
		expect(handle.attributes('tabindex')).toBe('0');
		await handle.trigger('keydown', { key: 'ArrowRight' });
		expect(wrapper.find('[data-resizable-panel]').attributes('style')).toContain('flex-basis');
	});

	it('resizes panels from pointer movement and clamps the range', async () => {
		const wrapper = mount(BoResizable, {
			attachTo: document.body,
			global: { components: { BoResizablePanel, BoResizableHandle } },
			slots: {
				default: '<bo-resizable-panel /><bo-resizable-handle /><bo-resizable-panel />',
			},
		});
		const root = wrapper.find('[data-testid]').element;
		vi.spyOn(root, 'getBoundingClientRect').mockReturnValue({
			left: 0,
			top: 0,
			width: 100,
			height: 100,
		} as DOMRect);
		const handle = wrapper.find('[role="separator"]');
		handle.element.dispatchEvent(pointerEvent('pointerdown', { clientX: 50 }));
		document.dispatchEvent(pointerEvent('pointermove', { clientX: 95 }));
		const panels = wrapper.findAll('[data-resizable-panel]');
		expect(panels[0]?.attributes('style')).toContain('flex-basis: 90%');
		expect(panels[1]?.attributes('style')).toContain('flex-basis: 10%');
		document.dispatchEvent(pointerEvent('pointerup'));
		document.dispatchEvent(pointerEvent('pointermove', { clientX: 20 }));
		expect(panels[0]?.attributes('style')).toContain('flex-basis: 90%');
		wrapper.unmount();
	});

	it('uses vertical keyboard controls and Home/End bounds', async () => {
		const wrapper = mount(BoResizable, {
			props: { direction: 'vertical' },
			global: { components: { BoResizablePanel, BoResizableHandle } },
			slots: {
				default: '<bo-resizable-panel /><bo-resizable-handle /><bo-resizable-panel />',
			},
		});
		const handle = wrapper.find('[role="separator"]');
		expect(handle.attributes('aria-orientation')).toBe('horizontal');
		await handle.trigger('keydown', { key: 'Home' });
		expect(wrapper.findAll('[data-resizable-panel]')[0]?.attributes('style')).toContain(
			'flex-basis: 10%',
		);
		await handle.trigger('keydown', { key: 'End' });
		expect(wrapper.findAll('[data-resizable-panel]')[0]?.attributes('style')).toContain(
			'flex-basis: 90%',
		);
		await handle.trigger('keydown', { key: 'ArrowUp' });
		expect(wrapper.findAll('[data-resizable-panel]')[0]?.attributes('style')).toContain(
			'flex-basis: 85%',
		);
	});
});
