import {
	BoFontFamily,
	BoFontSize,
	BoFontWeight,
	BoText,
	BoTextAlign,
	BoTextColor,
	BoTextWhiteSpace,
} from '@/components/bo_text'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, suite, test } from 'vitest'

let wrapper: ReturnType<typeof mount>

beforeEach(() => {
	wrapper = mount(BoText, {
		props: {
			id: 'test-id',
			text: 'Hello World!',
			size: BoFontSize.base,
			weight: BoFontWeight.regular,
			fontFamily: BoFontFamily.sans,
			whiteSpace: BoTextWhiteSpace.normal,
		},
	})
})

describe('bo_text.vue', () => {
	test('the text shoudl render properly', () => {
		expect(wrapper.find('#test-id')).toBeTruthy()
	})

	test('the text container should have the correct default classes', () => {
		expect(wrapper.find('#test-id').classes()).toContain('bo-text')
		expect(wrapper.find('#test-id').classes()).toContain('inline-flex')
		expect(wrapper.find('#test-id').classes()).toContain('items-center')
		expect(wrapper.find('#test-id').classes()).toContain('shrink')
	})

	suite('text sizes', () => {
		test('the text should have the correct extra small size classes', async () => {
			await wrapper.setProps({ size: BoFontSize.xs })
			expect(wrapper.find('#test-id').classes()).toContain('text-xs')
		})

		test('the text should have the correct small size classes', async () => {
			await wrapper.setProps({ size: BoFontSize.sm })
			expect(wrapper.find('#test-id').classes()).toContain('text-sm')
		})

		test('the text should have the correct base size classes', async () => {
			await wrapper.setProps({ size: BoFontSize.base })
			expect(wrapper.find('#test-id').classes()).toContain('text-base')
		})

		test('the text should have the correct large size classes', async () => {
			await wrapper.setProps({ size: BoFontSize.lg })
			expect(wrapper.find('#test-id').classes()).toContain('text-lg')
		})

		test('the text should have the correct extra large size classes', async () => {
			await wrapper.setProps({ size: BoFontSize.xl })
			expect(wrapper.find('#test-id').classes()).toContain('text-xl')
		})

		test('the text should have the correct 2xl size classes', async () => {
			await wrapper.setProps({ size: BoFontSize['2xl'] })
			expect(wrapper.find('#test-id').classes()).toContain('text-2xl')
		})

		test('the text should have the correct 3xl size classes', async () => {
			await wrapper.setProps({ size: BoFontSize['3xl'] })
			expect(wrapper.find('#test-id').classes()).toContain('text-3xl')
		})

		test('the text should have the correct 4xl size classes', async () => {
			await wrapper.setProps({ size: BoFontSize['4xl'] })
			expect(wrapper.find('#test-id').classes()).toContain('text-4xl')
		})

		test('the text should have the correct 5xl size classes', async () => {
			await wrapper.setProps({ size: BoFontSize['5xl'] })
			expect(wrapper.find('#test-id').classes()).toContain('text-5xl')
		})

		test('the text should have the correct 6xl size classes', async () => {
			await wrapper.setProps({ size: BoFontSize['6xl'] })
			expect(wrapper.find('#test-id').classes()).toContain('text-6xl')
		})

		test('the text should have the correct 7xl size classes', async () => {
			await wrapper.setProps({ size: BoFontSize['7xl'] })
			expect(wrapper.find('#test-id').classes()).toContain('text-7xl')
		})

		test('the text should have the correct 8xl size classes', async () => {
			await wrapper.setProps({ size: BoFontSize['8xl'] })
			expect(wrapper.find('#test-id').classes()).toContain('text-8xl')
		})

		test('the text should have the correct 9xl size classes', async () => {
			await wrapper.setProps({ size: BoFontSize['9xl'] })
			expect(wrapper.find('#test-id').classes()).toContain('text-9xl')
		})
	})

	suite('text-cursor', () => {
		test('the text should have the correct default cursor classes', () => {
			expect(wrapper.find('#test-id').classes()).toContain('cursor-default')
		})

		test('the text should have the correct pointer cursor classes', async () => {
			await wrapper.setProps({ clickable: true })
			expect(wrapper.find('#test-id').classes()).toContain('cursor-pointer')
		})
	})

	suite('font-weight', () => {
		test('the text should have the correct default font weight classes', () => {
			expect(wrapper.find('#test-id').classes()).toContain('font-normal')
		})

		test('the text should have the correct light font weight classes', async () => {
			await wrapper.setProps({ weight: BoFontWeight.light })
			expect(wrapper.find('#test-id').classes()).toContain('font-light')
		})

		test('the text should have the correct regular font weight classes', async () => {
			await wrapper.setProps({ weight: BoFontWeight.regular })
			expect(wrapper.find('#test-id').classes()).toContain('font-normal')
		})

		test('the text should have the correct medium font weight classes', async () => {
			await wrapper.setProps({ weight: BoFontWeight.medium })
			expect(wrapper.find('#test-id').classes()).toContain('font-medium')
		})

		test('the text should have the correct semibold font weight classes', async () => {
			await wrapper.setProps({ weight: BoFontWeight.semibold })
			expect(wrapper.find('#test-id').classes()).toContain('font-semibold')
		})

		test('the text should have the correct bold font weight classes', async () => {
			await wrapper.setProps({ weight: BoFontWeight.bold })
			expect(wrapper.find('#test-id').classes()).toContain('font-bold')
		})
	})

	suite('font-family', () => {
		test('the text should have the correct default font family classes', () => {
			expect(wrapper.find('#test-id').classes()).toContain('font-sans')
		})

		test('the text should have the correct sans font family classes', async () => {
			await wrapper.setProps({ fontFamily: BoFontFamily.sans })
			expect(wrapper.find('#test-id').classes()).toContain('font-sans')
		})

		test('the text should have the correct mono font family classes', async () => {
			await wrapper.setProps({ fontFamily: BoFontFamily.mono })
			expect(wrapper.find('#test-id').classes()).toContain('font-mono')
		})

		test('the text should have the correct serif font family classes', async () => {
			await wrapper.setProps({ fontFamily: BoFontFamily.serif })
			expect(wrapper.find('#test-id').classes()).toContain('font-serif')
		})
	})

	suite('white-space', () => {
		test('the text should have the correct default white space classes', () => {
			expect(wrapper.find('#test-id').classes()).toContain('whitespace-normal')
			expect(wrapper.find('#test-id').classes()).toContain('text-clip')
		})

		test('the text should have the correct nowrap white space classes', async () => {
			await wrapper.setProps({ whiteSpace: BoTextWhiteSpace.nowrap })
			expect(wrapper.find('#test-id').classes()).toContain('truncate')
		})

		test('the text should have the correct normal white space classes', async () => {
			await wrapper.setProps({ whiteSpace: BoTextWhiteSpace.normal })
			expect(wrapper.find('#test-id').classes()).toContain('whitespace-normal')
			expect(wrapper.find('#test-id').classes()).toContain('text-clip')
		})

		test('the text should have the correct pre white space classes', async () => {
			await wrapper.setProps({ whiteSpace: BoTextWhiteSpace.pre })
			expect(wrapper.find('#test-id').classes()).toContain('whitespace-pre')
			expect(wrapper.find('#test-id').classes()).toContain('text-clip')
		})

		test('the text should have the correct pre-line white space classes', async () => {
			await wrapper.setProps({ whiteSpace: BoTextWhiteSpace.pre_line })
			expect(wrapper.find('#test-id').classes()).toContain(
				'whitespace-pre-line',
			)
			expect(wrapper.find('#test-id').classes()).toContain('text-clip')
		})

		test('the text should have the correct pre-wrap white space classes', async () => {
			await wrapper.setProps({ whiteSpace: BoTextWhiteSpace.pre_wrap })
			expect(wrapper.find('#test-id').classes()).toContain(
				'whitespace-pre-wrap',
			)
			expect(wrapper.find('#test-id').classes()).toContain('text-clip')
		})

		test('the text should have the correct break-spaces white space classes', async () => {
			await wrapper.setProps({ whiteSpace: BoTextWhiteSpace.break_spaces })
			expect(wrapper.find('#test-id').classes()).toContain('break-spaces')
			expect(wrapper.find('#test-id').classes()).toContain('text-clip')
		})
	})

	suite('text-color', () => {
		test('the text should have the correct default color classes without text color', () => {
			expect(wrapper.find('#test-id').classes()).toContain('text-current')
		})

		test('the text should have the correct default color classes with text color', async () => {
			await wrapper.setProps({ color: BoTextColor.default })
			expect(wrapper.find('#test-id').classes()).toContain('text-neutral-900')
		})

		test('the text should have the correct current color classes', async () => {
			await wrapper.setProps({ color: BoTextColor.current })
			expect(wrapper.find('#test-id').classes()).toContain('text-current')
		})

		test('the text should have the correct inherit color classes', async () => {
			await wrapper.setProps({ color: BoTextColor.inherit })
			expect(wrapper.find('#test-id').classes()).toContain('text-inherit')
		})

		test('the text should have the correct success color classes', async () => {
			await wrapper.setProps({ color: BoTextColor.success })
			expect(wrapper.find('#test-id').classes()).toContain('text-green-600')
		})

		test('the text should have the correct warning color classes', async () => {
			await wrapper.setProps({ color: BoTextColor.warning })
			expect(wrapper.find('#test-id').classes()).toContain('text-yellow-600')
		})

		test('the text should have the correct danger color classes', async () => {
			await wrapper.setProps({ color: BoTextColor.danger })
			expect(wrapper.find('#test-id').classes()).toContain('text-red-600')
		})

		test('the text should have the correct secondary color classes', async () => {
			await wrapper.setProps({ color: BoTextColor.secondary })
			expect(wrapper.find('#test-id').classes()).toContain('text-neutral-500')
		})

		test('the text should have the correct disabled color classes', async () => {
			await wrapper.setProps({ color: BoTextColor.disabled })
			expect(wrapper.find('#test-id').classes()).toContain('text-neutral-400')
		})

		test('the text should have the correct info color classes', async () => {
			await wrapper.setProps({ color: BoTextColor.info })
			expect(wrapper.find('#test-id').classes()).toContain('text-blue-600')
		})
	})

	suite('text-align', () => {
		test('the text should have the correct default text align classes', () => {
			expect(wrapper.find('#test-id').classes()).toContain('text-justify')
		})

		test('the text should have the correct left text align classes', async () => {
			await wrapper.setProps({ textAlign: BoTextAlign.left })
			expect(wrapper.find('#test-id').classes()).toContain('text-left')
		})

		test('the text should have the correct center text align classes', async () => {
			await wrapper.setProps({ textAlign: BoTextAlign.center })
			expect(wrapper.find('#test-id').classes()).toContain('text-center')
		})

		test('the text should have the correct right text align classes', async () => {
			await wrapper.setProps({ textAlign: BoTextAlign.right })
			expect(wrapper.find('#test-id').classes()).toContain('text-right')
		})

		test('the text should have the correct justify text align classes', async () => {
			await wrapper.setProps({ textAlign: BoTextAlign.justify })
			expect(wrapper.find('#test-id').classes()).toContain('text-justify')
		})
	})

	suite('custom color style', () => {
		test('the container should have the correct custom color style', async () => {
			await wrapper.setProps({ customColor: 'red' })

			const element = wrapper.find('#test-id')

			const style = element.attributes('style')
			expect(style).toBe('color: red;')
		})
	})
})
