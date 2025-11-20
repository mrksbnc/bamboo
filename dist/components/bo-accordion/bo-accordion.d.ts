import { ShallowRef } from 'vue';
import { Icon } from '../bo-icon';
export declare enum BoAccordionShape {
    rounded = "rounded",
    square = "square"
}
export interface BoAccordionProps {
    /** The id of the element. */
    id?: string;
    /** The data test id of the element. */
    dataTestId?: string;
    /** The currently open accordion item(s). */
    modelValue?: string | string[];
    /** Whether multiple items can be open at once. */
    multiple?: boolean;
    /** The shape of the accordion items. */
    shape?: BoAccordionShape;
    /** Custom color for the accordion border. */
    borderColor?: string;
    /** Custom color for the accordion background. */
    backgroundColor?: string;
    /** One or multiple css classes to be used for overriding the default styles on the element. */
    customCssClass?: string;
}
export interface BoAccordionItemProps {
    /** The id of the accordion item. */
    id: string;
    /** The data test id of the accordion item. */
    dataTestId?: string;
    /** Title of the accordion header. */
    title: string;
    /** The subtitle of the accordion header. */
    subtitle?: string;
    /** The value of the accordion item. */
    value: string;
    /** Whether the item is disabled. */
    disabled?: boolean;
    /** Custom icon. */
    icon?: Icon;
}
export interface BoAccordionContext {
    /** The id of the accordion. */
    id: string;
    /** The currently open accordion items. */
    openItems: ShallowRef<string[]>;
    /** Whether multiple items can be open at once. */
    multiple: boolean;
    /** Function to toggle an accordion item. */
    onToggleItem: (value: string) => void;
}
