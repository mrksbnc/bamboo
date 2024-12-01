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
	size: () => BoFontSize.default,
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

const defaultClasses: string =
	/*tw*/ 'bo-text inline-flex items-center overflow-hidden';

const tailwindCssCursorClasses = computed<string>(() => {
	return clickable.value ? /*tw*/ 'cursor-pointer' : /*tw*/ 'cursor-default';
});

const tailwindCssSizeClasses = computed<string>(() => {
	switch (size.value) {
		case BoFontSize.extra_small:
			return /*tw*/ 'text-extra-small leading-extra-small';
		case BoFontSize.small:
			return /*tw*/ 'text-small leading-small';
		case BoFontSize.body:
			return /*tw*/ 'text-body leading-body';
		case BoFontSize.modal_title:
			return /*tw*/ 'text-modal-title leading-modal-title';
		case BoFontSize.title:
			return /*tw*/ 'text-title leading-title';
		case BoFontSize.h6:
			return /*tw*/ 'text-h6 leading-h6';
		case BoFontSize.h5:
			return /*tw*/ 'text-h5 leading-h5';
		case BoFontSize.h4:
			return /*tw*/ 'text-h4 leading-h4';
		case BoFontSize.h3:
			return /*tw*/ 'text-h3 leading-h3';
		case BoFontSize.h2:
			return /*tw*/ 'text-h2 leading-h2';
		case BoFontSize.h1:
			return /*tw*/ 'text-h1 leading-h1';
		case BoFontSize.default:
		default:
			return /*tw*/ 'text-default leading-default';
	}
});

const tailwindCssWeightClasses = computed<string>(() => {
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

const tailwindCssFontFamilyClasses = computed<string>(() => {
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

const tailwindCssWhiteSpaceClasses = computed<string>(() => {
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

const tailwindCssColorClasses = computed<string>(() => {
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

const tailwindcssTextAlignClasses = computed<string>(() => {
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
		tailwindCssSizeClasses.value,
		tailwindCssColorClasses.value,
		tailwindCssCursorClasses.value,
		tailwindCssWeightClasses.value,
		tailwindcssTextAlignClasses.value,
		tailwindCssFontFamilyClasses.value,
		tailwindCssWhiteSpaceClasses.value,
	);
});

const containerStyle = computed<StyleValue>(() => {
	if (!StringUtils.isEmptyStr(customColor.value ?? '')) {
		return {
			color: customColor.value,
		};
	}

	return {};
});
</script>
