import type { ComputedRef, InjectionKey, Ref } from 'vue';

/**
 * Typed provide/inject keys shared between `BoAccordion`
 * and its `BoAccordionItem` children.
 */
export const accordionOpenValuesKey: InjectionKey<Ref<Set<string | number>>> =
	Symbol('accordionOpenValues');
export const accordionToggleKey: InjectionKey<(value: string | number) => void> =
	Symbol('accordionToggle');
export const accordionMultipleKey: InjectionKey<ComputedRef<boolean | undefined>> =
	Symbol('accordionMultiple');
export const accordionDisabledKey: InjectionKey<ComputedRef<boolean | undefined>> =
	Symbol('accordionDisabled');
