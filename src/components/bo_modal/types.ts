import type { BoButtonProps } from '@/components/bo_button';
import type { StyleValue } from 'vue';
import type { BoAlertModalAlignment, BoAlertModalVariant } from './constants';

export type BoAlertModalProps = {
	title?: string;
	content?: string;
	showCloseButton?: boolean;
	showCancelButton?: boolean;
	confirmButtonProps?: {
		onCLick: () => void;
		props: Partial<BoButtonProps>;
	};
	cancelButtonProps?: {
		onCLick: () => void;
		props: Partial<BoButtonProps>;
	};
	variant?: BoAlertModalVariant;
	alignment?: BoAlertModalAlignment;
	withIcon?: boolean;
};

export type BoSlotModalProps = {
	showCloseButton?: boolean;
	borderedHeader?: boolean;
	borderedFooter?: boolean;
	widthInPx?: number;
	widthInPercent?: number;
	widthAsTailwindClass?: string;
};

export type BoSlotModalStyleConstruct = {
	style: StyleValue;
	class: string;
};
