<template>
	<div
		class="relative p-3 flex flex-col my-6 bg-white dark:bg-gray-800 shadow-sm border border-slate-200 dark:border-neutral-800 rounded-lg max-w-sm"
	>
		<div
			v-if="slots.header"
			class="relative"
		>
			<slot name="header" />
		</div>
		<div
			v-if="slots.content"
			class="pt-0 mt-2"
		>
			<slot name="content" />
		</div>
		<div
			v-if="slots.actions"
			class="pt-0 mt-2"
		>
			<slot name="actions" />
		</div>
	</div>
</template>

<script setup lang="ts">
const slots = defineSlots<{
	header(props: Record<string, unknown>): void;
	content(props: Record<string, unknown>): void;
	actions(props: Record<string, unknown>): void;
}>();
</script>
