import { Icon, IconSize } from '..';
import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
        name: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<Icon>;
            required: true;
        };
        size: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<IconSize>;
            default: () => IconSize;
        };
    }, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        name: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<Icon>;
            required: true;
        };
        size: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<IconSize>;
            default: () => IconSize;
        };
    }>>, {
        size: IconSize;
    }, {}>;
    tags: string[];
    argTypes: {
        name: {
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
            options: Icon[];
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
                    summary: IconSize;
                };
            };
            control: {
                type: string;
            };
            options: IconSize[];
        };
        color: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
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
