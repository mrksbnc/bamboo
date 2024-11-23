import type {
	BoFontFamily,
	BoFontSize,
	BoFontWeight,
	BoTextWhiteSpace,
} from './bo_text.constants';

export type BoTextProps = {
	text: string;
	size?: BoFontSize;
	maxLines?: number;
	weight?: BoFontWeight;
	fontFamily?: BoFontFamily;
	whiteSpace?: BoTextWhiteSpace;
	cssClass?: string;
};
