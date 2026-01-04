export enum Theme {
	light = 'light',
	dark = 'dark',
	system = 'system',
}

export class ThemeService {
	private internalTheme: Theme = Theme.system;
	private static instance: ThemeService | null = null;

	private constructor() {
		this.applyTheme();
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
			if (this.internalTheme === Theme.system) {
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
			this.internalTheme === Theme.dark ||
			(this.internalTheme === Theme.system &&
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
		if (this.internalTheme === Theme.system) {
			const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			this.internalTheme = isDark ? Theme.light : Theme.dark;
		} else {
			this.internalTheme = this.internalTheme === Theme.light ? Theme.dark : Theme.light;
		}
		this.applyTheme();
	}
}
