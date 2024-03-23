import type {
	BoBadgeSize,
	BoBadgeType,
	BoBadgeVariant,
} from '@/components/BoBadge';
import type { Icon } from '@/components/BoIcon';
import type { BoSize } from '@/constants';
import type { Ref } from 'vue';

export declare type BoBadgeIcon = {
	icon: Icon;
	circle: boolean;
	prefix: boolean;
	suffix: boolean;
};

export declare type UseBoBadgeComposableArgs = {
	label: Ref<string>;
	variant: Ref<BoBadgeVariant>;
	size: Ref<BoBadgeSize>;
	type: Ref<BoBadgeType>;
	icon: Ref<BoBadgeIcon> | Ref<null>;
};

export declare type UseBoBadgeComposableReturn = {
	isCircle: boolean;
	hasLabel: boolean;
	showLabel: boolean;
	iconOnly: boolean;
	hasPrefixIcon: boolean;
	hasSuffixIcon: boolean;
	classes: string;
	iconSize: BoSize;
	iconProps: BoBadgeIcon;
};
