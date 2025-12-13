<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:class="[containerClass, customContainerCssClass]"
		:aria-live="ariaLive"
		:aria-label="ariaLabel"
		:aria-busy="ariaBusy"
	>
		<span :class="[spinnerClass, customSpinnerCssClass]" :style="spinnerStyle"></span>
		<slot>
			<bo-text
				v-if="loaderText"
				:value="loaderText"
				:font-size="boFontSize"
				:variant="BoTextVariant.secondary"
			/>
		</slot>
	</div>
</template>

<script lang="ts" setup>
	import { BoFontSize, BoTextVariant } from '@/components/bo-text/bo-text.js';
	import BoText from '@/components/bo-text/bo-text.vue';
	import type { ConditionalCssProperties } from '@/core/css.js';
	import { IdentityService } from '@/services/identity-service.js';
	import { BoLoaderTextPosition } from '@/shared/index.js';
	import { BoSize } from '@/shared/size.js';
	import { BoVariant } from '@/shared/variant.js';
	import { computed, type StyleValue } from 'vue';
	import { type BoLoadingSpinnerProps } from './bo-loading-spinner.js';

	const props = withDefaults(defineProps<BoLoadingSpinnerProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-loading-spinner'),
		size: BoSize.default,
		variant: BoVariant.primary,
		textPosition: BoLoaderTextPosition.after,
	});

	const boFontSize = computed<BoFontSize>(() => {
		switch (props.size) {
			case BoSize.extra_small:
				return BoFontSize.xs;
			case BoSize.small:
				return BoFontSize.sm;
			case BoSize.large:
				return BoFontSize.xl;
			case BoSize.extra_large:
				return BoFontSize['2xl'];
			case BoSize.default:
			default:
				return BoFontSize.lg;
		}
	});

	const containerClass = computed<ConditionalCssProperties>(() => {
		return {
			'bo-loading-spinner': true,
			[`bo-loading-spinner--${props.textPosition}`]: true,
		};
	});

	const spinnerClass = computed<ConditionalCssProperties>(() => {
		return {
			'bo-loading-spinner__spinner': true,
			[`bo-loading-spinner__spinner--${props.size}`]: true,
			[`bo-loading-spinner__spinner--${props.variant}`]: true,
		};
	});

	const spinnerStyle = computed<StyleValue>(() => {
		if (props.customColor) {
			return {
				'border-bottom-color': props.customColor,
			};
		}

		return {};
	});
</script>

<style scoped lang="scss">
	.bo-loading-spinner {
		gap: 0.75rem;
		align-items: center;
		display: inline-flex;

		&--top {
			flex-direction: column;
		}

		&--bottom {
			flex-direction: column-reverse;
		}

		&--before {
			flex-direction: row-reverse;
		}

		&--after {
			flex-direction: row;
		}

		&__spinner {
			display: inline;
			border-radius: 50%;
			border: 0.2rem solid;
			border-color: transparent;
			animation: bo-loading-spinner-rotation 1s linear infinite;

			&--extra-small {
				width: var(--size-xs);
				height: var(--size-xs);
			}

			&--small {
				width: var(--size-sm);
				height: var(--size-sm);
			}

			&--default {
				width: var(--size-md);
				height: var(--size-md);
			}

			&--large {
				width: var(--size-lg);
				height: var(--size-lg);
			}

			&--extra-large {
				width: var(--size-xl);
				height: var(--size-xl);
			}

			&--primary {
				border-bottom-color: var(--bo-loading-spinner-color-primary);
			}

			&--secondary {
				border-bottom-color: var(--bo-loading-spinner-color-secondary);
			}

			&--success {
				border-bottom-color: var(--bo-loading-spinner-color-success);
			}

			&--warning {
				border-bottom-color: var(--bo-loading-spinner-color-warning);
			}

			&--danger {
				border-bottom-color: var(--bo-loading-spinner-color-danger);
			}

			&--dark {
				border-bottom-color: var(--bo-loading-spinner-color-dark);
			}

			&--light {
				border-bottom-color: var(--bo-loading-spinner-color-light);
			}
		}
	}

	@keyframes bo-loading-spinner-rotation {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
