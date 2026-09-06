<template>
	<button
		type="button"
		role="menuitem"
		:disabled="disabled"
		:class="[
			DROPDOWN_MANIFEST.styles.item,
			destructive && DROPDOWN_MANIFEST.styles.itemDestructive,
		]"
		@click="select"
	>
		<slot />
	</button>
</template>
<script setup lang="ts">
import { DROPDOWN_MANIFEST } from '@workspace/bamboo-core';
import type { BoDropdownItemProps } from '@workspace/bamboo-core';
import { inject } from 'vue';
import { dropdownContextKey } from './keys';
const props = withDefaults(defineProps<BoDropdownItemProps>(), {
	destructive: false,
});
const disabled = props.disabled;
const destructive = props.destructive;
const emit = defineEmits<{
	(event: 'select', payload: MouseEvent): void;
}>();
const context = inject(dropdownContextKey);
function select(event: MouseEvent): void {
	emit('select', event);
	context?.close();
}
</script>
<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/dropdown.manifest.css';
</style>
