import { AriaLive } from '../../shared/accessibility';
export interface BoTooltipProps {
    /** The id of the element. */
    id?: string;
    /** The data test id of the element. */
    dataTestId?: string;
    /** The tooltip content text */
    content?: string;
    /** Position of the tooltip relative to the trigger element */
    position?: 'top' | 'bottom' | 'left' | 'right';
    /** Delay in milliseconds before showing the tooltip */
    delay?: number;
    /** Whether the tooltip is disabled */
    disabled?: boolean;
    /** Custom component to render in tooltip */
    customComponent?: any;
    /** Props to pass to custom component */
    customProps?: Record<string, any>;
    /** One or multiple css classes to be used for overriding the default styles on the element. */
    customCssClass?: string;
    /** The role of the element. */
    role?: string;
    /** Defines a string value that labels the current element. */
    ariaLabel?: string;
    /** Indicates that an element will be updated. */
    ariaLive?: AriaLive;
}
