export interface BoModalWidthOptions {
	px?: number;
	percent?: number;
	tailwind?: string;
}

export interface BoModalProps {
	id?: string;
	title?: string;
	description?: string;
	showClose?: boolean;
	width?: BoModalWidthOptions;
}
