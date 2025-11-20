import { BoVariant } from '../../shared/variant';
import { BoAlertProps } from './bo-alert';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<BoAlertProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    dismiss: () => any;
}, string, import('vue').PublicProps, Readonly<BoAlertProps> & Readonly<{
    onDismiss?: (() => any) | undefined;
}>, {
    id: string;
    dataTestId: string;
    variant: BoVariant;
    role: string;
    ariaLive: "assertive" | "polite" | "off";
    showIcon: boolean;
    ariaAtomic: boolean;
    closeAriaLabel: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
