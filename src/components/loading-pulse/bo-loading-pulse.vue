<template>
	<div
		role="status"
		:class="wrapperClasses"
		:data-testid="constructAttribute(id, 'container')"
	>
		<span :class="pulseContainerClasses">
			<span
				:style="customColorStyle"
				:class="outerPulseClasses"
				:data-testid="constructAttribute(id, 'outer')"
			></span>
			<span
				:class="innerPulseClasses"
				:style="customColorStyle"
				:data-testid="constructAttribute(id, 'inner')"
			></span>
		</span>
		<slot>
			<span
				v-if="displayLoaderText"
				:class="LOADING_PULSE_STYLE.text.base"
				:data-testid="constructAttribute(id, 'text')"
			>
				<bo-text
					role="text"
					:size="BoFontSize.xs"
					:color="BoTextColor.secondary"
					:font-family="BoFontFamily.sans"
					:value="StringService.instance.safeString(loaderText)"
				/>
			</span>
		</slot>
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
import type { BoLoadingPulseProps } from './bo-loading-pulse.js';

const slots = defineSlots<{
	default?: () => unknown;
}>();

const props = withDefaults(defineProps<BoLoadingPulseProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	size: () => BoSize.default,
	variant: () => BoLoaderVariant.primary,
	textPosition: () => BoLoaderTextPosition.bottom,
});

const { constructAttribute } = useAttributes();

const LOADING_PULSE_STYLE = {
	layout: {
		base: /*tw*/ 'bo-loading-pulse__container flex h-full max-w-fit',
		spacing: /*tw*/ 'gap-3',
		alignment: /*tw*/ 'items-center content-center justify-center',
		position: {
			row: /*tw*/ 'flex-row',
			column: /*tw*/ 'flex-col',
		},
	},
	pulse: {
		container: {
			base: /*tw*/ 'bo-loading-pulse__inner-pulse-relative relative flex',
		},
		outer: {
			base: /*tw*/ 'bo-loading-pulse__outer-pulse-absolute h-full w-full absolute',
			animation: /*tw*/ 'animate-ping',
			opacity: /*tw*/ 'opacity-75',
			shape: /*tw*/ 'inline-flex rounded-full',
		},
		inner: {
			base: /*tw*/ 'bo-loading-pulse__inner-pulse-relative relative',
			shape: /*tw*/ 'inline-flex rounded-full',
		},
	},
	text: {
		base: /*tw*/ 'bo-loading-pulse__text',
		sizing: /*tw*/ 'w-full',
		alignment: /*tw*/ 'items-center justify-center',
	},
	size: {
		[BoSize.extra_small]: /*tw*/ 'size-[8px]',
		[BoSize.small]: /*tw*/ 'size-[12px]',
		[BoSize.default]: /*tw*/ 'size-[16px]',
		[BoSize.large]: /*tw*/ 'size-[20px]',
		[BoSize.extra_large]: /*tw*/ 'size-[24px]',
	},
	variant: {
		outer: {
			[BoLoaderVariant.primary]: /*tw*/ 'bg-blue-600 dark:bg-blue-500',
			[BoLoaderVariant.secondary]: /*tw*/ 'bg-gray-600 dark:bg-gray-400',
			[BoLoaderVariant.danger]: /*tw*/ 'bg-red-600 dark:bg-red-500',
			[BoLoaderVariant.warning]: /*tw*/ 'bg-yellow-600 dark:bg-yellow-500',
			[BoLoaderVariant.success]: /*tw*/ 'bg-green-600 dark:bg-green-500',
			[BoLoaderVariant.dark]: /*tw*/ 'bg-black dark:bg-white',
			[BoLoaderVariant.white]: /*tw*/ 'bg-white dark:bg-gray-300',
		},
		inner: {
			[BoLoaderVariant.primary]: /*tw*/ 'bg-blue-500 dark:bg-blue-400',
			[BoLoaderVariant.secondary]: /*tw*/ 'bg-gray-500 dark:bg-gray-300',
			[BoLoaderVariant.danger]: /*tw*/ 'bg-red-500 dark:bg-red-400',
			[BoLoaderVariant.warning]: /*tw*/ 'bg-yellow-500 dark:bg-yellow-400',
			[BoLoaderVariant.success]: /*tw*/ 'bg-green-500 dark:bg-green-400',
			[BoLoaderVariant.dark]: /*tw*/ 'bg-black dark:bg-white',
			[BoLoaderVariant.white]: /*tw*/ 'bg-white dark:bg-gray-300',
		},
	},
};

const displayLoaderText = computed<boolean>(() => {
	return !StringService.instance.isEmptyStr(props.loaderText);
});

const wrapperClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		LOADING_PULSE_STYLE.layout.base,
		LOADING_PULSE_STYLE.layout.spacing,
		LOADING_PULSE_STYLE.layout.alignment,
		props.textPosition === BoLoaderTextPosition.side
			? LOADING_PULSE_STYLE.layout.position.row
			: LOADING_PULSE_STYLE.layout.position.column,
	);
});

const pulseContainerClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		LOADING_PULSE_STYLE.pulse.container.base,
		LOADING_PULSE_STYLE.size[props.size],
	);
});

const outerPulseClasses = computed<string>(() => {
	const variantClass = !props.customColor ? LOADING_PULSE_STYLE.variant.outer[props.variant] : null;
	return TailwindService.instance.merge(
		LOADING_PULSE_STYLE.pulse.outer.base,
		LOADING_PULSE_STYLE.pulse.outer.animation,
		LOADING_PULSE_STYLE.pulse.outer.opacity,
		LOADING_PULSE_STYLE.pulse.outer.shape,
		variantClass,
	);
});

const innerPulseClasses = computed<string>(() => {
	const variantClass = !props.customColor ? LOADING_PULSE_STYLE.variant.inner[props.variant] : null;
	return TailwindService.instance.merge(
		LOADING_PULSE_STYLE.pulse.inner.base,
		LOADING_PULSE_STYLE.pulse.inner.shape,
		LOADING_PULSE_STYLE.size[props.size],
		variantClass,
	);
});

const customColorStyle = computed<StyleValue>(() => {
	if (!StringService.instance.isEmptyStr(props.customColor)) {
		return {
			backgroundColor: props.customColor,
		};
	}

	return {};
});
</script>
