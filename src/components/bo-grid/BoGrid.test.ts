import { BoSize } from '@/shared';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoGrid from './BoGrid.vue';
import BoGridItem from './BoGridItem.vue';
import { BoGridVariant } from './bo-grid';

describe('BoGrid', () => {
	it('renders with default props', () => {
		const wrapper = mount(BoGrid);
		expect(wrapper.classes()).toContain('grid');
		expect(wrapper.classes()).toContain('gap-4');
	});

	it('applies correct number of columns', () => {
		const wrapper = mount(BoGrid, {
			props: {
				columns: 6,
			},
		});
		expect(wrapper.attributes('style')).toContain('grid-template-columns: repeat(6, 1fr)');
	});

	it('applies correct gap size', () => {
		const wrapper = mount(BoGrid, {
			props: {
				gap: BoSize.large,
			},
		});
		expect(wrapper.classes()).toContain('gap-6');
	});

	it('centers items when center prop is true', () => {
		const wrapper = mount(BoGrid, {
			props: {
				center: true,
			},
		});
		expect(wrapper.classes()).toContain('justify-items-center');
	});

	it('applies dense variant correctly', () => {
		const wrapper = mount(BoGrid, {
			props: {
				variant: BoGridVariant.dense,
			},
		});
		expect(wrapper.classes()).toContain('gap-1');
	});

	it('applies responsive classes when responsive is true', () => {
		const wrapper = mount(BoGrid, {
			props: {
				responsive: true,
				breakpoint: 'md',
			},
		});
		expect(wrapper.classes()).toContain('grid-cols-1');
		expect(wrapper.classes()).toContain('md:grid-cols-2');
		expect(wrapper.classes()).toContain('lg:grid-cols-3');
		expect(wrapper.classes()).toContain('xl:grid-cols-4');
	});

	it('renders grid items correctly', () => {
		const wrapper = mount(BoGrid, {
			slots: {
				default: '<bo-grid-item>Test Item</bo-grid-item>',
			},
			global: {
				components: {
					'bo-grid-item': BoGridItem,
				},
			},
		});
		expect(wrapper.find('.grid-item').exists()).toBe(true);
		expect(wrapper.find('.grid-item').text()).toBe('Test Item');
	});
});

describe('BoGridItem', () => {
	it('renders with default props', () => {
		const wrapper = mount(BoGridItem);
		expect(wrapper.classes()).toContain('col-span-1');
	});

	it('applies correct span classes', () => {
		const wrapper = mount(BoGridItem, {
			props: {
				span: 3,
			},
		});
		expect(wrapper.classes()).toContain('col-span-3');
	});

	it('applies responsive span classes', () => {
		const wrapper = mount(BoGridItem, {
			props: {
				span: 1,
				spanMd: 2,
				spanLg: 3,
			},
		});
		expect(wrapper.classes()).toContain('col-span-1');
		expect(wrapper.classes()).toContain('md:col-span-2');
		expect(wrapper.classes()).toContain('lg:col-span-3');
	});

	it('applies start and end positions', () => {
		const wrapper = mount(BoGridItem, {
			props: {
				start: 2,
				end: 4,
			},
		});
		expect(wrapper.classes()).toContain('col-start-2');
		expect(wrapper.classes()).toContain('col-end-4');
	});
});
