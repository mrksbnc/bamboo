<template>
	<div
		:class="wrapperClasses"
		role="radiogroup"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="computedAriaDescribedBy"
		:aria-label="computedAriaLabel"
	>
		<bo-text
			v-if="label"
			:value="label"
			:font-size="BoFontSize.sm"
			:font-weight="BoFontWeight.medium"
			:custom-css-class="'bo-radio-group__label'"
		>
			<span v-if="required" class="bo-radio-group__required">*</span>
		</bo-text>

		<div :class="radioGroupClasses">
			<slot />
		</div>

		<bo-text
			v-if="displayMessage"
			:value="displayMessage"
			:font-size="BoFontSize.xs"
			:custom-css-class="messageClasses"
		/>
	</div>
</template>

<script lang="ts" setup>
	import { BoFontSize, BoFontWeight } from '@/components/bo-text';
	import BoText from '@/components/bo-text/bo-text.vue';
	import { IdentityService } from '@/services/identity-service';
	import type { ConditionalCssProperties } from '@/shared/css';
	import { computed, provide } from 'vue';
	import { BoRadioSize, type BoRadioGroupProps } from './bo-radio';

	const props = withDefaults(defineProps<BoRadioGroupProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-radio-group'),
		size: BoRadioSize.md,
		direction: 'vertical',
	});

	const modelValue = defineModel<string | number>();

	const emit = defineEmits<{
		change: [value: string | number];
	}>();

	// Provide context to child radio components
	provide('radioGroup', {
		name: props.name,
		size: props.size,
		disabled: props.disabled,
		modelValue,
		onChange: (value: string | number) => {
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

	const wrapperClasses = computed(() => {
		const classes: string[] = ['bo-radio-group'];
		if (props.customCssClass) {
			classes.push(props.customCssClass);
		}
		return classes;
	});

	const messageClasses = computed<string>(() => {
		const classes = ['bo-radio-group__message'];
		if (props.hasError) {
			classes.push('bo-radio-group__message--error');
		}
		return classes.join(' ');
	});

	const radioGroupClasses = computed<ConditionalCssProperties>(() => {
		return {
			'bo-radio-group__container': true,
			[`bo-radio-group__container--${props.direction}`]: true,
			'bo-radio-group__container--error': props.hasError,
		};
	});
</script>

<style scoped lang="scss">
	.bo-radio-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		&__label {
			color: var(--radio-group-label);
		}

		&__required {
			color: var(--radio-group-required);
			margin-left: 0.25rem;
		}

		&__container {
			display: flex;

			&--vertical {
				flex-direction: column;
				gap: 0.75rem;
			}

			&--horizontal {
				flex-flow: row wrap;
				gap: 1rem;
			}
		}

		&__message {
			color: var(--radio-group-message);

			&--error {
				color: var(--radio-group-message-error);
			}
		}
	}
</style>
