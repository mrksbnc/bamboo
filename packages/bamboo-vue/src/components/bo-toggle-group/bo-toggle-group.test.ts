import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoToggleGroupItem from './bo-toggle-group-item.vue';
import BoToggleGroup from './bo-toggle-group.vue';

function mountGroup(props: Record<string, unknown> = {}) {
	return mount(BoToggleGroup, {
		props,
		global: { components: { BoToggleGroupItem } },
		slots: {
			default: {
				components: { BoToggleGroupItem },
				template: `
					<BoToggleGroupItem value="one">One</BoToggleGroupItem>
					<BoToggleGroupItem value="two">Two</BoToggleGroupItem>
				`,
			},
		},
	});
}

describe('BoToggleGroup', () => {
	it('renders its orientation and group items', () => {
		const wrapper = mountGroup({ orientation: 'vertical' });

		expect(wrapper.find('[role="group"]').classes()).toContain('bo-toggle-group--vertical');
		expect(wrapper.findAll('[role="button"]')).toHaveLength(2);
	});

	it('updates a single selected value', async () => {
		const wrapper = mountGroup();

		await wrapper.findAll('[role="button"]')[1]!.trigger('click');

		expect(wrapper.emitted('update:modelValue')).toEqual([['two']]);
	});

	it('supports multiple selected values', async () => {
		const wrapper = mountGroup({ multiple: true, modelValue: ['one'] });

		await wrapper.findAll('[role="button"]')[1]!.trigger('click');

		expect(wrapper.emitted('update:modelValue')).toEqual([[['one', 'two']]]);
	});
});
