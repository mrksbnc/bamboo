import { HTMLAttributes } from 'vue';
import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';

export type BoPopoverPlacement =
	| 'top'
	| 'top-start'
	| 'top-end'
	| 'bottom'
	| 'bottom-start'
	| 'bottom-end'
	| 'left'
	| 'left-start'
	| 'left-end'
	| 'right'
	| 'right-start'
	| 'right-end';

export interface BoPopoverProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	open?: boolean;
	placement?: BoPopoverPlacement;
	offset?: number;
	closeOnOutside?: boolean;
	closeOnEscape?: boolean;
	role?: HTMLAttributes['role'];
}

type BoPopoverManifestDefaults = ManifestDefaults<
	BoPopoverProps,
	'placement' | 'offset' | 'closeOnOutside' | 'closeOnEscape' | 'role'
>;

export interface BoPopoverStyleManifest {
	trigger: string;
	content: string;
	arrow: string;
	placement: Record<BoPopoverPlacement, string>;
}

export type PopoverManifest = ComponentManifest<
	BoPopoverStyleManifest,
	BoPopoverManifestDefaults,
	'Popover'
>;
