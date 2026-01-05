import { BoButtonProps, BoButtonSizeStyle, BoButtonVariantStyle } from '../components/bo-button';
import { BoTailwindClassFactory } from '../core/bo-style';

export interface UseBoButton {
	construct: () => string;
}

export const useBoButton = (props: BoButtonProps): UseBoButton => {
	const factory = new BoTailwindClassFactory();

	function generateClasses(props: BoButtonProps): void {
		const variant = BoButtonVariantStyle[props.variant ?? 'primary'];
		const size = BoButtonSizeStyle[props.size ?? 'md'];

		factory.add(variant, size);
	}

	function construct(): string {
		generateClasses(props);
		return factory.build();
	}

	return {
		construct,
	};
};
