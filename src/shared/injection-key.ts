import type { InjectionKey } from 'vue';

export enum InjectKey {
	AccordionGroup = 'accordion-group',
}

export const AccordionGroupKey: InjectionKey<InjectKey.AccordionGroup> = Symbol(
	InjectKey.AccordionGroup,
);
