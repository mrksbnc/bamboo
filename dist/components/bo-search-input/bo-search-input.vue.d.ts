import { BoInputSize } from '../bo-input';
import { BoSearchInputProps } from './bo-search-input';
type __VLS_Props = BoSearchInputProps;
type __VLS_PublicProps = {
    modelValue?: string;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    search: (value: string) => any;
    "update:modelValue": (value: string) => any;
    submit: (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onSearch?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onSubmit?: ((value: string) => any) | undefined;
}>, {
    id: string;
    dataTestId: string;
    size: BoInputSize;
    placeholder: string;
    actionText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLFormElement>;
export default _default;
