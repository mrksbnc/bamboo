/**
 * @description Events emitted by the `BoButtonGroup` component
 * @readonly
 */
export enum ButtonGroupEvent {
	/**
	 * @event select
	 * @description Emitted when one of the buttons in the group is clicked
	 * @emits `{ id: string | number, item: BoButtonGroupItem }` The id and the item of the selected button
	 */
	SELECT = 'select',
}
