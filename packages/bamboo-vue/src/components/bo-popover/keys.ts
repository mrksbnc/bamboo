import type { BoPopoverPlacement } from '@workspace/bamboo-core';
import type { ComputedRef, InjectionKey, Ref } from 'vue';

export interface PopoverContext {
	open: Ref<boolean>;
	placement: ComputedRef<BoPopoverPlacement>;
	offset: ComputedRef<number>;
	triggerRef: Ref<HTMLElement | undefined>;
	contentRef: Ref<HTMLElement | undefined>;
	close: () => void;
}

export const popoverContextKey: InjectionKey<PopoverContext> = Symbol('popoverContext');
