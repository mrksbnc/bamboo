import type { Icon } from '@/components/icon/bo-icon.js';
import { BoSize } from '@/shared/bo-size.js';
import { BoDropdownItemProps } from './base/dropdown-defaults.js';

export interface BoDropdownProps<T = BoDropdownItemProps> {
	/** Unique ID for the dropdown */
	id?: string;
	/** Text to display in the trigger button */
	defaultTriggerText?: string;
	/** Whether the dropdown is disabled */
	disabled?: boolean;
	/** Size of the dropdown menu */
	size?: BoSize;
	/** Custom icon for the dropdown trigger */
	triggerIcon?: Icon;
	/** Whether the dropdown menu is open */
	open?: boolean;
	/** Items to display in the dropdown menu */
	items?: T[];
	/** Whether the dropdown menu should close when clicking outside */
	closeOnClickOutside?: boolean;
	/** Whether the dropdown menu should close when selecting an item */
	closeOnSelect?: boolean;
}
