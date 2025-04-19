import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { LocalStorageUtils } from './local_storage_utils'
import { Theme, ThemeUtils } from './theme_utils'

vi.mock('./local_storage_utils', () => {
	return {
		LocalStorageUtils: {
			getItem: vi.fn(),
			setItem: vi.fn(),
			removeItem: vi.fn(),
			clear: vi.fn(),
			isAvailable: vi.fn(),
			getJSON: vi.fn(),
			setJSON: vi.fn(),
		},
	}
})

describe('ThemeUtils', () => {
	const originalMatchMedia = window.matchMedia

	beforeEach(() => {
		vi.spyOn(document.documentElement.classList, 'add').mockImplementation(vi.fn())
		vi.spyOn(document.documentElement.classList, 'remove').mockImplementation(vi.fn())

		vi.mocked(LocalStorageUtils.getItem).mockReset()
		vi.mocked(LocalStorageUtils.setItem).mockReset()
	})

	afterEach(() => {
		vi.restoreAllMocks()
		window.matchMedia = originalMatchMedia
	})

	describe('getCurrentTheme', () => {
		it('should return SYSTEM if no theme is stored', () => {
			vi.mocked(LocalStorageUtils.getItem).mockReturnValue(null)

			expect(ThemeUtils.getCurrentTheme()).toBe(Theme.SYSTEM)
		})

		it('should return stored theme if valid', () => {
			vi.mocked(LocalStorageUtils.getItem).mockReturnValue(Theme.DARK)
			expect(ThemeUtils.getCurrentTheme()).toBe(Theme.DARK)

			vi.mocked(LocalStorageUtils.getItem).mockReturnValue(Theme.LIGHT)
			expect(ThemeUtils.getCurrentTheme()).toBe(Theme.LIGHT)
		})

		it('should return SYSTEM if stored theme is invalid', () => {
			vi.mocked(LocalStorageUtils.getItem).mockReturnValue('invalid-theme')
			expect(ThemeUtils.getCurrentTheme()).toBe(Theme.SYSTEM)
		})
	})

	describe('setTheme', () => {
		it('should store theme in localStorage', () => {
			ThemeUtils.setTheme(Theme.DARK)
			expect(LocalStorageUtils.setItem).toHaveBeenCalledWith('bamboo-theme', Theme.DARK)
		})

		it('should apply theme after setting it', () => {
			const applySpy = vi.spyOn(ThemeUtils, 'applyTheme').mockImplementation(vi.fn())

			ThemeUtils.setTheme(Theme.LIGHT)

			expect(applySpy).toHaveBeenCalledWith(Theme.LIGHT)
		})
	})

	describe('isSystemDarkMode', () => {
		it('should return true if system prefers dark mode', () => {
			window.matchMedia = vi.fn().mockImplementation((query) => {
				return {
					matches: true,
					media: query,
					addEventListener: vi.fn(),
					removeEventListener: vi.fn(),
				}
			})

			expect(ThemeUtils.isSystemDarkMode()).toBe(true)
		})

		it('should return false if system prefers light mode', () => {
			window.matchMedia = vi.fn().mockImplementation((query) => {
				return {
					matches: false,
					media: query,
					addEventListener: vi.fn(),
					removeEventListener: vi.fn(),
				}
			})

			expect(ThemeUtils.isSystemDarkMode()).toBe(false)
		})
	})

	describe('applyTheme', () => {
		it('should apply light theme', () => {
			window.matchMedia = vi.fn().mockImplementation((query) => {
				return {
					matches: false,
					media: query,
					addEventListener: vi.fn(),
					removeEventListener: vi.fn(),
				}
			})

			ThemeUtils.applyTheme(Theme.LIGHT)

			expect(document.documentElement.classList.remove).toHaveBeenCalledWith(
				Theme.LIGHT,
				Theme.DARK,
			)
			expect(document.documentElement.classList.add).toHaveBeenCalledWith(Theme.LIGHT)
		})

		it('should apply dark theme', () => {
			ThemeUtils.applyTheme(Theme.DARK)

			expect(document.documentElement.classList.remove).toHaveBeenCalledWith(
				Theme.LIGHT,
				Theme.DARK,
			)
			expect(document.documentElement.classList.add).toHaveBeenCalledWith(Theme.DARK)
		})

		it('should apply system theme based on user preference', () => {
			// Mock system dark mode
			window.matchMedia = vi.fn().mockImplementation((query) => {
				return {
					matches: true,
					media: query,
					addEventListener: vi.fn(),
					removeEventListener: vi.fn(),
				}
			})

			ThemeUtils.applyTheme(Theme.SYSTEM)

			expect(document.documentElement.classList.remove).toHaveBeenCalledWith(
				Theme.LIGHT,
				Theme.DARK,
			)
			expect(document.documentElement.classList.add).toHaveBeenCalledWith(Theme.DARK)

			// Mock system light mode
			window.matchMedia = vi.fn().mockImplementation((query) => {
				return {
					matches: false,
					media: query,
					addEventListener: vi.fn(),
					removeEventListener: vi.fn(),
				}
			})

			ThemeUtils.applyTheme(Theme.SYSTEM)

			expect(document.documentElement.classList.remove).toHaveBeenCalledWith(
				Theme.LIGHT,
				Theme.DARK,
			)
			expect(document.documentElement.classList.add).toHaveBeenCalledWith(Theme.LIGHT)
		})
	})

	describe('initTheme', () => {
		it('should apply the current theme on init', () => {
			const applySpy = vi.spyOn(ThemeUtils, 'applyTheme').mockImplementation(vi.fn())
			const getCurrentSpy = vi.spyOn(ThemeUtils, 'getCurrentTheme').mockReturnValue(Theme.DARK)

			ThemeUtils.initTheme()

			expect(getCurrentSpy).toHaveBeenCalled()
			expect(applySpy).toHaveBeenCalledWith(Theme.DARK)
		})

		it('should setup system theme listener if current theme is SYSTEM', () => {
			const applySpy = vi.spyOn(ThemeUtils, 'applyTheme').mockImplementation(vi.fn())
			const setupListenerSpy = vi
				.spyOn(ThemeUtils, 'setupSystemThemeListener')
				.mockImplementation(vi.fn())
			vi.spyOn(ThemeUtils, 'getCurrentTheme').mockReturnValue(Theme.SYSTEM)

			ThemeUtils.initTheme()

			expect(setupListenerSpy).toHaveBeenCalled()
			expect(applySpy).toHaveBeenCalledWith(Theme.SYSTEM)
		})

		it('should not setup system theme listener if current theme is not SYSTEM', () => {
			const applySpy = vi.spyOn(ThemeUtils, 'applyTheme').mockImplementation(vi.fn())
			const setupListenerSpy = vi
				.spyOn(ThemeUtils, 'setupSystemThemeListener')
				.mockImplementation(vi.fn())
			vi.spyOn(ThemeUtils, 'getCurrentTheme').mockReturnValue(Theme.LIGHT)

			ThemeUtils.initTheme()

			expect(setupListenerSpy).not.toHaveBeenCalled()
			expect(applySpy).toHaveBeenCalledWith(Theme.LIGHT)
		})
	})

	describe('toggleTheme', () => {
		it('should toggle from light to dark', () => {
			vi.spyOn(ThemeUtils, 'getCurrentTheme').mockReturnValue(Theme.LIGHT)
			const setThemeSpy = vi.spyOn(ThemeUtils, 'setTheme').mockImplementation(vi.fn())

			ThemeUtils.toggleTheme()

			expect(setThemeSpy).toHaveBeenCalledWith(Theme.DARK)
		})

		it('should toggle from dark to light', () => {
			vi.spyOn(ThemeUtils, 'getCurrentTheme').mockReturnValue(Theme.DARK)
			const setThemeSpy = vi.spyOn(ThemeUtils, 'setTheme').mockImplementation(vi.fn())

			ThemeUtils.toggleTheme()

			expect(setThemeSpy).toHaveBeenCalledWith(Theme.LIGHT)
		})

		it('should toggle system theme based on system preference', () => {
			vi.spyOn(ThemeUtils, 'getCurrentTheme').mockReturnValue(Theme.SYSTEM)
			const setThemeSpy = vi.spyOn(ThemeUtils, 'setTheme').mockImplementation(vi.fn())

			// Mock system dark mode
			vi.spyOn(ThemeUtils, 'isSystemDarkMode').mockReturnValue(true)
			ThemeUtils.toggleTheme()
			expect(setThemeSpy).toHaveBeenCalledWith(Theme.LIGHT)

			// Mock system light mode
			vi.spyOn(ThemeUtils, 'isSystemDarkMode').mockReturnValue(false)
			ThemeUtils.toggleTheme()
			expect(setThemeSpy).toHaveBeenCalledWith(Theme.DARK)
		})
	})

	describe('setupSystemThemeListener', () => {
		it('should add event listener for system theme changes', () => {
			const mediaQueryMock = {
				matches: false,
				media: '(prefers-color-scheme: dark)',
				addEventListener: vi.fn(),
				removeEventListener: vi.fn(),
			}

			window.matchMedia = vi.fn().mockReturnValue(mediaQueryMock)

			ThemeUtils.setupSystemThemeListener()

			expect(mediaQueryMock.removeEventListener).toHaveBeenCalled()
			expect(mediaQueryMock.addEventListener).toHaveBeenCalled()
		})
	})
})
