<template>
	<Teleport to="body">
		<Transition name="bo-dialog">
			<div v-if="open" :class="DIALOG_MANIFEST.styles.backdrop" data-slot="dialog-backdrop" />
		</Transition>
		<Transition name="bo-dialog">
			<div
				v-if="open"
				:data-state="'open'"
				:class="DIALOG_MANIFEST.styles.wrapper"
				@click.self="onBackdropClick"
			>
				<div
					:id="id"
					:data-testid="dataTestId"
					:role="role"
					:aria-modal="true"
					:aria-label="ariaLabel"
					:aria-labelledby="ariaLabelledBy ?? (title ? titleId : undefined)"
					:aria-describedby="ariaDescribedBy ?? (description ? descriptionId : undefined)"
					:data-state="'open'"
					:class="panelClasses"
					tabindex="-1"
					ref="panelRef"
					@keydown.escape.stop.prevent="onEscape"
				>
					<div :class="DIALOG_MANIFEST.styles.header" data-slot="dialog-header">
						<slot name="header">
							<div :class="DIALOG_MANIFEST.styles.headerContent">
								<bo-text
									v-if="title"
									:id="titleId"
									font-size="lg"
									font-weight="semibold"
									:class="DIALOG_MANIFEST.styles.title"
								>
									{{ title }}
								</bo-text>
							</div>
						</slot>
					</div>

					<bo-button
						v-if="showClose"
						kind="ghost"
						prefix-icon="x"
						:aria-label="closeAriaLabel"
						:class="DIALOG_MANIFEST.styles.close"
						@click="onClose"
					/>

					<div :class="DIALOG_MANIFEST.styles.body" data-slot="dialog-body">
						<bo-text
							v-if="description"
							:id="descriptionId"
							font-size="sm"
							:class="DIALOG_MANIFEST.styles.description"
						>
							{{ description }}
						</bo-text>
						<slot />
					</div>

					<div
						v-if="$slots['footer']"
						:class="DIALOG_MANIFEST.styles.footer"
						data-slot="dialog-footer"
					>
						<slot name="footer" />
					</div>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup lang="ts">
import {
	DIALOG_MANIFEST,
	generateComponentId,
	generateDataTestId,
	mergeTwClasses,
	type BoDialogProps,
} from '@workspace/bamboo-core';
import { computed, nextTick, onUnmounted, ref, watch } from 'vue';
import { BoButton } from '../bo-button';
import { BoText } from '../bo-text';

const props = withDefaults(defineProps<BoDialogProps>(), {
	id: () => generateComponentId('dialog'),
	dataTestId: () => generateDataTestId('dialog'),
	size: () => DIALOG_MANIFEST.defaults.size,
	closeOnBackdrop: () => DIALOG_MANIFEST.defaults.closeOnBackdrop,
	closeOnEscape: () => DIALOG_MANIFEST.defaults.closeOnEscape,
	showClose: () => DIALOG_MANIFEST.defaults.showClose,
	closeAriaLabel: () => DIALOG_MANIFEST.defaults.closeAriaLabel,
	role: () => DIALOG_MANIFEST.defaults.role,
});

const open = defineModel<boolean>('open', { default: false });
const emit = defineEmits<{ close: [] }>();

defineSlots<{
	header?: () => unknown;
	footer?: () => unknown;
	default?: () => unknown;
}>();

const panelRef = ref<HTMLElement>();
const titleId = computed(() => `${props.id}-title`);
const descriptionId = computed(() => `${props.id}-description`);
const panelClasses = computed(() =>
	mergeTwClasses(
		DIALOG_MANIFEST.styles.panel.base,
		DIALOG_MANIFEST.styles.panel.size[props.size || DIALOG_MANIFEST.defaults.size],
	),
);

function onClose(): void {
	open.value = false;
	emit('close');
}

function onBackdropClick(): void {
	if (props.closeOnBackdrop) onClose();
}

function onEscape(): void {
	if (props.closeOnEscape) onClose();
}

watch(open, async (isOpen) => {
	if (isOpen) {
		await nextTick();
		panelRef.value?.focus();
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = '';
	}
});

onUnmounted(() => {
	document.body.style.overflow = '';
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/dialog.manifest.css';
</style>
