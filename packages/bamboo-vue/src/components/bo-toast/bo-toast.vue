<template>
	<Transition name="bo-toast">
		<div
			v-if="open"
			:id="id"
			:data-testid="dataTestId"
			:role="role"
			:aria-labelledby="title && !slots['default'] ? titleId : undefined"
			:aria-describedby="description && !slots['default'] ? descriptionId : undefined"
			:data-state="'open'"
			:class="toastClasses"
		>
			<bo-icon
				v-if="iconValue"
				:icon="iconValue"
				size="sm"
				:class="TOAST_MANIFEST.styles.icon"
				aria-hidden="true"
			/>
			<div :class="TOAST_MANIFEST.styles.content">
				<slot>
					<bo-text
						v-if="title"
						:id="titleId"
						font-size="sm"
						font-weight="medium"
						:class="TOAST_MANIFEST.styles.title"
					>
						{{ title }}
					</bo-text>
					<bo-text
						v-if="description"
						:id="descriptionId"
						font-size="sm"
						:class="TOAST_MANIFEST.styles.description"
					>
						{{ description }}
					</bo-text>
				</slot>
			</div>
			<bo-button
				v-if="closable"
				kind="ghost"
				prefix-icon="x"
				:aria-label="closeAriaLabel"
				:class="TOAST_MANIFEST.styles.close"
				@click="onClose"
			/>
		</div>
	</Transition>
</template>

<script setup lang="ts">
import {
	TOAST_MANIFEST,
	generateComponentId,
	generateDataTestId,
	mergeTwClasses,
	type BoToastProps,
	type Icon,
} from '@workspace/bamboo-core';
import { computed, onUnmounted, useSlots, watch } from 'vue';
import { BoButton } from '../bo-button';
import { BoIcon } from '../bo-icon';
import { BoText } from '../bo-text';

const props = withDefaults(defineProps<BoToastProps>(), {
	id: () => generateComponentId('toast'),
	dataTestId: () => generateDataTestId('toast'),
	variant: () => TOAST_MANIFEST.defaults.variant,
	duration: () => TOAST_MANIFEST.defaults.duration,
	closable: () => TOAST_MANIFEST.defaults.closable,
	closeAriaLabel: () => TOAST_MANIFEST.defaults.closeAriaLabel,
	role: () => TOAST_MANIFEST.defaults.role,
});

const open = defineModel<boolean>('open', { default: true });
const emit = defineEmits<{
	(event: 'close'): void;
}>();
const slots = useSlots();
let timer: ReturnType<typeof setTimeout> | undefined;

const titleId = computed(() => {
	return `${props.id}-title`;
});
const descriptionId = computed(() => {
	return `${props.id}-description`;
});
const toastClasses = computed(() => {
	return mergeTwClasses(
		TOAST_MANIFEST.styles.item,
		TOAST_MANIFEST.styles.variant[props.variant || TOAST_MANIFEST.defaults.variant],
	);
});
const iconValue = computed<Icon | undefined>(() => {
	const icons: Record<string, Icon> = {
		primary: 'alert_circle',
		success: 'check_circle',
		warning: 'alert_triangle',
		destructive: 'alert_octagon',
	};
	return icons[props.variant || 'default'];
});

function clearTimer(): void {
	if (timer) {
		clearTimeout(timer);
		timer = undefined;
	}
}

function startTimer(): void {
	clearTimer();
	if (open.value && props.duration > 0) {
		timer = setTimeout(() => onClose(), props.duration);
	}
}

function onClose(): void {
	clearTimer();
	open.value = false;
	emit('close');
}

watch(open, startTimer, { immediate: true });

onUnmounted(clearTimer);
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/toast.manifest.css';
@import '@workspace/bamboo-core/manifests/shared.css';
</style>
