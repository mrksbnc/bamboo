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
import { computed, toRefs } from 'vue';
import { BoSize, BoVariant } from '@/global';
import { BoIcon } from '@/components/bo_icon';
import { BoSpinner } from '@/components/bo_spinner';
import { TailwindUtils } from '@/utils';
import {
	BoIconButtonBorderRadiusClasses,
	BoIconButtonLightColorClasses,
	BoIconButtonLightShadowClasses,
	BoIconButtonShape,
	BoIconButtonType,
	BoIconButtonLightOutlineColorClasses,
	BoIconButtonSizeClasses,
	BoIconButtonLightLinkColorClasses,
	BoIconButtonDarkOutlineColorClasses,
	BoIconButtonDarkLinkColorClasses,
	BoIconButtonDarkColorClasses,
} from './bo_icon_button';
import type { BoIconButtonComponentProps } from './bo_icon_button.types';

const props = withDefaults(defineProps<BoIconButtonComponentProps>(), {
	disabled: false,
	isLoading: false,
	size: () => BoSize.default,
	variant: () => BoVariant.primary,
	type: () => BoIconButtonType.default,
	shape: () => BoIconButtonShape.default,
});

const { icon, size, variant, shape, type, disabled, isLoading } = toRefs(props);

const containerClasses: string = /*tw*/ 'flex items-center justify-center';

const defaultClasses: string = /*tw*/ 'inline-flex items-center justify-center';

const disabledClasses: string =
	/*tw*/ 'disabled:cursor-not-allowed disabled:opacity-50 :disabled:shadow-none';

const variantClasses = computed<string>(() => {
	switch (type.value) {
		case BoIconButtonType.outline:
			return TailwindUtils.merge(
				BoIconButtonLightOutlineColorClasses[variant.value],
				BoIconButtonDarkOutlineColorClasses[variant.value],
			);
		case BoIconButtonType.link:
			return TailwindUtils.merge(
				BoIconButtonLightLinkColorClasses[variant.value],
				BoIconButtonDarkLinkColorClasses[variant.value],
			);
		case BoIconButtonType.default:
		default:
			return TailwindUtils.merge(
				BoIconButtonLightColorClasses[variant.value],
				BoIconButtonDarkColorClasses[variant.value],
			);
	}
});

const paddingClasses = computed<string>(() => {
	return BoIconButtonSizeClasses[size.value];
});

const borderRadiusClasses = computed<string>(() => {
	return BoIconButtonBorderRadiusClasses[shape.value];
});

const shadowClasses = computed<string>(() => {
	if (type.value === BoIconButtonType.link) {
		return /*tw*/ 'shadow-none';
	}

	return BoIconButtonLightShadowClasses[variant.value];
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

const loaderVariant = computed<BoVariant>(() => {
	switch (type.value) {
		case BoIconButtonType.outline:
		case BoIconButtonType.link:
			return variant.value;
		case BoIconButtonType.default:
			return BoVariant.light;
		default:
			return BoVariant.primary;
	}
});
</script>
