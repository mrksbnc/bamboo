import type { BoPopoverPlacement } from '@workspace/bamboo-core';
import type { ComputedRef, InjectionKey, Ref } from 'vue';

export interface PopoverContext {
	open: Ref<boolean>;
	placement: ComputedRef<BoPopoverPlacement>;
	offset: ComputedRef<number>;
	contentId: Ref<string>;
	triggerRef: Ref<HTMLElement | null>;
	contentRef: Ref<HTMLElement | null>;
	close: () => void;
}

export const popoverContextKey: InjectionKey<PopoverContext> = Symbol('popoverContext');
