import { TableManifest } from '../definitions/index.js';
export const TABLE_MANIFEST = {
	meta: { name: 'Table', version: '1.0.0' },
	styles: {
		base: 'bo-table',
		wrapper: 'bo-table__wrapper',
		table: 'bo-table__table',
		caption: 'bo-table__caption',
		head: 'bo-table__head',
		header: 'bo-table__header',
		body: 'bo-table__body',
		row: 'bo-table__row',
		cell: 'bo-table__cell',
		empty: 'bo-table__empty',
		actions: 'bo-table__actions',
	},
	defaults: {},
} as const satisfies TableManifest;
