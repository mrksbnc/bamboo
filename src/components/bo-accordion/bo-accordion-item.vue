<template>
	<div :class="computedContainerClasses">
		<button
			:id="accordionTriggerButtonId"
			type="button"
			class="bo-accordion-item__header"
			:disabled="disabled"
			:aria-expanded="isOpen"
			:aria-controls="accordionAriaControls"
			@click="onToggle"
		>
			<bo-icon v-if="icon" :icon="icon" :size="16" class="bo-accordion-item__leading-icon" />
			<bo-text
				:value="title"
				:font-size="BoFontSize.sm"
				:variant="BoTextVariant.inherit"
				:font-weight="BoFontWeight.medium"
				custom-css-class="bo-accordion-item__title"
			/>

			<bo-icon :icon="Icon.chevron_down" :size="16" :custom-css-class="chevronClasses" />
		</button>
		<div
			:id="contentId"
			:class="accordionContentClasses"
			role="region"
			:aria-labelledby="contentAriaLabelledBy"
			:aria-hidden="!isOpen"
		>
			<div class="bo-accordion-item__body">
				<slot />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { Icon } from '@/components/bo-icon';
	import BoIcon from '@/components/bo-icon/bo-icon.vue';
	import { BoFontSize, BoFontWeight, BoText, BoTextVariant } from '@/components/bo-text';
	import { type ConditionalCssProperties } from '@/shared/css';
	import { computed, inject, ref } from 'vue';
	import type { BoAccordionContext, BoAccordionItemProps } from './bo-accordion';

	const props = defineProps<BoAccordionItemProps>();

	const accordion = inject<BoAccordionContext>('accordion', {
		id: '',
		multiple: false,
		openItems: ref<string[]>([]),
		onToggleItem: () => {},
	});

	const isOpen = computed<boolean>(() => accordion.openItems.value.includes(props.value));

	const accordionTriggerButtonId = computed<string>(() => `${accordion.id}-header-${props.value}`);

	const accordionAriaControls = computed<string>(() => `${accordion.id}-content-${props.value}`);

	const contentId = computed<string>(() => `${accordion.id}-content-${props.value}`);

	const contentAriaLabelledBy = computed<string>(() => `${accordion.id}-header-${props.value}`);

	const computedContainerClasses = computed<ConditionalCssProperties>(() => ({
		'bo-accordion-item': true,
		'bo-accordion-item--open': isOpen.value,
	}));

	const accordionContentClasses = computed<ConditionalCssProperties>(() => ({
		'bo-accordion-item__content': true,
		'bo-accordion-item__content--open': isOpen.value,
	}));

	const chevronClasses = computed<string>(() => {
		return isOpen.value
			? 'bo-accordion-item__chevron bo-accordion-item__chevron--open'
			: 'bo-accordion-item__chevron';
	});

	function onToggle(): void {
		if (!props.disabled) {
			accordion.onToggleItem(props.value);
		}
	}
</script>

<style scoped lang="scss">
	.bo-accordion-item {
		overflow: hidden;
		padding: 0.5rem;
		border-radius: 0.5rem;
		background-color: var(--accordion-item-bg);
		border: 1px solid var(--accordion-item-border);

		&:last-child {
			margin-bottom: 0;
		}

		&__header {
			width: 100%;
			border: none;
			display: flex;
			cursor: pointer;
			align-items: center;
			background: transparent;
			gap: 0.5rem;
			text-align: left;
			color: var(--accordion-header-text);
			padding: 0.75rem;
			transition:
				background-color var(--transition-duration-normal) var(--transition-timing-ease),
				color var(--transition-duration-normal) var(--transition-timing-ease);

			&:hover:not(:disabled) {
				background-color: var(--accordion-item-bg-hover);
			}

			&:disabled {
				opacity: 0.5;
				cursor: not-allowed;
			}

			&:focus-visible {
				outline: 2px solid var(--focus-ring-color);
				outline-offset: -2px;
				background-color: var(--accordion-item-bg-focus);
			}
		}

		&__leading-icon {
			color: var(--accordion-icon-color);
			flex-shrink: 0;
		}

		&__title {
			flex: 1;
			color: inherit;
		}

		&__chevron {
			flex-shrink: 0;
			color: var(--accordion-icon-color);
			transition: transform var(--transition-duration-normal) var(--transition-timing-ease);

			&--open {
				transform: rotate(180deg);
			}
		}

		&__content {
			max-height: 0;
			overflow: hidden;
			transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);

			&--open {
				max-height: 1000px;
			}
		}

		&__body {
			color: var(--accordion-body-text);
			padding: 0 0.75rem 0.75rem;
		}
	}
</style>
