import { describe, expect, suite, test } from 'vitest'
import { StorybookUtils } from '../../src/utils/storybook_utils'

const control = (stringEnum: { [key: string]: string }, name: string) => {
	return `enum ${name} {\n${
		Object.keys(stringEnum)
			.map((m: string) => `  ${m} = "${stringEnum[m as keyof typeof stringEnum]}",`)
			.join('\r\n') + '\r\n}'
	}`
}

const controlArray = (array: string[], name: string) => {
	return `array ${name} {\n${array.map((m: string) => `  ${m},`).join('\r\n')}\r\n}`
}

describe('StorybookUtils', () => {
	suite('stringEnumFormatter', () => {
		test('should format a string enum', () => {
			const enumObj = {
				hello: 'Hello',
				world: 'World',
			}
			const formattedEnum = StorybookUtils.stringEnumFormatter(enumObj, 'string')

			const compareValue = control(enumObj, 'string')

			expect(formattedEnum).toBeTruthy()
			expect(typeof formattedEnum).toBe('string')
			expect(formattedEnum).toBe(compareValue)
		})
	})

	suite('arrayFormatter', () => {
		test('should format an array', () => {
			const array = ['hello', 'world']
			const formattedArray = StorybookUtils.arrayFormatter(array, 'array')

			const compareValue = controlArray(array, 'array')

			expect(formattedArray).toBeTruthy()
			expect(typeof formattedArray).toBe('string')
			expect(formattedArray).toBe(compareValue)
		})
	})
})
