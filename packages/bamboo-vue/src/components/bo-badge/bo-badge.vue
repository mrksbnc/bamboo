<template>
	<span
		:id="id"
		:data-testid="dataTestId"
		:class="classValues"
		:style="styleValues"
		:role="role"
		:aria-label="ariaLabel"
	>
		<bo-icon v-if="showPrefixIcon" :size="iconSize" :icon="getSafeIcon(prefixIcon)" />
		<slot>
			<bo-text
				v-if="label && !isCircle"
				:cursor="cursor"
				:font-size="fontSize"
				font-weight="semibold"
				variant="currentColor"
			>
				{{ label }}
			</bo-text>
		</slot>
		<bo-icon v-if="showSuffixIcon" :icon="getSafeIcon(suffixIcon)" :size="iconSize" />
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
		type BoFontSize,
		type BoIconSize,
		type Icon,
	} from '@workspace/bamboo-core';
	import { computed, type StyleValue } from 'vue';
	import { BoIcon } from '../bo-icon';
	import { BoText } from '../bo-text';

	const props = withDefaults(defineProps<BoBadgeProps>(), {
		id: () => generateComponentId('badge'),
		dataTestId: () => generateDataTestId('badge'),
		size: () => BADGE_MANIFEST.defaults.size,
		kind: () => BADGE_MANIFEST.defaults.kind,
		shape: () => BADGE_MANIFEST.defaults.shape,
		variant: () => BADGE_MANIFEST.defaults.variant,
		cursor: () => BADGE_MANIFEST.defaults.cursor,
	});

	const isIconOnly = computed<boolean>(() => {
		const hasIcon =
			(props.prefixIcon && props.prefixIcon !== 'none') ||
			(props.suffixIcon && props.suffixIcon !== 'none');

		return !!hasIcon && !props.label;
	});

	const showPrefixIcon = computed<boolean>(() => {
		return (props.prefixIcon && props.prefixIcon !== 'none') || isIconOnly.value || isCircle.value;
	});

	const showSuffixIcon = computed<boolean>(() => {
		return (
			!!props.suffixIcon && props.suffixIcon !== 'none' && !isIconOnly.value && !isCircle.value
		);
	});

	const fontSize = computed<BoFontSize>(() => {
		return BADGE_MANIFEST.styles.fontSize[props.size || 'default'];
	});

	const isCircle = computed<boolean>(() => {
		return props.shape === 'circle' && isIconOnly.value;
	});

	const iconSize = computed<BoIconSize>(() => {
		return BADGE_MANIFEST.styles.iconSize[props.size || 'default'];
	});

	const gap = computed<string>(() => {
		return !isIconOnly.value && props.label && (props.prefixIcon || props.suffixIcon)
			? 'gap-1.5'
			: '';
	});

	const isOutlineKind = computed<boolean>(() => {
		return props.kind === 'outline';
	});

	const fontColor = computed<string>(() => {
		if (props.customTextColor) {
			return '';
		}

		const variant = props.variant || 'primary';

		if (isOutlineKind.value) {
			return BADGE_MANIFEST.styles.textColor.outline[variant];
		}

		return BADGE_MANIFEST.styles.textColor.filled[variant];
	});

	const backgroundClassValues = computed<string>(() => {
		if (props.customColor) {
			return '';
		}

		const variant = props.variant || 'primary';

		if (isOutlineKind.value) {
			return BADGE_MANIFEST.styles.variants.outline[variant];
		}

		return BADGE_MANIFEST.styles.variants.filled[variant];
	});

	const borderColorClassValues = computed<string>(() => {
		if (props.customColor) {
			return '';
		}

		const variant = props.variant || 'primary';

		if (isOutlineKind.value) {
			return BADGE_MANIFEST.styles.variants.outline[variant];
		}

		return '';
	});

	const classValues = computed<string>(() => {
		return mergeTwClasses(
			gap.value,
			fontColor.value,
			props.cursor,
			BADGE_MANIFEST.styles.base,
			BADGE_MANIFEST.styles.shape[props.shape || 'default'],
			backgroundClassValues.value,
			borderColorClassValues.value,
			isCircle.value
				? BADGE_MANIFEST.styles.size.circle[props.size || 'default']
				: BADGE_MANIFEST.styles.size.default[props.size || 'default'],
		);
	});

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
