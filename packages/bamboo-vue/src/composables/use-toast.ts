import type { BoToastPosition, BoToastProps } from '@workspace/bamboo-core';
import { readonly, ref, type Ref } from 'vue';

export type ToastPosition = BoToastPosition;

export interface ToastOptions extends Omit<BoToastProps, 'id' | 'dataTestId' | 'open'> {
	position?: BoToastPosition;
}

export interface ToastMessage extends ToastOptions {
	id: string;
}

const activeToasts = ref<ToastMessage[]>([]);
const timers = new Map<string, ReturnType<typeof setTimeout>>();
let nextId = 0;

function dismiss(id: string): void {
	const timer = timers.get(id);
	if (timer) {
		clearTimeout(timer);
		timers.delete(id);
	}
	activeToasts.value = activeToasts.value.filter((toast) => toast.id !== id);
}

function show(options: ToastOptions): string {
	const id = `toast-${++nextId}`;
	activeToasts.value = [...activeToasts.value, { ...options, id }];
	if ((options.duration ?? 5000) > 0) {
		timers.set(
			id,
			setTimeout(() => dismiss(id), options.duration ?? 5000),
		);
	}
	return id;
}

function clear(): void {
	for (const id of [...timers.keys()]) dismiss(id);
	activeToasts.value = [];
}

export function useToast(): {
	toasts: Readonly<Ref<readonly ToastMessage[]>>;
	show: (options: ToastOptions) => string;
	dismiss: (id: string) => void;
	clear: () => void;
} {
	return { toasts: readonly(activeToasts), show, dismiss, clear };
}
