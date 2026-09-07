import type { BoDrawerProps } from '@workspace/bamboo-core';
import { readonly, shallowRef, type Component, type Ref } from 'vue';

export interface DrawerOptions extends Omit<BoDrawerProps, 'id' | 'dataTestId' | 'open'> {
	content?: Component;
	contentProps?: Record<string, unknown>;
}

export interface DrawerMessage {
	id: string;
	props: Omit<BoDrawerProps, 'id' | 'dataTestId' | 'open'>;
	content?: Component;
	contentProps?: Record<string, unknown>;
}

const activeDrawers = shallowRef<DrawerMessage[]>([]);
let nextId = 0;

function dismiss(id: string): void {
	activeDrawers.value = activeDrawers.value.filter((drawer) => drawer.id !== id);
}

function show(options: DrawerOptions): string {
	const { content, contentProps, ...props } = options;
	const id = `drawer-${++nextId}`;
	activeDrawers.value = [...activeDrawers.value, { id, props, content, contentProps }];
	return id;
}

function clear(): void {
	activeDrawers.value = [];
}

export function useDrawer(): {
	drawers: Readonly<Ref<readonly DrawerMessage[]>>;
	show: (options: DrawerOptions) => string;
	dismiss: (id: string) => void;
	clear: () => void;
} {
	return {
		drawers: readonly(activeDrawers) as unknown as Readonly<Ref<readonly DrawerMessage[]>>,
		show,
		dismiss,
		clear,
	};
}
