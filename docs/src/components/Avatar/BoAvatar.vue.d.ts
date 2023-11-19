import { type PropType } from './vue/dist/vue.esm-bundler.js';
import { AvatarSize, AvatarType, AvatarVariant, type AvatarIndicatorProps } from '../../components/Avatar';
import type { AvatarInitialProps } from './types';
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    src: {
        type: StringConstructor;
        default: null;
    };
    initial: {
        type: StringConstructor;
        default: null;
    };
    type: {
        type: PropType<AvatarType>;
        default: () => AvatarType;
    };
    variant: {
        type: PropType<AvatarVariant>;
        default: () => AvatarVariant;
    };
    size: {
        type: PropType<AvatarSize>;
        default: () => AvatarSize;
    };
    indicatorProps: {
        type: PropType<AvatarIndicatorProps>;
        default: () => null;
    };
    initialProps: {
        type: PropType<AvatarInitialProps>;
        default: () => null;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    src: {
        type: StringConstructor;
        default: null;
    };
    initial: {
        type: StringConstructor;
        default: null;
    };
    type: {
        type: PropType<AvatarType>;
        default: () => AvatarType;
    };
    variant: {
        type: PropType<AvatarVariant>;
        default: () => AvatarVariant;
    };
    size: {
        type: PropType<AvatarSize>;
        default: () => AvatarSize;
    };
    indicatorProps: {
        type: PropType<AvatarIndicatorProps>;
        default: () => null;
    };
    initialProps: {
        type: PropType<AvatarInitialProps>;
        default: () => null;
    };
}>>, {
    initial: string;
    src: string;
    type: AvatarType;
    variant: AvatarVariant;
    size: AvatarSize;
    indicatorProps: AvatarIndicatorProps;
    initialProps: AvatarInitialProps;
}, {}>;
export default _default;
