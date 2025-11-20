import { BoSize } from '@/shared/size';

export interface BoPaginationProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** The current page number (1-indexed). */
	currentPage: number;
	/** The total number of pages. */
	totalPages: number;
	/** The size of the pagination. */
	size?: BoSize;
	/** Whether to show simple pagination (just prev/next with page info). */
	showSimple?: boolean;
	/** Maximum number of page buttons to show. */
	maxVisiblePages?: number;
	/** One or multiple css classes to be used for overriding the default styles on the element. */
	customCssClass?: string;
	/** Defines a string value that labels the current element. */
	ariaLabel?: string;
}
