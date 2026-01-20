export interface ComponentManifest<T, D> {
	meta: {
		name: string;
		version: string;
	};
	styles: T;
	dataAttributes?: Record<string, string>;
	defaults?: D;
}
