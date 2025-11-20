import { BoLoaderTextPosition } from '../../shared/loader.js';
import { BoSize } from '../../shared/size.js';
import { BoVariant } from '../../shared/variant.js';
import { BoLoaderRingProps } from './bo-loading-ring.js';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<BoLoaderRingProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<BoLoaderRingProps> & Readonly<{}>, {
    id: string;
    dataTestId: string;
    size: BoSize;
    variant: BoVariant;
    textPosition: BoLoaderTextPosition;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
