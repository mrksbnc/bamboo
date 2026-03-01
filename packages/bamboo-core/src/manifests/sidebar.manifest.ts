import { SidebarManifest } from '../definitions/index.js';

export const SIDEBAR_MANIFEST = {
	meta: {
		name: 'Sidebar',
		version: '1.0.0',
	},
	styles: {
		outer: /*tw*/ 'relative flex flex-col flex-shrink-0 self-start',
		panel:
			/*tw*/ 'flex h-full flex-col overflow-hidden transition-[box-shadow,background-color,border-color] duration-200',
		text: /*tw*/ 'text-neutral-900 dark:text-neutral-50',
		header: /*tw*/ 'flex items-center gap-3',
		content: /*tw*/ 'flex grow flex-col gap-3',
		footer: /*tw*/ 'flex flex-col gap-2 pt-3',
		variant: {
			floating:
				/*tw*/ 'bg-white/80 dark:bg-neutral-900/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:dark:bg-neutral-900/60',
			solid: /*tw*/ 'bg-white dark:bg-neutral-950',
			minimal: /*tw*/ 'bg-transparent',
		},
		position: {
			static: /*tw*/ 'relative',
			sticky: /*tw*/ 'sticky',
			fixed: /*tw*/ 'fixed inset-y-0 z-40',
		},
		side: {
			left: /*tw*/ 'left-0',
			right: /*tw*/ 'right-0 ms-auto',
		},
		width: {
			narrow: /*tw*/ 'w-56',
			base: /*tw*/ 'w-64',
			wide: /*tw*/ 'w-72',
		},
		maxWidth: {
			none: /*tw*/ 'max-w-none',
			sm: /*tw*/ 'max-w-sm',
			md: /*tw*/ 'max-w-md',
			lg: /*tw*/ 'max-w-lg',
			xl: /*tw*/ 'max-w-xl',
		},
		collapsedWidth: {
			icon: /*tw*/ 'w-16',
			compact: /*tw*/ 'w-20',
		},
		padding: {
			none: /*tw*/ 'p-0',
			sm: /*tw*/ 'p-3',
			md: /*tw*/ 'p-4',
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
		scrollable: /*tw*/ 'overflow-y-auto',
	},
	defaults: {
		role: 'complementary',
		variant: 'floating',
		position: 'sticky',
		side: 'left',
		width: 'base',
		collapsedWidth: 'icon',
		collapsed: false,
		maxWidth: 'none',
		padding: 'md',
		offset: 'md',
		rounded: true,
		shadow: true,
		border: true,
		scrollable: true,
	},
} as const satisfies SidebarManifest;
