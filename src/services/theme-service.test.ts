import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Theme, ThemeService } from './theme-service';

describe('ThemeService', () => {
	let service: ThemeService;

	// Mock localStorage
	const localStorageMock = (() => {
		let store: Record<string, string> = {};
		return {
			getItem: vi.fn((key: string) => store[key] || null),
			setItem: vi.fn((key: string, value: string) => {
				store[key] = value;
			}),
			clear: vi.fn(() => {
				store = {};
			}),
		};
	})();

	// Mock matchMedia
	const matchMediaMock = vi.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
	}));

	// Mock document
	const documentMock = {
		documentElement: {
			setAttribute: vi.fn(),
		},
	};

	beforeEach(() => {
		// Setup mocks
		Object.defineProperty(window, 'localStorage', { value: localStorageMock });
		Object.defineProperty(window, 'matchMedia', { value: matchMediaMock });
		Object.defineProperty(global, 'document', { value: documentMock });

		// Clear mocks
		localStorageMock.clear();
		vi.clearAllMocks();

		// Get service instance
		service = ThemeService.instance;
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	describe('theme getters', () => {
		it('should return the current theme', () => {
			// Get the private property using indirection
			expect(service.theme).toBeDefined();
		});

		it('should correctly determine if dark mode is active', () => {
			// Test by changing the theme via the public method
			service.toggleTheme(Theme.DARK);
			expect(service.isDarkMode).toBe(true);

			service.toggleTheme(Theme.LIGHT);
			expect(service.isDarkMode).toBe(false);
		});

		it('should correctly determine if system theme is active', () => {
			service.toggleTheme(Theme.SYSTEM);
			expect(service.isSystemDarkMode).toBe(true);

			service.toggleTheme(Theme.LIGHT);
			expect(service.isSystemDarkMode).toBe(false);
		});
	});

	describe('initTheme', () => {
		it('should initialize theme from system preference when dark mode is preferred', () => {
			matchMediaMock.mockImplementationOnce(() => ({
				matches: true,
				media: '',
				addEventListener: vi.fn(),
				removeEventListener: vi.fn(),
			}));

			service.initTheme();

			expect(documentMock.documentElement.setAttribute).toHaveBeenCalledWith(
				'data-theme',
				Theme.DARK,
			);
			expect(localStorageMock.setItem).toHaveBeenCalledWith('bamboo-theme', Theme.DARK);
		});

		it('should initialize theme from localStorage when available', () => {
			matchMediaMock.mockImplementationOnce(() => ({
				matches: false,
				media: '',
				addEventListener: vi.fn(),
				removeEventListener: vi.fn(),
			}));
			localStorageMock.getItem.mockReturnValueOnce(Theme.LIGHT);

			service.initTheme();

			expect(documentMock.documentElement.setAttribute).toHaveBeenCalledWith(
				'data-theme',
				Theme.LIGHT,
			);
			expect(localStorageMock.setItem).toHaveBeenCalledWith('bamboo-theme', Theme.LIGHT);
		});

		it('should default to system theme when no preference is available', () => {
			matchMediaMock.mockImplementationOnce(() => ({
				matches: false,
				media: '',
				addEventListener: vi.fn(),
				removeEventListener: vi.fn(),
			}));
			localStorageMock.getItem.mockReturnValueOnce(null);

			service.initTheme();

			expect(documentMock.documentElement.setAttribute).toHaveBeenCalledWith(
				'data-theme',
				Theme.SYSTEM,
			);
			expect(localStorageMock.setItem).toHaveBeenCalledWith('bamboo-theme', Theme.SYSTEM);
		});
	});

	describe('toggleTheme', () => {
		it('should update the current theme', () => {
			service.toggleTheme(Theme.DARK);

			expect(service.theme).toBe(Theme.DARK);
			expect(documentMock.documentElement.setAttribute).toHaveBeenCalledWith(
				'data-theme',
				Theme.DARK,
			);
			expect(localStorageMock.setItem).toHaveBeenCalledWith('bamboo-theme', Theme.DARK);
		});

		it('should toggle between themes', () => {
			service.toggleTheme(Theme.LIGHT);
			expect(service.theme).toBe(Theme.LIGHT);

			service.toggleTheme(Theme.DARK);
			expect(service.theme).toBe(Theme.DARK);

			service.toggleTheme(Theme.SYSTEM);
			expect(service.theme).toBe(Theme.SYSTEM);
		});
	});
});
