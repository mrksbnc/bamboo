import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { BoTable } from './index.js';

describe('BoTable', () => {
	it('renders headers and cells', () => {
		const wrapper = mount(BoTable, {
			props: {
				columns: [{ key: 'name', label: 'Name' }],
				rows: [{ name: 'Bamboo' }],
			},
		});
		expect(wrapper.find('th').text()).toBe('Name');
		expect(wrapper.find('tbody').text()).toContain('Bamboo');
	});

	it('renders actions in an accessible column at the end of each row', async () => {
		const onEdit = vi.fn<(row: Record<string, unknown>, index: number) => void>();
		const row = { name: 'Bamboo' };
		const wrapper = mount(BoTable, {
			props: {
				columns: [{ key: 'name', label: 'Name' }],
				rows: [row],
				actions: [{ label: 'Edit', onClick: onEdit }],
			},
		});

		expect(wrapper.findAll('th').map((header) => header.text())).toEqual(['Name', 'Actions']);
		expect(wrapper.find('button').attributes('aria-label')).toBe('Edit');

		await wrapper.find('button').trigger('click');
		expect(onEdit).toHaveBeenCalledWith(row, 0);
	});

	it('supports custom action slots', () => {
		const wrapper = mount(BoTable, {
			props: {
				columns: [{ key: 'name', label: 'Name' }],
				rows: [{ name: 'Bamboo' }],
			},
			slots: {
				actions: '<button type="button">View</button>',
			},
		});

		expect(wrapper.find('th').text()).toBe('Name');
		expect(wrapper.find('button').text()).toBe('View');
	});
});
