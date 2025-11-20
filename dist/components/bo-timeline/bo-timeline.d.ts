import { Icon } from '../bo-icon';
import { BoVariant } from '../../shared/variant';
export type TimelineOrientation = 'vertical' | 'horizontal';
export type TimelinePosition = 'start' | 'end' | 'alternate';
export interface BoTimelineProps {
    /** The id of the element. */
    id?: string;
    /** The data test id of the element. */
    dataTestId?: string;
    /** Orientation of the timeline. */
    orientation?: TimelineOrientation;
    /** Position of content relative to the line. */
    position?: TimelinePosition;
    /** Whether to show connecting line. */
    showLine?: boolean;
    /** One or multiple css classes to be used for overriding the default styles on the element. */
    customCssClass?: string;
}
export interface BoTimelineItemProps {
    /** Title of the timeline item. */
    title?: string;
    /** Description of the timeline item. */
    description?: string;
    /** Timestamp or date. */
    timestamp?: string;
    /** Icon to display. */
    icon?: Icon;
    /** Variant color. */
    variant?: BoVariant;
    /** Custom color for the timeline marker (CSS variable, hex, rgb, rgba). */
    customColor?: string;
    /** Whether this is the start of the timeline. */
    isStart?: boolean;
    /** Whether this is the end of the timeline. */
    isEnd?: boolean;
}
