import type { BoPopoverPlacement } from '@workspace/bamboo-core';
import type { ComputedRef, InjectionKey, Ref } from 'vue';

export interface HoverCardContext {
	open: Ref<boolean>;
	placement: ComputedRef<BoPopoverPlacement>;
	offset: ComputedRef<number>;
	triggerRef: Ref<HTMLElement | undefined>;
	contentRef: Ref<HTMLElement | undefined>;
	scheduleOpen: () => void;
	scheduleClose: () => void;
}

export const hoverCardContextKey: InjectionKey<HoverCardContext> = Symbol('hoverCardContext');
