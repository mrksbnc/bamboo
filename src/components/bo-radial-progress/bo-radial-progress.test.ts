import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { BoSize } from '@/shared/size';
import { BoVariant } from '@/shared/variant';
import BoRadialProgress from './bo-radial-progress.vue';

describe('BoRadialProgress', () => {
	it('renders with default props', () => {
		const wrapper = mount(BoRadialProgress, {
			props: {
				value: 50,
			},
		});

		expect(wrapper.find('.bo-radial-progress').exists()).toBe(true);
		expect(wrapper.text()).toContain('50%');
	});

	it('renders with custom value', () => {
		const wrapper = mount(BoRadialProgress, {
			props: {
				value: 75,
			},
		});

		expect(wrapper.text()).toContain('75%');
	});

	it('applies size classes correctly', () => {
		const wrapper = mount(BoRadialProgress, {
			props: {
				value: 50,
				size: BoSize.lg,
			},
		});

		expect(wrapper.find('.bo-radial-progress--size-lg').exists()).toBe(true);
	});

	it('applies variant classes correctly', () => {
		const wrapper = mount(BoRadialProgress, {
			props: {
				value: 50,
				variant: BoVariant.success,
			},
		});

		expect(wrapper.find('.bo-radial-progress--variant-success').exists()).toBe(true);
	});

	it('hides value when showValue is false', () => {
		const wrapper = mount(BoRadialProgress, {
			props: {
				value: 50,
				showValue: false,
			},
		});

		expect(wrapper.text()).toBe('');
	});

	it('displays custom text', () => {
		const wrapper = mount(BoRadialProgress, {
			props: {
				value: 50,
				customText: 'Loading...',
			},
		});

		expect(wrapper.text()).toContain('Loading...');
	});

	it('clamps value between 0 and 100', () => {
		const wrapper = mount(BoRadialProgress, {
			props: {
				value: 150,
			},
		});

		const element = wrapper.find('.bo-radial-progress').element as HTMLElement;
		expect(element.style.getPropertyValue('--value')).toBe('100');
	});

	it('sets correct aria attributes', () => {
		const wrapper = mount(BoRadialProgress, {
			props: {
				value: 50,
			},
		});

		const element = wrapper.find('.bo-radial-progress');
		expect(element.attributes('role')).toBe('progressbar');
		expect(element.attributes('aria-valuenow')).toBe('50');
		expect(element.attributes('aria-valuemin')).toBe('0');
		expect(element.attributes('aria-valuemax')).toBe('100');
	});
});
