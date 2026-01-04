export type Booleanish = boolean | 'true' | 'false';

export interface ConditionalCssProperties {
	[key: string]: Booleanish;
}
