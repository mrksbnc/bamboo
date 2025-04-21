import type { Icon } from '@/components/bo-icon';
import type { BoSize } from '@/shared';

export interface BoTimelineItem {
	/**
	 * Title of the timeline item
	 */
	title: string;
	/**
	 * Description or content of the timeline item
	 */
	content: string;
	/**
	 * Optional time/date text for the item
	 */
	time?: string;
	/**
	 * Optional icon to display
	 */
	icon?: Icon;
	/**
	 * Optional avatar image URL
	 */
	avatar?: string;
	/**
	 * Optional icon color/variant
	 */
	iconColor?: BoTimelineIconColor;
}

export interface BoTimelineProps {
	/**
	 * Array of timeline items to display
	 */
	items: BoTimelineItem[];
	/**
	 * Timeline appearance variant
	 */
	variant?: BoTimelineVariant;
	/**
	 * Size of the timeline
	 */
	size?: BoSize;
	/**
	 * Whether to show connecting lines between items
	 */
	showConnector?: boolean;
	/**
	 * Alignment of the timeline
	 */
	align?: BoTimelineAlign;
}

export enum BoTimelineVariant {
	default = 'default',
	icon = 'icon',
	avatar = 'avatar',
}

export enum BoTimelineAlign {
	left = 'left',
	right = 'right',
	center = 'center',
}

export enum BoTimelineIconColor {
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	danger = 'danger',
	warning = 'warning',
	info = 'info',
	light = 'light',
	dark = 'dark',
}
