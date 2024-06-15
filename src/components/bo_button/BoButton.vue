<template>
	<button
		type="button"
		role="button"
		:class="classes"
		:disabled="disabled"
	>
		<bo-icon
			v-if="prefixIcon !== Icon.none"
			:icon="prefixIcon"
			:size="iconSize"
		/>
		<span class="bo-button__label">
			{{ label }}
		</span>
		<bo-icon
			v-if="suffixIcon !== Icon.none"
			:icon="suffixIcon"
			:size="iconSize"
		/>
	</button>
</template>

<script setup lang="ts">
import {
	BoButtonBorderRadiusClasses,
	BoButtonFilledColorClasses,
	BoButtonOutlineColorClasses,
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

const defaultClasses = computed(() => {
	return /*tw*/ 'flex gap-1 items-center justify-center transition-opacity duration-200 cursor-pointer shadow-md';
});

const disabledClasses = computed(() => {
	return 'disabled:cursor-not-allowed disabled:opacity-50';
});

const colorClasses = computed(() => {
	switch (type.value) {
		case BoButtonType.outline:
			return BoButtonOutlineColorClasses[variant.value];
		case BoButtonType.default:
		case BoButtonType.pill:
		default:
			return BoButtonFilledColorClasses[variant.value];
	}
});

const paddingClasses = computed(() => {
	return BoButtonPaddingClasses[size.value];
});

const borderRadiusClasses = computed(() => {
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
		colorClasses.value,
		shadowClasses.value,
		paddingClasses.value,
		defaultClasses.value,
		disabledClasses.value,
		fontSizeClasses.value,
		borderRadiusClasses.value,
	);
});

const iconSize = computed<BoSize>(() => {
	switch (size.value) {
		case BoSize.large:
		case BoSize.extra_large:
			return BoSize.default;
		case BoSize.extra_small:
		case BoSize.small:
		case BoSize.default:
		default:
			return BoSize.small;
	}
});
</script>
