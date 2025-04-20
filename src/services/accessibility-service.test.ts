import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AccessibilityService, AriaLivePriority } from './accessibility-service';
import { BrowserService } from './browser-service';

// Mock BrowserService
vi.mock('./browser-service', () => {
	return {
		BrowserService: {
			instance: {
				isBrowserEnv: vi.fn().mockReturnValue(true),
			},
		},
	};
});

describe('AccessibilityService', () => {
	let service: AccessibilityService;

	// Mock document methods and elements
	const mockDocument = {
		getElementById: vi.fn(),
		createElement: vi.fn(),
		querySelector: vi.fn(),
		body: {
			appendChild: vi.fn(),
			insertBefore: vi.fn(),
			firstChild: {},
		},
	};

	// Mock div element
	const mockDivElement = {
		id: '',
		className: '',
		setAttribute: vi.fn(),
		getAttribute: vi.fn(),
		hasAttribute: vi.fn(),
		textContent: '',
	};

	// Mock anchor element
	const mockAnchorElement = {
		textContent: '',
		href: '',
		className: '',
		style: {
			top: '',
			left: '',
			color: '',
			zIndex: '',
			padding: '',
			position: '',
			backgroundColor: '',
			transform: '',
			transition: '',
		},
		addEventListener: vi.fn(),
	};

	beforeEach(() => {
		vi.clearAllMocks();

		// Reset document mocks
		Object.defineProperty(global, 'document', {
			value: mockDocument,
			writable: true,
		});

		// Reset mock elements before each test
		mockDivElement.id = '';
		mockDivElement.className = '';
		vi.resetAllMocks();

		// Mock createElement to return appropriate elements
		mockDocument.createElement.mockImplementation((tag) => {
			if (tag === 'div') {
				return { ...mockDivElement };
			} else if (tag === 'a') {
				return { ...mockAnchorElement };
			}
			return {};
		});

		// Reset BrowserService mock
		(BrowserService.instance.isBrowserEnv as any).mockReturnValue(true);
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('should be a singleton', () => {
		// Create instance explicitly
		service = AccessibilityService.instance;

		const instance1 = AccessibilityService.instance;
		const instance2 = AccessibilityService.instance;
		expect(instance1).toBe(instance2);
	});

	describe('constructor', () => {
		it('should create a live region if it does not exist', () => {
			mockDocument.getElementById.mockReturnValue(null);

			// Clear any previous calls first
			mockDocument.createElement.mockClear();
			mockDocument.body.appendChild.mockClear();

			service = new AccessibilityService();

			expect(mockDocument.createElement).toHaveBeenCalledWith('div');
			expect(mockDivElement.setAttribute).toHaveBeenCalledWith('aria-live', 'polite');
			expect(mockDivElement.setAttribute).toHaveBeenCalledWith('aria-atomic', 'true');
			expect(mockDocument.body.appendChild).toHaveBeenCalled();
		});

		it('should use existing live region if it exists', () => {
			const existingRegion = { id: 'aria-live-announcer' };
			mockDocument.getElementById.mockReturnValue(existingRegion);

			// Clear any previous calls first
			mockDocument.createElement.mockClear();
			mockDocument.body.appendChild.mockClear();

			service = new AccessibilityService();

			expect(mockDocument.createElement).not.toHaveBeenCalled();
			expect(mockDocument.body.appendChild).not.toHaveBeenCalled();
		});
	});

	describe('announceToScreenReader', () => {
		beforeEach(() => {
			// Create a fresh instance with mocked region
			service = new AccessibilityService();
		});

		it('should update the content of the live region', () => {
			const message = 'Test announcement';
			const mockRegion = {
				setAttribute: vi.fn(),
				textContent: '',
			};

			// Mock region access
			Object.defineProperty(service, 'region', {
				value: mockRegion,
				writable: true,
			});

			service.announceToScreenReader(message);

			expect(mockRegion.setAttribute).toHaveBeenCalledWith('aria-live', 'polite');
			expect(mockRegion.textContent).toBe(message);
		});

		it('should set the appropriate priority', () => {
			const message = 'Test announcement';
			const priority = AriaLivePriority.assertive;
			const mockRegion = {
				setAttribute: vi.fn(),
				textContent: '',
			};

			// Mock region access
			Object.defineProperty(service, 'region', {
				value: mockRegion,
				writable: true,
			});

			service.announceToScreenReader(message, priority);

			expect(mockRegion.setAttribute).toHaveBeenCalledWith('aria-live', priority);
		});
	});

	describe('addSkipLink', () => {
		beforeEach(() => {
			service = new AccessibilityService();
		});

		it('should create a skip link when one does not exist', () => {
			mockDocument.querySelector.mockReturnValue(null);

			// Reset mocks
			mockDocument.createElement.mockClear();

			// Prepare the anchor mock to properly handle property assignments
			const mockAnchor = {
				textContent: '',
				href: '',
				className: '',
				style: {
					top: '',
					left: '',
					color: '',
					zIndex: '',
					padding: '',
					position: '',
					backgroundColor: '',
					transform: '',
					transition: '',
				},
				addEventListener: vi.fn(),
			};

			mockDocument.createElement.mockReturnValueOnce(mockAnchor);

			service.addSkipLink('main');

			expect(mockDocument.createElement).toHaveBeenCalledWith('a');
			expect(mockAnchor.href).toBe('#main');
			expect(mockAnchor.textContent).toBe('Skip to main content');
			expect(mockDocument.body.insertBefore).toHaveBeenCalled();
		});

		it('should not create a skip link when one already exists', () => {
			mockDocument.querySelector.mockReturnValue({ id: 'skip-link' });

			// Reset mocks
			mockDocument.createElement.mockClear();

			service.addSkipLink('main');

			expect(mockDocument.createElement).not.toHaveBeenCalled();
		});

		it('should use custom text when provided', () => {
			mockDocument.querySelector.mockReturnValue(null);

			// Reset mocks
			mockDocument.createElement.mockClear();

			// Prepare the anchor mock properly
			const mockAnchor = {
				textContent: '',
				href: '',
				className: '',
				style: {
					top: '',
					left: '',
					color: '',
					zIndex: '',
					padding: '',
					position: '',
					backgroundColor: '',
					transform: '',
					transition: '',
				},
				addEventListener: vi.fn(),
			};

			mockDocument.createElement.mockReturnValueOnce(mockAnchor);

			const customText = 'Skip to content';
			service.addSkipLink('main', customText);

			expect(mockAnchor.textContent).toBe(customText);
		});

		it('should not attempt to create a skip link in non-browser environments', () => {
			(BrowserService.instance.isBrowserEnv as any).mockReturnValue(false);

			// Reset mocks
			mockDocument.createElement.mockClear();

			service.addSkipLink('main');

			expect(mockDocument.createElement).not.toHaveBeenCalled();
		});
	});

	describe('isHiddenFromScreenReaders', () => {
		beforeEach(() => {
			service = new AccessibilityService();
		});

		it('should return true for null or undefined elements', () => {
			expect(service.isHiddenFromScreenReaders(null as unknown as HTMLElement)).toBe(true);
		});

		it('should return true when aria-hidden is true', () => {
			const element = {
				hasAttribute: vi.fn().mockReturnValue(true),
				getAttribute: vi.fn().mockReturnValue('true'),
			} as unknown as HTMLElement;

			expect(service.isHiddenFromScreenReaders(element)).toBe(true);
		});

		it('should check computed style properties', () => {
			const element = {
				hasAttribute: vi.fn().mockReturnValue(false),
				getAttribute: vi.fn(),
			} as unknown as HTMLElement;

			// Mock getComputedStyle
			global.getComputedStyle = vi.fn().mockReturnValue({
				display: 'none',
				visibility: 'visible',
			});

			expect(service.isHiddenFromScreenReaders(element)).toBe(true);

			// Reset and test with different values
			global.getComputedStyle = vi.fn().mockReturnValue({
				display: 'block',
				visibility: 'hidden',
			});

			expect(service.isHiddenFromScreenReaders(element)).toBe(true);
		});
	});
});
