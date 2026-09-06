<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:class="[
			DROPZONE_MANIFEST.styles.base,
			{
				[DROPZONE_MANIFEST.styles.dragging]: isDragging,
				[DROPZONE_MANIFEST.styles.disabled]: disabled,
			},
		]"
		@dragenter.prevent="onDragEnter"
		@dragover.prevent
		@dragleave.prevent="onDragLeave"
		@drop.prevent="onDrop"
		@click="open"
	>
		<input
			ref="inputRef"
			:name="name"
			:accept="accept"
			:multiple="multiple"
			:disabled="disabled"
			:required="required"
			:aria-label="ariaLabel || label"
			:class="DROPZONE_MANIFEST.styles.input"
			type="file"
			@change="onInputChange"
		/>
		<div :class="DROPZONE_MANIFEST.styles.content">
			<bo-icon icon="upload" :class="DROPZONE_MANIFEST.styles.icon" aria-hidden="true" /><span
				:class="DROPZONE_MANIFEST.styles.label"
				>{{ label || 'Drop files here or click to browse' }}</span
			><span v-if="description" :class="DROPZONE_MANIFEST.styles.description">{{
				description
			}}</span>
		</div>
		<ul v-if="selectedFiles.length" :class="DROPZONE_MANIFEST.styles.fileList" @click.stop>
			<li
				v-for="(file, index) in selectedFiles"
				:key="`${file.name}-${index}`"
				:class="DROPZONE_MANIFEST.styles.file"
			>
				<span>{{ file.name }}</span
				><button
					type="button"
					:class="DROPZONE_MANIFEST.styles.remove"
					@click="selection.removeFile(index)"
				>
					Remove
				</button>
			</li>
		</ul>
		<span v-if="error || selectionError" :class="DROPZONE_MANIFEST.styles.error">{{
			error || selectionError
		}}</span>
	</div>
</template>

<script setup lang="ts">
import {
	DROPZONE_MANIFEST,
	generateComponentId,
	generateDataTestId,
	type BoDropzoneProps,
} from '@workspace/bamboo-core';
import { computed, useTemplateRef } from 'vue';
import { useFileSelection } from '../../composables/use-file-selection';
import { BoIcon } from '../bo-icon';

const props = withDefaults(defineProps<BoDropzoneProps>(), {
	id: () => generateComponentId('dropzone'),
	dataTestId: () => generateDataTestId('dropzone'),
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
const isDragging = computed(() => {
	return selection.isDragging.value;
});
function open(): void {
	if (!props.disabled) inputRef.value?.click();
}
function onDragEnter(): void {
	selection.isDragging.value = true;
}
function onDragLeave(): void {
	selection.isDragging.value = false;
}
function publish(): void {
	model.value = props.multiple ? selection.files.value : (selection.files.value[0] ?? null);
	emit('change', selection.files.value);
	if (selection.error.value) emit('error', selection.error.value);
}
function onInputChange(event: Event): void {
	selection.onInputChange(event);
	publish();
}
function onDrop(event: DragEvent): void {
	selection.onDrop(event);
	publish();
}
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/dropzone.manifest.css';
</style>
