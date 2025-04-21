<template>
	<div
		:class="[
			'grid-item',
			spanClasses,
			start ? `col-start-${start}` : '',
			end ? `col-end-${end}` : '',
		]"
		:data-testid="`bo-grid-item-${id}`"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
import { IdentityService } from '@/services';
import { computed } from 'vue';
import { BoGridItemProps } from './bo-grid';

const props = withDefaults(defineProps<BoGridItemProps>(), {
	id: IdentityService.instance.generateId(),
	span: 1,
});

const spanClasses = computed(() => {
	const classes = [`col-span-${props.span}`];

	if (props.spanSm) {
		classes.push(`sm:col-span-${props.spanSm}`);
	}
	if (props.spanMd) {
		classes.push(`md:col-span-${props.spanMd}`);
	}
	if (props.spanLg) {
		classes.push(`lg:col-span-${props.spanLg}`);
	}
	if (props.spanXl) {
		classes.push(`xl:col-span-${props.spanXl}`);
	}

	return classes.join(' ');
});
</script>
