<template>
	<div
		role="status"
		:class="wrapperClasses"
		:data-testid="constructAttribute(id, 'container')"
	>
		<div
			:class="dotsContainerClasses"
			:data-testid="constructAttribute(id, 'dots')"
		>
			<div
				v-for="(dot, index) in 3"
				:key="index"
				:class="[dotClasses, getAnimationDelayClass(index + 1)]"
				:data-testid="constructAttribute(id, `dot-${index + 1}`)"
			></div>
		</div>
		<slot>
			<span
				v-if="displayLoaderText"
				:class="LOADING_DOTS_STYLE.text.base"
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
import { computed } from 'vue';
import type { BoLoadingDotsProps } from './bo-loading-dots.js';

const props = withDefaults(defineProps<BoLoadingDotsProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	size: () => BoSize.default,
	variant: () => BoLoaderVariant.primary,
	textPosition: () => BoLoaderTextPosition.bottom,
});

const { constructAttribute } = useAttributes();

const LOADING_DOTS_STYLE = {
	layout: {
		base: /*tw*/ 'bo-loading-dots__container flex h-full max-w-fit',
		spacing: /*tw*/ 'gap-3',
		alignment: /*tw*/ 'items-center content-center justify-center',
		position: {
			row: /*tw*/ 'flex-row',
			column: /*tw*/ 'flex-col',
		},
	},
	container: {
		base: /*tw*/ 'bo-loading-dots__container flex',
		spacing: /*tw*/ 'gap-2',
		alignment: /*tw*/ 'items-center justify-center',
	},
	text: {
		base: /*tw*/ 'bo-loading-dots__text flex',
		sizing: /*tw*/ 'w-full',
		alignment: /*tw*/ 'items-center justify-center',
	},
	dot: {
		base: /*tw*/ 'bo-loading-dots__dot rounded-full',
		animation: /*tw*/ 'animate-bounce',
	},
	size: {
		[BoSize.extra_small]: /*tw*/ 'size-[8px]',
		[BoSize.small]: /*tw*/ 'size-[12px]',
		[BoSize.default]: /*tw*/ 'size-[16px]',
		[BoSize.large]: /*tw*/ 'size-[20px]',
		[BoSize.extra_large]: /*tw*/ 'size-[24px]',
	},
	variant: {
		[BoLoaderVariant.primary]: /*tw*/ 'bg-blue-600 dark:bg-blue-500',
		[BoLoaderVariant.secondary]: /*tw*/ 'bg-gray-600 dark:bg-gray-400',
		[BoLoaderVariant.success]: /*tw*/ 'bg-green-600 dark:bg-green-500',
		[BoLoaderVariant.danger]: /*tw*/ 'bg-red-600 dark:bg-red-500',
		[BoLoaderVariant.warning]: /*tw*/ 'bg-yellow-600 dark:bg-yellow-500',
		[BoLoaderVariant.white]: /*tw*/ 'bg-white dark:bg-gray-300',
		[BoLoaderVariant.dark]: /*tw*/ 'bg-black dark:bg-white',
	},
};

const displayLoaderText = computed<boolean>(() => {
	return !StringService.instance.isEmptyStr(props.loaderText);
});

const wrapperClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		LOADING_DOTS_STYLE.layout.base,
		LOADING_DOTS_STYLE.layout.spacing,
		LOADING_DOTS_STYLE.layout.alignment,
		props.textPosition === BoLoaderTextPosition.side
			? LOADING_DOTS_STYLE.layout.position.row
			: LOADING_DOTS_STYLE.layout.position.column,
	);
});

const dotsContainerClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		LOADING_DOTS_STYLE.container.base,
		LOADING_DOTS_STYLE.container.spacing,
		LOADING_DOTS_STYLE.container.alignment,
	);
});

const dotClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		LOADING_DOTS_STYLE.dot.base,
		LOADING_DOTS_STYLE.dot.animation,
		LOADING_DOTS_STYLE.size[props.size],
		props.customColor ? `bg-[${props.customColor}]` : LOADING_DOTS_STYLE.variant[props.variant],
	);
});

function getAnimationDelayClass(index: number, totalDots: number = 3): string {
	// Calculate delay so the last dot has 0s delay and others are shifted by -0.15s
	const delay = (index - totalDots) * 0.15;
	return `[animation-delay:${delay}s]`;
}
</script>
