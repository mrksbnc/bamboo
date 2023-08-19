<template>
	<button
		:disabled="disabled"
		:class="[computedTypeClass]"
		class="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
		:style="{
			backgroundColor: backgroundColor,
			width: `${computedSize}px`,
			height: `${computedSize}px`,
		}"
		@click="handleClick"
		@focus="handleFocus"
		@hover="handleHover"
		@mouseup="handleMouseup"
		@mouseout="handleMouseout"
		@mouseover="handleMouseover"
		@mousedown="handleMousedown"
		@mouseenter="handleMouseenter"
		@mouseleave="handleMouseleave"
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
	import { ButtonEvents, IconButtonSize, IconButtonType } from './constants';

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
	});

	const { icon, disabled, buttonSize, iconColor, backgroundColor, type } = toRefs(props);

	const emits = defineEmits({
		[ButtonEvents.click]: (event: MouseEvent) => event instanceof MouseEvent,
		[ButtonEvents.hover]: (event: FocusEvent) => event instanceof FocusEvent,
		[ButtonEvents.focus]: (event: FocusEvent) => event instanceof FocusEvent,
		[ButtonEvents.mouseover]: (event: MouseEvent) => event instanceof MouseEvent,
		[ButtonEvents.mouseout]: (event: MouseEvent) => event instanceof MouseEvent,
		[ButtonEvents.mouseenter]: (event: MouseEvent) => event instanceof MouseEvent,
		[ButtonEvents.mouseleave]: (event: MouseEvent) => event instanceof MouseEvent,
		[ButtonEvents.mousedown]: (event: MouseEvent) => event instanceof MouseEvent,
		[ButtonEvents.mouseup]: (event: MouseEvent) => event instanceof MouseEvent,
	});

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

	const handleClick = (event: MouseEvent): void => {
		if (!disabled.value) {
			emits(ButtonEvents.click, event);
		}
	};

	const handleHover = (event: FocusEvent): void => {
		if (!disabled.value) {
			emits(ButtonEvents.hover, event);
		}
	};

	const handleFocus = (event: FocusEvent): void => {
		if (!disabled.value) {
			emits(ButtonEvents.focus, event);
		}
	};

	const handleMouseenter = (event: MouseEvent): void => {
		if (!disabled.value) {
			emits(ButtonEvents.mouseenter, event);
		}
	};

	const handleMouseleave = (event: MouseEvent): void => {
		if (!disabled.value) {
			emits(ButtonEvents.mouseleave, event);
		}
	};

	const handleMouseover = (event: MouseEvent): void => {
		if (!disabled.value) {
			emits(ButtonEvents.mouseover, event);
		}
	};

	const handleMouseout = (event: MouseEvent): void => {
		if (!disabled.value) {
			emits(ButtonEvents.mouseout, event);
		}
	};

	const handleMouseup = (event: MouseEvent): void => {
		if (!disabled.value) {
			emits(ButtonEvents.mouseup, event);
		}
	};

	const handleMousedown = (event: MouseEvent): void => {
		if (!disabled.value) {
			emits(ButtonEvents.mousedown, event);
		}
	};
</script>
