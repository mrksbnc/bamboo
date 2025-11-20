import { BoVariant } from '@/shared/variant';

export interface BoAlertProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** The variant of the alert. */
	variant?: BoVariant;
	/** The title of the alert. */
	title?: string;
	/** The message content of the alert. */
	message?: string;
	/** Whether the alert can be dismissed. */
	dismissible?: boolean;
	/** Whether to show the default icon. */
	showIcon?: boolean;
	/** One or multiple css classes to be used for overriding the default styles on the element. */
	customCssClass?: string;
	/** Defines a string value that labels the current element. */
	ariaLabel?: string;
	/** The role of the element. */
	role?: string;
	/** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
	ariaLive?: 'assertive' | 'polite' | 'off';
	/** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
	ariaAtomic?: boolean;
	/** Aria label for the close button. */
	closeAriaLabel?: string;
}
