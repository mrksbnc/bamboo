import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { nextTick } from 'vue';
import { Theme, useTheme } from './useTheme';

// Mock local storage
const localStorageMock = (() => {
	let store: Record<string, string> = {};
	return {
		getItem: vi.fn((key: string) => store[key] || null),
		setItem: vi.fn((key: string, value: string) => {
			store[key] = value.toString();
		}),
		clear: vi.fn(() => {
			store = {};
		}),
	};
})();

// Mock matchMedia
const matchMediaMock = vi.fn();

describe('useTheme', () => {
	// Setup DOM elements needed for tests
	let documentElement: HTMLElement;
	let metaThemeColor: HTMLMetaElement;

	beforeEach(() => {
		// Setup mocks
		Object.defineProperty(window, 'localStorage', { value: localStorageMock });
		Object.defineProperty(window, 'matchMedia', { value: matchMediaMock });

		// Clear localStorage before each test
		localStorageMock.clear();

		// Create and append a meta theme-color element
		documentElement = document.documentElement;
		metaThemeColor = document.createElement('meta');
		metaThemeColor.setAttribute('name', 'theme-color');
		document.head.appendChild(metaThemeColor);

		// Reset document element classes
		documentElement.classList.remove(Theme.LIGHT, Theme.DARK);
	});

	afterEach(() => {
		// Clean up
		if (metaThemeColor && metaThemeColor.parentNode) {
			metaThemeColor.parentNode.removeChild(metaThemeColor);
		}

		vi.clearAllMocks();
	});

	describe('initialization', () => {
		it('should initialize with system theme by default', () => {
			// Mock system preference as light
			matchMediaMock.mockReturnValue({ matches: false });

			const { theme } = useTheme();
			expect(theme.value).toBe(Theme.SYSTEM);
		});

		it('should use saved theme from localStorage if available', () => {
			// Set a theme in localStorage
			localStorageMock.setItem('bamboo-theme', Theme.DARK);

			const { theme } = useTheme();
			expect(theme.value).toBe(Theme.DARK);
		});
	});

	describe('theme switching', () => {
		it('should switch between light and dark themes', async () => {
			// Start with light theme
			matchMediaMock.mockReturnValue({ matches: false });
			const { setTheme, theme, isDarkMode } = useTheme();

			expect(theme.value).toBe(Theme.SYSTEM);
			expect(isDarkMode.value).toBe(false);

			// Switch to dark theme
			setTheme(Theme.DARK);
			await nextTick();

			expect(theme.value).toBe(Theme.DARK);
			expect(isDarkMode.value).toBe(true);
			expect(documentElement.classList.contains(Theme.DARK)).toBe(true);

			// Switch to light theme
			setTheme(Theme.LIGHT);
			await nextTick();

			expect(theme.value).toBe(Theme.LIGHT);
			expect(isDarkMode.value).toBe(false);
			expect(documentElement.classList.contains(Theme.LIGHT)).toBe(true);
		});

		it('should toggle theme correctly', async () => {
			matchMediaMock.mockReturnValue({ matches: false });
			const { toggleTheme, theme } = useTheme();

			// Start with system theme (light)
			expect(theme.value).toBe(Theme.SYSTEM);

			// Toggle to dark (since system is light)
			toggleTheme();
			await nextTick();
			expect(theme.value).toBe(Theme.DARK);

			// Toggle to light
			toggleTheme();
			await nextTick();
			expect(theme.value).toBe(Theme.LIGHT);

			// Toggle back to dark
			toggleTheme();
			await nextTick();
			expect(theme.value).toBe(Theme.DARK);
		});
	});

	describe('system theme preference', () => {
		it('should respect system preference when theme is set to system', async () => {
			// Mock system preference as dark
			matchMediaMock.mockReturnValue({ matches: true });

			const { isDarkMode, isSystemDarkMode, theme } = useTheme();
			expect(theme.value).toBe(Theme.SYSTEM);
			expect(isSystemDarkMode.value).toBe(true);
			expect(isDarkMode.value).toBe(true);

			// Change system preference to light
			matchMediaMock.mockReturnValue({ matches: false });
			// Trigger the media query change
			window.dispatchEvent(new Event('change'));
			await nextTick();

			expect(isSystemDarkMode.value).toBe(false);
		});
	});

	describe('meta theme-color', () => {
		it('should update meta theme-color when theme changes', async () => {
			matchMediaMock.mockReturnValue({ matches: false });
			const { setTheme } = useTheme();

			// Set dark theme
			setTheme(Theme.DARK);
			await nextTick();

			expect(metaThemeColor.getAttribute('content')).toBe('#1a1a1a');

			// Set light theme
			setTheme(Theme.LIGHT);
			await nextTick();

			expect(metaThemeColor.getAttribute('content')).toBe('#ffffff');
		});
	});
});
