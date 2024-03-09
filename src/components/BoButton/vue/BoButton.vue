<template>
	<button
		type="button"
		role="button"
		:disabled="disabled"
		:class="[style, `bo-button--${variant} bo-button--${type}`]"
		class="flex items-center content-center justify-center space-x-2 shadow-sd focus:ring-1 focus:ring-opacity-50 focus:outline-none transition-all duration-200 ease-in-out"
	>
		<span
			class="bo-button__prefix"
			v-if="prefixIcon"
		>
			<bo-icon
				:icon="prefixIcon"
				:size="BoSize.default"
			/>
		</span>
		<span class="bo-button__label">
			{{ label }}
		</span>
		<span
			class="bo-button__suffix"
			v-if="suffixIcon"
		>
			<bo-icon
				:icon="suffixIcon"
				:size="BoSize.default"
			/>
		</span>
	</button>
</template>

<script setup lang="ts">
import { computed, toRefs, type PropType } from 'vue';
import { BoButtonType, BoIcon, type Icon } from '@/components';
import { BoSize, BoVariant } from '@/constants';
import { TailwindUtils } from '@/utils';

const props = defineProps({
	label: {
		type: String,
		required: true,
	},
	variant: {
		type: String as PropType<BoVariant>,
		default: BoVariant.primary,
	},
	type: {
		type: String as PropType<BoButtonType>,
		default: BoButtonType.default,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	size: {
		type: String as PropType<BoSize>,
		default: BoSize.default,
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

const { label, variant, type, disabled, size, prefixIcon, suffixIcon } =
	toRefs(props);

const disabledClasses = 'disabled:cursor-not-allowed disabled:opacity-50';

const textSizes = computed<string>(() => {
	switch (size.value) {
		case BoSize.extra_small:
		case BoSize.small:
			return 'text-xs';
		case BoSize.large:
			return 'text-base';
		case BoSize.extra_large:
			return 'text-lg';
		case BoSize.default:
		default:
			return 'text-sm';
	}
});

const textClasses = computed<string>(() => {
	let classes = '';

	if (type.value === BoButtonType.outline) {
		switch (variant.value) {
			case BoVariant.danger:
				classes = TailwindUtils.merge(classes, 'text-red-600 hover:text-white');
				break;
			case BoVariant.warning:
				classes = TailwindUtils.merge(
					classes,
					'text-yellow-500 hover:text-white',
				);
				break;
			case BoVariant.success:
				classes = TailwindUtils.merge(
					classes,
					'text-green-500 hover:text-white',
				);
				break;
			case BoVariant.dark:
				classes = TailwindUtils.merge(
					classes,
					'text-gray-500 hover:text-white dark:hover:text-white',
				);
				break;
			case BoVariant.purple:
				classes = TailwindUtils.merge(
					classes,
					'text-purple-500 hover:text-white',
				);
				break;
			case BoVariant.teal:
				classes = TailwindUtils.merge(
					classes,
					'text-teal-500 hover:text-white',
				);
				break;
			case BoVariant.secondary:
				classes = TailwindUtils.merge(
					classes,
					'text-gray-700 hover:text-white dark:text-gray-300 dark:hover:text-white',
				);
				break;
			case BoVariant.primary:
			case BoVariant.default:
			default:
				classes = TailwindUtils.merge(
					classes,
					'text-blue-700 hover:text-white dark:text-blue-500 dark:hover:text-white',
				);
				break;
		}
	}

	if (type.value === BoButtonType.pill || type.value === BoButtonType.default) {
		switch (variant.value) {
			case BoVariant.secondary:
				classes = TailwindUtils.merge(classes, 'text-gray-600');
				break;
			case BoVariant.danger:
			case BoVariant.warning:
			case BoVariant.success:
			case BoVariant.dark:
			case BoVariant.purple:
			case BoVariant.teal:
			case BoVariant.primary:
			default:
				classes = TailwindUtils.merge(classes, 'text-white');
				break;
		}
	}

	classes = TailwindUtils.merge(classes, 'font-medium');
	return classes;
});

const typeClasses = computed(() => {
	switch (type.value) {
		case BoButtonType.pill:
			return 'rounded-full';
		case BoButtonType.outline:
		case BoButtonType.default:
		default:
			return 'rounded-lg';
	}
});

const sizeClasses = computed<string>(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return 'px-2 py-1';
		case BoSize.small:
			return 'px-2 py-1.5';
		case BoSize.large:
			return 'px-5 py-2.5';
		case BoSize.extra_large:
			return 'px-6 py-3';
		case BoSize.default:
		default:
			return 'px-3 py-2';
	}
});

const colorClasses = computed<string>(() => {
	switch (type.value) {
		case BoButtonType.outline:
			switch (variant.value) {
				case BoVariant.danger:
					return 'border border-red-600 hover:bg-red-600 focus:ring-red-600';
				case BoVariant.warning:
					return 'border border-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500';
				case BoVariant.success:
					return 'border border-green-500 hover:bg-green-600 focus:ring-green-500';
				case BoVariant.dark:
					return 'border border-gray-800 hover:bg-gray-700 focus:ring-gray-800';
				case BoVariant.purple:
					return 'border border-purple-500 hover:bg-purple-600 focus:ring-purple-500';
				case BoVariant.teal:
					return 'border border-teal-500 hover:bg-teal-600 focus:ring-teal-500';
				case BoVariant.secondary:
					return 'border border-gray-500 hover:bg-gray-600 focus:ring-gray-500';
				case BoVariant.primary:
				default:
					return 'border border-blue-700 hover:bg-blue-800 focus:ring-blue-700';
			}
		case BoButtonType.pill:
		case BoButtonType.default:
		default:
			switch (variant.value) {
				case BoVariant.danger:
					return 'bg-red-600 hover:bg-red-700 focus:ring-red-600';
				case BoVariant.warning:
					return 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500';
				case BoVariant.success:
					return 'bg-green-600 hover:bg-green-700 focus:ring-green-600';
				case BoVariant.dark:
					return 'bg-gray-800 hover:bg-gray-700 focus:ring-gray-800';
				case BoVariant.secondary:
					return 'bg-gray-200 hover:bg-gray-300 focus:ring-gray-200';
				case BoVariant.purple:
					return 'bg-purple-500 hover:bg-purple-600 focus:ring-purple-500';
				case BoVariant.teal:
					return 'bg-teal-500 hover:bg-teal-600 focus:ring-teal-500';
				case BoVariant.primary:
				default:
					return 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-700';
			}
	}
});

const style = computed(() => {
	return TailwindUtils.merge(
		typeClasses.value,
		sizeClasses.value,
		colorClasses.value,
		disabledClasses,
		textClasses.value,
		textSizes.value,
	);
});
</script>
