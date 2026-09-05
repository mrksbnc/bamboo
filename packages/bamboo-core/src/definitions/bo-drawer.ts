import { HTMLAttributes } from 'vue';
import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';

export type BoDrawerSide = 'left' | 'right';
export type BoDrawerSize = 'sm' | 'default' | 'lg' | 'full';

export interface BoDrawerProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	open?: boolean;
	title?: string;
	description?: string;
	side?: BoDrawerSide;
	size?: BoDrawerSize;
	closeOnBackdrop?: boolean;
	closeOnEscape?: boolean;
	showClose?: boolean;
	closeAriaLabel?: string;
	role?: HTMLAttributes['role'];
	ariaLabel?: HTMLAttributes['aria-label'];
	ariaLabelledBy?: HTMLAttributes['aria-labelledby'];
	ariaDescribedBy?: HTMLAttributes['aria-describedby'];
}

type BoDrawerManifestDefaults = ManifestDefaults<
	BoDrawerProps,
	'side' | 'size' | 'closeOnBackdrop' | 'closeOnEscape' | 'showClose' | 'closeAriaLabel' | 'role'
>;

export interface BoDrawerStyleManifest {
	backdrop: string;
	wrapper: string;
	panel: {
		base: string;
		side: Record<BoDrawerSide, string>;
		size: Record<BoDrawerSize, string>;
	};
	header: string;
	headerContent: string;
	title: string;
	close: string;
	body: string;
	description: string;
	footer: string;
}

export type DrawerManifest = ComponentManifest<
	BoDrawerStyleManifest,
	BoDrawerManifestDefaults,
	'Drawer'
>;
