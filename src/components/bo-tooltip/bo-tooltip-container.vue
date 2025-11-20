<template>
	<Teleport to="body">
		<Transition name="bo-tooltip--fade">
			<div
				v-if="tooltipState.isVisible"
				class="bo-tooltip"
				:class="tooltipClasses"
				:style="tooltipStyle"
				role="tooltip"
				:aria-live="AriaLive.polite"
			>
				<component
					v-if="tooltipState.customComponent"
					:is="tooltipState.customComponent"
					v-bind="tooltipState.customProps"
				/>
				<bo-text
					v-else
					:value="tooltipState.content"
					:font-size="BoFontSize.sm"
					:variant="BoTextVariant.current"
					custom-css-class="bo-tooltip__text"
				/>
				<div class="bo-tooltip__arrow" :class="`bo-tooltip__arrow--${tooltipState.placement}`" />
			</div>
		</Transition>
	</Teleport>
</template>

<script lang="ts" setup>
	import { BoFontSize, BoTextVariant } from '@/components/bo-text/bo-text';
	import BoText from '@/components/bo-text/bo-text.vue';
	import { TooltipService, type TooltipState } from '@/services/tooltip-service';
	import { AriaLive } from '@/shared/accessibility';
	import { computed, onMounted, onUnmounted, ref, type StyleValue } from 'vue';

	const tooltipService = TooltipService.instance;
	const tooltipState = ref<TooltipState>(tooltipService.getState());

	const tooltipClasses = computed(() => ({
		[`bo-tooltip--${tooltipState.value.placement}`]: true,
	}));

	const tooltipStyle = computed<StyleValue>(() => {
		const placement = tooltipState.value.placement;
		const transform =
			placement === 'top' || placement === 'bottom'
				? 'translateX(-50%)'
				: placement === 'left' || placement === 'right'
					? 'translateY(-50%)'
					: 'none';

		return {
			top: `${tooltipState.value.position.top}px`,
			left: `${tooltipState.value.position.left}px`,
			transform,
		};
	});

	let unsubscribe: (() => void) | null = null;

	onMounted(() => {
		unsubscribe = tooltipService.subscribe((state) => {
			tooltipState.value = state;
		});
	});

	onUnmounted(() => {
		if (unsubscribe) {
			unsubscribe();
		}
	});
</script>

<style scoped lang="scss">
	.bo-tooltip {
		position: fixed;
		z-index: var(--z-tooltip);
		max-width: 300px;
		padding: 0.5rem 0.75rem;
		background-color: var(--tooltip-bg);
		color: var(--tooltip-text);
		border-radius: 0.375rem;
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 10%),
			0 2px 4px -2px rgb(0 0 0 / 10%);
		pointer-events: none;
		overflow-wrap: break-word;
		white-space: normal;

		&__text {
			color: inherit;
		}

		&__arrow {
			position: absolute;
			width: 0;
			height: 0;
			border-style: solid;

			&--top {
				bottom: -4px;
				left: 50%;
				transform: translateX(-50%);
				border-width: 4px 4px 0;
				border-color: var(--tooltip-arrow) transparent transparent transparent;
			}

			&--bottom {
				top: -4px;
				left: 50%;
				transform: translateX(-50%);
				border-width: 0 4px 4px;
				border-color: transparent transparent var(--tooltip-arrow) transparent;
			}

			&--left {
				right: -4px;
				top: 50%;
				transform: translateY(-50%);
				border-width: 4px 0 4px 4px;
				border-color: transparent transparent transparent var(--tooltip-arrow);
			}

			&--right {
				left: -4px;
				top: 50%;
				transform: translateY(-50%);
				border-width: 4px 4px 4px 0;
				border-color: transparent var(--tooltip-arrow) transparent transparent;
			}
		}
	}

	/* Transition animations */
	.bo-tooltip--fade-enter-active,
	.bo-tooltip--fade-leave-active {
		transition:
			opacity 0.15s ease-in-out,
			transform 0.15s ease-in-out;
	}

	.bo-tooltip--fade-enter-from,
	.bo-tooltip--fade-leave-to {
		opacity: 0;
	}

	.bo-tooltip--top.bo-tooltip--fade-enter-from,
	.bo-tooltip--top.bo-tooltip--fade-leave-to {
		transform: translateY(0.25rem);
	}

	.bo-tooltip--bottom.bo-tooltip--fade-enter-from,
	.bo-tooltip--bottom.bo-tooltip--fade-leave-to {
		transform: translateY(-0.25rem);
	}

	.bo-tooltip--left.bo-tooltip--fade-enter-from,
	.bo-tooltip--left.bo-tooltip--fade-leave-to {
		transform: translateX(0.25rem);
	}

	.bo-tooltip--right.bo-tooltip--fade-enter-from,
	.bo-tooltip--right.bo-tooltip--fade-leave-to {
		transform: translateX(-0.25rem);
	}
</style>
