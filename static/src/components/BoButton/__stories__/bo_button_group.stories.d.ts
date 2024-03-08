import { BoButtonGroupVariant } from '../..';
import { BoButtonGroupSize, type BoButtonGroupItem } from '..';
import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
        items: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonGroupItem[]>;
            required: true;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonGroupSize>;
            default: import("../../..").BoSize;
        };
        variant: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonGroupVariant>;
            default: BoButtonGroupVariant;
        };
    }, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
        select: (payload: {
            index: number;
            item: BoButtonGroupItem;
        }) => void;
    }, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        items: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonGroupItem[]>;
            required: true;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonGroupSize>;
            default: import("../../..").BoSize;
        };
        variant: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonGroupVariant>;
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
    tags: string[];
    argTypes: {
        items: {
            description: string;
            table: {
                category: string;
                subcategory: string;
            };
            control: {
                type: string;
            };
        };
        variant: {
            options: BoButtonGroupVariant[];
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                    detail: string;
                };
            };
            defaultValue: BoButtonGroupVariant;
        };
        disabled: {
            type: "boolean";
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
                subcategory: string;
            };
            defaultValue: boolean;
        };
        size: {
            type: "string";
            options: BoButtonGroupSize[];
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                    detail: string;
                };
            };
            defaultValue: BoButtonGroupSize;
        };
    };
    args: {
        items: BoButtonGroupItem[];
        variant: BoButtonGroupVariant.default;
        size: BoButtonGroupSize.default;
        disabled: false;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Example: Story;
export declare const Disabled: Story;
export declare const Variants: Story;
export declare const Sizes: Story;
export declare const WithPrefixIcons: Story;
export declare const WithSuffixIcons: Story;
