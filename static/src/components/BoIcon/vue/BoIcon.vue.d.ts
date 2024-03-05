import { type Icon } from '..';
import { BoSize } from '../../../constants';
import { type PropType } from '../../../../vue/dist/vue.esm-bundler.js';
declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    icon: {
        type: PropType<Icon>;
        required: true;
    };
    size: {
        type: PropType<BoSize>;
        default: () => BoSize;
    };
    color: {
        type: StringConstructor;
        default: () => string;
    };
}, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    icon: {
        type: PropType<Icon>;
        required: true;
    };
    size: {
        type: PropType<BoSize>;
        default: () => BoSize;
    };
    color: {
        type: StringConstructor;
        default: () => string;
    };
}>>, {
    size: BoSize;
    color: string;
}, {}>;
export default _default;
