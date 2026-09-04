/** Shared style maps used by component manifests. */
export const RADIUS = {
	none: /*tw*/ 'rounded-none',
	sm: /*tw*/ 'rounded-sm',
	md: /*tw*/ 'rounded-md',
	lg: /*tw*/ 'rounded-lg',
	xl: /*tw*/ 'rounded-xl',
	full: /*tw*/ 'rounded-full',
} as const;

export const FOCUS_VISIBLE =
	/*tw*/ 'outline-none focus-visible:border-blue-500 focus-visible:ring-[3px] focus-visible:ring-blue-500/50 dark:focus-visible:border-blue-400 dark:focus-visible:ring-blue-400/50';

export const VARIANT = {
	primary: {
		text: /*tw*/ 'text-blue-600 dark:text-blue-400',
	},
	warning: {
		text: /*tw*/ 'text-yellow-700 dark:text-yellow-400',
	},
	destructive: {
		text: /*tw*/ 'text-red-600 dark:text-red-400',
	},
} as const;
