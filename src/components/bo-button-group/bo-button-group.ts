import { BoButtonVariant } from '@/components/bo-button';
import { BoSize } from '@/shared';
import type { Component } from 'vue';

export enum BoButtonGroupOrientation {
	horizontal = 'horizontal',
	vertical = 'vertical',
}

export enum BoButtonGroupStyle {
	default = 'default',
	outlined = 'outlined',
	filled = 'filled',
	pill = 'pill',
}

export interface BoButtonGroupProps {
	/**
	 * The variant of the button group.
	 */
	variant?: BoButtonVariant;
	/**
	 * The style of the button group.
	 */
	style?: BoButtonGroupStyle;
	/**
	 * The orientation of the button group.
	 */
	orientation?: BoButtonGroupOrientation;
	/**
	 * The size of the button group.
	 */
	size?: BoSize;
	/**
	 * Whether the button group should take full width.
	 */
	fullWidth?: boolean;
	/**
	 * Custom CSS class to apply to the button group.
	 */
	cssClass?: string;
	/**
	 * The id of the button group.
	 */
	id?: string;
	/**
	 * Whether the buttons are disabled.
	 */
	disabled?: boolean;
	/**
	 * The component to render for each item in the button group.
	 */
	contentComponent?: Component;
	/**
	 * Array of props to pass to each instance of the content component.
	 */
	contentComponentProps?: Record<string, any>[];
}
