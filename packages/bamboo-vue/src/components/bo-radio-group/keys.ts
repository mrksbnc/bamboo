import type { BoRadioGroupOrientation } from '@workspace/bamboo-core';
import type { ComputedRef, InjectionKey, Ref } from 'vue';

export const radioGroupValueKey: InjectionKey<Ref<string | number | undefined>> =
	Symbol('radioGroupValue');
export const radioGroupSetValueKey: InjectionKey<(value: string | number) => void> =
	Symbol('radioGroupSetValue');
export const radioGroupDisabledKey: InjectionKey<ComputedRef<boolean>> =
	Symbol('radioGroupDisabled');
export const radioGroupNameKey: InjectionKey<ComputedRef<string>> = Symbol('radioGroupName');
export const radioGroupOrientationKey: InjectionKey<ComputedRef<BoRadioGroupOrientation>> =
	Symbol('radioGroupOrientation');
