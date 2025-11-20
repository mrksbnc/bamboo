import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import BoSidePanel from './bo-side-panel.vue';
import { BoSidePanelShape } from './bo-side-panel';

describe('BoSidePanel', () => {
	test('should not render when modelValue is false', () => {
		const wrapper = mount(BoSidePanel, {
			props: {
				modelValue: false,
			},
		});

		expect(wrapper.find('.bo-side-panel').exists()).toBe(false);
	});

	test('should render when modelValue is true', () => {
		const wrapper = mount(BoSidePanel, {
			props: {
				modelValue: true,
			},
			attachTo: document.body,
			global: {
				stubs: {
					BoIcon: {
						template: '<span></span>',
					},
				},
			},
		});

		// SidePanel uses Teleport, so we need to check the document body
		expect(document.body.innerHTML).toContain('bo-side-panel');
		wrapper.unmount();
	});

	test('should render with title', () => {
		const wrapper = mount(BoSidePanel, {
			props: {
				modelValue: true,
				title: 'Panel Title',
			},
			attachTo: document.body,
			global: {
				stubs: {
					BoIcon: {
						template: '<span></span>',
					},
				},
			},
		});

		expect(document.body.innerHTML).toContain('Panel Title');
		wrapper.unmount();
	});

	test('should emit update:modelValue on close', async () => {
		const wrapper = mount(BoSidePanel, {
			props: {
				modelValue: true,
			},
			attachTo: document.body,
			global: {
				stubs: {
					BoIcon: {
						template: '<span></span>',
					},
				},
			},
		});

		const closeButton = document.querySelector('.bo-side-panel__close') as HTMLElement;
		closeButton?.click();
		await wrapper.vm.$nextTick();

		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
		expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false]);
		wrapper.unmount();
	});

	test('should apply position class', () => {
		const wrapper = mount(BoSidePanel, {
			props: {
				modelValue: true,
				position: 'left',
			},
			attachTo: document.body,
			global: {
				stubs: {
					BoIcon: {
						template: '<span></span>',
					},
				},
			},
		});

		expect(document.body.innerHTML).toContain('bo-side-panel--left');
		wrapper.unmount();
	});

	test('should apply square shape class by default', () => {
		const wrapper = mount(BoSidePanel, {
			props: {
				modelValue: true,
			},
			attachTo: document.body,
			global: {
				stubs: {
					BoIcon: {
						template: '<span></span>',
					},
				},
			},
		});

		expect(document.body.innerHTML).toContain('bo-side-panel--square');
		wrapper.unmount();
	});

	test('should apply rounded shape class', () => {
		const wrapper = mount(BoSidePanel, {
			props: {
				modelValue: true,
				shape: BoSidePanelShape.Rounded,
			},
			attachTo: document.body,
			global: {
				stubs: {
					BoIcon: {
						template: '<span></span>',
					},
				},
			},
		});

		expect(document.body.innerHTML).toContain('bo-side-panel--rounded');
		wrapper.unmount();
	});
});
