<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:class="[containerClass, customContainerCssClass]"
		:aria-live="ariaLive"
		:aria-label="ariaLabel"
		:aria-busy="ariaBusy"
	>
		<span :class="[dotsClass, customDotsCssClass]" :style="dotsStyle"></span>
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
	import { type BoLoadingDotsProps } from './bo-loading-dots.js';

	const props = withDefaults(defineProps<BoLoadingDotsProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-loading-dots'),
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

	const dotsClass = computed<ConditionalCssProperties>(() => {
		return {
			'bo-loader__dots': true,
			[`bo-loader__dots--${props.size}`]: true,
			[`bo-loader__dots--${props.variant}`]: true,
		};
	});

	const dotsStyle = computed<StyleValue>(() => {
		if (props.customColor) {
			return {
				'--custom-dot-color': props.customColor,
				background: props.customColor,
			};
		}

		return {};
	});
</script>

<style scoped lang="scss">
	.bo-loader {
		gap: 2.5rem;
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

		&__dots {
			display: inline-block;
			border-radius: 50%;
			animation: bo-loader-dots 1s infinite linear alternate;

			&--xs {
				width: 0.375rem;
				height: 0.375rem;
			}

			&--sm {
				width: 0.5rem;
				height: 0.5rem;
			}

			&--md {
				width: 0.625rem;
				height: 0.625rem;
			}

			&--lg {
				width: 0.75rem;
				height: 0.75rem;
			}

			&--xl {
				width: 1rem;
				height: 1rem;
			}

			&--primary {
				background: var(--loading-dots-primary);
				box-shadow:
					1.25em 0 var(--loading-dots-primary),
					-1.25em 0 var(--loading-dots-primary-shadow);
			}

			&--secondary {
				background: var(--loading-dots-secondary);
				box-shadow:
					1.25em 0 var(--loading-dots-secondary),
					-1.25em 0 var(--loading-dots-secondary-shadow);
			}

			&--success {
				background: var(--loading-dots-success);
				box-shadow:
					1.25em 0 var(--loading-dots-success),
					-1.25em 0 var(--loading-dots-success-shadow);
			}

			&--warning {
				background: var(--loading-dots-warning);
				box-shadow:
					1.25em 0 var(--loading-dots-warning),
					-1.25em 0 var(--loading-dots-warning-shadow);
			}

			&--danger {
				background: var(--loading-dots-danger);
				box-shadow:
					1.25em 0 var(--loading-dots-danger),
					-1.25em 0 var(--loading-dots-danger-shadow);
			}

			&--dark {
				background: var(--loading-dots-dark);
				box-shadow:
					1.25em 0 var(--loading-dots-dark),
					-1.25em 0 var(--loading-dots-dark-shadow);
			}

			&--light {
				background: var(--loading-dots-light);
				box-shadow:
					1.25em 0 var(--loading-dots-light),
					-1.25em 0 var(--loading-dots-light-shadow);
			}
		}
	}

	@keyframes bo-loader-dots {
		0% {
			box-shadow:
				1.25em 0 var(--custom-dot-color, currentColor),
				-1.25em 0 var(--loading-dots-primary-shadow, rgb(0 0 0 / 13%));
			background: var(--custom-dot-color, currentColor);
		}

		33% {
			box-shadow:
				1.25em 0 var(--custom-dot-color, currentColor),
				-1.25em 0 var(--loading-dots-primary-shadow, rgb(0 0 0 / 13%));
			background: var(--loading-dots-primary-shadow, rgb(0 0 0 / 13%));
		}

		66% {
			box-shadow:
				1.25em 0 var(--loading-dots-primary-shadow, rgb(0 0 0 / 13%)),
				-1.25em 0 var(--custom-dot-color, currentColor);
			background: var(--loading-dots-primary-shadow, rgb(0 0 0 / 13%));
		}

		100% {
			box-shadow:
				1.25em 0 var(--loading-dots-primary-shadow, rgb(0 0 0 / 13%)),
				-1.25em 0 var(--custom-dot-color, currentColor);
			background: var(--custom-dot-color, currentColor);
		}
	}
</style>
