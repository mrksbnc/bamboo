import { AvatarSize, AvatarType, AvatarVariant } from '../../../components/Avatar';
import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
        src: {
            type: StringConstructor;
            default: null;
        };
        initial: {
            type: StringConstructor;
            default: null;
        };
        type: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<AvatarType>;
            default: () => AvatarType;
        };
        variant: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<AvatarVariant>;
            default: () => AvatarVariant;
        };
        size: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<AvatarSize>;
            default: () => AvatarSize;
        };
        indicatorProps: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import('../../../components/Avatar').AvatarIndicatorProps>;
            default: () => null;
        };
        initialProps: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import('../../../components/Avatar').AvatarInitialProps>;
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
            type: import('./vue/dist/vue.esm-bundler.js').PropType<AvatarType>;
            default: () => AvatarType;
        };
        variant: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<AvatarVariant>;
            default: () => AvatarVariant;
        };
        size: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<AvatarSize>;
            default: () => AvatarSize;
        };
        indicatorProps: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import('../../../components/Avatar').AvatarIndicatorProps>;
            default: () => null;
        };
        initialProps: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import('../../../components/Avatar').AvatarInitialProps>;
            default: () => null;
        };
    }>>, {
        initial: string;
        src: string;
        type: AvatarType;
        variant: AvatarVariant;
        size: AvatarSize;
        indicatorProps: import('../../../components/Avatar').AvatarIndicatorProps;
        initialProps: import('../../../components/Avatar').AvatarInitialProps;
    }, {}>;
    tags: string[];
    argTypes: {
        src: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        initial: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
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
                    summary: AvatarType;
                };
            };
            control: {
                type: string;
            };
            options: AvatarType[];
        };
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
                    summary: AvatarVariant;
                };
            };
            control: {
                type: string;
            };
            options: AvatarVariant[];
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
                    summary: AvatarSize;
                };
            };
            control: {
                type: string;
            };
            options: AvatarSize[];
        };
        indicatorProps: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                    detail: string;
                };
                defaultValue: {
                    summary: null;
                };
            };
            control: {
                type: string;
            };
        };
        initialProps: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                    detail: string;
                };
                defaultValue: {
                    summary: null;
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
export declare const Rounded: Story;
export declare const Base: Story;
export declare const Flat: Story;
export declare const MultiSize: Story;
export declare const InitialsWithColor: Story;
