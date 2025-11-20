<template>
	<div :id="id" :class="['bo-skeleton', customCssClass]" :data-testid="dataTestId">
		<div
			v-for="line in computedLines"
			:key="line"
			:class="componentBaseClasses"
			:style="computedStyle"
		>
			<div v-if="animation === 'wave'" class="bo-skeleton__item-wave"></div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { IdentityService } from '@/services/identity-service';
	import type { ConditionalCssProperties } from '@/shared/css';
	import { computed, type CSSProperties } from 'vue';
	import type { BoSkeletonProps } from './bo-skeleton';

	const props = withDefaults(defineProps<BoSkeletonProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-skeleton'),
		variant: 'text',
		lines: 1,
		animation: 'pulse',
	});

	const computedLines = computed(() => (props.variant === 'text' ? props.lines : 1));

	const componentBaseClasses = computed<ConditionalCssProperties>(() => {
		return {
			'bo-skeleton__item': true,
			[`bo-skeleton__item--${props.variant}`]: true,
			[`bo-skeleton__item--animation-${props.animation}`]: true,
		};
	});

	const computedStyle = computed<CSSProperties>(() => {
		const style: CSSProperties = {};

		if (props.width) {
			style.width = typeof props.width === 'number' ? `${props.width}px` : props.width;
		}

		if (props.height) {
			style.height = typeof props.height === 'number' ? `${props.height}px` : props.height;
		}

		return style;
	});
</script>

<style scoped lang="scss">
	/* Block */
	.bo-skeleton {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	/* Element: item */
	.bo-skeleton__item {
		position: relative;
		overflow: hidden;
		background-color: var(--skeleton-bg);
		border-radius: 0.25rem;

		/* Modifier: text variant */
		&--text {
			height: 1rem;
			width: 100%;
			border-radius: 0.25rem;

			&:not(:last-child) {
				margin-bottom: 0.5rem;
			}
		}

		/* Modifier: circular variant */
		&--circular {
			border-radius: 50%;
			width: 3rem;
			height: 3rem;
		}

		/* Modifier: avatar variant */
		&--avatar {
			border-radius: 50%;
			width: 3rem;
			height: 3rem;
		}

		/* Modifier: rectangular variant */
		&--rectangular {
			width: 100%;
			height: 8rem;
			border-radius: 0.25rem;
		}

		/* Modifier: button variant */
		&--button {
			width: 6rem;
			height: 2.5rem;
			border-radius: 0.25rem;
		}

		/* Modifier: pulse animation */
		&--animation-pulse {
			animation: bo-skeleton-pulse 1.5s ease-in-out infinite;
		}

		/* Modifier: wave animation */
		&--animation-wave {
			&::after {
				content: '';
				position: absolute;
				inset: 0;
				transform: translateX(-100%);
				background: linear-gradient(90deg, transparent, var(--skeleton-shimmer), transparent);
				animation: bo-skeleton-wave 1.5s ease-in-out infinite;
			}
		}

		/* Modifier: no animation */
		&--animation-none {
			animation: none;
		}
	}

	/* Element: wave animation overlay */
	.bo-skeleton__item-wave {
		position: absolute;
		inset: 0;
		transform: translateX(-100%);
		background: linear-gradient(90deg, transparent, var(--skeleton-shimmer), transparent);
		animation: bo-skeleton-wave 1.5s ease-in-out infinite;
	}

	/* Animations */
	@keyframes bo-skeleton-pulse {
		0%,
		100% {
			opacity: 1;
		}

		50% {
			opacity: 0.5;
		}
	}

	@keyframes bo-skeleton-wave {
		0% {
			transform: translateX(-100%);
		}

		100% {
			transform: translateX(100%);
		}
	}
</style>
