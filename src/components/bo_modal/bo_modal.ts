export enum BoModalSize {
	SM = 'sm',
	MD = 'md',
	LG = 'lg',
	XL = 'xl',
	XXL = '2xl',
}

export type BoModalProps = {
	size?: BoModalSize
	closable?: boolean
	title?: string
	subtitle?: string
	showClose?: boolean
	widthInPx?: number
	widthInPercent?: number
	widthAsTailwindClass?: string
}
