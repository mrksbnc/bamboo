import { Icon } from '../bo-icon';
import { BoVariant } from '../../shared/variant';
export declare enum BoToastPosition {
    topLeft = "top-left",
    topCenter = "top-center",
    topRight = "top-right",
    bottomLeft = "bottom-left",
    bottomCenter = "bottom-center",
    bottomRight = "bottom-right"
}
export interface BoToastProps {
    /** The id of the element. */
    id?: string;
    /** The data test id of the element. */
    dataTestId?: string;
    /** The variant of the toast. */
    variant?: BoVariant;
    /** The title of the toast. */
    title?: string;
    /** The message content of the toast. */
    message: string;
    /** Whether the toast can be dismissed. */
    dismissible?: boolean;
    /** Custom icon to display. */
    icon?: Icon;
    /** Whether to show the default icon. */
    showIcon?: boolean;
    /** Duration in milliseconds before auto-dismiss (0 = no auto-dismiss). */
    duration?: number;
    /** Position of the toast. */
    position?: BoToastPosition;
    /** One or multiple css classes to be used for overriding the default styles on the element. */
    customCssClass?: string;
    /** Defines a string value that labels the current element. */
    ariaLabel?: string;
    /** The role of the element. */
    role?: string;
}
