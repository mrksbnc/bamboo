<template>
	<button
		aria-label="button-with-icon"
		:disabled="disabled"
		:class="[computedTypeClass]"
		class="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
		:style="{
			backgroundColor: backgroundColor,
			width: `${computedSize}px`,
			height: `${computedSize}px`,
		}"
		@click="clickHandler($event)"
	>
		<cl-icon
			:icon="icon"
			:color="iconColor"
			:size="computedIconSize"
		/>
	</button>
</template>

<script setup lang="ts">
	import { Color } from '@/data';
	import { ClIcon, Icon } from '../Icon';
	import { toRefs, type PropType, computed } from 'vue';
	import { IconButtonSize, IconButtonType } from './constants';

	const props = defineProps({
		icon: {
			type: String as PropType<Icon>,
			default: Icon.none,
			required: true,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		buttonSize: {
			type: String as PropType<IconButtonSize>,
			default: IconButtonSize.base,
		},
		iconColor: {
			type: String as PropType<Color | string>,
			default: Color.black,
		},
		backgroundColor: {
			type: String as PropType<Color | string>,
			default: Color['gray-100'],
		},
		type: {
			type: String as PropType<IconButtonType>,
			default: IconButtonType.rounded,
		},
		onClick: {
			type: Function as PropType<(event: MouseEvent) => void>,
			default: () => {},
		},
	});

	const { icon, disabled, buttonSize, iconColor, backgroundColor, type, onClick } = toRefs(props);

	const computedTypeClass = computed(() => {
		switch (type.value) {
			case IconButtonType.square:
				return '';
			case IconButtonType.circle:
				return 'rounded-full';
			case IconButtonType.rounded:
			default:
				return 'rounded-md';
		}
	});

	const computedSize = computed(() => {
		switch (buttonSize.value) {
			case IconButtonSize.extra_small:
				return 32;
			case IconButtonSize.small:
				return 40;
			case IconButtonSize.large:
				return 56;
			case IconButtonSize.extra_large:
				return 64;
			case IconButtonSize.base:
			default:
				return 48;
		}
	});

	const computedIconSize = computed(() => {
		switch (buttonSize.value) {
			case IconButtonSize.extra_small:
				return 16;
			case IconButtonSize.small:
				return 20;
			case IconButtonSize.large:
				return 28;
			case IconButtonSize.extra_large:
				return 32;
			case IconButtonSize.base:
			default:
				return 24;
		}
	});

	const clickHandler = (event: MouseEvent): void => {
		if (disabled.value) return;
		onClick.value(event);
	};
</script>
