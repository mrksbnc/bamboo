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
				{{ label }}
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
import { BoIcon, Icon } from '@/components/BoIcon';
import { BoSize } from '@/constants';
import { computed, toRef, toRefs, type PropType } from 'vue';
import {
	BoBadgeType,
	BoBadgeSize,
	type BoBadgeIcon,
	useBoBadgeStyle,
	BoBadgeVariant,
} from '@/components/BoBadge';
import { StringUtils } from '@/utils/string_utils';

const props = defineProps({
	label: {
		type: String,
		default: null,
	},
	variant: {
		type: String as PropType<BoBadgeVariant>,
		default: BoBadgeVariant.blue,
	},
	size: {
		type: String as PropType<BoBadgeSize>,
		default: BoBadgeSize.default,
	},
	type: {
		type: String as PropType<BoBadgeType>,
		default: BoBadgeType.default,
	},
	icon: {
		type: Object as PropType<BoBadgeIcon>,
		default: null,
	},
});

const classes = computed<string>(() => useBoBadgeStyle(toRefs(props)).classes);

const iconSize = computed<BoSize>(
	() => useBoBadgeStyle(toRefs(props)).iconSize,
);

const iconOnly = computed<boolean>(
	() => useBoBadgeStyle(toRefs(props)).iconOnly,
);

const iconProps = computed<BoBadgeIcon>(
	() => useBoBadgeStyle(toRefs(props)).iconProps,
);

const isCircle = computed<boolean>(
	() => useBoBadgeStyle(toRefs(props)).isCircle,
);

const hasLabel = computed<boolean>(
	() => useBoBadgeStyle(toRefs(props)).hasLabel,
);

const showLabel = computed<boolean>(
	() => useBoBadgeStyle(toRefs(props)).showLabel,
);

const hasPrefixIcon = computed<boolean>(
	() => useBoBadgeStyle(toRefs(props)).hasPrefixIcon,
);

const hasSuffixIcon = computed<boolean>(
	() => useBoBadgeStyle(toRefs(props)).hasSuffixIcon,
);
</script>
