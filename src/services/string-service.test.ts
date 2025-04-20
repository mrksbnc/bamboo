import { beforeEach, describe, expect, it } from 'vitest';
import { StringService } from './string-service';

describe('StringService', () => {
	let service: StringService;

	beforeEach(() => {
		service = StringService.instance;
	});

	it('should be a singleton', () => {
		const instance1 = StringService.instance;
		const instance2 = StringService.instance;
		expect(instance1).toBe(instance2);
	});

	describe('capitalize', () => {
		it('should capitalize the first letter of a string', () => {
			expect(service.capitalize('hello')).toBe('Hello');
			expect(service.capitalize('hello world')).toBe('Hello world');
		});

		it('should handle empty strings', () => {
			expect(service.capitalize('')).toBe('');
		});
	});

	describe('camelCaseToTitleCase', () => {
		it('should convert camelCase to Title Case', () => {
			expect(service.camelCaseToTitleCase('helloWorld')).toBe('Hello World');
			expect(service.camelCaseToTitleCase('helloWorldTest')).toBe('Hello World Test');
		});

		it('should handle single word strings', () => {
			expect(service.camelCaseToTitleCase('hello')).toBe('Hello');
		});

		it('should handle empty strings', () => {
			expect(service.camelCaseToTitleCase('')).toBe('');
		});
	});

	describe('isEmptyStr', () => {
		it('should return true for empty strings', () => {
			expect(service.isEmptyStr('')).toBe(true);
			expect(service.isEmptyStr('   ')).toBe(true);
		});

		it('should return true for null or undefined', () => {
			expect(service.isEmptyStr(null)).toBe(true);
			expect(service.isEmptyStr(undefined)).toBe(true);
		});

		it('should return false for non-empty strings', () => {
			expect(service.isEmptyStr('hello')).toBe(false);
			expect(service.isEmptyStr(' hello ')).toBe(false);
		});
	});

	describe('safeString', () => {
		it('should return empty string for null or undefined', () => {
			expect(service.safeString(null)).toBe('');
			expect(service.safeString(undefined)).toBe('');
		});

		it('should convert values to strings', () => {
			expect(service.safeString(123)).toBe('123');
			expect(service.safeString(true)).toBe('true');
		});

		it('should return the original string for string inputs', () => {
			expect(service.safeString('hello')).toBe('hello');
		});
	});

	describe('slugify', () => {
		it('should convert spaces to hyphens and lowercase', () => {
			expect(service.slugify('Hello World')).toBe('hello-world');
			expect(service.slugify('Test String With Spaces')).toBe('test-string-with-spaces');
		});

		it('should handle strings without spaces', () => {
			expect(service.slugify('HelloWorld')).toBe('helloworld');
		});

		it('should handle empty strings', () => {
			expect(service.slugify('')).toBe('');
		});
	});

	describe('truncate', () => {
		it('should truncate strings longer than maxLength', () => {
			expect(service.truncate('Hello World', 5)).toBe('Hello...');
		});

		it('should not truncate strings shorter than maxLength', () => {
			expect(service.truncate('Hello', 10)).toBe('Hello');
		});

		it('should use custom suffix when provided', () => {
			expect(service.truncate('Hello World', 5, '***')).toBe('Hello***');
		});
	});
});
