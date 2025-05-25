<template>
	<span
		role="status"
		:id="id"
		:class="badgeContainerClasses"
		:aria-label="ariaLabel"
		:data-testid="constructAttribute(id, 'badge')"
	>
		<bo-icon
			v-if="renderPrefixIcon"
			:size="boBadgeIconSize"
			:icon="prefixOrIconOnlySrc"
			:class="BADGE_STYLE.layout.prefixIcon"
			:data-testid="constructAttribute(id, 'badge-prefix-icon')"
		/>
		<slot name="default">
			<span
				v-if="renderLabel && label && !iconOnly && !isCircle"
				:class="BADGE_STYLE.layout.label"
				:data-testid="constructAttribute(id, 'badge-label')"
			>
				<bo-text
					:value="label"
					:size="badgeFontSize"
					:weight="BoFontWeight.semibold"
					:color="BoTextColor.current"
				/>
			</span>
		</slot>
		<bo-icon
			v-if="icon?.suffix && renderSuffixIcon"
			:icon="icon.suffix"
			:size="boBadgeIconSize"
			:class="BADGE_STYLE.layout.suffixIcon"
			:data-testid="constructAttribute(id, 'badge-suffix-icon')"
		/>
	</span>
</template>

<script setup lang="ts">
import { Icon } from '@/components/icon/bo-icon.js';
import BoIcon from '@/components/icon/bo-icon.vue';
import { BoFontSize, BoFontWeight, BoTextColor } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { useAttributes } from '@/composables/use-attributes';
import { IdentityService } from '@/services/identity-service.js';
import { StringService } from '@/services/string-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { computed } from 'vue';
import { BoBadgeShape, BoBadgeType, BoBadgeVariant, type BoBadgeProps } from './bo-badge';

const props = withDefaults(defineProps<BoBadgeProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	type: () => BoBadgeType.default,
	size: () => BoSize.default,
	shape: () => BoBadgeShape.default,
	variant: () => BoBadgeVariant.primary,
	icon: () => ({
		prefix: Icon.none,
		suffix: Icon.none,
	}),
});

const { constructAttribute } = useAttributes();

const slots = defineSlots<{
	default?: unknown;
}>();

const BADGE_STYLE = {
	layout: {
		container:
			/*tw*/ 'bo-badge flex max-h-fit items-center justify-center text-center select-none gap-1.5',
		prefixIcon: /*tw*/ 'bo-badge__prefix-icon',
		suffixIcon: /*tw*/ 'bo-badge__suffix-icon',
		label: /*tw*/ 'bo-badge__label flex items-center justify-center',
	},
	shape: {
		[BoBadgeShape.default]: /*tw*/ 'bo-badge--default rounded-md',
		[BoBadgeShape.circle]: /*tw*/ 'bo-badge--circle rounded-full',
		[BoBadgeShape.pill]: /*tw*/ 'bo-badge--pill rounded-full',
		[BoBadgeShape.flat]: /*tw*/ 'bo-badge--flat rounded-none',
	},
	interactive: {
		default: /*tw*/ 'cursor-default',
	},
	appearance: {
		shadow: /*tw*/ 'shadow-sm hover:shadow',
		noShadow: /*tw*/ 'shadow-none',
	},
	size: {
		container: {
			[BoSize.extra_small]: /*tw*/ 'bo-badge--extra-small px-1 py-0 text-xs',
			[BoSize.small]: /*tw*/ 'bo-badge--small px-1.5 py-0.5 text-xs',
			[BoSize.default]: /*tw*/ 'bo-badge--default px-2 py-1 text-sm',
			[BoSize.large]: /*tw*/ 'bo-badge--large px-2.5 py-1 text-sm',
			[BoSize.extra_large]: /*tw*/ 'bo-badge--extra-large px-3 py-1.5 text-base',
		},
		circle: {
			[BoSize.extra_small]: /*tw*/ 'p-0',
			[BoSize.small]: /*tw*/ 'p-0.5',
			[BoSize.default]: /*tw*/ 'p-1',
			[BoSize.large]: /*tw*/ 'p-1',
			[BoSize.extra_large]: /*tw*/ 'p-1.5',
		},
	},
	variant: {
		[BoBadgeType.default]: {
			[BoBadgeVariant.primary]:
				/*tw*/ 'bo-badge--primary bg-blue-600 text-white border border-blue-600 dark:bg-blue-700 dark:text-white',
			[BoBadgeVariant.secondary]:
				/*tw*/ 'bo-badge--secondary bg-neutral-600 text-white border border-neutral-600 dark:bg-neutral-700 dark:text-white',
			[BoBadgeVariant.danger]:
				/*tw*/ 'bo-badge--danger bg-red-600 text-white border border-red-600 dark:bg-red-700 dark:text-white',
			[BoBadgeVariant.warning]:
				/*tw*/ 'bo-badge--warning bg-yellow-500 text-white border border-yellow-500 dark:bg-yellow-600 dark:text-white',
			[BoBadgeVariant.success]:
				/*tw*/ 'bo-badge--success bg-green-600 text-white border border-green-600 dark:bg-green-700 dark:text-white',
			[BoBadgeVariant.light]:
				/*tw*/ 'bo-badge--light bg-neutral-100 text-neutral-800 border border-neutral-100 dark:bg-neutral-200 dark:border-neutral-200 dark:text-neutral-800',
			[BoBadgeVariant.dark]:
				/*tw*/ 'bo-badge--dark bg-neutral-800 text-white border border-neutral-800 dark:bg-black dark:text-white',
		},
		[BoBadgeType.outline]: {
			[BoBadgeVariant.primary]:
				/*tw*/ 'bo-badge--outline bo-badge--primary bg-transparent border border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500',
			[BoBadgeVariant.secondary]:
				/*tw*/ 'bo-badge--outline bo-badge--secondary bg-transparent border border-neutral-600 text-neutral-600 dark:border-neutral-500 dark:text-neutral-500',
			[BoBadgeVariant.danger]:
				/*tw*/ 'bo-badge--outline bo-badge--danger bg-transparent border border-red-600 text-red-600 dark:border-red-500 dark:text-red-500',
			[BoBadgeVariant.warning]:
				/*tw*/ 'bo-badge--outline bo-badge--warning bg-transparent border border-yellow-600 text-yellow-600 dark:border-yellow-500 dark:text-yellow-500',
			[BoBadgeVariant.success]:
				/*tw*/ 'bo-badge--outline bo-badge--success bg-transparent border border-green-600 text-green-600 dark:border-green-500 dark:text-green-500',
			[BoBadgeVariant.light]:
				/*tw*/ 'bo-badge--outline bo-badge--light bg-transparent border border-neutral-500 text-neutral-500 dark:border-neutral-500 dark:text-neutral-400',
			[BoBadgeVariant.dark]:
				/*tw*/ 'bo-badge--outline bo-badge--dark bg-transparent border border-black text-black dark:border-white dark:text-white',
		},
	},
} as const;

