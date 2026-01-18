import { SetupContext, ShallowRef, StyleValue } from 'vue';

export interface ComponentStyleComposable {
	classValues?: ShallowRef<string>;
	styleValues?: ShallowRef<StyleValue>;
	/**
	 * @throws Error in case of missing required props, slots or invalid props
	 * that would cause the component to fail to render.
	 */
	validateComponentOnMount: (slots: SetupContext['slots']) => void;
}
