import { inject, type InjectionKey, type Ref } from 'vue';

export interface SidebarContext {
	collapsed: Ref<boolean>;
	toggle: () => void;
	setCollapsed: (value: boolean) => void;
}

export const sidebarContextKey = Symbol('sidebar-context') as InjectionKey<SidebarContext>;

const fallbackCollapsed = { value: false } as Ref<boolean>;
const fallbackContext: SidebarContext = {
	collapsed: fallbackCollapsed,
	toggle: () => {
		fallbackCollapsed.value = !fallbackCollapsed.value;
	},
	setCollapsed: (value) => {
		fallbackCollapsed.value = value;
	},
};

export function useSidebar(): SidebarContext {
	return inject(sidebarContextKey, fallbackContext);
}