const iconOnly = computed<boolean>(() => {
	return (
		(props.icon?.prefix !== Icon.none || props.icon?.suffix !== Icon.none) &&
		StringService.instance.isEmptyStr(props.label)
	);
});

const prefixOrIconOnlySrc = computed<Icon>(() => {
	if (iconOnly.value) {
		return props.icon?.prefix ?? props.icon?.suffix ?? Icon.none;
	}

	return props.icon?.prefix ?? Icon.none;
});

const isCircle = computed<boolean>(() => {
	return props.shape === BoBadgeShape.circle && iconOnly.value;
});

const renderPrefixIcon = computed<boolean>(() => {
	return (
		(!StringService.instance.isEmptyStr(props.icon?.prefix) && props.icon.prefix !== Icon.none) ||
		iconOnly.value ||
		isCircle.value
	);
});

const renderSuffixIcon = computed<boolean>(() => {
	return !StringService.instance.isEmptyStr(props.icon?.suffix) && props.icon.suffix !== Icon.none;
});

const renderLabel = computed<boolean>(() => {
	return !StringService.instance.isEmptyStr(props.label) && !iconOnly.value;
});

const ariaLabel = computed<string>(() => {
	if (props.label) {
		return `Badge: ${props.label}`;
	}

	if (iconOnly.value) {
		return 'Badge with icon';
	}

	return 'Badge';
});

const boBadgeVariantClasses = computed<string>(() => {
	return BADGE_STYLE.variant[props.type][props.variant];
});

const boBadgeSizeClasses = computed<string>(() => {
	if (props.shape === BoBadgeShape.circle) {
		return BADGE_STYLE.size.circle[props.size];
	}

	return BADGE_STYLE.size.container[props.size];
});

const badgeContainerClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		boBadgeSizeClasses.value,
		boBadgeVariantClasses.value,
		BADGE_STYLE.layout.container,
		BADGE_STYLE.appearance.shadow,
		BADGE_STYLE.shape[props.shape],
		BADGE_STYLE.interactive.default,
	);
});

const badgeFontSize = computed<BoFontSize>(() => {
	switch (props.size) {
		case BoSize.extra_small:
		case BoSize.small:
		case BoSize.default:
		default:
			return BoFontSize.xs;
		case BoSize.large:
			return BoFontSize.base;
		case BoSize.extra_large:
			return BoFontSize.lg;
	}
});

const boBadgeIconSize = computed<BoSize>(() => {
	switch (props.size) {
		case BoSize.extra_small:
		case BoSize.small:
			return BoSize.small;
		case BoSize.default:
		default:
			return BoSize.default;
		case BoSize.large:
		case BoSize.extra_large:
			return BoSize.large;
	}
});
</script>
