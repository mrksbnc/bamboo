<template>
	<div
		:data-dialog-backdrop="id"
		:data-dialog-backdrop-close="closeOnBackdropClick"
		class="bg-opacity-60 pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black opacity-0 backdrop-blur-sm transition-opacity duration-300"
		:data-testid="`bo-modal-${id}`"
		role="dialog"
		:aria-modal="isOpen"
		:aria-labelledby="`bo-modal-title-${id}`"
		:aria-describedby="`bo-modal-content-${id}`"
	>
		<div
			:data-dialog="id"
			:class="modalSizeClasses"
			class="relative rounded-lg bg-white shadow-sm"
			:data-testid="`bo-modal-container-${id}`"
		>
			<div
				:id="`bo-modal-title-${id}`"
				class="flex shrink-0 items-center p-4 pb-4 text-xl font-medium text-slate-800"
				:data-testid="`bo-modal-header-${id}`"
			>
				<slot name="header">
					{{ title }}
				</slot>
			</div>
			<div
				:id="`bo-modal-content-${id}`"
				class="relative border-t border-slate-200 p-4 py-4 leading-normal font-light text-slate-600"
				:data-testid="`bo-modal-content-${id}`"
			>
				<slot></slot>
			</div>
			<div
				class="flex shrink-0 flex-wrap items-center justify-end border-t border-slate-200 p-4 pt-4"
				:data-testid="`bo-modal-footer-${id}`"
			>
				<slot name="footer"></slot>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IdentityService } from '@/services';
import { computed, toRefs, useSlots } from 'vue';
import { BoModalSize, type BoModalProps } from './bo-modal';

const props = withDefaults(defineProps<BoModalProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	title: 'Modal',
	size: BoModalSize.md,
	closeOnBackdropClick: true,
	isOpen: false,
});

defineEmits<{
	(e: 'open'): void;
	(e: 'close'): void;
}>();

const { size } = toRefs(props);

// Slots
defineSlots<{
	default?: (props: Record<string, unknown>) => void;
	trigger?: (props: Record<string, unknown>) => void;
	header?: (props: Record<string, unknown>) => void;
	footer?: (props: Record<string, unknown>) => void;
}>();

// Computed properties
const customTrigger = computed<boolean>(() => {
	return !!useSlots().trigger;
});

const triggerText = computed<string>(() => {
	return `Open Modal ${size.value.toUpperCase()}`;
});

const modalSizeClasses = computed<string>(() => {
	const sizeMap = {
		[BoModalSize.xs]: 'w-1/4 p-4 m-4',
		[BoModalSize.sm]: 'w-1/3 p-4 m-4',
		[BoModalSize.md]: 'w-2/5 p-4 m-4',
		[BoModalSize.lg]: 'w-3/5 p-4 m-4',
		[BoModalSize.xl]: 'w-3/4 p-4 m-4',
		[BoModalSize.xxl]: 'w-screen h-screen',
	};

	return sizeMap[size.value] || sizeMap[BoModalSize.md];
});
</script>
