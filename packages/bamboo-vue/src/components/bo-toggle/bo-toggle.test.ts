import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoToggle from './bo-toggle.vue';

describe('BoToggle', () => {
	it('renders a pressed button state', () => {
		const wrapper = mount(BoToggle, { props: { modelValue: true, label: 'Bold' } });
		const button = wrapper.find('button');

		expect(button.attributes('aria-pressed')).toBe('true');
		expect(wrapper.text()).toContain('Bold');
	});

	it('updates its model when activated', async () => {
		const wrapper = mount(BoToggle, { props: { modelValue: false } });

		await wrapper.find('button').trigger('click');

		expect(wrapper.emitted('update:modelValue')).toEqual([[true]]);
	});

	it('respects disabled state', async () => {
		const wrapper = mount(BoToggle, { props: { disabled: true } });

		await wrapper.find('button').trigger('click');

		expect(wrapper.emitted('update:modelValue')).toBeUndefined();
	});
});
