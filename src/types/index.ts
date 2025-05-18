import type { StyleValue } from 'vue';

/**
 * Interface for creating styled elements with both inline styles and CSS classes
 */
export interface StyleConstruct {
	/**
	 * Inline styles to apply to the element
	 * Supports Vue's StyleValue type which can be an object, array, or string
	 */
	style: StyleValue;

	/**
	 * CSS class names to apply to the element
	 * Can be a space-separated string of class names
	 */
	class: string;
}

/**
 * Type utility that allows a type to be either its original type or null
 * @template T The type that can be nullable
 */
export type Nullable<T> = T | null;

export * from './component.js';
