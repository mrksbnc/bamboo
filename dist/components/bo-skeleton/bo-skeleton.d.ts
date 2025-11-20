export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'avatar' | 'button';
export type SkeletonAnimation = 'pulse' | 'wave' | 'none';
export interface BoSkeletonProps {
    /** The id of the element. */
    id?: string;
    /** The data test id of the element. */
    dataTestId?: string;
    /** Variant of the skeleton. */
    variant?: SkeletonVariant;
    /** Width of the skeleton. */
    width?: string | number;
    /** Height of the skeleton. */
    height?: string | number;
    /** Number of lines (for text variant). */
    lines?: number;
    /** Animation type: 'pulse', 'wave', or 'none'. */
    animation?: SkeletonAnimation;
    /** One or multiple css classes to be used for overriding the default styles on the element. */
    customCssClass?: string;
}
