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
	import type { ConditionalCssProperties } from '@/core/css.js';
	import { BoLoaderTextPosition } from '@/core/loader.js';
	import { BoSize } from '@/core/size.js';
	import { BoVariant } from '@/core/variant.js';
	import { IdentityService } from '@/services/identity-service.js';
	import { computed, type StyleValue } from 'vue';
	import { type BoLoaderRingProps } from './bo-loading-ring.js';

	const props = withDefaults(defineProps<BoLoaderRingProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-loader-ring'),
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
			'bo-loader-ring': true,
			[`bo-loader-ring--${props.textPosition}`]: true,
		};
	});

	const ringClass = computed<ConditionalCssProperties>(() => {
		return {
			'bo-loader-ring__ring': true,
			[`bo-loader-ring__ring--${props.size}`]: true,
			[`bo-loader-ring__ring--${props.variant}`]: true,
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

		&__ring {
			display: inline-block;
			position: relative;
			transform: rotateZ(45deg);
			perspective: 1000px;
			border-radius: 50%;
			color: currentcolor;

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

			&--extra-small {
				width: var(--size-xs);
				height: var(--size-xs);

				&::before,
				&::after {
					width: var(--size-xs);
					height: var(--size-xs);
				}
			}

			&--small {
				width: var(--size-sm);
				height: var(--size-sm);

				&::before,
				&::after {
					width: var(--size-sm);
					height: var(--size-sm);
				}
			}

			&--default {
				width: var(--size-md);
				height: var(--size-md);

				&::before,
				&::after {
					width: var(--size-md);
					height: var(--size-md);
				}
			}

			&--large {
				width: var(--size-lg);
				height: var(--size-lg);

				&::before,
				&::after {
					width: var(--size-lg);
					height: var(--size-lg);
				}
			}

			&--extra-large {
				width: var(--size-xl);
				height: var(--size-xl);

				&::before,
				&::after {
					width: var(--size-xl);
					height: var(--size-xl);
				}
			}

			&--primary {
				color: var(--bo-loading-ring-color-primary);
			}

			&--secondary {
				color: var(--bo-loading-ring-color-secondary);
			}

			&--success {
				color: var(--bo-loading-ring-color-success);
			}

			&--warning {
				color: var(--bo-loading-ring-color-warning);
			}

			&--danger {
				color: var(--bo-loading-ring-color-danger);
			}

			&--dark {
				color: var(--bo-loading-ring-color-dark);
			}

			&--light {
				color: var(--bo-loading-ring-color-light);
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
