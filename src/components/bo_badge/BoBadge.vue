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
		<bo-text
			v-if="rederLabel"
			:text="label"
			:size="fontSize"
			:weight="BoFontWeight.medium"
		/>
		<span v-if="suffixIcon !== Icon.none">
			<bo-icon
				:icon="suffixIcon"
				:size="size"
			/>
		</span>
	</span>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, toRefs } from 'vue';
import {
	BoBadgeBorderRadiusClasses,
	BoBadgeCirclePaddingClasses,
	BoBadgeCircleSizeClasses,
	BoBadgeFilledColorClasses,
	BoBadgeOutlineColorClasses,
	BoBadgePaddingClasses,
	BoBadgeShadowClasses,
	BoBadgeShape,
	BoBadgeSizeClasses,
	BoBadgeTextSizeClasses,
	BoBadgeType,
} from './bo_badge';
import { Icon, BoIcon } from '@/components/bo_icon';
import { TailwindUtils, StringUtils } from '@/utils';
import { BoSize, BoVariant } from '@/global';
import { BoFontSize, BoFontWeight, BoText } from '@/components/bo_text';
import type { BoBadgeComponentProps } from './bo_badge.type';

const props = withDefaults(defineProps<BoBadgeComponentProps>(), {
	label: '',
	size: () => BoSize.default,
	type: () => BoBadgeType.default,
	shape: () => BoBadgeShape.default,
	variant: () => BoVariant.primary,
	prefixIcon: () => Icon.none,
	suffixIcon: () => Icon.none,
});

const { label, type, size, variant, shape, prefixIcon, suffixIcon } =
	toRefs(props);

const defaultClasses: string =
	/*tw*/ 'inline-flex gap-2 items-center justify-center select-none';

const rederLabel = computed<boolean>(() => {
	return label.value != null && !StringUtils.isEmpty(label.value);
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
	if (shape.value === BoBadgeShape.circle) {
		return BoBadgeCirclePaddingClasses[size.value];
	}

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

const sizeClasses = computed<string>(() => {
	if (shape.value === BoBadgeShape.circle) {
		return BoBadgeCircleSizeClasses[size.value];
	}

	return BoBadgeSizeClasses[size.value];
});

const classes = computed<string>(() => {
	return TailwindUtils.merge(
		defaultClasses,
		colorClasses.value,
		shadowClasses.value,
		sizeClasses.value,
		paddingClasses.value,
		fontSizeClasses.value,
		borderRadiusClasses.value,
	);
});

const fontSize = computed<BoFontSize>(() => {
	switch (size.value) {
		case BoSize.small:
			return BoFontSize.caption;
		case BoSize.default:
		default:
			return BoFontSize.default;
		case BoSize.large:
			return BoFontSize.h6;
	}
});

const validateProps = (): void => {
	if (
		(label.value == null || StringUtils.isEmpty(label.value)) &&
		(prefixIcon.value == null || prefixIcon.value === Icon.none) &&
		(suffixIcon.value == null || suffixIcon.value === Icon.none)
	) {
		throw new Error(
			'At least one of the label, prefixIcon or suffixIcon props must be provided',
		);
	}

	if (
		shape.value === BoBadgeShape.circle &&
		label.value != null &&
		!StringUtils.isEmpty(label.value)
	) {
		throw new Error(
			'The label prop is not allowed when the shape prop is set to circle',
		);
	}

	if (
		shape.value === BoBadgeShape.circle &&
		prefixIcon.value != null &&
		prefixIcon.value === Icon.none &&
		suffixIcon.value != null &&
		suffixIcon.value === Icon.none
	) {
		throw new Error(
			'At least one of the prefixIcon or suffixIcon props must be provided when the shape prop is set to circle',
		);
	}
};

onBeforeMount(validateProps);
</script>
