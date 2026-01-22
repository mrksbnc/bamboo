export interface ComponentManifest<T, D> {
	meta: {
		name: string;
		version: string;
	};
	styles: T;
	defaults: D;
}
