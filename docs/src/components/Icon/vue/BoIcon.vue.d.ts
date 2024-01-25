import { type Icon, IconSize } from '..';
import { type PropType } from '../../../../vue/dist/vue.esm-bundler.js';
declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    name: {
        type: PropType<Icon>;
        required: true;
    };
    size: {
        type: PropType<IconSize>;
        default: () => IconSize;
    };
}, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    name: {
        type: PropType<Icon>;
        required: true;
    };
    size: {
        type: PropType<IconSize>;
        default: () => IconSize;
    };
}>>, {
    size: IconSize;
}, {}>;
export default _default;
