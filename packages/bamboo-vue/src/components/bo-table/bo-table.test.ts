import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { BoTable } from './index.js';

describe('BoTable', () => {
	it('renders headers and cells', () => {
		const wrapper = mount(BoTable, {
			props: {
				columns: [
					{ key: 'name', label: 'Name', width: 60 },
					{ key: 'status', label: 'Status', width: 40 },
				],
				rows: [{ name: 'Bamboo' }],
			},
		});
		expect(wrapper.find('[role="columnheader"]').text()).toBe('Name');
		expect(wrapper.find('[role="cell"]').text()).toContain('Bamboo');
		expect(wrapper.attributes('role')).toBe('table');
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

		expect(wrapper.findAll('[role="columnheader"]').map((header) => header.text())).toEqual([
			'Name',
			'Actions',
		]);
		expect(wrapper.find('button').attributes('aria-label')).toBe('Actions for row 1');

		await wrapper.find('button').trigger('click');
		await wrapper.find('[role="menuitem"]').trigger('click');
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

		expect(wrapper.find('[role="columnheader"]').text()).toBe('Name');
		expect(wrapper.find('button').text()).toBe('View');
	});

	it('uses configured column widths for headers and body rows', () => {
		const wrapper = mount(BoTable, {
			props: {
				columns: [
					{ key: 'name', label: 'Name', width: 60 },
					{ key: 'status', label: 'Status', align: 'end', width: 40 },
				],
				rows: [{ name: 'Bamboo', status: 'Ready' }],
			},
		});
		const rows = wrapper.findAll('[role="row"]');

		expect(rows[0].element.style.gridTemplateColumns).toBe('60% 40%');
		expect(rows[1].element.style.gridTemplateColumns).toBe(
			rows[0].element.style.gridTemplateColumns,
		);
		expect(wrapper.findAll('[role="columnheader"]')[1].element.style.justifyContent).toBe(
			'flex-end',
		);
		expect(wrapper.findAll('[role="cell"]')[1].element.style.justifyContent).toBe('flex-end');
	});
});
