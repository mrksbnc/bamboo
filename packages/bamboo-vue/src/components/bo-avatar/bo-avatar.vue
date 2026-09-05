<template>
	<div class="bo-avatar-shell">
		<div
			:id="id"
			:data-testid="dataTestId"
			data-slot="avatar"
			:data-size="size"
			:data-kind="kind"
			:data-variant="variant"
			:role="role"
			:aria-label="ariaLabel"
			:class="containerClassValues"
			:style="styleValues"
		>
			<span v-if="renderWithLabel" data-slot="avatar-label">
				<bo-text
					:cursor="cursor"
					variant="inherit"
					font-weight="semibold"
					:font-size="labelFontSize"
				>
					{{ label }}
				</bo-text>
			</span>

			<span v-if="renderWithImage" data-slot="avatar-image">
				<img :src="src" :alt="alt" @error="onImageError" />
			</span>

			<span v-if="!renderWithImage && !renderWithLabel" data-slot="avatar-image">
				<img alt="avatar" src="./avatar.png" />
			</span>
		</div>

		<div
			v-if="indicatorKind !== 'none'"
			data-slot="avatar-indicator"
			:data-size="size"
			:data-kind="indicatorKind"
			:data-position="indicatorPosition"
			:class="indicatorClassValues"
		></div>
	</div>
</template>

<script lang="ts" setup>
import {
	AVATAR_MANIFEST,
	generateComponentId,
	generateDataTestId,
	getValidOrFallbackColorFromStr,
	mergeTwClasses,
	type BoAvatarProps,
	type BoFontSize,
} from '@workspace/bamboo-core';
import { computed, ref, type StyleValue } from 'vue';
import { BoText } from '../bo-text';

const props = withDefaults(defineProps<BoAvatarProps>(), {
	id: () => generateComponentId('avatar'),
	dataTestId: () => generateDataTestId('avatar'),
	alt: () => AVATAR_MANIFEST.defaults.alt,
	size: () => AVATAR_MANIFEST.defaults.size,
	kind: () => AVATAR_MANIFEST.defaults.kind,
	role: () => AVATAR_MANIFEST.defaults.role,
	variant: () => AVATAR_MANIFEST.defaults.variant,
	indicatorKind: () => AVATAR_MANIFEST.defaults.indicatorKind,
	indicatorPosition: () => AVATAR_MANIFEST.defaults.indicatorPosition,
});

const imgError = ref<boolean>(false);

const isOutlineKind = computed<boolean>(() => {
	return props.kind?.includes('outline') ?? false;
});

const renderWithImage = computed<boolean>(() => {
	return !!props.src && !imgError.value;
});

const renderWithLabel = computed<boolean>(() => {
	return props.label !== undefined && props.label.length > 0 && !renderWithImage.value;
});

const label = computed<string>(() => {
	const safeStr = props?.label || '';

	if (safeStr.length > 2) {
		return safeStr.slice(0, 2).toUpperCase();
	}
	return safeStr.toUpperCase();
});

const labelFontSize = computed<BoFontSize>(() => {
	return AVATAR_MANIFEST.styles.labelSize[props.size || 'default'];
});

const fontColor = computed<string>(() => {
	if (props.customTextColor) {
		return '';
	}

	const variant = props.variant || 'primary';

	if (isOutlineKind.value) {
		return AVATAR_MANIFEST.styles.textColor.outline[variant];
	}

	return AVATAR_MANIFEST.styles.textColor.filled[variant];
});

const backgroundClassValues = computed<string>(() => {
	if (props.customColor) {
		return '';
	}

	const variant = props.variant || 'primary';

	if (isOutlineKind.value) {
		return AVATAR_MANIFEST.styles.variants.outline[variant];
	}

	return AVATAR_MANIFEST.styles.variants.filled[variant];
});

const indicatorClassValues = computed<string>(() => {
	if (!props.indicatorKind || props.indicatorKind === 'none') {
		return '';
	}

	return mergeTwClasses(
		AVATAR_MANIFEST.styles.indicator.base,
		AVATAR_MANIFEST.styles.indicator.size[props.size || 'default'],
		AVATAR_MANIFEST.styles.indicator.status[props.indicatorKind || 'none'],
		AVATAR_MANIFEST.styles.indicator.position[props.indicatorPosition || 'top-right'],
	);
});

const containerClassValues = computed<string>(() => {
	return mergeTwClasses(
		fontColor.value,
		AVATAR_MANIFEST.styles.base,
		backgroundClassValues.value,
		props.cursor || AVATAR_MANIFEST.styles.cursor.default,
		AVATAR_MANIFEST.styles.size[props.size || 'default'],
		AVATAR_MANIFEST.styles.kind[props.kind || 'default'],
	);
});

const styleValues = computed<StyleValue>(() => {
	const style: StyleValue = {};

	if (props.customTextColor) {
		style.color = getValidOrFallbackColorFromStr(props.customTextColor) || undefined;
	}

	if (props.customColor && props.kind.includes('outline')) {
		style.border = `1px solid ${getValidOrFallbackColorFromStr(props.customColor)}`;

		if (!props.customTextColor) {
			style.color = getValidOrFallbackColorFromStr(props.customColor) || undefined;
		}
	}

	if (props.customColor && !props.kind.includes('outline')) {
		style.backgroundColor = getValidOrFallbackColorFromStr(props.customColor) || undefined;
	}

	return style;
});

function onImageError($event: Event): void {
	imgError.value = true;
	console.error('[bo-avatar]: failed to load image', $event);
}
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/avatar.manifest.css';
</style>
