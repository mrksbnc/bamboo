<template>
	<span
		:id="id"
		:data-testid="dataTestId"
		:class="classValues"
		:role="role"
		:aria-label="ariaLabel"
	>
		<!-- Prefix icon or icon-only icon -->
		<span v-if="showPrefixIcon" :class="prefixIconContainerClassValues">
			<bo-icon :size="iconSize" :icon="getSafeIcon(prefixIcon)" class="bo-badge__prefix-icon" />
		</span>

		<!-- Label -->
		<slot name="default">
			<bo-text
				v-if="renderLabel && label"
				:value="label"
				:font-size="badgeFontSize"
				font-weight="semibold"
				class="bo-badge__label"
			/>
		</slot>

		<!-- Suffix icon -->
		<span v-if="showSuffixIcon" :class="suffixIconContainerClassValues">
			<bo-icon :icon="getSafeIcon(suffixIcon)" :size="iconSize" class="bo-badge__suffix-icon" />
		</span>
	</span>
</template>

<script lang="ts" setup>
	import {
		BADGE_MANIFEST,
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		type BoBadgeProps,
		type BoFontSize,
		type BoIconSize,
		type Icon,
	} from '@workspace/bamboo-core';
	import { computed } from 'vue';
	import { BoIcon } from '../bo-icon';

	const props = withDefaults(defineProps<BoBadgeProps>(), {
		id: () => generateComponentId('badge'),
		dataTestId: () => generateDataTestId('badge'),
		variant: () => BADGE_MANIFEST.defaults.variant,
		type: () => BADGE_MANIFEST.defaults.type,
		shape: () => BADGE_MANIFEST.defaults.shape,
		size: () => BADGE_MANIFEST.defaults.size,
	});

	const isIconOnly = computed<boolean>(() => {
		const hasIcon =
			(props.prefixIcon && props.prefixIcon !== 'none') ||
			(props.suffixIcon && props.suffixIcon !== 'none');

		return (hasIcon ?? false) && !!props.label;
	});

	const showPrefixIcon = computed<boolean>(() => {
		return (props.prefixIcon && props.prefixIcon !== 'none') || isIconOnly.value || isCircle.value;
	});

	const showSuffixIcon = computed<boolean>(() => {
		return (
			!!props.suffixIcon && props.suffixIcon !== 'none' && !isIconOnly.value && !isCircle.value
		);
	});

	const isCircle = computed<boolean>(() => {
		return props.shape === 'circle' && isIconOnly.value;
	});

	const renderLabel = computed<boolean>(() => {
		return !!props.label && !isIconOnly.value;
	});

	const badgeFontSize = computed<BoFontSize>(() => {
		return BADGE_MANIFEST.styles.fontSize[props.size || 'default'];
	});

	const iconSize = computed<BoIconSize>(() => {
		return BADGE_MANIFEST.styles.iconSize[props.size || 'default'];
	});

	const sizeClasses = computed<string>(() => {
		return props.shape === 'circle'
			? BADGE_MANIFEST.styles.size.circle[props.size || 'default']
			: BADGE_MANIFEST.styles.size.default[props.size || 'default'];
	});

	const prefixIconContainerClassValues = computed<string>(() => {
		return BADGE_MANIFEST.styles.containers.prefixIcon;
	});

	const suffixIconContainerClassValues = computed<string>(() => {
		return BADGE_MANIFEST.styles.containers.suffixIcon;
	});

	const classValues = computed<string>(() => {
		return mergeTwClasses(
			sizeClasses.value,
			BADGE_MANIFEST.styles.base,
			BADGE_MANIFEST.styles.shape[props.shape || 'default'],
			BADGE_MANIFEST.styles.variants[props.type || 'default'][props.variant || 'primary'],
		);
	});

	function getSafeIcon(icon?: Icon): Icon {
		return icon ?? 'none';
	}
</script>
