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

export {
	type BoInputSize,
	type BoInputType,
	type BoInputState,
	type BoInputVariant,
	type BoInputPill,
	type BoInputProps,
	BoInput,
} from './components/bo-input/index.js';

export {
	type BoTextareaSize,
	type BoTextareaState,
	type BoTextareaVariant,
	type BoTextareaProps,
	BoTextarea,
} from './components/bo-textarea/index.js';

export {
	type BoAvatarSize,
	type BoAvatarShape,
	type BoAvatarVariant,
	type BoAvatarType,
	type BoAvatarIndicatorPosition,
	type BoAvatarIndicatorStatus,
	type BoAvatarData,
	type BoAvatarColor,
	type BoAvatarIndicator,
	type BoAvatarProps,
	BoAvatar,
} from './components/bo-avatar/index.js';

export {
	type BoBadgeVariant,
	type BoBadgeType,
	type BoBadgeShape,
	type BoBadgeSize,
	type BoBadgeProps,
	BoBadge,
} from './components/bo-badge/index.js';
