import { ref, type InjectionKey, type Ref } from 'vue';

export interface NavigationMenuContext {
	activeId: Ref<string | null>;
	open: (id: string) => void;
	close: () => void;
	toggle: (id: string) => void;
}

export const navigationMenuContextKey = Symbol(
	'navigation-menu-context',
) as InjectionKey<NavigationMenuContext>;

export interface NavigationMenuTriggerContext {
	id: string;
}
export const navigationMenuTriggerKey = Symbol(
	'navigation-menu-trigger',
) as InjectionKey<NavigationMenuTriggerContext>;

export const defaultNavigationMenuContext: NavigationMenuContext = {
	activeId: ref(null),
	open: () => undefined,
	close: () => undefined,
	toggle: () => undefined,
};
