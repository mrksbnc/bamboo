import { BoSize } from '../../shared/size';
import { BoVariant } from '../../shared/variant';
export interface BoProgressProps {
    /** The id of the element. */
    id?: string;
    /** The data test id of the element. */
    dataTestId?: string;
    /** Progress value (0-100). */
    value?: number;
    /** Maximum value (default 100). */
    max?: number;
    /** Label for the progress bar. */
    label?: string;
    /** Whether to show the value. */
    showValue?: boolean;
    /** Whether to show the value inside the bar. */
    showValueInside?: boolean;
    /** Size of the progress bar. */
    size?: BoSize;
    /** Variant of the progress bar. */
    variant?: BoVariant;
    /** Whether the progress is indeterminate (loading animation). */
    indeterminate?: boolean;
    /** One or multiple css classes to be used for overriding the default styles on the element. */
    customCssClass?: string;
    /** Defines a string value that labels the current element. */
    ariaLabel?: string;
}
