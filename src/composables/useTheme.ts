import { useLocalStorage, useMediaQuery } from '@vueuse/core';
import { computed, watch, type Ref } from 'vue';

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
	SYSTEM = 'system',
}

const THEME_KEY = 'bamboo-theme';
const DARK_MODE_MEDIA_QUERY = '(prefers-color-scheme: dark)';

export interface UseThemeReturn {
	/**
	 * The current theme
	 */
	theme: Ref<Theme>;
	/**
	 * Whether the current theme is dark
	 */
	isDarkMode: Ref<boolean>;
	/**
	 * Whether the system is in dark mode
	 */
	isSystemDarkMode: Ref<boolean>;
	/**
	 * Applies the current theme to the document
	 */
	applyTheme: (newTheme: Theme) => void;
	/**
	 * Toggles the current theme
	 */
	toggleTheme: () => void;
	/**
	 * Initializes the theme
	 */
	initTheme: () => void;
}

export function useTheme(): UseThemeReturn {
	const prefersDark = useMediaQuery(DARK_MODE_MEDIA_QUERY);
	const theme = useLocalStorage<Theme>(THEME_KEY, Theme.SYSTEM, { window });

	const isSystemDarkMode = computed<boolean>(() => {
		if (!window) {
			return false;
		}
		return prefersDark.value;
	});

	const isDarkMode = computed<boolean>(() => {
		return theme.value === Theme.DARK || prefersDark.value;
	});

	function applyTheme(newTheme: Theme): void {
		if (!window) {
			return;
		}

		theme.value = newTheme;

		document.documentElement.classList.remove(Theme.LIGHT, Theme.DARK);
		document.documentElement.classList.add(isDarkMode.value ? Theme.DARK : Theme.LIGHT);
	}

	function toggleTheme(): void {
		switch (theme.value) {
			case Theme.LIGHT:
				applyTheme(Theme.DARK);
				break;
			case Theme.DARK:
			default:
				applyTheme(Theme.LIGHT);
		}
	}

	function initTheme(): void {
		if (!window) {
			return;
		}

		applyTheme(theme.value);
	}

	watch(prefersDark, (val) => {
		if (val) {
			applyTheme(Theme.DARK);
		} else {
			applyTheme(Theme.SYSTEM);
		}
	});

	watch(theme, (val) => {
		applyTheme(val);
	});

	return {
		theme,
		isDarkMode,
		isSystemDarkMode,
		applyTheme,

		toggleTheme,
		initTheme,
	};
}
