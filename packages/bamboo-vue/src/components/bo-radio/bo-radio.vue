<template>
	<div :class="baseClassValues">
		<div :class="containerClassValues">
			<div class="relative">
				<input
					:id="id"
					:data-testid="dataTestId"
					:name="name"
					:value="value"
					:checked="checked"
					:disabled="disabled"
					:required="required"
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
						v-if="checked"
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
	} from '@workspace/bamboo-core';
	import { computed, type ComputedRef } from 'vue';
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

	// Computed properties
	const id = computed(() => props.id ?? generateComponentId('radio'));
	const dataTestId = computed(() => props.dataTestId ?? generateDataTestId('radio'));
	const helperTextId = computed(() => `${id.value}-helper`);

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
			RADIO_MANIFEST.styles.input.size[props.size],
			RADIO_MANIFEST.styles.input.state[props.state],
			props.disabled ? RADIO_MANIFEST.styles.input.disabled : '',
			props.checked ? 'bg-blue-600 border-blue-600 dark:bg-blue-500 dark:border-blue-500' : '',
		),
	);

	const indicatorClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			RADIO_MANIFEST.styles.indicator.base,
			RADIO_MANIFEST.styles.indicator.size[props.size],
		),
	);

	const indicatorSizeClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(RADIO_MANIFEST.styles.indicator.size[props.size]),
	);

	const labelContainerClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(RADIO_MANIFEST.styles.labelContainer),
	);

	const labelClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			RADIO_MANIFEST.styles.label.base,
			RADIO_MANIFEST.styles.label.size[props.size],
			props.disabled ? RADIO_MANIFEST.styles.label.disabled : '',
		),
	);

	const descriptionClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			RADIO_MANIFEST.styles.description.base,
			RADIO_MANIFEST.styles.description.size[props.size],
		),
	);

	const errorClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(RADIO_MANIFEST.styles.error.base, RADIO_MANIFEST.styles.error.size[props.size]),
	);

	// Event handlers
	const onChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		emit('update:checked', target.checked);
		emit('change', event);
	};
</script>
