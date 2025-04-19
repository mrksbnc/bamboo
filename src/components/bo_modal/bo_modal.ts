export enum BoModalSize {
	SM = 'sm',
	MD = 'md',
	LG = 'lg',
	XL = 'xl',
	XXL = '2xl',
}

export enum BoPaddingSize {
	SM = 'sm',
	MD = 'md',
	LG = 'lg',
	XL = 'xl',
}

export type BoModalProps = {
	size?: BoModalSize
	padding?: BoPaddingSize
	closable?: boolean
	title?: string
	subtitle?: string
	showClose?: boolean
	widthInPx?: number
	widthInPercent?: number
	widthAsTailwindClass?: string
	returnFocus?: boolean
}
