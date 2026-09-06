import { HTMLAttributes } from 'vue';
import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';

export interface BoCarouselProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	loop?: boolean;
	autoplay?: boolean;
	interval?: number;
	orientation?: 'horizontal' | 'vertical';
	ariaLabel?: HTMLAttributes['aria-label'];
}

type BoCarouselManifestDefaults = ManifestDefaults<
	BoCarouselProps,
	'loop' | 'autoplay' | 'interval' | 'orientation'
>;

export interface BoCarouselStyleManifest {
	readonly base: 'bo-carousel';
	readonly viewport: 'bo-carousel__viewport';
	readonly content: 'bo-carousel__content';
	readonly item: 'bo-carousel__item';
	readonly controls: 'bo-carousel__controls';
	readonly button: 'bo-carousel__button';
	readonly indicator: 'bo-carousel__indicator';
	readonly indicatorActive: 'bo-carousel__indicator--active';
}

export type CarouselManifest = ComponentManifest<
	BoCarouselStyleManifest,
	BoCarouselManifestDefaults,
	'Carousel'
>;
