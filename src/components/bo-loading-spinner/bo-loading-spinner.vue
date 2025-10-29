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
			[`bo-loader__${props.textPosition}`]: true,
		};
	});

	const spinnerClass = computed<ConditionalCssProperties>(() => {
		return {
			'bo-loader__spinner': true,
			[`bo-loader__spinner__${props.size}`]: true,
			[`bo-loader__spinner__${props.variant}`]: true,
		};
	});

	const spinnerStyle = computed<StyleValue>(() => {
		if (props.customColor) {
			return {
				'border-color': props.customColor,
				'border-bottom-color': 'transparent',
			};
		}

		return {};
	});
</script>

<style scoped lang="scss">
	.bo-loader {
		gap: 0.75rem;
		display: flex;
		align-items: center;
		max-width: fit-content;
		justify-content: center;

		&__top {
			flex-direction: column;
		}

		&__bottom {
			flex-direction: column-reverse;
		}

		&__before {
			flex-direction: row-reverse;
		}

		&__after {
			flex-direction: row;
		}

		&__spinner {
			border-radius: 50%;
			display: inline-block;
			box-sizing: border-box;
			border: 0.15rem solid;
			animation: rotation 1s linear infinite;

			&__extra-small {
				width: 0.625rem;
				height: 0.625rem;
			}

			&__small {
				width: 0.75rem;
				height: 0.75rem;
			}

			&__default {
				width: 1rem;
				height: 1rem;
			}

			&__large {
				width: 1.125rem;
				height: 1.125rem;
			}

			&__extra-large {
				width: 1.25rem;
				height: 1.25rem;
			}

			&__primary {
				border-color: var(--blue-600);
				border-bottom-color: transparent;
			}

			&__secondary {
				border-color: var(--gray-400);
				border-bottom-color: transparent;
			}

			&__success {
				border-color: var(--green-600);
				border-bottom-color: transparent;
			}

			&__warning {
				border-color: var(--yellow-600);
				border-bottom-color: transparent;
			}

			&__danger {
				border-color: var(--red-600);
				border-bottom-color: transparent;
			}

			&__dark {
				border-color: var(--gray-800);
				border-bottom-color: var(--neutral-100);
			}

			&__light {
				border-color: var(--neutral-50);
				border-bottom-color: var(--gray-800);
			}
		}
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
