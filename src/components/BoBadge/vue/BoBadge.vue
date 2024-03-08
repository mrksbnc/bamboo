<template>
	<span
		class="bo-badge flex max-w-fit justify-center items-center content-center space-x-1 rounded-lg shadow-md cursor-default select-none"
		:class="[`badge-${variant}`, styleClasses]"
	>
		<bo-icon
			v-if="prefixIcon"
			:size="iconSize"
			:icon="prefixIcon"
			class="bo-bade__icon-prefix"
		/>
		<p class="bo-badge__label font-medium">
			{{ label }}
		</p>
		<bo-icon
			v-if="suffixIcon"
			:size="iconSize"
			:icon="suffixIcon"
			class="bo-bade__icon-suffix"
		/>
	</span>
</template>

<script setup lang="ts">
import { BoIcon, type Icon } from '@/components/BoIcon';
import { BoSize, BoVariant } from '@/constants';
import { TailwindUtils } from '@/utils';
import { computed, toRefs, type PropType } from 'vue';
import { BoBadgeType } from '@/components/BoBadge';

const props = defineProps({
	label: {
		type: String,
		required: true,
	},
	variant: {
		type: String as PropType<BoVariant>,
		default: BoVariant.default,
	},
	size: {
		type: String as PropType<BoSize>,
		default: BoSize.default,
	},
	type: {
		type: String as PropType<BoBadgeType>,
		default: BoBadgeType.default,
	},
	prefixIcon: {
		type: String as PropType<Icon>,
		default: null,
	},
	suffixIcon: {
		type: String as PropType<Icon>,
		default: null,
	},
});

const { label, variant, size, type, prefixIcon, suffixIcon } = toRefs(props);

