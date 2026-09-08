import type { BoDrawerProps } from '@workspace/bamboo-core';
import {
	hasInjectionContext,
	inject,
	readonly,
	shallowRef,
	type Component,
	type InjectionKey,
	type Ref,
} from 'vue';

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

export interface DrawerState {
	drawers: Readonly<Ref<readonly DrawerMessage[]>>;
	show: (options: DrawerOptions) => string;
	dismiss: (id: string) => void;
	clear: () => void;
}

export const DRAWER_STATE_KEY: InjectionKey<DrawerState> = Symbol('bamboo.drawer');

export function createDrawerState(): DrawerState {
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

	return {
		drawers: readonly(activeDrawers) as unknown as Readonly<Ref<readonly DrawerMessage[]>>,
		show,
		dismiss,
		clear,
	};
}

const fallbackDrawerState = createDrawerState();

export function useDrawer(): DrawerState {
	return (hasInjectionContext() ? inject(DRAWER_STATE_KEY) : undefined) ?? fallbackDrawerState;
}
