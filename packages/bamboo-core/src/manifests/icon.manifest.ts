import { BoIconSize, BoIconVariant } from '../components/bo-icon';

type BoIconSizeStyleMap = Record<BoIconSize, string>;
type BoIconVariantStyleMap = Record<BoIconVariant, string>;

interface IconManifest {
	base: string;
	size: BoIconSizeStyleMap;
	variant: BoIconVariantStyleMap;
	cursor: {
		default: string;
		clickable: string;
	};
}

export const ICON_MANIFEST: IconManifest = {
	base: /*tw*/ 'box-border inline-flex items-center justify-center',

	size: {
		xs: /*tw*/ 'size-3',
		sm: /*tw*/ 'size-3.5',
		default: /*tw*/ 'size-4',
		lg: /*tw*/ 'size-5',
		xl: /*tw*/ 'size-6',
	} as const satisfies BoIconSizeStyleMap,

	variant: {
		current: /*tw*/ 'text-current',
		inherit: /*tw*/ 'text-inherit',
		primary: /*tw*/ 'text-blue-500 dark:text-blue-400',
		secondary: /*tw*/ 'text-gray-500 dark:text-gray-400',
		success: /*tw*/ 'text-green-500 dark:text-green-400',
		warning: /*tw*/ 'text-yellow-500 dark:text-yellow-400',
		danger: /*tw*/ 'text-red-500 dark:text-red-400',
		white: /*tw*/ 'text-white',
		black: /*tw*/ 'text-black',
	} as const satisfies BoIconVariantStyleMap,

	cursor: {
		default: /*tw*/ 'cursor-auto',
		clickable: /*tw*/ 'cursor-pointer',
	},
} as const;
