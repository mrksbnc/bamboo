import type {
	BoFontFamily,
	BoFontSize,
	BoFontWeight,
	BoTextWhiteSpace,
} from './bo_text.constant';

export type BoTextProps = {
	text: string;
	size?: BoFontSize;
	weight?: BoFontWeight;
	fontFamily?: BoFontFamily;
	whiteSpace?: BoTextWhiteSpace;
	cssClass?: string;
};
