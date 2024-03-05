import colors from 'tailwindcss/colors';
import type { DefaultColors } from 'tailwindcss/types/generated/colors';

export const BoColor: DefaultColors = {
	...colors,
} as const;
