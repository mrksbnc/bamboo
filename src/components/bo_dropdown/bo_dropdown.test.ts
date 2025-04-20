import { BoButton, BoButtonVariant } from '@/components/bo_button'
import { Icon } from '@/components/bo_icon'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { BoDropdown } from '.'
import type { BaseDropdownOption } from './bo_dropdown'
import BoDefaultDropdownItem from './options/BoDefaultDropdownItem.vue'

describe('BoDropdown', () => {
	const defaultOptions: BaseDropdownOption[] = [
		{
			icon: Icon.user,
			label: 'User Profile',
		},
		{
			icon: Icon.settings,
			label: 'Settings',
		},
		{
			icon: Icon.log_out,
			label: 'Logout',
		},
	]

	it('renders properly', () => {
		const wrapper = mount(BoDropdown, {
			props: {
				options: defaultOptions,
				defaultOption: defaultOptions[0],
			},
		})
		expect(wrapper.findComponent(BoButton).exists()).toBe(true)
	})

	it('displays the default option label', () => {
		const wrapper = mount(BoDropdown, {
			props: {
				options: defaultOptions,
				defaultOption: defaultOptions[0],
			},
		})
		expect(wrapper.findComponent(BoButton).props().label).toBe('User Profile')
	})

	it('opens dropdown when button is clicked', async () => {
		const wrapper = mount(BoDropdown, {
			props: {
				options: defaultOptions,
				defaultOption: defaultOptions[0],
			},
		})

		// Dropdown should initially be closed
		expect(wrapper.find('#dropdown').exists()).toBe(false)

		// Click the button to open dropdown
		await wrapper.findComponent(BoButton).trigger('click')

		// Dropdown should now be open
		expect(wrapper.find('#dropdown').exists()).toBe(true)
	})

	it('closes dropdown and emits select event when option is clicked', async () => {
		const wrapper = mount(BoDropdown, {
			props: {
				options: defaultOptions,
				defaultOption: defaultOptions[0],
			},
		})

		await wrapper.findComponent(BoButton).trigger('click')

		const dropdownItems = wrapper.findAllComponents(BoDefaultDropdownItem)
		expect(dropdownItems.length).toBe(3)

		await dropdownItems[1].trigger('click')

		expect(wrapper.find('#dropdown').exists()).toBe(false)

		expect(wrapper.emitted('select')).toBeTruthy()
		expect(wrapper.emitted('select')?.[0][0]).toEqual(defaultOptions[1])

		expect(wrapper.findComponent(BoButton).props().label).toBe('Settings')
	})

	it('applies toggle variant to button', () => {
		const wrapper = mount(BoDropdown, {
			props: {
				options: defaultOptions,
				defaultOption: defaultOptions[0],
				toggleVariant: BoButtonVariant.secondary,
			},
		})

		expect(wrapper.findComponent(BoButton).props().variant).toBe(BoButtonVariant.secondary)
	})
})
