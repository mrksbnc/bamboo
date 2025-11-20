<template>
	<div
		:id="id"
		:class="[componentBaseClasses, customCssClass]"
		:style="progressStyle"
		:role="role || 'progressbar'"
		:aria-valuenow="value"
		:aria-valuemin="0"
		:aria-valuemax="100"
		:aria-label="computedAriaLabel"
		:data-testid="dataTestId"
	>
		<div class="bo-radial-progress__text">
			<slot>
				<bo-text
					v-if="showValue || customText"
					:value="displayText"
					:font-size="textSize"
					:font-weight="BoFontWeight.semibold"
					:variant="BoTextVariant.inherit"
				/>
			</slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { BoFontSize, BoFontWeight, BoText, BoTextVariant } from '@/components/bo-text';
	import { ColorService } from '@/services';
	import { IdentityService } from '@/services/identity-service';
	import { BoSize } from '@/shared/size';
	import { BoVariant } from '@/shared/variant';
	import { computed, type CSSProperties, type StyleValue } from 'vue';
	import type { BoRadialProgressProps } from './bo-radial-progress';

	const props = withDefaults(defineProps<BoRadialProgressProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-radial-progress'),
		size: BoSize.md,
		variant: BoVariant.primary,
		thickness: 4,
		showValue: true,
	});

	const computedAriaLabel = computed<string>(() => {
		if (props.ariaLabel) {
			return props.ariaLabel;
		}
		return `Progress: ${props.value}%`;
	});

	const displayText = computed<string>(() => {
		if (props.customText) {
			return props.customText;
		}
		return `${Math.round(props.value)}%`;
	});

	const textSize = computed<BoFontSize>(() => {
		switch (props.size) {
			case BoSize.xs:
				return BoFontSize.xs;
			case BoSize.sm:
				return BoFontSize.sm;
			case BoSize.lg:
				return BoFontSize.lg;
			case BoSize.xl:
				return BoFontSize.xl;
			case BoSize.md:
			default:
				return BoFontSize.default;
		}
	});

	const progressColor = computed<CSSProperties>(() => {
		if (props.customColor) {
			const colorStyle = ColorService.instance.getValidCssColor(props.customColor);
			return {
				'--progress-color': colorStyle,
			};
		}
		return {};
	});

	const progressStyle = computed<StyleValue>(() => {
		const clampedValue = Math.max(0, Math.min(100, props.value));
		return {
			'--value': clampedValue,
			'--thickness': `${props.thickness}px`,
			...progressColor.value,
		};
	});

	const componentBaseClasses = computed<string>(() => {
		return [
			'bo-radial-progress',
			`bo-radial-progress--size-${props.size}`,
			`bo-radial-progress--variant-${props.variant}`,
		]
			.filter(Boolean)
			.join(' ');
	});
</script>

<style scoped lang="scss">
	.bo-radial-progress {
		position: relative;
		display: inline-grid;
		place-content: center;
		border-radius: 50%;
		background:
			radial-gradient(closest-side, var(--radial-progress-bg) 79%, transparent 80% 100%),
			conic-gradient(
				var(--progress-color, var(--radial-progress-bar-primary)) calc(var(--value) * 1%),
				var(--radial-progress-track) 0
			);

		&::before {
			content: '';
			position: absolute;
			border-radius: 50%;
			inset: 0;
			background: radial-gradient(
				farthest-side,
				var(--progress-color, var(--radial-progress-bar-primary)) 98%,
				transparent
			);
			mask: radial-gradient(
				farthest-side,
				transparent calc(99% - var(--thickness)),
				var(--radial-progress-bg) calc(100% - var(--thickness))
			);
			-webkit-mask: radial-gradient(
				farthest-side,
				transparent calc(99% - var(--thickness)),
				var(--radial-progress-bg) calc(100% - var(--thickness))
			);
		}

		&__text {
			color: var(--radial-progress-text);
			z-index: 1;
		}

		/* Size variants */
		&--size-xs {
			width: 3rem;
			height: 3rem;
		}

		&--size-sm {
			width: 4rem;
			height: 4rem;
		}

		&--size-md {
			width: 5rem;
			height: 5rem;
		}

		&--size-lg {
			width: 6rem;
			height: 6rem;
		}

		&--size-xl {
			width: 8rem;
			height: 8rem;
		}

		/* Variant colors */
		&--variant-primary {
			--progress-color: var(--radial-progress-bar-primary);
		}

		&--variant-secondary {
			--progress-color: var(--radial-progress-bar-secondary);
		}

		&--variant-success {
			--progress-color: var(--radial-progress-bar-success);
		}

		&--variant-warning {
			--progress-color: var(--radial-progress-bar-warning);
		}

		&--variant-danger {
			--progress-color: var(--radial-progress-bar-danger);
		}

		&--variant-light {
			--progress-color: var(--radial-progress-bar-light);
		}

		&--variant-dark {
			--progress-color: var(--radial-progress-bar-dark);
		}
	}
</style>
