<template>
	<div
		class="inline-flex rounded-md shadow-sm"
		role="group"
	>
		<button
			type="button"
			:key="item.id"
			@click="select(item, index)"
			:class="[
				getClass(index),
				isSelectedItem(item)
					? 'border-blue-700 focus:ring-blue-700 focus:text-blue-700 dark:focus:ring-blue-500 dark:focus:text-white focus:z-10 focus:ring-1'
					: 'text-gray-700 bg-white',
			]"
			v-for="(item, index) in items"
			class="flex items-center justify-center px-4 py-2 text-sm font-medium bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600"
		>
			<span
				v-if="item.prefix"
				class="mr-2"
				:class="`button_group__prefix__${index}`"
			>
				<ds-icon
					:size="14"
					:icon="item.prefix"
					class="text-gray-800 dark:text-gray-300"
				/>
			</span>
			<span :class="`button_group__label__${index}`">
				{{ item.label }}
			</span>
			<span
				v-if="item.suffix"
				class="ml-2"
				:class="`button_group__suffix__${index}`"
			>
				<ds-icon
					:size="14"
					:icon="item.suffix"
					class="text-gray-800 dark:text-gray-300"
				/>
			</span>
		</button>
	</div>
</template>

<script setup lang="ts">
	import { Color } from '@/data';
	import { DsIcon, Icon } from '../Icon';
	import { ButtonGroupEvents } from './events';
	import type { ButtonGroupItem } from './types';
	import { toRefs, type PropType, ref, computed, watch, nextTick } from 'vue';

	const emits = defineEmits({
		[ButtonGroupEvents.select]: ({ item, index }: { item: ButtonGroupItem; index: number }) => true,
	});

	const props = defineProps({
		items: {
			type: Array as PropType<ButtonGroupItem[]>,
			default: () => [],
		},
		selected: {
			type: Number,
			default: null,
		},
		icon: {
			type: String as PropType<Icon>,
			default: null,
		},
	});

	const { items, selected, icon } = toRefs(props);

	const selectedId = ref<number | null>(selected.value ?? null);

	const select = (item: ButtonGroupItem, index: number): void => {
		selectedId.value = item.id;
		emits(ButtonGroupEvents.select, { item, index });
	};

	const isSelectedItem = (item: ButtonGroupItem): boolean => {
		return item.id === selectedId.value;
	};

	const getClass = (index: number): string => {
		if (index === 0 && items.value.length != 1) return 'rounded-l-lg ';
		if (index === items.value.length - 1 && items.value.length != 1) return 'rounded-r-lg ';
		if (items.value.length === 1) return 'rounded-lg ';
		return '';
	};
</script>
