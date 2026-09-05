import type { InjectionKey, Ref } from 'vue';

export interface ContextMenuContext {
	open: Ref<boolean>;
	position: Ref<{ x: number; y: number }>;
	contentRef: Ref<HTMLElement | undefined>;
	close: () => void;
	openAt: (x: number, y: number) => void;
}

export const contextMenuContextKey: InjectionKey<ContextMenuContext> = Symbol('contextMenuContext');
export const contextMenuRadioValueKey: InjectionKey<Ref<string | number | undefined>> =
	Symbol('contextMenuRadioValue');
