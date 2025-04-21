<template>
	<div>
		<slot name="trigger">
			<button
				v-if="!customTrigger"
				:data-dialog-target="id"
				class="rounded-md border border-transparent bg-slate-800 px-4 py-2 text-center text-sm text-white shadow-md transition-all hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
				type="button"
			>
				{{ triggerText }}
			</button>
		</slot>
		<div
			:data-dialog-backdrop="id"
			:data-dialog-backdrop-close="closeOnBackdropClick"
			class="bg-opacity-60 pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black opacity-0 backdrop-blur-sm transition-opacity duration-300"
		>
			<div
				:data-dialog="id"
				:class="modalSizeClasses"
				class="relative rounded-lg bg-white shadow-sm"
			>
				<div class="flex shrink-0 items-center p-4 pb-4 text-xl font-medium text-slate-800">
					<slot name="header">
						{{ title }}
					</slot>
				</div>
				<div
					class="relative border-t border-slate-200 p-4 py-4 leading-normal font-light text-slate-600"
				>
					<slot></slot>
				</div>
				<div
					class="flex shrink-0 flex-wrap items-center justify-end border-t border-slate-200 p-4 pt-4"
				>
					<slot name="footer">
						<button
							data-dialog-close="true"
							class="rounded-md border border-transparent px-4 py-2 text-center text-sm text-slate-600 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
							type="button"
						>
							Cancel
						</button>
						<button
							data-dialog-close="true"
							class="ml-2 rounded-md border border-transparent bg-green-600 px-4 py-2 text-center text-sm text-white shadow-md transition-all hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
							type="button"
						>
							Confirm
						</button>
					</slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IdentityService } from '@/services';
import { computed, toRefs, useSlots } from 'vue';
import { BoModalSize, type BoModalProps } from './bo-modal';

const props = withDefaults(defineProps<BoModalProps>(), {
	id: () => IdentityService.instance.generateId(),
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
