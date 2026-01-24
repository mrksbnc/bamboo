import { CarouselManifest } from '../definitions/bo-carousel';

export const CAROUSEL_MANIFEST: CarouselManifest = {
	meta: {
		name: 'Carousel',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'relative w-full',

		viewport: {
			base: /*tw*/ 'overflow-hidden rounded-lg',

			orientation: {
				horizontal: /*tw*/ 'w-full',
				vertical: /*tw*/ 'h-96',
			},
		},

		container: {
			base: /*tw*/ 'flex transition-transform duration-300 ease-in-out',

			orientation: {
				horizontal: /*tw*/ 'flex-row',
				vertical: /*tw*/ 'flex-col',
			},
		},

		item: {
			base: /*tw*/ 'flex-shrink-0',

			orientation: {
				horizontal: /*tw*/ 'w-full',
				vertical: /*tw*/ 'h-full',
			},
		},

		controls: {
			base: /*tw*/ 'absolute inset-0 flex items-center justify-between p-4 pointer-events-none',

			arrow: {
				base: /*tw*/ 'pointer-events-auto flex items-center justify-center w-10 h-10 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed',

				orientation: {
					horizontal: /*tw*/ '',
					vertical: /*tw*/ 'rotate-90',
				},

				prev: {
					horizontal: /*tw*/ '',
					vertical: /*tw*/ '',
				},

				next: {
					horizontal: /*tw*/ '',
					vertical: /*tw*/ '',
				},
			},

			indicators: {
				base: /*tw*/ 'absolute flex space-x-2',

				orientation: {
					horizontal: /*tw*/ 'bottom-4 left-1/2 -translate-x-1/2',
					vertical: /*tw*/ 'right-4 top-1/2 -translate-y-1/2 flex-col space-x-0 space-y-2',
				},

				indicator:
					/*tw*/ 'w-3 h-3 bg-white/50 dark:bg-gray-400/50 rounded-full cursor-pointer transition-colors duration-200 hover:bg-white/80 dark:hover:bg-gray-400/80',
				active: /*tw*/ 'bg-white dark:bg-gray-200',
			},
		},
	},
	defaults: {
		modelValue: 0,
		orientation: 'horizontal',
		autoplay: false,
		interval: 3000,
		loop: true,
		showArrows: true,
		showIndicators: true,
		pauseOnHover: true,
		role: 'region',
	},
};
