import { AriaLive } from '../../shared/accessibility';
import { BoRadioSize, BoRadioProps } from './bo-radio';
type __VLS_Props = BoRadioProps;
type __VLS_PublicProps = {
    modelValue?: string | number;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {
    focus: () => void | undefined;
    blur: () => void | undefined;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
    change: (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    onChange?: ((value: string | number) => any) | undefined;
}>, {
    id: string;
    dataTestId: string;
    size: BoRadioSize;
    ariaLive: AriaLive;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    radioRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
