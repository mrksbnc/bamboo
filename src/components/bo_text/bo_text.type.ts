import type {
	BoFontFamily,
	BoFontSize,
	BoFontWeight,
	BoTextColor,
	BoTextWhiteSpace,
} from './bo_text.constant';

export type BoTextProps = {
	text: string;
	size?: BoFontSize;
	weight?: BoFontWeight;
	fontFamily?: BoFontFamily;
	whiteSpace?: BoTextWhiteSpace;
	color?: BoTextColor;
	customColor?: string;
	cssClass?: string;
	clickable?: boolean;
};
