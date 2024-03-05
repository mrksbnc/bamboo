import { type PropType } from '../../../../vue/dist/vue.esm-bundler.js';
import { BoButtonType, BoButtonVariant, type Icon } from '../..';
import { BoSize } from '../../../constants';
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
        type: PropType<Icon>;
        default: null;
    };
    suffixIcon: {
        type: PropType<Icon>;
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
        type: PropType<Icon>;
        default: null;
    };
    suffixIcon: {
        type: PropType<Icon>;
        default: null;
    };
}>>, {
    type: BoButtonType;
    size: BoSize;
    disabled: boolean;
    variant: BoButtonVariant;
    prefixIcon: Icon;
    suffixIcon: Icon;
}, {}>;
export default _default;
