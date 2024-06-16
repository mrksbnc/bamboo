<template>
	<span
		class="bo-badge"
		:class="classes"
	>
		<span v-if="prefixIcon !== Icon.none">
			<bo-icon
				:icon="prefixIcon"
				:size="size"
			/>
		</span>
		<span
			v-if="rederLabel"
			class="bo-badge__label"
		>
			{{ label }}
		</span>
		<span v-if="suffixIcon !== Icon.none">
			<bo-icon
				:icon="suffixIcon"
				:size="size"
			/>
		</span>
	</span>
</template>

<script setup lang="ts">
import { computed, toRefs, type PropType } from 'vue';
import {
	BoBadgeBorderRadiusClasses,
	BoBadgeFilledColorClasses,
	BoBadgeOutlineColorClasses,
	BoBadgePaddingClasses,
	BoBadgeShadowClasses,
	BoBadgeShape,
	BoBadgeSizeClasses,
	BoBadgeTextSizeClasses,
	BoBadgeType,
	BoBadgeVariant,
} from './bo_badge';
import { Icon, BoIcon } from '@/components/bo_icon';
import { TailwindUtils, StringUtils } from '@/utils';
import { BoSize } from '@/global';

const props = defineProps({
	label: {
		type: String,
		default: '',
	},
	type: {
		type: String as PropType<BoBadgeType>,
		default: () => BoBadgeType.default,
	},
	size: {
		type: String as PropType<BoSize>,
		default: () => BoSize.default,
	},
	shape: {
		type: String as PropType<BoBadgeShape>,
		default: () => BoBadgeShape.default,
	},
	variant: {
		type: String as PropType<BoBadgeVariant>,
		default: () => BoBadgeVariant.primary,
	},
	prefixIcon: {
		type: String as PropType<Icon>,
		default: () => Icon.none,
	},
	suffixIcon: {
		type: String as PropType<Icon>,
		default: () => Icon.none,
	},
});

const { label, type, size, variant, shape, prefixIcon, suffixIcon } =
	toRefs(props);

const rederLabel = computed<boolean>(() => {
	return !StringUtils.isEmpty(label.value);
});

const colorClasses = computed<string>(() => {
	switch (type.value) {
		case BoBadgeType.outline:
			return TailwindUtils.merge(BoBadgeOutlineColorClasses[variant.value]);
		case BoBadgeType.default:
		default:
			return TailwindUtils.merge(BoBadgeFilledColorClasses[variant.value]);
	}
});

const paddingClasses = computed<string>(() => {
	return BoBadgePaddingClasses[size.value];
});

const borderRadiusClasses = computed<string>(() => {
	return BoBadgeBorderRadiusClasses[shape.value];
});

const shadowClasses = computed<string>(() => {
	return BoBadgeShadowClasses[variant.value];
});

const fontSizeClasses = computed<string>(() => {
	return BoBadgeTextSizeClasses[size.value];
});

const heightClasses = computed<string>(() => {
	return BoBadgeSizeClasses[size.value];
});

const classes = computed<string>(() => {
	return TailwindUtils.merge(
		/*tw*/ 'inline-flex gap-2 items-center justify-center',
		colorClasses.value,
		shadowClasses.value,
		heightClasses.value,
		paddingClasses.value,
		fontSizeClasses.value,
		borderRadiusClasses.value,
	);
});
</script>
