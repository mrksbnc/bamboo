import type { BoSize } from '@/shared/bo-size.js';

export enum BoPopoverPlacement {
	top = 'top',
	top_start = 'top-start',
	top_end = 'top-end',
	right = 'right',
	right_start = 'right-start',
	right_end = 'right-end',
	bottom = 'bottom',
	bottom_start = 'bottom-start',
	bottom_end = 'bottom-end',
	left = 'left',
	left_start = 'left-start',
	left_end = 'left-end',
}

export enum BoPopoverTrigger {
	click = 'click',
	hover = 'hover',
	focus = 'focus',
}

export enum BoPopoverAnimation {
	fade = 'fade',
	scale = 'scale',
	shift = 'shift',
}

export interface BoPopoverProps {
	/** Id for the popover */
	id?: string;
	/** Placement of the popover */
	placement?: BoPopoverPlacement;
	/** Offset distance from the trigger element */
	offset?: number;
	/** The event that triggers the popover */
	trigger?: BoPopoverTrigger;
	/** Whether to disable interactive content inside the popover */
	interactive?: boolean;
	/** Title of the popover */
	title?: string;
	/** Content of the popover */
	content?: string;
	/** Size of the popover */
	size?: BoSize;
	/** CSS class to add to the popover */
	popoverClass?: string;
	/** Whether to show an arrow pointing to the trigger element */
	arrow?: boolean;
	/** Whether the popover should have a shadow */
	shadow?: boolean;
	/** Whether the popover should have a border */
	border?: boolean;
	/** Whether to close the popover when clicking outside */
	closeOnOutsideClick?: boolean;
}
