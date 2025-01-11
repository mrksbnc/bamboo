<template>
	<div
		:style="slotCardWidth.style"
		:class="[cardContainerClasses, 'bo-card rounded-lg border border-gray-300 bg-white shadow-lg']"
	>
		<div v-if="$slots['content'] != null" :class="contentClasses">
			<slot name="content"></slot>
		</div>
		<div v-else :class="[contentClasses, 'flex flex-col gap-2']">
			<bo-text
				v-if="title != null"
				:text="title"
				:clickable="clickable"
				:color="BoTextColor.current"
				:size="BoFontSize['2xl']"
				:font-family="BoFontFamily.sans"
				:weight="BoFontWeight.semibold"
				class="bo-card__title"
			/>
			<bo-text
				v-if="description != null"
				:text="description"
				:clickable="clickable"
				:size="BoFontSize.sm"
				:color="BoTextColor.secondary"
				:font-family="BoFontFamily.sans"
				class="bo-card__description"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoFontFamily, BoFontSize, BoFontWeight, BoText, BoTextColor } from '@/components/bo_text';
import type { StyleConstruct } from '@/types';
import { TailwindUtils } from '@/utils';
import { computed, toRefs } from 'vue';
import type { BoCardProps } from './bo_card';

const props = withDefaults(defineProps<BoCardProps>(), {
	padding: () => ({
		top: true,
		right: true,
		bottom: true,
		left: true,
	}),
});

const { padding, clickable, widthAsTailwindClass, widthInPercent, widthInPx, title, description } =
	toRefs(props);

const contentClasses = /*tw*/ 'bo-card__content overflow-y-auto overflow-x-hidden';

const slotCardWidth = computed<StyleConstruct>(() => {
	const construct: StyleConstruct = {
		style: {},
		class: /*tw*/ '',
	};

	if (widthInPercent.value != null) {
		construct.style = {
			width: `${widthInPercent.value}%`,
		};
	}

	if (widthInPx.value != null) {
		construct.style = {
			width: `${widthInPx.value}px`,
		};
	}

	if (widthAsTailwindClass.value != null) {
		construct.class = widthAsTailwindClass.value;
	}

	if (
		(!widthAsTailwindClass.value || widthAsTailwindClass.value === '') &&
		!widthInPx.value &&
		!widthInPercent.value
	) {
		construct.class = /*tw*/ 'w-fit max-w-md';
	}

	return construct;
});

const cardContainerCursorClasses = computed<string>(() => {
	return clickable.value ? 'cursor-pointer hover:bg-gray-100' : 'cursor-default';
});

const cardContainerPaddingClasses = computed<string>(() => {
	return TailwindUtils.merge(
		padding.value.top ? 'pt-4' : 'pt-0',
		padding.value.right ? 'pr-4' : 'pr-0',
		padding.value.bottom ? 'pb-4' : 'pb-0',
		padding.value.left ? 'pl-4' : 'pl-0',
	);
});

const cardContainerClasses = computed<string>(() => {
	return TailwindUtils.merge(
		'bo-card__container',
		slotCardWidth.value.class,
		cardContainerCursorClasses.value,
		cardContainerPaddingClasses.value,
	);
});
</script>
