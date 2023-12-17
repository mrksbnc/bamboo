import { type PropType } from './vue/dist/vue.esm-bundler.js';
import { SpinnerVariant, LoaderSize } from '../../../components/Loader';
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    variant: {
        type: PropType<SpinnerVariant>;
        default: () => SpinnerVariant;
    };
    size: {
        type: PropType<LoaderSize>;
        default: () => LoaderSize;
    };
    text: {
        type: StringConstructor;
        required: false;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    variant: {
        type: PropType<SpinnerVariant>;
        default: () => SpinnerVariant;
    };
    size: {
        type: PropType<LoaderSize>;
        default: () => LoaderSize;
    };
    text: {
        type: StringConstructor;
        required: false;
    };
}>>, {
    variant: SpinnerVariant;
    size: LoaderSize;
}, {}>;
export default _default;
