<template>
	<button
		type="button"
		role="button"
		:class="classes"
		:disabled="disabled"
	>
		<div
			v-if="isLoading"
			class="bo-button__loader"
		>
			<bo-spinner
				:size="size"
				:variant="loaderVariant"
				:loader-text="loaderText"
			/>
		</div>
		<div
			v-else
			class="bo-button__content"
			:class="contentContainerClasses"
		>
			<bo-icon
				v-if="prefixIcon !== Icon.none"
				:icon="prefixIcon"
				:size="size"
			/>
			<bo-text
				class="bo-button__label"
				:text="label"
				:size="buttonTextSize"
				:weight="BoFontWeight.medium"
				:class="buttonTextClasses"
			/>
			<bo-icon
				v-if="suffixIcon !== Icon.none"
				:icon="suffixIcon"
				:size="size"
			/>
		</div>
	</button>
</template>

<script setup lang="ts">
import {
	BoButtonBorderRadiusClasses,
	BoButtonHeightClasses,
	BoButtonPaddingClasses,
	BoButtonTextSizeClasses,
	BoButtonType,
} from './bo_button';
import { computed, toRefs } from 'vue';
import { BoSize, BoVariant } from '@/global';
import { BoIcon, Icon } from '@/components/bo_icon';
import { TailwindUtils } from '@/utils';
import { BoSpinner } from '@/components/bo_spinner';
import { BoFontSize, BoText, BoFontWeight } from '@/components/bo_text';
import type { BoButtonComponentProps } from './bo_button.types';
import {
	BoButtonColorClasses,
	BoButtonLinkColorClasses,
	BoButtonOutlineColorClasses,
} from '@/shared';

const props = withDefaults(defineProps<BoButtonComponentProps>(), {
	disabled: false,
	isLoading: false,
	size: () => BoSize.default,
	prefixIcon: () => Icon.none,
	suffixIcon: () => Icon.none,
	type: () => BoButtonType.default,
	variant: () => BoVariant.primary,
});

const {
	label,
	variant,
	type,
	disabled,
	isLoading,
	size,
	prefixIcon,
	suffixIcon,
} = toRefs(props);

const contentContainerClasses: string =
	/*tw*/ 'flex gap-2 items-center justify-center';

const defaultClasses: string =
	/*tw*/ 'flex gap-2 items-center justify-center content-center transition-opacity duration-200 cursor-pointer';

const disabledClasses: string =
	/*tw*/ 'disabled:cursor-not-allowed disabled:opacity-50';

const buttonTextClasses: string = /*tw*/ 'cursor-pointer';

const loaderVariant = computed<BoVariant>(() => {
	switch (type.value) {
		case BoButtonType.outline:
		case BoButtonType.link:
			return variant.value;
		case BoButtonType.default:
		case BoButtonType.pill:
		default:
			return BoVariant.light;
	}
});

const colorClasses = computed<string>(() => {
	switch (type.value) {
		case BoButtonType.outline:
			return BoButtonOutlineColorClasses[variant.value];
		case BoButtonType.link:
			return BoButtonLinkColorClasses[variant.value];
		case BoButtonType.default:
		case BoButtonType.pill:
		default:
			return BoButtonColorClasses[variant.value];
	}
});

const paddingClasses = computed<string>(() => {
	return BoButtonPaddingClasses[size.value];
});

const heightClasses = computed<string>(() => {
	return BoButtonHeightClasses[size.value];
});

const borderRadiusClasses = computed<string>(() => {
	return BoButtonBorderRadiusClasses[type.value];
});

const shadowClasses = computed<string>(() => {
	if (type.value === BoButtonType.link) {
		return /*tw*/ 'shadow-none';
	}

	return /*tw*/ 'shadow-sm';
});

const fontSizeClasses = computed<string>(() => {
	return BoButtonTextSizeClasses[size.value];
});

const classes = computed<string>(() => {
	return TailwindUtils.merge(
		defaultClasses,
		disabledClasses,
		colorClasses.value,
		shadowClasses.value,
		heightClasses.value,
		paddingClasses.value,
		fontSizeClasses.value,
		borderRadiusClasses.value,
	);
});

const buttonTextSize = computed<BoFontSize>(() => {
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
</script>
