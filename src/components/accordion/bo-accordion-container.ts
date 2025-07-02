export interface BoAccordionContainerProps {
	/**
	 * The unique identifier for the accordion container.
	 */
	id?: string;

	/**
	 * Whether multiple accordions can be open at the same time.
	 */
	allowMultiple?: boolean;

	/**
	 * The ID of the accordion that should be open by default.
	 */
	defaultOpenItemId?: string;
}
