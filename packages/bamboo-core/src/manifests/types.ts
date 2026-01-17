export type TStyles = Record<string, string>;

export interface ComponentManifest<T, D> {
	meta: {
		name: string;
		version: string;
		description: string;
		category: 'form' | 'display' | 'feedback' | 'layout' | 'navigation' | 'data' | 'media';
		/** Component tags for searchability */
		tags?: string[];
	};
	styles: T;
	dataAttributes?: Record<string, string>;
	defaults?: D;
}
