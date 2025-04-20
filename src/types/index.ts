import type { StyleValue } from 'vue';

export interface StyleConstruct {
	style: StyleValue;
	class: string;
}

export type Nullable<T> = T | null;
