/** Components */

export {
	type BoButtonSize,
	type BoButtonVariant,
	type BoButtonProps,
	type BoButtonType,
	type BoButtonSizeStyleMap,
	type BoVariantStyleMap,
} from './components/bo-button.js';

export { type BoIconSize, type BoIconSizeStyleMap } from './components/bo-icon.js';

export { type Icon, ICON_REGISTRY, type IconRegistry } from './components/bo-icon-registry.js';

export {
	type BoLoaderTextPosition,
	type BoLoaderType,
	type BoLoaderSize,
	type BoLoaderVariantStyleMap,
	type BoLoaderSizeStyleMap,
	type BoLoaderVariant,
	type BoLoadingSpinnerProps,
} from './components/bo-loader.js';

export { type BoInputSize, type BoInputType } from './components/bo-input.js';

export {
	type BoTextAlign,
	type BoTextTransform,
	type BoTextVariant,
	type BoFontSize,
	type BoFontWeight,
	type BoTextProps,
	type BoTextVariantStyle,
	type BoFontSizeStyle,
	type BoTextWeightStyle,
	type BoTextMaxLines,
	type BoFontFamily,
	type BoTextWhiteSpace,
} from './components/bo-text.js';

/** Services */

export { IdentityService } from './services/identity-service.js';

/** Composables */

export { useColor, type UseColor } from './composables/use-color.js';
export { useBoText, type UseBoText } from './composables/use-text.js';
export { useBoButton, type UseBoButton } from './composables/use-button.js';
export { useBoIcon, type UseBoIcon } from './composables/use-icon.js';
export {
	useBoLoadingSpinner,
	type UseBoLoadingSpinner,
} from './composables/use-loading-spinner.js';
export { useTailwind, type UseTailwind } from './composables/use-tailwind.js';
