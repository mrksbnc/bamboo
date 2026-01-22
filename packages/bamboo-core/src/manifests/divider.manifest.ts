import { DividerManifest } from '../definitions/bo-divider.js';

export const DIVIDER_MANIFEST: DividerManifest = {
	meta: {
		name: 'Divider',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'divider flex items-center whitespace-nowrap text-sm font-medium text-base-content/60 before:h-px before:flex-1 before:bg-base-content/20 after:h-px after:flex-1 after:bg-base-content/20',
		variants: {
			neutral: /*tw*/ 'text-neutral before:bg-neutral/20 after:bg-neutral/20',
			primary: /*tw*/ 'text-primary before:bg-primary/20 after:bg-primary/20',
			secondary: /*tw*/ 'text-secondary before:bg-secondary/20 after:bg-secondary/20',
			accent: /*tw*/ 'text-accent before:bg-accent/20 after:bg-accent/20',
			success: /*tw*/ 'text-success before:bg-success/20 after:bg-success/20',
			warning: /*tw*/ 'text-warning before:bg-warning/20 after:bg-warning/20',
			info: /*tw*/ 'text-info before:bg-info/20 after:bg-info/20',
			error: /*tw*/ 'text-error before:bg-error/20 after:bg-error/20',
		},
		orientations: {
			vertical: /*tw*/ 'my-4 before:mr-4 after:ml-4',
			horizontal:
				/*tw*/ 'mx-4 flex-col before:mb-4 after:mt-4 before:h-auto before:w-px after:h-auto after:w-px',
		},
		placements: {
			start: /*tw*/ 'before:flex-[0_0_1rem] after:flex-1',
			center: /*tw*/ 'before:flex-1 after:flex-1',
			end: /*tw*/ 'before:flex-1 after:flex-[0_0_1rem]',
		},
	},
	defaults: {
		variant: 'neutral',
		orientation: 'vertical',
		placement: 'center',
	},
};
