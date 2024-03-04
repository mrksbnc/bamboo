<template>
	<button
		type="button"
		:disabled="disabled"
		:class="[
			style,
			`bo-button--${variant}`,
			'focus:outline-none  transition-all duration-200 ease-in-out',
			variant === BoButtonVariant.link
				? ''
				: 'shadow-md focus:ring-1 focus:ring-opacity-50',
		]"
	>
		<span class="bo-button__prefix">
			<BoIcon
				v-if="prefixIcon"
				:icon="prefixIcon"
				:size="BoSize.default"
			/>
		</span>
		<span class="bo-button__label">
			{{ label }}
		</span>
		<span class="bo-button__suffix">
			<BoIcon
				v-if="suffixIcon"
				:icon="suffixIcon"
				:size="BoSize.default"
			/>
		</span>
	</button>
</template>

<script setup lang="ts">
import { computed, toRefs, type PropType } from 'vue';
import { BoButtonType, BoButtonVariant, BoIcon, type Icon } from '@/components';
import { BoSize } from '@/enums';
import { TailwindUtils } from '@/utils';

const props = defineProps({
	label: {
		type: String,
		required: true,
	},
	variant: {
		type: String as PropType<BoButtonVariant>,
		default: BoButtonVariant.primary,
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
			case BoButtonVariant.link:
				classes = TailwindUtils.merge(
					classes,
					'text-blue-500 hover:text-blue-600',
				);
				break;
			case BoButtonVariant.danger:
				classes = TailwindUtils.merge(classes, 'text-red-500 hover:text-white');
				break;
			case BoButtonVariant.warning:
				classes = TailwindUtils.merge(
					classes,
					'text-yellow-500 hover:text-white',
				);
				break;
			case BoButtonVariant.success:
				classes = TailwindUtils.merge(
					classes,
					'text-green-500 hover:text-white',
				);
				break;
			case BoButtonVariant.dark:
				classes = TailwindUtils.merge(
					classes,
					'text-gray-800 hover:text-white',
				);
				break;
			case BoButtonVariant.light:
				classes = TailwindUtils.merge(
					classes,
					'text-gray-200 hover:text-white',
				);
				break;
			case BoButtonVariant.alternative:
				classes = TailwindUtils.merge(
					classes,
					'text-gray-500 hover:text-white',
				);
				break;
			case BoButtonVariant.secondary:
				classes = TailwindUtils.merge(
					classes,
					'text-gray-500 hover:text-white',
				);
				break;
			case BoButtonVariant.primary:
			default:
				classes = TailwindUtils.merge(
					classes,
					'text-blue-600 hover:text-white',
				);
				break;
		}
	}

	if (type.value === BoButtonType.pill || type.value === BoButtonType.default) {
		switch (variant.value) {
			case BoButtonVariant.link:
				classes = TailwindUtils.merge(
					classes,
					'text-blue-500 hover:text-blue-600',
				);
				break;
			case BoButtonVariant.secondary:
				classes = TailwindUtils.merge(classes, 'text-gray-600');
				break;
			case BoButtonVariant.danger:
			case BoButtonVariant.warning:
			case BoButtonVariant.success:
			case BoButtonVariant.dark:
			case BoButtonVariant.light:
			case BoButtonVariant.alternative:
			case BoButtonVariant.primary:
			default:
				classes = TailwindUtils.merge(classes, 'text-white');
				break;
		}
	}

	return classes;
});

const typeClasses = computed(() => {
	let classes = '';

	switch (type.value) {
		case BoButtonType.pill:
			classes = 'rounded-full';
			break;
		case BoButtonType.outline:
		case BoButtonType.default:
		default:
			classes = 'rounded-lg';
			break;
	}

	return classes;
});

const sizeClasses = computed(() => {
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

const colorClasses = computed(() => {
	switch (type.value) {
		case BoButtonType.outline:
			switch (variant.value) {
				case BoButtonVariant.danger:
					return 'border border-red-500 hover:bg-red-600 focus:ring-red-500';
				case BoButtonVariant.warning:
					return 'border border-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500';
				case BoButtonVariant.success:
					return 'border border-green-500 hover:bg-green-600 focus:ring-green-500';
				case BoButtonVariant.dark:
					return 'border border-gray-800 hover:bg-gray-900 focus:ring-gray-800';
				case BoButtonVariant.light:
					return 'border border-gray-200 hover:bg-gray-300 focus:ring-gray-200';
				case BoButtonVariant.link:
					return 'focus:ring-blue-500';
				case BoButtonVariant.alternative:
					return 'border border-gray-300 hover:bg-gray-300 focus:ring-gray-200';
				case BoButtonVariant.secondary:
					return 'border border-gray-500 hover:bg-gray-600 focus:ring-gray-500';
				case BoButtonVariant.primary:
				default:
					return 'border border-blue-600 hover:bg-blue-600 focus:ring-blue-600';
			}
		case BoButtonType.pill:
		case BoButtonType.default:
		default:
			switch (variant.value) {
				case BoButtonVariant.danger:
					return 'bg-red-500 hover:bg-red-600 focus:ring-red-500';
				case BoButtonVariant.warning:
					return 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500';
				case BoButtonVariant.success:
					return 'bg-green-600 hover:bg-green-700 focus:ring-green-600';
				case BoButtonVariant.dark:
					return 'bg-gray-800 hover:bg-gray-900 focus:ring-gray-800';
				case BoButtonVariant.light:
					return 'bg-gray-200 hover:bg-gray-300 focus:ring-gray-200';
				case BoButtonVariant.link:
					return 'text-blue-500 hover:text-blue-600 focus:ring-blue-500';
				case BoButtonVariant.secondary:
					return 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-200';
				case BoButtonVariant.alternative:
					return 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-500';
				case BoButtonVariant.primary:
				default:
					return 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500';
			}
	}
});

const style = computed(() => {
	return `${typeClasses.value} ${sizeClasses.value} ${colorClasses.value} ${disabledClasses} ${textClasses.value} ${textSizes.value}`;
});
</script>
