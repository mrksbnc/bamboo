<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:class="[containerClass, customContainerCssClass]"
		:aria-live="ariaLive"
		:aria-label="ariaLabel"
		:aria-busy="ariaBusy"
	>
		<span :class="[spinnerClass, customRingClass]" :style="spinnerStyle"></span>
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
	import BoText from '@/components/bo-text/bo-text.vue'
	import type { ConditionalCssProperties } from '@/core/css.js'
	import { IdentityService } from '@/services/identity-service.js'
	import { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/index.js'
	import { BoSize } from '@/shared/size.js'
	import { computed } from 'vue'
	import { BoFontSize, BoTextVariant } from '../bo-text/bo-text.js'
	import { type BoLoaderRingProps } from './bo-loading-ring.js'

	const props = withDefaults(defineProps<BoLoaderRingProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-loader-ring'),
		size: BoSize.default,
		variant: BoLoaderVariant.primary,
		textPosition: BoLoaderTextPosition.after,
	})

	const boFontSize = computed<BoFontSize>(() => {
		switch (props.size) {
			case BoSize.extra_small:
				return BoFontSize.xs
			case BoSize.small:
				return BoFontSize.sm
			case BoSize.large:
				return BoFontSize.xl
			case BoSize.extra_large:
				return BoFontSize['2xl']
			case BoSize.default:
			default:
				return BoFontSize.lg
		}
	})

	const containerClass = computed<ConditionalCssProperties>(() => {
		return {
			'bo-loader-ring': true,
			[`bo-loader-ring__${props.textPosition}`]: true,
		}
	})

	const spinnerClass = computed<ConditionalCssProperties>(() => {
		return {
			'bo-loader-ring__spinner': true,
			[`bo-loader-ring__spinner__${props.size}`]: true,
			[`bo-loader-ring__spinner__${props.variant}`]: true,
		}
	})

	const spinnerStyle = computed(() => {
		if (props.customColor) {
			return { color: props.customColor }
		}
		return {}
	})
</script>

<style scoped lang="scss">
	.bo-loader-ring {
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
			display: inline-block;
			position: relative;
			transform: rotateZ(45deg);
			perspective: 1000px;
			border-radius: 50%;
			color: currentColor;

			&__extra-small {
				width: 0.625rem;
				height: 0.625rem;

				&::before,
				&::after {
					width: 0.625rem;
					height: 0.625rem;
				}
			}

			&__small {
				width: 0.75rem;
				height: 0.75rem;

				&::before,
				&::after {
					width: 0.75rem;
					height: 0.75rem;
				}
			}

			&__default {
				width: 1rem;
				height: 1rem;

				&::before,
				&::after {
					width: 1rem;
					height: 1rem;
				}
			}

			&__large {
				width: 1.125rem;
				height: 1.125rem;

				&::before,
				&::after {
					width: 1.125rem;
					height: 1.125rem;
				}
			}

			&__extra-large {
				width: 1.25rem;
				height: 1.25rem;

				&::before,
				&::after {
					width: 1.25rem;
					height: 1.25rem;
				}
			}

			&::before,
			&::after {
				content: '';
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: inherit;
				height: inherit;
				border-radius: 50%;
				transform: rotateX(70deg);
				animation: spin 1s linear infinite;
				box-sizing: border-box;
			}

			&::after {
				transform: rotateY(70deg);
				animation-delay: 0.4s;
			}

			&__primary {
				color: var(--blue-600);
			}

			&__secondary {
				color: var(--gray-400);
			}

			&__success {
				color: var(--green-600);
			}

			&__warning {
				color: var(--yellow-600);
			}

			&__danger {
				color: var(--red-600);
			}

			&__dark {
				color: var(--gray-800);
			}

			&__light {
				color: var(--neutral-50);
			}
		}
	}

	@keyframes spin {
		0%,
		100% {
			box-shadow: 0.2em 0 0 0 currentcolor;
		}
		12% {
			box-shadow: 0.2em 0.2em 0 0 currentcolor;
		}
		25% {
			box-shadow: 0 0.2em 0 0 currentcolor;
		}
		37% {
			box-shadow: -0.2em 0.2em 0 0 currentcolor;
		}
		50% {
			box-shadow: -0.2em 0 0 0 currentcolor;
		}
		62% {
			box-shadow: -0.2em -0.2em 0 0 currentcolor;
		}
		75% {
			box-shadow: 0 -0.2em 0 0 currentcolor;
		}
		87% {
			box-shadow: 0.2em -0.2em 0 0 currentcolor;
		}
	}
</style>
