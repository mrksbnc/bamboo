<template>
	<div
		:style="slotCardWidth.style"
		:class="[
			cardContainerClasses,
			'bo-card rounded-lg border border-gray-300 bg-white shadow dark:border-gray-700 dark:bg-gray-800',
		]"
	>
		<div
			v-if="$slots['content'] != null"
			:class="contentClasses"
		>
			<slot name="content"></slot>
		</div>
		<div
			v-else
			:class="[contentClasses, 'flex flex-col gap-2']"
		>
			<bo-text
				v-if="title != null"
				:text="title"
				:clickable="clickable"
				:color="BoTextColor.current"
				:size="BoFontSize.modal_title"
				:font-family="BoFontFamily.inter"
			/>
			<bo-text
				v-if="description != null"
				:text="description"
				:clickable="clickable"
				:size="BoFontSize.small"
				:color="BoTextColor.disabled"
				:font-family="BoFontFamily.inter"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	BoFontFamily,
	BoFontSize,
	BoText,
	BoTextColor,
} from '@/components/bo_text';
import type { StyleConstruct } from '@/types';
import { TailwindUtils } from '@/utils';
import { computed, toRefs } from 'vue';
import type { BoCardProps } from './types';

const props = withDefaults(defineProps<BoCardProps>(), {
	padding: () => ({
		top: true,
		right: true,
		bottom: true,
		left: true,
	}),
});

const {
	padding,
	clickable,
	widthAsTailwindClass,
	widthInPercent,
	widthInPx,
	title,
	description,
} = toRefs(props);

const contentClasses =
	/*tw*/ 'bo-card__content overflow-y-auto overflow-x-hidden';

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
		(widthAsTailwindClass.value == null || widthAsTailwindClass.value === '') &&
		widthInPx.value == null &&
		widthInPercent.value == null
	) {
		construct.class = /*tw*/ 'w-fit max-w-md';
	}

	return construct;
});

const cardContainerCursorClasses = computed<string>(() => {
	return clickable.value
		? 'cursor-pointer hover:bg-gray-100'
		: 'cursor-default';
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
