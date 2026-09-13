import { computed, reactive, type ComputedRef } from 'vue';

export interface FormValidationErrors {
	[key: string]: string | undefined;
}

export interface UseFormOptions<T extends Record<string, unknown>> {
	initialValues: T;
	validate?: (values: T) => FormValidationErrors;
	onSubmit?: (values: T) => void | Promise<void>;
}

export interface UseFormReturn<T extends Record<string, unknown>> {
	values: T;
	errors: ComputedRef<FormValidationErrors>;
	submit: () => Promise<boolean>;
	reset: () => void;
}

export function useForm<T extends Record<string, unknown>>(
	options: UseFormOptions<T>,
): UseFormReturn<T> {
	const values = reactive({ ...options.initialValues }) as T;
	const errors = computed(() => {
		return options.validate?.(values) ?? {};
	});

	async function submit(): Promise<boolean> {
		if (Object.values(errors.value).some(Boolean)) return false;
		await options.onSubmit?.(values);
		return true;
	}

	function reset(): void {
		Object.assign(values, options.initialValues);
	}

	return { values, errors, submit, reset };
}
