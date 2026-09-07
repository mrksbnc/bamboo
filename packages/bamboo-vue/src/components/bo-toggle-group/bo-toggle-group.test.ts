import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import BoToggleGroupItem from './bo-toggle-group-item.vue';
import BoToggleGroup from './bo-toggle-group.vue';

function mountGroup(props: Record<string, unknown> = {}) {
	return mount(BoToggleGroup, {
		props,
		global: { components: { BoToggleGroupItem } },
		slots: {
			default: {
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

	it('initializes uncontrolled selection from defaultValue', () => {
		const wrapper = mountGroup({ defaultValue: 'one' });

		expect(wrapper.findAll('[role="button"]')[0]?.attributes('aria-pressed')).toBe('true');
		expect(wrapper.findAll('[role="button"]')[1]?.attributes('aria-pressed')).toBe('false');
	});

	it('moves focus to the next enabled item with arrow keys', async () => {
		const wrapper = mountGroup();
		const items = wrapper.findAll('[role="button"]');
		const first = items[0];
		const focus = vi.spyOn(items[1]!.element as HTMLButtonElement, 'focus');

		(first?.element as HTMLButtonElement).focus();
		await first?.trigger('keydown', { key: 'ArrowRight' });

		expect(focus).toHaveBeenCalledOnce();
	});

	it('activates an item with Enter', async () => {
		const wrapper = mountGroup();
		const first = wrapper.findAll('[role="button"]')[0];

		await first?.trigger('keydown', { key: 'Enter' });

		expect(wrapper.emitted('update:modelValue')).toEqual([['one']]);
	});

	it('does not change selection when disabled', async () => {
		const wrapper = mountGroup({ disabled: true });

		await wrapper.findAll('[role="button"]')[0]?.trigger('click');

		expect(wrapper.emitted('update:modelValue')).toBeUndefined();
	});
});
