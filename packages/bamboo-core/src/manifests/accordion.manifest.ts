import { AccordionManifest } from '../definitions/index.js';
import { FOCUS_VISIBLE } from './shared.js';

export const ACCORDION_MANIFEST = {
	meta: {
		name: 'Accordion',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'flex w-full min-w-0 flex-col',
		item: /*tw*/ 'w-full min-w-0 border-b border-neutral-200 dark:border-neutral-800 last:border-b-0',
		header: /*tw*/ '!m-0 flex w-full min-w-0',
		trigger: /*tw*/ `group flex min-w-0 flex-1 items-start justify-between gap-4 rounded-md py-4 text-start text-sm font-medium text-neutral-900 dark:text-neutral-100 transition-all hover:underline disabled:pointer-events-none disabled:opacity-50 ${FOCUS_VISIBLE}`,
		icon: /*tw*/ 'pointer-events-none size-4 shrink-0 translate-y-0.5 text-neutral-500 dark:text-neutral-400 transition-transform duration-200 group-data-[state=open]:rotate-180',
		content:
			/*tw*/ 'grid w-full min-w-0 grid-rows-[minmax(0,1fr)] overflow-hidden text-sm text-neutral-500 dark:text-neutral-400 transition-[grid-template-rows] duration-200 ease-out data-[state=closed]:grid-rows-[minmax(0,0fr)] data-[state=open]:grid-rows-[minmax(0,1fr)] motion-reduce:transition-none',
		contentInner: /*tw*/ 'min-h-0 min-w-0 overflow-hidden',
		contentBody: /*tw*/ 'pt-0 pb-4',
	},
	defaults: {
		multiple: false,
		collapsible: true,
	},
} as const satisfies AccordionManifest;
