<template>
	<div
		:class="[
			'flex items-center',
			vertical ? 'h-full w-px' : 'w-full',
			label && !vertical ? 'gap-4' : '',
		]"
		:data-testid="`bo-divider-${id}`"
		role="separator"
		:aria-orientation="vertical ? 'vertical' : 'horizontal'"
	>
		<template v-if="label && !vertical">
			<div
				:class="[
					'flex-1 border-t border-neutral-200 dark:border-neutral-700',
					variant === 'dashed' ? 'border-dashed' : '',
					variant === 'dotted' ? 'border-dotted' : '',
				]"
			/>
			<span class="flex-shrink-0">
				<bo-text
					:value="label"
					:size="textSize"
					class="text-neutral-500 dark:text-neutral-400"
				/>
			</span>
			<div
				:class="[
					'flex-1 border-t border-neutral-200 dark:border-neutral-700',
					variant === 'dashed' ? 'border-dashed' : '',
					variant === 'dotted' ? 'border-dotted' : '',
				]"
			/>
		</template>
		<div
			v-else
			:class="[
				'flex-1',
				vertical ? 'h-full border-t-0 border-l' : 'border-t',
				'border-neutral-200 dark:border-neutral-700',
				variant === 'dashed' ? 'border-dashed' : '',
				variant === 'dotted' ? 'border-dotted' : '',
			]"
		/>
	</div>
</template>

<script setup lang="ts">
import { BoFontSize, BoText } from '@/components/bo-text';
import { IdentityService } from '@/services';
import { BoSize } from '@/shared';
import { computed } from 'vue';
import { BoDividerProps, BoDividerVariant } from './bo-divider';

const props = withDefaults(defineProps<BoDividerProps>(), {
	id: IdentityService.instance.generateId(),
	size: BoSize.default,
	vertical: false,
	variant: BoDividerVariant.default,
});

const { size, vertical, variant, label } = toRefs(props);

const textSize = computed<BoFontSize>(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return BoFontSize.xs;
		case BoSize.small:
			return BoFontSize.sm;
		case BoSize.default:
			return BoFontSize.base;
		case BoSize.large:
			return BoFontSize.lg;
		case BoSize.extra_large:
			return BoFontSize.xl;
	}
});
</script>
