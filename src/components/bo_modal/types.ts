import type { BoButtonVariant } from '@/components/bo_button';

export type BoAlertModalProps = {
	title?: string;
	content?: string;
	confirmButtonLabel?: string;
	confirmButtonVariant?: BoButtonVariant;
	cancelButtonLabel?: string;
	cancelButtonVariant?: BoButtonVariant;
};
