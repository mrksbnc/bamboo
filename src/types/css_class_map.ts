/**
 * An object that maps class names to their respective values.
 *
 * @template T - The type of keys in the map. `T extends string` ensures that the keys are strings.
 */
export declare type CssClassMap<T extends string> = Readonly<Record<T, string>>;
