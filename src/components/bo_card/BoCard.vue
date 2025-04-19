<template>
	<div
		class="relative my-6 flex max-w-sm flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-gray-800"
	>
		<div
			v-if="slots.header"
			class="relative"
		>
			<slot name="header" />
		</div>
		<div
			v-if="slots.content"
			class="mt-2 pt-0"
		>
			<slot name="content" />
		</div>
		<div
			v-if="slots.actions"
			class="mt-2 pt-0"
		>
			<slot name="actions" />
		</div>
	</div>
</template>

<script setup lang="ts">
const slots = defineSlots<{
	header?: (props: Record<string, unknown>) => void
	content?: (props: Record<string, unknown>) => void
	actions?: (props: Record<string, unknown>) => void
}>()
</script>
