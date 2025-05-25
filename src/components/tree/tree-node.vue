<template>
	<div
		:class="treeNodeContainerClasses"
		:data-testid="`bo-tree-node-${node.id}`"
	>
		<div
			:class="treeNodeContentClasses"
			:tabindex="isDisabled ? -1 : 0"
			@click="onClick"
			@keydown="onKeyDown"
		>
			<div class="flex items-center gap-2">
				<button
					v-if="hasChildren"
					type="button"
					class="flex h-6 w-6 items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
					:disabled="node.disabled"
					@click.stop="onToggle"
				>
					<bo-icon :icon="node.expanded ? Icon.chevrons_left : Icon.chevron_right" />
				</button>
				<span
					v-else
					class="toggle-spacer w-6"
				/>

				<bo-checkbox
					v-if="showCheckboxes"
					:model-value="isSelected"
					:disabled="node.disabled"
					@update:model-value="onSelect"
				/>

				<bo-icon
					v-if="showIcons && node.icon"
					:icon="node.icon"
				/>
				<bo-text
					class="select-none"
					:value="node.label"
				/>
			</div>
		</div>

		<div
			v-if="hasChildren && node.expanded"
			class="children mt-1"
		>
			<tree-node
				v-for="child in node.children"
				:key="node.id"
				:disabled="isDisabled"
				:selected-ids="selectedIds"
				:expanded="isExpanded"
				:multiple="multiple"
				:node="child"
				:selected="isSelected"
				:level="getLevel(level)"
				:show-checkboxes="showCheckboxes"
				:show-icons="showIcons"
				@toggle="onToggle"
				@select="onSelect"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import BoCheckbox from '@/components/checkbox/bo-checkbox.vue';
import { Icon } from '@/components/icon/bo-icon.js';
import BoIcon from '@/components/icon/bo-icon.vue';
import boText from '@/components/text/bo-text.vue';
import { TailwindService } from '@/services';
import { computed } from 'vue';
import type { TreeNode, TreeNodeProps } from './bo-tree';

const props = withDefaults(defineProps<TreeNodeProps>(), {
	level: 0,
});

const emit = defineEmits<{
	(event: 'toggle', node: TreeNode): void;
	(event: 'select', node: TreeNode): void;
}>();

const hasChildren = computed<boolean>(() => {
	return !!props.node.children && props.node.children.length > 0;
});

const isSelected = computed<boolean>(() => {
	return props.selectedIds.has(props.node.id);
});

const isDisabled = computed<boolean>(() => {
	return props.disabled || !!props.node.disabled;
});

const isExpanded = computed<boolean>(() => {
	return props.expanded;
});

const treeNodeContainerClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		'tree-node pl-4',
		`tree-node--level-${props.level}`,
		'hover:bg-neutral-50 dark:hover:bg-neutral-800',
		props.node.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
	);
});

const treeNodeContentClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		'tree-node__content rounded-lg p-2 transition-colors',
		'hover:bg-neutral-50 dark:hover:bg-neutral-800',
		props.node.selected ? 'bg-neutral-100 dark:bg-neutral-700' : '',
	);
});

function getLevel(lvl: number): number {
	return lvl + 1;
}

function onToggle(): void {
	if (props.disabled || props.node.disabled) {
		return;
	}
	emit('toggle', props.node);
}

function onSelect(): void {
	if (props.disabled || props.node.disabled) {
		return;
	}
	emit('select', props.node);
}

function onClick(): void {
	if (props.disabled || props.node.disabled) {
		return;
	}
	emit('select', props.node);
}

function onKeyDown(event: KeyboardEvent): void {
	if (props.disabled || props.node.disabled) {
		return;
	}

	switch (event.key) {
		case 'Enter':
		case 'Space':
			emit('select', props.node);
			break;
		case 'ArrowLeft':
			if (props.node.expanded) {
				emit('toggle', props.node);
			}
			break;
		case 'ArrowRight':
			if (!props.node.expanded) {
				emit('toggle', props.node);
			}
			break;
	}
}
</script>

<style scoped></style>
