import { computed, StyleValue } from 'vue';
import { ComponentStyleComposable } from './types';
import { useTailwind } from './use-tailwind';
import { BoButtonProps } from '../components/bo-button';

export interface UseBoButton extends ComponentStyleComposable {}

export const useBoButton = (props: BoButtonProps): UseBoButton => {
	const { merge } = useTailwind();

	const classValues = computed<string>(() => {
		return '';
	});

	const styleValues = computed<StyleValue>(() => {
		const style: StyleValue = {};

		return style;
	});

	return {
		classValues,
		styleValues,
	};
};
