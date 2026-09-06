import type { InjectionKey, Ref } from 'vue';

export interface DropdownContext {
	open: Ref<boolean>;
	toggle: () => void;
	close: () => void;
	triggerRef: Ref<HTMLElement | null>;
}

export const dropdownContextKey: InjectionKey<DropdownContext> = Symbol('bo-dropdown');
