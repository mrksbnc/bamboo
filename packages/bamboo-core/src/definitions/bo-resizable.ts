import { HTMLAttributes } from 'vue';
import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';

export type BoResizableDirection = 'horizontal' | 'vertical';

export interface BoResizableProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	direction?: BoResizableDirection;
	role?: HTMLAttributes['role'];
}

type BoResizableManifestDefaults = ManifestDefaults<BoResizableProps, 'direction' | 'role'>;

export interface BoResizableStyleManifest {
	readonly base: 'bo-resizable';
	readonly direction: Readonly<Record<BoResizableDirection, `bo-resizable--${string}`>>;
	readonly panel: 'bo-resizable__panel';
	readonly handle: Readonly<Record<BoResizableDirection, `bo-resizable__handle--${string}`>>;
}

export type ResizableManifest = ComponentManifest<
	BoResizableStyleManifest,
	BoResizableManifestDefaults,
	'Resizable'
>;

export interface BoResizablePanelProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	defaultSize?: number;
	minSize?: number;
}

export interface BoResizableHandleProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
}
