<template>
	<div
		:class="['bo-checkbox-group__wrapper', customCssClass]"
		role="group"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="computedAriaDescribedBy"
		:aria-label="computedAriaLabel"
	>
		<div v-if="label" class="bo-checkbox-group__label">
			<bo-text :value="label" :font-size="BoFontSize.sm" :font-weight="BoFontWeight.medium" />
			<bo-text
				v-if="required"
				value="*"
				:font-size="BoFontSize.sm"
				custom-css-class="bo-checkbox-group__required"
			/>
		</div>

		<div :class="checkboxGroupClasses">
			<slot />
		</div>

		<div v-if="displayMessage" :class="messageClasses">
			<bo-text :value="displayMessage" :font-size="BoFontSize.xs" />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { BoFontSize, BoFontWeight } from '@/components/bo-text';
	import BoText from '@/components/bo-text/bo-text.vue';
	import type { ConditionalCssProperties } from '@/core';
	import { IdentityService } from '@/services/identity-service';
	import { computed, provide } from 'vue';
	import { BoCheckboxSize, type BoCheckboxGroupProps } from './bo-checkbox';

	const props = withDefaults(defineProps<BoCheckboxGroupProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-checkbox-group'),
		size: BoCheckboxSize.md,
		direction: 'vertical',
	});

	const modelValue = defineModel<(string | number)[]>({ default: () => [] });

	const emit = defineEmits<{
		change: [value: (string | number)[]];
	}>();

	// Provide context to child checkbox components
	provide('checkboxGroup', {
		name: props.name,
		size: props.size,
		disabled: props.disabled,
		modelValue,
		onChange: (value: (string | number)[]) => {
			modelValue.value = value;
			emit('change', value);
		},
	});

	const computedAriaLabel = computed<string | undefined>(() => {
		if (props.ariaLabel) {
			return props.ariaLabel;
		}
		if (props.label) {
			return props.label;
		}
		return undefined;
	});

	const computedAriaDescribedBy = computed<string | undefined>(() => {
		if (props.ariaDescribedBy) {
			return props.ariaDescribedBy;
		}
		if (displayMessage.value) {
			return `${props.id}-message`;
		}
		return undefined;
	});

	const displayMessage = computed<string | undefined>(() => {
		if (props.hasError && props.errorText) {
			return props.errorText;
		}
		return props.helperText;
	});

	const messageClasses = computed<string>(() => {
		const classes = ['bo-checkbox-group__message'];
		if (props.hasError) {
			classes.push('bo-checkbox-group__message--error');
		}
		return classes.join(' ');
	});

	const checkboxGroupClasses = computed<ConditionalCssProperties>(() => {
		return {
			'bo-checkbox-group': true,
			[`bo-checkbox-group--${props.direction}`]: true,
			'bo-checkbox-group--error': props.hasError,
			'bo-checkbox-group--disabled': props.disabled,
		};
	});
</script>

<style scoped lang="scss">
	.bo-checkbox-group__wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.bo-checkbox-group__label {
		color: var(--checkbox-label);
	}

	.bo-checkbox-group__required {
		color: var(--red-500);
		margin-left: 0.25rem;
	}

	.bo-checkbox-group {
		display: flex;

		&--vertical {
			flex-direction: column;
			gap: 0.75rem;
		}

		&--horizontal {
			flex-flow: row wrap;
			gap: 1rem;
		}

		&--disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}
	}

	.bo-checkbox-group__message {
		color: var(--checkbox-helper);

		&--error {
			color: var(--checkbox-border-error);
		}
	}
</style>
