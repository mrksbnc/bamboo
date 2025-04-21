import BoToast from './BoToast.vue';
import { toast } from './ToastService';
import type { BoToastProps, ToastOptions } from './bo-toast';
import { BoToastVariant } from './bo-toast';

export { BoToast, BoToastVariant, toast };
export type { BoToastProps, ToastOptions };

export default {
	BoToast,
	toast,
	BoToastVariant,
};
