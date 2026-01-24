import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BoRadioGroup from './bo-radio-group.vue';
import { BoIcon } from '../bo-icon';

describe('BoRadioGroup', () => {
	it('renders radio group with default props', () => {
		const wrapper = mount(BoRadioGroup, {
			slots: {
				default: '<input type="radio" />',
			},
			global: {
				components: { BoIcon },
			},
		});

		expect(wrapper.find('[data-testid]').exists()).toBe(true);
		expect(wrapper.find('[role="radiogroup"]').exists()).toBe(true);
	});

	it('renders label when provided', () => {
		const wrapper = mount(BoRadioGroup, {
			props: {
				label: 'Test Label',
			},
			slots: {
				default: '<input type="radio" />',
			},
			global: {
				components: { BoIcon },
			},
		});

		expect(wrapper.text()).toContain('Test Label');
	});

	it('renders description when provided', () => {
		const wrapper = mount(BoRadioGroup, {
			props: {
				description: 'Test Description',
			},
			slots: {
				default: '<input type="radio" />',
			},
			global: {
				components: { BoIcon },
			},
		});

		expect(wrapper.text()).toContain('Test Description');
	});

	it('renders error message when provided', () => {
		const wrapper = mount(BoRadioGroup, {
			props: {
				error: 'Test Error',
			},
			slots: {
				default: '<input type="radio" />',
			},
			global: {
				components: { BoIcon },
			},
		});

		expect(wrapper.text()).toContain('Test Error');
		expect(wrapper.findComponent(BoIcon).exists()).toBe(true);
	});

	it('applies vertical orientation by default', () => {
		const wrapper = mount(BoRadioGroup, {
			slots: {
				default: '<input type="radio" />',
			},
			global: {
				components: { BoIcon },
			},
		});

		const groupElement = wrapper.find('[role="radiogroup"]');
		expect(groupElement.classes()).toContain('flex-col');
	});

	it('applies horizontal orientation when specified', () => {
		const wrapper = mount(BoRadioGroup, {
			props: {
				orientation: 'horizontal',
			},
			slots: {
				default: '<input type="radio" />',
			},
			global: {
				components: { BoIcon },
			},
		});

		const groupElement = wrapper.find('[role="radiogroup"]');
		expect(groupElement.classes()).toContain('flex-row');
	});

	it('emits update:modelValue when value changes', async () => {
		const wrapper = mount(BoRadioGroup, {
			props: {
				modelValue: undefined,
			},
			slots: {
				default: '<input type="radio" />',
			},
			global: {
				components: { BoIcon },
			},
		});

		// Simulate value update
		await wrapper.vm.updateValue('test');

		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
		expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test']);
	});
});
