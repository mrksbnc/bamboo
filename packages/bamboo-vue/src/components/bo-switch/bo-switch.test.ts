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

	it('does not toggle when disabled', async () => {
		const wrapper = mount(BoSwitch, { props: { disabled: true } });

		await wrapper.find('button').trigger('click');

		expect(wrapper.emitted('update:modelValue')).toBeUndefined();
	});
});
