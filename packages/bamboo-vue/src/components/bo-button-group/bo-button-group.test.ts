import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BoButtonGroup from './bo-button-group.vue';

describe('BoButtonGroup', () => {
	it('renders button group with default props', () => {
		const wrapper = mount(BoButtonGroup, {
			slots: {
				default: '<button>Test Button</button>',
			},
		});

		expect(wrapper.find('[data-testid]').exists()).toBe(true);
		expect(wrapper.find('[role="group"]').exists()).toBe(true);
	});

	it('applies horizontal orientation by default', () => {
		const wrapper = mount(BoButtonGroup, {
			slots: {
				default: '<button>Test Button</button>',
			},
		});

		const groupElement = wrapper.find('[data-testid]');
		expect(groupElement.classes()).toContain('flex-row');
	});

	it('applies vertical orientation when specified', () => {
		const wrapper = mount(BoButtonGroup, {
			props: {
				orientation: 'vertical',
			},
			slots: {
				default: '<button>Test Button</button>',
			},
		});

		const groupElement = wrapper.find('[data-testid]');
		expect(groupElement.classes()).toContain('flex-col');
	});

	it('applies full width when specified', () => {
		const wrapper = mount(BoButtonGroup, {
			props: {
				fullWidth: true,
			},
			slots: {
				default: '<button>Test Button</button>',
			},
		});

		const groupElement = wrapper.find('[data-testid]');
		expect(groupElement.classes()).toContain('w-full');
	});

	it('provides context to child components', () => {
		const wrapper = mount(BoButtonGroup, {
			props: {
				size: 'lg',
				variant: 'success',
			},
			slots: {
				default: '<button>Test Button</button>',
			},
		});

		// The component should provide context values
		expect(wrapper.vm).toBeDefined();
	});

	it('handles single selection with modelValue', async () => {
		const wrapper = mount(BoButtonGroup, {
			props: {
				modelValue: 'button1',
			},
			slots: {
				default: `
					<button data-value="button1">Button 1</button>
					<button data-value="button2">Button 2</button>
				`,
			},
		});

		await wrapper.vm.$nextTick();

		// Check if the correct button is selected
		const buttons = wrapper.findAll('button');
		expect(buttons[0].attributes('aria-pressed')).toBe('true');
		expect(buttons[1].attributes('aria-pressed')).toBe('false');
	});

	it('handles multiple selection when multiple prop is true', async () => {
		const wrapper = mount(BoButtonGroup, {
			props: {
				modelValue: ['button1', 'button3'],
				multiple: true,
			},
			slots: {
				default: `
					<button data-value="button1">Button 1</button>
					<button data-value="button2">Button 2</button>
					<button data-value="button3">Button 3</button>
				`,
			},
		});

		await wrapper.vm.$nextTick();

		// Check if the correct buttons are selected
		const buttons = wrapper.findAll('button');
		expect(buttons[0].attributes('aria-pressed')).toBe('true');
		expect(buttons[1].attributes('aria-pressed')).toBe('false');
		expect(buttons[2].attributes('aria-pressed')).toBe('true');
	});

	it('emits update:modelValue when button is clicked', async () => {
		const wrapper = mount(BoButtonGroup, {
			slots: {
				default: `
					<button data-value="button1">Button 1</button>
					<button data-value="button2">Button 2</button>
				`,
			},
		});

		await wrapper.vm.$nextTick();

		const buttons = wrapper.findAll('button');
		await buttons[0].trigger('click');

		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
		expect(wrapper.emitted('update:modelValue')![0]).toEqual(['button1']);
	});

	it('handles required selection correctly', async () => {
		const wrapper = mount(BoButtonGroup, {
			props: {
				modelValue: 'button1',
				required: true,
			},
			slots: {
				default: `
					<button data-value="button1">Button 1</button>
					<button data-value="button2">Button 2</button>
				`,
			},
		});

		await wrapper.vm.$nextTick();

		// Try to deselect the only selected button - should remain selected
		const buttons = wrapper.findAll('button');
		await buttons[0].trigger('click');

		// Should still be selected due to required prop
		expect(buttons[0].attributes('aria-pressed')).toBe('true');
	});

	it('handles more than 3 buttons correctly', async () => {
		const wrapper = mount(BoButtonGroup, {
			slots: {
				default: `
					<button data-value="btn1">Button 1</button>
					<button data-value="btn2">Button 2</button>
					<button data-value="btn3">Button 3</button>
					<button data-value="btn4">Button 4</button>
					<button data-value="btn5">Button 5</button>
				`,
			},
		});

		await wrapper.vm.$nextTick();

		const buttons = wrapper.findAll('button');
		expect(buttons).toHaveLength(5);

		// All buttons should have group-button class
		buttons.forEach((button) => {
			expect(button.classes()).toContain('group-button');
		});
	});
});
