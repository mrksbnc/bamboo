import { nextTick, ref, type Component, type Ref } from 'vue';

export interface ModalInstance {
	component: Component;
	props?: Record<string, unknown>;
}

const instances: Ref<ModalInstance[]> = ref([]);

export function useModal() {
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

	return { instances, open, close, closeAndRestoreFocus };
}
