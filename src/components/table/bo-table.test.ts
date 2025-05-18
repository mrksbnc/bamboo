import { fireEvent, render, screen } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import BoTable from './bo-table.vue';

describe('BoTable.vue', () => {
	const columns = [
		{ key: 'name', label: 'Name' },
		{ key: 'age', label: 'Age' },
		{ key: 'email', label: 'Email' },
	];

	const items = [
		{ name: 'John Doe', age: 30, email: 'john@example.com' },
		{ name: 'Jane Smith', age: 25, email: 'jane@example.com' },
	];

	it('renders table with columns', () => {
		render(BoTable, { props: { columns } });
		columns.forEach((column) => {
			expect(screen.getByText(column.label)).toBeTruthy();
		});
	});

	it('renders table with data', () => {
		render(BoTable, { props: { columns, items } });
		items.forEach((item) => {
			expect(screen.getByText(item.name)).toBeTruthy();
			expect(screen.getByText(item.age.toString())).toBeTruthy();
			expect(screen.getByText(item.email)).toBeTruthy();
		});
	});

	it('applies custom class', () => {
		render(BoTable, { props: { columns, class: 'custom-class' } });
		const table = screen.getByTestId('bo-table');
		expect(table).toHaveClass('custom-class');
	});

	it('renders with striped rows when striped prop is true', () => {
		render(BoTable, { props: { columns, items, striped: true } });
		const table = screen.getByTestId('bo-table');
		expect(table).toHaveClass('bo-table--striped');
	});

	it('renders with hover effect when hover prop is true', () => {
		render(BoTable, { props: { columns, items, hover: true } });
		const table = screen.getByTestId('bo-table');
		expect(table).toHaveClass('bo-table--hover');
	});

	it('renders with compact style when compact prop is true', () => {
		render(BoTable, { props: { columns, items, compact: true } });
		const table = screen.getByTestId('bo-table');
		expect(table).toHaveClass('bo-table--compact');
	});

	it('emits row-click event when row is clicked', async () => {
		const { emitted } = render(BoTable, { props: { columns, items } });
		const row = screen.getByText(items[0].name).closest('tr');
		if (row) {
			await fireEvent.click(row);
			expect(emitted()['row-click'][0]).toEqual([items[0]]);
		}
	});

	it('renders with custom empty state', () => {
		render(BoTable, {
			props: { columns },
			slots: { empty: 'No data available' },
		});
		expect(screen.getByText('No data available')).toBeTruthy();
	});

	it('renders with loading state', () => {
		render(BoTable, { props: { columns, loading: true } });
		expect(screen.getByTestId('bo-table__loading')).toBeTruthy();
	});

	it('renders with custom cell content', () => {
		render(BoTable, {
			props: {
				columns: [
					{
						key: 'name',
						label: 'Name',
						render: (item: any) => `Custom ${item.name}`,
					},
				],
				items,
			},
		});
		expect(screen.getByText(`Custom ${items[0].name}`)).toBeTruthy();
	});
});
