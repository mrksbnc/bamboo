export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
	SYSTEM = 'system',
}

export class ThemeService {
	private readonly theme: Theme = Theme.SYSTEM;
}
