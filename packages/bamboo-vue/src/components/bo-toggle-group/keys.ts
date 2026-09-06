import type { BoToggleSize, BoToggleVariant } from '@workspace/bamboo-core';
import type { ComputedRef, InjectionKey } from 'vue';

export interface ToggleGroupContext {
	selected: (value: string) => boolean;
	select: (value: string) => void;
	disabled: ComputedRef<boolean>;
	variant: ComputedRef<BoToggleVariant>;
	size: ComputedRef<BoToggleSize>;
}

export const toggleGroupContextKey: InjectionKey<ToggleGroupContext> = Symbol('bo-toggle-group');
