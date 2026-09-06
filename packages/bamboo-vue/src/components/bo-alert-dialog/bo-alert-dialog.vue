<template>
	<Teleport to="body">
		<Transition name="bo-alert-dialog">
			<div
				v-if="open"
				:class="ALERT_DIALOG_MANIFEST.styles.backdrop"
				data-slot="alert-dialog-backdrop"
			/>
		</Transition>
		<Transition name="bo-alert-dialog">
			<div v-if="open" :class="ALERT_DIALOG_MANIFEST.styles.wrapper">
				<div
					:id="id"
					:data-testid="dataTestId"
					:data-state="'open'"
					:role="role"
					:aria-modal="true"
					:aria-label="ariaLabel"
					:aria-labelledby="ariaLabelledBy ?? (title ? titleId : undefined)"
					:aria-describedby="ariaDescribedBy ?? (description ? descriptionId : undefined)"
					:class="panelClasses"
					tabindex="-1"
					ref="panelRef"
					@keydown.escape.stop.prevent="onEscape"
				>
					<div :class="ALERT_DIALOG_MANIFEST.styles.header" data-slot="alert-dialog-header">
						<bo-text
							v-if="title"
							:id="titleId"
							font-size="lg"
							font-weight="semibold"
							:class="ALERT_DIALOG_MANIFEST.styles.title"
						>
							{{ title }}
						</bo-text>
						<slot name="header" />
					</div>

					<bo-button
						kind="ghost"
						prefix-icon="x"
						:aria-label="closeAriaLabel"
						:class="ALERT_DIALOG_MANIFEST.styles.close"
						@click="onCancel"
					/>

					<bo-text
						v-if="description"
						:id="descriptionId"
						font-size="sm"
						:class="ALERT_DIALOG_MANIFEST.styles.description"
					>
						{{ description }}
					</bo-text>
					<slot />

					<div :class="ALERT_DIALOG_MANIFEST.styles.footer" data-slot="alert-dialog-footer">
						<bo-button v-if="showCancel" kind="outline" @click="onCancel">
							{{ cancelText }}
						</bo-button>
						<bo-button
							:variant="variant === 'destructive' ? 'destructive' : 'primary'"
							@click="onConfirm"
						>
							{{ confirmText }}
						</bo-button>
					</div>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup lang="ts">
import {
	ALERT_DIALOG_MANIFEST,
	generateComponentId,
	generateDataTestId,
	mergeTwClasses,
	type BoAlertDialogProps,
} from '@workspace/bamboo-core';
import { computed, nextTick, onUnmounted, ref, watch } from 'vue';
import { BoButton } from '../bo-button';
import { BoText } from '../bo-text';

const props = withDefaults(defineProps<BoAlertDialogProps>(), {
	id: () => generateComponentId('alert-dialog'),
	dataTestId: () => generateDataTestId('alert-dialog'),
	confirmText: () => ALERT_DIALOG_MANIFEST.defaults.confirmText,
	cancelText: () => ALERT_DIALOG_MANIFEST.defaults.cancelText,
	showCancel: () => ALERT_DIALOG_MANIFEST.defaults.showCancel,
	variant: () => ALERT_DIALOG_MANIFEST.defaults.variant,
	closeOnEscape: () => ALERT_DIALOG_MANIFEST.defaults.closeOnEscape,
	closeAriaLabel: () => ALERT_DIALOG_MANIFEST.defaults.closeAriaLabel,
	role: () => ALERT_DIALOG_MANIFEST.defaults.role,
});

const open = defineModel<boolean>('open', { default: false });
const emit = defineEmits<{ confirm: []; cancel: []; close: [] }>();

defineSlots<{ header?: () => unknown; default?: () => unknown }>();

const panelRef = ref<HTMLElement>();
const titleId = computed(() => `${props.id}-title`);
const descriptionId = computed(() => `${props.id}-description`);
const panelClasses = computed(() =>
	mergeTwClasses(
		ALERT_DIALOG_MANIFEST.styles.panel,
		ALERT_DIALOG_MANIFEST.styles.variant[props.variant || ALERT_DIALOG_MANIFEST.defaults.variant],
	),
);

function close(event: 'confirm' | 'cancel'): void {
	open.value = false;
	if (event === 'confirm') emit('confirm');
	else emit('cancel');
	emit('close');
}

function onConfirm(): void {
	close('confirm');
}

function onCancel(): void {
	close('cancel');
}

function onEscape(): void {
	if (props.closeOnEscape) onCancel();
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
@import '@workspace/bamboo-core/manifests/alert-dialog.manifest.css';
</style>
