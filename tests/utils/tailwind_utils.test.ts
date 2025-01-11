import { describe, expect, suite, test } from 'vitest'
import { TailwindUtils } from '../../src/utils/tailwind_utils'

describe('TailwindUtils', () => {
	suite('merge', () => {
		test('should merge two classes', () => {
			const class1 = 'bg-blue-500'
			const class2 = 'text-white'
			const mergedClass = TailwindUtils.merge(class1, class2)
			expect(mergedClass).toBe('bg-blue-500 text-white')
		})

		test('should merge multiple classes', () => {
			const class1 = 'bg-blue-500'
			const class2 = 'text-white'
			const class3 = 'rounded-lg'
			const mergedClass = TailwindUtils.merge(class1, class2, class3)
			expect(mergedClass).toBe('bg-blue-500 text-white rounded-lg')
		})

		test('should merge classes with null or undefined values', () => {
			const class1 = 'bg-blue-500'
			const class2 = 'text-white'
			const class3 = null
			const class4 = undefined
			const mergedClass = TailwindUtils.merge(class1, class2, class3, class4)
			expect(mergedClass).toBe('bg-blue-500 text-white')
		})

		test('the returned value should only contain unique classes', () => {
			const class1 = 'bg-blue-500'
			const class2 = 'text-white'
			const class3 = 'rounded-lg'
			const class4 = 'bg-blue-500'
			const mergedClass = TailwindUtils.merge(class1, class2, class3, class4)
			expect(mergedClass).toBe('bg-blue-500 text-white rounded-lg')
		})
	})
})
