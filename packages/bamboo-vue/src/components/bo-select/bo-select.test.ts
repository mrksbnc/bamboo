import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoSelect from './bo-select.vue';

const options = [
	{ value: 'one', label: 'One' },
	{ value: 'two', label: 'Two' },
];

describe('BoSelect', () => {
	it('renders an accessible combobox with generated identity', () => {
		const wrapper = mount(BoSelect, { props: { options, label: 'Choice' } });
		const trigger = wrapper.find('button[role="combobox"]');

		expect(trigger.attributes('id')).toMatch(/^select-.*-trigger$/);
		expect(trigger.attributes('aria-haspopup')).toBe('listbox');
		expect(wrapper.text()).toContain('Choice');
	});

	it('selects an option and updates its model', async () => {
		const wrapper = mount(BoSelect, { props: { options } });

		await wrapper.find('button[role="combobox"]').trigger('click');
		await wrapper.findAll('[role="option"]')[1]!.trigger('click');

		expect(wrapper.emitted('update:modelValue')).toEqual([['two']]);
	});

	it('opens and highlights options with the keyboard', async () => {
		const wrapper = mount(BoSelect, { props: { options } });
		const trigger = wrapper.find('button[role="combobox"]');

		await trigger.trigger('keydown', { key: 'ArrowDown' });
		await trigger.trigger('keydown', { key: 'ArrowDown' });

		expect(wrapper.find('[role="listbox"]').exists()).toBe(true);
		expect(wrapper.find('[aria-activedescendant]').attributes('aria-activedescendant')).toContain(
			'option-1',
		);
	});
});
