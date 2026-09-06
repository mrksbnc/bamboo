import type { InjectionKey, Ref } from 'vue';

export interface SelectContext {
	select: (value: string | number, disabled?: boolean) => void;
	isSelected: (value: string | number) => boolean;
	isDisabled: Ref<boolean>;
	close: () => void;
}

export const selectContextKey: InjectionKey<SelectContext> = Symbol('bo-select');
