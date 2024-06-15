import type { Icon } from '@/components/BoIcon';

export declare type BoBadgeIcon = {
	iconOnly?: boolean;
	icon?: Icon;
	/**
	 * Will be applied if `iconOnly` is `true`
	 */
	circle?: boolean;
	prefix?: Icon;
	suffix?: Icon;
};

export enum BoBadgeType {
	default = 'default',
	pill = 'pill',
	outline = 'outline',
}

export enum BoBadgeSize {
	default = 'default',
	large = 'large',
}
