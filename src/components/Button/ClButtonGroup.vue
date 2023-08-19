<template>
	<div class="max-w-lg mx-auto">
		<div
			class="inline-flex shadow-sm rounded-md mb-5"
			role="group"
		>
			<button
				v-for="(item, index) in items"
				:key="item.id"
				type="button"
				:class="[getClass(index), itemTypeColorClass]"
				class="border text-sm font-medium px-4 py-2 focus:z-10 focus:ring-1 focus:ring-blue-700"
			>
				<span
					v-if="item.prefix"
					:class="`button_group__prefix__${index}`"
				>
					<cl-icon
						:icon="item.prefix"
						:color="item.iconColor"
					/>
				</span>
				<span :class="`button_group__label__${index}`">
					{{ item.label }}
				</span>
				<span
					v-if="item.prefix"
					:class="`button_group__suffix__${index}`"
				>
					<cl-icon
						:icon="item.prefix"
						:color="item.iconColor"
					/>
				</span>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ClIcon } from '../Icon';
	import { toRefs, type PropType, computed, compile } from 'vue';
	import type { ButtonGroupItem } from './types';
	import { ButtonType } from '.';

	const props = defineProps({
		items: {
			type: Array as PropType<ButtonGroupItem[]>,
			default: () => [],
		},
		type: {
			type: String as PropType<ButtonType>,
			default: ButtonType.primary,
		},
		fillBackground: {
			type: Boolean,
			default: false,
		},
	});

	const { items, type, fillBackground } = toRefs(props);

	const itemTypeColorClass = computed<string>(() => {
		switch (type.value) {
			case ButtonType.primary:
				return fillBackground.value
					? 'bg-gray-100 '
					: '' +
							'text-gray-700 hover:bg-gray-200 border-gray-200 hover:text-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:border-gray-600 dark:hover:text-blue-700 dark:focus:text-blue-700';

			case ButtonType.secondary:
				return fillBackground.value
					? 'bg-gray-100 '
					: '' +
							'text-gray-700 hover:bg-gray-200 border-gray-200 hover:text-gray-800 focus:text-gray-800 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:border-gray-600 dark:hover:text-gray-800 dark:focus:text-gray-800';

			case ButtonType.danger:
				return fillBackground.value
					? 'bg-gray-100 '
					: '' +
							'text-red-700 hover:bg-red-200 border-red-200 hover:text-red-800 focus:text-red-800 dark:bg-red-700 dark:text-red-100 dark:hover:bg-red-600 dark:border-red-600 dark:hover:text-red-800 dark:focus:text-red-800';

			case ButtonType.success:
				return fillBackground.value
					? 'bg-gray-100 '
					: '' +
							' text-green-700 hover:bg-green-200 border-green-200 hover:text-green-800 focus:text-green-800 dark:bg-green-700 dark:text-green-100 dark:hover:bg-green-600 dark:border-green-600 dark:hover:text-green-800 dark:focus:text-green-800';

			case ButtonType.warning:
				return fillBackground.value
					? 'bg-gray-100 '
					: '' +
							' text-yellow-700 hover:bg-yellow-200 border-yellow-200 hover:text-yellow-800 focus:text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100 dark:hover:bg-yellow-600 dark:border-yellow-600 dark:hover:text-yellow-800 dark:focus:text-yellow-800';

			case ButtonType.light:
				return fillBackground.value
					? 'bg-gray-100 '
					: '' +
							'text-blue-700 hover:bg-blue-200 border-blue-200 hover:text-blue-800 focus:text-blue-800 dark:bg-blue-700 dark:text-blue-100 dark:hover:bg-blue-600 dark:border-blue-600 dark:hover:text-blue-800 dark:focus:text-blue-800';

			case ButtonType.dark:
				return fillBackground.value
					? 'bg-gray-100 '
					: '' +
							'text-gray-100 hover:bg-gray-800 border-gray-800 hover:text-gray-100 focus:text-gray-100 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 dark:border-gray-200 dark:hover:text-gray-900 dark:focus:text-gray-900';
			default:
				return 'bg-white text-gray-900 hover:bg-gray-100 border-gray-200 hover:text-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:border-gray-700 dark:hover:text-blue-700 dark:focus:text-blue-700';
		}
	});

	const getClass = (index: number): string => {
		if (index === 0) return 'rounded-l-lg ';
		if (index === items.value.length - 1) return 'rounded-r-lg ';
		return '';
	};
</script>
