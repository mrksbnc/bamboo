import { BadgeForm, BadgeSize, BadgeType, BadgeVariant } from '..';
import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('../../../../vue/dist/vue.esm-bundler.js').CreateComponentPublicInstance<Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            variant: {
                type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BadgeVariant>;
                default: () => BadgeVariant;
            };
            form: {
                type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BadgeForm>;
                default: () => BadgeForm;
            };
            type: {
                type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BadgeType>;
                default: () => BadgeType;
            };
            size: {
                type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BadgeSize>;
                default: () => BadgeSize;
            };
            label: {
                type: StringConstructor;
                required: false;
            };
        }>>, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, import('../../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps & Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            variant: {
                type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BadgeVariant>;
                default: () => BadgeVariant;
            };
            form: {
                type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BadgeForm>;
                default: () => BadgeForm;
            };
            type: {
                type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BadgeType>;
                default: () => BadgeType;
            };
            size: {
                type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BadgeSize>;
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
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            variant: {
                type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BadgeVariant>;
                default: () => BadgeVariant;
            };
            form: {
                type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BadgeForm>;
                default: () => BadgeForm;
            };
            type: {
                type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BadgeType>;
                default: () => BadgeType;
            };
            size: {
                type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BadgeSize>;
                default: () => BadgeSize;
            };
            label: {
                type: StringConstructor;
                required: false;
            };
        }>>, {}, {}, {}, {}, {
            type: BadgeType;
            variant: BadgeVariant;
            size: BadgeSize;
            form: BadgeForm;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsBase<Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        variant: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BadgeVariant>;
            default: () => BadgeVariant;
        };
        form: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BadgeForm>;
            default: () => BadgeForm;
        };
        type: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BadgeType>;
            default: () => BadgeType;
        };
        size: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BadgeSize>;
            default: () => BadgeSize;
        };
        label: {
            type: StringConstructor;
            required: false;
        };
    }>>, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, {
        type: BadgeType;
        variant: BadgeVariant;
        size: BadgeSize;
        form: BadgeForm;
    }, {}, string, {}> & import('../../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps & (new () => {
        $slots: {
            prefix?(_: {}): any;
            body?(_: {}): any;
            suffix?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        variant: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                    detail: string;
                };
                defaultValue: {
                    summary: BadgeVariant;
                };
            };
            control: {
                type: string;
            };
            options: BadgeVariant[];
        };
        form: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                    detail: string;
                };
                defaultValue: {
                    summary: BadgeForm;
                };
            };
            control: {
                type: string;
            };
            options: BadgeForm[];
        };
        type: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                    detail: string;
                };
                defaultValue: {
                    summary: BadgeType;
                };
            };
            control: {
                type: string;
            };
            options: BadgeType[];
        };
        size: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                    detail: string;
                };
                defaultValue: {
                    summary: BadgeSize;
                };
            };
            control: {
                type: string;
            };
            options: BadgeSize[];
        };
        label: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: undefined;
                };
            };
            control: {
                type: string;
            };
        };
        prefix: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: undefined;
                };
            };
            control: {
                type: string;
            };
        };
        body: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: undefined;
                };
            };
            control: {
                type: string;
            };
        };
        suffix: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: undefined;
                };
            };
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Example: Story;
export declare const Filled: Story;
export declare const Outline: Story;
export declare const Sizes: Story;
export declare const Prefix: Story;
export declare const Body: Story;
export declare const Suffix: Story;
