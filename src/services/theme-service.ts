export interface BoThemeService {
	/**
	 * The current theme
	 */
	theme: Theme;
	/**
	 * Whether the current theme is dark
	 */
	isDarkMode: boolean;
	/**
	 * Whether the system is in dark mode
	 */
	isSystemDarkMode: boolean;
	/**
	 * Toggles the current theme
	 */
	toggleTheme: (theme: Theme) => void;
	/**
	 * Initializes the theme
	 */
	initTheme: () => void;
}

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
	SYSTEM = 'system',
}

const THEME_KEY = 'bamboo-theme' as const;
const DARK_MODE_MEDIA_QUERY = '(prefers-color-scheme: dark)' as const;

let instance: ThemeService | null = null;

export class ThemeService implements BoThemeService {
	currentTheme: Theme = Theme.SYSTEM;

	static get instance(): ThemeService {
		if (!instance) {
			instance = new ThemeService();
		}

		return instance;
	}

	get theme(): Theme {
		return this.currentTheme;
	}

	get isDarkMode(): boolean {
		return this.currentTheme === Theme.DARK;
	}

	get isSystemDarkMode(): boolean {
		return this.currentTheme === Theme.SYSTEM;
	}

	private getThemeFromSystem(): Theme {
		const mediaQuery = window.matchMedia(DARK_MODE_MEDIA_QUERY);

		if (mediaQuery.matches) {
			return Theme.DARK;
		}

		const storedTheme = this.getThemeFromStorage();

		if (storedTheme) {
			return storedTheme;
		}

		return Theme.SYSTEM;
	}

	private getThemeFromStorage(): Theme {
		return (localStorage.getItem(THEME_KEY) as Theme) ?? Theme.SYSTEM;
	}

	private setThemeInStorage(theme: Theme): void {
		localStorage.setItem(THEME_KEY, theme);
	}

	private applyTheme(theme: Theme): void {
		document.documentElement.setAttribute('data-theme', theme);
	}

	initTheme(): void {
		const theme = this.getThemeFromSystem();

		this.currentTheme = theme;
		this.applyTheme(theme);
		this.setThemeInStorage(theme);
	}

	toggleTheme(theme: Theme): void {
		this.currentTheme = theme;
		this.applyTheme(theme);
		this.setThemeInStorage(theme);
	}
}
