import { BoButtonVariant } from '@/components/bo-button';
import { Icon } from '@/components/bo-icon';
import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { nextTick } from 'vue';
import BoDropdown from './BoDropdown.vue';
import { BoDropdownPlacement } from './bo-dropdown';

// Mock the useElementBounding function
vi.mock('@vueuse/core', async () => {
	const actual = await vi.importActual('@vueuse/core');
	return {
		...actual,
		useElementBounding: () => ({
			left: { value: 100 },
			right: { value: 200 },
			top: { value: 100 },
			bottom: { value: 150 },
			width: { value: 100 },
			height: { value: 50 },
			update: vi.fn(),
		}),
		onClickOutside: vi.fn(),
	};
});

describe('BoDropdown', () => {
	const defaultOptions = [
		{ label: 'Option 1', icon: Icon.check },
		{ label: 'Option 2', icon: Icon.x },
		{ label: 'Option 3', icon: Icon.heart },
	];

	it('renders properly with default settings', () => {
		const wrapper = mount(BoDropdown, {
			props: {
				options: defaultOptions,
				defaultOption: defaultOptions[0],
			},
		});

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.findComponent({ name: 'BoButton' }).exists()).toBe(true);

		// Dropdown should be closed initially
		expect(wrapper.find('#dropdown').exists()).toBe(false);
	});

	it('opens dropdown when toggle button is clicked', async () => {
		const wrapper = mount(BoDropdown, {
			props: {
				options: defaultOptions,
				defaultOption: defaultOptions[0],
			},
		});

		// Click toggle button
		await wrapper.findComponent({ name: 'BoButton' }).trigger('click');

		// Dropdown should be open
		expect(wrapper.find('#dropdown').exists()).toBe(true);
	});

	it('closes dropdown when an option is clicked', async () => {
		const wrapper = mount(BoDropdown, {
			props: {
				options: defaultOptions,
				defaultOption: defaultOptions[0],
			},
		});

		// Open dropdown
		await wrapper.findComponent({ name: 'BoButton' }).trigger('click');
		expect(wrapper.find('#dropdown').exists()).toBe(true);

		// Click first option
		await wrapper.findAll('component').at(0)?.trigger('click');

		// Dropdown should be closed
		expect(wrapper.find('#dropdown').exists()).toBe(false);
	});

	it('emits select event with option when clicked', async () => {
		const wrapper = mount(BoDropdown, {
			props: {
				options: defaultOptions,
				defaultOption: defaultOptions[0],
			},
		});

		// Open dropdown
		await wrapper.findComponent({ name: 'BoButton' }).trigger('click');

		// Click second option
		await wrapper.findAll('component').at(1)?.trigger('click');

		// Check that select event was emitted with the correct option
		expect(wrapper.emitted('select')).toBeTruthy();
		expect(wrapper.emitted('select')?.[0][0]).toEqual(defaultOptions[1]);
	});

	it('applies custom toggle variant', () => {
		const wrapper = mount(BoDropdown, {
			props: {
				options: defaultOptions,
				defaultOption: defaultOptions[0],
				toggleVariant: BoButtonVariant.secondary,
			},
		});

		const button = wrapper.findComponent({ name: 'BoButton' });
		expect(button.props('variant')).toBe(BoButtonVariant.secondary);
	});

	it('positions dropdown based on placement prop', async () => {
		const wrapper = mount(BoDropdown, {
			props: {
				options: defaultOptions,
				defaultOption: defaultOptions[0],
				placement: BoDropdownPlacement.bottomStart,
			},
		});

		// Open dropdown
		await wrapper.findComponent({ name: 'BoButton' }).trigger('click');
		await nextTick();

		const dropdown = wrapper.find('#dropdown');
		expect(dropdown.exists()).toBe(true);

		// Check positioning style
		const style = dropdown.attributes('style');
		expect(style).toContain('position: absolute');
		expect(style).toContain('left: 100px'); // From mocked useElementBounding
		expect(style).toContain('top: 154px'); // bottom (150) + offset (4)
	});
});
