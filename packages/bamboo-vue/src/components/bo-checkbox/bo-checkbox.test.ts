import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoCheckbox from './bo-checkbox.vue';

describe('BoCheckbox', () => {
	it('renders the native control with generated identity', () => {
		const wrapper = mount(BoCheckbox, { props: { label: 'Accept terms' } });
		const input = wrapper.find('input[type="checkbox"]');

		expect(input.attributes('id')).toMatch(/^checkbox-/);
		expect(input.attributes('data-testid')).toMatch(/^data-testid-checkbox-/);
		expect(wrapper.text()).toContain('Accept terms');
	});

	it('updates its model when checked', async () => {
		const wrapper = mount(BoCheckbox, { props: { modelValue: false } });

		await wrapper.find('input').setValue(true);

		expect(wrapper.emitted('update:modelValue')).toEqual([[true]]);
	});

	it('sets the native indeterminate state', () => {
		const wrapper = mount(BoCheckbox, { props: { indeterminate: true } });

		expect((wrapper.find('input').element as HTMLInputElement).indeterminate).toBe(true);
	});

	it('connects helper text to the input', () => {
		const wrapper = mount(BoCheckbox, { props: { error: 'Required' } });
		const input = wrapper.find('input');

		expect(input.attributes('aria-invalid')).toBe('true');
		expect(input.attributes('aria-describedby')).toBe(`${input.attributes('id')}-helper`);
		expect(wrapper.text()).toContain('Required');
	});
});
