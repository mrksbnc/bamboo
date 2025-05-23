<template>
	<span
		:id="id"
		:class="classes"
		:style="containerStyle"
	>
		{{ value }}
	</span>
</template>

<script setup lang="ts">
import { IdentityService, StringService, TailwindService } from '@/services';
import { computed, toRefs, type StyleValue } from 'vue';
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
	id: () => IdentityService.instance.generateId('bo-text'),
	size: () => BoFontSize.base,
	color: () => BoTextColor.current,
	weight: () => BoFontWeight.regular,
	fontFamily: () => BoFontFamily.sans,
	textAlign: () => BoTextAlign.justify,
	whiteSpace: () => BoTextWhiteSpace.normal,
	selectable: () => false,
});

const {
	value,
	size,
	weight,
	fontFamily,
	whiteSpace,
	cssClass,
	color,
	customColor,
	clickable,
	textAlign,
	selectable,
} = toRefs(props);

const defaultClasses = /*tw*/ 'bo-text inline-flex flex-wrap shrink';

const cursor = computed<string>(() => {
	return clickable.value ? /*tw*/ 'cursor-pointer' : /*tw*/ 'cursor-default';
});

const fontSize = computed<string>(() => {
	switch (size.value) {
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
	switch (weight.value) {
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
	switch (fontFamily.value) {
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
	switch (whiteSpace.value) {
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
	switch (color.value) {
		case BoTextColor.default:
			return /*tw*/ 'text-neutral-900 dark:text-neutral-100';
		case BoTextColor.inherit:
			return /*tw*/ 'text-inherit';
		case BoTextColor.primary:
			return /*tw*/ 'text-blue-600 dark:text-blue-500';
		case BoTextColor.secondary:
			return /*tw*/ 'text-neutral-600 dark:text-neutral-300';
		case BoTextColor.success:
			return /*tw*/ 'text-green-600 dark:text-green-500';
		case BoTextColor.warning:
			return /*tw*/ 'text-yellow-600 dark:text-yellow-500';
		case BoTextColor.danger:
			return /*tw*/ 'text-red-600 dark:text-red-500';
		case BoTextColor.current:
		default:
			return /*tw*/ 'text-current';
	}
});

const textAlignment = computed<string>(() => {
	switch (textAlign.value) {
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
		cssClass.value,
		defaultClasses,
		fontSize.value,
		fontColor.value,
		cursor.value,
		fontWeight.value,
		textAlignment.value,
		textFontFamily.value,
		textWhiteSpaceClasses.value,
		selectable.value ? /*tw*/ 'select-auto' : /*tw*/ 'select-none',
	);
});

const containerStyle = computed<StyleValue>(() => {
	if (!StringService.instance.isEmptyStr(customColor.value)) {
		return {
			color: customColor.value,
		};
	}

	return {};
});
</script>
