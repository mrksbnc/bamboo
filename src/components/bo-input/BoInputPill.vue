<template>
	<div class="flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-1 text-sm">
		<bo-icon
			v-if="pill.icon"
			:icon="pill.icon"
			:size="BoSize.small"
		/>
		<bo-text
			:value="pill.text"
			:size="BoFontSize.xs"
		/>
		<bo-icon
			:icon="Icon.x"
			:size="BoSize.small"
			class="cursor-pointer"
			@click="onPillRemove(pill.id)"
		/>
	</div>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoFontSize, BoText } from '@/components/bo-text';
import { BoSize } from '@/shared';
import type { BoInputPill } from './bo-input';

const emit = defineEmits<{
	(e: 'remove', id: string): void;
}>();

defineProps<{
	pill: BoInputPill;
}>();

function onPillRemove(id: string): void {
	emit('remove', id);
}
</script>
