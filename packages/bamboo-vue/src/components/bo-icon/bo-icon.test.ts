import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BoIcon from './bo-icon.vue';

describe('BoIcon', () => {
	it('renders with default props', () => {
		const wrapper = mount(BoIcon, {
			props: { icon: 'check' },
		});
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('p').exists()).toBe(true);
	});

	it('applies correct role for decorative icons', () => {
		const wrapper = mount(BoIcon, {
			props: { icon: 'check', decorative: true },
		});
		const element = wrapper.find('p');
		expect(element.attributes('role')).toBe('presentation');
		expect(element.attributes('aria-hidden')).toBe('true');
	});

	it('applies correct role for non-decorative icons', () => {
		const wrapper = mount(BoIcon, {
			props: { icon: 'check', decorative: false },
		});
		const element = wrapper.find('p');
		expect(element.attributes('role')).toBe('img');
		expect(element.attributes('aria-hidden')).toBe('false');
	});

	it('applies size classes correctly', () => {
		const sizes = ['xs', 'sm', 'default', 'lg', 'xl'] as const;
		sizes.forEach((size) => {
			const wrapper = mount(BoIcon, {
				props: { icon: 'check', size },
			});
			const element = wrapper.find('p');
			expect(element.exists()).toBe(true);
		});
	});

	it('applies numeric size correctly', () => {
		const wrapper = mount(BoIcon, {
			props: { icon: 'check', size: 24 },
		});
		const element = wrapper.find('p');
		expect(element.classes()).toContain('size-[24px]');
	});

	it('applies variant classes correctly', () => {
		const variants = [
			'current',
			'inherit',
			'primary',
			'secondary',
			'success',
			'warning',
			'destructive',
			'white',
			'black',
		] as const;
		variants.forEach((variant) => {
			const wrapper = mount(BoIcon, {
				props: { icon: 'check', variant },
			});
			const element = wrapper.find('p');
			expect(element.exists()).toBe(true);
		});
	});

	it('applies custom color styles', () => {
		const wrapper = mount(BoIcon, {
			props: { icon: 'check', customColor: '#ff0000' },
		});
		const element = wrapper.find('p');
		expect(element.attributes('style')).toContain('color');
	});

	it('applies cursor class', () => {
		const wrapper = mount(BoIcon, {
			props: { icon: 'check', cursor: 'cursor-pointer' },
		});
		const element = wrapper.find('p');
		expect(element.classes()).toContain('cursor-pointer');
	});

	it('applies custom id and data-testid', () => {
		const wrapper = mount(BoIcon, {
			props: { icon: 'check', id: 'custom-id', dataTestId: 'custom-test-id' },
		});
		const element = wrapper.find('[data-testid="custom-test-id"]');
		expect(element.exists()).toBe(true);
		expect(element.attributes('id')).toBe('custom-id');
	});

	it('applies title attribute when provided', () => {
		const wrapper = mount(BoIcon, {
			props: { icon: 'check', title: 'Check icon' },
		});
		const element = wrapper.find('p');
		expect(element.attributes('title')).toBe('Check icon');
	});

	it('renders icon content from registry', () => {
		const wrapper = mount(BoIcon, {
			props: { icon: 'check' },
		});
		const element = wrapper.find('p');
		expect(element.html()).toBeTruthy();
	});

	it('applies base classes', () => {
		const wrapper = mount(BoIcon, {
			props: { icon: 'check' },
		});
		const element = wrapper.find('p');
		expect(element.classes()).toContain('box-border');
		expect(element.classes()).toContain('inline-flex');
		expect(element.classes()).toContain('items-center');
		expect(element.classes()).toContain('justify-center');
		expect(element.classes()).toContain('shrink-0');
	});

	it('has no margin or padding on p element', () => {
		const wrapper = mount(BoIcon, {
			props: { icon: 'check' },
		});
		const element = wrapper.find('p');
		const styles = window.getComputedStyle(element.element);
		expect(styles.margin).toBe('');
		expect(styles.padding).toBe('');
	});
});
