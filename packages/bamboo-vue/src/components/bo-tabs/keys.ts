import type { BoTabsActivationMode, BoTabsOrientation, BoTabsValue } from '@workspace/bamboo-core';
import type { ComputedRef, InjectionKey, Ref } from 'vue';

export interface TabsItem {
	value: BoTabsValue;
	id: string;
	disabled: boolean;
}

export const tabsActiveValueKey: InjectionKey<ComputedRef<BoTabsValue | undefined>> =
	Symbol('tabsActiveValue');
export const tabsSelectKey: InjectionKey<(value: BoTabsValue) => void> = Symbol('tabsSelect');
export const tabsItemsKey: InjectionKey<Ref<TabsItem[]>> = Symbol('tabsItems');
export const tabsRegisterKey: InjectionKey<(item: TabsItem) => void> = Symbol('tabsRegister');
export const tabsUnregisterKey: InjectionKey<(value: BoTabsValue) => void> =
	Symbol('tabsUnregister');
export const tabsOrientationKey: InjectionKey<ComputedRef<BoTabsOrientation>> =
	Symbol('tabsOrientation');
export const tabsActivationModeKey: InjectionKey<ComputedRef<BoTabsActivationMode>> =
	Symbol('tabsActivationMode');
export const tabsDisabledKey: InjectionKey<ComputedRef<boolean | undefined>> =
	Symbol('tabsDisabled');
