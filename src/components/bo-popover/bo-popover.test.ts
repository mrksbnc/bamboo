import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import BoPopover from './bo-popover.vue';

describe('bo-popover', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('should render popover wrapper', () => {
		const wrapper = mount(BoPopover, {
			slots: {
				trigger: '<button>Trigger</button>',
			},
		});
		expect(wrapper.find('.bo-popover__wrapper').exists()).toBe(true);
	});

	it('should render trigger slot', () => {
		const wrapper = mount(BoPopover, {
			slots: {
				trigger: '<button class="custom-trigger">Click me</button>',
			},
		});
		expect(wrapper.find('.custom-trigger').exists()).toBe(true);
		expect(wrapper.text()).toContain('Click me');
	});

	it('should not show popover by default', () => {
		const wrapper = mount(BoPopover, {
			slots: {
				trigger: '<button>Trigger</button>',
			},
		});
		expect(wrapper.find('.bo-popover').exists()).toBe(false);
	});

	it('should show popover on click when trigger is click', async () => {
		const wrapper = mount(BoPopover, {
			props: {
				trigger: 'click',
			},
			slots: {
				trigger: '<button>Trigger</button>',
			},
			attachTo: document.body,
		});

		await wrapper.find('.bo-popover__trigger').trigger('click');
		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for position update

		expect(document.querySelector('.bo-popover')).toBeTruthy();
		wrapper.unmount();
	});

	it('should toggle popover on multiple clicks', async () => {
		const wrapper = mount(BoPopover, {
			props: {
				trigger: 'click',
			},
			slots: {
				trigger: '<button>Trigger</button>',
			},
			attachTo: document.body,
		});

		const trigger = wrapper.find('.bo-popover__trigger');

		await trigger.trigger('click');
		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for position update
		expect(document.querySelector('.bo-popover')).toBeTruthy();

		await trigger.trigger('click');
		await wrapper.vm.$nextTick();
		expect(document.querySelector('.bo-popover')).toBeFalsy();
		wrapper.unmount();
	});

	it('should show popover on hover when trigger is hover', async () => {
		const wrapper = mount(BoPopover, {
			props: {
				trigger: 'hover',
			},
			slots: {
				trigger: '<button>Trigger</button>',
			},
			attachTo: document.body,
		});

		await wrapper.find('.bo-popover__trigger').trigger('mouseenter');
		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for position update

		expect(document.querySelector('.bo-popover')).toBeTruthy();
		wrapper.unmount();
	});

	it('should hide popover on mouse leave when trigger is hover', async () => {
		const wrapper = mount(BoPopover, {
			props: {
				trigger: 'hover',
			},
			slots: {
				trigger: '<button>Trigger</button>',
			},
			attachTo: document.body,
		});

		const trigger = wrapper.find('.bo-popover__trigger');

		await trigger.trigger('mouseenter');
		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for position update
		expect(document.querySelector('.bo-popover')).toBeTruthy();

		await trigger.trigger('mouseleave');
		await wrapper.vm.$nextTick();
		expect(document.querySelector('.bo-popover')).toBeFalsy();
		wrapper.unmount();
	});

	it('should show popover on focus when trigger is focus', async () => {
		const wrapper = mount(BoPopover, {
			props: {
				trigger: 'focus',
			},
			slots: {
				trigger: '<button>Trigger</button>',
			},
			attachTo: document.body,
		});

		await wrapper.find('.bo-popover__trigger').trigger('focus');
		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for position update

		expect(document.querySelector('.bo-popover')).toBeTruthy();
		wrapper.unmount();
	});

	it('should hide popover on blur when trigger is focus', async () => {
		const wrapper = mount(BoPopover, {
			props: {
				trigger: 'focus',
			},
			slots: {
				trigger: '<button>Trigger</button>',
			},
			attachTo: document.body,
		});

		const trigger = wrapper.find('.bo-popover__trigger');

		await trigger.trigger('focus');
		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for position update
		expect(document.querySelector('.bo-popover')).toBeTruthy();

		await trigger.trigger('blur');
		await wrapper.vm.$nextTick();
		expect(document.querySelector('.bo-popover')).toBeFalsy();
		wrapper.unmount();
	});

	it('should display content prop', async () => {
		const wrapper = mount(BoPopover, {
			props: {
				content: 'Test content',
				modelValue: true,
			},
			slots: {
				trigger: '<button>Trigger</button>',
			},
			attachTo: document.body,
		});

		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for position update
		expect(document.body.textContent).toContain('Test content');
		wrapper.unmount();
	});

	it('should display title when provided', async () => {
		const wrapper = mount(BoPopover, {
			props: {
				title: 'Test Title',
				modelValue: true,
			},
			slots: {
				trigger: '<button>Trigger</button>',
			},
			attachTo: document.body,
		});

		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for position update
		expect(document.body.textContent).toContain('Test Title');
		wrapper.unmount();
	});

	it('should render default slot content', async () => {
		const wrapper = mount(BoPopover, {
			props: {
				modelValue: true,
			},
			slots: {
				trigger: '<button>Trigger</button>',
				default: '<div class="custom-content">Custom</div>',
			},
			attachTo: document.body,
		});

		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for position update
		expect(document.querySelector('.custom-content')).toBeTruthy();
		wrapper.unmount();
	});

	it('should apply placement class', async () => {
		const wrapper = mount(BoPopover, {
			props: {
				placement: 'bottom',
				modelValue: true,
			},
			slots: {
				trigger: '<button>Trigger</button>',
			},
			attachTo: document.body,
		});

		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for position update
		expect(document.querySelector('.bo-popover--bottom')).toBeTruthy();
		wrapper.unmount();
	});

	it('should apply custom CSS class', async () => {
		const wrapper = mount(BoPopover, {
			props: {
				customCssClass: 'my-custom-class',
				modelValue: true,
			},
			slots: {
				trigger: '<button>Trigger</button>',
			},
			attachTo: document.body,
		});

		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for position update
		expect(document.querySelector('.my-custom-class')).toBeTruthy();
		wrapper.unmount();
	});

	it('should emit update:modelValue when opened', async () => {
		const wrapper = mount(BoPopover, {
			props: {
				trigger: 'click',
			},
			slots: {
				trigger: '<button>Trigger</button>',
			},
		});

		await wrapper.find('.bo-popover__trigger').trigger('click');

		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
		expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true]);
	});

	it('should respect modelValue prop', async () => {
		const wrapper = mount(BoPopover, {
			props: {
				modelValue: true,
			},
			slots: {
				trigger: '<button>Trigger</button>',
			},
			attachTo: document.body,
		});

		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for position update
		expect(document.querySelector('.bo-popover')).toBeTruthy();
		wrapper.unmount();
	});

	it('should have default id', () => {
		const wrapper = mount(BoPopover, {
			slots: {
				trigger: '<button>Trigger</button>',
			},
		});
		expect(wrapper.attributes('id')).toBeDefined();
	});

	it('should have default data-testid', () => {
		const wrapper = mount(BoPopover, {
			slots: {
				trigger: '<button>Trigger</button>',
			},
		});
		expect(wrapper.attributes('data-testid')).toBeDefined();
	});
});
