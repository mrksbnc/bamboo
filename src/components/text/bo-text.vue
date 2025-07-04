<template>
	<span
		:id="id"
		:class="classes"
		:style="containerStyle"
		:data-testid="`bo-text-${id}`"
	>
		{{ value }}
	</span>
</template>

<script setup lang="ts">
import { IdentityService, StringService, TailwindService } from '@/services';
import { computed, type StyleValue } from 'vue';
import {
	BoFontFamily,
	BoFontSize,
	BoFontWeight,
	BoTextAlign,
	BoTextColor,
	BoTextWhiteSpace,
	type BoTextProps,
} from './bo-text';

const props = withDefaults(defineProps<BoTextProps>(), {
	id: () => IdentityService.instance.getComponentId('bo-text'),
	size: () => BoFontSize.base,
	color: () => BoTextColor.inherit,
	textAlign: () => BoTextAlign.left,
	weight: () => BoFontWeight.regular,
	fontFamily: () => BoFontFamily.sans,
	whiteSpace: () => BoTextWhiteSpace.normal,
});

const defaultClasses = /*tw*/ 'bo-text block max-w-fit';

const textCursor = computed<string>(() => {
	if (props?.cursor) {
		return props.cursor;
	}

	if (props?.clickable) {
		return /*tw*/ 'cursor-pointer';
	}

	if (props?.selectable) {
		return /*tw*/ 'cursor-text';
	}

	return /*tw*/ 'cursor-default';
});

const fontSize = computed<string>(() => {
	switch (props.size) {
		case BoFontSize.xs:
			return /*tw*/ 'text-xs';
		case BoFontSize.sm:
			return /*tw*/ 'text-sm';
		case BoFontSize.lg:
			return /*tw*/ 'text-lg';
		case BoFontSize.xl:
			return /*tw*/ 'text-xl';
		case BoFontSize['2xl']:
			return /*tw*/ 'text-2xl';
		case BoFontSize['3xl']:
			return /*tw*/ 'text-3xl';
		case BoFontSize['4xl']:
			return /*tw*/ 'text-4xl';
		case BoFontSize['5xl']:
			return /*tw*/ 'text-5xl';
		case BoFontSize['6xl']:
			return /*tw*/ 'text-6xl';
		case BoFontSize['7xl']:
			return /*tw*/ 'text-7xl';
		case BoFontSize['8xl']:
			return /*tw*/ 'text-8xl';
		case BoFontSize['9xl']:
			return /*tw*/ 'text-9xl';
		case BoFontSize.base:
		default:
			return /*tw*/ 'text-base';
	}
});

const fontWeight = computed<string>(() => {
	switch (props.weight) {
		case BoFontWeight.light:
			return /*tw*/ 'font-light';
		case BoFontWeight.medium:
			return /*tw*/ 'font-medium';
		case BoFontWeight.semibold:
			return /*tw*/ 'font-semibold';
		case BoFontWeight.bold:
			return /*tw*/ 'font-bold';
		case BoFontWeight.regular:
		default:
			return /*tw*/ 'font-normal';
	}
});

const textFontFamily = computed<string>(() => {
	switch (props.fontFamily) {
		case BoFontFamily.mono:
			return /*tw*/ 'font-mono';
		case BoFontFamily.serif:
			return /*tw*/ 'font-serif';
		case BoFontFamily.sans:
		default:
			return /*tw*/ 'font-sans';
	}
});

const textWhiteSpaceClasses = computed<string>(() => {
	switch (props.whiteSpace) {
		case BoTextWhiteSpace.nowrap:
			return /*tw*/ 'truncate';
		case BoTextWhiteSpace.pre:
			return /*tw*/ 'whitespace-pre text-clip';
		case BoTextWhiteSpace.pre_line:
			return /*tw*/ 'whitespace-pre-line text-clip';
		case BoTextWhiteSpace.pre_wrap:
			return /*tw*/ 'whitespace-pre-wrap text-clip';
		case BoTextWhiteSpace.break_spaces:
			return /*tw*/ 'break-spaces text-clip';
		case BoTextWhiteSpace.normal:
		default:
			return /*tw*/ 'whitespace-normal text-clip';
	}
});

const fontColor = computed<string>(() => {
	switch (props.color) {
		case BoTextColor.default:
			return /*tw*/ 'text-neutral-900 dark:text-neutral-100';
		case BoTextColor.inherit:
			return /*tw*/ 'text-inherit';
		case BoTextColor.primary:
			return /*tw*/ 'text-blue-600 dark:text-blue-400';
		case BoTextColor.secondary:
			return /*tw*/ 'text-neutral-600 dark:text-neutral-400';
		case BoTextColor.success:
			return /*tw*/ 'text-green-600 dark:text-green-400';
		case BoTextColor.warning:
			return /*tw*/ 'text-yellow-600 dark:text-yellow-400';
		case BoTextColor.danger:
			return /*tw*/ 'text-red-600 dark:text-red-400';
		case BoTextColor.light:
			return /*tw*/ 'text-neutral-200 dark:text-neutral-300';
		case BoTextColor.current:
		default:
			return /*tw*/ 'text-current';
	}
});

const textAlignment = computed<string>(() => {
	switch (props.textAlign) {
		case BoTextAlign.left:
			return /*tw*/ 'text-left';
		case BoTextAlign.center:
			return /*tw*/ 'text-center';
		case BoTextAlign.right:
			return /*tw*/ 'text-right';
		case BoTextAlign.justify:
		default:
			return /*tw*/ 'text-justify';
	}
});

const classes = computed<string>(() => {
	return TailwindService.instance.merge(
		props.cssClass,
		defaultClasses,
		fontSize.value,
		fontColor.value,
		textCursor.value,
		fontWeight.value,
		textAlignment.value,
		textFontFamily.value,
		textWhiteSpaceClasses.value,
		props.selectable ? /*tw*/ 'select-auto' : /*tw*/ 'select-none',
	);
});

const containerStyle = computed<StyleValue>(() => {
	if (!StringService.instance.isEmptyStr(props.customColor)) {
		return {
			color: props.customColor,
		};
	}

	return {};
});
</script>
