import { describe, it, expect, vi, beforeEach, afterEach, suite } from 'vitest';
import { ColorService } from './color-service.js';

describe('color service', () => {
	let consoleWarnSpy: ReturnType<typeof vi.spyOn>;

	beforeEach(() => {
		consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
	});

	afterEach(() => {
		consoleWarnSpy.mockRestore();
	});

	suite('singleton pattern', () => {
		it('should return the same instance', () => {
			const instance1 = ColorService.instance;
			const instance2 = ColorService.instance;
			expect(instance1).toBe(instance2);
		});
	});

	suite('getCustomColorStyle', () => {
		const service = ColorService.instance;

		describe('valid color formats', () => {
			it('should handle var() function', () => {
				const result = service.getCustomColorStyle('var(--primary)');
				expect(result).toEqual({ color: 'var(--primary)' });
			});

			it('should handle hex colors with #', () => {
				const result = service.getCustomColorStyle('#ff0000');
				expect(result).toEqual({ color: '#ff0000' });
			});

			it('should handle oklch colors', () => {
				const result = service.getCustomColorStyle('oklch(0.5 0.2 180)');
				expect(result).toEqual({ color: 'oklch(0.5 0.2 180)' });
			});

			it('should handle rgb colors', () => {
				const result = service.getCustomColorStyle('rgb(255, 0, 0)');
				expect(result).toEqual({ color: 'rgb(255, 0, 0)' });
			});

			it('should handle rgba colors', () => {
				const result = service.getCustomColorStyle('rgba(255, 0, 0, 0.5)');
				expect(result).toEqual({ color: 'rgba(255, 0, 0, 0.5)' });
			});

			it('should handle CSS variable names (--)', () => {
				const result = service.getCustomColorStyle('--my-color');
				expect(result).toEqual({ color: 'var(--my-color)' });
			});

			it('should handle 6-character hex without #', () => {
				const result = service.getCustomColorStyle('ff0000');
				expect(result).toEqual({ color: '#ff0000' });
			});
		});

		describe('invalid color formats', () => {
			it('should return currentColor for invalid format', () => {
				const result = service.getCustomColorStyle('invalid-color');
				expect(result).toEqual({ color: 'currentColor' });
				expect(consoleWarnSpy).toHaveBeenCalledWith(
					expect.stringContaining(
						'The custom color "invalid-color" is not a valid color definition.',
					),
				);
			});

			it('should return currentColor for empty string', () => {
				const result = service.getCustomColorStyle('');
				expect(result).toEqual({ color: 'currentColor' });
			});

			it('should return currentColor for short hex', () => {
				const result = service.getCustomColorStyle('fff');
				expect(result).toEqual({ color: 'currentColor' });
			});

			it('should return currentColor for long hex without #', () => {
				const result = service.getCustomColorStyle('ff00001');
				expect(result).toEqual({ color: 'currentColor' });
			});
		});
	});

	suite('getValidCssColor', () => {
		const service = ColorService.instance;

		describe('valid color formats', () => {
			it('should handle var() function', () => {
				const result = service.getValidCssColor('var(--primary)');
				expect(result).toBe('var(--primary)');
			});

			it('should handle hex colors with #', () => {
				const result = service.getValidCssColor('#00ff00');
				expect(result).toBe('#00ff00');
			});

			it('should handle oklch colors', () => {
				const result = service.getValidCssColor('oklch(0.8 0.1 90)');
				expect(result).toBe('oklch(0.8 0.1 90)');
			});

			it('should handle rgb colors', () => {
				const result = service.getValidCssColor('rgb(0, 255, 0)');
				expect(result).toBe('rgb(0, 255, 0)');
			});

			it('should handle rgba colors', () => {
				const result = service.getValidCssColor('rgba(0, 255, 0, 0.8)');
				expect(result).toBe('rgba(0, 255, 0, 0.8)');
			});

			it('should convert CSS variable names to var() format', () => {
				const result = service.getValidCssColor('--accent-color');
				expect(result).toBe('var(--accent-color)');
			});

			it('should add # to 6-character hex codes', () => {
				const result = service.getValidCssColor('00ff00');
				expect(result).toBe('#00ff00');
			});
		});

		describe('invalid color formats', () => {
			it('should return currentColor for invalid format', () => {
				const result = service.getValidCssColor('not-a-color');
				expect(result).toBe('currentColor');
				expect(consoleWarnSpy).toHaveBeenCalledWith(
					expect.stringContaining(
						'The custom color "not-a-color" is not a valid color definition.',
					),
				);
			});

			it('should return currentColor for empty string', () => {
				const result = service.getValidCssColor('');
				expect(result).toBe('currentColor');
			});

			it('should return currentColor for invalid length hex', () => {
				const result = service.getValidCssColor('12345');
				expect(result).toBe('currentColor');
			});
		});
	});

	suite('warning message', () => {
		const service = ColorService.instance;

		it('should include the invalid color in warning message', () => {
			service.getCustomColorStyle('bad-color');
			expect(consoleWarnSpy).toHaveBeenCalledWith(
				expect.stringContaining('The custom color "bad-color"'),
			);
		});

		it('should include valid format examples in warning', () => {
			service.getValidCssColor('invalid');
			const warning = consoleWarnSpy.mock.calls[0][0];
			expect(warning).toContain('--my-color');
			expect(warning).toContain('#ff0000');
			expect(warning).toContain('rgb(255, 0, 0)');
			expect(warning).toContain('rgba(255, 0, 0, 0.5)');
		});
	});
});
