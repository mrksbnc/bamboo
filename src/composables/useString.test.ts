import { describe, expect, it } from 'vitest';
import { useString } from './useString';

describe('useString', () => {
	const stringUtils = useString();

	describe('capitalize', () => {
		it('should capitalize the first letter of a string', () => {
			expect(stringUtils.capitalize('hello')).toBe('Hello');
			expect(stringUtils.capitalize('world')).toBe('World');
		});

		it('should handle empty strings', () => {
			expect(stringUtils.capitalize('')).toBe('');
		});

		it('should not change already capitalized strings', () => {
			expect(stringUtils.capitalize('Hello')).toBe('Hello');
		});
	});

	describe('camelCaseToTitleCase', () => {
		it('should convert camelCase to Title Case', () => {
			expect(stringUtils.camelCaseToTitleCase('helloWorld')).toBe('Hello World');
			expect(stringUtils.camelCaseToTitleCase('thisIsATest')).toBe('This Is A Test');
		});

		it('should handle empty strings', () => {
			expect(stringUtils.camelCaseToTitleCase('')).toBe('');
		});

		it('should handle single word correctly', () => {
			expect(stringUtils.camelCaseToTitleCase('word')).toBe('Word');
		});
	});

	describe('isEmptyStr', () => {
		it('should return true for empty strings', () => {
			expect(stringUtils.isEmptyStr('')).toBe(true);
			expect(stringUtils.isEmptyStr('   ')).toBe(true);
		});

		it('should return true for null and undefined', () => {
			expect(stringUtils.isEmptyStr(null)).toBe(true);
			expect(stringUtils.isEmptyStr(undefined)).toBe(true);
		});

		it('should return false for non-empty strings', () => {
			expect(stringUtils.isEmptyStr('hello')).toBe(false);
			expect(stringUtils.isEmptyStr(' hello ')).toBe(false);
		});

		it('should handle non-string values', () => {
			expect(stringUtils.isEmptyStr(123)).toBe(false);
			expect(stringUtils.isEmptyStr(0)).toBe(false);
			expect(stringUtils.isEmptyStr(false)).toBe(false);
		});
	});

	describe('safeString', () => {
		it('should return empty string for null or undefined', () => {
			expect(stringUtils.safeString(null)).toBe('');
			expect(stringUtils.safeString(undefined)).toBe('');
		});

		it('should convert values to strings', () => {
			expect(stringUtils.safeString(123)).toBe('123');
			expect(stringUtils.safeString(false)).toBe('false');
		});

		it('should return the original string for valid strings', () => {
			expect(stringUtils.safeString('hello')).toBe('hello');
		});
	});

	describe('slugify', () => {
		it('should convert spaces to hyphens and lowercase', () => {
			expect(stringUtils.slugify('Hello World')).toBe('hello-world');
			expect(stringUtils.slugify('This Is A Test')).toBe('this-is-a-test');
		});

		it('should handle strings without spaces', () => {
			expect(stringUtils.slugify('Hello')).toBe('hello');
		});

		it('should handle empty strings', () => {
			expect(stringUtils.slugify('')).toBe('');
		});
	});

	describe('truncate', () => {
		it('should truncate strings longer than maxLength', () => {
			expect(stringUtils.truncate('Hello World', 5)).toBe('Hello...');
			expect(stringUtils.truncate('This is a long string', 7)).toBe('This is...');
		});

		it('should not truncate strings shorter than maxLength', () => {
			expect(stringUtils.truncate('Hello', 10)).toBe('Hello');
		});

		it('should use custom suffix when provided', () => {
			expect(stringUtils.truncate('Hello World', 5, '***')).toBe('Hello***');
		});

		it('should handle empty strings', () => {
			expect(stringUtils.truncate('', 5)).toBe('');
		});
	});
});
