import { AriaLive } from '@/lib/bo-accessibility';
import { mount } from '@vue/test-utils';
import { describe, expect, suite, test } from 'vitest';
import { BoFontFamily, BoFontSize, BoTextVariant } from './bo-text';
import BoText from './bo-text.vue';

describe('BoText', async () => {
	suite('id', () => {
		test('generates a unique id if one is not provided', () => {
			const component = mount(BoText, { props: { value: 'test' } });
			expect(component.props('id')).toMatch(
				/^bo-text-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
			);
		});

		test('uses the prop id if one is provided', () => {
			const component = mount(BoText, {
				props: { id: 'test-id', value: 'test' },
			});
			expect(component.props('id')).toBe('test-id');
		});
	});

	suite('data-test-id', () => {
		test('generates a unique data-test-id if one is not provided', () => {
			const component = mount(BoText, { props: { value: 'test' } });
			expect(component.props('dataTestId')).toMatch(
				/^test-bo-text-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
			);
		});

		test('uses the prop data-test-id if one is provided', () => {
			const component = mount(BoText, {
				props: { dataTestId: 'test-data-test-id', value: 'test' },
			});
			expect(component.props('dataTestId')).toBe('test-data-test-id');
		});
	});

	suite('lang', () => {
		test('defaults to en', () => {
			const component = mount(BoText, { props: { value: 'test' } });
			expect(component.props('lang')).toBe('en');
		});

		test('uses the prop lang if one is provided', () => {
			const component = mount(BoText, {
				props: { lang: 'de', value: 'test' },
			});
			expect(component.props('lang')).toBe('de');
		});
	});

	suite('maxLines', () => {
		test('defaults to none', () => {
			const component = mount(BoText, { props: { value: 'test' } });
			expect(component.props('maxLines')).toBe('none');
		});

		test('uses the prop maxLines if one is provided', () => {
			const component = mount(BoText, {
				props: { maxLines: '2', value: 'test' },
			});
			expect(component.props('maxLines')).toBe('2');
		});
	});

	suite('fontSize', () => {
		test('defaults to default', () => {
			const component = mount(BoText, { props: { value: 'test' } });
			expect(component.props('fontSize')).toBe(BoFontSize.Default);
		});

		test('uses the prop fontSize if one is provided', () => {
			const component = mount(BoText, {
				props: { fontSize: BoFontSize.SM, value: 'test' },
			});
			expect(component.props('fontSize')).toBe(BoFontSize.SM);
		});
	});

	suite('fontFamily', () => {
		test('defaults to sans', () => {
			const component = mount(BoText, { props: { value: 'test' } });
			expect(component.props('fontFamily')).toBe(BoFontFamily.Sans);
		});

		test('uses the prop fontFamily if one is provided', () => {
			const component = mount(BoText, {
				props: { fontFamily: BoFontFamily.Mono, value: 'test' },
			});
			expect(component.props('fontFamily')).toBe(BoFontFamily.Mono);
		});
	});

	suite('variant', () => {
		test('defaults BoTextVariant.Default', () => {
			const component = mount(BoText, { props: { value: 'test' } });
			expect(component.props('variant')).toBe(BoTextVariant.Default);
		});

		test('uses the prop variant if one is provided', () => {
			const component = mount(BoText, {
				props: { variant: BoTextVariant.Primary, value: 'test' },
			});
			expect(component.props('variant')).toBe(BoTextVariant.Primary);
		});
	});

	suite('custom css class', () => {
		test('passes the class to the root element', () => {
			const component = mount(BoText, {
				props: { value: 'test', class: 'test-class' },
			});
			expect(component.classes()).toContain('test-class');
		});
	});

	suite('custom colors', () => {
		test('passes the style to the root element', () => {
			const component = mount(BoText, {
				props: { value: 'test', style: { color: 'red' } },
			});
			expect(getComputedStyle(component.element).color).toBe('rgb(255, 0, 0)');
		});
	});

	suite('accessibility', () => {
		test('renders with role="text" if role is provided', () => {
			const component = mount(BoText, {
				props: { value: 'test', role: 'button' },
			});
			expect(component.props('role')).toBe('button');
		});

		test('renders with aria-live="polite" by default', () => {
			const component = mount(BoText, { props: { value: 'test' } });
			expect(component.props('ariaLive')).toBe('polite');
		});

		test('renders with aria-live="polite" if ariaLive is provided', () => {
			const component = mount(BoText, {
				props: { value: 'test', ariaLive: AriaLive.Assertive },
			});
			expect(component.props('ariaLive')).toBe('assertive');
		});

		test('renders with aria-label if ariaLabel is provided', () => {
			const component = mount(BoText, {
				props: { value: 'test', ariaLabel: 'test-aria-label' },
			});
			expect(component.props('ariaLabel')).toBe('test-aria-label');
		});
	});
});
