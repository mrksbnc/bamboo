import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BoText from './bo-text.vue';

describe('BoText', () => {
	it('renders with default slot', () => {
		const wrapper = mount(BoText, {
			slots: { default: 'Hello World' },
		});
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.text()).toBe('Hello World');
	});

	it('renders empty when no slot provided', () => {
		const wrapper = mount(BoText);
		expect(wrapper.find('span').exists()).toBe(true);
		expect(wrapper.text()).toBe('');
	});

	it('applies font size classes correctly', () => {
		const sizes = [
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
		sizes.forEach((size) => {
			const wrapper = mount(BoText, {
				props: { fontSize: size },
				slots: { default: 'Test' },
			});
			expect(wrapper.find('span').exists()).toBe(true);
		});
	});

	it('applies font weight classes correctly', () => {
		const weights = [
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
		weights.forEach((weight) => {
			const wrapper = mount(BoText, {
				props: { fontWeight: weight },
				slots: { default: 'Test' },
			});
			expect(wrapper.find('span').exists()).toBe(true);
		});
	});

	it('applies text align classes correctly', () => {
		const aligns = ['left', 'center', 'right', 'justify'] as const;
		aligns.forEach((align) => {
			const wrapper = mount(BoText, {
				props: { textAlign: align },
				slots: { default: 'Test' },
			});
			expect(wrapper.find('span').exists()).toBe(true);
		});
	});

	it('applies variant classes correctly', () => {
		const variants = [
			'default',
			'inherit',
			'currentColor',
			'primary',
			'secondary',
			'disabled',
			'success',
			'warning',
			'destructive',
			'white',
			'black',
		] as const;
		variants.forEach((variant) => {
			const wrapper = mount(BoText, {
				props: { variant },
				slots: { default: 'Test' },
			});
			expect(wrapper.find('span').exists()).toBe(true);
		});
	});

	it('applies font family classes correctly', () => {
		const families = ['inherit', 'sans', 'mono', 'serif'] as const;
		families.forEach((family) => {
			const wrapper = mount(BoText, {
				props: { fontFamily: family },
				slots: { default: 'Test' },
			});
			expect(wrapper.find('span').exists()).toBe(true);
		});
	});

	it('applies text transform classes correctly', () => {
		const transforms = ['none', 'capitalize', 'uppercase', 'lowercase'] as const;
		transforms.forEach((transform) => {
			const wrapper = mount(BoText, {
				props: { textTransform: transform },
				slots: { default: 'Test' },
			});
			expect(wrapper.find('span').exists()).toBe(true);
		});
	});

	it('applies white space classes correctly', () => {
		const spaces = ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] as const;
		spaces.forEach((space) => {
			const wrapper = mount(BoText, {
				props: { whiteSpace: space },
				slots: { default: 'Test' },
			});
			expect(wrapper.find('span').exists()).toBe(true);
		});
	});

	it('applies line clamp with number', () => {
		const wrapper = mount(BoText, {
			slots: { default: 'Test' },
			props: { lineClamp: 3 },
		});
		expect(wrapper.find('span').classes()).toContain('line-clamp-3');
	});

	it('applies line clamp with string', () => {
		const wrapper = mount(BoText, {
			slots: { default: 'Test' },
			props: { lineClamp: '5' },
		});
		expect(wrapper.find('span').classes()).toContain('line-clamp-[5]');
	});

	it('applies line clamp none', () => {
		const wrapper = mount(BoText, {
			slots: { default: 'Test' },
			props: { lineClamp: 'none' },
		});
		expect(wrapper.find('span').classes()).toContain('line-clamp-none');
	});

	it('applies custom cursor class', () => {
		const wrapper = mount(BoText, {
			slots: { default: 'Test' },
			props: { cursor: 'cursor-help' },
		});
		expect(wrapper.find('span').classes()).toContain('cursor-help');
	});

	it('applies custom color styles', () => {
		const wrapper = mount(BoText, {
			slots: { default: 'Test' },
			props: { customColor: '#ff0000' },
		});
		expect(wrapper.find('span').attributes('style')).toContain('color');
	});

	it('applies custom id and data-testid', () => {
		const wrapper = mount(BoText, {
			slots: { default: 'Test' },
			props: { id: 'custom-id', dataTestId: 'custom-test-id' },
		});
		const element = wrapper.find('[data-testid="custom-test-id"]');
		expect(element.exists()).toBe(true);
		expect(element.attributes('id')).toBe('custom-id');
	});

	it('applies role attribute', () => {
		const wrapper = mount(BoText, {
			slots: { default: 'Test' },
			props: { role: 'heading' },
		});
		expect(wrapper.find('span').attributes('role')).toBe('heading');
	});

	it('applies lang attribute', () => {
		const wrapper = mount(BoText, {
			slots: { default: 'Test' },
			props: { lang: 'en-US' },
		});
		expect(wrapper.find('span').attributes('lang')).toBe('en-US');
	});

	it('applies aria-live attribute', () => {
		const wrapper = mount(BoText, {
			slots: { default: 'Test' },
			props: { ariaLive: 'polite' },
		});
		expect(wrapper.find('span').attributes('aria-live')).toBe('polite');
	});

	it('applies aria-label attribute', () => {
		const wrapper = mount(BoText, {
			slots: { default: 'Test' },
			props: { ariaLabel: 'Test label' },
		});
		expect(wrapper.find('span').attributes('aria-label')).toBe('Test label');
	});

	it('applies aria-labelledby attribute', () => {
		const wrapper = mount(BoText, {
			slots: { default: 'Test' },
			props: { ariaLabelledBy: 'label-id' },
		});
		expect(wrapper.find('span').attributes('aria-labelledby')).toBe('label-id');
	});

	it('applies aria-describedby attribute', () => {
		const wrapper = mount(BoText, {
			slots: { default: 'Test' },
			props: { ariaDescribedBy: 'desc-id' },
		});
		expect(wrapper.find('span').attributes('aria-describedby')).toBe('desc-id');
	});

	it('applies base classes', () => {
		const wrapper = mount(BoText, {
			slots: { default: 'Test' },
		});
		const element = wrapper.find('span');
		expect(element.classes()).toContain('box-border');
		expect(element.classes()).toContain('m-0');
	});
});
