import { describe, expect, test, vi } from 'vitest';
import BoText from './bo-text.vue';
import { mount } from '@vue/test-utils';
import {
	BoFontFamily,
	BoFontSize,
	BoFontWeight,
	BoTextAlign,
	BoTextTransform,
	BoTextVariant,
} from './bo-text';

describe('BoText', () => {
	test('should render with required props', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Hello World',
			},
		});

		expect(wrapper.text()).toBe('Hello World');
		expect(wrapper.element.tagName).toBe('P');
	});

	test('should apply correct classes for all text variants', () => {
		const variants = [
			BoTextVariant.default,
			BoTextVariant.primary,
			BoTextVariant.secondary,
			BoTextVariant.disabled,
			BoTextVariant.success,
			BoTextVariant.warning,
			BoTextVariant.danger,
			BoTextVariant.light,
			BoTextVariant.current,
			BoTextVariant.inherit,
		];

		for (const variant of variants) {
			const wrapper = mount(BoText, {
				props: {
					value: 'Test',
					variant,
				},
			});

			expect(wrapper.classes().join(' ').includes(`bo-text--variant-${variant}`)).toBe(true);
		}
	});

	test('should apply custom color for valid hex colors', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
				customColor: '#ff0000',
			},
		});

		expect(wrapper.attributes('style')).toContain('color: rgb(255, 0, 0)');
	});

	test('should apply custom color for CSS variables', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
				customColor: '--my-color',
			},
		});

		expect(wrapper.attributes('style')).toContain('color: var(--my-color)');
	});

	test('should apply custom color for var() wrapped variables', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
				customColor: 'var(--my-color)',
			},
		});

		expect(wrapper.attributes('style')).toContain('color: var(--my-color)');
	});

	test('should apply custom color for rgb colors', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
				customColor: 'rgb(255, 0, 0)',
			},
		});

		expect(wrapper.attributes('style')).toContain('color: rgb(255, 0, 0)');
	});

	test('should apply custom color for rgba colors', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
				customColor: 'rgba(255, 0, 0, 0.5)',
			},
		});

		expect(wrapper.attributes('style')).toContain('color: rgba(255, 0, 0, 0.5)');
	});

	test('should apply custom color for oklch colors', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
				customColor: 'oklch(0.7 0.15 180)',
			},
		});

		expect(wrapper.attributes('style')).toContain('color: oklch(0.7 0.15 180)');
	});

	test('should handle 6-character hex without #', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
				customColor: 'ff0000',
			},
		});

		expect(wrapper.attributes('style')).toContain('color: rgb(255, 0, 0);');
	});

	test('should print a warning if the custom color cannot be parsed', () => {
		const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
				customColor: 'invalid-color',
			},
		});

		expect(wrapper.attributes('style')).not.toContain('color: invalid-color');
		expect(consoleWarnSpy).toHaveBeenCalledWith(
			expect.stringContaining('The custom color "invalid-color" is not a valid color definition'),
		);

		consoleWarnSpy.mockRestore();
	});

	test('should apply correct classes for all font sizes', () => {
		const sizes = [
			BoFontSize.xs,
			BoFontSize.sm,
			BoFontSize.default,
			BoFontSize.lg,
			BoFontSize.xl,
			BoFontSize['2xl'],
			BoFontSize['3xl'],
			BoFontSize['4xl'],
			BoFontSize['5xl'],
			BoFontSize['6xl'],
			BoFontSize['7xl'],
		];

		for (const size of sizes) {
			const wrapper = mount(BoText, {
				props: {
					value: 'Test',
					fontSize: size,
				},
			});

			expect(wrapper.classes().join(' ').includes(`bo-text--size-${size}`)).toBe(true);
		}
	});

	test('should apply correct classes for all font weights', () => {
		const weights = [
			BoFontWeight.thin,
			BoFontWeight.extra_light,
			BoFontWeight.light,
			BoFontWeight.regular,
			BoFontWeight.medium,
			BoFontWeight.semibold,
			BoFontWeight.bold,
			BoFontWeight.extra_bold,
			BoFontWeight.black,
		];

		for (const weight of weights) {
			const wrapper = mount(BoText, {
				props: {
					value: 'Test',
					fontWeight: weight,
				},
			});

			expect(wrapper.classes().join(' ').includes(`bo-text--weight-${weight}`)).toBe(true);
		}
	});

	test('should apply correct classes for all font families', () => {
		const families = [
			BoFontFamily.sans,
			BoFontFamily.mono,
			BoFontFamily.serif,
			BoFontFamily.inherit,
		];

		for (const family of families) {
			const wrapper = mount(BoText, {
				props: {
					value: 'Test',
					fontFamily: family,
				},
			});

			expect(wrapper.classes().join(' ').includes(`bo-text--font-family-${family}`)).toBe(true);
		}
	});

	test('should apply correct classes for all text alignments', () => {
		const alignments = [
			BoTextAlign.left,
			BoTextAlign.center,
			BoTextAlign.right,
			BoTextAlign.justify,
		];

		for (const alignment of alignments) {
			const wrapper = mount(BoText, {
				props: {
					value: 'Test',
					textAlign: alignment,
				},
			});

			expect(wrapper.classes().join(' ').includes(`bo-text--align-${alignment}`)).toBe(true);
		}
	});

	test('should apply correct classes for all text transforms', () => {
		const transforms = [
			BoTextTransform.none,
			BoTextTransform.capitalize,
			BoTextTransform.uppercase,
			BoTextTransform.lowercase,
		];

		for (const transform of transforms) {
			const wrapper = mount(BoText, {
				props: {
					value: 'Test',
					textTransform: transform,
				},
			});

			expect(wrapper.classes().join(' ').includes(`bo-text--transform-${transform}`)).toBe(true);
		}
	});

	test("should apply the text transform 'capitalize' to the value", () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'test',
				textTransform: BoTextTransform.capitalize,
			},
		});

		expect(wrapper.text()).toBe('Test');
	});

	test("should apply the text transform 'uppercase' to the value", () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'test',
				textTransform: BoTextTransform.uppercase,
			},
		});

		expect(wrapper.text()).toBe('TEST');
	});

	test("should apply the text transform 'lowercase' to the value", () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'TEST',
				textTransform: BoTextTransform.lowercase,
			},
		});

		expect(wrapper.text()).toBe('test');
	});

	test("should apply the text transform 'none' to the value", () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'TEST',
				textTransform: BoTextTransform.none,
			},
		});

		expect(wrapper.text()).toBe('TEST');
	});

	test('should respect max-lines prop', () => {
		const wrapper = mount(BoText, {
			props: {
				maxLines: 1,
				value: 'Test lorem ipsum dolor sit',
			},
		});

		expect(wrapper.attributes('style')).toContain('-webkit-line-clamp: 1;');
		expect(wrapper.attributes('style')).toContain('text-overflow: ellipsis;');
	});

	test('should apply the proper cursor style', () => {
		const cursors = ['pointer', 'default', 'grab', 'grabbing', 'zoom-in', 'zoom-out'];

		for (const cursor of cursors) {
			const wrapper = mount(BoText, {
				props: {
					value: 'Test',
					cursor,
				},
			});

			expect(wrapper.attributes('style')).toContain(`cursor: ${cursor}`);
		}

		const wrapper2 = mount(BoText, {
			props: {
				value: 'Test',
			},
		});

		expect(wrapper2.attributes('style')).toContain('cursor: default');
	});
});
