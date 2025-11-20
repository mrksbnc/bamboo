<template>
	<Teleport to="body">
		<Transition name="bo-toast-fade">
			<div
				v-if="isVisible"
				:id="id"
				:class="componentBaseClasses"
				:role="role"
				:aria-label="ariaLabel"
				:data-testid="dataTestId"
			>
				<div class="bo-toast__content">
					<bo-icon v-if="showIcon || icon" :icon="computedIcon" class="bo-toast__icon" />
					<div class="bo-toast__body">
						<bo-text
							v-if="title"
							:value="title"
							:font-size="fontSize.sm"
							:font-weight="fontWeight.semibold"
							:variant="textVariant.inherit"
							class="bo-toast__title"
						/>
						<bo-text
							:value="message"
							:font-size="fontSize.sm"
							:variant="textVariant.inherit"
							class="bo-toast__message"
						/>
						<slot />
					</div>
				</div>
				<button
					v-if="dismissible"
					type="button"
					class="bo-toast__close"
					aria-label="Close"
					@click="handleDismiss"
				>
					<bo-icon :icon="Icon.x" :size="16" />
				</button>
			</div>
		</Transition>
	</Teleport>
</template>

<script lang="ts" setup>
	import { Icon } from '@/components/bo-icon';
	import BoIcon from '@/components/bo-icon/bo-icon.vue';
	import { BoFontSize, BoFontWeight, BoText, BoTextVariant } from '@/components/bo-text';
	import { IdentityService } from '@/services/identity-service';
	import { BoVariant } from '@/shared/variant';
	import { computed, onMounted, onUnmounted, ref } from 'vue';
	import { BoToastPosition, type BoToastProps } from './bo-toast';

	const props = withDefaults(defineProps<BoToastProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-toast'),
		variant: BoVariant.primary,
		showIcon: true,
		dismissible: true,
		duration: 5000,
		position: BoToastPosition.topRight,
		role: 'alert',
	});

	const emit = defineEmits<{
		dismiss: [];
	}>();

	// Make enums available in template
	const textVariant = BoTextVariant;
	const fontSize = BoFontSize;
	const fontWeight = BoFontWeight;

	const isVisible = ref(true);
	let timeoutId: ReturnType<typeof setTimeout> | null = null;

	const computedIcon = computed<Icon>(() => {
		if (props.icon) return props.icon;

		switch (props.variant) {
			case BoVariant.success:
				return Icon.check_circle;
			case BoVariant.warning:
				return Icon.alert_triangle;
			case BoVariant.danger:
				return Icon.alert_circle;
			default:
				return Icon.info;
		}
	});

	const componentBaseClasses = computed<string>(() => {
		return [
			'bo-toast',
			`bo-toast--variant-${props.variant}`,
			`bo-toast--position-${props.position}`,
			props.customCssClass,
		]
			.filter(Boolean)
			.join(' ');
	});

	function handleDismiss(): void {
		isVisible.value = false;
		if (timeoutId) clearTimeout(timeoutId);
		emit('dismiss');
	}

	onMounted(() => {
		if (props.duration > 0) {
			timeoutId = setTimeout(() => {
				handleDismiss();
			}, props.duration);
		}
	});

	onUnmounted(() => {
		if (timeoutId) clearTimeout(timeoutId);
	});
</script>

<style scoped lang="scss">
	.bo-toast {
		position: fixed;
		z-index: var(--z-tooltip);
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding: 1rem;
		border-radius: 0.5rem;
		border: 1px solid transparent;
		gap: 0.75rem;
		min-width: 300px;
		max-width: 500px;
		box-shadow: var(--toast-shadow);

		&__content {
			display: flex;
			align-items: flex-start;
			gap: 0.75rem;
			flex: 1;
		}

		&__icon {
			flex-shrink: 0;
			margin-top: 0.125rem;
		}

		&__body {
			flex: 1;
		}

		&__title {
			margin-bottom: 0.25rem;
		}

		&__message {
			/* Typography handled by bo-text component */
		}

		&__close {
			flex-shrink: 0;
			background: none;
			border: none;
			padding: 0;
			cursor: pointer;
			color: var(--toast-close-icon);
			opacity: 0.7;
			transition: opacity var(--transition-fast);

			&:hover {
				opacity: 1;
				color: var(--toast-close-icon-hover);
			}
		}

		&--position-top-left {
			top: 1rem;
			left: 1rem;
		}

		&--position-top-center {
			top: 1rem;
			left: 50%;
			transform: translateX(-50%);
		}

		&--position-top-right {
			top: 1rem;
			right: 1rem;
		}

		&--position-bottom-left {
			bottom: 1rem;
			left: 1rem;
		}

		&--position-bottom-center {
			bottom: 1rem;
			left: 50%;
			transform: translateX(-50%);
		}

		&--position-bottom-right {
			bottom: 1rem;
			right: 1rem;
		}

		&--variant-primary {
			background-color: var(--toast-bg-primary);
			border-color: var(--toast-border-primary);
			color: var(--toast-text-primary);

			.bo-toast__icon {
				color: var(--toast-icon-primary);
			}
		}

		&--variant-secondary {
			background-color: var(--toast-bg-secondary);
			border-color: var(--toast-border-secondary);
			color: var(--toast-text-secondary);

			.bo-toast__icon {
				color: var(--toast-icon-secondary);
			}
		}

		&--variant-success {
			background-color: var(--toast-bg-success);
			border-color: var(--toast-border-success);
			color: var(--toast-text-success);

			.bo-toast__icon {
				color: var(--toast-icon-success);
			}
		}

		&--variant-warning {
			background-color: var(--toast-bg-warning);
			border-color: var(--toast-border-warning);
			color: var(--toast-text-warning);

			.bo-toast__icon {
				color: var(--toast-icon-warning);
			}
		}

		&--variant-danger {
			background-color: var(--toast-bg-danger);
			border-color: var(--toast-border-danger);
			color: var(--toast-text-danger);

			.bo-toast__icon {
				color: var(--toast-icon-danger);
			}
		}

		&--variant-light {
			background-color: var(--toast-bg-light);
			border-color: var(--toast-border-light);
			color: var(--toast-text-light);

			.bo-toast__icon {
				color: var(--toast-icon-light);
			}
		}

		&--variant-dark {
			background-color: var(--toast-bg-dark);
			border-color: var(--toast-border-dark);
			color: var(--toast-text-dark);

			.bo-toast__icon {
				color: var(--toast-icon-dark);
			}
		}
	}

	.bo-toast-fade-enter-active,
	.bo-toast-fade-leave-active {
		transition:
			opacity var(--transition-normal),
			transform var(--transition-normal);
	}

	.bo-toast-fade-enter-from,
	.bo-toast-fade-leave-to {
		opacity: 0;
		transform: translateY(-1rem);
	}
</style>