const styleClasses = computed<string>(() => {
	let classes = '';

	switch (size.value) {
		case BoSize.extra_small:
			classes = TailwindUtils.merge(classes, 'px-1.5 py-0.5 text-xs');
			break;
		case BoSize.small:
			classes = TailwindUtils.merge(classes, 'px-2 py-1 text-sm');
			break;
		case BoSize.large:
			classes = TailwindUtils.merge(classes, 'px-3 py-1.5 text-base');
			break;
		case BoSize.extra_large:
			classes = TailwindUtils.merge(classes, 'px-4 py-2 text-lg');
			break;
		case BoSize.default:
		default:
			classes = TailwindUtils.merge(classes, 'px-2.5 py-1 text-base');
			break;
	}

	if (type.value === BoBadgeType.outline) {
		switch (variant.value) {
			case BoVariant.primary:
				classes = TailwindUtils.merge(
					classes,
					'border border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500',
				);
				break;
			case BoVariant.secondary:
				classes = TailwindUtils.merge(
					classes,
					'border border-gray-600 text-gray-600 dark:border-gray-500 dark:text-gray-500',
				);
				break;
			case BoVariant.success:
				classes = TailwindUtils.merge(
					classes,
					'border border-green-600 text-green-600 dark:border-green-500 dark:text-green-500',
				);
				break;
			case BoVariant.danger:
				classes = TailwindUtils.merge(
					classes,
					'border border-red-600 text-red-600 dark:border-red-500 dark:text-red-500',
				);
				break;
			case BoVariant.warning:
				classes = TailwindUtils.merge(
					classes,
					'border border-yellow-600 text-yellow-600 dark:border-yellow-500 dark:text-yellow-500',
				);
				break;
			case BoVariant.dark:
				classes = TailwindUtils.merge(
					classes,
					'border border-gray-800 text-gray-800 dark:border-gray-700 dark:text-gray-700',
				);
				break;
			case BoVariant.purple:
				classes = TailwindUtils.merge(
					classes,
					'border border-purple-600 text-purple-600 dark:border-purple-500 dark:text-purple-500',
				);
				break;
			case BoVariant.teal:
				classes = TailwindUtils.merge(
					classes,
					'border border-teal-600 text-teal-600 dark:border-teal-500 dark:text-teal-500',
				);
				break;
			case BoVariant.default:
			default:
				classes = TailwindUtils.merge(
					classes,
					'border border-gray-100 text-gray-600',
				);
				break;
		}
	} else if (type.value === BoBadgeType.pill) {
		switch (variant.value) {
			case BoVariant.primary:
				classes = TailwindUtils.merge(
					classes,
					'bg-blue-600 text-white dark:bg-blue-500 dark:text-white rounded-full',
				);
				break;
			case BoVariant.secondary:
				classes = TailwindUtils.merge(
					classes,
					'bg-gray-600 text-white dark:bg-gray-500 dark:text-white rounded-full',
				);
				break;
			case BoVariant.success:
				classes = TailwindUtils.merge(
					classes,
					'bg-green-600 text-white dark:bg-green-500 dark:text-white rounded-full',
				);
				break;
			case BoVariant.danger:
				classes = TailwindUtils.merge(
					classes,
					'bg-red-600 text-white dark:bg-red-500 dark:text-white rounded-full',
				);
				break;
			case BoVariant.warning:
				classes = TailwindUtils.merge(
					classes,
					'bg-yellow-600 text-white dark:bg-yellow-500 dark:text-white rounded-full',
				);
				break;
			case BoVariant.dark:
				classes = TailwindUtils.merge(
					classes,
					'bg-gray-800 text-white dark:bg-gray-700 dark:text-white rounded-full',
				);
				break;
			case BoVariant.purple:
				classes = TailwindUtils.merge(
					classes,
					'bg-purple-600 text-white dark:bg-purple-500 dark:text-white rounded-full',
				);
				break;
			case BoVariant.teal:
				classes = TailwindUtils.merge(
					classes,
					'bg-teal-600 text-white dark:bg-teal-500 dark:text-white rounded-full',
				);
				break;
			case BoVariant.default:
			default:
				classes = TailwindUtils.merge(
					classes,
					'bg-gray-100 text-gray-600 rounded-full',
				);
				break;
		}
	} else {
		switch (variant.value) {
			case BoVariant.primary:
				classes = TailwindUtils.merge(
					classes,
					'bg-blue-600 text-white dark:bg-blue-500 dark:text-white',
				);
				break;
			case BoVariant.secondary:
				classes = TailwindUtils.merge(
					classes,
					'bg-gray-600 text-white dark:bg-gray-500 dark:text-white',
				);
				break;
			case BoVariant.success:
				classes = TailwindUtils.merge(
					classes,
					'bg-green-600 text-white dark:bg-green-500 dark:text-white',
				);
				break;
			case BoVariant.danger:
				classes = TailwindUtils.merge(
					classes,
					'bg-red-600 text-white dark:bg-red-500 dark:text-white',
				);
				break;
			case BoVariant.warning:
				classes = TailwindUtils.merge(
					classes,
					'bg-yellow-600 text-white dark:bg-yellow-500 dark:text-white',
				);
				break;
			case BoVariant.dark:
				classes = TailwindUtils.merge(
					classes,
					'bg-gray-800 text-white dark:bg-gray-700 dark:text-white',
				);
				break;
			case BoVariant.purple:
				classes = TailwindUtils.merge(
					classes,
					'bg-purple-600 text-white dark:bg-purple-500 dark:text-white',
				);
				break;
			case BoVariant.teal:
				classes = TailwindUtils.merge(
					classes,
					'bg-teal-600 text-white dark:bg-teal-500 dark:text-white',
				);
				break;
			case BoVariant.default:
			default:
				classes = TailwindUtils.merge(classes, 'bg-gray-100 text-gray-600');
				break;
		}
	}

	return classes;
});

const iconSize = computed<BoSize>(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return BoSize.extra_small;
		case BoSize.small:
			return BoSize.small;
		case BoSize.large:
		case BoSize.extra_large:
		case BoSize.default:
		default:
			return BoSize.default;
	}
});
</script>
