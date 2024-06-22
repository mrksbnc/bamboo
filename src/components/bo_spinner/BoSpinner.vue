<template>
	<div
		role="status"
		class="flex flex-row items-center gap-4"
	>
		<div
			role="status"
			:class="classes"
			aria-label="loading"
		></div>
		<span
			v-if="displayLoaderText"
			:class="loaderTextClasses"
		>
			{{ loaderText }}
		</span>
	</div>
</template>

<script setup lang="ts">
import { BoSize, BoVariant } from '@/global';
import { computed, toRefs } from 'vue';
import {
	BoSpinnerSizeClasses,
	BoSpinnerTextSizeClasses,
	BoSpinnerVariantClasses,
} from './bo_spinner';
import { TailwindUtils, StringUtils } from '@/utils';
import type { BoSpinnerComponentProps } from './bo_spinner.type';

const props = withDefaults(defineProps<BoSpinnerComponentProps>(), {
	size: () => BoSize.default,
	variant: () => BoVariant.primary,
});

const { size, variant, loaderText } = toRefs(props);

const displayLoaderText = computed<boolean>(() => {
	return loaderText.value != null && !StringUtils.isEmpty(loaderText.value);
});

const loaderTextClasses = computed<string>(() => {
	const defaultClasses = /*tw*/ 'opacity-60';

	switch (size.value) {
		case BoSize.small:
			return TailwindUtils.merge(
				defaultClasses,
				BoSpinnerTextSizeClasses.small,
			);
		case BoSize.large:
			return TailwindUtils.merge(
				defaultClasses,
				BoSpinnerTextSizeClasses.large,
			);
		case BoSize.default:
		default:
			return TailwindUtils.merge(
				defaultClasses,
				BoSpinnerTextSizeClasses.default,
			);
	}
});

const classes = computed<string>(() => {
	const defaultClasses =
		/*tw*/ 'inline-block animate-spin rounded-full border-[2px] border-current border-t-transparent';

	return TailwindUtils.merge(
		defaultClasses,
		BoSpinnerSizeClasses[size.value],
		BoSpinnerVariantClasses[variant.value],
	);
});
</script>
