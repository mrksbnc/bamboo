import { HTMLAttributes } from 'vue';
import { ComponentManifest } from '../manifests/types.js';
import { BoButtonKind, BoButtonVariant } from './bo-button.js';

export interface BoTableColumn {
	key: string;
	label: string;
	align?: 'start' | 'center' | 'end';
}

export interface BoTableAction {
	label: string;
	ariaLabel?: string;
	variant?: BoButtonVariant;
	kind?: BoButtonKind;
	disabled?: boolean;
	onClick?: (row: Record<string, unknown>, index: number) => void;
}

export interface BoTableProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	columns: BoTableColumn[];
	rows: Record<string, unknown>[];
	caption?: string;
	striped?: boolean;
	bordered?: boolean;
	ariaLabel?: HTMLAttributes['aria-label'];
	actions?: BoTableAction[];
	actionsLabel?: string;
}

export interface BoTableStyleManifest {
	readonly base: 'bo-table';
	readonly wrapper: 'bo-table__wrapper';
	readonly table: 'bo-table__table';
	readonly caption: 'bo-table__caption';
	readonly head: 'bo-table__head';
	readonly header: 'bo-table__header';
	readonly body: 'bo-table__body';
	readonly row: 'bo-table__row';
	readonly cell: 'bo-table__cell';
	readonly empty: 'bo-table__empty';
	readonly actions: 'bo-table__actions';
}

export type TableManifest = ComponentManifest<BoTableStyleManifest, Record<string, never>, 'Table'>;
