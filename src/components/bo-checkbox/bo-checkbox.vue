<template>
	<div :class="['bo-checkbox__wrapper', customCssClass]">
		<label :class="checkboxContainerClasses">
			<input
				:id="id"
				ref="checkboxRef"
				v-model="modelValue"
				type="checkbox"
				:name="name"
				:value="value"
				:disabled="disabled"
				:indeterminate="indeterminate"
				:aria-label="computedAriaLabel"
				:aria-labelledby="ariaLabelledBy"
				:aria-describedby="computedAriaDescribedBy"
				:aria-live="ariaLive"
				:tabindex="tabIndex"
				:data-testid="dataTestId"
				class="bo-checkbox__input"
				@change="handleChange"
			/>

			<span class="bo-checkbox__box">
				<svg
					v-if="isChecked && !indeterminate"
					class="bo-checkbox__icon"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M13.3334 4L6.00002 11.3333L2.66669 8"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<svg
					v-else-if="indeterminate"
					class="bo-checkbox__icon"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M4 8H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				</svg>
			</span>

			<span v-if="label" class="bo-checkbox__label">
				<bo-text
					:value="label"
					:font-size="BoFontSize.sm"
					:font-weight="BoFontWeight.medium"
					custom-color="var(--checkbox-label)"
				/>
			</span>
		</label>

		<div v-if="helperText" class="bo-checkbox__helper">
			<bo-text
				:value="helperText"
				:font-size="BoFontSize.xs"
				custom-color="var(--checkbox-helper)"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { BoFontSize, BoFontWeight } from '@/components/bo-text';
	import BoText from '@/components/bo-text/bo-text.vue';
	import { IdentityService } from '@/services/identity-service';
	import { AriaLive } from '@/shared/accessibility';
	import { computed, ref, watch } from 'vue';
	import { BoCheckboxSize, type BoCheckboxProps } from './bo-checkbox';

	const props = withDefaults(defineProps<BoCheckboxProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-checkbox'),
		size: BoCheckboxSize.md,
		ariaLive: AriaLive.polite,
	});

	const modelValue = defineModel<boolean | (string | number)[]>({ default: false });

	const emit = defineEmits<{
		change: [value: boolean | (string | number)[]];
	}>();

	const checkboxRef = ref<HTMLInputElement | null>(null);

	const isChecked = computed(() => {
		if (Array.isArray(modelValue.value)) {
			return props.value !== undefined && modelValue.value.includes(props.value);
		}
		return modelValue.value === true;
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
		if (props.helperText) {
			return `${props.id}-helper`;
		}
		return undefined;
	});

	const checkboxContainerClasses = computed<string>(() => {
		return [
			'bo-checkbox',
			`bo-checkbox--size-${props.size}`,
			props.disabled && 'bo-checkbox--disabled',
			isChecked.value && 'bo-checkbox--checked',
			props.indeterminate && 'bo-checkbox--indeterminate',
		]
			.filter(Boolean)
			.join(' ');
	});

	function handleChange(): void {
		emit('change', modelValue.value);
	}

	// Sync indeterminate state with DOM
	watch(
		() => props.indeterminate,
		(value) => {
			if (checkboxRef.value) {
				checkboxRef.value.indeterminate = value ?? false;
			}
		},
		{ immediate: true },
	);

	defineExpose({
		focus: () => checkboxRef.value?.focus(),
		blur: () => checkboxRef.value?.blur(),
	});
</script>

<style scoped lang="scss">
	.bo-checkbox__wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.bo-checkbox {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
		user-select: none;

		&--disabled {
			cursor: not-allowed;
			opacity: 0.5;
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

			&:focus-visible + .bo-checkbox__box {
				outline: 2px solid var(--checkbox-border-focus);
				outline-offset: 2px;
			}
		}

		&__box {
			position: relative;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			flex-shrink: 0;
			background-color: var(--checkbox-bg);
			border: 2px solid var(--checkbox-border);
			border-radius: 0.25rem;
			transition:
				border-color 200ms ease,
				background-color 200ms ease;

			&:hover {
				border-color: var(--checkbox-border-hover);
			}
		}

		&--checked &__box,
		&--indeterminate &__box {
			border-color: var(--checkbox-border-checked);
			background-color: var(--checkbox-bg-checked);
		}

		&--disabled &__box {
			background-color: var(--checkbox-bg-disabled);
			border-color: var(--checkbox-border);

			&:hover {
				border-color: var(--checkbox-border);
			}
		}

		&__icon {
			color: var(--checkbox-checkmark);
		}

		/* Size variants */
		&--size-sm {
			.bo-checkbox__box {
				width: 1rem; /* 16px */
				height: 1rem; /* 16px */
			}

			.bo-checkbox__icon {
				width: 0.75rem; /* 12px */
				height: 0.75rem; /* 12px */
			}
		}

		&--size-md {
			.bo-checkbox__box {
				width: 1.25rem; /* 20px */
				height: 1.25rem; /* 20px */
			}

			.bo-checkbox__icon {
				width: 1rem; /* 16px */
				height: 1rem; /* 16px */
			}
		}

		&--size-lg {
			.bo-checkbox__box {
				width: 1.5rem; /* 24px */
				height: 1.5rem; /* 24px */
			}

			.bo-checkbox__icon {
				width: 1.25rem; /* 20px */
				height: 1.25rem; /* 20px */
			}
		}

		&__label {
			cursor: pointer;
		}

		&--disabled &__label {
			cursor: not-allowed;
		}
	}

	.bo-checkbox__helper {
		margin-left: calc(0.5rem + 1.25rem); /* Align with label */
	}
</style>
