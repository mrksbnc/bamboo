export type BoLoaderType = 'spinner' | 'ring';

export type BoLoaderTextPosition = 'top' | 'bottom' | 'before' | 'after';

export type BoLoaderSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BoLoaderVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'white';

export type BoLoaderSizeMap = Record<BoLoaderSize, string>;

export type BoLoaderVariantMap = Record<BoLoaderVariant, string>;

export const BO_LOADER_SIZE_MAP: BoLoaderSizeMap = {
	xs: /*tw*/ 'size-xs',
	sm: /*tw*/ 'size-sm',
	md: /*tw*/ 'size-md',
	lg: /*tw*/ 'size-lg',
	xl: /*tw*/ 'size-xl',
};

export const BO_LOADER_VARIANT_MAP: BoLoaderVariantMap = {
	primary: /*tw*/ 'blue-600',
	secondary: /*tw*/ 'neutral-600',
	success: /*tw*/ 'green-600',
	warning: /*tw*/ 'yellow-600',
	danger: /*tw*/ 'red-600',
	white: /*tw*/ 'white',
};
