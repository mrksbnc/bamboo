import { type PropType } from '../../../../vue/dist/vue.esm-bundler.js';
import { BoButtonType, BoButtonVariant } from '../ts/bo_button';
import { BoSize } from '../../../enums/size';
declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    label: {
        type: StringConstructor;
        required: true;
    };
    variant: {
        type: PropType<BoButtonVariant>;
        default: BoButtonVariant;
    };
    type: {
        type: PropType<BoButtonType>;
        default: BoButtonType;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<BoSize>;
        default: BoSize;
    };
    prefixIcon: {
        type: StringConstructor;
        default: null;
    };
    suffixIcon: {
        type: StringConstructor;
        default: null;
    };
}, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: true;
    };
    variant: {
        type: PropType<BoButtonVariant>;
        default: BoButtonVariant;
    };
    type: {
        type: PropType<BoButtonType>;
        default: BoButtonType;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<BoSize>;
        default: BoSize;
    };
    prefixIcon: {
        type: StringConstructor;
        default: null;
    };
    suffixIcon: {
        type: StringConstructor;
        default: null;
    };
}>>, {
    variant: BoButtonVariant;
    type: BoButtonType;
    disabled: boolean;
    size: BoSize;
    prefixIcon: string;
    suffixIcon: string;
}, {}>;
export default _default;
