import type { Icon } from '@/components/bo-icon';

export type TabVariant = 'underline' | 'pills' | 'boxed';

export interface TabItem {
	/** The unique value for the tab. */
	value: string;
	/** The label to display. */
	label: string;
	/** Optional icon. */
	icon?: Icon;
	/** Optional badge content. */
	badge?: string | number;
	/** Whether the tab is disabled. */
	disabled?: boolean;
	/** Custom color for the tab (CSS variable, hex, rgb, rgba). */
	customColor?: string;
}

export interface BoTabsProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** The currently active tab value. */
	modelValue: string;
	/** Array of tab items. */
	tabs: TabItem[];
	/** Visual variant of the tabs. */
	variant?: TabVariant;
	/** One or multiple css classes to be used for overriding the default styles on the element. */
	customCssClass?: string;
}

export interface BoTabPanelProps {
	/** The value that matches the tab. */
	value: string;
}
