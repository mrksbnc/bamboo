import type { BoToastPosition, BoToastProps } from '@workspace/bamboo-core';
import { hasInjectionContext, inject, readonly, ref, type InjectionKey, type Ref } from 'vue';

export type ToastPosition = BoToastPosition;

export interface ToastOptions extends Omit<
	BoToastProps,
	'id' | 'dataTestId' | 'open' | 'stackIndex'
> {
	position?: BoToastPosition;
}

export interface ToastMessage extends ToastOptions {
	id: string;
}

export interface ToastState {
	toasts: Readonly<Ref<readonly ToastMessage[]>>;
	show: (options: ToastOptions) => string;
	dismiss: (id: string) => void;
	pause: (id: string) => void;
	resume: (id: string) => void;
	clear: () => void;
}

export const TOAST_STATE_KEY: InjectionKey<ToastState> = Symbol('bamboo.toast');

export function createToastState(): ToastState {
	const activeToasts = ref<ToastMessage[]>([]);
	const timers = new Map<
		string,
		{
			handle: ReturnType<typeof setTimeout>;
			startedAt: number;
			remaining: number;
			paused: boolean;
		}
	>();
	let nextId = 0;

	function schedule(id: string, duration: number): void {
		const startedAt = Date.now();
		const handle = setTimeout(() => dismiss(id), duration);
		timers.set(id, { handle, startedAt, remaining: duration, paused: false });
	}

	function dismiss(id: string): void {
		const timer = timers.get(id);
		if (timer) {
			clearTimeout(timer.handle);
			timers.delete(id);
		}
		activeToasts.value = activeToasts.value.filter((toast) => toast.id !== id);
	}

	function pause(id: string): void {
		const timer = timers.get(id);
		if (!timer || timer.paused) return;

		clearTimeout(timer.handle);
		timer.remaining = Math.max(0, timer.remaining - (Date.now() - timer.startedAt));
		timer.paused = true;
		timers.set(id, timer);
	}

	function resume(id: string): void {
		const timer = timers.get(id);
		if (!timer || !timer.paused) return;
		if (timer.remaining <= 0) {
			dismiss(id);
			return;
		}

		schedule(id, timer.remaining);
	}

	function show(options: ToastOptions): string {
		const id = `toast-${++nextId}`;
		const toast = { ...options, position: options.position ?? 'top-right', id };
		activeToasts.value = [...activeToasts.value, toast];
		const duration = options.duration ?? 10000;
		if (duration > 0 && typeof window !== 'undefined') {
			schedule(id, duration);
		}
		return id;
	}

	function clear(): void {
		for (const id of [...timers.keys()]) dismiss(id);
		activeToasts.value = [];
	}

	return { toasts: readonly(activeToasts), show, dismiss, pause, resume, clear };
}

const fallbackToastState = createToastState();

export function useToast(): ToastState {
	return (hasInjectionContext() ? inject(TOAST_STATE_KEY) : undefined) ?? fallbackToastState;
}
