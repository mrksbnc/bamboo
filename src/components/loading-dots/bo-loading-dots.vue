<template>
	<div
		role="status"
		:class="[defaultClasses, textPosition === 'side' ? 'flex-row' : 'flex-col']"
		:data-testid="`bo-loading-pulse-${id}`"
	>
		<div
			class="bo-loading-dots__container flex items-center justify-center gap-2"
			:data-testid="`bo-loading-dots-${id}`"
		>
			<div
				v-for="dot in dotCount"
				:key="dot"
				:class="['bo-loading-dots__dot animate-pulse', 'rounded-full', dotClasses, variantClasses]"
				:style="getAnimationDelayStyle(dot)"
			/>
		</div>
		<slot>
			<span
				v-if="displayLoaderText"
				class="bo-loading-pulse__text flex w-full items-center justify-center"
			>
				<bo-text
					role="text"
					:size="BoFontSize.sm"
					:color="BoTextColor.secondary"
					:value="StringService.instance.safeString(loaderText)"
				/>
			</span>
		</slot>
	</div>
</template>

<script setup lang="ts">
import { BoFontSize, BoTextColor } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { IdentityService } from '@/services/identity-service.js';
import { StringService } from '@/services/string-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo-loader.js';
import { BoSize } from '@/shared/bo-size.js';
import { computed, StyleValue } from 'vue';
import { type BoLoadingDotsProps } from './bo-loading-dots.js';

const props = withDefaults(defineProps<BoLoadingDotsProps>(), {
	dotCount: 3,
	size: BoSize.default,
	variant: BoLoaderVariant.primary,
	textPosition: () => BoLoaderTextPosition.bottom,
	id: () => IdentityService.instance.getComponentId(),
});

const defaultClasses = /*tw*/ TailwindService.instance.merge(
	'bo-loading-dots__container',
	'flex',
	'gap-3',
	'h-full',
	'max-w-fit',
	'items-center',
	'content-center',
	'justify-center',
	/*tw*/ 'animate-pulse',
);

const displayLoaderText = computed<boolean>(() => {
	return !StringService.instance.isEmptyStr(props.loaderText);
});

const dotClasses = computed<string>(() => {
	switch (props.size) {
		case BoSize.extra_small:
			return /*tw*/ 'size-[8px]';
		case BoSize.small:
			return /*tw*/ 'size-[12px]';
		case BoSize.default:
		default:
			return /*tw*/ 'size-[16px]';
		case BoSize.large:
			return /*tw*/ 'size-[20px]';
		case BoSize.extra_large:
			return /*tw*/ 'size-[24px]';
	}
});

const variantClasses = computed<string>(() => {
	if (props.customColor) {
		return `bg-[${props.customColor}]`;
	}

	switch (props.variant) {
		case BoLoaderVariant.secondary:
			return 'bg-gray-500';
		case BoLoaderVariant.success:
			return 'bg-green-500';
		case BoLoaderVariant.danger:
			return 'bg-red-500';
		case BoLoaderVariant.warning:
			return 'bg-yellow-500';
		case BoLoaderVariant.white:
			return 'bg-white';
		case BoLoaderVariant.dark:
			return 'bg-gray-900';
		case BoLoaderVariant.primary:
		default:
			return 'bg-blue-500';
	}
});

function getAnimationDelayStyle(dot: number): StyleValue {
	return {
		animationDelay: `${(dot - 1) * 0.2}s`,
	};
}
</script>
