import { BoSize } from '@/shared';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { BoTreeVariant } from './bo-tree';
import BoTree from './bo-tree.vue';

const sampleData = [
	{
		id: '1',
		label: 'Node 1',
		children: [
			{
				id: '1.1',
				label: 'Node 1.1',
			},
			{
				id: '1.2',
				label: 'Node 1.2',
			},
		],
	},
	{
		id: '2',
		label: 'Node 2',
		children: [
			{
				id: '2.1',
				label: 'Node 2.1',
			},
		],
	},
];

describe('BoTree', () => {
	it('renders with default props', () => {
		const wrapper = mount(BoTree, {
			props: {
				data: sampleData,
			},
		});
		expect(wrapper.find('.tree').exists()).toBe(true);
		expect(wrapper.findAll('.tree-node').length).toBe(2);
	});

	it('renders children correctly', () => {
		const wrapper = mount(BoTree, {
			props: {
				data: sampleData,
			},
		});
		expect(wrapper.findAll('.tree-node').length).toBe(2);
		expect(wrapper.find('.node-label').text()).toBe('Node 1');
	});

	it('toggles node expansion', async () => {
		const wrapper = mount(BoTree, {
			props: {
				data: sampleData,
			},
		});

		const node = wrapper.find('.tree-node');
		await node.find('.toggle-button').trigger('click');

		expect(wrapper.emitted('node-toggle')).toBeTruthy();
		expect(wrapper.findAll('.tree-node').length).toBeGreaterThan(2);
	});

	it('selects nodes', async () => {
		const wrapper = mount(BoTree, {
			props: {
				data: sampleData,
			},
		});

		const node = wrapper.find('.node-content');
		await node.trigger('click');

		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
		expect(wrapper.emitted('node-select')).toBeTruthy();
	});

	it('handles multiple selection', async () => {
		const wrapper = mount(BoTree, {
			props: {
				data: sampleData,
				multiple: true,
			},
		});

		const nodes = wrapper.findAll('.node-content');
		await nodes[0].trigger('click');
		await nodes[1].trigger('click');

		const emitted = wrapper.emitted('update:modelValue') as string[][];
		expect(emitted).toBeTruthy();
		expect(emitted[1][0].length).toBe(2);
	});

	it('disables tree when disabled prop is true', () => {
		const wrapper = mount(BoTree, {
			props: {
				data: sampleData,
				disabled: true,
			},
		});

		expect(wrapper.classes()).toContain('opacity-50');
	});

	it('shows checkboxes when showCheckboxes is true', () => {
		const wrapper = mount(BoTree, {
			props: {
				data: sampleData,
				showCheckboxes: true,
			},
		});

		expect(wrapper.find('bo-checkbox').exists()).toBe(true);
	});

	it('applies correct size classes', () => {
		const wrapper = mount(BoTree, {
			props: {
				data: sampleData,
				size: BoSize.large,
			},
		});

		expect(wrapper.classes()).toContain('text-lg');
	});

	it('applies compact variant correctly', () => {
		const wrapper = mount(BoTree, {
			props: {
				data: sampleData,
				variant: BoTreeVariant.compact,
			},
		});

		expect(wrapper.classes()).toContain('compact');
	});

	it('handles disabled nodes', async () => {
		const data = [
			{
				id: '1',
				label: 'Node 1',
				disabled: true,
			},
		];

		const wrapper = mount(BoTree, {
			props: {
				data,
			},
		});

		const node = wrapper.find('.node-content');
		await node.trigger('click');

		expect(wrapper.emitted('update:modelValue')).toBeFalsy();
	});
});
