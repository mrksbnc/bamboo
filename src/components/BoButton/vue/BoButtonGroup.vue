import BoIcon from '@/components/BoIcon/vue/BoIcon.vue';
<template>
	<div
		role="group"
		class="inline-flex flex-row"
	>
		<button
			v-for="(item, index) in items"
			:key="item.id"
			type="button"
			role="button"
			:disabled="disabled"
			:class="buttonGroupClasses"
			class="inline-flex items-center space-x-2 border-b border-t shadow-md first:rounded-s-lg first:border last:rounded-e-lg last:border"
			@click="handleSelect(index, item)"
		>
			<bo-icon
				v-if="item.prefixIcon"
				:icon="item.prefixIcon"
				:size="iconSize"
			/>
			<span>{{ item.label }}</span>
			<bo-icon
				v-if="item.suffixIcon"
				:icon="item.suffixIcon"
				:size="iconSize"
			/>
		</button>
	</div>
</template>

<script setup lang="ts">
import { BoIcon } from '@/components/BoIcon';
import {
	BoButtonGroupSize,
	BoButtonGroupVariant,
	ButtonGroupEvent,
	type BoButtonGroupItem,
} from '@/components/BoButton';
import { computed, toRefs, type PropType } from 'vue';
import { BoSize } from '@/constants';
import { TailwindUtils } from '@/utils';

const emits = defineEmits<{
	(
		e: ButtonGroupEvent.SELECT,
		payload: { index: number; item: BoButtonGroupItem },
	): void;
}>();

const props = defineProps({
	items: {
		type: Array as PropType<BoButtonGroupItem[]>,
		required: true,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	size: {
		type: String as PropType<BoButtonGroupSize>,
		default: BoSize.default,
	},
	variant: {
		type: String as PropType<BoButtonGroupVariant>,
		default: BoButtonGroupVariant.default,
	},
});

const { items, disabled, size, variant } = toRefs(props);

const buttonGroupClasses = computed<string>(() => {
	let classes = '';

	switch (size.value) {
		case BoButtonGroupSize.small:
			classes = TailwindUtils.merge(classes, 'text-xs px-3 py-1');
			break;
		case BoButtonGroupSize.default:
			classes = TailwindUtils.merge(classes, 'text-sm px-4 py-2');
			break;
		case BoButtonGroupSize.large:
			classes = TailwindUtils.merge(classes, 'text-base px-6 py-3');
			break;
	}

	switch (disabled.value) {
		case true:
			classes = TailwindUtils.merge(
				classes,
				'disabled:cursor-not-allowed disabled:opacity-50',
			);
			break;
		case false:
		default:
			classes = TailwindUtils.merge(classes, 'cursor-pointer');
			break;
	}

	if (variant.value === BoButtonGroupVariant.default) {
		const colorClasses = 'text-gray-700 border-gray-300 bg-white';
		const hoverClasses = 'hover:bg-gray-200';
		const darkColorClasses =
			'dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700';
		const focusClasses = 'focus:bg-gray-100 focus:dark:bg-gray-700';

		classes = TailwindUtils.merge(
			classes,
			colorClasses,
			hoverClasses,
			darkColorClasses,
			focusClasses,
		);
	} else if (variant.value === BoButtonGroupVariant.info) {
		const colorClasses = 'text-blue-600 border-blue-600';
		const hoverClasses = 'hover:bg-blue-600 hover:text-white';
		const darkColorClasses =
			'dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white';
		const focusClasses =
			'focus:text-white focus:dark:text-white focus:bg-blue-600 focus:dark:bg-blue-500';

		classes = TailwindUtils.merge(
			classes,
			colorClasses,
			hoverClasses,
			darkColorClasses,
			focusClasses,
		);
	} else if (variant.value === BoButtonGroupVariant.danger) {
		const colorClasses = 'text-red-600 border-red-600';
		const hoverClasses = 'hover:bg-red-600 hover:text-white';
		const darkColorClasses =
			'dark:border-red-500 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white';
		const focusClasses =
			'focus:text-white focus:dark:text-white focus:bg-red-600 focus:dark:bg-red-500';

		classes = TailwindUtils.merge(
			classes,
			colorClasses,
			hoverClasses,
			darkColorClasses,
			focusClasses,
		);
	} else if (variant.value === BoButtonGroupVariant.success) {
		const colorClasses = 'text-green-600 border-green-600';
		const hoverClasses = 'hover:bg-green-600 hover:text-white';
		const darkColorClasses =
			'dark:border-green-500 dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-white';
		const focusClasses =
			'focus:text-white focus:dark:text-white focus:bg-green-600 focus:dark:bg-green-500';

		classes = TailwindUtils.merge(
			classes,
			colorClasses,
			hoverClasses,
			darkColorClasses,
			focusClasses,
		);
	} else if (variant.value === BoButtonGroupVariant.warning) {
		const colorClasses = 'text-yellow-600 border-yellow-600';
		const hoverClasses = 'hover:bg-yellow-600 hover:text-white';
		const darkColorClasses =
			'dark:border-yellow-500 dark:text-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-white';
		const focusClasses =
			'focus:text-white focus:dark:text-white focus:bg-yellow-600 focus:dark:bg-yellow-500';

		classes = TailwindUtils.merge(
			classes,
			colorClasses,
			hoverClasses,
			darkColorClasses,
			focusClasses,
		);
	} else if (variant.value === BoButtonGroupVariant.dark) {
		const colorClasses = 'text-gray-700 border-gray-700';
		const hoverClasses = 'hover:bg-gray-700 hover:text-white';
		const darkColorClasses =
			'dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-white';
		const focusClasses =
			'focus:text-white focus:dark:text-white focus:bg-gray-700 focus:dark:bg-gray-300';

		classes = TailwindUtils.merge(
			classes,
			colorClasses,
			hoverClasses,
			darkColorClasses,
			focusClasses,
		);
	}

	return classes;
});

const iconSize = computed<BoSize>(() => {
	switch (size.value) {
		case BoButtonGroupSize.small:
			return BoSize.small;
		case BoButtonGroupSize.large:
			return BoSize.large;
		case BoButtonGroupSize.default:
		default:
			return BoSize.default;
	}
});

const handleSelect = (index: number, item: BoButtonGroupItem): void => {
	emits(ButtonGroupEvent.SELECT, { index, item });
};
</script>
