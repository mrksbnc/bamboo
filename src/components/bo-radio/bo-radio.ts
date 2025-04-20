import { BoSize } from '@/shared';

export interface BoRadioProps {
	/**
	 * The ID for the radio button
	 */
	id?: string;
	/**
	 * The text to display for the radio button
	 */
	text?: string;
	/**
	 * The description text to display below the radio button
	 */
	description?: string;
	/**
	 * Whether the radio button is disabled
	 */
	disabled?: boolean;
	/**
	 * The size of the radio button
	 */
	size?: BoSize;
	/**
	 * The name attribute for the radio input
	 */
	name?: string;
}
