<template>
	<div :class="wrapperClasses">
		<label :class="radioContainerClasses">
			<input
				:id="id"
				ref="radioRef"
				v-model="modelValue"
				type="radio"
				:name="name"
				:value="value"
				:disabled="disabled"
				:aria-label="computedAriaLabel"
				:aria-labelledby="ariaLabelledBy"
				:aria-describedby="computedAriaDescribedBy"
				:aria-live="ariaLive"
				:tabindex="tabIndex"
				:data-testid="dataTestId"
				class="bo-radio__input"
				@change="handleChange"
			/>

			<span class="bo-radio__circle">
				<span v-if="isChecked" class="bo-radio__dot" />
			</span>

			<bo-text
				v-if="label"
				:value="label"
				:font-size="BoFontSize.sm"
				:font-weight="BoFontWeight.medium"
				:custom-css-class="'bo-radio__label'"
			/>
		</label>

		<bo-text
			v-if="helperText"
			:value="helperText"
			:font-size="BoFontSize.xs"
			:custom-css-class="'bo-radio__helper'"
		/>
	</div>
</template>

<script lang="ts" setup>
	import { BoFontSize, BoFontWeight } from '@/components/bo-text';
	import BoText from '@/components/bo-text/bo-text.vue';
	import { IdentityService } from '@/services/identity-service';
	import { AriaLive } from '@/shared/accessibility';
	import type { ConditionalCssProperties } from '@/shared/css';
	import { computed, ref } from 'vue';
	import { BoRadioSize, type BoRadioProps } from './bo-radio';

	const props = withDefaults(defineProps<BoRadioProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-radio'),
		size: BoRadioSize.md,
		ariaLive: AriaLive.polite,
	});

	const modelValue = defineModel<string | number>();

	const emit = defineEmits<{
		change: [value: string | number];
	}>();

	const radioRef = ref<HTMLInputElement | null>(null);

	const isChecked = computed(() => modelValue.value === props.value);

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
		if (props.helperText) {
			return `${props.id}-helper`;
		}
		return undefined;
	});

	const wrapperClasses = computed(() => {
		const classes: string[] = ['bo-radio'];
		if (props.customCssClass) {
			classes.push(props.customCssClass);
		}
		return classes;
	});

	const radioContainerClasses = computed<ConditionalCssProperties>(() => {
		return {
			'bo-radio__container': true,
			[`bo-radio__container--size-${props.size}`]: true,
			'bo-radio__container--disabled': props.disabled,
			'bo-radio__container--checked': isChecked.value,
		};
	});

	function handleChange(): void {
		emit('change', props.value);
	}

	defineExpose({
		focus: () => radioRef.value?.focus(),
		blur: () => radioRef.value?.blur(),
	});
</script>

<style scoped lang="scss">
	.bo-radio {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		&__container {
			display: inline-flex;
			align-items: center;
			gap: 0.5rem;
			cursor: pointer;
			user-select: none;

			&--disabled {
				cursor: not-allowed;
				opacity: 0.5;
			}
		}

		&__input {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
			border-width: 0;

			&:focus-visible + .bo-radio__circle {
				outline: 2px solid var(--radio-border-focus);
				outline-offset: 2px;
			}
		}

		&__circle {
			position: relative;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			flex-shrink: 0;
			background-color: var(--radio-bg);
			border: 2px solid var(--radio-border);
			border-radius: 9999px;
			transition:
				border-color 200ms ease,
				background-color 200ms ease;
		}

		&__container--checked &__circle {
			border-color: var(--radio-border-checked);
			background-color: var(--radio-bg-checked);
		}

		&__container--disabled &__circle {
			background-color: var(--radio-bg-disabled);
		}

		&__dot {
			display: block;
			background-color: var(--radio-dot-color);
			border-radius: 9999px;
		}

		/* Size variants */
		&__container--size-sm {
			.bo-radio__circle {
				width: 1rem; /* 16px */
				aspect-ratio: 1;
			}

			.bo-radio__dot {
				width: 0.5rem; /* 8px */
				aspect-ratio: 1;
			}
		}

		&__container--size-md {
			.bo-radio__circle {
				width: 1.25rem; /* 20px */
				aspect-ratio: 1;
			}

			.bo-radio__dot {
				width: 0.625rem; /* 10px */
				aspect-ratio: 1;
			}
		}

		&__container--size-lg {
			.bo-radio__circle {
				width: 1.5rem; /* 24px */
				aspect-ratio: 1;
			}

			.bo-radio__dot {
				width: 0.75rem; /* 12px */
				aspect-ratio: 1;
			}
		}

		&__label {
			color: var(--radio-label-color);
			cursor: pointer;
		}

		&__container--disabled &__label {
			cursor: not-allowed;
		}

		&__helper {
			color: var(--radio-helper-color);
			margin-left: calc(0.5rem + 1.25rem); /* Align with label */
		}
	}
</style>
