/**
 * ARIA live region politeness levels
 * Controls how assertive screen readers should be when announcing updates
 */
export enum BoAriaLive {
	/**
	 * Updates are announced in a polite manner, not interrupting current tasks
	 */
	polite = 'polite',
	/**
	 * Updates are announced immediately, potentially interrupting other announcements
	 */
	assertive = 'assertive',
	/**
	 * Updates are not announced by screen readers
	 */
	off = 'off',
}
