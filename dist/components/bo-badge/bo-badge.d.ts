import { Icon } from '../bo-icon';
import { BoSize } from '../../shared/size';
import { BoVariant } from '../../shared/variant';
export interface BoBadgeProps {
    /** The id of the element. */
    id?: string;
    /** The data test id of the element. */
    dataTestId?: string;
    /** The size of the badge. */
    size?: BoSize;
    /** The variant of the badge. */
    variant?: BoVariant;
    /** The text content of the badge. */
    label?: string;
    /** Whether to show a dot indicator. */
    showDot?: boolean;
    /** The prefix icon to render */
    prefixIcon?: Icon;
    /** The suffix icon to render */
    suffixIcon?: Icon;
    /** Custom color for the badge background (CSS variable, hex, rgb, rgba). */
    customColor?: string;
    /** Badge style: 'default' | 'outline' | 'ghost' */
    badgeStyle?: 'default' | 'outline' | 'ghost';
    /** Whether the badge is neutral (gray) */
    neutral?: boolean;
    /** Whether the badge is responsive (smaller on mobile) */
    responsive?: boolean;
    /** One or multiple css classes to be used for overriding the default styles on the element. */
    customCssClass?: string;
    /** The role of the element. */
    role?: string;
    /** Defines a string value that labels the current element. */
    ariaLabel?: string;
}
