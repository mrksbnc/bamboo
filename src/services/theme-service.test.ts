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
			clear: () => {
				store = {};
			},
		};
	})();

	// Mock matchMedia
	const matchMediaMock = vi.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
	}));

	// Mock document.documentElement
	const documentElementMock = {
		setAttribute: vi.fn(),
	};

	// Mock window
	const windowMock = {
		matchMedia: matchMediaMock,
	};

	beforeEach(() => {
		// Setup mocks
		vi.stubGlobal('localStorage', localStorageMock);
		vi.stubGlobal('matchMedia', matchMediaMock);

		// Add window.matchMedia mock
		Object.defineProperty(global, 'window', {
			value: windowMock,
			writable: true,
		});

		// Reset localStorage mock
		localStorageMock.clear();

		// Mock document.documentElement
		Object.defineProperty(document, 'documentElement', {
			value: documentElementMock,
			writable: true,
		});

		service = ThemeService.instance;
	});

	afterEach(() => {
		vi.unstubAllGlobals();
		vi.resetAllMocks();
	});

	it('should be a singleton', () => {
		const instance1 = ThemeService.instance;
		const instance2 = ThemeService.instance;
		expect(instance1).toBe(instance2);
	});

	describe('isDarkMode', () => {
		it('should return true when theme is DARK', () => {
			service.currentTheme = Theme.DARK;
			expect(service.isDarkMode).toBe(true);
		});

		it('should return false when theme is not DARK', () => {
			service.currentTheme = Theme.LIGHT;
			expect(service.isDarkMode).toBe(false);

			service.currentTheme = Theme.SYSTEM;
			expect(service.isDarkMode).toBe(false);
		});
	});

	describe('isSystemDarkMode', () => {
		it('should return true when theme is SYSTEM', () => {
			service.currentTheme = Theme.SYSTEM;
			expect(service.isSystemDarkMode).toBe(true);
		});

		it('should return false when theme is not SYSTEM', () => {
			service.currentTheme = Theme.LIGHT;
			expect(service.isSystemDarkMode).toBe(false);

			service.currentTheme = Theme.DARK;
			expect(service.isSystemDarkMode).toBe(false);
		});
	});

	describe('initTheme', () => {
		it('should initialize with SYSTEM theme when no preferences exist', () => {
			// No stored theme, system is not dark
			matchMediaMock.mockReturnValueOnce({ matches: false } as any);

			service.initTheme();

			expect(service.theme).toBe(Theme.SYSTEM);
			expect(documentElementMock.setAttribute).toHaveBeenCalledWith('data-theme', Theme.SYSTEM);
			expect(localStorageMock.setItem).toHaveBeenCalledWith('bamboo-theme', Theme.SYSTEM);
		});

		it('should initialize with DARK theme when system prefers dark', () => {
			// System prefers dark
			matchMediaMock.mockReturnValueOnce({ matches: true } as any);

			service.initTheme();

			expect(service.theme).toBe(Theme.DARK);
			expect(documentElementMock.setAttribute).toHaveBeenCalledWith('data-theme', Theme.DARK);
			expect(localStorageMock.setItem).toHaveBeenCalledWith('bamboo-theme', Theme.DARK);
		});

		it('should use stored theme from localStorage if available', () => {
			// No system preference (matches: false)
			matchMediaMock.mockReturnValueOnce({ matches: false } as any);

			// Stored theme is LIGHT
			localStorageMock.getItem.mockReturnValueOnce(Theme.LIGHT);

			service.initTheme();

			expect(service.theme).toBe(Theme.LIGHT);
			expect(documentElementMock.setAttribute).toHaveBeenCalledWith('data-theme', Theme.LIGHT);
		});
	});

	describe('toggleTheme', () => {
		it('should update the current theme', () => {
			service.toggleTheme(Theme.DARK);

			expect(service.theme).toBe(Theme.DARK);
			expect(documentElementMock.setAttribute).toHaveBeenCalledWith('data-theme', Theme.DARK);
			expect(localStorageMock.setItem).toHaveBeenCalledWith('bamboo-theme', Theme.DARK);
		});

		it('should update theme in localStorage and DOM', () => {
			service.toggleTheme(Theme.LIGHT);

			expect(documentElementMock.setAttribute).toHaveBeenCalledWith('data-theme', Theme.LIGHT);
			expect(localStorageMock.setItem).toHaveBeenCalledWith('bamboo-theme', Theme.LIGHT);
		});
	});
});
