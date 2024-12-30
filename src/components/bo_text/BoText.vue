<template>
	<span
		:id="id ?? IdentityUtils.generateRandomIdWithPrefix('bo-text')"
		:class="classes"
		:style="containerStyle"
	>
		{{ text }}
	</span>
</template>

<script setup lang="ts">
import { StringUtils, TailwindUtils } from '@/utils';
import { IdentityUtils } from '@/utils/identity_utils';
import { computed, toRefs, type StyleValue } from 'vue';
import {
	BoFontFamily,
	BoFontSize,
	BoFontWeight,
	BoTextAlign,
	BoTextColor,
	BoTextWhiteSpace,
} from './constants';
import type { BoTextProps } from './types';

const props = withDefaults(defineProps<BoTextProps>(), {
	size: () => BoFontSize.base,
	color: () => BoTextColor.current,
	weight: () => BoFontWeight.regular,
	textAlign: () => BoTextAlign.justify,
	fontFamily: () => BoFontFamily.inter,
	whiteSpace: () => BoTextWhiteSpace.normal,
});

const {
	text,
	size,
	weight,
	fontFamily,
	whiteSpace,
	cssClass,
	color,
	customColor,
	clickable,
	textAlign,
} = toRefs(props);

const defaultClasses = /*tw*/ 'bo-text inline-flex items-center shrink';

const textCursorClasses = computed<string>(() => {
	return clickable.value ? /*tw*/ 'cursor-pointer' : /*tw*/ 'cursor-default';
});

const textSizeClasses = computed<string>(() => {
	switch (size.value) {
		case BoFontSize.xs:
			return /*tw*/ 'text-bo-xs leading-bo-xs';
		case BoFontSize.sm:
			return /*tw*/ 'text-bo-sm leading-bo-sm';
		case BoFontSize.lg:
			return /*tw*/ 'text-bo-lg leading-bo-lg';
		case BoFontSize.xl:
			return /*tw*/ 'text-bo-xl leading-bo-xl';
		case BoFontSize['2xl']:
			return /*tw*/ 'text-bo-2xl leading-bo-2xl';
		case BoFontSize['3xl']:
			return /*tw*/ 'text-bo-3xl leading-bo-3xl';
		case BoFontSize['4xl']:
			return /*tw*/ 'text-bo-4xl leading-bo-4xl';
		case BoFontSize['5xl']:
			return /*tw*/ 'text-bo-5xl leading-bo-5xl';
		case BoFontSize['6xl']:
			return /*tw*/ 'text-bo-6xl leading-bo-6xl';
		case BoFontSize['7xl']:
			return /*tw*/ 'text-bo-7xl leading-bo-7xl';
		case BoFontSize.base:
		default:
			return /*tw*/ 'text-bo-base leading-bo-base';
	}
});

const textWeightClasses = computed<string>(() => {
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

const textFontFamilyClasses = computed<string>(() => {
	switch (fontFamily.value) {
		case BoFontFamily.inter:
			return /*tw*/ 'font-inter';
		case BoFontFamily.graphik:
			return /*tw*/ 'font-graphik';
		case BoFontFamily.sans:
			return /*tw*/ 'font-sans';
		case BoFontFamily.mono:
			return /*tw*/ 'font-mono';
		case BoFontFamily.serif:
			return /*tw*/ 'font-serif';
		default:
			return /*tw*/ 'font-inter';
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

const textColorClasses = computed<string>(() => {
	switch (color.value) {
		case BoTextColor.default:
			return /*tw*/ 'text-gray-900';
		case BoTextColor.inherit:
			return /*tw*/ 'text-inherit';
		case BoTextColor.success:
			return /*tw*/ 'text-green-600';
		case BoTextColor.warning:
			return /*tw*/ 'text-yellow-600';
		case BoTextColor.danger:
			return /*tw*/ 'text-red-600';
		case BoTextColor.secondary:
			return /*tw*/ 'text-gray-500';
		case BoTextColor.disabled:
			return /*tw*/ 'text-gray-400';
		case BoTextColor.info:
			return /*tw*/ 'text-blue-600';
		case BoTextColor.current:
		default:
			return /*tw*/ 'text-current';
	}
});

const textTextAlignClasses = computed<string>(() => {
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
	return TailwindUtils.merge(
		cssClass.value,
		defaultClasses,
		textSizeClasses.value,
		textColorClasses.value,
		textCursorClasses.value,
		textWeightClasses.value,
		textTextAlignClasses.value,
		textFontFamilyClasses.value,
		textWhiteSpaceClasses.value,
	);
});

const containerStyle = computed<StyleValue>(() => {
	if (!StringUtils.isEmptyStr(customColor.value)) {
		return {
			color: customColor.value,
		};
	}

	return {};
});
</script>
