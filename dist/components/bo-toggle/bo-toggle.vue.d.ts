import { AriaLive } from '../../shared/accessibility';
import { BoToggleSize, BoToggleProps } from './bo-toggle';
type __VLS_Props = BoToggleProps;
type __VLS_PublicProps = {
    modelValue?: boolean;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {
    focus: () => void | undefined;
    blur: () => void | undefined;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
    change: (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onChange?: ((value: boolean) => any) | undefined;
}>, {
    id: string;
    dataTestId: string;
    size: BoToggleSize;
    ariaLive: AriaLive;
    labelPosition: "left" | "right";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    toggleRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
