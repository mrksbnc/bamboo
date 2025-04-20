import { describe, expect, it } from 'vitest';
import { useTailwind } from './useTailwind';

describe('useTailwind', () => {
	const { merge } = useTailwind();

	describe('merge', () => {
		it('should merge multiple class strings', () => {
			expect(merge('bg-blue-500', 'text-white', 'p-4')).toBe('bg-blue-500 text-white p-4');
		});

		it('should handle empty strings', () => {
			expect(merge('', 'text-white', '')).toBe('text-white');
		});

		it('should handle null and undefined values', () => {
			expect(merge('bg-blue-500', null, undefined, 'p-4')).toBe('bg-blue-500 p-4');
		});

		it('should deduplicate classes', () => {
			expect(merge('p-4', 'text-white', 'p-4')).toBe('p-4 text-white');
		});

		it('should merge classes with multiple spaces correctly', () => {
			expect(merge('bg-blue-500  text-white', 'p-4')).toBe('bg-blue-500 text-white p-4');
		});

		it('should return empty string for no arguments', () => {
			expect(merge()).toBe('');
		});

		it('should return empty string when all arguments are null/undefined/empty', () => {
			expect(merge(null, undefined, '')).toBe('');
		});

		it('should handle complex class combinations', () => {
			const result = merge('p-4 m-2', 'text-center', 'bg-blue-500 text-white', 'hover:bg-blue-700');
			expect(result).toBe('p-4 m-2 text-center bg-blue-500 text-white hover:bg-blue-700');
		});
	});
});
