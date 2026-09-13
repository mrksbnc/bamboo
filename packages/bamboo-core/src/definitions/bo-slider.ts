import { HTMLAttributes, InputHTMLAttributes } from 'vue';
import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';

export interface BoSliderProps {
	id?: HTMLInputElement['id'];
	dataTestId?: string;
	min?: number;
	max?: number;
	step?: number;
	disabled?: boolean;
	orientation?: 'horizontal' | 'vertical';
	name?: HTMLInputElement['name'];
	ariaLabel?: HTMLAttributes['aria-label'];
	ariaLabelledBy?: HTMLAttributes['aria-labelledby'];
	ariaDescribedBy?: HTMLAttributes['aria-describedby'];
	inputMode?: InputHTMLAttributes['inputmode'];
}

type BoSliderManifestDefaults = ManifestDefaults<
	BoSliderProps,
	'min' | 'max' | 'step' | 'orientation'
>;

export interface BoSliderStyleManifest {
	readonly base: 'bo-slider';
	readonly input: 'bo-slider__input';
	readonly track: 'bo-slider__track';
	readonly range: 'bo-slider__range';
	readonly thumb: 'bo-slider__thumb';
}

export type SliderManifest = ComponentManifest<
	BoSliderStyleManifest,
	BoSliderManifestDefaults,
	'Slider'
>;
