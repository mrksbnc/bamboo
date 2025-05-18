<template>
	<div
		:id="id"
		:class="groupClasses"
		role="group"
		:aria-disabled="disabled"
		:data-testid="`bo-button-group-${id}`"
	>
		<div :class="listClasses">
			<bo-button-group-item
				v-for="(item, index) in collection"
				:key="item.id"
				:size="size"
				:id="item.id"
				:shape="shape"
				:label="item.label"
				:variant="item.variant"
				:disabled="item.disabled"
				:position="item.position"
				:orientation="orientation"
				:active="activeItemIndex === index"
				:data-testid="`bo-button-group-item-${item.id}`"
				@select="onItemSelect"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoButtonVariant } from '@/components/bo-button/bo-button.js';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { computed, ref } from 'vue';
import BoButtonGroupItem from './bo-button-group-item.vue';
import {
	BoButtonGroupItemProps,
	BoButtonGroupOrientation,
	type BoButtonGroupProps,
} from './bo-button-group.js';

const props = withDefaults(defineProps<BoButtonGroupProps<BoButtonGroupItemProps>>(), {
	id: () => IdentityService.instance.getComponentId('bo-button-group'),
	size: () => BoSize.default,
	variant: () => BoButtonVariant.secondary,
	orientation: () => BoButtonGroupOrientation.horizontal,
	items: () => [],
	defaultActiveIndex: () => -1,
});

const emit = defineEmits<{
	(e: 'select', index: number): void;
}>();

const defaultClasses = /*tw*/ 'flex overflow-hidden max-w-fit';
const defaultListClasses = /*tw*/ 'flex flex-wrap';

const activeItemIndex = ref(props.defaultActiveIndex);

const collection = computed<BoButtonGroupItemProps[]>(() => {
	return props.items.map((item, index) => {
		return {
			id: item.id ?? IdentityService.instance.getComponentId('bo-button-group-item'),
			variant: item.variant ?? props.variant,
			disabled: item.disabled ?? props.disabled,
			shape: item.shape ?? props.shape,
			size: item.size ?? props.size,
			active: activeItemIndex.value === index,
			label: item.label ?? '',
			position: {
				index,
				isLast: index === props.items.length - 1,
				isFirst: index === 0,
				length: props.items.length,
				activeIndex: activeItemIndex.value,
			},
			orientation: props.orientation,
		};
	});
});

const orientationClasses = computed<string>(() => {
	switch (props.orientation) {
		case BoButtonGroupOrientation.vertical:
			return /*tw*/ 'flex-col';
		case BoButtonGroupOrientation.horizontal:
		default:
			return /*tw*/ 'flex-row';
	}
});

const listClasses = computed<string>(() => {
	return TailwindService.instance.merge(defaultListClasses, orientationClasses.value);
});

const groupClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		defaultClasses,
		orientationClasses.value,
		props.disabled ? /*tw*/ 'disabled:cursor-not-allowed disabled:pointer-events-none' : '',
	);
});

function onItemSelect(index: number) {
	activeItemIndex.value = index;
	emit('select', index);
}
</script>
