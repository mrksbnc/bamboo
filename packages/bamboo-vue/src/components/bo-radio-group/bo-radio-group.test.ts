import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoRadioGroupItem from './bo-radio-group-item.vue';
import BoRadioGroup from './bo-radio-group.vue';

describe('BoRadioGroup', () => {
	function mountGroup(props: Record<string, unknown> = {}) {
		return mount(BoRadioGroup, {
			props,
			global: { components: { BoRadioGroupItem } },
			slots: {
				default: {
					components: { BoRadioGroupItem },
					template: `
						<BoRadioGroupItem value="a" label="Option A" />
						<BoRadioGroupItem value="b" label="Option B" />
					`,
				},
			},
		});
	}

	it('renders an accessible radio group', () => {
		const wrapper = mountGroup({ ariaLabel: 'Choices' });

		expect(wrapper.find('[role="radiogroup"]').attributes('aria-label')).toBe('Choices');
		expect(wrapper.findAll('input[type="radio"]')).toHaveLength(2);
	});

	it('updates the selected value from an item', async () => {
		const wrapper = mountGroup();
		const inputs = wrapper.findAll('input[type="radio"]');
		const secondInput = inputs[1];

		expect(secondInput).toBeDefined();
		await secondInput!.setValue(true);

		expect(wrapper.emitted('update:modelValue')).toEqual([['b']]);
		expect((secondInput!.element as HTMLInputElement).checked).toBe(true);
	});

	it('inherits the disabled state', () => {
		const wrapper = mountGroup({ disabled: true });

		expect(wrapper.findAll('input[type="radio"]')[0]?.attributes('disabled')).toBeDefined();
	});

	it('moves selection with arrow keys', async () => {
		const wrapper = mountGroup({ modelValue: 'a' });
		const firstInput = wrapper.findAll('input[type="radio"]')[0];

		expect(firstInput).toBeDefined();
		await firstInput!.trigger('keydown', { key: 'ArrowDown' });

		expect(wrapper.emitted('update:modelValue')).toEqual([['b']]);
	});
});
