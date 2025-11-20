export type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right';
export type PopoverTrigger = 'click' | 'hover' | 'focus';

export interface BoPopoverProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** Placement of the popover. */
	placement?: PopoverPlacement;
	/** Trigger type. */
	trigger?: PopoverTrigger;
	/** Title of the popover. */
	title?: string;
	/** Content of the popover. */
	content?: string;
	/** Whether the popover is open. */
	modelValue?: boolean;
	/** One or multiple css classes to be used for overriding the default styles on the element. */
	customCssClass?: string;
}
