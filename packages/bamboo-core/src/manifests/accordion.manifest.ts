import { AccordionManifest } from '../definitions/index.js';
export const ACCORDION_MANIFEST = {
	meta: {
		name: 'Accordion',
		version: '1.0.0',
	},
	styles: {
		base: 'bo-accordion',
		item: 'bo-accordion__item',
		header: 'bo-accordion__header',
		trigger: 'bo-accordion__trigger',
		icon: 'bo-accordion__icon',
		content: 'bo-accordion__content',
		contentInner: 'bo-accordion__content-inner',
		contentBody: 'bo-accordion__content-body',
	},
	defaults: {
		multiple: false,
		collapsible: true,
	},
} as const satisfies AccordionManifest;
