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
	BoTextWhiteSpace,
} from './bo-text';
import { AriaLive } from '@/core/constants/accessibility';

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
		const variants = Object.values(BoTextVariant);

		for (const variant of variants) {
			const wrapper = mount(BoText, {
				props: {
					value: 'Test',
					variant,
				},
			});

			expect(wrapper.classes().join(' ').includes(`bo-text--${variant}`)).toBe(true);
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
		const sizes = Object.values(BoFontSize);

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
		const weights = Object.values(BoFontWeight);

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
		const families = Object.values(BoFontFamily);

		for (const family of families) {
			const wrapper = mount(BoText, {
				props: {
					value: 'Test',
					fontFamily: family,
				},
			});

			expect(wrapper.classes().join(' ').includes(`bo-text--font-${family}`)).toBe(true);
		}
	});

	test('should apply correct classes for all text alignments', () => {
		const alignments = Object.values(BoTextAlign);

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
		const transforms = Object.values(BoTextTransform);

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

	test('should apply correct classes for all white space values', () => {
		const whiteSpaces = Object.values(BoTextWhiteSpace);

		for (const whiteSpace of whiteSpaces) {
			const wrapper = mount(BoText, {
				props: {
					value: 'Test',
					whiteSpace,
				},
			});

			expect(wrapper.classes().join(' ').includes(`bo-text--whitespace-${whiteSpace}`)).toBe(true);
		}
	});

	test("should apply the text transform 'capitalize' to the value", () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'test multiple words',
				textTransform: BoTextTransform.capitalize,
			},
		});

		expect(wrapper.text()).toBe('Test Multiple Words');
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

	test('should respect max-lines prop with number value', () => {
		const wrapper = mount(BoText, {
			props: {
				maxLines: 2,
				value: 'Test lorem ipsum dolor sit',
			},
		});

		expect(wrapper.attributes('style')).toContain('-webkit-line-clamp: 2;');
		expect(wrapper.attributes('style')).toContain('text-overflow: ellipsis;');
		expect(wrapper.attributes('style')).toContain('overflow: hidden;');
	});

	test('should not apply line clamp styles when maxLines is "none"', () => {
		const wrapper = mount(BoText, {
			props: {
				maxLines: 'none',
				value: 'Test lorem ipsum dolor sit',
			},
		});

		expect(wrapper.attributes('style')).not.toContain('-webkit-line-clamp');
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
	});

	test('should apply pointer cursor when clickable is true', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
				clickable: true,
			},
		});

		expect(wrapper.attributes('style')).toContain('cursor: pointer');
	});

	test('should apply default cursor when not clickable and no cursor specified', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
			},
		});

		expect(wrapper.attributes('style')).toContain('cursor: default');
	});

	test('should prioritize cursor prop over clickable prop', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
				clickable: true,
				cursor: 'grab',
			},
		});

		expect(wrapper.attributes('style')).toContain('cursor: grab');
	});

	test('should use value as aria-label when no ariaLabel is provided', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test content',
			},
		});

		expect(wrapper.attributes('aria-label')).toBe('Test content');
	});

	test('should use provided ariaLabel over value', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test content',
				ariaLabel: 'Custom label',
			},
		});

		expect(wrapper.attributes('aria-label')).toBe('Custom label');
	});

	test('should apply ariaLabelledBy attribute', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
				ariaLabelledBy: 'label-id',
			},
		});

		expect(wrapper.attributes('aria-labelledby')).toBe('label-id');
	});

	test('should apply ariaDescribedBy attribute', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
				ariaDescribedBy: 'description-id',
			},
		});

		expect(wrapper.attributes('aria-describedby')).toBe('description-id');
	});

	test('should apply ariaLive attribute with default value', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
			},
		});

		expect(wrapper.attributes('aria-live')).toBe('polite');
	});

	test('should apply custom ariaLive attribute', () => {
		const ariaLiveValues = Object.values(AriaLive);

		for (const ariaLive of ariaLiveValues) {
			const wrapper = mount(BoText, {
				props: {
					value: 'Test',
					ariaLive,
				},
			});

			expect(wrapper.attributes('aria-live')).toBe(ariaLive);
		}
	});

	test('should apply default role as "text"', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
			},
		});

		expect(wrapper.attributes('role')).toBe('text');
	});

	test('should apply custom role attribute', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
				role: 'heading',
			},
		});

		expect(wrapper.attributes('role')).toBe('heading');
	});

	test('should apply lang attribute with default value', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
			},
		});

		expect(wrapper.attributes('lang')).toBe('en');
	});

	test('should apply custom lang attribute', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
				lang: 'de',
			},
		});

		expect(wrapper.attributes('lang')).toBe('de');
	});

	test('should apply custom CSS class', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
				customCssClass: 'my-custom-class',
			},
		});

		expect(wrapper.classes()).toContain('my-custom-class');
	});

	test('should generate unique id by default', () => {
		const wrapper1 = mount(BoText, {
			props: { value: 'Test 1' },
		});
		const wrapper2 = mount(BoText, {
			props: { value: 'Test 2' },
		});

		const id1 = wrapper1.attributes('id');
		const id2 = wrapper2.attributes('id');

		expect(id1).toBeDefined();
		expect(id2).toBeDefined();
		expect(id1).not.toBe(id2);
	});

	test('should use custom id when provided', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
				id: 'custom-text-id',
			},
		});

		expect(wrapper.attributes('id')).toBe('custom-text-id');
	});

	test('should apply custom dataTestId', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
				dataTestId: 'custom-test-id',
			},
		});

		expect(wrapper.attributes('data-testid')).toBe('custom-test-id');
	});

	test('should apply default font size', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
			},
		});

		expect(wrapper.classes()).toContain('bo-text--size-default');
	});

	test('should apply default font weight', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
			},
		});

		expect(wrapper.classes()).toContain('bo-text--weight-regular');
	});

	test('should apply default font family', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
			},
		});

		expect(wrapper.classes()).toContain('bo-text--font-sans');
	});

	test('should apply default text variant', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
			},
		});

		expect(wrapper.classes()).toContain('bo-text--default');
	});

	test('should apply default text transform', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
			},
		});

		expect(wrapper.classes()).toContain('bo-text--transform-none');
	});

	test('should apply default white space', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Test',
			},
		});

		expect(wrapper.classes()).toContain('bo-text--whitespace-normal');
	});
});
