import { createApp, h } from 'vue';
import BoToast from './BoToast.vue';
import type { ToastOptions } from './bo-toast';

class ToastService {
	private static instance: ToastService;
	private container: HTMLElement;
	private toasts: Map<string, { app: any; element: HTMLElement }> = new Map();

	private constructor() {
		this.container = document.createElement('div');
		this.container.className = 'toast-container';
		document.body.appendChild(this.container);
	}

	public static getInstance(): ToastService {
		if (!ToastService.instance) {
			ToastService.instance = new ToastService();
		}
		return ToastService.instance;
	}

	public show(options: ToastOptions): void {
		const id = Math.random().toString(36).substr(2, 9);
		const element = document.createElement('div');
		this.container.appendChild(element);

		const app = createApp({
			render() {
				return h(BoToast, {
					...options,
					id,
					onClose: () => {
						this.close(id);
					},
				});
			},
		});

		app.mount(element);
		this.toasts.set(id, { app, element });
	}

	public success(message: string, options: Partial<ToastOptions> = {}): void {
		this.show({
			...options,
			message,
			type: 'success',
		});
	}

	public error(message: string, options: Partial<ToastOptions> = {}): void {
		this.show({
			...options,
			message,
			type: 'error',
		});
	}

	public warning(message: string, options: Partial<ToastOptions> = {}): void {
		this.show({
			...options,
			message,
			type: 'warning',
		});
	}

	public info(message: string, options: Partial<ToastOptions> = {}): void {
		this.show({
			...options,
			message,
			type: 'info',
		});
	}

	private close(id: string): void {
		const toast = this.toasts.get(id);
		if (toast) {
			toast.app.unmount();
			toast.element.remove();
			this.toasts.delete(id);
		}
	}

	public closeAll(): void {
		this.toasts.forEach((toast) => {
			toast.app.unmount();
			toast.element.remove();
		});
		this.toasts.clear();
	}
}

export const toast = ToastService.getInstance();
