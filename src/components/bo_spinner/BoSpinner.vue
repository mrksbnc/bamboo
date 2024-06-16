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
import { BoSize } from '@/global';
import { computed, toRefs, type PropType } from 'vue';
import {
	BoSpinnerSizeClasses,
	type BoSpinnerVariant,
	BoSpinnerVariantClasses,
} from './bo_spinner';
import { TailwindUtils } from '@/utils';
import { StringUtils } from '@/utils/string_utils';
import {} from '@/global';

const props = defineProps({
	size: {
		type: String as PropType<BoSize>,
		default: () => BoSize.default,
	},
	variant: {
		type: String as PropType<BoSpinnerVariant>,
		default: () => BoSpinnerVariantClasses.primary,
	},
	loaderText: {
		type: String,
		default: '',
	},
});

const { size, variant, loaderText } = toRefs(props);

const displayLoaderText = computed<boolean>(() => {
	return !StringUtils.isEmpty(loaderText.value);
});

const loaderTextClasses = computed<string>(() => {
	const defaultClasses = /*tw*/ 'opacity-60';

	switch (size.value) {
		case BoSize.small:
			return TailwindUtils.merge(
				defaultClasses,
				/*tw*/ 'text-small leading-small',
			);
		case BoSize.large:
			return TailwindUtils.merge(
				defaultClasses,
				/*tw*/ 'text-large leading-large',
			);
		case BoSize.default:
		default:
			return TailwindUtils.merge(
				defaultClasses,
				/*tw*/ 'text-default leading-default',
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
