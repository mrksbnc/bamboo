import { BoCardProps } from './bo-card';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        image?(_: {}): any;
        header?(_: {}): any;
        default?(_: {}): any;
        actions?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<BoCardProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<BoCardProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    id: string;
    dataTestId: string;
    compact: boolean;
    clickable: boolean;
    hoverable: boolean;
    side: boolean;
    bordered: boolean;
    glass: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
