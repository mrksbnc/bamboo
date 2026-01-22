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
					:checked="checked"
					:disabled="disabled"
					:required="required"
					:class="inputClassValues"
					:aria-describedby="helperTextId"
					:aria-invalid="state === 'invalid'"
					type="checkbox"
					@change="onChange"
					@focus="emit('focus', $event)"
					@blur="emit('blur', $event)"
				/>
				<div :class="checkmarkClassValues">
					<bo-icon v-if="checked && !indeterminate" icon="check" :size="iconSize" />
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
	import { computed, ref, watch, type ComputedRef } from 'vue';
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

	// Refs
	const inputRef = ref<HTMLInputElement>();

	// Computed properties
	const id = computed(() => props.id ?? generateComponentId('checkbox'));
	const dataTestId = computed(() => props.dataTestId ?? generateDataTestId('checkbox'));
	const helperTextId = computed(() => `${id.value}-helper`);

	const iconSize = computed<BoIconSize>(() => {
		const sizeMap: Record<BoCheckboxSize, BoIconSize> = {
			xs: 'sm',
			sm: 'sm',
			default: 'default',
			lg: 'lg',
			xl: 'xl',
		};
		return sizeMap[props.size || 'default'];
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
			CHECKBOX_MANIFEST.styles.input.size[props.size],
			CHECKBOX_MANIFEST.styles.input.state[props.state],
			props.disabled ? CHECKBOX_MANIFEST.styles.input.disabled : '',
			props.checked ? 'bg-blue-600 border-blue-600 dark:bg-blue-500 dark:border-blue-500' : '',
			props.indeterminate
				? 'bg-blue-600 border-blue-600 dark:bg-blue-500 dark:border-blue-500'
				: '',
		),
	);

	const checkmarkClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			CHECKBOX_MANIFEST.styles.checkmark.base,
			CHECKBOX_MANIFEST.styles.checkmark.size[props.size],
			props.checked || props.indeterminate ? 'opacity-100' : '',
		),
	);

	const labelContainerClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(CHECKBOX_MANIFEST.styles.labelContainer),
	);

	const labelClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			CHECKBOX_MANIFEST.styles.label.base,
			CHECKBOX_MANIFEST.styles.label.size[props.size],
			props.disabled ? CHECKBOX_MANIFEST.styles.label.disabled : '',
		),
	);

	const descriptionClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			CHECKBOX_MANIFEST.styles.description.base,
			CHECKBOX_MANIFEST.styles.description.size[props.size],
		),
	);

	const errorClassValues: ComputedRef<string> = computed(() =>
		mergeTwClasses(
			CHECKBOX_MANIFEST.styles.error.base,
			CHECKBOX_MANIFEST.styles.error.size[props.size],
		),
	);

	// Event handlers
	const onChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		emit('update:checked', target.checked);
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
