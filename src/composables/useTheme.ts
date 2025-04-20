import { useLocalStorage, useMediaQuery } from '@vueuse/core';
import { computed, watch } from 'vue';

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
	SYSTEM = 'system',
}

const THEME_KEY = 'bamboo-theme';
const DARK_MODE_MEDIA_QUERY = '(prefers-color-scheme: dark)';

export function useTheme() {
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

	function applyTheme(): void {
		if (!window) {
			return;
		}

		document.documentElement.classList.remove(Theme.LIGHT, Theme.DARK);
		document.documentElement.classList.add(isDarkMode.value ? Theme.DARK : Theme.LIGHT);

		const metaThemeColor = document.querySelector('meta[name="theme-color"]');
		if (metaThemeColor) {
			metaThemeColor.setAttribute('content', isDarkMode.value ? '#1a1a1a' : '#ffffff');
		}
	}

	function setTheme(newTheme: Theme): void {
		theme.value = newTheme;
		applyTheme();
	}

	function toggleTheme() {
		switch (theme.value) {
			case Theme.LIGHT:
				setTheme(Theme.DARK);
				break;
			case Theme.DARK:
				setTheme(Theme.LIGHT);
				break;
			case Theme.SYSTEM:
				setTheme(isSystemDarkMode.value ? Theme.LIGHT : Theme.DARK);
				break;
			default:
				setTheme(Theme.LIGHT);
				break;
		}
	}

	function initTheme(): void {
		if (!window) {
			return;
		}

		applyTheme();
	}

	watch(prefersDark, () => {
		if (theme.value === Theme.SYSTEM) {
			applyTheme();
		}
	});

	watch(theme, () => {
		applyTheme();
	});

	return {
		theme,
		isDarkMode,
		isSystemDarkMode,
		applyTheme,
		setTheme,
		toggleTheme,
		initTheme,
	};
}
