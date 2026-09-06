import { SliderManifest } from '../definitions/index.js';
export const SLIDER_MANIFEST = {
	meta: { name: 'Slider', version: '1.0.0' },
	styles: {
		base: 'bo-slider',
		input: 'bo-slider__input',
		track: 'bo-slider__track',
		range: 'bo-slider__range',
		thumb: 'bo-slider__thumb',
	},
	defaults: { min: 0, max: 100, step: 1, orientation: 'horizontal' },
} as const satisfies SliderManifest;
