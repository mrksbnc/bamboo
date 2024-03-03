<template>
	<button
		type="button"
		:disabled="disabled"
		:class="[`bo-button--${variant}`, style]"
	>
		<span class="bo-button__prefix">
			<BoIcon
				v-if="prefixIcon"
				:icon="prefixIcon"
			/>
		</span>
		<span class="bo-button__label">
			{{ label }}
		</span>
		<span class="bo-button__suffix">
			<BoIcon
				v-if="suffixIcon"
				:icon="suffixIcon"
			/>
		</span>
	</button>
</template>

<script setup lang="ts">
import { computed, toRefs, type PropType } from 'vue';
import { BoButtonType, BoButtonVariant } from './bo_button';
import { BoSize } from '@/enums/size';
import BoIcon from '../BoIcon/BoIcon.vue';

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
		type: String,
		default: null,
	},
	suffixIcon: {
		type: String,
		default: null,
	},
});

const { label, variant, type, disabled, size, prefixIcon, suffixIcon } =
	toRefs(props);

const disabledClasses = 'disabled:cursor-not-allowed disabled:opacity-50';

const sizeClasses = computed(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return 'px-3 py-2';
		case BoSize.small:
			return 'px-3 py-2';
		case BoSize.large:
			return 'px-5 py-3';
		case BoSize.extra_large:
			return 'px-6 py-3.5';
		case BoSize.default:
		default:
			return 'px-5 py-2.5';
	}
});

const colorClasses = computed(() => {
	switch (type.value) {
		case BoButtonType.outline:
			switch (variant.value) {
				case BoButtonVariant.danger:
					return 'border border-red-500 text-white hover:bg-red-600 focus:ring-red-500';
				case BoButtonVariant.warning:
					return 'border-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500';
				case BoButtonVariant.success:
					return 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500';
				case BoButtonVariant.dark:
					return 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-800';
				case BoButtonVariant.light:
					return 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-200';
				case BoButtonVariant.link:
					return 'text-blue-500 hover:text-blue-600 focus:ring-blue-500';
				case BoButtonVariant.alternative:
					return 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-200';
				case BoButtonVariant.secondary:
					return 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500';
				case BoButtonVariant.primary:
				default:
					return 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500';
			}
		case BoButtonType.pill:
		case BoButtonType.default:
		default:
			switch (variant.value) {
				case BoButtonVariant.danger:
					return 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500';
				case BoButtonVariant.warning:
					return 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500';
				case BoButtonVariant.success:
					return 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500';
				case BoButtonVariant.dark:
					return 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-800';
				case BoButtonVariant.light:
					return 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-200';
				case BoButtonVariant.link:
					return 'text-blue-500 hover:text-blue-600 focus:ring-blue-500';
				case BoButtonVariant.alternative:
					return 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-200';
				case BoButtonVariant.secondary:
					return 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500';
				case BoButtonVariant.primary:
				default:
					return 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500';
			}
	}
});

const style = computed(() => {
	return `${sizeClasses.value} ${colorClasses.value} ${disabled.value ? disabledClasses : ''}`;
});
</script>
