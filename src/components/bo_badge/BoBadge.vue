<template>
	<span
		class="bo-badge"
		:class="classes"
	>
		<span v-if="prefixIcon !== Icon.none">
			<bo-icon
				:icon="prefixIcon"
				:size="size"
			/>
		</span>
		<bo-text
			v-if="rederLabel && label != null"
			:text="label"
			:size="badgeFontSize"
		/>
		<span v-if="suffixIcon !== Icon.none">
			<bo-icon
				:icon="suffixIcon"
				:size="size"
			/>
		</span>
	</span>
</template>

<script setup lang="ts">
import { Icon } from '@/components/bo_icon';
import { BoSize } from '@/data/bo_size.constant';
import { StringUtils, TailwindUtils } from '@/utils';
import { computed, toRefs } from 'vue';
import BoIcon from '../bo_icon/BoIcon.vue';
import { BoFontSize } from '../bo_text';
import BoText from '../bo_text/BoText.vue';
import { BoBadgeShape, BoBadgeType, BoBadgeVariant } from './constants';
import type { BoBadgeProps } from './types';

const props = withDefaults(defineProps<BoBadgeProps>(), {
	type: () => BoBadgeType.default,
	size: () => BoSize.default,
	shape: () => BoBadgeShape.default,
	variant: () => BoBadgeVariant.primary,
	prefixIcon: () => Icon.none,
	suffixIcon: () => Icon.none,
});

const { label, type, size, variant, shape, prefixIcon, suffixIcon } =
	toRefs(props);

const defaultClasses: string =
	/*tw*/ 'inline-flex items-center justify-center select-none';

const rederLabel = computed<boolean>(() => {
	return !StringUtils.isEmpty(label.value ?? '');
});

const tailwindcssShapeClasses = computed<string>(() => {
	switch (shape.value) {
		case BoBadgeShape.pill:
		case BoBadgeShape.circle:
			return /*tw*/ 'rounded-full';
		case BoBadgeShape.default:
		default:
			return /*tw*/ 'rounded-lg';
	}
});

const tailwindcssVariantClasses = computed<string>(() => {
	switch (type.value) {
		case BoBadgeType.outline:
			switch (variant.value) {
				case BoBadgeVariant.primary:
				default:
					return /*tw*/ 'border border-blue-600 hover:bg-blue-600 focus:ring-blue-600 text-blue-600 hover:text-white';
				case BoBadgeVariant.secondary:
					return /*tw*/ 'border border-gray-600 hover:bg-gray-600 focus:ring-gray-600 text-gray-600 hover:text-white';
				case BoBadgeVariant.danger:
					return /*tw*/ 'border border-red-600 hover:bg-red-600 focus:ring-red-600 text-red-600 hover:text-white';
				case BoBadgeVariant.warning:
					return /*tw*/ 'border border-yellow-600 hover:bg-yellow-600 focus:ring-yellow-600 text-yellow-600 hover:text-white';
				case BoBadgeVariant.success:
					return /*tw*/ 'border border-green-600 hover:bg-green-600 focus:ring-green-600 text-green-600 hover:text-white';
				case BoBadgeVariant.dark:
					return /*tw*/ 'border border-black hover:bg-black focus:ring-black text-black hover:text-white';
			}
		case BoBadgeType.default:
		default:
			switch (variant.value) {
				case BoBadgeVariant.primary:
				default:
					return /*tw*/ 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-600 text-white';
				case BoBadgeVariant.secondary:
					return /*tw*/ 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-600 text-white';
				case BoBadgeVariant.danger:
					return /*tw*/ 'bg-red-600 hover:bg-red-700 focus:ring-red-600 text-white';
				case BoBadgeVariant.warning:
					return /*tw*/ 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-600 text-white';
				case BoBadgeVariant.success:
					return /*tw*/ 'bg-green-600 hover:bg-green-700 focus:ring-green-600 text-white';
				case BoBadgeVariant.dark:
					return /*tw*/ 'bg-black hover:bg-black/50 focus:ring-black text-white';
			}
	}
});

const classes = computed<string>(() => {
	return TailwindUtils.merge(
		defaultClasses,
		tailwindcssShapeClasses.value,
		tailwindcssVariantClasses.value,
	);
});

const badgeFontSize = computed<BoFontSize>(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return BoFontSize.extra_small;
		case BoSize.small:
			return BoFontSize.small;
		case BoSize.default:
		default:
			return BoFontSize.default;
		case BoSize.large:
			return BoFontSize.body;
		case BoSize.extra_large:
			return BoFontSize.title;
	}
});
</script>
