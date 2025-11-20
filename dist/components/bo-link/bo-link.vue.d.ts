import { AriaLive } from '../../shared/accessibility';
import { BoSize } from '../../shared/size';
import { BoVariant } from '../../shared/variant';
import { BoLinkBehavior, BoLinkProps } from './bo-link';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLAnchorElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<BoLinkProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<BoLinkProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    target: "_blank" | "_self" | "_parent" | "_top";
    id: string;
    dataTestId: string;
    size: BoSize;
    variant: BoVariant;
    ariaLive: AriaLive;
    behavior: BoLinkBehavior;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLAnchorElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
