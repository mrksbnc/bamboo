import { BoButtonVariant, BoIconButton } from '..';
import { Icon } from '../../BoIcon';
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
            default: BoSize;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        variant: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonVariant>;
            default: BoButtonVariant;
        };
    }, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        icon: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<Icon>;
            required: true;
        };
        size: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoSize>;
            default: BoSize;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        variant: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<BoButtonVariant>;
            default: BoButtonVariant;
        };
    }>>, {
        size: BoSize;
        disabled: boolean;
        variant: BoButtonVariant;
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
        variant: {
            options: BoButtonVariant[];
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
            defaultValue: BoButtonVariant;
        };
    };
    args: {
        icon: Icon.airplay;
    };
};
export default meta;
type Story = StoryObj<typeof BoIconButton>;
export declare const Example: Story;
export declare const Sizes: Story;
export declare const Variants: Story;
