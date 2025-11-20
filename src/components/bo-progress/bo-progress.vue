<template>
	<div :id="id" :class="['bo-progress', customCssClass]" :data-testid="dataTestId">
		<div v-if="label || showValue" class="bo-progress__header">
			<bo-text
				v-if="label"
				:value="label"
				:font-size="BoFontSize.sm"
				:font-weight="BoFontWeight.medium"
				custom-css-class="bo-progress__label"
			/>
			<bo-text
				v-if="showValue"
				:value="displayValue"
				:font-size="BoFontSize.xs"
				:font-weight="BoFontWeight.semibold"
				custom-css-class="bo-progress__value"
			/>
		</div>
		<div
			:class="[
				'bo-progress__track',
				`bo-progress__track--size-${size}`,
				`bo-progress__track--variant-${variant}`,
			]"
		>
			<div
				v-if="!indeterminate"
				:class="['bo-progress__bar', `bo-progress__bar--variant-${variant}`]"
				:style="{ width: `${progressPercentage}%` }"
				role="progressbar"
				:aria-valuenow="value"
				:aria-valuemin="0"
				:aria-valuemax="max"
				:aria-label="ariaLabel || label"
			>
				<bo-text
					v-if="showValueInside"
					:value="displayValue"
					:font-size="BoFontSize.xs"
					:font-weight="BoFontWeight.semibold"
					custom-css-class="bo-progress__value-inside"
				/>
			</div>
			<div
				v-else
				:class="[
					'bo-progress__bar',
					'bo-progress__bar--indeterminate',
					`bo-progress__bar--variant-${variant}`,
				]"
				role="progressbar"
				:aria-label="ariaLabel || label || 'Loading'"
				aria-valuemin="0"
				aria-valuemax="100"
			></div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { BoFontSize, BoFontWeight } from '@/components/bo-text/bo-text';
	import BoText from '@/components/bo-text/bo-text.vue';
	import { IdentityService } from '@/services/identity-service';
	import { BoSize } from '@/shared/size';
	import { BoVariant } from '@/shared/variant';
	import { computed } from 'vue';
	import type { BoProgressProps } from './bo-progress';

	const props = withDefaults(defineProps<BoProgressProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-progress'),
		value: 0,
		max: 100,
		size: BoSize.md,
		variant: BoVariant.primary,
		indeterminate: false,
	});

	const progressPercentage = computed(() => {
		const percentage = (props.value / props.max) * 100;
		return Math.min(Math.max(percentage, 0), 100);
	});

	const displayValue = computed(() => {
		if (props.max === 100) {
			return `${Math.round(progressPercentage.value)}%`;
		}
		return `${props.value}/${props.max}`;
	});
</script>

<style scoped lang="scss">
	.bo-progress {
		width: 100%;

		&__header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 0.5rem;
		}

		&__label {
			color: var(--progress-label);
		}

		&__value {
			color: var(--progress-value);
		}

		&__track {
			width: 100%;
			background-color: var(--progress-track-bg);
			border-radius: 0.5rem;
			overflow: hidden;
			position: relative;

			&--size-xs {
				height: 0.25rem;
			}

			&--size-sm {
				height: 0.5rem;
			}

			&--size-md {
				height: 0.75rem;
			}

			&--size-lg {
				height: 1rem;
			}

			&--size-xl {
				height: 1.25rem;
			}
		}

		&__bar {
			height: 100%;
			transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
			display: flex;
			align-items: center;
			justify-content: flex-end;
			padding-right: 0.5rem;
			border-radius: 0.5rem;

			&--variant-primary {
				background-color: var(--progress-bar-primary);
			}

			&--variant-secondary {
				background-color: var(--progress-bar-secondary);
			}

			&--variant-success {
				background-color: var(--progress-bar-success);
			}

			&--variant-warning {
				background-color: var(--progress-bar-warning);
			}

			&--variant-danger {
				background-color: var(--progress-bar-danger);
			}

			&--variant-light {
				background-color: var(--progress-bar-light);
			}

			&--variant-dark {
				background-color: var(--progress-bar-dark);
			}

			&--indeterminate {
				width: 30%;
				animation: progress-indeterminate 1.5s ease-in-out infinite;
			}
		}

		&__value-inside {
			color: var(--progress-value-inside);
			white-space: nowrap;
		}
	}

	@keyframes progress-indeterminate {
		0% {
			transform: translateX(-100%);
		}

		50% {
			transform: translateX(350%);
		}

		100% {
			transform: translateX(-100%);
		}
	}
</style>
