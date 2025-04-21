import { StringService } from '@/services';
import { describe, expect, test } from 'vitest';

describe('StringService', () => {
	const svc = StringService.instance;

	test('capitalize should uppercase first letter', () => {
		expect(svc.capitalize('hello')).toBe('Hello');
	});

	test('camelCaseToTitleCase should convert camelCase strings to Title Case', () => {
		expect(svc.camelCaseToTitleCase('helloWorldExample')).toBe('Hello World Example');
	});

	test('isEmptyStr should return true for null, undefined, empty or whitespace-only strings', () => {
		expect(svc.isEmptyStr(null)).toBe(true);
		expect(svc.isEmptyStr(undefined)).toBe(true);
		expect(svc.isEmptyStr('')).toBe(true);
		expect(svc.isEmptyStr('   ')).toBe(true);
		expect(svc.isEmptyStr('not empty')).toBe(false);
	});

	test('safeString should return empty for null/undefined and string for other values', () => {
		expect(svc.safeString(null)).toBe('');
		expect(svc.safeString(undefined)).toBe('');
		expect(svc.safeString(123)).toBe('123');
		expect(svc.safeString('abc')).toBe('abc');
	});

	test('slugify should lowercase and replace spaces with hyphens', () => {
		expect(svc.slugify('Hello World Test')).toBe('hello-world-test');
	});

	test('truncate should shorten long strings and append suffix', () => {
		expect(svc.truncate('abcdefghij', 5)).toBe('abcde...');
		expect(svc.truncate('short', 10)).toBe('short');
		expect(svc.truncate('1234567890', 3, ' (more)')).toBe('123 (more)');
	});
});
