<template>
	<div :id="id" :class="[customCssClasses, customCssClass]" :data-testid="dataTestId">
		<slot />
	</div>
</template>

<script lang="ts" setup>
	import { IdentityService } from '@/services/identity-service';
	import { type ConditionalCssProperties } from '@/shared/css';
	import { computed, provide } from 'vue';
	import { BoAccordionShape, type BoAccordionContext, type BoAccordionProps } from './bo-accordion';

	const props = withDefaults(defineProps<BoAccordionProps>(), {
		id: () => IdentityService.instance.getComponentId(),
		dataTestId: () => IdentityService.instance.getDataTestId('bo-accordion'),
		shape: BoAccordionShape.rounded,
	});

	const emit = defineEmits<{
		'update:modelValue': [value: string | string[]];
	}>();

	const openItems = computed<string[]>(() => {
		if (Array.isArray(props.modelValue)) {
			return props.modelValue;
		}

		return props.modelValue ? [props.modelValue] : [];
	});

	const customCssClasses = computed<ConditionalCssProperties>(() => {
		return {
			'bo-accordion': true,
			[`bo-accordion--${props.shape}`]: true,
		};
	});

	function onToggleItem(value: string) {
		if (props.multiple) {
			const current = Array.isArray(props.modelValue) ? props.modelValue : [];

			const newValue = current.includes(value)
				? current.filter((v) => v !== value)
				: [...current, value];

			emit('update:modelValue', newValue);
			return;
		}

		emit('update:modelValue', props.modelValue === value ? '' : value);
	}

	provide<BoAccordionContext>('accordion', {
		id: props.id,
		openItems,
		multiple: props.multiple,
		onToggleItem,
	});
</script>

<style scoped lang="scss">
	.bo-accordion {
		gap: 0;
		display: flex;
		padding: 0.5rem;
		flex-direction: column;
		background-color: var(--accordion-bg);
		border: 1px solid var(--accordion-border);

		&--rounded {
			border-radius: 0.25rem;
		}

		&--square {
			border-radius: 0;
		}
	}
</style>
