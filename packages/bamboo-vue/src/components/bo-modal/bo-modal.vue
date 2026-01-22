<template>
	<teleport to="body">
		<transition
			name="modal"
			enter-active-class="transition-opacity duration-200 ease-out"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition-opacity duration-200 ease-in"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<div
				v-if="open"
				:id="id"
				:data-testid="dataTestId"
				:class="backdropClassValues"
				:style="{ zIndex }"
				@click="onBackdropClick"
				@keydown.esc="onEscapePress"
				tabindex="-1"
			>
				<div :class="containerClassValues">
					<transition
						name="modal-content"
						enter-active-class="transition-all duration-200 ease-out"
						enter-from-class="opacity-0 scale-95 translate-y-4"
						enter-to-class="opacity-100 scale-100 translate-y-0"
						leave-active-class="transition-all duration-200 ease-in"
						leave-from-class="opacity-100 scale-100 translate-y-0"
						leave-to-class="opacity-0 scale-95 translate-y-4"
					>
						<div
							v-if="open"
							:class="contentClassValues"
							@click.stop
							role="dialog"
							:aria-modal="true"
							:aria-labelledby="title ? titleId : undefined"
						>
							<!-- Header -->
							<div v-if="title || showCloseButton || $slots.header" :class="headerClassValues">
								<slot name="header">
									<bo-text v-if="title" :id="titleId" :value="title" :class="titleClassValues" />
								</slot>
								<button
									v-if="showCloseButton"
									:class="closeButtonClassValues"
									@click="emit('close')"
									type="button"
									aria-label="Close modal"
								>
									<bo-icon icon="x" size="default" />
								</button>
							</div>

							<!-- Body -->
							<div :class="bodyClassValues">
								<slot />
							</div>

							<!-- Footer -->
							<div v-if="$slots.footer" :class="footerClassValues">
								<slot name="footer" />
							</div>
						</div>
					</transition>
				</div>
			</div>
		</transition>
	</teleport>
</template>

<script lang="ts" setup>
	import {
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		MODAL_MANIFEST,
		type BoModalProps,
	} from '@workspace/bamboo-core';
	import { computed, nextTick, onUnmounted, watch, type ComputedRef } from 'vue';
	import BoIcon from '../bo-icon/bo-icon.vue';
	import BoText from '../bo-text/bo-text.vue';

	const props = withDefaults(defineProps<BoModalProps>(), {
		...MODAL_MANIFEST.defaults,
	});

	interface Emits {
		close: [];
	}

	const emit = defineEmits<Emits>();

	// Computed properties
	const id = computed(() => props.id ?? generateComponentId('modal'));
	const dataTestId = computed(() => props.dataTestId ?? generateDataTestId('modal'));
	const titleId = computed(() => `${id.value}-title`);

	// Class computations
	const backdropClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(MODAL_MANIFEST.styles.backdrop),
	);

	const containerClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(MODAL_MANIFEST.styles.container),
	);

	const contentClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			MODAL_MANIFEST.styles.content.base,
			MODAL_MANIFEST.styles.content.size[props.size],
			MODAL_MANIFEST.styles.content.position[props.position],
		),
	);

	const headerClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			MODAL_MANIFEST.styles.header.base,
			props.showCloseButton ? MODAL_MANIFEST.styles.header.withCloseButton : '',
		),
	);

	const titleClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(MODAL_MANIFEST.styles.title),
	);

	const closeButtonClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(MODAL_MANIFEST.styles.closeButton),
	);

	const bodyClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(MODAL_MANIFEST.styles.body),
	);

	const footerClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(MODAL_MANIFEST.styles.footer),
	);

	// Event handlers
	const onBackdropClick = () => {
		if (props.closeOnBackdropClick) {
			emit('close');
		}
	};

	const onEscapePress = () => {
		if (props.closeOnEscape) {
			emit('close');
		}
	};

	// Body scroll management
	const originalBodyOverflow = document.body.style.overflow;

	const manageBodyScroll = (shouldPrevent: boolean) => {
		if (!props.preventBodyScroll) return;

		if (shouldPrevent) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = originalBodyOverflow;
		}
	};

	// Watch for open state changes
	watch(
		() => props.open,
		async (isOpen) => {
			if (isOpen) {
				await nextTick();
				manageBodyScroll(true);
			} else {
				manageBodyScroll(false);
			}
		},
		{ immediate: true },
	);

	// Cleanup on unmount
	onUnmounted(() => {
		manageBodyScroll(false);
	});
</script>
