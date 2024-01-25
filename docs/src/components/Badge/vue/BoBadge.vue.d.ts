import { type PropType } from '../../../../vue/dist/vue.esm-bundler.js';
import { BadgeVariant, BadgeType, BadgeSize, BadgeForm } from '..';
declare const _default: __VLS_WithTemplateSlots<import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    variant: {
        type: PropType<BadgeVariant>;
        default: () => BadgeVariant;
    };
    form: {
        type: PropType<BadgeForm>;
        default: () => BadgeForm;
    };
    type: {
        type: PropType<BadgeType>;
        default: () => BadgeType;
    };
    size: {
        type: PropType<BadgeSize>;
        default: () => BadgeSize;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
}, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    variant: {
        type: PropType<BadgeVariant>;
        default: () => BadgeVariant;
    };
    form: {
        type: PropType<BadgeForm>;
        default: () => BadgeForm;
    };
    type: {
        type: PropType<BadgeType>;
        default: () => BadgeType;
    };
    size: {
        type: PropType<BadgeSize>;
        default: () => BadgeSize;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
}>>, {
    type: BadgeType;
    variant: BadgeVariant;
    size: BadgeSize;
    form: BadgeForm;
}, {}>, {
    prefix?(_: {}): any;
    body?(_: {}): any;
    suffix?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
