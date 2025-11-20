import { BoVariant } from '../../shared/variant';
import { BoToastPosition, BoToastProps } from './bo-toast';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<BoToastProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    dismiss: () => any;
}, string, import('vue').PublicProps, Readonly<BoToastProps> & Readonly<{
    onDismiss?: (() => any) | undefined;
}>, {
    id: string;
    dataTestId: string;
    variant: BoVariant;
    role: string;
    position: BoToastPosition;
    dismissible: boolean;
    showIcon: boolean;
    duration: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
