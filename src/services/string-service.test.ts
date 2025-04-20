import { describe, expect, it } from 'vitest';
import { StringService } from './string-service';

describe('StringService', () => {
	const service = StringService.instance;

	describe('capitalize', () => {
		it('should capitalize the first letter of a string', () => {
			expect(service.capitalize('hello')).toBe('Hello');
			expect(service.capitalize('world')).toBe('World');
			expect(service.capitalize('')).toBe('');
		});
	});

	describe('camelCaseToTitleCase', () => {
		it('should convert camelCase to Title Case', () => {
			expect(service.camelCaseToTitleCase('helloWorld')).toBe('Hello World');
			expect(service.camelCaseToTitleCase('thisIsATest')).toBe('This Is A Test');
			expect(service.camelCaseToTitleCase('')).toBe('');
		});
	});

	describe('isEmptyStr', () => {
		it('should return true for empty strings, null, or undefined', () => {
			expect(service.isEmptyStr('')).toBe(true);
			expect(service.isEmptyStr('  ')).toBe(true);
			expect(service.isEmptyStr(null)).toBe(true);
			expect(service.isEmptyStr(undefined)).toBe(true);
		});

		it('should return false for non-empty strings', () => {
			expect(service.isEmptyStr('hello')).toBe(false);
			expect(service.isEmptyStr(' hello ')).toBe(false);
			expect(service.isEmptyStr('0')).toBe(false);
		});
	});

	describe('safeString', () => {
		it('should return empty string for null or undefined', () => {
			expect(service.safeString(null)).toBe('');
			expect(service.safeString(undefined)).toBe('');
			expect(service.safeString('')).toBe('');
		});

		it('should convert non-string values to strings', () => {
			expect(service.safeString(123)).toBe('123');
			expect(service.safeString(true)).toBe('true');
			expect(service.safeString(false)).toBe('false');
		});
	});

	describe('slugify', () => {
		it('should convert strings to slugs', () => {
			expect(service.slugify('Hello World')).toBe('hello-world');
			expect(service.slugify('This is a test')).toBe('this-is-a-test');
			expect(service.slugify('')).toBe('');
		});
	});

	describe('truncate', () => {
		it('should truncate strings that exceed the maximum length', () => {
			expect(service.truncate('Hello World', 5)).toBe('Hello...');
			expect(service.truncate('Testing', 4, '!')).toBe('Test!');
		});

		it('should not truncate strings that are shorter than the maximum length', () => {
			expect(service.truncate('Hello', 10)).toBe('Hello');
			expect(service.truncate('', 5)).toBe('');
		});
	});
});
