<template>
	<div :id="id" :data-testid="dataTestId" :class="TAGS_INPUT_MANIFEST.styles.base">
		<div v-if="label || required" :class="TAGS_INPUT_MANIFEST.styles.labels.container">
			<label :for="inputId" :class="TAGS_INPUT_MANIFEST.styles.labels.label">
				{{ label
				}}<span v-if="required" :class="TAGS_INPUT_MANIFEST.styles.labels.required">*</span>
			</label>
		</div>

		<div :class="TAGS_INPUT_MANIFEST.styles.container">
			<div v-if="model.length" :class="TAGS_INPUT_MANIFEST.styles.tags">
				<span
					v-for="(tag, index) in model"
					:key="`${tag}-${index}`"
					:class="TAGS_INPUT_MANIFEST.styles.tag"
				>
					{{ tag }}
					<button
						type="button"
						:class="TAGS_INPUT_MANIFEST.styles.remove"
						:disabled="disabled || readOnly"
						:aria-label="`Remove ${tag}`"
						@click="removeTag(index)"
					>
						x
					</button>
				</span>
			</div>
			<input
				ref="inputRef"
				:id="inputId"
				:data-testid="`${dataTestId}-input`"
				:name="name"
				:placeholder="placeholder"
				:inputmode="inputMode"
				:value="draft"
				:disabled="disabled"
				:readonly="readOnly"
				:required="required && model.length === 0"
				:autofocus="autofocus"
				:role="role || 'combobox'"
				:aria-label="ariaLabel"
				:aria-labelledby="ariaLabelledBy"
				:aria-describedby="describedBy"
				:aria-invalid="error ? 'true' : undefined"
				:aria-expanded="false"
				:class="TAGS_INPUT_MANIFEST.styles.input"
				@input="onInput"
				@keydown="onKeydown"
				@blur="emit('blur', $event)"
				@focus="emit('focus')"
			/>
		</div>

		<div v-if="description || error || hint" :class="TAGS_INPUT_MANIFEST.styles.helpers.container">
			<span v-if="error" :id="helperTextId" :class="TAGS_INPUT_MANIFEST.styles.helpers.error">{{
				error
			}}</span>
			<span
				v-else-if="description"
				:id="helperTextId"
				:class="TAGS_INPUT_MANIFEST.styles.helpers.description"
				>{{ description }}</span
			>
			<span v-else :id="helperTextId" :class="TAGS_INPUT_MANIFEST.styles.helpers.hint">{{
				hint
			}}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { BoTagsInputProps } from '@workspace/bamboo-core';
import { TAGS_INPUT_MANIFEST } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed, onMounted, ref } from 'vue';

const props = withDefaults(defineProps<BoTagsInputProps>(), {
	id: () => generateComponentId('tags-input'),
	dataTestId: () => generateDataTestId('tags-input'),
	delimiters: () => [','],
	allowDuplicates: false,
	inputMode: 'text',
	role: 'combobox',
});

const emit = defineEmits<{ focus: []; blur: [event: FocusEvent] }>();
const model = defineModel<string[]>({ default: () => [] });
const draft = ref('');
const inputRef = ref<HTMLInputElement | null>(null);
const inputId = computed(() => `${props.id}-input`);
const helperTextId = computed(() => `${props.id}-helper`);
const describedBy = computed(
	() =>
		props.ariaDescribedBy ||
		(props.description || props.error || props.hint ? helperTextId.value : undefined),
);

function addTag(value = draft.value): void {
	const tag = value.trim();
	if (!tag || props.disabled || props.readOnly) return;
	if (props.maxTags !== undefined && model.value.length >= props.maxTags) return;
	if (!props.allowDuplicates && model.value.includes(tag)) {
		draft.value = '';
		return;
	}
	model.value = [...model.value, tag];
	draft.value = '';
}

function removeTag(index: number): void {
	if (props.disabled || props.readOnly) return;
	model.value = model.value.filter((_, tagIndex) => tagIndex !== index);
}

function onInput(event: Event): void {
	const value = (event.target as HTMLInputElement).value;
	const delimiter = props.delimiters.find((item) => item && value.includes(item));
	if (delimiter) {
		const parts = value.split(delimiter);
		parts.slice(0, -1).forEach((part) => addTag(part));
		draft.value = parts.at(-1) || '';
		return;
	}
	draft.value = value;
}

function onKeydown(event: KeyboardEvent): void {
	if (event.key === 'Enter') {
		event.preventDefault();
		addTag();
	} else if (event.key === 'Backspace' && !draft.value && model.value.length) {
		removeTag(model.value.length - 1);
	}
}

function focus(): void {
	inputRef.value?.focus();
}

defineExpose({ focus, addTag, removeTag });

onMounted(() => {
	if (props.autofocus) focus();
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/tags-input.manifest.css';
</style>
