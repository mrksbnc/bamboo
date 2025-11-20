<template>
	<div :class="['bo-toggle__wrapper', customCssClass]">
		<label :class="toggleContainerClasses">
			<span
				v-if="label && labelPosition === 'left'"
				class="bo-toggle__label bo-toggle__label--left"
			>
				<bo-text :value="label" :font-size="BoFontSize.sm" :font-weight="BoFontWeight.medium" />
			</span>

			<input
				:id="id"
				ref="toggleRef"
				v-model="modelValue"
				type="checkbox"
				:name="name"
				:disabled="disabled"
				:aria-label="computedAriaLabel"
				:aria-labelledby="ariaLabelledBy"
				:aria-describedby="computedAriaDescribedBy"
				:aria-live="ariaLive"
				:tabindex="tabIndex"
				:data-testid="dataTestId"
				class="bo-toggle__input"
				@change="handleChange"
			/>

			<span :class="toggleSwitchClasses">
				<span class="bo-toggle__thumb" />
			</span>

			<span
				v-if="label && labelPosition === 'right'"
				class="bo-toggle__label bo-toggle__label--right"
			>
				<bo-text :value="label" :font-size="BoFontSize.sm" :font-weight="BoFontWeight.medium" />
			</span>
		</label>

		<span v-if="helperText" class="bo-toggle__helper">
			<bo-text :value="helperText" :font-size="BoFontSize.xs" />
		</span>
	</div>
</template>

<script lang="ts" setup>
	import { BoFontSize, BoFontWeight } from '@/components/bo-text';
	import BoText from '@/components/bo-text/bo-text.vue';
	import { IdentityService } from '@/services/identity-service';
	import { AriaLive } from '@/shared/accessibility';
	import { computed, ref } from 'vue';
	import { BoToggleSize, type BoToggleProps } from './bo-toggle';

	const props = withDefaults(defineProps<BoToggleProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-toggle'),
		size: BoToggleSize.md,
		labelPosition: 'right',
		ariaLive: AriaLive.polite,
	});

	const modelValue = defineModel<boolean>({ default: false });

	const emit = defineEmits<{
		change: [value: boolean];
	}>();

	const toggleRef = ref<HTMLInputElement | null>(null);

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

	const toggleContainerClasses = computed<string>(() => {
		return [
			'bo-toggle',
			`bo-toggle--size-${props.size}`,
			props.disabled && 'bo-toggle--disabled',
			modelValue.value && 'bo-toggle--checked',
		]
			.filter(Boolean)
			.join(' ');
	});

	const toggleSwitchClasses = computed<string>(() => {
		return ['bo-toggle__switch', modelValue.value && 'bo-toggle__switch--checked']
			.filter(Boolean)
			.join(' ');
	});

	function handleChange(): void {
		emit('change', modelValue.value);
	}

	defineExpose({
		focus: () => toggleRef.value?.focus(),
		blur: () => toggleRef.value?.blur(),
	});
</script>

<style scoped lang="scss">
	.bo-toggle__wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
	}

	.bo-toggle {
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

			&:focus-visible + .bo-toggle__switch {
				outline: 2px solid var(--toggle-border-focus);
				outline-offset: 2px;
			}
		}

		&__switch {
			position: relative;
			display: inline-block;
			flex-shrink: 0;
			background-color: var(--toggle-bg-unchecked);
			border-radius: 9999px;
			transition:
				background-color 200ms ease,
				transform 200ms ease;

			&--checked {
				background-color: var(--toggle-bg-checked);
			}
		}

		&--disabled &__switch {
			background-color: var(--toggle-bg-disabled);
		}

		&__thumb {
			position: absolute;
			top: 50%;
			background-color: var(--toggle-handle);
			border-radius: 9999px;
			box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
			transform: translateY(-50%);
			transition: transform 200ms ease;
		}

		/* Size variants */
		&--size-sm {
			.bo-toggle__switch {
				width: 2rem;
				height: 1.125rem;
			}

			.bo-toggle__thumb {
				width: 0.875rem;
				height: 0.875rem;
				left: 0.125rem;
			}

			&.bo-toggle--checked .bo-toggle__thumb {
				transform: translate(0.875rem, -50%);
			}
		}

		&--size-md {
			.bo-toggle__switch {
				width: 2.75rem;
				height: 1.5rem;
			}

			.bo-toggle__thumb {
				width: 1.25rem;
				height: 1.25rem;
				left: 0.125rem;
			}

			&.bo-toggle--checked .bo-toggle__thumb {
				transform: translate(1.25rem, -50%);
			}
		}

		&--size-lg {
			.bo-toggle__switch {
				width: 3.5rem;
				height: 2rem;
			}

			.bo-toggle__thumb {
				width: 1.75rem;
				height: 1.75rem;
				left: 0.125rem;
			}

			&.bo-toggle--checked .bo-toggle__thumb {
				transform: translate(1.5rem, -50%);
			}
		}

		&__label {
			color: var(--toggle-label);
			cursor: pointer;

			&--left {
				order: -1;
			}
		}

		&--disabled &__label {
			cursor: not-allowed;
		}
	}

	.bo-toggle__helper {
		color: var(--toggle-helper);
		margin-left: 0.5rem;
	}
</style>
