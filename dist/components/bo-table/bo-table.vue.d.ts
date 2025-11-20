import { AriaLive } from '../../shared/accessibility';
import { BoSize } from '../../shared/size';
import { BoTableLoadDirection, BoTableProps } from './bo-table';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<`cell-${string}`, (_: {
        row: Record<string, unknown>;
        value: unknown;
    }) => any>>;
    refs: {
        topSentinelRef: HTMLTableRowElement;
        bottomSentinelRef: HTMLTableRowElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<BoTableProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    sort: (key: string, direction: "desc" | "asc" | null) => any;
    "row-click": (row: Record<string, unknown>, index: number) => any;
    "load-more": (direction: BoTableLoadDirection) => any;
}, string, import('vue').PublicProps, Readonly<BoTableProps> & Readonly<{
    onSort?: ((key: string, direction: "desc" | "asc" | null) => any) | undefined;
    "onRow-click"?: ((row: Record<string, unknown>, index: number) => any) | undefined;
    "onLoad-more"?: ((direction: BoTableLoadDirection) => any) | undefined;
}>, {
    id: string;
    dataTestId: string;
    size: BoSize;
    ariaLive: AriaLive;
    hoverable: boolean;
    bordered: boolean;
    striped: boolean;
    pinRows: boolean;
    loading: boolean;
    infiniteScroll: boolean;
    infiniteScrollLoading: boolean;
    infiniteScrollShimmerRows: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    topSentinelRef: HTMLTableRowElement;
    bottomSentinelRef: HTMLTableRowElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
