<template>
	<Teleport to="body">
		<Transition name="bo-sheet">
			<div v-if="open" :class="SHEET_MANIFEST.styles.backdrop" @click.self="onBackdropClick" />
		</Transition>
		<Transition name="bo-sheet">
			<div
				v-if="open"
				:data-side="side"
				:class="SHEET_MANIFEST.styles.wrapper"
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
					:data-side="side"
					:class="panelClasses"
					tabindex="-1"
					ref="panelRef"
					@keydown.escape.stop.prevent="onEscape"
				>
					<div :class="SHEET_MANIFEST.styles.header">
						<slot name="header">
							<div :class="SHEET_MANIFEST.styles.headerContent">
								<bo-text v-if="title" :id="titleId" font-size="lg" font-weight="semibold">
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
						:class="SHEET_MANIFEST.styles.close"
						@click="onClose"
					/>
					<div :class="SHEET_MANIFEST.styles.body">
						<bo-text
							v-if="description"
							:id="descriptionId"
							font-size="sm"
							:class="SHEET_MANIFEST.styles.description"
						>
							{{ description }}
						</bo-text>
						<slot />
					</div>
					<div v-if="$slots['footer']" :class="SHEET_MANIFEST.styles.footer">
						<slot name="footer" />
					</div>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup lang="ts">
import type { BoSheetProps } from '@workspace/bamboo-core';
import { SHEET_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId, mergeTwClasses } from '@workspace/bamboo-core';
import { computed, nextTick, onUnmounted, ref, watch } from 'vue';
import { BoButton } from '../bo-button';
import { BoText } from '../bo-text';

const props = withDefaults(defineProps<BoSheetProps>(), {
	id: () => generateComponentId('sheet'),
	dataTestId: () => generateDataTestId('sheet'),
	side: () => SHEET_MANIFEST.defaults.side,
	size: () => SHEET_MANIFEST.defaults.size,
	closeOnBackdrop: () => SHEET_MANIFEST.defaults.closeOnBackdrop,
	closeOnEscape: () => SHEET_MANIFEST.defaults.closeOnEscape,
	showClose: () => SHEET_MANIFEST.defaults.showClose,
	closeAriaLabel: () => SHEET_MANIFEST.defaults.closeAriaLabel,
	role: () => SHEET_MANIFEST.defaults.role,
});

const open = defineModel<boolean>('open', { default: false });
const emit = defineEmits<{ close: [] }>();
defineSlots<{ header?: () => unknown; footer?: () => unknown; default?: () => unknown }>();

const panelRef = ref<HTMLElement>();
const titleId = computed(() => `${props.id}-title`);
const descriptionId = computed(() => `${props.id}-description`);
const side = computed(() => props.side || SHEET_MANIFEST.defaults.side);
const panelClasses = computed(() =>
	mergeTwClasses(
		SHEET_MANIFEST.styles.panel.base,
		SHEET_MANIFEST.styles.panel.side[side.value],
		SHEET_MANIFEST.styles.panel.size[props.size || SHEET_MANIFEST.defaults.size],
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
@import '@workspace/bamboo-core/manifests/sheet.manifest.css';
@import '@workspace/bamboo-core/manifests/shared.css';
</style>
