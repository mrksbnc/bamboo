import type { BoAlertPosition, BoAlertProps } from '@workspace/bamboo-core';
import { readonly, ref, type Ref } from 'vue';

export type AlertPosition = BoAlertPosition;

export interface AlertOptions extends Omit<BoAlertProps, 'id' | 'dataTestId'> {
	/** The viewport position for dispatched notifications. */
	position?: BoAlertPosition;
	/** Automatically dismiss after this many milliseconds. Use 0 to persist. */
	duration?: number;
}

export interface AlertMessage extends AlertOptions {
	id: string;
}

const activeAlerts = ref<AlertMessage[]>([]);
const timers = new Map<string, ReturnType<typeof setTimeout>>();
let nextId = 0;

function dismiss(id: string): void {
	const timer = timers.get(id);
	if (timer) {
		clearTimeout(timer);
		timers.delete(id);
	}

	activeAlerts.value = activeAlerts.value.filter((alert) => alert.id !== id);
}

function show(options: AlertOptions): string {
	const id = `alert-${++nextId}`;
	const alert: AlertMessage = { ...options, id };

	activeAlerts.value = [...activeAlerts.value, alert];

	if (options.duration !== 0) {
		const timer = setTimeout(() => dismiss(id), options.duration ?? 5000);
		timers.set(id, timer);
	}

	return id;
}

function clear(): void {
	for (const id of timers.keys()) {
		dismiss(id);
	}
	activeAlerts.value = [];
}

export function useAlert(): {
	alerts: Readonly<Ref<readonly AlertMessage[]>>;
	show: (options: AlertOptions) => string;
	dismiss: (id: string) => void;
	clear: () => void;
} {
	return {
		alerts: readonly(activeAlerts),
		show,
		dismiss,
		clear,
	};
}
