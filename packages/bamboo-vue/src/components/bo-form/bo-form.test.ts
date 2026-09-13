import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { h } from 'vue';
import BoFormField from './bo-form-field.vue';
import BoForm from './bo-form.vue';

describe('BoForm', () => {
	it('emits submit and reset events', async () => {
		const wrapper = mount(BoForm);
		await wrapper.find('form').trigger('submit');
		await wrapper.find('form').trigger('reset');
		expect(wrapper.emitted('submit')).toHaveLength(1);
		expect(wrapper.emitted('reset')).toHaveLength(1);
	});
});

describe('BoFormField', () => {
	it('renders accessible descriptions and errors', () => {
		const wrapper = mount(BoFormField, {
			props: { label: 'Email', description: 'Use your work address.', error: 'Required.' },
			slots: { default: '<input />' },
		});
		expect(wrapper.find('label').attributes('for')).toMatch(/^form-field-.+-control$/);
		expect(wrapper.find('.bo-form-field__control').classes()).toContain(
			'bo-form-field__control--invalid',
		);
		expect(wrapper.find('.bo-form-field__control').attributes('aria-invalid')).toBe('true');
		expect(wrapper.find('[role="alert"]').text()).toBe('Required.');
		expect(wrapper.text()).toContain('Use your work address.');
	});

	it('exposes control bindings through the scoped slot', () => {
		const wrapper = mount(BoFormField, {
			props: { label: 'Password', error: 'Required.' },
			slots: {
				default: (slotProps) =>
					h('input', {
						id: slotProps.id,
						'aria-describedby': slotProps.ariaDescribedBy,
						'aria-invalid': slotProps.ariaInvalid,
					}),
			},
		});

		const input = wrapper.find('input');
		expect(input.attributes('id')).toMatch(/^form-field-.+-control$/);
		expect(input.attributes('aria-describedby')).toMatch(/-error$/);
		expect(input.attributes('aria-invalid')).toBe('true');
	});
});
