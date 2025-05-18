<template>
	<div
		:class="[
			'tree',
			sizeClasses[size],
			variant === 'compact' ? 'compact' : '',
			disabled ? 'opacity-50' : '',
		]"
		:data-testid="`bo-tree-${id}`"
	>
		<tree-node
			v-for="node in data"
			:key="node.id"
			:node="node"
			:level="0"
			:show-checkboxes="showCheckboxes"
			:show-icons="showIcons"
			:disabled="disabled"
			:multiple="multiple"
			:selected-ids="modelValue"
			@toggle="toggleNode"
			@select="selectNode"
		/>
	</div>
</template>

<script setup lang="ts">
import { IdentityService } from '@/services';
import { BoSize } from '@/shared';
import type { BoTreeProps } from './bo-tree';
import TreeNode from './tree-node.vue';

const props = withDefaults(defineProps<BoTreeProps>(), {
	id: IdentityService.instance.getComponentId(),
	disabled: false,
	showCheckboxes: false,
	showIcons: true,
	size: BoSize.default,
	multiple: false,
	modelValue: () => [],
});

const emit = defineEmits<{
	'update:modelValue': [value: string[]];
	'node-toggle': [node: typeof TreeNode];
	'node-select': [node: typeof TreeNode];
}>();

const sizeClasses = {
	[BoSize.extra_small]: 'text-xs',
	[BoSize.small]: 'text-sm',
	[BoSize.default]: 'text-base',
	[BoSize.large]: 'text-lg',
	[BoSize.extra_large]: 'text-xl',
};

const toggleNode = (node: TreeNode) => {
	if (props.disabled) {
		return;
	}
	node.expanded = !node.expanded;
	emit('node-toggle', node);
};

const selectNode = (node: TreeNode) => {
	if (props.disabled || node.disabled) {
		return;
	}

	if (props.multiple) {
		const newSelection = [...props.modelValue];
		const index = newSelection.indexOf(node.id);
		if (index === -1) {
			newSelection.push(node.id);
		} else {
			newSelection.splice(index, 1);
		}
		emit('update:modelValue', newSelection);
	} else {
		emit('update:modelValue', [node.id]);
	}
	emit('node-select', node);
};
</script>

<style scoped>
.tree {
	@apply space-y-1;
}

.tree.compact {
	@apply space-y-0;
}
</style>
