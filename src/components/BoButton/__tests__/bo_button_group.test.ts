import { BoButtonGroupSize, BoButtonGroupVariant } from '@/components/BoButton';
import BoButtonGroup from '@/components/BoButton/vue/BoButtonGroup.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('BoButtonGroup', () => {
	it('renders the correct number of buttons', () => {
		const items = [
			{ id: 1, label: 'Button 1' },
			{ id: 2, label: 'Button 2' },
			{ id: 3, label: 'Button 3' },
		];
		const wrapper = mount(BoButtonGroup, {
			props: {
				items,
			},
		});

		const buttons = wrapper.findAll('button');
		expect(buttons.length).toBe(items.length);
	});

	it('emits the correct event when a button is clicked', async () => {
		const items = [
			{ id: 1, label: 'Button 1' },
			{ id: 2, label: 'Button 2' },
			{ id: 3, label: 'Button 3' },
		];
		const wrapper = mount(BoButtonGroup, {
			props: {
				items,
			},
		});

		const buttons = wrapper.findAll('button');
		const buttonIndex = 1;
		await buttons[buttonIndex].trigger('click');

		expect(wrapper.emitted().select).toBeTruthy();
		expect(wrapper.emitted().select[0]).toEqual([
			{ index: buttonIndex, item: items[buttonIndex] },
		]);
	});

	it('applies the correct classes based on props', () => {
		const items = [
			{ id: 1, label: 'Button 1' },
			{ id: 2, label: 'Button 2' },
			{ id: 3, label: 'Button 3' },
		];
		const disabled = true;
		const size = BoButtonGroupSize.small;
		const variant = BoButtonGroupVariant.default;

		const wrapper = mount(BoButtonGroup, {
			props: {
				items,
				disabled,
				size,
				variant,
			},
		});

		const buttonGroup = wrapper.find('.inline-flex');
		expect(buttonGroup.classes()).toContain('flex-row');

		const buttons = wrapper.findAll('button');
		buttons.forEach((button) => {
			expect(button.classes()).toContain('disabled:cursor-not-allowed');
			expect(button.classes()).toContain('disabled:opacity-50');
			expect(button.classes()).toContain('text-xs');
			expect(button.classes()).toContain('text-gray-700');
		});
	});
});
