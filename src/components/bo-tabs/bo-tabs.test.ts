import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import BoTabs from './bo-tabs.vue';
import BoTabPanel from './bo-tab-panel.vue';

describe('BoTabs', () => {
	const tabs = [
		{ value: 'tab1', label: 'Tab 1' },
		{ value: 'tab2', label: 'Tab 2' },
		{ value: 'tab3', label: 'Tab 3' },
	];

	test('should render all tabs', () => {
		const wrapper = mount(BoTabs, {
			props: {
				modelValue: 'tab1',
				tabs,
			},
		});

		expect(wrapper.findAll('.bo-tabs__tab')).toHaveLength(3);
	});

	test('should mark active tab', () => {
		const wrapper = mount(BoTabs, {
			props: {
				modelValue: 'tab2',
				tabs,
			},
		});

		const activeTabs = wrapper.findAll('.bo-tabs__tab--active');
		expect(activeTabs).toHaveLength(1);
		expect(activeTabs[0].text()).toBe('Tab 2');
	});

	test('should emit update:modelValue on tab click', async () => {
		const wrapper = mount(BoTabs, {
			props: {
				modelValue: 'tab1',
				tabs,
			},
		});

		await wrapper.findAll('.bo-tabs__tab')[1].trigger('click');

		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
		expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['tab2']);
	});

	test('should emit change event on tab click', async () => {
		const wrapper = mount(BoTabs, {
			props: {
				modelValue: 'tab1',
				tabs,
			},
		});

		await wrapper.findAll('.bo-tabs__tab')[1].trigger('click');

		expect(wrapper.emitted('change')).toBeTruthy();
		expect(wrapper.emitted('change')?.[0]).toEqual(['tab2']);
	});

	test('should disable tab when disabled prop is true', () => {
		const disabledTabs = [
			{ value: 'tab1', label: 'Tab 1' },
			{ value: 'tab2', label: 'Tab 2', disabled: true },
		];

		const wrapper = mount(BoTabs, {
			props: {
				modelValue: 'tab1',
				tabs: disabledTabs,
			},
		});

		expect(wrapper.findAll('.bo-tabs__tab')[1].attributes('disabled')).toBeDefined();
	});

	test('should apply variant classes', () => {
		const variants: Array<'underline' | 'pills' | 'boxed'> = ['underline', 'pills', 'boxed'];

		for (const variant of variants) {
			const wrapper = mount(BoTabs, {
				props: {
					modelValue: 'tab1',
					tabs,
					variant,
				},
			});

			expect(wrapper.find('.bo-tabs__header').classes()).toContain(`bo-tabs__header--${variant}`);
		}
	});
});

describe('BoTabPanel', () => {
	test('should render when active', () => {
		const wrapper = mount(BoTabPanel, {
			props: {
				value: 'tab1',
			},
			global: {
				provide: {
					activeTab: 'tab1',
					tabsId: 'test-tabs',
				},
			},
			slots: {
				default: 'Panel content',
			},
		});

		expect(wrapper.text()).toBe('Panel content');
	});

	test('should not render when inactive', () => {
		const wrapper = mount(BoTabPanel, {
			props: {
				value: 'tab1',
			},
			global: {
				provide: {
					activeTab: 'tab2',
					tabsId: 'test-tabs',
				},
			},
			slots: {
				default: 'Panel content',
			},
		});

		expect(wrapper.find('.bo-tab-panel').exists()).toBe(false);
	});
});
