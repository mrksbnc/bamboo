import { beforeEach, describe, expect, it, vi } from 'vitest'
import { localStorageMock } from '../tests/setup'
import { LocalStorageUtils } from './local_storage_utils'

describe('LocalStorageUtils', () => {
	beforeEach(() => {
		localStorageMock.reset()

		vi.clearAllMocks()
		vi.spyOn(console, 'error').mockImplementation(() => {})
	})

	describe('getItem', () => {
		it('should return null if item does not exist', () => {
			expect(LocalStorageUtils.getItem('non-existent')).toBe(null)
		})

		it('should return the stored value if it exists', () => {
			window.localStorage.setItem('test-key', 'test-value')
			expect(LocalStorageUtils.getItem('test-key')).toBe('test-value')
		})

		it('should handle errors and return null', () => {
			localStorageMock.simulateError = true

			expect(LocalStorageUtils.getItem('test-key')).toBe(null)
			expect(console.error).toHaveBeenCalled()
		})
	})

	describe('setItem', () => {
		it('should store the value in localStorage', () => {
			const result = LocalStorageUtils.setItem('test-key', 'test-value')

			expect(result).toBe(true)
			expect(window.localStorage.getItem('test-key')).toBe('test-value')
		})

		it('should handle errors and return false', () => {
			localStorageMock.simulateError = true

			const result = LocalStorageUtils.setItem('test-key', 'test-value')

			expect(result).toBe(false)
			expect(console.error).toHaveBeenCalled()
		})
	})

	describe('removeItem', () => {
		it('should remove the item from localStorage', () => {
			window.localStorage.setItem('test-key', 'test-value')

			const result = LocalStorageUtils.removeItem('test-key')

			expect(result).toBe(true)
			expect(window.localStorage.getItem('test-key')).toBeNull()
		})

		it('should handle errors and return false', () => {
			localStorageMock.simulateError = true

			const result = LocalStorageUtils.removeItem('test-key')

			expect(result).toBe(false)
			expect(console.error).toHaveBeenCalled()
		})
	})

	describe('clear', () => {
		it('should clear all items from localStorage', () => {
			window.localStorage.setItem('test-key1', 'test-value1')
			window.localStorage.setItem('test-key2', 'test-value2')

			const result = LocalStorageUtils.clear()

			expect(result).toBe(true)
			expect(window.localStorage.length).toBe(0)
		})

		it('should handle errors and return false', () => {
			localStorageMock.simulateError = true

			const result = LocalStorageUtils.clear()

			expect(result).toBe(false)
			expect(console.error).toHaveBeenCalled()
		})
	})

	describe('isAvailable', () => {
		it('should return true if localStorage is available', () => {
			expect(LocalStorageUtils.isAvailable()).toBe(true)
		})

		it('should return false if localStorage throws an error', () => {
			localStorageMock.simulateError = true

			expect(LocalStorageUtils.isAvailable()).toBe(false)
		})
	})

	describe('getJSON', () => {
		it('should return null if item does not exist', () => {
			expect(LocalStorageUtils.getJSON('non-existent')).toBe(null)
		})

		it('should parse and return JSON data', () => {
			const testObject = { name: 'Test', value: 123 }
			window.localStorage.setItem('test-json', JSON.stringify(testObject))

			const result = LocalStorageUtils.getJSON<typeof testObject>('test-json')

			expect(result).toEqual(testObject)
		})

		it('should handle parsing errors and return null', () => {
			window.localStorage.setItem('invalid-json', '{invalid json')

			const result = LocalStorageUtils.getJSON('invalid-json')

			expect(result).toBe(null)
			expect(console.error).toHaveBeenCalled()
		})
	})

	describe('setJSON', () => {
		it('should stringify and store JSON data', () => {
			const testObject = { name: 'Test', value: 123 }

			const result = LocalStorageUtils.setJSON('test-json', testObject)

			expect(result).toBe(true)
			const storedValue = window.localStorage.getItem('test-json')
			expect(JSON.parse(storedValue!)).toEqual(testObject)
		})

		it('should handle stringify errors and return false', () => {
			const circular: Record<string, unknown> = {}
			circular.self = circular

			const result = LocalStorageUtils.setJSON('test-json', circular)

			expect(result).toBe(false)
			expect(console.error).toHaveBeenCalled()
		})
	})
})
