import { AriaLive } from '../../shared/accessibility';
export declare enum BoModalSize {
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl",
    full = "full"
}
export interface BoModalProps {
    /** The id of the element. */
    id?: string;
    /** The data test id of the element. */
    dataTestId?: string;
    /** Whether the modal is open. */
    modelValue: boolean;
    /** The title of the modal. */
    title?: string;
    /** The size of the modal. */
    size?: BoModalSize;
    /** Whether to show the close button. */
    showClose?: boolean;
    /** Whether clicking the backdrop closes the modal. */
    closeOnBackdrop?: boolean;
    /** Whether pressing Escape closes the modal. */
    closeOnEscape?: boolean;
    /** Whether to prevent body scroll when modal is open. */
    preventBodyScroll?: boolean;
    /** One or multiple css classes to be used for overriding the default styles on the element. */
    customCssClass?: string;
    /** The role of the element. */
    role?: string;
    /** Defines a string value that labels the current element. */
    ariaLabel?: string;
    /** Reference to an element that labels the current element. */
    ariaLabelledBy?: string;
    /** Identifies the element (or elements) that describes the object. */
    ariaDescribedBy?: string;
    /** Indicates that an element will be updated, and describes the types of updates the user agents,
     * assistive technologies, and user can expect from the live region.
     */
    ariaLive?: AriaLive;
}
