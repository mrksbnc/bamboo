import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoSwitch from './bo-switch.vue';

describe('BoSwitch', () => {
	it('renders a switch with an accessible state', () => {
		const wrapper = mount(BoSwitch, { props: { label: 'Notifications' } });
		const control = wrapper.find('button[role="switch"]');

		expect(control.exists()).toBe(true);
		expect(control.attributes('aria-checked')).toBe('false');
		expect(wrapper.text()).toContain('Notifications');
	});

	it('toggles its model', async () => {
		const wrapper = mount(BoSwitch);

		await wrapper.find('button').trigger('click');

		expect(wrapper.emitted('update:modelValue')).toEqual([[true]]);
	});

	it('uses its default value and custom track color', () => {
		const wrapper = mount(BoSwitch, {
			props: { defaultValue: true, customColor: '#123456' },
		});
		const control = wrapper.find('button');

		expect(control.attributes('aria-checked')).toBe('true');
		expect((control.element as HTMLButtonElement).style.backgroundColor).toBe('rgb(18, 52, 86)');
	});

	it('supports separate checked and thumb colors', () => {
		const wrapper = mount(BoSwitch, {
			props: {
				modelValue: true,
				customColor: { checkedBackground: '#123456', checkedThumb: '#ffffff' },
			},
		});

		expect((wrapper.find('button').element as HTMLButtonElement).style.backgroundColor).toBe(
			'rgb(18, 52, 86)',
		);
		expect((wrapper.find('span').element as HTMLSpanElement).style.backgroundColor).toBe(
			'rgb(255, 255, 255)',
		);
	});

	it('does not toggle when disabled', async () => {
		const wrapper = mount(BoSwitch, { props: { disabled: true } });

		await wrapper.find('button').trigger('click');

		expect(wrapper.emitted('update:modelValue')).toBeUndefined();
	});
});
