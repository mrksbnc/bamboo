import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { KeyboardService } from './keyboard-service';

describe('KeyboardService', () => {
	let keyboardService: KeyboardService;
	let mockHandler: ReturnType<typeof vi.fn>;

	beforeEach(() => {
		keyboardService = KeyboardService.instance;
		mockHandler = vi.fn();
	});

	afterEach(() => {
		vi.clearAllMocks();
	});

	it('should be a singleton', () => {
		const instance1 = KeyboardService.instance;
		const instance2 = KeyboardService.instance;
		expect(instance1).toBe(instance2);
	});

	it('should handle escape key events', () => {
		keyboardService.useEscapeKey(mockHandler);
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
		expect(mockHandler).toHaveBeenCalledTimes(1);
	});

	it('should handle enter key events', () => {
		keyboardService.useEnterKey(mockHandler);
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
		expect(mockHandler).toHaveBeenCalledTimes(1);
	});

	it('should handle space key events', () => {
		keyboardService.useSpaceKey(mockHandler);
		document.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
		expect(mockHandler).toHaveBeenCalledTimes(1);
	});

	it('should handle arrow key events', () => {
		keyboardService.useArrowUpKey(mockHandler);
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
		expect(mockHandler).toHaveBeenCalledTimes(1);
	});

	it('should handle multiple handlers for the same key', () => {
		const handler1 = vi.fn();
		const handler2 = vi.fn();

		keyboardService.useEscapeKey(handler1);
		keyboardService.useEscapeKey(handler2);

		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

		expect(handler1).toHaveBeenCalledTimes(1);
		expect(handler2).toHaveBeenCalledTimes(1);
	});

	it('should not trigger handlers for different keys', () => {
		keyboardService.useEscapeKey(mockHandler);
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
		expect(mockHandler).not.toHaveBeenCalled();
	});

	it('should handle custom key events', () => {
		keyboardService.useKey('keydown', 'a', mockHandler);
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }));
		expect(mockHandler).toHaveBeenCalledTimes(1);
	});

	it('should handle keyup events', () => {
		keyboardService.useKey('keyup', 'a', mockHandler);
		document.dispatchEvent(new KeyboardEvent('keyup', { key: 'a' }));
		expect(mockHandler).toHaveBeenCalledTimes(1);
	});
});
