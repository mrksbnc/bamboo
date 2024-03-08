<template>
	<button
		type="button"
		role="button"
		:disabled="disabled"
		:class="[containerStyle, typeClass]"
		class="flex justify-center items-center"
	>
		<bo-icon
			:icon="icon"
			:size="iconSize"
		/>
	</button>
</template>

<script setup lang="ts">
import { BoIcon, type Icon } from '@/components/BoIcon';
import { BoSize } from '@/constants';
import { TailwindUtils } from '@/utils';
import { computed, toRefs, type PropType } from 'vue';
import { BoButtonVariant, BoIconButtonType } from '@/components/BoButton';

const props = defineProps({
	icon: {
		type: String as PropType<Icon>,
		required: true,
	},
	size: {
		type: String as PropType<BoSize>,
		default: BoSize.default,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	variant: {
		type: String as PropType<BoButtonVariant>,
		default: BoButtonVariant.secondary,
	},
	type: {
		type: String as PropType<BoIconButtonType>,
		default: BoIconButtonType.default,
	},
});

const { icon, size, disabled, variant, type } = toRefs(props);

const disabledClasses: string =
	'disabled:opacity-50 disabled:cursor-not-allowed';
const defaultClasses: string =
	'flex items-center justify-center transition-opacity duration-200 cursor-pointer shadow-md';

const typeClass = computed<string>(() => {
	switch (type.value) {
		case BoIconButtonType.round:
			return 'rounded-full';
		case BoIconButtonType.default:
		default:
			return 'rounded-lg';
	}
});

const containerStyle = computed<string>(() => {
	let sizeClasses = '';

	switch (size.value) {
		case BoSize.extra_small:
			sizeClasses = 'w-6 h-6';
			break;
		case BoSize.small:
			sizeClasses = 'w-8 h-8';
			break;
		case BoSize.large:
			sizeClasses = 'w-12 h-12';
			break;
		case BoSize.extra_large:
			sizeClasses = 'w-14 h-14';
			break;
		case BoSize.default:
		default:
			sizeClasses = 'w-10 h-10';
	}

	let paddingClasses = '';

	switch (size.value) {
		case BoSize.extra_small:
			paddingClasses = 'p-1';
			break;
		case BoSize.small:
			paddingClasses = 'p-2';
			break;
		case BoSize.large:
			paddingClasses = 'p-3';
			break;
		case BoSize.extra_large:
			paddingClasses = 'p-4';
			break;
		case BoSize.default:
		default:
			paddingClasses = 'p-1';
	}

	let colorClasses = '';

	switch (variant.value) {
		case BoButtonVariant.secondary:
			colorClasses = 'bg-neutral-50 hover:bg-neutral-100 text-gray-700';
			break;
		case BoButtonVariant.danger:
			colorClasses = 'bg-red-600 hover:bg-red-700 text-white';
			break;
		case BoButtonVariant.success:
			colorClasses = 'bg-green-500 hover:bg-green-600 text-white';
			break;
		case BoButtonVariant.warning:
			colorClasses = 'bg-yellow-500 hover:bg-yellow-600 text-white';
			break;
		case BoButtonVariant.dark:
			colorClasses = 'bg-gray-800 hover:bg-gray-900 text-white';
			break;
		case BoButtonVariant.purple:
			colorClasses = 'bg-purple-500 hover:bg-purple-600 text-white';
			break;
		case BoButtonVariant.teal:
			colorClasses = 'bg-teal-500 hover:bg-teal-600 text-white';
			break;
		case BoButtonVariant.primary:
		default:
			colorClasses = 'bg-blue-700 hover:bg-blue-800 text-white';
			break;
	}

	return TailwindUtils.merge(
		defaultClasses,
		disabledClasses,
		paddingClasses,
		sizeClasses,
		colorClasses,
	);
});

const iconSize = computed<BoSize>(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return BoSize.extra_small;
		case BoSize.small:
			return BoSize.small;
		case BoSize.large:
		case BoSize.extra_large:
			return BoSize.large;
		case BoSize.default:
		default:
			return BoSize.default;
	}
});
</script>
