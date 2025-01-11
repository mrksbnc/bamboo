export type BoDividerProps = {
	id?: string;
	variant?: BoDividerVariant;
	colorHex?: string;
	tailwindColor?: string;
};

export enum BoDividerVariant {
	default = 'default',
	dotted = 'dotted',
	dashed = 'dashed',
}
