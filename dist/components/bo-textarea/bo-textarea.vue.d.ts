import { AriaLive } from '../../shared/accessibility';
import { BoSize } from '../../shared/size';
import { BoTextareaProps } from './bo-textarea';
declare const _default: import('vue').DefineComponent<BoTextareaProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    blur: (event: FocusEvent) => any;
}, string, import('vue').PublicProps, Readonly<BoTextareaProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
}>, {
    id: string;
    dataTestId: string;
    size: BoSize;
    ariaLive: AriaLive;
    rows: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
