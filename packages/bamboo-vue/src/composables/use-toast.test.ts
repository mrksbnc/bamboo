import { describe, expect, it, vi } from 'vitest';
import { useToast } from './use-toast.js';

describe('useToast', () => {
	it('assigns positions, dismisses timed toasts, and clears persistent toasts', () => {
		vi.useFakeTimers();
		const toast = useToast();
		toast.clear();

		const timed = toast.show({ title: 'Saved', duration: 100 });
		const persistent = toast.show({ title: 'Pinned', duration: 0, position: 'bottom-left' });
		expect(toast.toasts.value).toEqual([
			expect.objectContaining({ id: timed, title: 'Saved', position: 'top-right' }),
			expect.objectContaining({ id: persistent, title: 'Pinned', position: 'bottom-left' }),
		]);

		vi.advanceTimersByTime(100);
		expect(toast.toasts.value.map(({ id }) => id)).toEqual([persistent]);
		toast.clear();
		expect(toast.toasts.value).toHaveLength(0);
		vi.useRealTimers();
	});
});
