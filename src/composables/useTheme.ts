import { BoLocalStorageKey } from '@/shared';
import { ref, type ShallowRef } from 'vue';

export enum BoTheme {
	light = 'light',
	dark = 'dark',
}

export interface UseTheme {
	activeTheme: ShallowRef<BoTheme>;
	setTheme(theme: BoTheme): void;
	onThemeToggle(): void;
	initTheme(): void;
}

export function useTheme() {
	const activeTheme = ref<BoTheme>(BoTheme.light);

	function setTheme(theme: BoTheme): void {
		if (activeTheme.value === theme) {
			return;
		}

		activeTheme.value = theme;
		document.documentElement.setAttribute('data-them', activeTheme.value);
		localStorage.setItem(BoLocalStorageKey.data_theme, activeTheme.value);
	}

	function onThemeToggle(): void {
		const themeToSet = activeTheme.value === BoTheme.light ? BoTheme.dark : BoTheme.light;
		setTheme(themeToSet);
	}

	function initTheme() {
		const storedTheme = localStorage.getItem(BoLocalStorageKey.data_theme) as BoTheme;

		if (storedTheme) {
			setTheme(storedTheme);
			return;
		}

		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		setTheme(prefersDark ? BoTheme.dark : BoTheme.light);
	}

	return {
		activeTheme,
		setTheme,
		onThemeToggle,
		initTheme,
	};
}
