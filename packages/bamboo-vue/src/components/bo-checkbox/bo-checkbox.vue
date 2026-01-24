<template>
	<div :class="baseClassValues">
		<div :class="containerClassValues">
			<div class="relative">
				<input
					ref="inputRef"
					:id="id"
					:data-testid="dataTestId"
					:name="name"
					:value="value"
					:checked="effectiveChecked"
					:disabled="effectiveDisabled"
					:required="effectiveRequired"
					:class="inputClassValues"
					:aria-describedby="helperTextId"
					:aria-invalid="state === 'invalid'"
					type="checkbox"
					@change="onChange"
					@focus="emit('focus', $event)"
					@blur="emit('blur', $event)"
				/>
				<div :class="checkmarkClassValues">
					<bo-icon v-if="effectiveChecked && !indeterminate" icon="check" :size="iconSize" />
					<bo-icon v-if="indeterminate" icon="minus" :size="iconSize" />
				</div>
			</div>

			<div v-if="label || description || $slots.default" :class="labelContainerClassValues">
				<label v-if="label" :for="id" :class="labelClassValues">
					{{ label }}
				</label>
				<slot />
				<div v-if="description" :class="descriptionClassValues">
					{{ description }}
				</div>
			</div>
		</div>

		<!-- Error message -->
		<div v-if="error" :class="errorClassValues">
			<bo-icon size="sm" icon="alert_circle" />
			<span :id="helperTextId">{{ error }}</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import {
		CHECKBOX_MANIFEST,
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		type BoCheckboxProps,
		type BoCheckboxSize,
		type BoIconSize,
	} from '@workspace/bamboo-core';
	import { computed, inject, ref, watch, type ComputedRef } from 'vue';
	import BoIcon from '../bo-icon/bo-icon.vue';

	const props = withDefaults(defineProps<BoCheckboxProps>(), {
		...CHECKBOX_MANIFEST.defaults,
	});

	interface Emits {
		'update:checked': [checked: boolean];
		change: [event: Event];
		focus: [event: FocusEvent];
		blur: [event: FocusEvent];
	}

	const emit = defineEmits<Emits>();

	// Inject group context
	const groupValue = inject<(string | number | boolean)[]>('checkboxGroupValue', []);
	const groupSize = inject<BoCheckboxSize | undefined>('checkboxGroupSize', undefined);
	const groupDisabled = inject<boolean>('checkboxGroupDisabled', false);
	const groupRequired = inject<boolean>('checkboxGroupRequired', false);
	const groupUpdateValue = inject<
		((value: string | number | boolean, checked: boolean) => void) | null
	>('checkboxGroupUpdateValue', null);
	const groupIsChecked = inject<((value: string | number | boolean) => boolean) | null>(
		'checkboxGroupIsChecked',
		null,
	);

	// Refs
	const inputRef = ref<HTMLInputElement>();

	// Computed properties
	const id = computed(() => props.id ?? generateComponentId('checkbox'));
	const dataTestId = computed(() => props.dataTestId ?? generateDataTestId('checkbox'));
	const helperTextId = computed(() => `${id.value}-helper`);

	// Use group context when available
	const effectiveSize = computed(() => (groupSize || props.size || 'default') as BoCheckboxSize);
	const effectiveDisabled = computed(() => groupDisabled || props.disabled);
	const effectiveRequired = computed(() => groupRequired || props.required);
	const effectiveChecked = computed(() => {
		if (groupIsChecked && props.value !== undefined) {
			return groupIsChecked(props.value);
		}
		return props.checked;
	});

	const iconSize = computed<BoIconSize>(() => {
		const sizeMap: Record<BoCheckboxSize, BoIconSize> = {
			xs: 'sm',
			sm: 'sm',
			default: 'default',
			lg: 'lg',
			xl: 'xl',
		};
		return sizeMap[effectiveSize.value];
	});

	// Class computations
	const baseClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(CHECKBOX_MANIFEST.styles.base),
	);

	const containerClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(CHECKBOX_MANIFEST.styles.container),
	);

	const inputClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			CHECKBOX_MANIFEST.styles.input.base,
			CHECKBOX_MANIFEST.styles.input.size[effectiveSize.value],
			CHECKBOX_MANIFEST.styles.input.state[props.state],
			effectiveDisabled.value ? CHECKBOX_MANIFEST.styles.input.disabled : '',
			effectiveChecked.value ? 'bg-primary border-primary' : '',
			props.indeterminate ? 'bg-primary border-primary' : '',
		),
	);

	const checkmarkClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			CHECKBOX_MANIFEST.styles.checkmark.base,
			CHECKBOX_MANIFEST.styles.checkmark.size[effectiveSize.value],
			effectiveChecked.value || props.indeterminate ? 'opacity-100' : '',
		),
	);

	const labelContainerClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(CHECKBOX_MANIFEST.styles.labelContainer),
	);

	const labelClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			CHECKBOX_MANIFEST.styles.label.base,
			CHECKBOX_MANIFEST.styles.label.size[effectiveSize.value],
			effectiveDisabled.value ? CHECKBOX_MANIFEST.styles.label.disabled : '',
		),
	);

	const descriptionClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			CHECKBOX_MANIFEST.styles.description.base,
			CHECKBOX_MANIFEST.styles.description.size[effectiveSize.value],
		),
	);

	const errorClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			CHECKBOX_MANIFEST.styles.error.base,
			CHECKBOX_MANIFEST.styles.error.size[effectiveSize.value],
		),
	);

	// Event handlers
	const onChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		const checked = target.checked;

		// If part of a group and has a value, use group's update method
		if (groupUpdateValue && props.value !== undefined) {
			groupUpdateValue(props.value, checked);
		} else {
			// Otherwise emit the standard events
			emit('update:checked', checked);
		}

		emit('change', event);
	};

	// Watch for indeterminate changes
	watch(
		() => props.indeterminate,
		(indeterminate) => {
			if (inputRef.value) {
				inputRef.value.indeterminate = indeterminate;
			}
		},
		{ immediate: true },
	);
</script>
