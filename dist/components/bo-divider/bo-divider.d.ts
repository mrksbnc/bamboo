export type DividerOrientation = 'horizontal' | 'vertical';
export interface BoDividerProps {
    /** The id of the element. */
    id?: string;
    /** The data test id of the element. */
    dataTestId?: string;
    /** Orientation of the divider. */
    orientation?: DividerOrientation;
    /** Text to display in the divider. */
    text?: string;
    /** One or multiple css classes to be used for overriding the default styles on the element. */
    customCssClass?: string;
}
