<template>
	<div
		:class="[
			'grid',
			gapClasses[gap],
			center ? 'justify-items-center' : '',
			variant === 'dense' ? 'gap-1' : '',
			responsive ? responsiveClasses[breakpoint] : '',
		]"
		:style="{
			gridTemplateColumns: `repeat(${columns}, 1fr)`,
		}"
		:data-testid="`bo-grid-${id}`"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
import { IdentityService } from '@/services';
import { BoSize } from '@/shared';
import { BoGridProps, BoGridVariant } from './bo-grid';

const props = withDefaults(defineProps<BoGridProps>(), {
	id: IdentityService.instance.generateId(),
	columns: 12,
	gap: BoSize.default,
	center: false,
	responsive: true,
	breakpoint: 'md',
	variant: BoGridVariant.default,
});

const gapClasses = {
	[BoSize.extra_small]: 'gap-1',
	[BoSize.small]: 'gap-2',
	[BoSize.default]: 'gap-4',
	[BoSize.large]: 'gap-6',
	[BoSize.extra_large]: 'gap-8',
};

const responsiveClasses = {
	sm: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6',
	md: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
	lg: 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3',
	xl: 'grid-cols-1 xl:grid-cols-2',
};
</script>
