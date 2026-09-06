import { HTMLAttributes } from 'vue';
import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';
import { BoPopoverPlacement } from './bo-popover.js';

export interface BoHoverCardProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	open?: boolean;
	placement?: BoPopoverPlacement;
	offset?: number;
	openDelay?: number;
	closeDelay?: number;
	role?: HTMLAttributes['role'];
}

type BoHoverCardManifestDefaults = ManifestDefaults<
	BoHoverCardProps,
	'placement' | 'offset' | 'openDelay' | 'closeDelay' | 'role'
>;

export interface BoHoverCardStyleManifest {
	trigger: string;
	content: string;
	placement: Record<BoPopoverPlacement, string>;
}

export type HoverCardManifest = ComponentManifest<
	BoHoverCardStyleManifest,
	BoHoverCardManifestDefaults,
	'HoverCard'
>;
