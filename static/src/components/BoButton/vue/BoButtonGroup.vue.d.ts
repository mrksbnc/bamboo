import { BoButtonGroupSize, BoButtonGroupVariant, type BoButtonGroupItem } from '..';
import { type PropType } from '../../../../vue/dist/vue.esm-bundler.js';
import { BoSize } from '../../../constants';
declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    items: {
        type: PropType<BoButtonGroupItem[]>;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<BoButtonGroupSize>;
        default: BoSize;
    };
    variant: {
        type: PropType<BoButtonGroupVariant>;
        default: BoButtonGroupVariant;
    };
}, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    select: (payload: {
        index: number;
        item: BoButtonGroupItem;
    }) => void;
}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    items: {
        type: PropType<BoButtonGroupItem[]>;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<BoButtonGroupSize>;
        default: BoSize;
    };
    variant: {
        type: PropType<BoButtonGroupVariant>;
        default: BoButtonGroupVariant;
    };
}>> & {
    onSelect?: ((payload: {
        index: number;
        item: BoButtonGroupItem;
    }) => any) | undefined;
}, {
    size: BoButtonGroupSize;
    disabled: boolean;
    variant: BoButtonGroupVariant;
}, {}>;
export default _default;
