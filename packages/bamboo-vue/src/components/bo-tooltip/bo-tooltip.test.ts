import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import BoTooltip from './bo-tooltip.vue';

describe('BoTooltip', () => {
	it('shows on hover and describes its trigger', async () => {
		vi.useFakeTimers();
		const w = mount(BoTooltip, {
			props: { content: 'Helpful', showDelay: 0, hideDelay: 0 },
			slots: { default: '<button>Help</button>' },
		});
		await w.find('div').trigger('mouseenter');
		vi.runAllTimers();
		await w.vm.$nextTick();
		const tip = document.body.querySelector('[role="tooltip"]');
		expect(tip?.textContent).toContain('Helpful');
		expect(w.find('button').attributes('aria-describedby')).toBeTruthy();
		await w.find('div').trigger('mouseleave');
		vi.runAllTimers();
		await w.vm.$nextTick();
		expect(document.body.querySelector('[role="tooltip"]')).toBeNull();
		vi.useRealTimers();
		w.unmount();
	});
});
