import { AriaLive } from '../../shared/accessibility';
import { BoCheckboxSize, BoCheckboxProps } from './bo-checkbox';
type __VLS_Props = BoCheckboxProps;
type __VLS_PublicProps = {
    modelValue?: boolean | (string | number)[];
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {
    focus: () => void | undefined;
    blur: () => void | undefined;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean | (string | number)[]) => any;
    change: (value: boolean | (string | number)[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean | (string | number)[]) => any) | undefined;
    onChange?: ((value: boolean | (string | number)[]) => any) | undefined;
}>, {
    id: string;
    dataTestId: string;
    size: BoCheckboxSize;
    ariaLive: AriaLive;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    checkboxRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
