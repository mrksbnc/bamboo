import { AriaLive } from '../../shared/accessibility';
export declare enum BoRadioSize {
    sm = "sm",
    md = "md",
    lg = "lg"
}
export interface BoRadioProps {
    /** The id of the element. */
    id?: string;
    /** The data test id of the element. */
    dataTestId?: string;
    /** The name attribute of the radio. */
    name?: string;
    /** The value of the radio. */
    value: string | number;
    /** The size of the radio. */
    size?: BoRadioSize;
    /** Whether the radio is disabled. */
    disabled?: boolean;
    /** The label text for the radio. */
    label?: string;
    /** Helper text displayed below the radio. */
    helperText?: string;
    /** One or multiple css classes to be used for overriding the default styles on the element. */
    customCssClass?: string;
    /** Defines a string value that labels the current element. */
    ariaLabel?: string;
    /** Reference to an element that labels the current element. */
    ariaLabelledBy?: string;
    /** Identifies the element (or elements) that describes the object. */
    ariaDescribedBy?: string;
    /** Indicates that an element will be updated. */
    ariaLive?: AriaLive;
    /** Tab index of the element. */
    tabIndex?: number;
}
export interface BoRadioGroupProps {
    /** The id of the element. */
    id?: string;
    /** The data test id of the element. */
    dataTestId?: string;
    /** The name attribute for all radios in the group. */
    name?: string;
    /** The size of all radios in the group. */
    size?: BoRadioSize;
    /** Whether all radios in the group are disabled. */
    disabled?: boolean;
    /** The label text for the radio group. */
    label?: string;
    /** Helper text displayed below the radio group. */
    helperText?: string;
    /** Error message displayed when there's an error. */
    errorText?: string;
    /** Whether the radio group has an error. */
    hasError?: boolean;
    /** Whether the radio group is required. */
    required?: boolean;
    /** Direction of radio buttons. */
    direction?: 'horizontal' | 'vertical';
    /** One or multiple css classes to be used for overriding the default styles on the element. */
    customCssClass?: string;
    /** Defines a string value that labels the current element. */
    ariaLabel?: string;
    /** Reference to an element that labels the current element. */
    ariaLabelledBy?: string;
    /** Identifies the element (or elements) that describes the object. */
    ariaDescribedBy?: string;
}
