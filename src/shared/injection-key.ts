import type { InjectionKey } from 'vue';

export enum InjectionKey {
	AccordionGroup = 'accordion-group',
	RadioGroup = 'radio-group',
}

export const AccordionGroupKey: InjectionKey<InjectionKey.AccordionGroup> = Symbol(
	InjectionKey.AccordionGroup,
);

export const RadioGroupKey: InjectionKey<InjectionKey.RadioGroup> = Symbol(InjectionKey.RadioGroup);
