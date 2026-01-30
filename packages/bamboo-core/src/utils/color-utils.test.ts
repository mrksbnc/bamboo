import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getValidOrFallbackColorFromStr } from './color-utils';

describe('getValidOrFallbackColorFromStr', () => {
	let consoleWarnSpy: ReturnType<typeof vi.spyOn>;

	beforeEach(() => {
		consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
	});

	afterEach(() => {
		consoleWarnSpy.mockRestore();
	});

	describe('CSS keyword values', () => {
		it('should accept currentColor', () => {
			expect(getValidOrFallbackColorFromStr('currentColor')).toBe('currentColor');
		});

		it('should accept currentColor in lowercase', () => {
			expect(getValidOrFallbackColorFromStr('currentcolor')).toBe('currentcolor');
		});

		it('should accept inherit', () => {
			expect(getValidOrFallbackColorFromStr('inherit')).toBe('inherit');
		});

		it('should accept initial', () => {
			expect(getValidOrFallbackColorFromStr('initial')).toBe('initial');
		});

		it('should accept revert', () => {
			expect(getValidOrFallbackColorFromStr('revert')).toBe('revert');
		});

		it('should accept revert-layer', () => {
			expect(getValidOrFallbackColorFromStr('revert-layer')).toBe('revert-layer');
		});

		it('should accept unset', () => {
			expect(getValidOrFallbackColorFromStr('unset')).toBe('unset');
		});
	});

	describe('Named CSS colors', () => {
		it('should accept basic named colors', () => {
			expect(getValidOrFallbackColorFromStr('red')).toBe('red');
			expect(getValidOrFallbackColorFromStr('blue')).toBe('blue');
			expect(getValidOrFallbackColorFromStr('green')).toBe('green');
			expect(getValidOrFallbackColorFromStr('white')).toBe('white');
			expect(getValidOrFallbackColorFromStr('black')).toBe('black');
		});

		it('should accept extended named colors', () => {
			expect(getValidOrFallbackColorFromStr('rebeccapurple')).toBe('rebeccapurple');
			expect(getValidOrFallbackColorFromStr('cornflowerblue')).toBe('cornflowerblue');
			expect(getValidOrFallbackColorFromStr('tan')).toBe('tan');
			expect(getValidOrFallbackColorFromStr('orange')).toBe('orange');
		});

		it('should accept transparent', () => {
			expect(getValidOrFallbackColorFromStr('transparent')).toBe('transparent');
		});

		it('should handle case insensitive named colors', () => {
			expect(getValidOrFallbackColorFromStr('RED')).toBe('RED');
			expect(getValidOrFallbackColorFromStr('RebeccaPurple')).toBe('RebeccaPurple');
		});
	});

	describe('Hex colors', () => {
		it('should accept 3-digit hex colors', () => {
			expect(getValidOrFallbackColorFromStr('#090')).toBe('#090');
			expect(getValidOrFallbackColorFromStr('#f00')).toBe('#f00');
			expect(getValidOrFallbackColorFromStr('#abc')).toBe('#abc');
		});

		it('should accept 6-digit hex colors', () => {
			expect(getValidOrFallbackColorFromStr('#009900')).toBe('#009900');
			expect(getValidOrFallbackColorFromStr('#ff0000')).toBe('#ff0000');
			expect(getValidOrFallbackColorFromStr('#abcdef')).toBe('#abcdef');
		});

		it('should accept 4-digit hex colors with alpha', () => {
			expect(getValidOrFallbackColorFromStr('#090a')).toBe('#090a');
			expect(getValidOrFallbackColorFromStr('#f00f')).toBe('#f00f');
		});

		it('should accept 8-digit hex colors with alpha', () => {
			expect(getValidOrFallbackColorFromStr('#009900aa')).toBe('#009900aa');
			expect(getValidOrFallbackColorFromStr('#ff0000cc')).toBe('#ff0000cc');
		});

		it('should auto-fix 3-digit hex without #', () => {
			expect(getValidOrFallbackColorFromStr('090')).toBe('#090');
			expect(getValidOrFallbackColorFromStr('f00')).toBe('#f00');
		});

		it('should auto-fix 6-digit hex without #', () => {
			expect(getValidOrFallbackColorFromStr('009900')).toBe('#009900');
			expect(getValidOrFallbackColorFromStr('ff0000')).toBe('#ff0000');
		});

		it('should auto-fix 4-digit hex without # (with alpha)', () => {
			expect(getValidOrFallbackColorFromStr('090a')).toBe('#090a');
			expect(getValidOrFallbackColorFromStr('f00f')).toBe('#f00f');
		});

		it('should auto-fix 8-digit hex without # (with alpha)', () => {
			expect(getValidOrFallbackColorFromStr('009900aa')).toBe('#009900aa');
			expect(getValidOrFallbackColorFromStr('ff0000cc')).toBe('#ff0000cc');
		});

		it('should handle uppercase hex colors', () => {
			expect(getValidOrFallbackColorFromStr('#FF0000')).toBe('#FF0000');
			expect(getValidOrFallbackColorFromStr('#ABCDEF')).toBe('#ABCDEF');
		});
	});

	describe('RGB/RGBA colors', () => {
		it('should accept legacy rgb() with commas', () => {
			expect(getValidOrFallbackColorFromStr('rgb(34, 12, 64)')).toBe('rgb(34, 12, 64)');
			expect(getValidOrFallbackColorFromStr('rgb(255, 0, 0)')).toBe('rgb(255, 0, 0)');
		});

		it('should accept rgb() with alpha and commas', () => {
			expect(getValidOrFallbackColorFromStr('rgb(34, 12, 64, 0.6)')).toBe('rgb(34, 12, 64, 0.6)');
		});

		it('should accept legacy rgba() with commas', () => {
			expect(getValidOrFallbackColorFromStr('rgba(34, 12, 64, 0.6)')).toBe('rgba(34, 12, 64, 0.6)');
		});

		it('should accept modern rgb() with spaces and slash', () => {
			expect(getValidOrFallbackColorFromStr('rgb(34 12 64 / 0.6)')).toBe('rgb(34 12 64 / 0.6)');
		});

		it('should accept modern rgba() with spaces and slash', () => {
			expect(getValidOrFallbackColorFromStr('rgba(34 12 64 / 0.6)')).toBe('rgba(34 12 64 / 0.6)');
		});

		it('should accept rgb() with decimals and percentage alpha', () => {
			expect(getValidOrFallbackColorFromStr('rgb(34.6 12 64 / 60%)')).toBe('rgb(34.6 12 64 / 60%)');
		});

		it('should accept rgba() with decimals and percentage alpha', () => {
			expect(getValidOrFallbackColorFromStr('rgba(34.6 12 64 / 60%)')).toBe(
				'rgba(34.6 12 64 / 60%)',
			);
		});
	});

	describe('HSL/HSLA colors', () => {
		it('should accept legacy hsl() with commas', () => {
			expect(getValidOrFallbackColorFromStr('hsl(30, 100%, 50%)')).toBe('hsl(30, 100%, 50%)');
		});

		it('should accept hsl() with alpha and commas', () => {
			expect(getValidOrFallbackColorFromStr('hsl(30, 100%, 50%, 0.6)')).toBe(
				'hsl(30, 100%, 50%, 0.6)',
			);
		});

		it('should accept legacy hsla() with commas', () => {
			expect(getValidOrFallbackColorFromStr('hsla(30, 100%, 50%, 0.6)')).toBe(
				'hsla(30, 100%, 50%, 0.6)',
			);
		});

		it('should accept modern hsl() with spaces and slash', () => {
			expect(getValidOrFallbackColorFromStr('hsl(30 100% 50% / 0.6)')).toBe(
				'hsl(30 100% 50% / 0.6)',
			);
		});

		it('should accept modern hsla() with spaces and slash', () => {
			expect(getValidOrFallbackColorFromStr('hsla(30 100% 50% / 0.6)')).toBe(
				'hsla(30 100% 50% / 0.6)',
			);
		});

		it('should accept hsl() with decimals and percentage alpha', () => {
			expect(getValidOrFallbackColorFromStr('hsl(30.2 100% 50% / 60%)')).toBe(
				'hsl(30.2 100% 50% / 60%)',
			);
		});

		it('should accept hsla() with decimals and percentage alpha', () => {
			expect(getValidOrFallbackColorFromStr('hsla(30.2 100% 50% / 60%)')).toBe(
				'hsla(30.2 100% 50% / 60%)',
			);
		});
	});

	describe('HWB colors', () => {
		it('should accept hwb() without alpha', () => {
			expect(getValidOrFallbackColorFromStr('hwb(90 10% 10%)')).toBe('hwb(90 10% 10%)');
		});

		it('should accept hwb() with alpha', () => {
			expect(getValidOrFallbackColorFromStr('hwb(90 10% 10% / 0.5)')).toBe('hwb(90 10% 10% / 0.5)');
		});

		it('should accept hwb() with deg unit', () => {
			expect(getValidOrFallbackColorFromStr('hwb(90deg 10% 10%)')).toBe('hwb(90deg 10% 10%)');
		});

		it('should accept hwb() with rad unit', () => {
			expect(getValidOrFallbackColorFromStr('hwb(1.5708rad 60% 0%)')).toBe('hwb(1.5708rad 60% 0%)');
		});

		it('should accept hwb() with turn unit', () => {
			expect(getValidOrFallbackColorFromStr('hwb(0.25turn 0% 40% / 50%)')).toBe(
				'hwb(0.25turn 0% 40% / 50%)',
			);
		});
	});

	describe('OKLCH colors', () => {
		it('should accept oklch() colors', () => {
			expect(getValidOrFallbackColorFromStr('oklch(0.5 0.2 180)')).toBe('oklch(0.5 0.2 180)');
		});

		it('should accept oklch() with alpha', () => {
			expect(getValidOrFallbackColorFromStr('oklch(0.5 0.2 180 / 0.5)')).toBe(
				'oklch(0.5 0.2 180 / 0.5)',
			);
		});
	});

	describe('Other color spaces', () => {
		it('should accept oklab() colors', () => {
			expect(getValidOrFallbackColorFromStr('oklab(0.5 0.2 0.1)')).toBe('oklab(0.5 0.2 0.1)');
		});

		it('should accept lab() colors', () => {
			expect(getValidOrFallbackColorFromStr('lab(50 40 59.5)')).toBe('lab(50 40 59.5)');
		});

		it('should accept lch() colors', () => {
			expect(getValidOrFallbackColorFromStr('lch(50 40 59.5)')).toBe('lch(50 40 59.5)');
		});

		it('should accept color() function', () => {
			expect(getValidOrFallbackColorFromStr('color(srgb 1 0 0)')).toBe('color(srgb 1 0 0)');
		});
	});

	describe('CSS variables', () => {
		it('should accept var() notation', () => {
			expect(getValidOrFallbackColorFromStr('var(--my-color)')).toBe('var(--my-color)');
		});

		it('should wrap CSS variable names in var()', () => {
			expect(getValidOrFallbackColorFromStr('--my-color')).toBe('var(--my-color)');
			expect(getValidOrFallbackColorFromStr('--primary-color')).toBe('var(--primary-color)');
		});

		it('should accept var() with fallback', () => {
			expect(getValidOrFallbackColorFromStr('var(--my-color, red)')).toBe('var(--my-color, red)');
		});
	});

	describe('Invalid colors', () => {
		it('should reject invalid color names', () => {
			expect(getValidOrFallbackColorFromStr('notacolor')).toBe('');
			expect(consoleWarnSpy).toHaveBeenCalled();
		});

		it('should reject invalid hex colors', () => {
			consoleWarnSpy.mockClear();
			expect(getValidOrFallbackColorFromStr('#gg0000')).toBe('');
			expect(consoleWarnSpy).toHaveBeenCalled();
		});

		it('should reject hex colors with wrong length', () => {
			consoleWarnSpy.mockClear();
			expect(getValidOrFallbackColorFromStr('#12')).toBe('');
			expect(consoleWarnSpy).toHaveBeenCalled();
		});

		it('should reject malformed values', () => {
			consoleWarnSpy.mockClear();
			expect(getValidOrFallbackColorFromStr('12345')).toBe('');
			expect(consoleWarnSpy).toHaveBeenCalled();
		});

		it('should reject empty strings', () => {
			consoleWarnSpy.mockClear();
			expect(getValidOrFallbackColorFromStr('')).toBe('');
			expect(consoleWarnSpy).toHaveBeenCalled();
		});

		it('should log warning with the invalid color in the message', () => {
			consoleWarnSpy.mockClear();
			getValidOrFallbackColorFromStr('invalidcolor');
			expect(consoleWarnSpy).toHaveBeenCalledWith(expect.stringContaining('invalidcolor'));
		});
	});

	describe('Edge cases', () => {
		it('should handle colors with whitespace', () => {
			expect(getValidOrFallbackColorFromStr('  red  ')).toBe('  red  ');
		});

		it('should handle mixed case properly', () => {
			expect(getValidOrFallbackColorFromStr('ReD')).toBe('ReD');
			expect(getValidOrFallbackColorFromStr('RGB(255, 0, 0)')).toBe('RGB(255, 0, 0)');
		});

		it('should preserve original formatting for valid colors', () => {
			expect(getValidOrFallbackColorFromStr('RGB(255, 0, 0)')).toBe('RGB(255, 0, 0)');
			expect(getValidOrFallbackColorFromStr('#FF0000')).toBe('#FF0000');
		});
	});
});
