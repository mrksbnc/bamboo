import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
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
		expect(wrapper.find('[role="alert"]').text()).toBe('Required.');
		expect(wrapper.text()).toContain('Use your work address.');
	});
});
