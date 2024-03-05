import { Icon } from '..';
import { BoSize } from '../../../constants';
import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
        icon: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<Icon>;
            required: true;
        };
        size: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoSize>;
            default: () => BoSize;
        };
        color: {
            type: StringConstructor;
            default: () => string;
        };
    }, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        icon: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<Icon>;
            required: true;
        };
        size: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoSize>;
            default: () => BoSize;
        };
        color: {
            type: StringConstructor;
            default: () => string;
        };
    }>>, {
        size: BoSize;
        color: string;
    }, {}>;
    tags: string[];
    argTypes: {
        icon: {
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
                    summary: BoSize;
                };
            };
            control: {
                type: string;
            };
            options: BoSize[];
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
