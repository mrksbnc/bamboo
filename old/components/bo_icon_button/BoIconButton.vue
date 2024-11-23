<template>
	<button
		type="button"
		role="button"
		:class="classes"
		:disabled="disabled"
	>
		<div
			v-if="isLoading"
			:class="containerClasses"
			class="bo-icon-button__loader"
		>
			<bo-spinner
				:size="BoSize.default"
				:variant="loaderVariant"
			/>
		</div>
		<div
			v-else
			:class="containerClasses"
			class="bo-icon-button__content"
		>
			<bo-icon
				:icon="icon"
				:size="BoSize.default"
			/>
		</div>
	</button>
</template>

<script setup lang="ts">
import { computed, toRefs, type PropType } from 'vue';
import { BoSize } from '@/global';
import { BoIcon, type Icon } from '@/components/bo_icon';
import { BoSpinner, BoSpinnerVariant } from '@/components/bo_spinner';
import { TailwindUtils } from '@/utils';
import {
	BoIconButtonBorderRadiusClasses,
	BoIconButtonColorClasses,
	BoIconButtonShadowClasses,
	BoIconButtonShape,
	BoIconButtonStyle,
	BoIconButtonVariant,
	BoIconButtonOutlineColorClasses,
	BoIconButtonSizeClasses,
} from './bo_icon_button';

const props = defineProps({
	icon: {
		type: String as PropType<Icon>,
		required: true,
	},
	size: {
		type: String as PropType<BoSize>,
		default: () => BoSize.default,
	},
	variant: {
		type: String as PropType<BoIconButtonVariant>,
		default: () => BoIconButtonVariant.primary,
	},
	shape: {
		type: String as PropType<BoIconButtonShape>,
		default: () => BoIconButtonShape.default,
	},
	style: {
		type: String as PropType<BoIconButtonStyle>,
		default: () => BoIconButtonStyle.default,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	isLoading: {
		type: Boolean,
		default: false,
	},
});

const { icon, size, variant, shape, style, disabled, isLoading } =
	toRefs(props);

const containerClasses: string = /*tw*/ 'flex items-center justify-center';

const defaultClasses: string = /*tw*/ 'inline-flex items-center justify-center';

const disabledClasses: string =
	/*tw*/ 'disabled:cursor-not-allowed disabled:opacity-50';

const variantClasses = computed<string>(() => {
	switch (style.value) {
		case BoIconButtonStyle.outline:
			return BoIconButtonOutlineColorClasses[variant.value];
		case BoIconButtonStyle.default:
		default:
			return BoIconButtonColorClasses[variant.value];
	}
});

const paddingClasses = computed<string>(() => {
	return BoIconButtonSizeClasses[size.value];
});

const borderRadiusClasses = computed<string>(() => {
	return BoIconButtonBorderRadiusClasses[shape.value];
});

const shadowClasses = computed<string>(() => {
	return BoIconButtonShadowClasses[variant.value];
});

const classes = computed<string>(() => {
	return TailwindUtils.merge(
		defaultClasses,
		disabledClasses,
		shadowClasses.value,
		variantClasses.value,
		paddingClasses.value,
		borderRadiusClasses.value,
	);
});

const loaderVariant = computed<BoSpinnerVariant>(() => {
	switch (variant.value) {
		case BoIconButtonVariant.primary:
		case BoIconButtonVariant.danger:
		case BoIconButtonVariant.warning:
		case BoIconButtonVariant.success:
		case BoIconButtonVariant.dark:
		case BoIconButtonVariant.purple:
		case BoIconButtonVariant.teal:
			return BoSpinnerVariant.white;
		case BoIconButtonVariant.secondary:
			return BoSpinnerVariant.secondary;
		default:
			return BoSpinnerVariant.primary;
	}
});
</script>
