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
			'bo-loader': true,
			[`bo-loader--${props.textPosition}`]: true,
		};
	});

	const spinnerClass = computed<ConditionalCssProperties>(() => {
		return {
			'bo-loader__spinner': true,
			[`bo-loader__spinner--${props.size}`]: true,
			[`bo-loader__spinner--${props.variant}`]: true,
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
	.bo-loader {
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
			animation: bo-loader-rotation 1s linear infinite;

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
				border-bottom-color: var(--blue-600);
			}

			&--secondary {
				border-bottom-color: var(--gray-400);
			}

			&--success {
				border-bottom-color: var(--green-600);
			}

			&--warning {
				border-bottom-color: var(--yellow-600);
			}

			&--danger {
				border-bottom-color: var(--red-600);
			}

			&--dark {
				border-bottom-color: var(--neutral-900);
			}

			&--light {
				border-bottom-color: var(--gray-100);
			}
		}
	}

	@keyframes bo-loader-rotation {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
