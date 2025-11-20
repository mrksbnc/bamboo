import { AriaLive } from '../../shared/accessibility';
import { BoInputSize, BoInputState, BoInputType, BoInputProps } from './bo-input';
type __VLS_Props = BoInputProps;
type __VLS_PublicProps = {
    modelValue?: string | number;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {
    focus: () => void | undefined;
    blur: () => void | undefined;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    clear: () => any;
    "update:modelValue": (value: string | number) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    action: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onAction?: (() => any) | undefined;
}>, {
    type: BoInputType;
    id: string;
    dataTestId: string;
    size: BoInputSize;
    ariaLive: AriaLive;
    state: BoInputState;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
