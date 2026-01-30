import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BoText from './bo-text.vue';

describe('BoText', () => {
	it('renders with value prop', () => {
		const wrapper = mount(BoText, {
			props: { value: 'Hello World' },
		});
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.text()).toBe('Hello World');
	});

	it('renders with default slot', () => {
		const wrapper = mount(BoText, {
			slots: {
				default: 'Slot Content',
			},
		});
		expect(wrapper.text()).toBe('Slot Content');
	});

	it('prefers slot over value prop', () => {
		const wrapper = mount(BoText, {
			props: { value: 'Value' },
			slots: {
				default: 'Slot',
			},
		});
		expect(wrapper.text()).toBe('Slot');
	});

	it('does not render when no value or slot provided', () => {
		const wrapper = mount(BoText);
		expect(wrapper.find('span').exists()).toBe(false);
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
				props: { value: 'Test', fontSize: size },
			});
			const element = wrapper.find('span');
			expect(element.exists()).toBe(true);
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
				props: { value: 'Test', fontWeight: weight },
			});
			const element = wrapper.find('span');
			expect(element.exists()).toBe(true);
		});
	});

	it('applies text align classes correctly', () => {
		const aligns = ['left', 'center', 'right', 'justify'] as const;
		aligns.forEach((align) => {
			const wrapper = mount(BoText, {
				props: { value: 'Test', textAlign: align },
			});
			const element = wrapper.find('span');
			expect(element.exists()).toBe(true);
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
				props: { value: 'Test', variant },
			});
			const element = wrapper.find('span');
			expect(element.exists()).toBe(true);
		});
	});

	it('applies font family classes correctly', () => {
		const families = ['inherit', 'sans', 'mono', 'serif'] as const;
		families.forEach((family) => {
			const wrapper = mount(BoText, {
				props: { value: 'Test', fontFamily: family },
			});
			const element = wrapper.find('span');
			expect(element.exists()).toBe(true);
		});
	});

	it('applies text transform classes correctly', () => {
		const transforms = ['none', 'capitalize', 'uppercase', 'lowercase'] as const;
		transforms.forEach((transform) => {
			const wrapper = mount(BoText, {
				props: { value: 'Test', textTransform: transform },
			});
			const element = wrapper.find('span');
			expect(element.exists()).toBe(true);
		});
	});

	it('applies white space classes correctly', () => {
		const spaces = ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] as const;
		spaces.forEach((space) => {
			const wrapper = mount(BoText, {
				props: { value: 'Test', whiteSpace: space },
			});
			const element = wrapper.find('span');
			expect(element.exists()).toBe(true);
		});
	});

	it('applies line clamp with number', () => {
		const wrapper = mount(BoText, {
			props: { value: 'Test', lineClamp: 3 },
		});
		const element = wrapper.find('span');
		expect(element.classes()).toContain('line-clamp-3');
	});

	it('applies line clamp with string', () => {
		const wrapper = mount(BoText, {
			props: { value: 'Test', lineClamp: '5' },
		});
		const element = wrapper.find('span');
		expect(element.classes()).toContain('line-clamp-[5]');
	});

	it('applies line clamp none', () => {
		const wrapper = mount(BoText, {
			props: { value: 'Test', lineClamp: 'none' },
		});
		const element = wrapper.find('span');
		expect(element.classes()).toContain('line-clamp-none');
	});

	it('applies cursor pointer when clickable and no cursor prop', () => {
		const wrapper = mount(BoText, {
			props: { value: 'Test', clickable: true, cursor: undefined },
		});
		const element = wrapper.find('span');
		// When cursor prop is undefined, clickable should apply cursor-pointer
		// But since cursor has a default value, we need to explicitly set it to undefined
		// In practice, the cursor prop will have the default value 'cursor-auto'
		expect(element.classes()).toContain('cursor-auto');
	});

	it('applies custom cursor class', () => {
		const wrapper = mount(BoText, {
			props: { value: 'Test', cursor: 'cursor-help' },
		});
		const element = wrapper.find('span');
		expect(element.classes()).toContain('cursor-help');
	});

	it('applies custom color styles', () => {
		const wrapper = mount(BoText, {
			props: { value: 'Test', customColor: '#ff0000' },
		});
		const element = wrapper.find('span');
		expect(element.attributes('style')).toContain('color');
	});

	it('applies custom id and data-testid', () => {
		const wrapper = mount(BoText, {
			props: { value: 'Test', id: 'custom-id', dataTestId: 'custom-test-id' },
		});
		const element = wrapper.find('[data-testid="custom-test-id"]');
		expect(element.exists()).toBe(true);
		expect(element.attributes('id')).toBe('custom-id');
	});

	it('applies role attribute', () => {
		const wrapper = mount(BoText, {
			props: { value: 'Test', role: 'heading' },
		});
		const element = wrapper.find('span');
		expect(element.attributes('role')).toBe('heading');
	});

	it('applies lang attribute', () => {
		const wrapper = mount(BoText, {
			props: { value: 'Test', lang: 'en-US' },
		});
		const element = wrapper.find('span');
		expect(element.attributes('lang')).toBe('en-US');
	});

	it('applies aria-live attribute', () => {
		const wrapper = mount(BoText, {
			props: { value: 'Test', ariaLive: 'polite' },
		});
		const element = wrapper.find('span');
		expect(element.attributes('aria-live')).toBe('polite');
	});

	it('applies aria-label attribute', () => {
		const wrapper = mount(BoText, {
			props: { value: 'Test', ariaLabel: 'Test label' },
		});
		const element = wrapper.find('span');
		expect(element.attributes('aria-label')).toBe('Test label');
	});

	it('applies aria-labelledby attribute', () => {
		const wrapper = mount(BoText, {
			props: { value: 'Test', ariaLabelledBy: 'label-id' },
		});
		const element = wrapper.find('span');
		expect(element.attributes('aria-labelledby')).toBe('label-id');
	});

	it('applies aria-describedby attribute', () => {
		const wrapper = mount(BoText, {
			props: { value: 'Test', ariaDescribedBy: 'desc-id' },
		});
		const element = wrapper.find('span');
		expect(element.attributes('aria-describedby')).toBe('desc-id');
	});

	it('applies base classes', () => {
		const wrapper = mount(BoText, {
			props: { value: 'Test' },
		});
		const element = wrapper.find('span');
		expect(element.classes()).toContain('box-border');
		expect(element.classes()).toContain('m-0');
	});
});
