<template>
	<div :class="baseClassValues">
		<div :class="containerClassValues">
			<div class="relative">
				<input
					:id="id"
					:data-testid="dataTestId"
					:name="effectiveName"
					:value="value"
					:checked="effectiveChecked"
					:disabled="effectiveDisabled"
					:required="effectiveRequired"
					:class="inputClassValues"
					:aria-describedby="helperTextId"
					:aria-invalid="state === 'invalid'"
					type="radio"
					@change="onChange"
					@focus="(event) => emit('focus', event)"
					@blur="(event) => emit('blur', event)"
				/>
				<div :class="indicatorClassValues">
					<div
						v-if="effectiveChecked"
						class="after:content-[''] after:block after:rounded-full after:bg-white"
						:class="indicatorSizeClassValues"
					/>
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
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		RADIO_MANIFEST,
		type BoRadioProps,
		type BoRadioSize,
	} from '@workspace/bamboo-core';
	import { computed, inject, type ComputedRef } from 'vue';
	import BoIcon from '../bo-icon/bo-icon.vue';

	const props = withDefaults(defineProps<BoRadioProps>(), {
		...RADIO_MANIFEST.defaults,
	});

	interface Emits {
		'update:checked': [checked: boolean];
		change: [event: Event];
		focus: [event: FocusEvent];
		blur: [event: FocusEvent];
	}

	const emit = defineEmits<Emits>();

	// Inject group context
	const groupValue = inject<string | number | boolean | undefined>('radioGroupValue', undefined);
	const groupName = inject<string | undefined>('radioGroupName', undefined);
	const groupSize = inject<BoRadioSize | undefined>('radioGroupSize', undefined);
	const groupDisabled = inject<boolean>('radioGroupDisabled', false);
	const groupRequired = inject<boolean>('radioGroupRequired', false);
	const groupUpdateValue = inject<((value: string | number | boolean) => void) | null>(
		'radioGroupUpdateValue',
		null,
	);

	// Computed properties
	const id = computed(() => props.id ?? generateComponentId('radio'));
	const dataTestId = computed(() => props.dataTestId ?? generateDataTestId('radio'));
	const helperTextId = computed(() => `${id.value}-helper`);

	// Use group context when available
	const effectiveName = computed(() => groupName || props.name);
	const effectiveSize = computed(() => (groupSize || props.size || 'default') as BoRadioSize);
	const effectiveDisabled = computed(() => groupDisabled || props.disabled);
	const effectiveRequired = computed(() => groupRequired || props.required);
	const effectiveChecked = computed(() => {
		if (groupValue !== undefined && props.value !== undefined) {
			return groupValue === props.value;
		}
		return props.checked;
	});

	// Class computations
	const baseClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(RADIO_MANIFEST.styles.base),
	);

	const containerClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(RADIO_MANIFEST.styles.container),
	);

	const inputClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			RADIO_MANIFEST.styles.input.base,
			RADIO_MANIFEST.styles.input.size[effectiveSize.value],
			RADIO_MANIFEST.styles.input.state[props.state],
			effectiveDisabled.value ? RADIO_MANIFEST.styles.input.disabled : '',
			effectiveChecked.value ? 'bg-primary border-primary' : '',
		),
	);

	const indicatorClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			RADIO_MANIFEST.styles.indicator.base,
			RADIO_MANIFEST.styles.indicator.size[effectiveSize.value],
		),
	);

	const indicatorSizeClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(RADIO_MANIFEST.styles.indicator.size[effectiveSize.value]),
	);

	const labelContainerClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(RADIO_MANIFEST.styles.labelContainer),
	);

	const labelClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			RADIO_MANIFEST.styles.label.base,
			RADIO_MANIFEST.styles.label.size[effectiveSize.value],
			effectiveDisabled.value ? RADIO_MANIFEST.styles.label.disabled : '',
		),
	);

	const descriptionClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			RADIO_MANIFEST.styles.description.base,
			RADIO_MANIFEST.styles.description.size[effectiveSize.value],
		),
	);

	const errorClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			RADIO_MANIFEST.styles.error.base,
			RADIO_MANIFEST.styles.error.size[effectiveSize.value],
		),
	);

	// Event handlers
	const onChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		const checked = target.checked;

		// If part of a group and has a value, use group's update method
		if (groupUpdateValue && props.value !== undefined && checked) {
			groupUpdateValue(props.value);
		} else {
			// Otherwise emit the standard events
			emit('update:checked', checked);
		}

		emit('change', event);
	};
</script>
