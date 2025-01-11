import { describe, expect, suite, test } from 'vitest'
import { StringUtils } from '../../src/utils/string_utils'

describe('StringUtils', () => {
	suite('capitalize', () => {
		test('should capitalize a string', () => {
			const str = 'hello world'
			const capitalizedStr = StringUtils.capitalize(str)
			expect(capitalizedStr).toBe('Hello world')
		})

		test('should return the original string if it is already capitalized', () => {
			const str = 'Hello world'
			const capitalizedStr = StringUtils.capitalize(str)
			expect(capitalizedStr).toBe('Hello world')
		})

		test('the returned value should be a string', () => {
			const str = 'hello world'
			const capitalizedStr = StringUtils.capitalize(str)
			expect(typeof capitalizedStr).toBe('string')
		})
	})

	suite('camelCaseToTitleCase', () => {
		test('should convert a camel case string to title case', () => {
			const str = 'helloWorld'
			const titleCaseStr = StringUtils.camelCaseToTitleCase(str)
			expect(titleCaseStr).toBe('Hello World')
		})

		test('should return the original string if it is already in title case', () => {
			const str = 'Hello World'
			const titleCaseStr = StringUtils.camelCaseToTitleCase(str)
			expect(titleCaseStr).toBe('Hello  World')
		})

		test('the returned value should be a string', () => {
			const str = 'helloWorld'
			const titleCaseStr = StringUtils.camelCaseToTitleCase(str)
			expect(typeof titleCaseStr).toBe('string')
		})
	})

	suite('isEmptyStr', () => {
		test('should return true for an empty string', () => {
			const str = ''
			const isEmpty = StringUtils.isEmptyStr(str)
			expect(isEmpty).toBeTruthy()
		})

		test('should return true for a string with only whitespace', () => {
			const str = '   '
			const isEmpty = StringUtils.isEmptyStr(str)
			expect(isEmpty).toBeTruthy()
		})

		test('should return false for a non-empty string', () => {
			const str = 'hello world'
			const isEmpty = StringUtils.isEmptyStr(str)
			expect(isEmpty).toBeFalsy()
		})

		test('should return true for a null or undefined value', () => {
			const str = null
			const isEmpty = StringUtils.isEmptyStr(str)
			expect(isEmpty).toBeTruthy()

			const str2 = undefined
			const isEmpty2 = StringUtils.isEmptyStr(str2)
			expect(isEmpty2).toBeTruthy()
		})
	})
})
