<template>
	<div
		role="status"
		:class="wrapperClasses"
		:data-testid="constructAttribute(id, 'container')"
	>
		<div
			:class="spinnerClasses"
			:style="customColorStyle"
			:data-testid="constructAttribute(id, 'spinner')"
		></div>
		<span
			v-if="displayLoaderText || $slots.default"
			:class="LOADING_SPINNER_STYLE.text.base"
			:data-testid="constructAttribute(id, 'text')"
		>
			<slot>
				<bo-text
					:size="BoFontSize.xs"
					:color="BoTextColor.secondary"
					:font-family="BoFontFamily.sans"
					:value="StringService.instance.safeString(loaderText)"
				/>
			</slot>
		</span>
	</div>
</template>

<script setup lang="ts">
import { BoFontFamily, BoFontSize, BoTextColor } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { useAttributes } from '@/composables/use-attributes.js';
import { IdentityService } from '@/services/identity-service.js';
import { StringService } from '@/services/string-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo-loader.js';
import { BoSize } from '@/shared/bo-size.js';
import { computed, type StyleValue } from 'vue';
import type { BoLoadingSpinnerProps } from './bo-loading-spinner.js';

const slots = defineSlots<{
	default?: () => unknown;
}>();

const props = withDefaults(defineProps<BoLoadingSpinnerProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	size: () => BoSize.default,
	variant: () => BoLoaderVariant.primary,
	textPosition: () => BoLoaderTextPosition.bottom,
});

const { constructAttribute } = useAttributes();

const LOADING_SPINNER_STYLE = {
	layout: {
		base: /*tw*/ 'bo-loading-spinner__container flex h-full max-w-fit',
		spacing: /*tw*/ 'gap-3',
		alignment: /*tw*/ 'items-center content-center justify-center',
		position: {
			row: /*tw*/ 'flex-row',
			column: /*tw*/ 'flex-col',
		},
	},
	spinner: {
		base: /*tw*/ 'bo-loading-spinner__animation inline-flex',
		animation: /*tw*/ 'animate-spin',
		shape: /*tw*/ 'rounded-full',
		border: {
			base: /*tw*/ 'border-[2px] border-current',
			transparent: /*tw*/ 'border-t-transparent',
		},
	},
	text: {
		base: /*tw*/ 'bo-loading-spinner__text',
	},
	size: {
		[BoSize.extra_small]: /*tw*/ 'size-[8px]',
		[BoSize.small]: /*tw*/ 'size-[12px]',
		[BoSize.default]: /*tw*/ 'size-[16px]',
		[BoSize.large]: /*tw*/ 'size-[20px]',
		[BoSize.extra_large]: /*tw*/ 'size-[24px]',
	},
	variant: {
		[BoLoaderVariant.primary]: /*tw*/ 'text-blue-600 dark:text-blue-500',
		[BoLoaderVariant.secondary]: /*tw*/ 'text-gray-600 dark:text-gray-400',
		[BoLoaderVariant.danger]: /*tw*/ 'text-red-600 dark:text-red-500',
		[BoLoaderVariant.warning]: /*tw*/ 'text-yellow-600 dark:text-yellow-500',
		[BoLoaderVariant.success]: /*tw*/ 'text-green-600 dark:text-green-500',
		[BoLoaderVariant.dark]: /*tw*/ 'text-black dark:text-white',
		[BoLoaderVariant.white]: /*tw*/ 'text-white dark:text-gray-300',
	},
};

const displayLoaderText = computed<boolean>(() => {
	return !StringService.instance.isEmptyStr(props.loaderText);
});

const wrapperClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		LOADING_SPINNER_STYLE.layout.base,
		LOADING_SPINNER_STYLE.layout.spacing,
		LOADING_SPINNER_STYLE.layout.alignment,
		props.textPosition === BoLoaderTextPosition.side
			? LOADING_SPINNER_STYLE.layout.position.row
			: LOADING_SPINNER_STYLE.layout.position.column,
	);
});

const spinnerClasses = computed<string>(() => {
	const variantClass = !props.customColor ? LOADING_SPINNER_STYLE.variant[props.variant] : null;
	return TailwindService.instance.merge(
		LOADING_SPINNER_STYLE.spinner.base,
		LOADING_SPINNER_STYLE.spinner.animation,
		LOADING_SPINNER_STYLE.spinner.shape,
		LOADING_SPINNER_STYLE.spinner.border.base,
		LOADING_SPINNER_STYLE.spinner.border.transparent,
		LOADING_SPINNER_STYLE.size[props.size],
		variantClass,
	);
});

const customColorStyle = computed<StyleValue>(() => {
	if (!StringService.instance.isEmptyStr(props.customColor)) {
		return {
			color: props.customColor,
		};
	}

	return {};
});
</script>
