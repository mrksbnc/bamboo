<template>
	<Teleport to="body">
		<div v-if="modelValue" class="bo-side-panel__overlay" @click="handleClose">
			<aside
				:id="id"
				:class="componentBaseClasses"
				:style="computedStyle"
				:data-testid="dataTestId"
				@click.stop
			>
				<div class="bo-side-panel__header">
					<bo-text
						v-if="title"
						:value="title"
						:font-size="BoFontSize.lg"
						:font-weight="BoFontWeight.semibold"
						:variant="BoTextVariant.inherit"
						custom-css-class="bo-side-panel__title"
					/>
					<button
						type="button"
						class="bo-side-panel__close"
						aria-label="Close"
						@click="handleClose"
					>
						<bo-icon :icon="closeIcon" :size="20" />
					</button>
				</div>
				<div class="bo-side-panel__body">
					<slot />
				</div>
			</aside>
		</div>
	</Teleport>
</template>

<script lang="ts" setup>
	import { Icon } from '@/components/bo-icon';
	import BoIcon from '@/components/bo-icon/bo-icon.vue';
	import { BoFontSize, BoFontWeight, BoText, BoTextVariant } from '@/components/bo-text';
	import { IdentityService } from '@/services/identity-service';
	import type { ConditionalCssProperties } from '@/shared/css';
	import { computed, type CSSProperties } from 'vue';
	import { BoSidePanelShape, type BoSidePanelProps } from './bo-side-panel';

	const props = withDefaults(defineProps<BoSidePanelProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-side-panel'),
		position: 'right',
		width: '24rem',
		shape: BoSidePanelShape.Square,
	});

	const emit = defineEmits<{
		'update:modelValue': [value: boolean];
	}>();

	const closeIcon = Icon.x;

	const componentBaseClasses = computed<ConditionalCssProperties>(() => {
		return {
			'bo-side-panel': true,
			[`bo-side-panel--${props.position}`]: true,
			[`bo-side-panel--${props.shape}`]: true,
			[props.customCssClass || '']: !!props.customCssClass,
		};
	});

	const computedStyle = computed<CSSProperties>(() => {
		return {
			width: typeof props.width === 'number' ? `${props.width}px` : props.width,
		};
	});

	function handleClose(): void {
		emit('update:modelValue', false);
	}
</script>

<style scoped lang="scss">
	.bo-side-panel__overlay {
		position: fixed;
		inset: 0;
		background-color: var(--side-panel-backdrop);
		z-index: var(--z-modal-backdrop);
		animation: fadeIn 0.2s ease-in-out;
	}

	.bo-side-panel {
		position: fixed;
		top: 0;
		bottom: 0;
		background-color: var(--side-panel-bg);
		box-shadow: var(--side-panel-shadow);
		display: flex;
		flex-direction: column;
		animation: slideIn 0.3s ease-in-out;

		&--left {
			left: 0;
			animation-name: slideInLeft;
		}

		&--right {
			right: 0;
			animation-name: slideInRight;
		}

		&--rounded {
			top: 1rem;
			bottom: 1rem;
			border-radius: 1rem;

			&.bo-side-panel--left {
				left: 1rem;
			}

			&.bo-side-panel--right {
				right: 1rem;
			}
		}

		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 1.5rem;
			border-bottom: 1px solid var(--side-panel-border);
		}

		&__title {
			margin: 0;
			color: var(--side-panel-header-text);
		}

		&__close {
			background: none;
			border: none;
			cursor: pointer;
			color: var(--side-panel-close-icon);
			padding: 0.25rem;
			border-radius: 0.25rem;
			transition: var(--transition-base);

			&:hover {
				color: var(--side-panel-close-icon-hover);
				background-color: var(--side-panel-close-bg-hover);
			}
		}

		&__body {
			flex: 1;
			padding: 1.5rem;
			overflow-y: auto;
			color: var(--side-panel-body-text);
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	@keyframes slideInRight {
		from {
			transform: translateX(100%);
		}

		to {
			transform: translateX(0);
		}
	}

	@keyframes slideInLeft {
		from {
			transform: translateX(-100%);
		}

		to {
			transform: translateX(0);
		}
	}
</style>
