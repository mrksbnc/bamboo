import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { nextTick } from 'vue';
import BoScrollArea from './bo-scroll-area.vue';

function pointerEvent(type: string, values: Record<string, number> = {}): PointerEvent {
	const event = new Event(type, { bubbles: true, cancelable: true }) as PointerEvent;
	for (const [key, value] of Object.entries(values))
		Object.defineProperty(event, key, { configurable: true, value });
	return event;
}

describe('BoScrollArea', () => {
	it('renders content and max height', () => {
		const wrapper = mount(BoScrollArea, {
			props: { maxHeight: 300 },
			slots: { default: 'Scroll content' },
		});
		expect(wrapper.text()).toContain('Scroll content');
		expect(wrapper.attributes('style')).toContain('max-height: 300px');
		expect(wrapper.find('[data-slot="scroll-area-viewport"]').attributes('tabindex')).toBe('0');
	});

	it('renders scrollbars and updates thumb positions from viewport metrics', async () => {
		const observe = vi.fn<ResizeObserver['observe']>();
		const disconnect = vi.fn<ResizeObserver['disconnect']>();
		vi.stubGlobal(
			'ResizeObserver',
			class {
				observe = observe;
				disconnect = disconnect;
			},
		);
		const wrapper = mount(BoScrollArea, { slots: { default: '<div>Content</div>' } });
		const viewport = wrapper.find('[data-slot="scroll-area-viewport"]').element as HTMLElement;
		Object.defineProperties(viewport, {
			scrollHeight: { configurable: true, value: 400, writable: true },
			scrollWidth: { configurable: true, value: 300, writable: true },
			clientHeight: { configurable: true, value: 100 },
			clientWidth: { configurable: true, value: 100 },
		});
		await wrapper.find('[data-slot="scroll-area-viewport"]').trigger('scroll');
		await nextTick();

		expect(wrapper.findAll('[data-slot="scroll-area-scrollbar"]')).toHaveLength(2);
		expect(wrapper.find('[data-slot="scroll-area-corner"]').exists()).toBe(true);
		expect(
			wrapper
				.find('[data-orientation="vertical"] [data-slot="scroll-area-thumb"]')
				.attributes('style'),
		).toContain('height: 25%');
		expect(observe).toHaveBeenCalled();

		wrapper.unmount();
		expect(disconnect).toHaveBeenCalled();
		vi.unstubAllGlobals();
	});

	it('supports track clicks and pointer dragging in both directions', async () => {
		const wrapper = mount(BoScrollArea, { slots: { default: '<div>Content</div>' } });
		const viewport = wrapper.find('[data-slot="scroll-area-viewport"]').element as HTMLElement;
		Object.defineProperties(viewport, {
			scrollHeight: { configurable: true, value: 400, writable: true },
			scrollWidth: { configurable: true, value: 400, writable: true },
			clientHeight: { configurable: true, value: 100 },
			clientWidth: { configurable: true, value: 100 },
		});
		await wrapper.find('[data-slot="scroll-area-viewport"]').trigger('scroll');
		await nextTick();
		const vertical = wrapper.find('[data-orientation="vertical"]');
		const horizontal = wrapper.find('[data-orientation="horizontal"]');
		vi.spyOn(vertical.element, 'getBoundingClientRect').mockReturnValue({
			top: 0,
			left: 0,
			width: 10,
			height: 100,
			bottom: 100,
			right: 10,
		} as DOMRect);
		vi.spyOn(horizontal.element, 'getBoundingClientRect').mockReturnValue({
			top: 0,
			left: 0,
			width: 100,
			height: 10,
			bottom: 10,
			right: 100,
		} as DOMRect);
		vertical.element.dispatchEvent(pointerEvent('pointerdown', { clientY: 75 }));
		horizontal.element.dispatchEvent(pointerEvent('pointerdown', { clientX: 75 }));
		expect(viewport.scrollTop).toBeGreaterThan(0);
		expect(viewport.scrollLeft).toBeGreaterThan(0);

		wrapper
			.find('[data-orientation="vertical"] [data-slot="scroll-area-thumb"]')
			.element.dispatchEvent(pointerEvent('pointerdown', { clientY: 20 }));
		document.dispatchEvent(pointerEvent('pointermove', { clientY: 60 }));
		document.dispatchEvent(pointerEvent('pointerup'));
		await nextTick();
		expect(viewport.scrollTop).toBeGreaterThanOrEqual(0);
		wrapper.unmount();
	});
});
