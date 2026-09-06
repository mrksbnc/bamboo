<template>
	<Teleport to="body">
		<Transition name="bo-modal">
			<div
				v-if="open"
				data-slot="modal-overlay"
				:class="MODAL_MANIFEST.styles.backdrop"
				@click.self="onBackdropClick"
			/>
		</Transition>
		<Transition name="bo-modal">
			<div
				v-if="open"
				data-slot="modal-wrapper"
				:class="MODAL_MANIFEST.styles.wrapper"
				@click.self="onBackdropClick"
			>
				<div
					:id="id"
					:data-testid="dataTestId"
					:role="role"
					:aria-modal="true"
					:aria-label="ariaLabel"
					:aria-labelledby="ariaLabelledBy ?? titleId"
					:aria-describedby="ariaDescribedBy ?? descriptionId"
					:data-state="'open'"
					data-slot="modal-content"
					:class="panelClasses"
					tabindex="-1"
					ref="panelRef"
					@keydown.escape="onEscape"
				>
					<div data-slot="modal-header" :class="headerClasses">
						<div :class="MODAL_MANIFEST.styles.header.content">
							<bo-icon
								v-if="variantIcon"
								:icon="variantIcon"
								size="sm"
								:class="MODAL_MANIFEST.styles.icon.variant[variant]"
							/>
							<slot name="header">
								<bo-text
									:id="titleId"
									font-size="lg"
									font-weight="semibold"
									variant="default"
									:class="MODAL_MANIFEST.styles.header.title"
								>
									{{ title }}
								</bo-text>
							</slot>
						</div>
					</div>

					<button
						v-if="showClose"
						type="button"
						data-slot="modal-close"
						:class="MODAL_MANIFEST.styles.close"
						:aria-label="closeAriaLabel"
						@click="onClose"
					>
						<bo-icon icon="x" size="sm" variant="current" aria-hidden="true" />
					</button>

					<div :id="descriptionId" data-slot="modal-body" :class="MODAL_MANIFEST.styles.body">
						<slot />
					</div>

					<div
						v-if="$slots['footer']"
						data-slot="modal-footer"
						:class="MODAL_MANIFEST.styles.footer"
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
	MODAL_MANIFEST,
	generateComponentId,
	generateDataTestId,
	mergeTwClasses,
	type BoModalProps,
	type Icon,
} from '@workspace/bamboo-core';
import { computed, nextTick, onUnmounted, ref, useTemplateRef, watch } from 'vue';
import { BoIcon } from '../bo-icon';
import { BoText } from '../bo-text';

const props = withDefaults(defineProps<BoModalProps>(), {
	id: () => generateComponentId('modal'),
	dataTestId: () => generateDataTestId('modal'),
	variant: () => MODAL_MANIFEST.defaults.variant,
	size: () => MODAL_MANIFEST.defaults.size,
	closeOnBackdrop: () => MODAL_MANIFEST.defaults.closeOnBackdrop,
	closeOnEscape: () => MODAL_MANIFEST.defaults.closeOnEscape,
	showClose: () => MODAL_MANIFEST.defaults.showClose,
	closeAriaLabel: () => MODAL_MANIFEST.defaults.closeAriaLabel,
	role: () => MODAL_MANIFEST.defaults.role,
});

const emit = defineEmits<{
	(event: 'close'): void;
}>();

defineSlots<{
	header?: () => unknown;
	footer?: () => unknown;
	default?: () => unknown;
}>();

const panelRef = useTemplateRef<HTMLElement>('panelRef');
const titleId = computed<string>(() => {
	return `${props.id}-title`;
});
const descriptionId = computed<string>(() => {
	return `${props.id}-description`;
});

const variantIcon = computed<Icon | null>(() => {
	const map: Record<string, Icon> = {
		primary: 'alert_circle',
		warning: 'alert_triangle',
		destructive: 'alert_octagon',
	};

	return map[props.variant] ?? null;
});

const panelClasses = computed<string>(() => {
	return mergeTwClasses(
		MODAL_MANIFEST.styles.panel.base,
		MODAL_MANIFEST.styles.panel.size[props.size || 'default'],
	);
});

const headerClasses = computed<string>(() => {
	return mergeTwClasses(
		MODAL_MANIFEST.styles.header.base,
		MODAL_MANIFEST.styles.header.variant[props.variant || 'default'],
	);
});

function onClose(): void {
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

watch(
	() => props.open,
	async (isOpen) => {
		if (isOpen) {
			await nextTick();
			panelRef.value?.focus();
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	},
);

onUnmounted(() => {
	document.body.style.overflow = '';
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/modal.manifest.css';
</style>
