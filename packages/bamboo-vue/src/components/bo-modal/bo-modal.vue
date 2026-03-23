<template>
	<Teleport to="body">
		<Transition name="bo-modal">
			<div v-if="open" :class="MODAL_MANIFEST.styles.backdrop" @click.self="onBackdropClick" />
		</Transition>
		<Transition name="bo-modal">
			<div v-if="open" :class="MODAL_MANIFEST.styles.wrapper" @click.self="onBackdropClick">
				<div
					:id="id"
					:data-testid="dataTestId"
					:role="role"
					:aria-modal="true"
					:aria-label="ariaLabel"
					:aria-labelledby="ariaLabelledBy ?? titleId"
					:aria-describedby="ariaDescribedBy"
					:class="panelClasses"
					@keydown.escape="onEscape"
					tabindex="-1"
					ref="panelRef"
				>
					<!-- Header -->
					<div :class="headerClasses">
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
								class="flex-1"
							>
								{{ title }}
							</bo-text>
						</slot>
						<button
							v-if="showClose"
							type="button"
							:class="MODAL_MANIFEST.styles.close"
							aria-label="Close"
							@click="onClose"
						>
							<bo-icon icon="x" size="sm" variant="current" />
						</button>
					</div>

					<div :class="MODAL_MANIFEST.styles.body">
						<slot />
					</div>

					<div v-if="$slots['footer']" :class="MODAL_MANIFEST.styles.footer">
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
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
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
	role: () => MODAL_MANIFEST.defaults.role,
});


const emit = defineEmits<{
	close: [];
}>();


const panelRef = ref<HTMLElement>();
const titleId = computed(() => `${props.id}-title`);


const variantIcon = computed<Icon | null>(() => {
	const map: Record<string, Icon> = {
		info: 'alert_circle',
		warning: 'alert_triangle',
		error: 'alert_octagon',
	};
	return map[props.variant] ?? null;
});


const panelClasses = computed(() =>
	mergeTwClasses(MODAL_MANIFEST.styles.panel.base, MODAL_MANIFEST.styles.panel.size[props.size]),
);


const headerClasses = computed(() =>
	mergeTwClasses(
		MODAL_MANIFEST.styles.header.base,
		MODAL_MANIFEST.styles.header.variant[props.variant],
	),
);


const onClose = () => emit('close');


const onBackdropClick = () => {
	if (props.closeOnBackdrop) {
		onClose();
	}
};


const onEscape = () => {
	if (props.closeOnEscape) {
		onClose();
	}
};


// Focus trap: focus the panel when opened
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

<style scoped>
.bo-modal-enter-active,
.bo-modal-leave-active {
	transition:
		opacity 0.2s ease,
		transform 0.2s ease;
}

.bo-modal-enter-from,
.bo-modal-leave-to {
	opacity: 0;
}

.bo-modal-enter-from [role],
.bo-modal-leave-to [role] {
	transform: scale(0.95);
}
</style>
