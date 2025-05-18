<template>
	<div class="flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-1 text-sm">
		<bo-icon
			v-if="icon"
			:icon="icon"
			:size="BoSize.small"
		/>
		<bo-text
			v-if="value"
			:value="value"
			:size="BoFontSize.xs"
		/>
		<bo-icon
			:icon="Icon.x"
			:size="BoSize.small"
			class="cursor-pointer"
			@click="onPillRemove(id)"
		/>
	</div>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/icon';
import { BoFontSize, BoText } from '@/components/text';
import { IdentityService } from '@/services';
import { BoSize } from '@/shared';
import type { BoInputPill } from './bo-input';

withDefaults(defineProps<BoInputPill>(), {
	id: () => IdentityService.instance.getComponentId('bo-input-pill'),
});

const emit = defineEmits<{
	(e: 'remove', id: string): void;
}>();

function onPillRemove(id: string): void {
	emit('remove', id);
}
</script>
