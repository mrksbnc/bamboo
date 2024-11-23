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
	BoButtonFilledColorClasses,
	BoButtonFilledDarkColorClasses,
	BoButtonHeightClasses,
	BoButtonOutlineColorClasses,
	BoButtonOutlineDarkColorClasses,
	BoButtonPaddingClasses,
	BoButtonShadowClasses,
	BoButtonTextSizeClasses,
	BoButtonType,
	BoButtonVariant,
} from './bo_button';
import { computed, toRefs, type PropType } from 'vue';
import { BoSize } from '@/global';
import { BoIcon, Icon } from '@/components/bo_icon';
import { TailwindUtils } from '@/utils';
import { BoSpinner, BoSpinnerVariant } from '@/components/bo_spinner';
import { BoFontSize, BoText, BoFontWeight } from '@/components/bo_text';

const props = defineProps({
	label: {
		type: String,
		required: true,
	},
	variant: {
		type: String as PropType<BoButtonVariant>,
		default: () => BoButtonVariant.primary,
	},
	type: {
		type: String as PropType<BoButtonType>,
		default: () => BoButtonType.default,
	},
	disabled: {
		type: Boolean,
		default: false,
	},

	isLoading: {
		type: Boolean,
		default: false,
	},
	loaderText: {
		type: String,
		default: '',
	},
	size: {
		type: String as PropType<BoSize>,
		default: () => BoSize.default,
	},
	prefixIcon: {
		type: String as PropType<Icon>,
		default: Icon.none,
	},
	suffixIcon: {
		type: String as PropType<Icon>,
		default: Icon.none,
	},
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
	/*tw*/ 'flex gap-2 items-center justify-center transition-opacity duration-200 cursor-pointer';

const disabledClasses: string =
	/*tw*/ 'disabled:cursor-not-allowed disabled:opacity-50';

const loaderVariant = computed<BoSpinnerVariant>(() => {
	switch (type.value) {
		case BoButtonType.outline:
			switch (variant.value) {
				case BoButtonVariant.link:
					return BoSpinnerVariant.primary;
				case BoButtonVariant.primary:
				case BoButtonVariant.secondary:
				case BoButtonVariant.danger:
				case BoButtonVariant.warning:
				case BoButtonVariant.success:
				case BoButtonVariant.dark:
				case BoButtonVariant.purple:
				case BoButtonVariant.teal:
					return BoSpinnerVariant[variant.value];
				default:
					return BoSpinnerVariant.primary;
			}
		case BoButtonType.default:
		case BoButtonType.pill:
		default:
			switch (variant.value) {
				case BoButtonVariant.link:
					return BoSpinnerVariant.primary;
				case BoButtonVariant.primary:
				case BoButtonVariant.secondary:
				case BoButtonVariant.danger:
				case BoButtonVariant.warning:
				case BoButtonVariant.success:
				case BoButtonVariant.dark:
				case BoButtonVariant.purple:
				case BoButtonVariant.teal:
				default:
					return BoSpinnerVariant.white;
			}
	}
});

const colorClasses = computed<string>(() => {
	switch (type.value) {
		case BoButtonType.outline:
			return TailwindUtils.merge(
				BoButtonOutlineColorClasses[variant.value],
				BoButtonOutlineDarkColorClasses[variant.value],
			);
		case BoButtonType.default:
		case BoButtonType.pill:
		default:
			return TailwindUtils.merge(
				BoButtonFilledColorClasses[variant.value],
				BoButtonFilledDarkColorClasses[variant.value],
			);
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
	return BoButtonShadowClasses[variant.value];
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
