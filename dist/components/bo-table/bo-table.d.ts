import { AriaLive } from '../../shared/accessibility';
import { BoSize } from '../../shared/size';
import { Component } from 'vue';
export declare enum BoTableLoadDirection {
    top = "top",
    bottom = "bottom"
}
export interface BoTableColumn {
    /** The key of the column (maps to data property) */
    key: string;
    /** The label/header text of the column */
    label: string;
    /** Optional width of the column */
    width?: string;
    /** Whether the column is sortable */
    sortable?: boolean;
    /** Custom alignment for the column */
    align?: 'left' | 'center' | 'right';
}
export interface BoTableProps {
    /** The id of the element. */
    id?: string;
    /** The data test id of the element. */
    dataTestId?: string;
    /** The columns configuration */
    columns: BoTableColumn[];
    /** The data rows */
    data: Record<string, unknown>[];
    /** Maximum height for the scrollable body */
    maxHeight?: string;
    /** Whether to show striped rows (zebra pattern) */
    striped?: boolean;
    /** Whether to show hover effect on rows */
    hoverable?: boolean;
    /** Size of the table (affects padding) */
    size?: BoSize;
    /** Whether to show borders */
    bordered?: boolean;
    /** Whether to pin header rows */
    pinRows?: boolean;
    /** Custom row component for rendering rows */
    rowComponent?: Component;
    /** Whether the table is loading */
    loading?: boolean;
    /** Empty state message */
    emptyMessage?: string;
    /** Enable infinite scroll */
    infiniteScroll?: boolean;
    /** Whether infinite scroll is loading more data */
    infiniteScrollLoading?: boolean;
    /** Number of shimmer rows to show during infinite scroll loading */
    infiniteScrollShimmerRows?: number;
    /** One or multiple css classes to be used for overriding the default styles on the element. */
    customCssClass?: string;
    /** The role of the element. */
    role?: string;
    /** Defines a string value that labels the current element. */
    ariaLabel?: string;
    /** Reference to an element that labels the current element. */
    ariaLabelledBy?: string;
    /** Identifies the element (or elements) that describes the object. */
    ariaDescribedBy?: string;
    /** Indicates that an element will be updated, and describes the types of updates the user agents,
     * assistive technologies, and user can expect from the live region.
     */
    ariaLive?: AriaLive;
}
