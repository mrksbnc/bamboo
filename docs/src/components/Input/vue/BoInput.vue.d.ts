import { type PropType } from '../../../../vue/dist/vue.esm-bundler.js';
import { HTMLAutocompleteAttribute, HTMLInputType, InputSize } from '..';
declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    type: {
        type: PropType<HTMLInputType>;
        default: () => HTMLInputType;
        validator: (value: HTMLInputType) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
    };
    hint: {
        type: StringConstructor;
        requited: boolean;
    };
    isValid: {
        type: BooleanConstructor;
        default: boolean;
    };
    errorMsg: {
        type: StringConstructor;
        required: false;
    };
    isLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<InputSize>;
        default: () => InputSize;
    };
    autocomplete: {
        type: PropType<HTMLAutocompleteAttribute>;
        default: () => HTMLAutocompleteAttribute;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    focus: () => void;
    blur: (value: Event) => void;
    "update:modelValue": (value: string | null) => void;
    change: (value: string | null) => void;
}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    type: {
        type: PropType<HTMLInputType>;
        default: () => HTMLInputType;
        validator: (value: HTMLInputType) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
    };
    hint: {
        type: StringConstructor;
        requited: boolean;
    };
    isValid: {
        type: BooleanConstructor;
        default: boolean;
    };
    errorMsg: {
        type: StringConstructor;
        required: false;
    };
    isLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<InputSize>;
        default: () => InputSize;
    };
    autocomplete: {
        type: PropType<HTMLAutocompleteAttribute>;
        default: () => HTMLAutocompleteAttribute;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onFocus?: (() => any) | undefined;
    onBlur?: ((value: Event) => any) | undefined;
    onChange?: ((value: string | null) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | null) => any) | undefined;
}, {
    type: HTMLInputType;
    size: InputSize;
    id: string;
    disabled: boolean;
    isValid: boolean;
    isLoading: boolean;
    autocomplete: HTMLAutocompleteAttribute;
    readonly: boolean;
}, {}>;
export default _default;
