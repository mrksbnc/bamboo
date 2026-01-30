export { BO_ICON_REGISTRY } from './components/index.js';

export {
	// Avatar
	type BoAvatarSize,
	type BoAvatarKind,
	type BoAvatarVariant,
	type BoAvatarIndicatorPosition,
	type BoAvatarIndicatorKind,
	type BoAvatarColor,
	type BoAvatarIndicator,
	type BoAvatarProps,
	type AvatarManifest,

	// Badge
	type BoBadgeVariant,
	type BoBadgeKind,
	type BoBadgeShape,
	type BoBadgeSize,
	type BoBadgeProps,
	type BadgeManifest,

	// Button
	type BoButtonVariant,
	type BoButtonSize,
	type BoButtonKind,
	type BoButtonShape,
	type BoButtonProps,
	type ButtonManifest,

	// Button Group
	type BoButtonGroupOrientation,
	type BoButtonGroupProps,
	type ButtonGroupManifest,

	// Icon
	type Icon,
	type BoIconSize,
	type BoIconVariant,
	type BoIconProps,
	type BoIconRegistry,
	type IconManifest,

	// Input
	type BoInputType,
	type BoInputState,
	type BoInputProps,

	// Loader
	type BoLoaderSize,
	type BoLoaderType,
	type BoLoaderTextPosition,
	type BoLoaderVariant,

	// Loading Pulse
	type BoLoadingPulseStyleManifest,
	type LoadingPulseManifest,
	type BoLoadingPulseProps,

	// Loading Spinner
	type BoLoadingSpinnerProps,
	type BoLoadingSpinnerStyleManifest,
	type LoadingSpinnerManifest,

	// Text
	type BoFontFamily,
	type BoFontSize,
	type BoFontWeight,
	type BoTextAlign,
	type BoTextTransform,
	type BoTextLineClamp,
	type BoTextVariant,
	type BoTextWhiteSpace,
	type BoTextProps,
	type TextManifest,

	// Textarea
	type BoTextareaSize,
	type BoTextareaState,
	type BoTextareaVariant,
	type BoTextareaProps,

	// Tooltip
	type BoTooltipPlacement,
	type BoTooltipTrigger,
	type BoTooltipProps,
	type TooltipManifest,

	// Component Types
	type Booleanish,
	type ConditionalCssProperties,
	type BoCursor,
} from './definitions/index.js';

export {
	AVATAR_MANIFEST,
	BADGE_MANIFEST,
	BUTTON_MANIFEST,
	BUTTON_GROUP_MANIFEST,
	ICON_MANIFEST,
	INPUT_MANIFEST,
	LOADING_PULSE_MANIFEST,
	LOADING_SPINNER_MANIFEST,
	TEXT_MANIFEST,
	TEXTAREA_MANIFEST,
	TOOLTIP_MANIFEST,
	type ComponentManifest,
} from './manifests/index.js';

export {
	generateComponentId,
	generateDataTestId,
	mergeTwClasses,
	getValidOrFallbackColorFromStr,
} from './utils/index.js';
