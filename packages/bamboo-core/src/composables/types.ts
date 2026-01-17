import { ShallowRef, StyleValue } from 'vue';

export interface ComponentStyleComposable {
	classValues?: ShallowRef<string>;
	styleValues?: ShallowRef<StyleValue>;
}
