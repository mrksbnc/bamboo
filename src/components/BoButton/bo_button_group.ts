export enum BoButtonGroupSize {
	small = 'small',
	default = 'default',
	large = 'large',
}

export enum BoButtonGroupVariant {
	default = 'default',
	dark = 'dark',
	info = 'info',
	success = 'success',
	warning = 'warning',
	danger = 'danger',
}

export enum ButtonGroupEvent {
	/**
	 * @event select
	 * @description Emitted when one of the buttons in the group is clicked
	 * @emits `{ id: string | number, item: BoButtonGroupItem }` The id and the item of the selected button
	 */
	SELECT = 'select',
}
