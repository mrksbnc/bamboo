import { BoButtonVariant } from '@/components/button/bo-button.js';
import { Icon } from '@/components/icon/bo-icon.js';
import { BoSize } from '@/shared';

export enum BoModalSize {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
	xxl = 'xxl',
}

export enum FooterButtonOrientation {
	horizontal = 'horizontal',
	vertical = 'vertical',
}

export interface BoModalFooter {
	/** Unique id for the button */
	id?: string;
	/** The label of the button */
	label: string;
	/** The variant of the button */
	variant?: BoButtonVariant;
	/** The size of the button */
	size?: BoSize;
	/** The icon of the button */
	icon?: Icon;
	/** Whether the button is disabled */
	disabled?: boolean;
	/** Whether the button is loading */
	isLoading?: boolean;
	/** Whether the button is full width */
	fullWidth?: boolean;
	/** The action to perform when the button is clicked */
	onClick?: () => void;
}

export interface BoModalProps {
	/** Unique id for the modal */
	id?: string;
	/** Whether the modal is open */
	isOpen?: boolean;
	/** The title of the modal */
	title?: string;
	/** The description of the modal */
	description?: string;
	/** The text content of the modal */
	content?: string;
	/** Whether to show the close button */
	showCloseButton?: boolean;
	/** The size of the modal dialog */
	size?: BoModalSize;
	/** Whether to close the modal when clicking outside of its bounds */
	closeOnBackdropClick?: boolean;
	/** Footer buttons to display in the modal */
	footerButtons?: BoModalFooter[];
	/** The orientation of the buttons */
	footerButtonOrientation?: FooterButtonOrientation;
}
