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
								<bo-icon
									v-if="dialogIcon"
									:icon="dialogIcon"
									:variant="dialogIconVariant"
									size="sm"
									:class="DIALOG_MANIFEST.styles.icon"
									aria-hidden="true"
								/>
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
						variant="secondary"
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
	type BoDialogVariant,
	type BoIconVariant,
	type BoDialogProps,
	type Icon,
} from '@workspace/bamboo-core';
import { computed, nextTick, onUnmounted, useTemplateRef, watch } from 'vue';
import { BoButton } from '../bo-button';
import { BoIcon } from '../bo-icon';
import { BoText } from '../bo-text';

const props = withDefaults(defineProps<BoDialogProps>(), {
	id: () => generateComponentId('dialog'),
	dataTestId: () => generateDataTestId('dialog'),
	size: () => DIALOG_MANIFEST.defaults.size,
	variant: () => DIALOG_MANIFEST.defaults.variant,
	closeOnBackdrop: () => DIALOG_MANIFEST.defaults.closeOnBackdrop,
	closeOnEscape: () => DIALOG_MANIFEST.defaults.closeOnEscape,
	showClose: () => DIALOG_MANIFEST.defaults.showClose,
	closeAriaLabel: () => DIALOG_MANIFEST.defaults.closeAriaLabel,
	role: () => DIALOG_MANIFEST.defaults.role,
});

const open = defineModel<boolean>('open', { default: false });
const emit = defineEmits<{
	(event: 'close'): void;
}>();

defineSlots<{
	header?: () => unknown;
	footer?: () => unknown;
	default?: () => unknown;
}>();

const panelRef = useTemplateRef<HTMLElement>('panelRef');
const dialogIcon = computed<Icon | undefined>(() => {
	const icons: Partial<Record<BoDialogVariant, Icon>> = {
		info: 'alert_circle',
		warning: 'alert_triangle',
		destructive: 'alert_octagon',
	};
	return icons[props.variant || 'default'];
});
const dialogIconVariant = computed<BoIconVariant | undefined>(() => {
	const variants: Partial<Record<BoDialogVariant, BoIconVariant>> = {
		info: 'primary',
		warning: 'warning',
		destructive: 'destructive',
	};
	return variants[props.variant || 'default'];
});
const titleId = computed(() => {
	return `${props.id}-title`;
});
const descriptionId = computed(() => {
	return `${props.id}-description`;
});
const panelClasses = computed(() => {
	return mergeTwClasses(
		DIALOG_MANIFEST.styles.panel.base,
		DIALOG_MANIFEST.styles.panel.size[props.size || DIALOG_MANIFEST.defaults.size],
		DIALOG_MANIFEST.styles.panel.variant[props.variant || DIALOG_MANIFEST.defaults.variant],
	);
});

function onClose(): void {
	open.value = false;
	emit('close');
}

function onBackdropClick(): void {
	if (props.closeOnBackdrop) {
		onClose();
	}
}

function onEscape(): void {
	if (props.closeOnEscape) {
		onClose();
	}
}

watch(open, async (isOpen) => {
	if (typeof document === 'undefined') {
		return;
	}
	if (isOpen) {
		await nextTick();
		panelRef.value?.focus();
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = '';
	}
});

onUnmounted(() => {
	if (typeof document === 'undefined') {
		return;
	}
	document.body.style.overflow = '';
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/dialog.manifest.css';
</style>
