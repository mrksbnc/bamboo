import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { BoText } from './index';

describe('BoText', () => {
	describe('Basic Rendering', () => {
		it('renders with default props', () => {
			const wrapper = mount(BoText, {
				props: {
					value: 'Hello World',
				},
			});

			expect(wrapper.find('p').exists()).toBe(true);
			expect(wrapper.text()).toBe('Hello World');
		});

		it('renders with custom id and data-testid', () => {
			const wrapper = mount(BoText, {
				props: {
					id: 'custom-id',
					dataTestId: 'custom-test-id',
					value: 'Test text',
				},
			});

			expect(wrapper.find('p').attributes('id')).toBe('custom-id');
			expect(wrapper.find('p').attributes('data-testid')).toBe('custom-test-id');
		});

		it('renders empty text', () => {
			const wrapper = mount(BoText, {
				props: {
					value: '',
				},
			});

			expect(wrapper.find('p').exists()).toBe(true);
			expect(wrapper.text()).toBe('');
		});
	});

	describe('Font Sizes', () => {
		const fontSizes = [
			'xs',
			'sm',
			'default',
			'lg',
			'xl',
			'2xl',
			'3xl',
			'4xl',
			'5xl',
			'6xl',
			'7xl',
			'8xl',
			'9xl',
		] as const;

		fontSizes.forEach((fontSize) => {
			it(`renders ${fontSize} font size correctly`, () => {
				const wrapper = mount(BoText, {
					props: {
						fontSize,
						value: 'Test text',
					},
				});

				expect(wrapper.find('p').exists()).toBe(true);
				const classes = wrapper.find('p').classes();
				expect(classes.some((cls) => cls.includes('text-'))).toBe(true);
			});
		});
	});

	describe('Font Weights', () => {
		const fontWeights = [
			'thin',
			'extra-light',
			'light',
			'regular',
			'medium',
			'semibold',
			'bold',
			'extra-bold',
			'black',
		] as const;

		fontWeights.forEach((fontWeight) => {
			it(`renders ${fontWeight} font weight correctly`, () => {
				const wrapper = mount(BoText, {
					props: {
						fontWeight,
						value: 'Test text',
					},
				});

				expect(wrapper.find('p').exists()).toBe(true);
				const classes = wrapper.find('p').classes();
				expect(classes.some((cls) => cls.includes('font-'))).toBe(true);
			});
		});
	});

	describe('Font Families', () => {
		const fontFamilies = ['sans', 'mono', 'serif', 'inherit'] as const;

		fontFamilies.forEach((fontFamily) => {
			it(`renders ${fontFamily} font family correctly`, () => {
				const wrapper = mount(BoText, {
					props: {
						fontFamily,
						value: 'Test text',
					},
				});

				expect(wrapper.find('p').exists()).toBe(true);
				const classes = wrapper.find('p').classes();
				expect(classes.some((cls) => cls.includes('font-'))).toBe(true);
			});
		});
	});

	describe('Variants', () => {
		const variants = [
			'default',
			'primary',
			'secondary',
			'disabled',
			'inherit',
			'currentColor',
			'success',
			'warning',
			'destructive',
			'white',
			'black',
		] as const;

		variants.forEach((variant) => {
			it(`renders ${variant} variant correctly`, () => {
				const wrapper = mount(BoText, {
					props: {
						variant,
						value: 'Test text',
					},
				});

				expect(wrapper.find('p').exists()).toBe(true);
				const classes = wrapper.find('p').classes();
				expect(classes.some((cls) => cls.includes('text-'))).toBe(true);
			});
		});
	});

	describe('Text Alignment', () => {
		const alignments = ['left', 'center', 'right', 'justify'] as const;

		alignments.forEach((textAlign) => {
			it(`renders ${textAlign} text alignment correctly`, () => {
				const wrapper = mount(BoText, {
					props: {
						textAlign,
						value: 'Test text',
					},
				});

				expect(wrapper.find('p').exists()).toBe(true);
				const classes = wrapper.find('p').classes();
				expect(classes.some((cls) => cls.includes('text-'))).toBe(true);
			});
		});
	});

	describe('Text Transform', () => {
		const transforms = ['none', 'capitalize', 'uppercase', 'lowercase'] as const;

		transforms.forEach((textTransform) => {
			it(`renders ${textTransform} text transform correctly`, () => {
				const wrapper = mount(BoText, {
					props: {
						textTransform,
						value: 'test text',
					},
				});

				expect(wrapper.find('p').exists()).toBe(true);
				const classes = wrapper.find('p').classes();
				// Check for transform classes or normal-case
				expect(
					classes.some(
						(cls) =>
							cls.includes('uppercase') ||
							cls.includes('lowercase') ||
							cls.includes('capitalize') ||
							cls.includes('normal-case'),
					),
				).toBe(true);
			});
		});
	});

	describe('White Space', () => {
		const whiteSpaces = [
			'normal',
			'nowrap',
			'pre',
			'pre-line',
			'pre-wrap',
			'break-spaces',
		] as const;

		whiteSpaces.forEach((whiteSpace) => {
			it(`renders ${whiteSpace} white space correctly`, () => {
				const wrapper = mount(BoText, {
					props: {
						whiteSpace,
						value: 'Test text with   spaces',
					},
				});

				expect(wrapper.find('p').exists()).toBe(true);
				const classes = wrapper.find('p').classes();
				expect(classes.some((cls) => cls.includes('whitespace-'))).toBe(true);
			});
		});
	});

	describe('Line Clamping', () => {
		it('renders with line clamp number', () => {
			const wrapper = mount(BoText, {
				props: {
					lineClamp: 3,
					value:
						'This is a very long text that should be clamped to 3 lines when it exceeds the container width and height limits.',
				},
			});

			expect(wrapper.find('p').exists()).toBe(true);
			const classes = wrapper.find('p').classes();
			expect(classes.some((cls) => cls.includes('line-clamp-'))).toBe(true);
		});

		it('renders with line clamp string', () => {
			const wrapper = mount(BoText, {
				props: {
					lineClamp: '2',
					value: 'This text should be clamped to 2 lines.',
				},
			});

			expect(wrapper.find('p').exists()).toBe(true);
			const classes = wrapper.find('p').classes();
			expect(classes.some((cls) => cls.includes('line-clamp-'))).toBe(true);
		});

		it('renders without line clamp when set to none', () => {
			const wrapper = mount(BoText, {
				props: {
					lineClamp: 'none',
					value: 'This text should not be clamped.',
				},
			});

			expect(wrapper.find('p').exists()).toBe(true);
			const classes = wrapper.find('p').classes();
			expect(classes.includes('line-clamp-none')).toBe(true);
		});
	});

	describe('Custom Colors', () => {
		it('applies custom color correctly', () => {
			const wrapper = mount(BoText, {
				props: {
					customColor: '#ff0000',
					value: 'Red text',
				},
			});

			const p = wrapper.find('p');
			const style = p.attributes('style');
			expect(style).toContain('color: rgb(255, 0, 0)');
		});

		it('applies custom color with CSS variable', () => {
			const wrapper = mount(BoText, {
				props: {
					customColor: 'var(--custom-color)',
					value: 'Custom color text',
				},
			});

			const p = wrapper.find('p');
			const style = p.attributes('style');
			expect(style).toContain('color: var(--custom-color)');
		});
	});

	describe('Clickable Text', () => {
		it('renders clickable text with pointer cursor', () => {
			const wrapper = mount(BoText, {
				props: {
					clickable: true,
					value: 'Clickable text',
				},
			});

			expect(wrapper.find('p').exists()).toBe(true);
			const classes = wrapper.find('p').classes();
			expect(classes.includes('cursor-pointer')).toBe(true);
		});

		it('emits click event when clickable text is clicked', async () => {
			const wrapper = mount(BoText, {
				props: {
					clickable: true,
					value: 'Clickable text',
				},
			});

			await wrapper.find('p').trigger('click');
			expect(wrapper.emitted('click')).toBeTruthy();
		});

		it('does not emit click event when text is not clickable', async () => {
			const wrapper = mount(BoText, {
				props: {
					clickable: false,
					value: 'Non-clickable text',
				},
			});

			await wrapper.find('p').trigger('click');
			expect(wrapper.emitted('click')).toBeFalsy();
		});
	});

	describe('Custom Cursor', () => {
		it('applies custom cursor correctly', () => {
			const wrapper = mount(BoText, {
				props: {
					cursor: 'cursor-help',
					value: 'Help text',
				},
			});

			expect(wrapper.find('p').exists()).toBe(true);
			const classes = wrapper.find('p').classes();
			expect(classes.includes('cursor-help')).toBe(true);
		});
	});

	describe('Accessibility', () => {
		it('has correct ARIA attributes', () => {
			const wrapper = mount(BoText, {
				props: {
					value: 'Accessible text',
					ariaLabel: 'Custom aria label',
					ariaDescribedBy: 'description-id',
					role: 'heading',
				},
			});

			const p = wrapper.find('p');
			expect(p.attributes('aria-label')).toBe('Custom aria label');
			expect(p.attributes('aria-describedby')).toBe('description-id');
			expect(p.attributes('role')).toBe('heading');
		});

		it('has correct language attribute', () => {
			const wrapper = mount(BoText, {
				props: {
					value: 'Text with language',
					lang: 'en-US',
				},
			});

			expect(wrapper.find('p').attributes('lang')).toBe('en-US');
		});

		it('has correct aria-live attribute', () => {
			const wrapper = mount(BoText, {
				props: {
					value: 'Live text',
					ariaLive: 'assertive',
				},
			});

			expect(wrapper.find('p').attributes('aria-live')).toBe('assertive');
		});
	});

	describe('Slots', () => {
		it('renders custom content via default slot', () => {
			const wrapper = mount(BoText, {
				props: {
					value: 'Default value',
				},
				slots: {
					default: '<strong>Custom Content</strong>',
				},
			});

			expect(wrapper.html()).toContain('<strong>Custom Content</strong>');
			expect(wrapper.text()).not.toContain('Default value');
		});
	});
});
