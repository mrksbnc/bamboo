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

	it('supports click and manual triggers', async () => {
		vi.useFakeTimers();
		const click = mount(BoTooltip, {
			props: { content: 'Clicked', trigger: 'click', showDelay: 0, hideDelay: 0 },
			slots: { default: '<button>Open</button>' },
		});
		await click.find('div').trigger('click');
		vi.runAllTimers();
		await click.vm.$nextTick();
		expect(document.body.textContent).toContain('Clicked');
		await click.find('div').trigger('click');
		vi.runAllTimers();
		await click.vm.$nextTick();
		expect(document.body.querySelector('[role="tooltip"]')).toBeNull();
		click.unmount();

		const manual = mount(BoTooltip, {
			props: { content: 'Manual', trigger: 'manual', visible: true, showDelay: 0 },
			slots: { default: '<button>Trigger</button>' },
		});
		vi.runAllTimers();
		await manual.vm.$nextTick();
		expect(document.body.textContent).toContain('Manual');
		await manual.setProps({ visible: false });
		vi.runAllTimers();
		await manual.vm.$nextTick();
		expect(document.body.querySelector('[role="tooltip"]')).toBeNull();
		manual.unmount();
		vi.useRealTimers();
	});

	it('does not show when disabled', async () => {
		vi.useFakeTimers();
		const wrapper = mount(BoTooltip, {
			props: { content: 'Disabled', disabled: true, showDelay: 0 },
			slots: { default: '<button>Disabled</button>' },
		});
		await wrapper.find('div').trigger('mouseenter');
		vi.runAllTimers();
		await wrapper.vm.$nextTick();
		expect(document.body.querySelector('[role="tooltip"]')).toBeNull();
		wrapper.unmount();
		vi.useRealTimers();
	});
});
