export type DeepReadonly<T> = T extends (...args: never[]) => unknown
	? T
	: T extends object
		? { readonly [K in keyof T]: DeepReadonly<T[K]> }
		: T;

export interface ManifestMeta<Name extends string = string> {
	readonly name: Name;
	readonly version: string;
}

export type ManifestDefaults<Props, Keys extends keyof Props> = Readonly<
	Required<Pick<Props, Keys>>
>;

export interface ComponentManifest<Styles, Defaults, Name extends string = string> {
	readonly meta: ManifestMeta<Name>;
	readonly styles: DeepReadonly<Styles>;
	readonly defaults: DeepReadonly<Defaults>;
}
