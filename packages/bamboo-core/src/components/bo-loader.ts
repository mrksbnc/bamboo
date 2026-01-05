export type BoLoaderType = 'spinner' | 'ring';

export type BoLoaderTextPosition = 'top' | 'bottom' | 'before' | 'after';

export type BoLoaderSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BoLoaderVariant =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'white'
	| 'black'
	| 'current';

export type BoLoaderSizeMap = Record<BoLoaderSize, string>;

export type BoLoaderVariantMap = Record<BoLoaderVariant, string>;

export const BO_LOADER_SIZE_MAP: BoLoaderSizeMap = {
	xs: /*tw*/ 'size-3',
	sm: /*tw*/ 'size-3.5',
	md: /*tw*/ 'size-4',
	lg: /*tw*/ 'size-4.5',
	xl: /*tw*/ 'size-5',
};

export const BO_LOADER_VARIANT_MAP: BoLoaderVariantMap = {
	primary: /*tw*/ 'bg-blue-600',
	secondary: /*tw*/ 'bg-neutral-600',
	success: /*tw*/ 'bg-green-600',
	warning: /*tw*/ 'bg-yellow-600',
	danger: /*tw*/ 'bg-red-600',
	white: /*tw*/ 'bg-white',
	black: /*tw*/ 'bg-black',
	current: /*tw*/ 'bg-current',
};
