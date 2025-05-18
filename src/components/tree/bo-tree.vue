<template>
	<div
		:class="[
			'tree space-y-1',
			sizeClasses[size],
			variant === BoTreeVariant.compact ? 'compact' : '',
			disabled ? 'opacity-50' : '',
		]"
		:data-testid="`bo-tree-${id}`"
	>
		<tree-node
			v-for="node in data"
			:key="node.id"
			:id="node.id"
			:node="node"
			:level="0"
			:selected-ids="new Set()"
		/>
	</div>
</template>

<script setup lang="ts">
import { IdentityService } from '@/services';
import { BoSize } from '@/shared';
import { BoTreeVariant, type BoTreeProps } from './bo-tree';
import TreeNode from './tree-node.vue';

const props = withDefaults(defineProps<BoTreeProps>(), {
	id: IdentityService.instance.getComponentId(),
	showIcons: true,
	size: BoSize.default,
	modelValue: () => [],
	variant: () => BoTreeVariant.default,
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

const toggleNode = (node: typeof TreeNode) => {
	if (props.disabled) {
		return;
	}
	node.expanded = !node.expanded;
	emit('node-toggle', node);
};

const selectNode = (node: typeof TreeNode) => {
	if (props.disabled || node.disabled) {
		return;
	}

	// if (props.multiple) {
	// 	const newSelection = [...props.modelValue];
	// 	const index = newSelection.indexOf(node.id);
	// 	if (index === -1) {
	// 		newSelection.push(node.id);
	// 	} else {
	// 		newSelection.splice(index, 1);
	// 	}
	// 	emit('update:modelValue', newSelection);
	// } else {
	// 	emit('update:modelValue', [node.id]);
	// }
	// emit('node-select', node);
};
</script>
