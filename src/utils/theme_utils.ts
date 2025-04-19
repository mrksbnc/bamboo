import { LocalStorageUtils } from './local_storage_utils'

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
	SYSTEM = 'system',
}

export class ThemeUtils {
	private static readonly THEME_KEY = 'bamboo-theme'
	private static readonly DARK_MODE_MEDIA_QUERY = '(prefers-color-scheme: dark)'

	static getCurrentTheme(): Theme {
		if (typeof window === 'undefined') return Theme.SYSTEM

		const savedTheme = LocalStorageUtils.getItem(this.THEME_KEY)

		if (savedTheme && Object.values(Theme).includes(savedTheme as Theme)) {
			return savedTheme as Theme
		}

		return Theme.SYSTEM
	}

	static setTheme(theme: Theme): void {
		if (typeof window === 'undefined') return

		LocalStorageUtils.setItem(this.THEME_KEY, theme)
		this.applyTheme(theme)
	}

	static applyTheme(theme: Theme): void {
		if (typeof window === 'undefined') return

		const isDark = theme === Theme.DARK || (theme === Theme.SYSTEM && this.isSystemDarkMode())

		document.documentElement.classList.remove(Theme.LIGHT, Theme.DARK)
		document.documentElement.classList.add(isDark ? Theme.DARK : Theme.LIGHT)

		const metaThemeColor = document.querySelector('meta[name="theme-color"]')
		if (metaThemeColor) {
			metaThemeColor.setAttribute('content', isDark ? '#1a1a1a' : '#ffffff')
		}
	}

	static isSystemDarkMode(): boolean {
		if (typeof window === 'undefined') return false

		return window.matchMedia(this.DARK_MODE_MEDIA_QUERY).matches
	}

	static initTheme(): void {
		if (typeof window === 'undefined') return

		const currentTheme = this.getCurrentTheme()
		this.applyTheme(currentTheme)

		if (currentTheme === Theme.SYSTEM) {
			this.setupSystemThemeListener()
		}
	}

	static setupSystemThemeListener(): void {
		if (typeof window === 'undefined') return

		const darkModeMediaQuery = window.matchMedia(this.DARK_MODE_MEDIA_QUERY)

		const handleThemeChange = (): void => {
			if (this.getCurrentTheme() === Theme.SYSTEM) {
				this.applyTheme(Theme.SYSTEM)
			}
		}

		darkModeMediaQuery.removeEventListener('change', handleThemeChange)
		darkModeMediaQuery.addEventListener('change', handleThemeChange)
	}

	static toggleTheme(): void {
		const currentTheme = this.getCurrentTheme()

		if (currentTheme === Theme.LIGHT) {
			this.setTheme(Theme.DARK)
		} else if (currentTheme === Theme.DARK) {
			this.setTheme(Theme.LIGHT)
		} else {
			// If system, toggle to the opposite of the system preference
			this.setTheme(this.isSystemDarkMode() ? Theme.LIGHT : Theme.DARK)
		}
	}
}
