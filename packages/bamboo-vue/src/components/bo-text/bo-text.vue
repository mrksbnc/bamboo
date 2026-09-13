<template>
	<span
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:lang="lang"
		:class="classValues"
		:style="styleValues"
		:aria-live="ariaLive"
		:aria-label="ariaLabel"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
	>
		<slot></slot>
	</span>
</template>

<script setup lang="ts">
import {
	generateComponentId,
	generateDataTestId,
	getValidOrFallbackColorFromStr,
	mergeTwClasses,
	TEXT_MANIFEST,
	type BoTextProps,
} from '@workspace/bamboo-core';
import { computed, type StyleValue } from 'vue';

const props = withDefaults(defineProps<BoTextProps>(), {
	id: () => generateComponentId('text'),
	dataTestId: () => generateDataTestId('text'),
	variant: () => TEXT_MANIFEST.defaults.variant,
	fontSize: () => TEXT_MANIFEST.defaults.fontSize,
	lineClamp: () => TEXT_MANIFEST.defaults.lineClamp,
	textAlign: () => TEXT_MANIFEST.defaults.textAlign,
	fontWeight: () => TEXT_MANIFEST.defaults.fontWeight,
	whiteSpace: () => TEXT_MANIFEST.defaults.whiteSpace,
	fontFamily: () => TEXT_MANIFEST.defaults.fontFamily,
	textTransform: () => TEXT_MANIFEST.defaults.textTransform,
	role: () => TEXT_MANIFEST.defaults.role,
});

const cursor = computed<string>(() => {
	if (props.cursor) {
		return props.cursor as string;
	}

	if (props.clickable) {
		return TEXT_MANIFEST.styles.cursor.clickable;
	}

	return TEXT_MANIFEST.styles.cursor.default;
});

const lineClampValue = computed<string | undefined>(() => {
	if (!props.lineClamp || props.lineClamp === 'none') {
		return undefined;
	}

	if (typeof props.lineClamp === 'number') {
		return `${props.lineClamp}`;
	}

	return props.lineClamp.startsWith('--') ? `var(${props.lineClamp})` : props.lineClamp;
});

const lineClamp = computed<string>(() => {
	return lineClampValue.value
		? TEXT_MANIFEST.styles.lineClamp.base
		: TEXT_MANIFEST.styles.lineClamp.none;
});

const classValues = computed<string>(() => {
	return mergeTwClasses(
		cursor.value,
		lineClamp.value,
		TEXT_MANIFEST.styles.base,
		TEXT_MANIFEST.styles.variant[props.variant || 'default'],
		TEXT_MANIFEST.styles.textAlign[props.textAlign || 'left'],
		TEXT_MANIFEST.styles.fontSize[props.fontSize || 'default'],
		TEXT_MANIFEST.styles.whiteSpace[props.whiteSpace || 'normal'],
		TEXT_MANIFEST.styles.fontFamily[props.fontFamily || 'inherit'],
		TEXT_MANIFEST.styles.fontWeight[props.fontWeight || 'regular'],
		TEXT_MANIFEST.styles.textTransform[props.textTransform || 'none'],
	);
});

const styleValues = computed<StyleValue>(() => {
	const style: StyleValue = {};

	if (props.customColor && typeof props.customColor === 'string') {
		style.color = getValidOrFallbackColorFromStr(props.customColor);
	}

	if (lineClampValue.value) {
		style['--bo-text-line-clamp'] = lineClampValue.value;
	}

	return style;
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/text.manifest.css';
</style>
