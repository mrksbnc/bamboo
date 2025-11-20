<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:class="[containerClass, customContainerCssClass]"
		:aria-live="ariaLive"
		:aria-label="ariaLabel"
		:aria-busy="ariaBusy"
	>
		<span :class="[ringClass, customRingClass]" :style="ringStyle"></span>
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
	import { BoLoaderTextPosition } from '@/shared/loader.js';
	import { BoSize } from '@/shared/size.js';
	import { BoVariant } from '@/shared/variant.js';
	import { computed, type StyleValue } from 'vue';
	import { type BoLoaderRingProps } from './bo-loading-ring.js';

	const props = withDefaults(defineProps<BoLoaderRingProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-loader-ring'),
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
			'bo-loader-ring': true,
			[`bo-loader-ring--${props.textPosition}`]: true,
		};
	});

	const ringClass = computed<ConditionalCssProperties>(() => {
		return {
			'bo-loader-ring__spinner': true,
			[`bo-loader-ring__spinner--${props.size}`]: true,
			[`bo-loader-ring__spinner--${props.variant}`]: true,
		};
	});

	const ringStyle = computed<StyleValue>(() => {
		if (props.customColor) {
			return {
				color: props.customColor,
			};
		}

		return {};
	});
</script>

<style scoped lang="scss">
	.bo-loader-ring {
		gap: 0.75rem;
		display: flex;
		align-items: center;
		max-width: fit-content;
		justify-content: center;

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
			display: inline-block;
			position: relative;
			transform: rotateZ(45deg);
			perspective: 1000px;
			border-radius: 50%;
			color: currentcolor;

			&--xs {
				width: 1rem;
				height: 1rem;

				&::before,
				&::after {
					width: 1rem;
					height: 1rem;
				}
			}

			&--sm {
				width: 1.5rem;
				height: 1.5rem;

				&::before,
				&::after {
					width: 1.5rem;
					height: 1.5rem;
				}
			}

			&--md {
				width: 2rem;
				height: 2rem;

				&::before,
				&::after {
					width: 2rem;
					height: 2rem;
				}
			}

			&--lg {
				width: 2.5rem;
				height: 2.5rem;

				&::before,
				&::after {
					width: 2.5rem;
					height: 2.5rem;
				}
			}

			&--xl {
				width: 3rem;
				height: 3rem;

				&::before,
				&::after {
					width: 3rem;
					height: 3rem;
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

			&--primary {
				color: var(--loading-ring-primary);
			}

			&--secondary {
				color: var(--loading-ring-secondary);
			}

			&--success {
				color: var(--loading-ring-success);
			}

			&--warning {
				color: var(--loading-ring-warning);
			}

			&--danger {
				color: var(--loading-ring-danger);
			}

			&--dark {
				color: var(--loading-ring-dark);
			}

			&--light {
				color: var(--loading-ring-light);
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
