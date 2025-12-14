export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
	SYSTEM = 'system',
}

export class ThemeService {
	private internalTheme: Theme = Theme.SYSTEM;
	private static instance: ThemeService | null = null;

	private constructor() {
		this.applyTheme();
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
			if (this.internalTheme === Theme.SYSTEM) {
				this.applyTheme();
			}
		});
	}

	static init(): ThemeService {
		if (!this.instance) {
			this.instance = new ThemeService();
		}
		return this.instance;
	}

	private applyTheme(): void {
		const isDark =
			this.internalTheme === Theme.DARK ||
			(this.internalTheme === Theme.SYSTEM &&
				window.matchMedia('(prefers-color-scheme: dark)').matches);
		document.documentElement.classList.toggle('dark', isDark);
	}

	get theme(): Theme {
		return this.internalTheme;
	}

	onSetTheme(theme: Theme): void {
		this.internalTheme = theme;
		this.applyTheme();
	}

	onThemeToggle(): void {
		if (this.internalTheme === Theme.SYSTEM) {
			const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			this.internalTheme = isDark ? Theme.LIGHT : Theme.DARK;
		} else {
			this.internalTheme = this.internalTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
		}
		this.applyTheme();
	}
}
