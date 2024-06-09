<template>
	<div
		class="bo-badge"
		:class="[`badge-${variant}`, classes]"
	>
		<bo-icon
			v-if="hasPrefixIcon && !$slots.prefix"
			:size="iconSize"
			:icon="iconProps.icon"
			class="bo-bade__icon-prefix"
		/>
		<div
			v-else
			class="bo-badge__prefix-slot"
		>
			<slot name="prefix"></slot>
		</div>

		<div>
			<p
				v-if="showLabel"
				class="bo-badge__label"
			>
				{{ value }}
			</p>
			<div v-if="iconOnly">
				<bo-icon
					:size="iconSize"
					:icon="iconProps.icon"
					class="bo-bade__icon-only"
				/>
			</div>
		</div>
		<bo-icon
			v-if="hasSuffixIcon && !$slots.suffix"
			:size="iconSize"
			:icon="iconProps.icon"
			class="bo-bade__icon-suffix"
		/>
		<div v-else>
			<slot name="suffix"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoIcon } from '@/components/BoIcon';
import { BoSize } from '@/constants';
import { computed, toRefs, type PropType } from 'vue';
import {
	BoBadgeType,
	BoBadgeSize,
	type BoBadgeIcon,
	useBoBadge,
	BoBadgeVariant,
} from '@/components/BoBadge';

const props = defineProps({
	value: {
		type: String,
		default: null,
	},
	variant: {
		type: String as PropType<BoBadgeVariant>,
		default: () => BoBadgeVariant.blue,
	},
	size: {
		type: String as PropType<BoBadgeSize>,
		default: () => BoBadgeSize.default,
	},
	type: {
		type: String as PropType<BoBadgeType>,
		default: () => BoBadgeType.default,
	},
	icon: {
		type: Object as PropType<BoBadgeIcon | null>,
		default: null,
	},
});

const classes = computed<string>(() => useBoBadge(toRefs(props)).classes);

const iconSize = computed<BoSize>(() => useBoBadge(toRefs(props)).iconSize);

const iconOnly = computed<boolean>(() => useBoBadge(toRefs(props)).iconOnly);

const iconProps = computed<BoBadgeIcon>(
	() => useBoBadge(toRefs(props)).iconProps,
);

const showLabel = computed<boolean>(() => useBoBadge(toRefs(props)).showLabel);

const hasPrefixIcon = computed<boolean>(
	() => useBoBadge(toRefs(props)).hasPrefixIcon,
);

const hasSuffixIcon = computed<boolean>(
	() => useBoBadge(toRefs(props)).hasSuffixIcon,
);
</script>
