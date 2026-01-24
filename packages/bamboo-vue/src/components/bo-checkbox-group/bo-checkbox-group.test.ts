import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BoCheckboxGroup from './bo-checkbox-group.vue';
import { BoIcon } from '../bo-icon';

describe('BoCheckboxGroup', () => {
	it('renders checkbox group with default props', () => {
		const wrapper = mount(BoCheckboxGroup, {
			slots: {
				default: '<input type="checkbox" />',
			},
			global: {
				components: { BoIcon },
			},
		});

		expect(wrapper.find('[data-testid]').exists()).toBe(true);
		expect(wrapper.find('[role="group"]').exists()).toBe(true);
	});

	it('renders label when provided', () => {
		const wrapper = mount(BoCheckboxGroup, {
			props: {
				label: 'Test Label',
			},
			slots: {
				default: '<input type="checkbox" />',
			},
			global: {
				components: { BoIcon },
			},
		});

		expect(wrapper.text()).toContain('Test Label');
	});

	it('renders description when provided', () => {
		const wrapper = mount(BoCheckboxGroup, {
			props: {
				description: 'Test Description',
			},
			slots: {
				default: '<input type="checkbox" />',
			},
			global: {
				components: { BoIcon },
			},
		});

		expect(wrapper.text()).toContain('Test Description');
	});

	it('renders error message when provided', () => {
		const wrapper = mount(BoCheckboxGroup, {
			props: {
				error: 'Test Error',
			},
			slots: {
				default: '<input type="checkbox" />',
			},
			global: {
				components: { BoIcon },
			},
		});

		expect(wrapper.text()).toContain('Test Error');
		expect(wrapper.findComponent(BoIcon).exists()).toBe(true);
	});

	it('applies vertical orientation by default', () => {
		const wrapper = mount(BoCheckboxGroup, {
			slots: {
				default: '<input type="checkbox" />',
			},
			global: {
				components: { BoIcon },
			},
		});

		const groupElement = wrapper.find('[role="group"]');
		expect(groupElement.classes()).toContain('flex-col');
	});

	it('applies horizontal orientation when specified', () => {
		const wrapper = mount(BoCheckboxGroup, {
			props: {
				orientation: 'horizontal',
			},
			slots: {
				default: '<input type="checkbox" />',
			},
			global: {
				components: { BoIcon },
			},
		});

		const groupElement = wrapper.find('[role="group"]');
		expect(groupElement.classes()).toContain('flex-row');
	});

	it('emits update:modelValue when value changes', async () => {
		const wrapper = mount(BoCheckboxGroup, {
			props: {
				modelValue: [],
			},
			slots: {
				default: '<input type="checkbox" />',
			},
			global: {
				components: { BoIcon },
			},
		});

		// Simulate value update
		await wrapper.vm.updateValue('test', true);

		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
		expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['test']]);
	});
});
