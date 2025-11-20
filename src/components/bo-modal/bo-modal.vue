<template>
	<Teleport to="body">
		<Transition name="bo-modal-fade">
			<div
				v-if="modelValue"
				:id="id"
				:class="[componentBaseClasses, customCssClass]"
				:data-testid="dataTestId"
				:role="role || 'dialog'"
				:aria-modal="true"
				:aria-label="computedAriaLabel"
				:aria-labelledby="ariaLabelledBy"
				:aria-describedby="ariaDescribedBy"
				:aria-live="ariaLive"
				@click.self="handleBackdropClick"
				@keydown.esc="handleEscapeKey"
			>
				<div :class="modalClasses" ref="modalRef">
					<!-- Header -->
					<div v-if="title || showClose || $slots.header" class="bo-modal__header">
						<slot name="header">
							<bo-text
								v-if="title"
								:value="title"
								:font-size="BoFontSize.lg"
								:variant="BoTextVariant.inherit"
								class="bo-modal__title"
							/>
						</slot>
						<button
							v-if="showClose"
							type="button"
							class="bo-modal__close"
							:aria-label="'Close modal'"
							@click="closeModal"
						>
							<bo-icon :icon="Icon.x" :size="20" />
						</button>
					</div>

					<!-- Body -->
					<div class="bo-modal__body">
						<slot />
					</div>

					<!-- Footer -->
					<div v-if="$slots.footer" class="bo-modal__footer">
						<slot name="footer" />
					</div>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script lang="ts" setup>
	import { Icon } from '@/components/bo-icon';
	import BoIcon from '@/components/bo-icon/bo-icon.vue';
	import { BoFontSize, BoTextVariant } from '@/components/bo-text/bo-text';
	import BoText from '@/components/bo-text/bo-text.vue';
	import { IdentityService } from '@/services/identity-service';
	import { AriaLive } from '@/shared/accessibility';
	import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
	import { BoModalSize, type BoModalProps } from './bo-modal';

	const props = withDefaults(defineProps<BoModalProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-modal'),
		size: BoModalSize.md,
		showClose: true,
		closeOnBackdrop: true,
		closeOnEscape: true,
		preventBodyScroll: true,
		ariaLive: AriaLive.polite,
	});

	const emit = defineEmits<{
		'update:modelValue': [value: boolean];
		close: [];
		open: [];
	}>();

	const modalRef = ref<HTMLElement | null>(null);
	const previousActiveElement = ref<HTMLElement | null>(null);

	const componentBaseClasses = computed<string>(() => {
		return ['bo-modal', props.modelValue && 'bo-modal--open'].filter(Boolean).join(' ');
	});

	const modalClasses = computed<string>(() => {
		return ['bo-modal__content', `bo-modal__content--${props.size}`].filter(Boolean).join(' ');
	});

	const computedAriaLabel = computed<string | undefined>(() => {
		if (props.ariaLabel) {
			return props.ariaLabel;
		}
		if (props.ariaLabelledBy || props.title) {
			return undefined;
		}
		return 'Modal dialog';
	});

	function closeModal(): void {
		emit('update:modelValue', false);
		emit('close');
	}

	function handleBackdropClick(): void {
		if (props.closeOnBackdrop) {
			closeModal();
		}
	}

	function handleEscapeKey(event: KeyboardEvent): void {
		if (props.closeOnEscape && event.key === 'Escape') {
			closeModal();
		}
	}

	function trapFocus(event: KeyboardEvent): void {
		if (!modalRef.value || event.key !== 'Tab') {
			return;
		}

		const focusableElements = modalRef.value.querySelectorAll<HTMLElement>(
			'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
		);

		const firstElement = focusableElements[0];
		const lastElement = focusableElements[focusableElements.length - 1];

		if (event.shiftKey && document.activeElement === firstElement) {
			event.preventDefault();
			lastElement?.focus();
		} else if (!event.shiftKey && document.activeElement === lastElement) {
			event.preventDefault();
			firstElement?.focus();
		}
	}

	function handleBodyScroll(lock: boolean): void {
		if (!props.preventBodyScroll) {
			return;
		}

		if (lock) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	watch(
		() => props.modelValue,
		(isOpen) => {
			if (isOpen) {
				previousActiveElement.value = document.activeElement as HTMLElement;
				handleBodyScroll(true);
				emit('open');

				// Focus the modal after it's rendered
				setTimeout(() => {
					const firstFocusable = modalRef.value?.querySelector<HTMLElement>(
						'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
					);
					firstFocusable?.focus();
				}, 100);
			} else {
				handleBodyScroll(false);
				previousActiveElement.value?.focus();
			}
		},
	);

	onMounted(() => {
		document.addEventListener('keydown', trapFocus);
		if (props.modelValue) {
			handleBodyScroll(true);
		}
	});

	onUnmounted(() => {
		document.removeEventListener('keydown', trapFocus);
		handleBodyScroll(false);
	});
</script>

<style scoped lang="scss">
	.bo-modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: var(--z-index-modal);
		background-color: var(--modal-backdrop);
		padding: 1rem;

		&__content {
			position: relative;
			display: flex;
			flex-direction: column;
			width: 100%;
			max-height: calc(100vh - 2rem);
			background-color: var(--modal-bg);
			border: 1px solid var(--modal-border);
			border-radius: 0.5rem;
			box-shadow: var(--modal-shadow);
			overflow: hidden;

			&--sm {
				max-width: 24rem;
			}

			&--md {
				max-width: 32rem;
			}

			&--lg {
				max-width: 48rem;
			}

			&--xl {
				max-width: 64rem;
			}

			&--full {
				max-width: calc(100vw - 2rem);
				max-height: calc(100vh - 2rem);
			}
		}

		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 1.5rem;
			border-bottom: 1px solid var(--modal-border);
		}

		&__title {
			color: var(--modal-header-text);
		}

		&__close {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 2rem;
			height: 2rem;
			padding: 0;
			margin-left: 1rem;
			background: transparent;
			border: none;
			border-radius: 0.25rem;
			color: var(--modal-close-icon);
			cursor: pointer;
			transition: var(--transition-base);

			&:hover {
				background-color: var(--modal-close-bg-hover);
				color: var(--modal-close-icon-hover);
			}

			&:focus-visible {
				outline: 2px solid var(--modal-close-icon-hover);
				outline-offset: 2px;
			}
		}

		&__body {
			flex: 1;
			padding: 1.5rem;
			overflow-y: auto;
			color: var(--modal-body-text);
		}

		&__footer {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 0.75rem;
			padding: 1.5rem;
			border-top: 1px solid var(--modal-border);
		}
	}

	/* Transition animations */
	.bo-modal-fade-enter-active,
	.bo-modal-fade-leave-active {
		transition: opacity var(--transition-base);
	}

	.bo-modal-fade-enter-from,
	.bo-modal-fade-leave-to {
		opacity: 0;
	}

	.bo-modal-fade-enter-active .bo-modal__content {
		animation: bo-modal-slide-in 0.3s ease-out;
	}

	.bo-modal-fade-leave-active .bo-modal__content {
		animation: bo-modal-slide-out 0.3s ease-in;
	}

	@keyframes bo-modal-slide-in {
		from {
			transform: translateY(-2rem);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes bo-modal-slide-out {
		from {
			transform: translateY(0);
			opacity: 1;
		}
		to {
			transform: translateY(-2rem);
			opacity: 0;
		}
	}
</style>
