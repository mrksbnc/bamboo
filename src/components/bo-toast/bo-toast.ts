export enum BoToastType {
	success = 'success',
	error = 'error',
	warning = 'warning',
	info = 'info',
}

export enum BoToastPosition {
	topLeft = 'top-left',
	topRight = 'top-right',
	bottomLeft = 'bottom-left',
	bottomRight = 'bottom-right',
}

export interface BoToastProps {
	title: string;
	message: string;
	type?: BoToastType;
	duration?: number;
	visible?: boolean;
	autoClose?: boolean;
	position?: BoToastPosition;
}
