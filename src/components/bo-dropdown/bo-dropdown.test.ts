import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BoDropdown from './bo-dropdown.vue';
import { Icon } from '@/components/bo-icon';
import type { BoDropdownOption } from './bo-dropdown';

const mockOptions: BoDropdownOption[] = [
	{ label: 'Option 1', value: '1' },
	{ label: 'Option 2', value: '2' },
	{ label: 'Option 3', value: '3' },
];

const mockOptionsWithIcons: BoDropdownOption[] = [
	{ label: 'Edit', value: 'edit', icon: Icon.edit },
	{ label: 'Delete', value: 'delete', icon: Icon.trash },
];

const mockOptionsWithSubtitles: BoDropdownOption[] = [
	{ label: 'Option 1', value: '1', subtitle: 'First option' },
	{ label: 'Option 2', value: '2', subtitle: 'Second option' },
];

describe('BoDropdown', () => {
	describe('rendering', () => {
		it('renders dropdown trigger', () => {
			const wrapper = mount(BoDropdown, {
				props: { options: mockOptions },
			});
			expect(wrapper.find('.bo-dropdown__trigger').exists()).toBe(true);
		});

		it('displays placeholder when no value selected', () => {
			const wrapper = mount(BoDropdown, {
				props: {
					options: mockOptions,
					placeholder: 'Select option',
				},
			});
			expect(wrapper.text()).toContain('Select option');
		});

		it('displays selected option label', () => {
			const wrapper = mount(BoDropdown, {
				props: {
					options: mockOptions,
					modelValue: '2',
				},
			});
			expect(wrapper.text()).toContain('Option 2');
		});

		it('renders options with icons', async () => {
			const wrapper = mount(BoDropdown, {
				props: {
					options: mockOptionsWithIcons,
				},
			});
			await wrapper.find('.bo-dropdown__trigger').trigger('click');
			expect(wrapper.findAll('.bo-dropdown__option').length).toBe(2);
		});

		it('renders options with subtitles', async () => {
			const wrapper = mount(BoDropdown, {
				props: {
					options: mockOptionsWithSubtitles,
				},
			});
			await wrapper.find('.bo-dropdown__trigger').trigger('click');
			expect(wrapper.text()).toContain('First option');
			expect(wrapper.text()).toContain('Second option');
		});
	});

	describe('interaction', () => {
		it('opens menu on trigger click', async () => {
			const wrapper = mount(BoDropdown, {
				props: { options: mockOptions },
			});
			await wrapper.find('.bo-dropdown__trigger').trigger('click');
			expect(wrapper.find('.bo-dropdown__menu').exists()).toBe(true);
		});

		it('closes menu after selecting option in single select mode', async () => {
			const wrapper = mount(BoDropdown, {
				props: { options: mockOptions },
			});
			await wrapper.find('.bo-dropdown__trigger').trigger('click');
			const options = wrapper.findAll('.bo-dropdown__option');
			await options[1]!.trigger('click');
			expect(wrapper.find('.bo-dropdown__menu').exists()).toBe(false);
		});

		it('emits update:modelValue when option selected', async () => {
			const wrapper = mount(BoDropdown, {
				props: { options: mockOptions },
			});
			await wrapper.find('.bo-dropdown__trigger').trigger('click');
			const options = wrapper.findAll('.bo-dropdown__option');
			await options[1]!.trigger('click');
			expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['2']);
		});

		it('emits change event when option selected', async () => {
			const wrapper = mount(BoDropdown, {
				props: { options: mockOptions },
			});
			await wrapper.find('.bo-dropdown__trigger').trigger('click');
			const options = wrapper.findAll('.bo-dropdown__option');
			await options[1]!.trigger('click');
			expect(wrapper.emitted('change')?.[0]).toEqual(['2']);
		});
	});

	describe('multiselect', () => {
		it('enables multiselect mode', () => {
			const wrapper = mount(BoDropdown, {
				props: {
					options: mockOptions,
					multiselect: true,
				},
			});
			expect(wrapper.find('.bo-dropdown--multiselect').exists()).toBe(true);
		});

		it('keeps menu open after selecting option in multiselect mode', async () => {
			const wrapper = mount(BoDropdown, {
				props: {
					options: mockOptions,
					multiselect: true,
				},
			});
			await wrapper.find('.bo-dropdown__trigger').trigger('click');
			const options = wrapper.findAll('.bo-dropdown__option');
			await options[0]!.trigger('click');
			expect(wrapper.find('.bo-dropdown__menu').exists()).toBe(true);
		});

		it('emits array of values in multiselect mode', async () => {
			const wrapper = mount(BoDropdown, {
				props: {
					options: mockOptions,
					multiselect: true,
					modelValue: [],
				},
			});
			await wrapper.find('.bo-dropdown__trigger').trigger('click');
			const options = wrapper.findAll('.bo-dropdown__option');
			await options[0]!.trigger('click');
			expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['1']]);
		});

		it('toggles selection in multiselect mode', async () => {
			const wrapper = mount(BoDropdown, {
				props: {
					options: mockOptions,
					multiselect: true,
					modelValue: ['1'],
				},
			});
			await wrapper.find('.bo-dropdown__trigger').trigger('click');
			const options = wrapper.findAll('.bo-dropdown__option');
			await options[0]!.trigger('click');
			expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([[]]);
		});

		it('displays count when multiple items selected', () => {
			const wrapper = mount(BoDropdown, {
				props: {
					options: mockOptions,
					multiselect: true,
					modelValue: ['1', '2'],
				},
			});
			expect(wrapper.text()).toContain('2 selected');
		});
	});

	describe('disabled state', () => {
		it('disables dropdown when disabled prop is true', () => {
			const wrapper = mount(BoDropdown, {
				props: {
					options: mockOptions,
					disabled: true,
				},
			});
			expect(wrapper.find('.bo-dropdown--disabled').exists()).toBe(true);
			expect(wrapper.find('.bo-dropdown__trigger').attributes('disabled')).toBeDefined();
		});

		it('disables individual options', async () => {
			const optionsWithDisabled: BoDropdownOption[] = [
				{ label: 'Option 1', value: '1' },
				{ label: 'Option 2', value: '2', disabled: true },
			];
			const wrapper = mount(BoDropdown, {
				props: { options: optionsWithDisabled },
			});
			await wrapper.find('.bo-dropdown__trigger').trigger('click');
			const options = wrapper.findAll('.bo-dropdown__option');
			expect(options[1]!.classes()).toContain('bo-dropdown__option--disabled');
		});

		it('does not emit events when disabled option is clicked', async () => {
			const optionsWithDisabled: BoDropdownOption[] = [
				{ label: 'Option 1', value: '1' },
				{ label: 'Option 2', value: '2', disabled: true },
			];
			const wrapper = mount(BoDropdown, {
				props: { options: optionsWithDisabled },
			});
			await wrapper.find('.bo-dropdown__trigger').trigger('click');
			const options = wrapper.findAll('.bo-dropdown__option');
			await options[1]!.trigger('click');
			expect(wrapper.emitted('update:modelValue')).toBeUndefined();
		});
	});

	describe('keyboard navigation', () => {
		it('opens menu on Enter key', async () => {
			const wrapper = mount(BoDropdown, {
				props: { options: mockOptions },
			});
			await wrapper.find('.bo-dropdown__trigger').trigger('keydown', { key: 'Enter' });
			expect(wrapper.find('.bo-dropdown__menu').exists()).toBe(true);
		});

		it('opens menu on Space key', async () => {
			const wrapper = mount(BoDropdown, {
				props: { options: mockOptions },
			});
			await wrapper.find('.bo-dropdown__trigger').trigger('keydown', { key: ' ' });
			expect(wrapper.find('.bo-dropdown__menu').exists()).toBe(true);
		});

		it('opens menu on ArrowDown key', async () => {
			const wrapper = mount(BoDropdown, {
				props: { options: mockOptions },
			});
			await wrapper.find('.bo-dropdown__trigger').trigger('keydown', { key: 'ArrowDown' });
			expect(wrapper.find('.bo-dropdown__menu').exists()).toBe(true);
		});

		it('closes menu on Escape key', async () => {
			const wrapper = mount(BoDropdown, {
				props: { options: mockOptions },
			});
			await wrapper.find('.bo-dropdown__trigger').trigger('click');
			await wrapper.find('.bo-dropdown__trigger').trigger('keydown', { key: 'Escape' });
			expect(wrapper.find('.bo-dropdown__menu').exists()).toBe(false);
		});
	});

	describe('accessibility', () => {
		it('sets aria-expanded attribute', async () => {
			const wrapper = mount(BoDropdown, {
				props: { options: mockOptions },
			});
			expect(wrapper.find('.bo-dropdown__trigger').attributes('aria-expanded')).toBe('false');
			await wrapper.find('.bo-dropdown__trigger').trigger('click');
			expect(wrapper.find('.bo-dropdown__trigger').attributes('aria-expanded')).toBe('true');
		});

		it('sets aria-haspopup attribute', () => {
			const wrapper = mount(BoDropdown, {
				props: { options: mockOptions },
			});
			expect(wrapper.find('.bo-dropdown__trigger').attributes('aria-haspopup')).toBe('true');
		});

		it('sets aria-selected on selected options', async () => {
			const wrapper = mount(BoDropdown, {
				props: {
					options: mockOptions,
					modelValue: '2',
				},
			});
			await wrapper.find('.bo-dropdown__trigger').trigger('click');
			const options = wrapper.findAll('.bo-dropdown__option');
			expect(options[1]!.attributes('aria-selected')).toBe('true');
		});

		it('applies custom aria-label', () => {
			const wrapper = mount(BoDropdown, {
				props: {
					options: mockOptions,
					ariaLabel: 'Custom label',
				},
			});
			expect(wrapper.find('.bo-dropdown__trigger').attributes('aria-label')).toBe('Custom label');
		});
	});
});
