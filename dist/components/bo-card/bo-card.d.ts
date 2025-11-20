export interface BoCardProps {
    /** The id of the element. */
    id?: string;
    /** The data test id of the element. */
    dataTestId?: string;
    /** Card title. */
    title?: string;
    /** Card subtitle. */
    subtitle?: string;
    /** Whether the card is hoverable. */
    hoverable?: boolean;
    /** Whether the card is clickable. */
    clickable?: boolean;
    /** Whether the card is compact (reduced padding). */
    compact?: boolean;
    /** Whether the card has a side layout (image on side). */
    side?: boolean;
    /** Whether the card has bordered style. */
    bordered?: boolean;
    /** Whether the card has a glass effect. */
    glass?: boolean;
    /** One or multiple css classes to be used for overriding the default styles on the element. */
    customCssClass?: string;
}
