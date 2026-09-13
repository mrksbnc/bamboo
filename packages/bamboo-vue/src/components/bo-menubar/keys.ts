import type { InjectionKey, Ref } from 'vue';

export interface MenubarTriggerRegistration {
	id: string;
	open: Ref<boolean>;
	element: Ref<HTMLElement | null>;
}

export interface MenubarContext {
	activeId: Readonly<Ref<string | null>>;
	register: (trigger: MenubarTriggerRegistration) => void;
	unregister: (id: string) => void;
	openTrigger: (id: string, open: boolean) => void;
	closeAll: () => void;
}

export const menubarContextKey: InjectionKey<MenubarContext> = Symbol('bo-menubar');
