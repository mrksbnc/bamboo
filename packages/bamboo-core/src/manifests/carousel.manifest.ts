import { CarouselManifest } from '../definitions/index.js';
export const CAROUSEL_MANIFEST = {
	meta: { name: 'Carousel', version: '1.0.0' },
	styles: {
		base: 'bo-carousel',
		viewport: 'bo-carousel__viewport',
		content: 'bo-carousel__content',
		item: 'bo-carousel__item',
		controls: 'bo-carousel__controls',
		button: 'bo-carousel__button',
		indicator: 'bo-carousel__indicator',
		indicatorActive: 'bo-carousel__indicator--active',
	},
	defaults: { loop: true, autoplay: false, interval: 5000, orientation: 'horizontal' },
} as const satisfies CarouselManifest;
