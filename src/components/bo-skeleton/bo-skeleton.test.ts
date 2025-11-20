import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import BoSkeleton from './bo-skeleton.vue';

describe('BoSkeleton', () => {
	test('should render text variant by default', () => {
		const wrapper = mount(BoSkeleton);
		expect(wrapper.find('.bo-skeleton__item--text').exists()).toBe(true);
	});

	test('should render circular variant', () => {
		const wrapper = mount(BoSkeleton, {
			props: {
				variant: 'circular',
			},
		});
		expect(wrapper.find('.bo-skeleton__item--circular').exists()).toBe(true);
	});

	test('should render rectangular variant', () => {
		const wrapper = mount(BoSkeleton, {
			props: {
				variant: 'rectangular',
			},
		});
		expect(wrapper.find('.bo-skeleton__item--rectangular').exists()).toBe(true);
	});

	test('should render multiple lines', () => {
		const wrapper = mount(BoSkeleton, {
			props: {
				lines: 3,
			},
		});
		expect(wrapper.findAll('.bo-skeleton__item')).toHaveLength(3);
	});

	test('should apply custom width and height', () => {
		const wrapper = mount(BoSkeleton, {
			props: {
				width: 200,
				height: 100,
			},
		});
		const skeleton = wrapper.find('.bo-skeleton__item');
		expect(skeleton.attributes('style')).toContain('width: 200px');
		expect(skeleton.attributes('style')).toContain('height: 100px');
	});

	test('should have pulse animation by default', () => {
		const wrapper = mount(BoSkeleton);
		expect(wrapper.find('.bo-skeleton__item--animation-pulse').exists()).toBe(true);
	});

	test('should have wave animation when specified', () => {
		const wrapper = mount(BoSkeleton, {
			props: {
				animation: 'wave',
			},
		});
		expect(wrapper.find('.bo-skeleton__item--animation-wave').exists()).toBe(true);
	});

	test('should have no animation when specified', () => {
		const wrapper = mount(BoSkeleton, {
			props: {
				animation: 'none',
			},
		});
		expect(wrapper.find('.bo-skeleton__item--animation-none').exists()).toBe(true);
	});
});
