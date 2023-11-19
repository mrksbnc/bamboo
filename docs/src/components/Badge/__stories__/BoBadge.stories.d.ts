import { BadgeForm, BadgeSize, BadgeType, BadgeVariant } from '../../../components/Badge';
import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): {
            $: import('./vue/dist/vue.esm-bundler.js').ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                type: BadgeType;
                variant: BadgeVariant;
                size: BadgeSize;
                form: BadgeForm;
            }> & Omit<{
                readonly type: BadgeType;
                readonly variant: BadgeVariant;
                readonly size: BadgeSize;
                readonly form: BadgeForm;
                readonly label?: string | undefined;
            } & import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps & Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
                variant: {
                    type: import('./vue/dist/vue.esm-bundler.js').PropType<BadgeVariant>;
                    default: () => BadgeVariant;
                };
                form: {
                    type: import('./vue/dist/vue.esm-bundler.js').PropType<BadgeForm>;
                    default: () => BadgeForm;
                };
                type: {
                    type: import('./vue/dist/vue.esm-bundler.js').PropType<BadgeType>;
                    default: () => BadgeType;
                };
                size: {
                    type: import('./vue/dist/vue.esm-bundler.js').PropType<BadgeSize>;
                    default: () => BadgeSize;
                };
                label: {
                    type: StringConstructor;
                    required: false;
                };
            }>>, "type" | "variant" | "size" | "form">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import('./vue/dist/vue.esm-bundler.js').Slot<any> | undefined;
            }>;
            $root: import('./vue/dist/vue.esm-bundler.js').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
            $parent: import('./vue/dist/vue.esm-bundler.js').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import('./vue/dist/vue.esm-bundler.js').ComponentOptionsBase<Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
                variant: {
                    type: import('./vue/dist/vue.esm-bundler.js').PropType<BadgeVariant>;
                    default: () => BadgeVariant;
                };
                form: {
                    type: import('./vue/dist/vue.esm-bundler.js').PropType<BadgeForm>;
                    default: () => BadgeForm;
                };
                type: {
                    type: import('./vue/dist/vue.esm-bundler.js').PropType<BadgeType>;
                    default: () => BadgeType;
                };
                size: {
                    type: import('./vue/dist/vue.esm-bundler.js').PropType<BadgeSize>;
                    default: () => BadgeSize;
                };
                label: {
                    type: StringConstructor;
                    required: false;
                };
            }>>, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, {
                type: BadgeType;
                variant: BadgeVariant;
                size: BadgeSize;
                form: BadgeForm;
            }, {}, string, {}> & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                created?: ((() => void) | (() => void)[]) | undefined;
                beforeMount?: ((() => void) | (() => void)[]) | undefined;
                mounted?: ((() => void) | (() => void)[]) | undefined;
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                updated?: ((() => void) | (() => void)[]) | undefined;
                activated?: ((() => void) | (() => void)[]) | undefined;
                deactivated?: ((() => void) | (() => void)[]) | undefined;
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                destroyed?: ((() => void) | (() => void)[]) | undefined;
                unmounted?: ((() => void) | (() => void)[]) | undefined;
                renderTracked?: (((e: import('./vue/dist/vue.esm-bundler.js').DebuggerEvent) => void) | ((e: import('./vue/dist/vue.esm-bundler.js').DebuggerEvent) => void)[]) | undefined;
                renderTriggered?: (((e: import('./vue/dist/vue.esm-bundler.js').DebuggerEvent) => void) | ((e: import('./vue/dist/vue.esm-bundler.js').DebuggerEvent) => void)[]) | undefined;
                errorCaptured?: (((err: unknown, instance: import('./vue/dist/vue.esm-bundler.js').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import('./vue/dist/vue.esm-bundler.js').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('./vue/dist/vue.esm-bundler.js').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import('./vue/dist/vue.esm-bundler.js').WatchOptions<boolean> | undefined): import('./vue/dist/vue.esm-bundler.js').WatchStopHandle;
        } & Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            variant: {
                type: import('./vue/dist/vue.esm-bundler.js').PropType<BadgeVariant>;
                default: () => BadgeVariant;
            };
            form: {
                type: import('./vue/dist/vue.esm-bundler.js').PropType<BadgeForm>;
                default: () => BadgeForm;
            };
            type: {
                type: import('./vue/dist/vue.esm-bundler.js').PropType<BadgeType>;
                default: () => BadgeType;
            };
            size: {
                type: import('./vue/dist/vue.esm-bundler.js').PropType<BadgeSize>;
                default: () => BadgeSize;
            };
            label: {
                type: StringConstructor;
                required: false;
            };
        }>> & import('./vue/dist/vue.esm-bundler.js').ShallowUnwrapRef<{}> & {} & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProperties & {};
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import('./vue/dist/vue.esm-bundler.js').ComponentOptionsBase<Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        variant: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<BadgeVariant>;
            default: () => BadgeVariant;
        };
        form: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<BadgeForm>;
            default: () => BadgeForm;
        };
        type: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<BadgeType>;
            default: () => BadgeType;
        };
        size: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<BadgeSize>;
            default: () => BadgeSize;
        };
        label: {
            type: StringConstructor;
            required: false;
        };
    }>>, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, {
        type: BadgeType;
        variant: BadgeVariant;
        size: BadgeSize;
        form: BadgeForm;
    }, {}, string, {}> & import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps & (new () => {
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
