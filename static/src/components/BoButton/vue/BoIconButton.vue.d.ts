import { type Icon } from '../../BoIcon';
import { BoSize } from '../../../constants';
import { type PropType } from '../../../../vue/dist/vue.esm-bundler.js';
import { BoButtonVariant, BoIconButtonType } from '..';
declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    icon: {
        type: PropType<Icon>;
        required: true;
    };
    size: {
        type: PropType<BoSize>;
        default: BoSize;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    variant: {
        type: PropType<BoButtonVariant>;
        default: BoButtonVariant;
    };
    type: {
        type: PropType<BoIconButtonType>;
        default: BoIconButtonType;
    };
}, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    icon: {
        type: PropType<Icon>;
        required: true;
    };
    size: {
        type: PropType<BoSize>;
        default: BoSize;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    variant: {
        type: PropType<BoButtonVariant>;
        default: BoButtonVariant;
    };
    type: {
        type: PropType<BoIconButtonType>;
        default: BoIconButtonType;
    };
}>>, {
    type: BoIconButtonType;
    size: BoSize;
    disabled: boolean;
    variant: BoButtonVariant;
}, {}>;
export default _default;
