import { Icon } from '../bo-icon';
import { AriaLive } from '../../shared/accessibility';
export interface BoDropdownOption {
    /** The label of the option */
    label: string;
    /** The value of the option */
    value: string;
    /** Optional subtitle for the option */
    subtitle?: string;
    /** Whether the option is disabled */
    disabled?: boolean;
    /** Optional icon for the option */
    icon?: Icon;
}
export interface BoDropdownProps {
    /** The id of the element. */
    id?: string;
    /** The data test id of the element. */
    dataTestId?: string;
    /** Whether the dropdown is disabled. */
    disabled?: boolean;
    /** The placeholder text when no option is selected. */
    placeholder?: string;
    /** The currently selected value (single select) or values (multiselect) */
    modelValue?: string | string[];
    /** The list of options */
    options: BoDropdownOption[];
    /** Icon to display in the trigger button */
    icon?: Icon;
    /** Enable multiselect mode */
    multiselect?: boolean;
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
    /** Tab index of the element. */
    tabIndex?: number;
}
