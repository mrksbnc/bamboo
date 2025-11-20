<template>
	<div
		v-if="isVisible"
		:id="id"
		popover="manual"
		:class="componentBaseClasses"
		:role="role"
		:aria-live="ariaLive"
		:aria-atomic="ariaAtomic"
		:aria-label="ariaLabel"
		:data-testid="dataTestId"
	>
		<div v-if="showIcon" class="bo-alert__icon-wrapper">
			<bo-icon
				:icon="alertIcon"
				:size="20"
				:variant="BoIconVariant.inherit"
				custom-css-class="bo-alert__icon"
			/>
		</div>
		<div class="bo-alert__body">
			<bo-text
				v-if="title"
				:value="title"
				:font-size="BoFontSize.default"
				:font-weight="BoFontWeight.semibold"
				:variant="BoTextVariant.inherit"
				custom-css-class="bo-alert__header"
			/>
			<bo-text
				v-if="message"
				:value="message"
				:font-size="BoFontSize.sm"
				:variant="BoTextVariant.inherit"
				custom-css-class="bo-alert__text"
			/>
			<slot />
		</div>
		<div v-if="dismissible" class="bo-alert__action">
			<button
				type="button"
				class="bo-alert__close"
				:aria-label="closeAriaLabel"
				@click="handleDismiss"
			>
				<bo-icon :icon="Icon.x" :size="16" />
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { BoIconVariant, Icon } from '@/components/bo-icon';
	import BoIcon from '@/components/bo-icon/bo-icon.vue';
	import { BoFontSize, BoFontWeight, BoText, BoTextVariant } from '@/components/bo-text';
	import { IdentityService } from '@/services/identity-service';
	import { BoVariant } from '@/shared/variant';
	import { computed, ref } from 'vue';
	import type { BoAlertProps } from './bo-alert';

	const props = withDefaults(defineProps<BoAlertProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-alert'),
		variant: BoVariant.primary,
		showIcon: true,
		role: 'alert',
		ariaLive: 'assertive',
		ariaAtomic: true,
		closeAriaLabel: 'Dismiss this notification',
	});

	const emit = defineEmits<{
		dismiss: [];
	}>();

	const isVisible = ref(true);

	const componentBaseClasses = computed<string>(() => {
		return ['bo-alert', `bo-alert--variant-${props.variant}`, props.customCssClass]
			.filter(Boolean)
			.join(' ');
	});

	const alertIcon = computed<Icon>(() => {
		switch (props.variant) {
			case BoVariant.success:
				return Icon.check_circle;
			case BoVariant.warning:
				return Icon.alert_triangle;
			case BoVariant.danger:
				return Icon.alert_octagon;
			case BoVariant.primary:
			case BoVariant.secondary:
			case BoVariant.light:
			case BoVariant.dark:
			default:
				return Icon.info;
		}
	});

	function handleDismiss(): void {
		isVisible.value = false;
		emit('dismiss');
	}
</script>

<style scoped lang="scss">
	.bo-alert {
		position: fixed;
		display: flex;
		gap: 0.75rem;
		top: 0;
		right: 0;
		margin: 1rem;
		width: 24rem;
		max-width: calc(100vw - 2rem);
		background-color: var(--alert-bg);
		border: 1px solid var(--alert-border);
		box-shadow: var(--shadow-lg);
		border-radius: 0.5rem;
		padding: 1rem;
		overflow: clip;
		z-index: var(--z-popover);
		color: var(--alert-text);
		transform: translateX(calc(100% + 1rem));
		animation: slideInOut 5s infinite cubic-bezier(0.33, 0, 0.66, 1.33);
		animation-play-state: var(--animation-play-state, running);

		&:hover {
			--animation-play-state: paused;
		}

		&::before {
			content: '';
			display: block;
			position: absolute;
			inset: 0 0 auto;
			height: 0.25rem;
			background-color: var(--alert-progress-color);
			transform-origin: left;
			animation: countdown 5s infinite linear;
			animation-play-state: var(--animation-play-state, running);
		}

		&__icon-wrapper {
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 9999px;
			width: 2.5rem;
			height: 2.5rem;
			background-color: var(--alert-icon-bg);
			flex-shrink: 0;
		}

		&__icon {
			color: var(--alert-icon-color);
		}

		&__body {
			flex: 1;
		}

		&__header {
			margin: 0;
		}

		&__text {
			margin: 0.25rem 0 0;
		}

		&__action {
			margin-left: auto;
		}

		&__close {
			appearance: none;
			background: none;
			border: none;
			font: inherit;
			margin: 0;
			padding: 0;
			color: var(--alert-close-icon);
			cursor: pointer;
			transition: color var(--transition-base) var(--transition-timing);

			&:hover {
				color: var(--alert-close-icon-hover);
			}
		}

		&--variant-primary {
			--alert-progress-color: var(--alert-icon-info);
			--alert-icon-bg: var(--alert-icon-bg-info);
			--alert-icon-color: var(--alert-icon-info);
		}

		&--variant-secondary {
			--alert-progress-color: var(--alert-icon-info);
			--alert-icon-bg: var(--alert-icon-bg-info);
			--alert-icon-color: var(--alert-icon-info);
		}

		&--variant-success {
			--alert-progress-color: var(--alert-icon-success);
			--alert-icon-bg: var(--alert-icon-bg-success);
			--alert-icon-color: var(--alert-icon-success);
		}

		&--variant-warning {
			--alert-progress-color: var(--alert-icon-warning);
			--alert-icon-bg: var(--alert-icon-bg-warning);
			--alert-icon-color: var(--alert-icon-warning);
		}

		&--variant-danger {
			--alert-progress-color: var(--alert-icon-danger);
			--alert-icon-bg: var(--alert-icon-bg-danger);
			--alert-icon-color: var(--alert-icon-danger);
		}

		&--variant-light {
			--alert-progress-color: var(--alert-icon-info);
			--alert-icon-bg: var(--alert-icon-bg-info);
			--alert-icon-color: var(--alert-icon-info);
		}

		&--variant-dark {
			--alert-progress-color: var(--alert-icon-info);
			--alert-icon-bg: var(--alert-icon-bg-info);
			--alert-icon-color: var(--alert-icon-info);
		}
	}

	@keyframes slideInOut {
		15%,
		66% {
			transform: translateX(0);
		}
	}

	@keyframes countdown {
		66%,
		100% {
			transform: scaleX(0);
		}
	}
</style>
