import {
	hasInjectionContext,
	inject,
	nextTick,
	readonly,
	ref,
	type Component,
	type InjectionKey,
	type Ref,
} from 'vue';

export interface ModalInstance {
	component: Component;
	props?: Record<string, unknown>;
}

export interface ModalState {
	instances: Readonly<Ref<readonly ModalInstance[]>>;
	open: (instance: ModalInstance) => void;
	close: (component?: Component) => void;
	closeAndRestoreFocus: (element?: HTMLElement | null) => Promise<void>;
}

export const MODAL_STATE_KEY: InjectionKey<ModalState> = Symbol('bamboo.modal');

export function createModalState(): ModalState {
	const instances = ref<ModalInstance[]>([]);

	function open(instance: ModalInstance): void {
		instances.value.push(instance);
	}

	function close(component?: Component): void {
		if (!component) {
			instances.value.pop();
			return;
		}
		instances.value = instances.value.filter((item) => item.component !== component);
	}

	async function closeAndRestoreFocus(element?: HTMLElement | null): Promise<void> {
		close();
		await nextTick();
		element?.focus();
	}

	return {
		instances: readonly(instances) as unknown as Readonly<Ref<readonly ModalInstance[]>>,
		open,
		close,
		closeAndRestoreFocus,
	};
}

const fallbackModalState = createModalState();

export function useModal(): ModalState {
	return hasInjectionContext() ? inject(MODAL_STATE_KEY, fallbackModalState) : fallbackModalState;
}
