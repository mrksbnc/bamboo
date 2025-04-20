import { describe, expect, it } from 'vitest';
import { TailwindService } from './tailwind-service';

describe('TailwindService', () => {
	const service = TailwindService.instance;

	describe('merge', () => {
		it('should return an empty string when no classes are provided', () => {
			expect(service.merge()).toBe('');
		});

		it('should return the class when a single class is provided', () => {
			expect(service.merge('text-red-500')).toBe('text-red-500');
		});

		it('should merge multiple classes', () => {
			expect(service.merge('text-red-500', 'bg-blue-500')).toBe('text-red-500 bg-blue-500');
		});

		it('should filter out null and undefined values', () => {
			expect(service.merge('text-red-500', null, 'bg-blue-500', undefined)).toBe(
				'text-red-500 bg-blue-500',
			);
		});

		it('should handle multiple space-separated classes in a single string', () => {
			expect(service.merge('text-red-500 font-bold', 'bg-blue-500')).toBe(
				'text-red-500 font-bold bg-blue-500',
			);
		});

		it('should remove duplicate classes', () => {
			expect(service.merge('text-red-500', 'bg-blue-500', 'text-red-500')).toBe(
				'text-red-500 bg-blue-500',
			);
		});

		it('should handle complex combinations', () => {
			expect(
				service.merge(
					'text-red-500 font-bold',
					null,
					'bg-blue-500 text-red-500',
					undefined,
					'p-4 m-2',
				),
			).toBe('text-red-500 font-bold bg-blue-500 p-4 m-2');
		});

		it('should handle empty strings', () => {
			expect(service.merge('', 'text-red-500', '')).toBe('text-red-500');
		});

		it('should handle strings with extra spaces', () => {
			expect(service.merge('  text-red-500  ', ' bg-blue-500 ')).toBe('text-red-500 bg-blue-500');
		});
	});
});
