import type {
	BoButtonGroupOrientation,
	BoButtonSize,
	BoButtonVariant,
} from '@workspace/bamboo-core';
import type { ComputedRef, InjectionKey } from 'vue';

export interface ButtonGroupContext {
	selected: (value: string | number) => boolean;
	select: (value: string | number) => void;
	disabled: ComputedRef<boolean>;
	size: ComputedRef<BoButtonSize>;
	variant: ComputedRef<BoButtonVariant>;
	orientation: ComputedRef<BoButtonGroupOrientation>;
}

export const buttonGroupContextKey: InjectionKey<ButtonGroupContext> = Symbol('buttonGroupContext');
