import { BoIcon, Icon } from '@/components/bo_icon'
import {
	BoInput,
	BoInputSize,
	BoInputState,
	BoInputType,
	BoInputVariant,
} from '@/components/bo_input'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, suite, test } from 'vitest'

let globalWrapper: ReturnType<typeof mount>

beforeEach(() => {
	globalWrapper = mount(BoInput, {
		props: {
			modelValue: '',
			label: 'Test Label',
			placeholder: 'Test Placeholder',
		},
	})
})

describe('BoInput.vue', () => {
	test('renders properly', () => {
		expect(globalWrapper).toBeTruthy()
	})

	test('renders the label correctly', () => {
		expect(globalWrapper.find('label').text()).toContain('Test Label')
	})

	test('renders the input with correct placeholder', () => {
		const input = globalWrapper.find('input')
		expect(input.attributes('placeholder')).toBe('Test Placeholder')
	})

	test('emits update:modelValue event when input value changes', async () => {
		const input = globalWrapper.find('input')
		await input.setValue('New Value')
		expect(globalWrapper.emitted('update:modelValue')).toBeTruthy()
		expect(globalWrapper.emitted('update:modelValue')![0]).toEqual(['New Value'])
	})

	suite('Input Variants', () => {
		test('default variant applies the correct classes', () => {
			const input = globalWrapper.find('input')
			expect(input.classes()).toContain('border')
			expect(input.classes()).toContain('border-[1px]')
			expect(input.classes()).toContain('border-gray-300')
			expect(input.classes()).toContain('rounded-lg')
			expect(input.classes()).toContain('bg-transparent')
		})

		test('filled variant applies the correct classes', async () => {
			await globalWrapper.setProps({ variant: BoInputVariant.filled })
			const input = globalWrapper.find('input')
			expect(input.classes()).toContain('border-transparent')
			expect(input.classes()).toContain('bg-gray-100')
		})

		test('underline variant applies the correct classes', async () => {
			await globalWrapper.setProps({ variant: BoInputVariant.underline })
			const input = globalWrapper.find('input')
			expect(input.classes()).toContain('border-0')
			expect(input.classes()).toContain('border-b-[1px]')
			expect(input.classes()).toContain('rounded-none')
			expect(input.classes()).toContain('focus:ring-0')
			expect(input.classes()).toContain('focus:outline-none')
			expect(input.classes()).toContain('px-0')
		})
	})

	suite('Input Sizes', () => {
		test('small size applies the correct classes', async () => {
			await globalWrapper.setProps({ size: BoInputSize.small })
			const input = globalWrapper.find('input')
			expect(input.classes()).toContain('p-2')
			expect(input.classes()).toContain('text-xs')
		})

		test('default size applies the correct classes', async () => {
			await globalWrapper.setProps({ size: BoInputSize.default })
			const input = globalWrapper.find('input')
			expect(input.classes()).toContain('p-2.5')
			expect(input.classes()).toContain('text-sm')
		})

		test('large size applies the correct classes', async () => {
			await globalWrapper.setProps({ size: BoInputSize.large })
			const input = globalWrapper.find('input')
			expect(input.classes()).toContain('p-4')
			expect(input.classes()).toContain('text-base')
		})
	})

	suite('Input States', () => {
		test('valid state applies the correct classes', async () => {
			await globalWrapper.setProps({ state: BoInputState.valid })
			const input = globalWrapper.find('input')
			expect(input.classes()).toContain('border-green-500')
			expect(input.classes()).toContain('bg-green-50')
			expect(input.classes()).toContain('text-green-900')
		})

		test('invalid state applies the correct classes', async () => {
			await globalWrapper.setProps({
				state: BoInputState.invalid,
				errorMessage: 'Test error message',
			})
			const input = globalWrapper.find('input')
			expect(input.classes()).toContain('border-red-500')
			expect(input.classes()).toContain('bg-red-50')
			expect(input.classes()).toContain('text-red-900')

			// Check that error message is displayed
			const errorMessage = globalWrapper.find('.text-red-600')
			expect(errorMessage.exists()).toBe(true)
			expect(errorMessage.text()).toContain('Test error message')
		})
	})

	suite('Disabled and Readonly States', () => {
		test('disabled state applies the correct classes', async () => {
			await globalWrapper.setProps({ disabled: true })
			const input = globalWrapper.find('input')
			expect(input.attributes('disabled')).toBeDefined()
			expect(input.classes()).toContain('cursor-not-allowed')
			expect(input.classes()).toContain('bg-gray-100')
			expect(input.classes()).toContain('text-gray-500')
			expect(input.classes()).toContain('placeholder-gray-400')
		})

		test('readonly state applies the correct classes', async () => {
			await globalWrapper.setProps({ readonly: true })
			const input = globalWrapper.find('input')
			expect(input.attributes('readonly')).toBeDefined()
			expect(input.classes()).toContain('text-gray-500')
			expect(input.classes()).toContain('placeholder-gray-400')
		})
	})

	suite('Input with Icons', () => {
		test('renders prefix icon correctly', async () => {
			await globalWrapper.setProps({ prefixIcon: Icon.user })
			expect(globalWrapper.findComponent(BoIcon).exists()).toBe(true)
			const prefixIconContainer = globalWrapper.find('.left-0')
			expect(prefixIconContainer.exists()).toBe(true)

			// Should add left padding to the input
			const input = globalWrapper.find('input')
			expect(input.classes()).toContain('pl-10')
		})

		test('renders suffix icon correctly', async () => {
			await globalWrapper.setProps({ suffixIcon: Icon.search })
			expect(globalWrapper.findComponent(BoIcon).exists()).toBe(true)
			const suffixIconContainer = globalWrapper.find('.right-0')
			expect(suffixIconContainer.exists()).toBe(true)

			// Should add right padding to the input
			const input = globalWrapper.find('input')
			expect(input.classes()).toContain('pr-10')
		})
	})

	suite('Clearable Input', () => {
		test('does not show clear button when input is empty', async () => {
			await globalWrapper.setProps({ clearable: true, modelValue: '' })
			const clearButton = globalWrapper.find('button')
			expect(clearButton.exists()).toBe(false)
		})

		test('shows clear button when input has value', async () => {
			await globalWrapper.setProps({ clearable: true, modelValue: 'Test Value' })
			const clearButton = globalWrapper.find('button')
			expect(clearButton.exists()).toBe(true)
		})

		test('clears the input when clear button is clicked', async () => {
			await globalWrapper.setProps({ clearable: true, modelValue: 'Test Value' })
			const clearButton = globalWrapper.find('button')
			await clearButton.trigger('click')

			expect(globalWrapper.emitted('clear')).toBeTruthy()
			expect(globalWrapper.emitted('update:modelValue')).toBeTruthy()
			expect(globalWrapper.emitted('update:modelValue')![0]).toEqual([''])
		})
	})

	suite('Required Input', () => {
		test('displays required asterisk when input is required', async () => {
			await globalWrapper.setProps({ required: true })
			const requiredMark = globalWrapper.find('.text-red-500')
			expect(requiredMark.exists()).toBe(true)
			expect(requiredMark.text()).toBe('*')
		})
	})

	suite('Input Types', () => {
		test('renders text input by default', () => {
			const input = globalWrapper.find('input')
			expect(input.attributes('type')).toBe('text')
		})

		test('renders password input when type is password', async () => {
			await globalWrapper.setProps({ type: BoInputType.password })
			const input = globalWrapper.find('input')
			expect(input.attributes('type')).toBe('password')
		})

		test('renders email input when type is email', async () => {
			await globalWrapper.setProps({ type: BoInputType.email })
			const input = globalWrapper.find('input')
			expect(input.attributes('type')).toBe('email')
		})

		test('renders number input when type is number', async () => {
			await globalWrapper.setProps({ type: BoInputType.number })
			const input = globalWrapper.find('input')
			expect(input.attributes('type')).toBe('number')
		})
	})

	suite('Input Events', () => {
		test('emits focus event when input is focused', async () => {
			const input = globalWrapper.find('input')
			await input.trigger('focus')
			expect(globalWrapper.emitted('focus')).toBeTruthy()
		})

		test('emits blur event when input loses focus', async () => {
			const input = globalWrapper.find('input')
			await input.trigger('blur')
			expect(globalWrapper.emitted('blur')).toBeTruthy()
		})

		test('emits input event when input value changes', async () => {
			const input = globalWrapper.find('input')
			await input.setValue('New Value')
			expect(globalWrapper.emitted('input')).toBeTruthy()
		})
	})

	suite('Helper text and description', () => {
		test('displays description when provided', async () => {
			await globalWrapper.setProps({ description: 'This is a description' })
			const description = globalWrapper.find('.text-gray-500')
			expect(description.exists()).toBe(true)
			expect(description.text()).toBe('This is a description')
		})

		test('description is not shown when there is an error message and state is invalid', async () => {
			await globalWrapper.setProps({
				description: 'This is a description',
				errorMessage: 'This is an error',
				state: BoInputState.invalid,
			})

			// Error message should be shown
			const errorMessage = globalWrapper.find('.text-red-600')
			expect(errorMessage.exists()).toBe(true)

			// Description should not be visible when there's an error
			const descriptions = globalWrapper.findAll('.text-gray-500')
			let descriptionVisible = false

			for (const desc of descriptions) {
				if (desc.text() === 'This is a description') {
					descriptionVisible = true
					break
				}
			}

			expect(descriptionVisible).toBe(false)
		})
	})
})
