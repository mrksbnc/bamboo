<template>
	<div
		:id="id"
		:class="containerClasses"
		role="group"
		:aria-label="computedAriaLabel"
		:aria-disabled="disabled"
		:data-testid="constructAttribute(id, 'button-group')"
	>
		<div :class="listClasses">
			<bo-button-group-item
				v-for="(item, index) in collection"
				:key="item.id"
				:size="size"
				:id="item.id"
				:shape="shape"
				:variant="variant"
				:label="item.label"
				:disabled="item.disabled"
				:position="item.position"
				:orientation="orientation"
				:aria-label="item.ariaLabel"
				:active="isItemActive(index)"
				:prefix-icon="item.prefixIcon"
				:suffix-icon="item.suffixIcon"
				:data-testid="constructAttribute(item.id ?? '', 'button-group-item')"
				@select="onItemSelect"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoButtonVariant } from '@/components/button/bo-button.js';
import { Icon } from '@/components/icon/bo-icon.js';
import { useAttributes } from '@/composables/use-attributes';
import { IdentityService } from '@/services/identity-service.js';
import { StringService } from '@/services/string-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { computed, ref } from 'vue';
import BoButtonGroupItem from './bo-button-group-item.vue';
import {
	BoButtonGroupItemProps,
	BoButtonGroupOrientation,
	BoButtonGroupShape,
	type BoButtonGroupProps,
} from './bo-button-group.js';

const props = withDefaults(defineProps<BoButtonGroupProps<BoButtonGroupItemProps>>(), {
	id: () => IdentityService.instance.getComponentId(),
	defaultActiveIndex: -1,
	items: () => [],
	size: () => BoSize.default,
	shape: () => BoButtonGroupShape.rounded,
	variant: () => BoButtonVariant.secondary,
	orientation: () => BoButtonGroupOrientation.horizontal,
});

const emit = defineEmits<{
	(e: 'select', index: number): void;
	(e: 'multiSelect', indices: number[]): void;
}>();

const { constructAttribute } = useAttributes();

const BUTTON_GROUP_STYLE = {
	layout: {
		container: /*tw*/ 'bo-button-group flex overflow-hidden max-w-fit',
		list: /*tw*/ 'bo-button-group__list flex flex-wrap',
	},
	orientation: {
		[BoButtonGroupOrientation.horizontal]: /*tw*/ 'bo-button-group--horizontal flex-row',
		[BoButtonGroupOrientation.vertical]: /*tw*/ 'bo-button-group--vertical flex-col',
	},
	interactive: {
		default: /*tw*/ '',
		disabled:
			/*tw*/ 'bo-button-group--disabled disabled:cursor-not-allowed disabled:pointer-events-none',
	},
} as const;

const activeItemIndex = ref(props.defaultActiveIndex);
const selectedIndices = ref<Set<number>>(new Set());

const collection = computed<BoButtonGroupItemProps[]>(() => {
	return props.items.map((item, index) => {
		return {
			id: item.id ?? IdentityService.instance.getComponentId(),
			disabled: item.disabled ?? props.disabled,
			shape: item.shape ?? props.shape,
			size: item.size ?? props.size,
			variant: item.variant ?? props.variant,
			active: isItemActive(index),
			label: item.label ?? '',
			prefixIcon: item.prefixIcon ?? Icon.none,
			suffixIcon: item.suffixIcon ?? Icon.none,
			ariaLabel: item.ariaLabel,
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

const computedAriaLabel = computed<string>(() => {
	if (props.ariaLabel && !StringService.instance.isEmptyStr(props.ariaLabel)) {
		return props.ariaLabel;
	}
	return props.multiSelect ? 'Multi-select button group' : 'Button group';
});

const containerClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		BUTTON_GROUP_STYLE.layout.container,
		BUTTON_GROUP_STYLE.orientation[props.orientation],
		props.disabled
			? BUTTON_GROUP_STYLE.interactive.disabled
			: BUTTON_GROUP_STYLE.interactive.default,
	);
});

const listClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		BUTTON_GROUP_STYLE.layout.list,
		BUTTON_GROUP_STYLE.orientation[props.orientation],
	);
});

function isItemActive(index: number): boolean {
	if (props.multiSelect) {
		return selectedIndices.value.has(index);
	}
	return activeItemIndex.value === index;
}

function onItemSelect(index: number) {
	if (props.multiSelect) {
		if (selectedIndices.value.has(index)) {
			selectedIndices.value.delete(index);
		} else {
			selectedIndices.value.add(index);
		}
		emit('multiSelect', Array.from(selectedIndices.value));
	} else {
		activeItemIndex.value = index;
		emit('select', index);
	}
}
</script>
