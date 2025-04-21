<template>
	<tr class="bo-table__row">
		<td
			v-for="header in headers"
			:key="header.key"
			class="px-6 py-4"
		>
			<slot
				:name="header.key"
				:item="item"
				:value="item[header.key]"
			>
				{{ item[header.key] }}
			</slot>
		</td>
		<td
			v-if="showActions"
			class="px-6 py-4 text-right"
		>
			<div class="flex justify-end space-x-2">
				<bo-button
					v-if="hasViewAction"
					icon-only
					:variant="BoButtonVariant.light"
					:size="BoSize.small"
					@click="$emit('view', item)"
					aria-label="View"
				>
					<bo-icon :icon="Icon.eye" />
				</bo-button>
				<bo-button
					v-if="hasEditAction"
					icon-only
					:variant="BoButtonVariant.light"
					:size="BoSize.small"
					@click="$emit('edit', item)"
					aria-label="Edit"
				>
					<bo-icon :icon="Icon.edit" />
				</bo-button>
				<bo-button
					v-if="hasDeleteAction"
					icon-only
					:variant="BoButtonVariant.light"
					:size="BoSize.small"
					@click="$emit('delete', item)"
					aria-label="Delete"
				>
					<bo-icon :icon="Icon.trash" />
				</bo-button>
			</div>
		</td>
	</tr>
</template>

<script setup lang="ts">
import { BoButton, BoButtonVariant } from '@/components/bo-button';
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoSize } from '@/shared';
import { computed } from 'vue';
import type { BoTableHeader } from './bo-table';

interface Props {
	headers: BoTableHeader[];
	item: Record<string, any>;
	index: number;
	showActions?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	showActions: false,
});

const emit = defineEmits<{
	(e: 'view', item: Record<string, any>): void;
	(e: 'edit', item: Record<string, any>): void;
	(e: 'delete', item: Record<string, any>): void;
}>();

// Check if specific slots exist to determine which action buttons to show
const hasViewAction = computed(() => {
	return emit.length > 0 && 'view' in emit;
});

const hasEditAction = computed(() => {
	return emit.length > 0 && 'edit' in emit;
});

const hasDeleteAction = computed(() => {
	return emit.length > 0 && 'delete' in emit;
});
</script>
