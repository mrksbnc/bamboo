import { BoSize } from '../../shared/size';
import { BoVariant } from '../../shared/variant';
export interface BoRadialProgressProps {
    /** The id of the element. */
    id?: string;
    /** The data test id of the element. */
    dataTestId?: string;
    /** The progress value (0-100). */
    value: number;
    /** The size of the radial progress. */
    size?: BoSize;
    /** The variant/color of the progress. */
    variant?: BoVariant;
    /** Custom color for the progress (CSS variable, hex, rgb, rgba). */
    customColor?: string;
    /** Thickness of the progress ring. */
    thickness?: number;
    /** Whether to show the percentage text. */
    showValue?: boolean;
    /** Custom text to display instead of percentage. */
    customText?: string;
    /** One or multiple css classes to be used for overriding the default styles on the element. */
    customCssClass?: string;
    /** The role of the element. */
    role?: string;
    /** Defines a string value that labels the current element. */
    ariaLabel?: string;
}
