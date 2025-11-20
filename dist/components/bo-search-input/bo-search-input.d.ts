import { BoInputSize } from '../bo-input';
export interface BoSearchInputProps {
    /** The id of the element. */
    id?: string;
    /** The data test id of the element. */
    dataTestId?: string;
    /** The placeholder text. */
    placeholder?: string;
    /** The size of the input. */
    size?: BoInputSize;
    /** Whether the input is disabled. */
    disabled?: boolean;
    /** Action button text (renders button inside input). */
    actionText?: string;
    /** Whether the action button is disabled. */
    actionDisabled?: boolean;
    /** One or multiple css classes to be used for overriding the default styles on the form wrapper. */
    customCssClass?: string;
}
