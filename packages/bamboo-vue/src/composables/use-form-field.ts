import { computed, type Ref } from 'vue';

export interface UseFormFieldOptions {
	id: Ref<string> | string;
	description?: Ref<string | undefined> | string;
	error?: Ref<string | undefined> | string;
}

export function useFormField(options: UseFormFieldOptions) {
	const id = computed(() => {
		return typeof options.id === 'string' ? options.id : options.id.value;
	});
	const descriptionId = computed(() => {
		return `${id.value}-description`;
	});
	const errorId = computed(() => {
		return `${id.value}-error`;
	});
	const describedBy = computed(() => {
		const ids = [];
		const description =
			typeof options.description === 'string' ? options.description : options.description?.value;
		const error = typeof options.error === 'string' ? options.error : options.error?.value;
		if (description) ids.push(descriptionId.value);
		if (error) ids.push(errorId.value);
		return ids.join(' ') || undefined;
	});
	return { id, descriptionId, errorId, describedBy };
}
