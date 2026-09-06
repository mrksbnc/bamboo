<template>
	<div :class="FILE_INPUT_MANIFEST.styles.base">
		<div v-if="label || description" :class="FILE_INPUT_MANIFEST.styles.labels.container">
			<label :for="id" :class="FILE_INPUT_MANIFEST.styles.labels.label"
				>{{ label
				}}<span v-if="required" :class="FILE_INPUT_MANIFEST.styles.labels.required">*</span></label
			>
			<span v-if="description" :class="FILE_INPUT_MANIFEST.styles.labels.description">{{
				description
			}}</span>
		</div>
		<div :class="FILE_INPUT_MANIFEST.styles.container">
			<bo-icon icon="file" :class="FILE_INPUT_MANIFEST.styles.icon" aria-hidden="true" />
			<input
				ref="inputRef"
				:id="id"
				:data-testid="dataTestId"
				:name="name"
				:accept="accept"
				:multiple="multiple"
				:disabled="disabled"
				:required="required"
				:aria-label="ariaLabel"
				:class="FILE_INPUT_MANIFEST.styles.input"
				type="file"
				@change="onInputChange"
			/>
		</div>
		<ul v-if="selectedFiles.length" :class="FILE_INPUT_MANIFEST.styles.fileList">
			<li
				v-for="(file, index) in selectedFiles"
				:key="`${file.name}-${index}`"
				:class="FILE_INPUT_MANIFEST.styles.file"
			>
				<span>{{ file.name }}</span
				><button
					type="button"
					:class="FILE_INPUT_MANIFEST.styles.remove"
					@click="removeFile(index)"
				>
					Remove
				</button>
			</li>
		</ul>
		<div
			v-if="error || selectionError || hint"
			:class="FILE_INPUT_MANIFEST.styles.helpers.container"
		>
			<span v-if="error || selectionError" :class="FILE_INPUT_MANIFEST.styles.helpers.error">{{
				error || selectionError
			}}</span>
			<span v-else :class="FILE_INPUT_MANIFEST.styles.helpers.hint">{{ hint }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	FILE_INPUT_MANIFEST,
	generateComponentId,
	generateDataTestId,
	type BoFileInputProps,
} from '@workspace/bamboo-core';
import { computed, useTemplateRef } from 'vue';
import { useFileSelection } from '../../composables/use-file-selection';
import { BoIcon } from '../bo-icon';

const props = withDefaults(defineProps<BoFileInputProps>(), {
	id: () => generateComponentId('file-input'),
	dataTestId: () => generateDataTestId('file-input'),
});
const emit = defineEmits<{
	(event: 'change', files: File[]): void;
	(event: 'error', message: string): void;
}>();
const model = defineModel<File | File[] | null>({ default: null });
const inputRef = useTemplateRef<HTMLInputElement>('inputRef');
const selection = useFileSelection({
	accept: props.accept,
	multiple: props.multiple,
	maxFiles: props.maxFiles,
	maxSize: props.maxSize,
});
const selectedFiles = computed(() => {
	return selection.files.value;
});
const selectionError = computed(() => {
	return selection.error.value;
});
function onInputChange(event: Event): void {
	selection.onInputChange(event);
	model.value = props.multiple ? selection.files.value : (selection.files.value[0] ?? null);
	emit('change', selection.files.value);
	if (selection.error.value) emit('error', selection.error.value);
}

function syncModel(): void {
	model.value = props.multiple ? selection.files.value : (selection.files.value[0] ?? null);
	emit('change', selection.files.value);
}

function removeFile(index: number): void {
	selection.removeFile(index);
	syncModel();
}

function reset(): void {
	selection.reset();
	if (inputRef.value) inputRef.value.value = '';
	syncModel();
}

defineExpose({ focus: () => inputRef.value?.click(), reset });
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/file-input.manifest.css';
</style>
