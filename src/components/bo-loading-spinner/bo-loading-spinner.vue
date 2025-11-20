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
	import { IdentityService } from '@/services/identity-service.js';
	import type { ConditionalCssProperties } from '@/shared/css.js';
	import { BoLoaderTextPosition } from '@/shared/index.js';
	import { BoSize } from '@/shared/size.js';
	import { BoVariant } from '@/shared/variant.js';
	import { computed, type StyleValue } from 'vue';
	import { type BoLoadingSpinnerProps } from './bo-loading-spinner.js';

	const props = withDefaults(defineProps<BoLoadingSpinnerProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-loading-spinner'),
		size: BoSize.md,
		variant: BoVariant.primary,
		textPosition: BoLoaderTextPosition.after,
	});

	const boFontSize = computed<BoFontSize>(() => {
		switch (props.size) {
			case BoSize.xs:
				return BoFontSize.xs;
			case BoSize.sm:
				return BoFontSize.sm;
			case BoSize.lg:
				return BoFontSize.xl;
			case BoSize.xl:
				return BoFontSize['2xl'];
			case BoSize.md:
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

			&--xs {
				width: 1rem;
				height: 1rem;
			}

			&--sm {
				width: 1.5rem;
				height: 1.5rem;
			}

			&--md {
				width: 2rem;
				height: 2rem;
			}

			&--lg {
				width: 2.5rem;
				height: 2.5rem;
			}

			&--xl {
				width: 3rem;
				height: 3rem;
			}

			&--primary {
				border-bottom-color: var(--loading-spinner-primary);
			}

			&--secondary {
				border-bottom-color: var(--loading-spinner-secondary);
			}

			&--success {
				border-bottom-color: var(--loading-spinner-success);
			}

			&--warning {
				border-bottom-color: var(--loading-spinner-warning);
			}

			&--danger {
				border-bottom-color: var(--loading-spinner-danger);
			}

			&--dark {
				border-bottom-color: var(--loading-spinner-dark);
			}

			&--light {
				border-bottom-color: var(--loading-spinner-light);
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
