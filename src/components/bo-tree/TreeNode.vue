<template>
	<div
		:class="[
			'tree-node',
			`level-${level}`,
			node.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
		]"
		:data-testid="`bo-tree-node-${node.id}`"
	>
		<div
			class="node-content"
			:class="[
				node.selected ? 'bg-neutral-100 dark:bg-neutral-700' : '',
				'hover:bg-neutral-50 dark:hover:bg-neutral-800',
			]"
			@click="handleClick"
		>
			<div class="flex items-center gap-2">
				<button
					v-if="hasChildren"
					type="button"
					class="toggle-button"
					:disabled="node.disabled"
					@click.stop="toggle"
				>
					<bo-icon
						:icon="node.expanded ? Icon.chevronDown : Icon.chevronRight"
						:size="size"
					/>
				</button>
				<span
					v-else
					class="toggle-spacer"
				/>

				<bo-checkbox
					v-if="showCheckboxes"
					:model-value="isSelected"
					:disabled="node.disabled"
					@update:model-value="select"
				/>

				<bo-icon
					v-if="showIcons && node.icon"
					:icon="node.icon"
					:size="size"
				/>

				<span class="node-label">{{ node.label }}</span>
			</div>
		</div>

		<div
			v-if="hasChildren && node.expanded"
			class="children"
		>
			<tree-node
				v-for="child in node.children"
				:key="child.id"
				:node="child"
				:level="level + 1"
				:show-checkboxes="showCheckboxes"
				:show-icons="showIcons"
				:disabled="disabled"
				:multiple="multiple"
				:selected-ids="selectedIds"
				@toggle="emit('toggle', $event)"
				@select="emit('select', $event)"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoCheckbox } from '@/components/bo-checkbox';
import { BoIcon, Icon } from '@/components/bo-icon';
import { computed } from 'vue';
import type { TreeNode } from './bo-tree';

interface Props {
	node: TreeNode;
	level: number;
	showCheckboxes: boolean;
	showIcons: boolean;
	disabled: boolean;
	multiple: boolean;
	selectedIds: string[];
}

const props = defineProps<Props>();

const emit = defineEmits<{
	toggle: [node: TreeNode];
	select: [node: TreeNode];
}>();

const hasChildren = computed(() => {
	return props.node.children && props.node.children.length > 0;
});

const isSelected = computed(() => {
	return props.selectedIds.includes(props.node.id);
});

const toggle = () => {
	if (props.disabled || props.node.disabled) return;
	emit('toggle', props.node);
};

const select = (value: boolean) => {
	if (props.disabled || props.node.disabled) return;
	emit('select', props.node);
};

const handleClick = () => {
	if (props.disabled || props.node.disabled) return;
	emit('select', props.node);
};
</script>

<style scoped>
.tree-node {
	@apply pl-4;
}

.node-content {
	@apply rounded-lg p-2 transition-colors;
}

.toggle-button {
	@apply flex h-6 w-6 items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700;
}

.toggle-spacer {
	@apply w-6;
}

.node-label {
	@apply select-none;
}

.children {
	@apply mt-1;
}
</style>
