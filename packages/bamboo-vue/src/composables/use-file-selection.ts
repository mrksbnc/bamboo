import { computed, ref, type Ref } from 'vue';

export interface FileSelectionOptions {
	accept?: string;
	multiple?: boolean;
	maxFiles?: number;
	maxSize?: number;
}

export function useFileSelection(options: Ref<FileSelectionOptions> | FileSelectionOptions = {}) {
	const config = computed(() => {
		return 'value' in options ? options.value : options;
	});
	const files = ref<File[]>([]);
	const error = ref<string | undefined>();
	const isDragging = ref(false);

	function matchesAccept(file: File): boolean {
		if (!config.value.accept) return true;
		return config.value.accept.split(',').some((value) => {
			const rule = value.trim().toLowerCase();
			return rule.startsWith('.')
				? file.name.toLowerCase().endsWith(rule)
				: rule.endsWith('/*')
					? file.type.startsWith(rule.slice(0, -1))
					: file.type === rule;
		});
	}

	function selectFiles(value: FileList | File[] | null): File[] {
		error.value = undefined;
		const selected = Array.from(value ?? []);
		if (!selected.every(matchesAccept)) {
			error.value = 'One or more files are not an accepted type.';
			return files.value;
		}
		if (config.value.maxSize && selected.some((file) => file.size > config.value.maxSize!)) {
			error.value = 'One or more files exceed the maximum size.';
			return files.value;
		}
		const next = config.value.multiple ? selected : selected.slice(0, 1);
		if (config.value.maxFiles && next.length > config.value.maxFiles) {
			error.value = `You can select up to ${config.value.maxFiles} files.`;
			return files.value;
		}
		files.value = next;
		return next;
	}

	function removeFile(index: number): void {
		files.value.splice(index, 1);
	}
	function reset(): void {
		files.value = [];
		error.value = undefined;
	}
	function onInputChange(event: Event): void {
		selectFiles((event.target as HTMLInputElement).files);
	}
	function onDrop(event: DragEvent): void {
		isDragging.value = false;
		selectFiles(event.dataTransfer?.files ?? null);
	}

	return {
		files,
		error,
		isDragging,
		hasFiles: computed(() => {
			return files.value.length > 0;
		}),
		selectFiles,
		removeFile,
		reset,
		onInputChange,
		onDrop,
	};
}
