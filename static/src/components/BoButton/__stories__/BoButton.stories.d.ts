import { BoButtonVariant } from '../..';
import { BoButtonType } from '..';
import { BoSize } from '../../../enums';
import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
        label: {
            type: StringConstructor;
            required: true;
        };
        variant: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonVariant>;
            default: BoButtonVariant;
        };
        type: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonType>;
            default: BoButtonType;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoSize>;
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
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonVariant>;
            default: BoButtonVariant;
        };
        type: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonType>;
            default: BoButtonType;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoSize>;
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
    tags: string[];
    argTypes: {
        label: {
            type: "string";
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
                subcategory: string;
            };
        };
        variant: {
            type: "string";
            options: BoButtonVariant[];
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
                subcategory: string;
            };
            defaultValue: BoButtonVariant;
        };
        type: {
            type: "string";
            options: BoButtonType[];
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
                subcategory: string;
            };
            defaultValue: BoButtonType;
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
            options: BoSize[];
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
                subcategory: string;
            };
            defaultValue: BoSize;
        };
        prefixIcon: {
            type: "string";
            description: string;
            control: {
                type: string;
            };
            defaultValue: null;
            table: {
                category: string;
                subcategory: string;
            };
        };
        suffixIcon: {
            type: "string";
            description: string;
            control: {
                type: string;
            };
            defaultValue: null;
            table: {
                category: string;
                subcategory: string;
            };
        };
    };
    args: {
        variant: BoButtonVariant.primary;
        label: string;
        size: BoSize.default;
        disabled: false;
        type: BoButtonType.default;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Example: Story;
export declare const Sizes: {
    render: () => {
        components: {
            BoButton: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
                label: {
                    type: StringConstructor;
                    required: true;
                };
                variant: {
                    type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonVariant>;
                    default: BoButtonVariant;
                };
                type: {
                    type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonType>;
                    default: BoButtonType;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                size: {
                    type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoSize>;
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
                    type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonVariant>;
                    default: BoButtonVariant;
                };
                type: {
                    type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonType>;
                    default: BoButtonType;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                size: {
                    type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoSize>;
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
        };
        template: string;
    };
};
export declare const Variants: {
    render: () => {
        components: {
            BoButton: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
                label: {
                    type: StringConstructor;
                    required: true;
                };
                variant: {
                    type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonVariant>;
                    default: BoButtonVariant;
                };
                type: {
                    type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonType>;
                    default: BoButtonType;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                size: {
                    type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoSize>;
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
                    type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonVariant>;
                    default: BoButtonVariant;
                };
                type: {
                    type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonType>;
                    default: BoButtonType;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                size: {
                    type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoSize>;
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
        };
        template: string;
    };
};
