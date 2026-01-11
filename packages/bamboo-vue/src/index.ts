/** Force vite to bundle the base css with the component styles */
import './lib.css';

/** Component exports */

export {
	type BoButtonSize,
	type BoButtonVariant,
	type BoButtonProps,
	BoButton,
} from './components/bo-button/index.js';

export {
	type BoLoaderSize,
	type BoLoaderType,
	type BoLoaderTextPosition,
	type BoLoaderVariant,
	type BoLoadingSpinnerProps,
	BoLoadingSpinner,
} from './components/bo-loading-spinner/index.js';

export {
	BoIcon,
	type BoIconSize,
	type BoIconVariant,
	type BoIconProps,
} from './components/bo-icon/index.js';

export {
	type BoFontSize,
	type BoFontWeight,
	type BoFontFamily,
	type BoTextWhiteSpace,
	type BoTextVariant,
	type BoTextAlign,
	type BoTextTransform,
	type BoTextLineClamp,
	type BoTextProps,
	BoText,
} from './components/bo-text/index.js';
