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

	it('uses its default value when uncontrolled', async () => {
		const wrapper = mount(BoToggle, { props: { defaultValue: true } });
		const button = wrapper.find('button');

		expect(button.attributes('aria-pressed')).toBe('true');
		await button.trigger('keydown', { key: ' ' });

		expect(button.attributes('aria-pressed')).toBe('false');
	});

	it('keeps a controlled value until the parent changes it', async () => {
		const wrapper = mount(BoToggle, { props: { modelValue: false } });

		await wrapper.find('button').trigger('click');

		expect(wrapper.find('button').attributes('aria-pressed')).toBe('false');
		expect(wrapper.emitted('update:modelValue')).toEqual([[true]]);
	});

	it('exposes neutral variant, size, and accessible label state', () => {
		const wrapper = mount(BoToggle, {
			props: { variant: 'outline', size: 'lg', ariaLabelledBy: 'toggle-label' },
		});
		const button = wrapper.find('button');

		expect(button.attributes('aria-labelledby')).toBe('toggle-label');
		expect(button.classes()).toContain('bo-toggle--outline');
		expect(button.classes()).toContain('bo-toggle--lg');
	});

	it('respects disabled state', async () => {
		const wrapper = mount(BoToggle, { props: { disabled: true } });

		await wrapper.find('button').trigger('click');

		expect(wrapper.emitted('update:modelValue')).toBeUndefined();
	});
});
