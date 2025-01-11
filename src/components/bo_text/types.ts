import type {
	BoFontFamily,
	BoFontSize,
	BoFontWeight,
	BoTextAlign,
	BoTextColor,
	BoTextWhiteSpace,
} from './constants'

export type BoTextProps = {
	id?: string
	text: string
	size?: BoFontSize
	weight?: BoFontWeight
	fontFamily?: BoFontFamily
	whiteSpace?: BoTextWhiteSpace
	color?: BoTextColor
	customColor?: string
	cssClass?: string
	clickable?: boolean
	textAlign?: BoTextAlign
	selectable?: boolean
}
