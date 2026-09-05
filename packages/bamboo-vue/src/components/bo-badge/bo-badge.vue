<template>
	<span
		:id="id"
		:data-testid="dataTestId"
		:class="classValues"
		:style="styleValues"
		:role="role"
		:aria-label="ariaLabel"
	>
		<bo-icon
			v-if="showPrefixIcon"
			:size="BADGE_MANIFEST.styles.iconSize"
			:icon="getSafeIcon(prefixIcon)"
		/>
		<slot>
			<bo-text
				v-if="label && !isCircle"
				:cursor="cursor"
				font-size="xs"
				font-weight="semibold"
				variant="inherit"
			>
				{{ label }}
			</bo-text>
		</slot>
		<bo-icon
			v-if="showSuffixIcon"
			:icon="getSafeIcon(suffixIcon)"
			:size="BADGE_MANIFEST.styles.iconSize"
		/>
	</span>
</template>

<script lang="ts" setup>
import {
	BADGE_MANIFEST,
	generateComponentId,
	generateDataTestId,
	getValidOrFallbackColorFromStr,
	mergeTwClasses,
	type BoBadgeProps,
	type Icon,
} from '@workspace/bamboo-core';
import { computed, type StyleValue } from 'vue';
import { BoIcon } from '../bo-icon';
import { BoText } from '../bo-text';

const props = withDefaults(defineProps<BoBadgeProps>(), {
	id: () => generateComponentId('badge'),
	dataTestId: () => generateDataTestId('badge'),
	kind: () => BADGE_MANIFEST.defaults.kind,
	shape: () => BADGE_MANIFEST.defaults.shape,
	variant: () => BADGE_MANIFEST.defaults.variant,
	cursor: () => BADGE_MANIFEST.defaults.cursor,
});

const isOutlineKind = computed<boolean>(() => props.kind === 'outline');

const isIconOnly = computed<boolean>(() => {
	const hasIcon =
		(props.prefixIcon && props.prefixIcon !== 'none') ||
		(props.suffixIcon && props.suffixIcon !== 'none');

	return !!hasIcon && !props.label;
});

const isCircle = computed<boolean>(() => props.shape === 'circle' && isIconOnly.value);

const showPrefixIcon = computed<boolean>(
	() => (props.prefixIcon && props.prefixIcon !== 'none') || isIconOnly.value || isCircle.value,
);

const showSuffixIcon = computed<boolean>(
	() => !!props.suffixIcon && props.suffixIcon !== 'none' && !isIconOnly.value && !isCircle.value,
);

const variantClass = computed<string>(() => {
	if (props.customColor) return '';

	const variant = props.variant || 'primary';

	return isOutlineKind.value
		? BADGE_MANIFEST.styles.variants.outline[variant]
		: BADGE_MANIFEST.styles.variants.filled[variant];
});

const classValues = computed<string>(() =>
	mergeTwClasses(
		props.cursor,
		BADGE_MANIFEST.styles.base,
		BADGE_MANIFEST.styles.shape[props.shape || 'default'],
		variantClass.value,
	),
);

const styleValues = computed<StyleValue>(() => {
	const style: StyleValue = {};

	if (props.customTextColor) {
		style.color = getValidOrFallbackColorFromStr(props.customTextColor);
	}

	if (props.customColor && props.kind === 'outline') {
		style.border = `1px solid ${getValidOrFallbackColorFromStr(props.customColor)}`;

		if (!props.customTextColor) {
			style.color = getValidOrFallbackColorFromStr(props.customColor);
		}
	}

	if (props.customColor && props.kind !== 'outline') {
		style.backgroundColor = getValidOrFallbackColorFromStr(props.customColor);
	}

	return style;
});

function getSafeIcon(icon?: Icon): Icon {
	return icon ?? 'none';
}
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/badge.manifest.css';
</style>
