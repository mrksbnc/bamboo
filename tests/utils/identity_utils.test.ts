import { describe, expect, suite, test } from 'vitest'
import { IdentityUtils } from '../../src/utils/identity_utils'

describe('IdentityUtils', () => {
	suite('generateRandomId', () => {
		test('should generate a random id', () => {
			const id = IdentityUtils.generateRandomId()
			expect(id).toBeTruthy()
			expect(id.length).toBeGreaterThan(0)
		})

		test('the returned id should be a string', () => {
			const id = IdentityUtils.generateRandomId()
			expect(typeof id).toBe('string')
		})
	})

	suite('generateRandomIdWithPrefix', () => {
		test('should generate a random id with a prefix', () => {
			const id = IdentityUtils.generateRandomIdWithPrefix('test')
			expect(id).toBeTruthy()
			expect(id.length).toBeGreaterThan(0)
			expect(id).toContain('test')
		})

		test('the returned id should be a string', () => {
			const id = IdentityUtils.generateRandomIdWithPrefix('test')
			expect(typeof id).toBe('string')
		})
	})
})
