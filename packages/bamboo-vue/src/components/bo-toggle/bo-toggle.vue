<template>
	<div :class="baseClassValues">
		<div :class="containerClassValues">
			<button
				:id="id"
				:data-testid="dataTestId"
				:name="name"
				:disabled="disabled"
				:required="required"
				:class="trackClassValues"
				:data-checked="checked"
				:aria-checked="checked"
				:aria-describedby="helperTextId"
				:aria-invalid="state === 'invalid'"
				role="switch"
				type="button"
				@click="onToggle"
				@focus="emit('focus', $event)"
				@blur="emit('blur', $event)"
			>
				<span :class="thumbClassValues" :data-checked="checked" />
			</button>

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
		TOGGLE_MANIFEST,
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		type BoToggleProps,
	} from '@workspace/bamboo-core';
	import { computed, type ComputedRef } from 'vue';
	import BoIcon from '../bo-icon/bo-icon.vue';

	const props = withDefaults(defineProps<BoToggleProps>(), {
		...TOGGLE_MANIFEST.defaults,
	});

	interface Emits {
		'update:checked': [checked: boolean];
		change: [event: Event];
		focus: [event: FocusEvent];
		blur: [event: FocusEvent];
	}

	const emit = defineEmits<Emits>();

	// Computed properties
	const id = computed(() => props.id ?? generateComponentId('toggle'));
	const dataTestId = computed(() => props.dataTestId ?? generateDataTestId('toggle'));
	const helperTextId = computed(() => `${id.value}-helper`);

	// Class computations
	const baseClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(TOGGLE_MANIFEST.styles.base),
	);

	const containerClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(TOGGLE_MANIFEST.styles.container),
	);

	const trackClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			TOGGLE_MANIFEST.styles.track.base,
			TOGGLE_MANIFEST.styles.track.size[props.size],
			TOGGLE_MANIFEST.styles.track.state[props.state],
			props.disabled ? TOGGLE_MANIFEST.styles.track.disabled : '',
		),
	);

	const thumbClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			TOGGLE_MANIFEST.styles.thumb.base,
			TOGGLE_MANIFEST.styles.thumb.size[props.size],
		),
	);

	const labelContainerClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(TOGGLE_MANIFEST.styles.labelContainer),
	);

	const labelClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			TOGGLE_MANIFEST.styles.label.base,
			TOGGLE_MANIFEST.styles.label.size[props.size],
			props.disabled ? TOGGLE_MANIFEST.styles.label.disabled : '',
		),
	);

	const descriptionClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			TOGGLE_MANIFEST.styles.description.base,
			TOGGLE_MANIFEST.styles.description.size[props.size],
		),
	);

	const errorClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			TOGGLE_MANIFEST.styles.error.base,
			TOGGLE_MANIFEST.styles.error.size[props.size],
		),
	);

	// Event handlers
	const onToggle = (event: Event) => {
		if (props.disabled) return;

		const newChecked = !props.checked;
		emit('update:checked', newChecked);
		emit('change', event);
	};
</script>
