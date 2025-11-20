import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { BoSize } from '@/shared/size';
import BoPagination from './bo-pagination.vue';

describe('BoPagination', () => {
	test('should render with required props', () => {
		const wrapper = mount(BoPagination, {
			props: {
				currentPage: 1,
				totalPages: 10,
			},
		});

		expect(wrapper.find('.bo-pagination').exists()).toBe(true);
	});

	test('should emit pageChange event when page clicked', async () => {
		const wrapper = mount(BoPagination, {
			props: {
				currentPage: 1,
				totalPages: 10,
			},
		});

		const buttons = wrapper.findAll('.bo-pagination__page');
		await buttons[1].trigger('click');

		expect(wrapper.emitted('pageChange')).toBeTruthy();
		expect(wrapper.emitted('pageChange')?.[0]).toEqual([2]);
	});

	test('should disable previous button on first page', () => {
		const wrapper = mount(BoPagination, {
			props: {
				currentPage: 1,
				totalPages: 10,
			},
		});

		const prevButton = wrapper.find('.bo-pagination__prev');
		expect(prevButton.attributes('disabled')).toBeDefined();
	});

	test('should disable next button on last page', () => {
		const wrapper = mount(BoPagination, {
			props: {
				currentPage: 10,
				totalPages: 10,
			},
		});

		const nextButton = wrapper.find('.bo-pagination__next');
		expect(nextButton.attributes('disabled')).toBeDefined();
	});

	test('should apply active class to current page', () => {
		const wrapper = mount(BoPagination, {
			props: {
				currentPage: 5,
				totalPages: 10,
			},
		});

		const activeButton = wrapper.find('.bo-pagination__page--active');
		expect(activeButton.exists()).toBe(true);
		expect(activeButton.text()).toBe('5');
	});

	test('should apply correct size classes', () => {
		const sizes = [BoSize.xs, BoSize.sm, BoSize.md, BoSize.lg, BoSize.xl];

		for (const size of sizes) {
			const wrapper = mount(BoPagination, {
				props: {
					currentPage: 1,
					totalPages: 10,
					size,
				},
			});

			expect(wrapper.find('.bo-pagination').classes()).toContain(`bo-pagination--size-${size}`);
		}
	});

	test('should show ellipsis for large page counts', () => {
		const wrapper = mount(BoPagination, {
			props: {
				currentPage: 5,
				totalPages: 20,
			},
		});

		const ellipsis = wrapper.findAll('.bo-pagination__ellipsis');
		expect(ellipsis.length).toBeGreaterThan(0);
	});

	test('should emit pageChange when next button clicked', async () => {
		const wrapper = mount(BoPagination, {
			props: {
				currentPage: 1,
				totalPages: 10,
			},
		});

		await wrapper.find('.bo-pagination__next').trigger('click');

		expect(wrapper.emitted('pageChange')).toBeTruthy();
		expect(wrapper.emitted('pageChange')?.[0]).toEqual([2]);
	});

	test('should emit pageChange when previous button clicked', async () => {
		const wrapper = mount(BoPagination, {
			props: {
				currentPage: 5,
				totalPages: 10,
			},
		});

		await wrapper.find('.bo-pagination__prev').trigger('click');

		expect(wrapper.emitted('pageChange')).toBeTruthy();
		expect(wrapper.emitted('pageChange')?.[0]).toEqual([4]);
	});

	test('should show simple pagination when showSimple is true', () => {
		const wrapper = mount(BoPagination, {
			props: {
				currentPage: 5,
				totalPages: 10,
				showSimple: true,
			},
		});

		expect(wrapper.find('.bo-pagination--simple').exists()).toBe(true);
		expect(wrapper.text()).toContain('5 / 10');
	});
});
