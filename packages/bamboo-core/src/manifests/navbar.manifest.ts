import { NavbarManifest } from '../definitions/index.js';

export const NAVBAR_MANIFEST = {
	meta: {
		name: 'Navbar',
		version: '1.0.0',
	},
	styles: {
		outer: /*tw*/ 'w-full flex justify-center',
		shell:
			/*tw*/ 'flex w-full items-center justify-between gap-3 flex-wrap md:flex-nowrap transition-colors transition-shadow duration-200 min-h-14',
		text: /*tw*/ 'text-neutral-900 dark:text-neutral-50',
		sections: {
			brand: /*tw*/ 'flex items-center gap-2 min-w-0 shrink-0',
			nav: /*tw*/ 'flex grow items-center gap-3 min-w-0 flex-wrap md:flex-nowrap',
			actions: /*tw*/ 'flex items-center gap-2 shrink-0',
		},
		variant: {
			floating:
				/*tw*/ 'bg-white/80 dark:bg-neutral-900/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:dark:bg-neutral-900/60',
			solid: /*tw*/ 'bg-white dark:bg-neutral-950',
			minimal: /*tw*/ 'bg-transparent',
		},
		position: {
			static: /*tw*/ 'relative',
			sticky: /*tw*/ 'sticky z-40',
			fixed: /*tw*/ 'fixed inset-x-0 z-50',
		},
		padding: {
			none: /*tw*/ 'p-0',
			sm: /*tw*/ 'px-3 py-2',
			md: /*tw*/ 'px-4 py-3',
			lg: /*tw*/ 'px-6 py-4',
		},
		width: {
			full: /*tw*/ 'w-full',
			xl: /*tw*/ 'w-full max-w-screen-xl',
			content: /*tw*/ 'w-full max-w-5xl',
		},
		offset: {
			none: /*tw*/ '',
			sm: /*tw*/ 'top-2',
			md: /*tw*/ 'top-4',
			lg: /*tw*/ 'top-6',
		},
		rounded: /*tw*/ 'rounded-2xl',
		shadow: /*tw*/ 'shadow-lg shadow-black/5 dark:shadow-black/30',
		border: /*tw*/ 'border border-neutral-200/80 dark:border-neutral-800/70',
	},
	defaults: {
		role: 'navigation',
		variant: 'floating',
		position: 'sticky',
		padding: 'md',
		maxWidth: 'xl',
		offset: 'md',
		rounded: true,
		shadow: true,
		border: true,
	},
} as const satisfies NavbarManifest;
