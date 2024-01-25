import { HTMLAutocompleteAttribute, HTMLInputType, InputSize } from '..';
import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
        id: {
            type: StringConstructor;
            default: () => string;
        };
        label: {
            type: StringConstructor;
            required: false;
        };
        modelValue: {
            type: StringConstructor;
            required: true;
        };
        type: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<HTMLInputType>;
            default: () => HTMLInputType;
            validator: (value: HTMLInputType) => boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: {
            type: StringConstructor;
            required: false;
        };
        hint: {
            type: StringConstructor;
            requited: boolean;
        };
        isValid: {
            type: BooleanConstructor;
            default: boolean;
        };
        errorMsg: {
            type: StringConstructor;
            required: false;
        };
        isLoading: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<InputSize>;
            default: () => InputSize;
        };
        autocomplete: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<HTMLAutocompleteAttribute>;
            default: () => HTMLAutocompleteAttribute;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
        focus: () => void;
        blur: (value: Event) => void;
        "update:modelValue": (value: string | null) => void;
        change: (value: string | null) => void;
    }, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        id: {
            type: StringConstructor;
            default: () => string;
        };
        label: {
            type: StringConstructor;
            required: false;
        };
        modelValue: {
            type: StringConstructor;
            required: true;
        };
        type: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<HTMLInputType>;
            default: () => HTMLInputType;
            validator: (value: HTMLInputType) => boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: {
            type: StringConstructor;
            required: false;
        };
        hint: {
            type: StringConstructor;
            requited: boolean;
        };
        isValid: {
            type: BooleanConstructor;
            default: boolean;
        };
        errorMsg: {
            type: StringConstructor;
            required: false;
        };
        isLoading: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<InputSize>;
            default: () => InputSize;
        };
        autocomplete: {
            type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<HTMLAutocompleteAttribute>;
            default: () => HTMLAutocompleteAttribute;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onFocus?: (() => any) | undefined;
        onBlur?: ((value: Event) => any) | undefined;
        onChange?: ((value: string | null) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | null) => any) | undefined;
    }, {
        type: HTMLInputType;
        size: InputSize;
        id: string;
        disabled: boolean;
        isValid: boolean;
        isLoading: boolean;
        autocomplete: HTMLAutocompleteAttribute;
        readonly: boolean;
    }, {}>;
    tags: string[];
    argTypes: {
        id: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                    defaultValue: {
                        summary: string;
                    };
                };
            };
            control: {
                type: string;
            };
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
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        modelValue: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                };
            };
            defaultValue: {
                summary: undefined;
            };
            type: "string";
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
                    summary: HTMLInputType;
                };
            };
            control: {
                type: string;
            };
            options: HTMLInputType[];
        };
        disabled: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                };
            };
            defaultValue: {
                summary: boolean;
            };
            type: "boolean";
            control: {
                type: string;
            };
        };
        placeholder: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                };
            };
            defaultValue: {
                summary: undefined;
            };
            type: "string";
            control: {
                type: string;
            };
        };
        hint: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                };
            };
            defaultValue: {
                summary: boolean;
            };
            type: "string";
            control: {
                type: string;
            };
        };
        isValid: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                };
            };
            defaultValue: {
                summary: boolean;
            };
            type: "boolean";
            control: {
                type: string;
            };
        };
        errorMsg: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                };
            };
            defaultValue: {
                summary: undefined;
            };
            type: "string";
            control: {
                type: string;
            };
        };
        isLoading: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                };
            };
            defaultValue: {
                summary: boolean;
            };
            type: "boolean";
            control: {
                type: string;
            };
        };
        size: {
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                    detail: string;
                };
                defaultValue: {
                    summary: InputSize;
                };
            };
            defaultValue: {
                summary: InputSize;
            };
            type: "string";
            control: {
                type: string;
            };
            options: InputSize[];
        };
        autocomplete: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                    detail: string;
                };
            };
            defaultValue: {
                summary: HTMLAutocompleteAttribute;
            };
            control: {
                type: string;
            };
            options: HTMLAutocompleteAttribute[];
        };
        readonly: {
            description: string;
            table: {
                category: string;
                subcategory: string;
                type: {
                    summary: string;
                };
            };
            defaultValue: {
                summary: boolean;
            };
            type: "boolean";
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Example: Story;
