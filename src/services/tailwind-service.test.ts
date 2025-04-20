import { beforeEach, describe, expect, it } from 'vitest';
import { TailwindService } from './tailwind-service';

describe('TailwindService', () => {
	let service: TailwindService;

	beforeEach(() => {
		service = TailwindService.instance;
	});

	it('should be a singleton', () => {
		const instance1 = TailwindService.instance;
		const instance2 = TailwindService.instance;
		expect(instance1).toBe(instance2);
	});

	describe('merge', () => {
		it('should return an empty string when no arguments are provided', () => {
			expect(service.merge()).toBe('');
		});

		it('should filter out null and undefined values', () => {
			expect(service.merge('text-red', null, 'bg-blue', undefined)).toBe('text-red bg-blue');
		});

		it('should merge multiple classes into a single string', () => {
			expect(service.merge('text-red', 'bg-blue')).toBe('text-red bg-blue');
		});

		it('should remove duplicate classes', () => {
			expect(service.merge('text-red', 'bg-blue text-red')).toBe('text-red bg-blue');
		});

		it('should handle classes with multiple spaces', () => {
			expect(service.merge('text-red  bg-blue', '  p-4')).toBe('text-red bg-blue p-4');
		});

		it('should handle empty strings', () => {
			expect(service.merge('text-red', '', 'bg-blue')).toBe('text-red bg-blue');
		});

		it('should handle when null or undefined is provided', () => {
			expect(service.merge('text-red', null, 'bg-blue')).toBe('text-red bg-blue');
			expect(service.merge('text-red', undefined, 'bg-blue')).toBe('text-red bg-blue');
			expect(service.merge(null, 'text-red', 'bg-blue', undefined, null)).toBe('text-red bg-blue');
		});
	});
});
