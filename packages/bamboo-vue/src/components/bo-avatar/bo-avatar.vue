<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:aria-label="ariaLabel"
		:class="containerClassValues"
		:style="styleValues"
	>
		<span v-if="renderWithLabel">
			<bo-text
				:value="label"
				variant="inherit"
				font-weight="semibold"
				:clickable="clickable"
				:font-size="labelFontSize"
			/>
		</span>

		<span v-if="renderWithImage">
			<img :src="src" :alt="alt" class="h-full w-full aspect-auto" @error="onImageError" />
		</span>

		<span v-if="!renderWithImage && !renderWithLabel">
			<img alt="avatar" src="./avatar.png" class="h-full w-full object-cover" />
		</span>

		<span v-if="indicatorKind !== 'none'" :class="indicatorClassValues"></span>
	</div>
</template>

<script lang="ts" setup>
	import {
		AVATAR_MANIFEST,
		generateComponentId,
		generateDataTestId,
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
		return props.label !== undefined && props.label.length > 0 && !props.src;
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
		if (props.customColor?.textColor) {
			return '';
		}

		const variant = props.variant || 'primary';

		if (isOutlineKind.value) {
			return AVATAR_MANIFEST.styles.textColor.outline[variant];
		}

		return AVATAR_MANIFEST.styles.textColor.filled[variant];
	});

	const backgroundClassValues = computed<string>(() => {
		if (props.customColor?.bgColor) {
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
			/*tw*/ 'absolute rounded-full border-2 border-white',
			AVATAR_MANIFEST.styles.indicator.size[props.size || 'default'],
			AVATAR_MANIFEST.styles.indicator.status[props.indicatorKind || 'none'],
			AVATAR_MANIFEST.styles.indicator.position[props.indicatorPosition || 'top-right'],
		);
	});

	const containerClassValues = computed<string>(() => {
		const cursorClass = props.clickable
			? /* tw*/ 'cursor-pointer hover:opacity-80'
			: /* tw*/ 'cursor-default';
		const shadowClass = !isOutlineKind.value
			? /* tw*/ 'shadow-xs dark:shadow-gray-800'
			: /* tw*/ '';

		return mergeTwClasses(
			cursorClass,
			shadowClass,
			fontColor.value,
			AVATAR_MANIFEST.styles.base,
			backgroundClassValues.value,
			AVATAR_MANIFEST.styles.size[props.size || 'default'],
			AVATAR_MANIFEST.styles.kind[props.kind || 'default'],
		);
	});

	const styleValues = computed<StyleValue>(() => {
		return {
			color: props.customColor?.textColor,
			backgroundColor: props.customColor?.bgColor,
		};
	});

	function onImageError($event: Event): void {
		imgError.value = true;
		console.error('[bo-avatar]: failed to load image', $event);
	}
</script>
