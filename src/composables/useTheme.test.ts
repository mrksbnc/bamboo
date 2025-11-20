import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useTheme, BoTheme } from './useTheme';

describe('useTheme', () => {
	beforeEach(() => {
		// Clear localStorage before each test
		localStorage.clear();
		// Reset document.documentElement.setAttribute
		document.documentElement.removeAttribute('data-theme');
		// Clear all mocks
		vi.clearAllMocks();
	});

	describe('initialization', () => {
		it('should initialize with light theme by default', () => {
			const { activeTheme } = useTheme();
			expect(activeTheme.value).toBe(BoTheme.light);
		});

		it('should load theme from localStorage if available', () => {
			localStorage.setItem('data-theme', BoTheme.dark);
			const { initTheme, activeTheme } = useTheme();
			initTheme();
			expect(activeTheme.value).toBe(BoTheme.dark);
			expect(document.documentElement.getAttribute('data-theme')).toBe(BoTheme.dark);
		});

		it('should respect system preference when no stored theme', () => {
			const matchMediaMock = vi.fn().mockImplementation((query) => ({
				matches: query === '(prefers-color-scheme: dark)',
				media: query,
				addEventListener: vi.fn(),
				removeEventListener: vi.fn(),
			}));
			vi.stubGlobal('matchMedia', matchMediaMock);

			const { initTheme, activeTheme } = useTheme();
			initTheme();

			expect(activeTheme.value).toBe(BoTheme.dark);
			expect(document.documentElement.getAttribute('data-theme')).toBe(BoTheme.dark);
		});

		it('should default to light theme when system preference is light', () => {
			const matchMediaMock = vi.fn().mockImplementation((query) => ({
				matches: false,
				media: query,
				addEventListener: vi.fn(),
				removeEventListener: vi.fn(),
			}));
			vi.stubGlobal('matchMedia', matchMediaMock);

			const { initTheme, activeTheme, setTheme } = useTheme();
			// Set to dark first to ensure we're not already on light
			setTheme(BoTheme.dark);
			// Clear localStorage to force system preference check
			localStorage.clear();
			initTheme();

			expect(activeTheme.value).toBe(BoTheme.light);
			expect(document.documentElement.getAttribute('data-theme')).toBe(BoTheme.light);
		});
	});

	describe('setTheme', () => {
		it('should set theme to dark', () => {
			const { setTheme, activeTheme } = useTheme();
			setTheme(BoTheme.dark);

			expect(activeTheme.value).toBe(BoTheme.dark);
			expect(document.documentElement.getAttribute('data-theme')).toBe(BoTheme.dark);
			expect(localStorage.getItem('data-theme')).toBe(BoTheme.dark);
		});

		it('should set theme to light', () => {
			const { setTheme, activeTheme } = useTheme();
			// First set to dark, then to light to test the transition
			setTheme(BoTheme.dark);
			setTheme(BoTheme.light);

			expect(activeTheme.value).toBe(BoTheme.light);
			expect(document.documentElement.getAttribute('data-theme')).toBe(BoTheme.light);
			expect(localStorage.getItem('data-theme')).toBe(BoTheme.light);
		});

		it('should not update if theme is already active', () => {
			const { setTheme, activeTheme } = useTheme();
			setTheme(BoTheme.light);

			const setAttributeSpy = vi.spyOn(document.documentElement, 'setAttribute');
			const setItemSpy = vi.spyOn(localStorage, 'setItem');

			setTheme(BoTheme.light);

			expect(setAttributeSpy).not.toHaveBeenCalled();
			expect(setItemSpy).not.toHaveBeenCalled();
			expect(activeTheme.value).toBe(BoTheme.light);
		});

		it('should persist theme changes to localStorage', () => {
			const { setTheme } = useTheme();
			setTheme(BoTheme.dark);

			expect(localStorage.getItem('data-theme')).toBe(BoTheme.dark);

			setTheme(BoTheme.light);
			expect(localStorage.getItem('data-theme')).toBe(BoTheme.light);
		});
	});

	describe('onThemeToggle', () => {
		it('should toggle from light to dark', () => {
			const { onThemeToggle, activeTheme, setTheme } = useTheme();
			setTheme(BoTheme.light);

			onThemeToggle();

			expect(activeTheme.value).toBe(BoTheme.dark);
			expect(document.documentElement.getAttribute('data-theme')).toBe(BoTheme.dark);
		});

		it('should toggle from dark to light', () => {
			const { onThemeToggle, activeTheme, setTheme } = useTheme();
			setTheme(BoTheme.dark);

			onThemeToggle();

			expect(activeTheme.value).toBe(BoTheme.light);
			expect(document.documentElement.getAttribute('data-theme')).toBe(BoTheme.light);
		});

		it('should persist toggled theme to localStorage', () => {
			const { onThemeToggle, setTheme } = useTheme();
			setTheme(BoTheme.light);

			onThemeToggle();
			expect(localStorage.getItem('data-theme')).toBe(BoTheme.dark);

			onThemeToggle();
			expect(localStorage.getItem('data-theme')).toBe(BoTheme.light);
		});
	});

	describe('DOM manipulation', () => {
		it('should set data-theme attribute on document element', () => {
			const { setTheme } = useTheme();
			setTheme(BoTheme.dark);

			expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
		});

		it('should update data-theme attribute when theme changes', () => {
			const { setTheme } = useTheme();
			setTheme(BoTheme.dark);
			expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

			setTheme(BoTheme.light);
			expect(document.documentElement.getAttribute('data-theme')).toBe('light');
		});
	});
});
