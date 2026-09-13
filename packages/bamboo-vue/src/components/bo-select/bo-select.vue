<template>
	<div ref="rootRef" :id="id" :data-testid="dataTestId" :class="baseClasses" @keydown="onKeydown">
		<div v-if="label || description" :class="SELECT_MANIFEST.styles.labels.container">
			<label :for="triggerId" :class="SELECT_MANIFEST.styles.labels.label">
				{{ label }}
				<span v-if="required" :class="SELECT_MANIFEST.styles.labels.required">*</span>
			</label>
			<span v-if="description" :class="SELECT_MANIFEST.styles.labels.description">
				{{ description }}
			</span>
		</div>

		<bo-button
			:id="triggerId"
			:data-testid="`${dataTestId}-trigger`"
			:disabled="disabled"
			:aria-label="ariaLabel"
			:aria-labelledby="ariaLabelledBy"
			:aria-describedby="ariaDescribedBy || helperTextId"
			:aria-expanded="open"
			:aria-controls="menuId"
			:role="role"
			aria-haspopup="listbox"
			:class="triggerClasses"
			@click="toggle"
		>
			<span :class="triggerContentClasses">
				<span v-if="selectedOption">{{ selectedOption.label }}</span>
				<span v-else :class="SELECT_MANIFEST.styles.placeholder">{{ placeholder }}</span>
			</span>
			<bo-icon
				:class="SELECT_MANIFEST.styles.icon"
				icon="chevron_down"
				size="sm"
				aria-hidden="true"
			/>
		</bo-button>

		<div
			v-if="open"
			:id="menuId"
			:class="SELECT_MANIFEST.styles.menu"
			role="listbox"
			:aria-label="ariaLabel"
			:aria-labelledby="ariaLabelledBy"
			:aria-activedescendant="activeOptionId"
		>
			<template v-if="options?.length">
				<button
					v-for="(option, index) in options"
					:id="optionId(index)"
					:key="String(option.value)"
					type="button"
					role="option"
					:disabled="option.disabled || disabled"
					:aria-selected="isSelected(option.value) ? 'true' : 'false'"
					:data-state="isSelected(option.value) ? 'checked' : 'unchecked'"
					:class="optionClasses(option.value)"
					@click="selectOption(option.value, option.disabled)"
				>
					<span :class="SELECT_MANIFEST.styles.optionLabel">
						<span>{{ option.label }}</span>
						<bo-icon v-if="isSelected(option.value)" icon="check" size="sm" aria-hidden="true" />
					</span>
					<span v-if="option.description" :class="SELECT_MANIFEST.styles.optionDescription">
						{{ option.description }}
					</span>
				</button>
			</template>
			<slot v-else />
			<span v-if="!options?.length && !$slots['default']" :class="SELECT_MANIFEST.styles.empty">
				No options
			</span>
		</div>

		<div v-if="error || hint" :class="SELECT_MANIFEST.styles.helpers.container">
			<span v-if="error" :id="helperTextId" :class="SELECT_MANIFEST.styles.helpers.error">
				{{ error }}
			</span>
			<span v-else :id="helperTextId" :class="SELECT_MANIFEST.styles.helpers.hint">
				{{ hint }}
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { generateComponentId, generateDataTestId, mergeTwClasses } from '@workspace/bamboo-core';
import type { BoSelectProps } from '@workspace/bamboo-core';
import { SELECT_MANIFEST } from '@workspace/bamboo-core';
import { computed, onBeforeUnmount, onMounted, provide, ref } from 'vue';
import { BoButton } from '../bo-button';
import { BoIcon } from '../bo-icon';
import { selectContextKey } from './keys.js';

const props = withDefaults(defineProps<BoSelectProps>(), {
	id: () => generateComponentId('select'),
	dataTestId: () => generateDataTestId('select'),
	placeholder: 'Select an option',
	size: () => SELECT_MANIFEST.defaults.size,
	role: () => SELECT_MANIFEST.defaults.role,
});

const model = defineModel<string | number>();
const rootRef = ref<HTMLElement | null>(null);
const open = ref(false);
const highlightedIndex = ref(-1);

const triggerId = computed(() => `${props.id}-trigger`);
const menuId = computed(() => `${props.id}-menu`);
const helperTextId = computed(() => `${props.id}-helper`);
const options = computed(() => props.options || []);
const selectedOption = computed(() => options.value.find((option) => option.value === model.value));
const activeOptionId = computed(() =>
	highlightedIndex.value >= 0 ? optionId(highlightedIndex.value) : undefined,
);
const baseClasses = computed(() =>
	mergeTwClasses(
		SELECT_MANIFEST.styles.base,
		props.fullWidth ? SELECT_MANIFEST.styles.width.full : SELECT_MANIFEST.styles.width.default,
	),
);
const triggerContentClasses = computed(() => SELECT_MANIFEST.styles.triggerContent);
const triggerClasses = computed(() => [
	SELECT_MANIFEST.styles.trigger,
	SELECT_MANIFEST.styles.triggerSize[props.size || 'default'],
]);

function optionId(index: number): string {
	return `${props.id}-option-${index}`;
}

function isSelected(value: string | number): boolean {
	return model.value === value;
}

function selectOption(value: string | number, disabled = false): void {
	if (props.disabled || disabled) return;
	model.value = value;
	open.value = false;
}

function toggle(): void {
	if (props.disabled) return;
	open.value = !open.value;
	if (open.value) {
		highlightedIndex.value = Math.max(
			0,
			options.value.findIndex((option) => option.value === model.value),
		);
	}
}

function moveHighlight(direction: 1 | -1): void {
	const enabled = options.value
		.map((option, index) => (option.disabled ? -1 : index))
		.filter((index) => index >= 0);
	if (!enabled.length) return;
	const current = enabled.indexOf(highlightedIndex.value);
	const next = current < 0 ? (direction === 1 ? 0 : enabled.length - 1) : current + direction;
	highlightedIndex.value = enabled[(next + enabled.length) % enabled.length] ?? enabled[0]!;
}

function onKeydown(event: KeyboardEvent): void {
	if (event.key === 'Escape') {
		open.value = false;
		return;
	}
	if (!open.value && ['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(event.key)) {
		event.preventDefault();
		toggle();
		return;
	}
	if (!open.value) return;
	if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
		event.preventDefault();
		moveHighlight(1);
	} else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
		event.preventDefault();
		moveHighlight(-1);
	} else if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault();
		const option = options.value[highlightedIndex.value];
		if (option) selectOption(option.value, option.disabled);
	}
}

function optionClasses(value: string | number): string {
	return mergeTwClasses(
		SELECT_MANIFEST.styles.option,
		isSelected(value) ? SELECT_MANIFEST.styles.optionSelected : '',
	);
}

function onDocumentPointerdown(event: PointerEvent): void {
	if (open.value && !rootRef.value?.contains(event.target as Node)) open.value = false;
}

provide(selectContextKey, {
	select: selectOption,
	isSelected,
	isDisabled: computed(() => !!props.disabled),
	close: () => {
		open.value = false;
	},
});

onMounted(() => document.addEventListener('pointerdown', onDocumentPointerdown));
onBeforeUnmount(() => document.removeEventListener('pointerdown', onDocumentPointerdown));
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/select.manifest.css';
@import '@workspace/bamboo-core/manifests/shared.css';
</style>
