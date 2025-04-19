export type BoCardPadding = {
	top: boolean
	right: boolean
	bottom: boolean
	left: boolean
}

export type BoCardProps = {
	padding?: BoCardPadding
	title?: string
	description?: string
	clickable?: boolean
	widthInPx?: number
	widthInPercent?: number
	widthAsTailwindClass?: string
}
