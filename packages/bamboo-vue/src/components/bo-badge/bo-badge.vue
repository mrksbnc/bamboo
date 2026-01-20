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
			<span>
				<bo-text
					v-if="label && !isCircle"
					:value="label"
					:cursor="cursor"
					:font-size="fontSize"
					font-weight="semibold"
					variant="currentColor"
				/>
			</span>
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

	const classValues = computed<string>(() => {
		return mergeTwClasses(
			gap.value,
			props.cursor,
			BADGE_MANIFEST.styles.base,
			BADGE_MANIFEST.styles.shape[props.shape || 'default'],
			BADGE_MANIFEST.styles.variants[props.kind || 'default'][props.variant || 'primary'],
			isCircle.value
				? BADGE_MANIFEST.styles.size.circle[props.size || 'default']
				: BADGE_MANIFEST.styles.size.default[props.size || 'default'],
		);
	});

	const styleValues = computed<StyleValue>(() => {
		const style: StyleValue = {};

		if (props.customBgColor) {
			style.backgroundColor = getValidOrFallbackColorFromStr(props.customBgColor);
		}

		if (props.customTextColor) {
			style.color = getValidOrFallbackColorFromStr(props.customTextColor);
		}

		if (props.customBorderColor) {
			style.borderColor = getValidOrFallbackColorFromStr(props.customBorderColor);
		}

		return style;
	});

	function getSafeIcon(icon?: Icon): Icon {
		return icon ?? 'none';
	}
</script>
