import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ColorService } from './color-service';

describe('ColorService', () => {
	let service: ColorService;

	beforeEach(() => {
		service = ColorService.instance;
		vi.clearAllMocks();
	});

	describe('singleton pattern', () => {
		it('returns the same instance', () => {
			const instance1 = ColorService.instance;
			const instance2 = ColorService.instance;
			expect(instance1).toBe(instance2);
		});
	});

	describe('getValidCssColor', () => {
		describe('CSS variables', () => {
			it('returns var() wrapped CSS variable when starting with --', () => {
				const result = service.getValidCssColor('--primary-color');
				expect(result).toBe('var(--primary-color)');
			});

			it('returns CSS variable as-is when already wrapped with var()', () => {
				const result = service.getValidCssColor('var(--primary-color)');
				expect(result).toBe('var(--primary-color)');
			});
		});

		describe('hex colors', () => {
			it('returns hex color as-is when starting with #', () => {
				const result = service.getValidCssColor('#ff0000');
				expect(result).toBe('#ff0000');
			});

			it('adds # prefix to 6-character hex color without #', () => {
				const result = service.getValidCssColor('ff0000');
				expect(result).toBe('#ff0000');
			});

			it('handles uppercase hex colors', () => {
				const result = service.getValidCssColor('FF0000');
				expect(result).toBe('#FF0000');
			});

			it('handles mixed case hex colors', () => {
				const result = service.getValidCssColor('Ff00Aa');
				expect(result).toBe('#Ff00Aa');
			});
		});

		describe('rgb colors', () => {
			it('returns rgb color as-is', () => {
				const result = service.getValidCssColor('rgb(255, 0, 0)');
				expect(result).toBe('rgb(255, 0, 0)');
			});

			it('handles rgb without spaces', () => {
				const result = service.getValidCssColor('rgb(255,0,0)');
				expect(result).toBe('rgb(255,0,0)');
			});
		});

		describe('rgba colors', () => {
			it('returns rgba color as-is', () => {
				const result = service.getValidCssColor('rgba(255, 0, 0, 0.5)');
				expect(result).toBe('rgba(255, 0, 0, 0.5)');
			});

			it('handles rgba without spaces', () => {
				const result = service.getValidCssColor('rgba(255,0,0,0.5)');
				expect(result).toBe('rgba(255,0,0,0.5)');
			});
		});

		describe('oklch colors', () => {
			it('returns oklch color as-is', () => {
				const result = service.getValidCssColor('oklch(0.5 0.2 180)');
				expect(result).toBe('oklch(0.5 0.2 180)');
			});
		});

		describe('invalid colors', () => {
			it('returns currentColor for invalid color and logs warning', () => {
				const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

				const result = service.getValidCssColor('invalid-color');

				expect(result).toBe('currentColor');
				expect(consoleWarnSpy).toHaveBeenCalledWith(
					expect.stringContaining(
						'The custom color "invalid-color" is not a valid color definition',
					),
				);

				consoleWarnSpy.mockRestore();
			});

			it('returns currentColor for empty string', () => {
				const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

				const result = service.getValidCssColor('');

				expect(result).toBe('currentColor');
				expect(consoleWarnSpy).toHaveBeenCalled();

				consoleWarnSpy.mockRestore();
			});

			it('returns currentColor for 3-character hex (not 6)', () => {
				const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

				const result = service.getValidCssColor('f00');

				expect(result).toBe('currentColor');
				expect(consoleWarnSpy).toHaveBeenCalled();

				consoleWarnSpy.mockRestore();
			});

			it('warning message includes valid color format examples', () => {
				const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

				service.getValidCssColor('bad-color');

				const warningMessage = consoleWarnSpy.mock.calls[0]?.[0];
				expect(warningMessage).toContain('--my-color');
				expect(warningMessage).toContain('#ff0000');
				expect(warningMessage).toContain('rgb(255, 0, 0)');
				expect(warningMessage).toContain('rgba(255, 0, 0, 0.5)');

				consoleWarnSpy.mockRestore();
			});
		});

		describe('edge cases', () => {
			it('handles colors with extra whitespace', () => {
				const result = service.getValidCssColor('rgb(255, 0, 0)  ');
				expect(result).toBe('rgb(255, 0, 0)  ');
			});

			it('handles CSS variable with complex name', () => {
				const result = service.getValidCssColor('--my-custom-color-123');
				expect(result).toBe('var(--my-custom-color-123)');
			});
		});
	});
});
