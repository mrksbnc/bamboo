export type BoModalProps = {
	/**
	 * The unique identifier for the modal
	 */
	id: string;
	/**
	 * The title of the modal
	 */
	title?: string;
	/**
	 * The size of the modal
	 */
	size?: BoModalSize;
	/**
	 * Whether to close the modal when clicking on the backdrop
	 */
	closeOnBackdropClick?: boolean;
	/**
	 * Whether the modal is open or not
	 */
	isOpen?: boolean;
};

export enum BoModalSize {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
	xxl = 'xxl',
}
