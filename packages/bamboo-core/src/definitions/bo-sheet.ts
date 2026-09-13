import { HTMLAttributes } from 'vue';
import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';

export type BoSheetSide = 'top' | 'bottom' | 'left' | 'right';
export type BoSheetSize = 'sm' | 'default' | 'lg' | 'full';

export interface BoSheetProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	open?: boolean;
	title?: string;
	description?: string;
	side?: BoSheetSide;
	size?: BoSheetSize;
	closeOnBackdrop?: boolean;
	closeOnEscape?: boolean;
	showClose?: boolean;
	closeAriaLabel?: string;
	role?: HTMLAttributes['role'];
	ariaLabel?: HTMLAttributes['aria-label'];
	ariaLabelledBy?: HTMLAttributes['aria-labelledby'];
	ariaDescribedBy?: HTMLAttributes['aria-describedby'];
}

type BoSheetManifestDefaults = ManifestDefaults<
	BoSheetProps,
	'side' | 'size' | 'closeOnBackdrop' | 'closeOnEscape' | 'showClose' | 'closeAriaLabel' | 'role'
>;

export interface BoSheetStyleManifest {
	backdrop: string;
	wrapper: string;
	panel: {
		base: string;
		side: Record<BoSheetSide, string>;
		size: Record<BoSheetSize, string>;
	};
	header: string;
	headerContent: string;
	title: string;
	close: string;
	body: string;
	description: string;
	footer: string;
}

export type SheetManifest = ComponentManifest<
	BoSheetStyleManifest,
	BoSheetManifestDefaults,
	'Sheet'
>;
