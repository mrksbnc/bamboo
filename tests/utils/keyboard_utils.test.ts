import { KeyboardUtils } from '@/utils'
import { describe, expect, suite, test, vi } from 'vitest'

describe('KeyboardUtils', () => {
	suite('registerEnterKeyHandler', () => {
		test('should register a handler for the enter key', () => {
			const handler = vi.fn()
			KeyboardUtils.registerEnterKeyHandler(
				new KeyboardEvent('keydown', { key: 'Enter' }),
				handler,
			)
			expect(handler).toHaveBeenCalled()
		})

		test('should not register a handler for a non-enter key', () => {
			const handler = vi.fn()
			KeyboardUtils.registerEnterKeyHandler(
				new KeyboardEvent('keydown', { key: 'Tab' }),
				handler,
			)
			expect(handler).not.toHaveBeenCalled()
		})
	})
})
