import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import BoNumberField from './bo-number-field.vue';

describe('BoNumberField', () => {
	it('renders a spinbutton and updates its numeric model', async () => {
		const wrapper = mount(BoNumberField, {
			props: { modelValue: 2, min: '0', max: '5', step: '1' },
		});
		const input = wrapper.find('input');
		expect(input.attributes('role')).toBe('spinbutton');
		await input.setValue('3');
		expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([3]);
	});

	it('steps within the configured bounds', async () => {
		const wrapper = mount(BoNumberField, { props: { modelValue: 2, min: '0', max: '3' } });
		await wrapper.findAll('button')[1].trigger('click');
		expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([3]);
		await wrapper.findAll('button')[1].trigger('click');
		expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
	});

	it('sanitizes input and uses a positive fallback step', async () => {
		const wrapper = mount(BoNumberField, {
			props: { modelValue: 1, min: '0', max: '3', step: '0', description: 'Quantity' },
		});
		const input = wrapper.find('input');
		expect(input.attributes('aria-describedby')).toContain('helper');
		Object.defineProperty(input.element, 'value', {
			configurable: true,
			writable: true,
			value: '2abc',
		});
		await input.trigger('input');
		expect((input.element as HTMLInputElement).value).toBe('2');
		expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([2]);
		await wrapper.find('button[aria-label="Decrease value"]').trigger('click');
		expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([1]);
	});

	it('honors read-only and disabled guards and emits focus events', async () => {
		const focus = vi.fn();
		const wrapper = mount(BoNumberField, {
			props: { modelValue: 2, readOnly: true, min: '0', max: '3', onFocus: focus },
		});
		const buttons = wrapper.findAll('button');
		expect(buttons.every((button) => button.attributes('disabled') !== undefined)).toBe(true);
		await wrapper.find('input').trigger('focus');
		expect(focus).toHaveBeenCalledOnce();
	});
});
