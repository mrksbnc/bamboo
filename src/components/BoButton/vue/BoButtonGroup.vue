import BoIcon from '@/components/BoIcon/vue/BoIcon.vue';
<template>
	<div
		class="inline-flex rounded-md shadow-sm"
		role="group"
	>
		<button
			v-for="(item, index) in items"
			:key="index"
			type="button"
			:class="style"
			@click="handleSelect(index)"
		>
			<BoIcon
				v-if="item.prefixIcon"
				:icon="item.prefixIcon"
			/>
			<span>{{ item.label }}</span>
			<BoIcon
				v-if="item.suffixIcon"
				:icon="item.suffixIcon"
			/>
		</button>
	</div>
</template>

<script setup lang="ts">
import { BoIcon } from '@/components/BoIcon';
import {
	BoButtonVariant,
	ButtonGroupEvent,
	type BoButtonGroupItem,
} from '@/components/BoButton';
import { computed, ref, toRefs, type PropType } from 'vue';
import { BoSize } from '@/constants';

const emits = defineEmits<{
	(e: ButtonGroupEvent.SELECT, index: number): void;
}>();

const props = defineProps({
	items: {
		type: Array as PropType<BoButtonGroupItem[]>,
		required: true,
	},
	defaultSelected: {
		type: Number,
		default: null,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	size: {
		type: String as PropType<BoSize>,
		default: BoSize.default,
	},
});

const { items, defaultSelected } = toRefs(props);

const activeItem = ref<number | null>(defaultSelected.value);

const style = computed<string>(() => {
	return 'inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white';
});

const handleSelect = (index: number): void => {
	activeItem.value = index;
	emits(ButtonGroupEvent.SELECT, index);
};
</script>
