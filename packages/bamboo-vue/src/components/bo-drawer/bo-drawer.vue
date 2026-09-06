<template>
	<Teleport to="body">
		<Transition name="bo-drawer">
			<div v-if="open" :class="DRAWER_MANIFEST.styles.backdrop" @click.self="onBackdropClick" />
		</Transition>
		<Transition name="bo-drawer">
			<div
				v-if="open"
				:data-side="side"
				:class="DRAWER_MANIFEST.styles.wrapper"
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
					<div :class="DRAWER_MANIFEST.styles.header">
						<slot name="header">
							<div :class="DRAWER_MANIFEST.styles.headerContent">
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
						:class="DRAWER_MANIFEST.styles.close"
						@click="onClose"
					/>
					<div :class="DRAWER_MANIFEST.styles.body">
						<bo-text
							v-if="description"
							:id="descriptionId"
							font-size="sm"
							:class="DRAWER_MANIFEST.styles.description"
						>
							{{ description }}
						</bo-text>
						<slot />
					</div>
					<div v-if="$slots['footer']" :class="DRAWER_MANIFEST.styles.footer">
						<slot name="footer" />
					</div>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup lang="ts">
import type { BoDrawerProps } from '@workspace/bamboo-core';
import { DRAWER_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId, mergeTwClasses } from '@workspace/bamboo-core';
import { computed, nextTick, onUnmounted, ref, useTemplateRef, watch } from 'vue';
import { BoButton } from '../bo-button';
import { BoText } from '../bo-text';

const props = withDefaults(defineProps<BoDrawerProps>(), {
	id: () => generateComponentId('drawer'),
	dataTestId: () => generateDataTestId('drawer'),
	side: () => DRAWER_MANIFEST.defaults.side,
	size: () => DRAWER_MANIFEST.defaults.size,
	closeOnBackdrop: () => DRAWER_MANIFEST.defaults.closeOnBackdrop,
	closeOnEscape: () => DRAWER_MANIFEST.defaults.closeOnEscape,
	showClose: () => DRAWER_MANIFEST.defaults.showClose,
	closeAriaLabel: () => DRAWER_MANIFEST.defaults.closeAriaLabel,
	role: () => DRAWER_MANIFEST.defaults.role,
});

const open = defineModel<boolean>('open', { default: false });
const emit = defineEmits<{
	(event: 'close'): void;
}>();
defineSlots<{ header?: () => unknown; footer?: () => unknown; default?: () => unknown }>();

const panelRef = useTemplateRef<HTMLElement>('panelRef');
const titleId = computed(() => {
	return `${props.id}-title`;
});
const descriptionId = computed(() => {
	return `${props.id}-description`;
});
const side = computed(() => {
	return props.side || DRAWER_MANIFEST.defaults.side;
});
const panelClasses = computed(() => {
	return mergeTwClasses(
		DRAWER_MANIFEST.styles.panel.base,
		DRAWER_MANIFEST.styles.panel.side[side.value],
		DRAWER_MANIFEST.styles.panel.size[props.size || DRAWER_MANIFEST.defaults.size],
	);
});

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
@import '@workspace/bamboo-core/manifests/drawer.manifest.css';
</style>
