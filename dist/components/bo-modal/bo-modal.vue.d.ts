import { AriaLive } from '../../shared/accessibility';
import { BoModalSize, BoModalProps } from './bo-modal';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {
        modalRef: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<BoModalProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    open: () => any;
    "update:modelValue": (value: boolean) => any;
    close: () => any;
}, string, import('vue').PublicProps, Readonly<BoModalProps> & Readonly<{
    onOpen?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {
    id: string;
    dataTestId: string;
    size: BoModalSize;
    ariaLive: AriaLive;
    showClose: boolean;
    closeOnBackdrop: boolean;
    closeOnEscape: boolean;
    preventBodyScroll: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    modalRef: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
