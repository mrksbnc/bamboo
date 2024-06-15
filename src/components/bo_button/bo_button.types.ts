import type { Icon } from '@/components/bo_icon';
import type { BoSize } from '@/global';
import type { Ref } from 'vue';
import type { BoButtonType, BoButtonVariant } from './bo_button.constants';

export type UseBoButtonCompoableArgs = {
	label: Ref<string>;
	variant: Ref<BoButtonVariant>;
	type: Ref<BoButtonType>;
	disabled: Ref<boolean>;
	size: Ref<BoSize>;
	prefixIcon: Ref<Icon | null | undefined>;
	suffixIcon: Ref<Icon | null | undefined>;
};
