export type SidePanelPosition = 'left' | 'right';

export enum BoSidePanelShape {
	Rounded = 'rounded',
	Square = 'square',
}

export interface BoSidePanelProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** Whether the side panel is open. */
	modelValue?: boolean;
	/** Position of the side panel. */
	position?: SidePanelPosition;
	/** Width of the side panel. */
	width?: string | number;
	/** Title of the side panel. */
	title?: string;
	/** Shape of the side panel. Rounded creates a floating panel with rounded borders offset from the side. */
	shape?: BoSidePanelShape;
	/** One or multiple css classes to be used for overriding the default styles on the element. */
	customCssClass?: string;
}
