<template>
	<div
		v-if="isActive"
		:id="`${tabsId}-panel-${value}`"
		class="bo-tabs__panel"
		role="tabpanel"
		:aria-labelledby="`${tabsId}-tab-${value}`"
	>
		<slot />
	</div>
</template>

<script lang="ts" setup>
	import { computed, inject } from 'vue';
	import type { BoTabPanelProps } from './bo-tabs';

	const props = defineProps<BoTabPanelProps>();

	const activeTab = inject<string>('activeTab', '');
	const tabsId = inject<string>('tabsId', '');

	const isActive = computed(() => props.value === activeTab);
</script>

<style scoped lang="scss">
	.bo-tabs__panel {
		animation: fadeIn 0.2s ease-in-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
</style>
