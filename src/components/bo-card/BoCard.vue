<template>
	<div
		:id="id"
		:class="[
			'bo-card',
			cardClasses,
			cssClass,
			{
				'cursor-pointer': clickable && !disabled,
				'cursor-not-allowed opacity-60': disabled,
				'transition-shadow duration-200 hover:shadow-md': hoverable && !disabled,
			},
		]"
		role="article"
		:aria-disabled="disabled"
		:data-testid="`bo-card-${id}`"
	>
		<header
			v-if="$slots.header || headerIcon"
			class="bo-card-header"
			:data-testid="`bo-card-header-${id}`"
		>
			<slot name="header">
				<div
					class="flex items-center gap-2"
					:data-testid="`bo-card-title-container-${id}`"
				>
					<bo-icon
						v-if="headerIcon"
						:icon="headerIcon"
						:size="size"
						:data-testid="`bo-card-header-icon-${id}`"
					/>
					<slot name="title" />
				</div>
			</slot>
		</header>

		<div
			class="bo-card-body"
			:data-testid="`bo-card-body-${id}`"
		>
			<slot />
		</div>

		<footer
			v-if="$slots.footer"
			class="bo-card-footer"
			:data-testid="`bo-card-footer-${id}`"
		>
			<slot name="footer" />
		</footer>
	</div>
</template>

<script setup lang="ts">
import { BoIcon } from '@/components/bo-icon';
import { IdentityService, TailwindService } from '@/services';
import { BoSize } from '@/shared';
import { computed, toRefs } from 'vue';
import { BoCardPadding, BoCardVariant, type BoCardProps } from './bo-card';

const props = withDefaults(defineProps<BoCardProps>(), {
	id: () => IdentityService.instance.generateId('bo-card'),
	variant: () => BoCardVariant.default,
	size: () => BoSize.default,
	padding: () => BoCardPadding.default,
	hoverable: false,
	clickable: false,
	disabled: false,
	rounded: true,
	shadow: true,
});

const {
	id,
	variant,
	size,
	padding,
	hoverable,
	clickable,
	disabled,
	cssClass,
	headerIcon,
	rounded,
	shadow,
} = toRefs(props);

const cardClasses = computed(() => {
	return TailwindService.instance.merge(
		// Base classes
		'bg-white dark:bg-gray-800',
		// Variant classes
		{
			[BoCardVariant.default]: 'border border-gray-200 dark:border-gray-700',
			[BoCardVariant.bordered]: 'border-2 border-gray-200 dark:border-gray-700',
			[BoCardVariant.flat]: 'border-0',
		}[variant.value],
		// Padding classes
		{
			[BoCardPadding.none]: 'p-0',
			[BoCardPadding.small]: 'p-2',
			[BoCardPadding.default]: 'p-4',
			[BoCardPadding.large]: 'p-6',
		}[padding.value],
		// Shadow classes
		shadow.value ? 'shadow-sm' : 'shadow-none',
		// Border radius classes
		rounded.value ? 'rounded-lg' : 'rounded-none',
		// Size classes
		{
			[BoSize.extra_small]: 'text-xs',
			[BoSize.small]: 'text-sm',
			[BoSize.default]: 'text-base',
			[BoSize.large]: 'text-lg',
			[BoSize.extra_large]: 'text-xl',
		}[size.value],
	);
});
</script>

<style scoped>
.bo-card {
	@apply flex flex-col;
}

.bo-card-header {
	@apply mb-4 border-b border-gray-200 pb-4 dark:border-gray-700;
}

.bo-card-body {
	@apply flex-1;
}

.bo-card-footer {
	@apply mt-4 border-t border-gray-200 pt-4 dark:border-gray-700;
}
</style>
