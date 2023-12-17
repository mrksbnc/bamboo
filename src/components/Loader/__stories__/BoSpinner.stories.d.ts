import { LoaderSize, SpinnerVariant } from '../../../components/Loader';
import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
        variant: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<SpinnerVariant>;
            default: () => SpinnerVariant;
        };
        size: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<LoaderSize>;
            default: () => LoaderSize;
        };
        text: {
            type: StringConstructor;
            required: false;
        };
    }, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        variant: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<SpinnerVariant>;
            default: () => SpinnerVariant;
        };
        size: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<LoaderSize>;
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
    tags: string[];
    argTypes: {
        size: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                    detail: string;
                };
            };
            control: {
                type: string;
            };
            options: LoaderSize[];
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
            };
            control: {
                type: string;
            };
            options: SpinnerVariant[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Example: Story;
export declare const WithText: Story;
