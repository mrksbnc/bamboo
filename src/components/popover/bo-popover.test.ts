import { BoSize } from '@/shared/bo-size.js';
import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, suite, test, vi } from 'vitest';
import { nextTick } from 'vue';
import { BoPopoverPlacement, BoPopoverTrigger } from './bo-popover.js';
import BoPopover from './bo-popover.vue';

let wrapper: ReturnType<typeof mount>;

// Mock window methods
Object.defineProperty(window, 'innerWidth', {
	writable: true,
	configurable: true,
	value: 1024,
});

Object.defineProperty(window, 'innerHeight', {
	writable: true,
	configurable: true,
	value: 768,
});

// Mock getBoundingClientRect
Element.prototype.getBoundingClientRect = vi.fn(() => ({
	top: 100,
	left: 100,
	bottom: 120,
	right: 200,
	width: 100,
	height: 20,
	x: 100,
	y: 100,
	toJSON: vi.fn(),
}));

// Mock requestAnimationFrame
global.requestAnimationFrame = vi.fn((cb) => {
	setTimeout(cb, 0);
	return 1;
});

// Mock BoText component
const BoTextMock = {
	template: '<span>{{ value }}</span>',
	props: ['value', 'size', 'color', 'weight'],
};

beforeEach(() => {
	// Create teleport target as required by Vue Test Utils guide
	const el = document.createElement('div');
	document.body.appendChild(el);
});

afterEach(() => {
	// Clean up DOM
	document.body.innerHTML = '';
});

describe('BoPopover', () => {
	suite('Basic Rendering', () => {
		test('should render popover container', () => {
			wrapper = mount(BoPopover, {
				props: {
					title: 'Test Popover',
					content: 'Test content',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			expect(wrapper.find('.bo-popover-container').exists()).toBe(true);
		});

		test('should render trigger slot', () => {
			wrapper = mount(BoPopover, {
				props: {
					title: 'Test Popover',
					content: 'Test content',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			expect(wrapper.find('.bo-popover-trigger').exists()).toBe(true);
			expect(wrapper.find('button').text()).toBe('Trigger');
		});

		test('should have correct trigger test id', () => {
			wrapper = mount(BoPopover, {
				props: {
					title: 'Test Popover',
					content: 'Test content',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			expect(wrapper.find('[data-testid*="popover-trigger"]').exists()).toBe(true);
		});

		test('should render with custom id', () => {
			wrapper = mount(BoPopover, {
				props: {
					id: 'custom-popover-id',
					title: 'Test',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			expect(wrapper.find('[data-testid="custom-popover-id-popover-trigger"]').exists()).toBe(true);
		});

		test('should not render popover content initially when closed', () => {
			wrapper = mount(BoPopover, {
				props: {
					title: 'Test Popover',
					content: 'Test content',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			// Check that popover content is not in the DOM when closed
			expect(document.querySelector('[data-testid*="popover-content"]')).toBeNull();
		});
	});

	suite('Content Rendering', () => {
		test('should render title when provided', async () => {
			wrapper = mount(BoPopover, {
				props: {
					title: 'Test Popover',
					content: 'Test content',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			// Click to open popover
			await wrapper.find('.bo-popover-trigger').trigger('click');
			await nextTick();

			// Check title in teleported content
			const titleElement = document.querySelector('[data-testid*="popover-title"]');
			expect(titleElement).toBeTruthy();
			expect(titleElement?.textContent).toBe('Test Popover');
		});

		test('should render content when provided', async () => {
			wrapper = mount(BoPopover, {
				props: {
					title: 'Test Popover',
					content: 'Test content',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			await wrapper.find('.bo-popover-trigger').trigger('click');
			await nextTick();

			const bodyElement = document.querySelector('[data-testid*="popover-body"]');
			expect(bodyElement).toBeTruthy();
			expect(bodyElement?.textContent).toBe('Test content');
		});

		test('should render custom slot content', async () => {
			wrapper = mount(BoPopover, {
				slots: {
					trigger: '<button>Trigger</button>',
					default: '<div class="custom-content">Custom content</div>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			await wrapper.find('.bo-popover-trigger').trigger('click');
			await nextTick();

			const customContent = document.querySelector('.custom-content');
			expect(customContent).toBeTruthy();
			expect(customContent?.textContent).toBe('Custom content');
		});

		test('should not render title when not provided', async () => {
			wrapper = mount(BoPopover, {
				props: {
					content: 'Only content',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			await wrapper.find('.bo-popover-trigger').trigger('click');
			await nextTick();

			expect(document.querySelector('[data-testid*="popover-title"]')).toBeNull();
		});

		test('should not render content when not provided', async () => {
			wrapper = mount(BoPopover, {
				props: {
					title: 'Only title',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			await wrapper.find('.bo-popover-trigger').trigger('click');
			await nextTick();

			expect(document.querySelector('[data-testid*="popover-body"]')).toBeNull();
		});
	});

	suite('Trigger Events', () => {
		test('should open/close on click trigger', async () => {
			wrapper = mount(BoPopover, {
				props: {
					trigger: BoPopoverTrigger.click,
					title: 'Test',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			// Should be closed initially
			expect(document.querySelector('[data-testid*="popover-content"]')).toBeNull();

			// Click to open
			await wrapper.find('.bo-popover-trigger').trigger('click');
			await nextTick();
			expect(document.querySelector('[data-testid*="popover-content"]')).toBeTruthy();

			// Click to close
			await wrapper.find('.bo-popover-trigger').trigger('click');
			await nextTick();
			expect(document.querySelector('[data-testid*="popover-content"]')).toBeNull();
		});

		test('should open on hover trigger', async () => {
			wrapper = mount(BoPopover, {
				props: {
					trigger: BoPopoverTrigger.hover,
					title: 'Test',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			// Should be closed initially
			expect(document.querySelector('[data-testid*="popover-content"]')).toBeNull();

			// Hover to open
			await wrapper.find('.bo-popover-trigger').trigger('mouseenter');
			await nextTick();
			expect(document.querySelector('[data-testid*="popover-content"]')).toBeTruthy();
		});

		test('should open on focus trigger', async () => {
			wrapper = mount(BoPopover, {
				props: {
					trigger: BoPopoverTrigger.focus,
					title: 'Test',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			// Should be closed initially
			expect(document.querySelector('[data-testid*="popover-content"]')).toBeNull();

			// Focus to open
			await wrapper.find('.bo-popover-trigger').trigger('focus');
			await nextTick();
			expect(document.querySelector('[data-testid*="popover-content"]')).toBeTruthy();

			// Blur to close
			await wrapper.find('.bo-popover-trigger').trigger('blur');
			await nextTick();
			expect(document.querySelector('[data-testid*="popover-content"]')).toBeNull();
		});
	});

	suite('Placement', () => {
		test('should apply correct placement classes for different placements', async () => {
			const placements = [
				BoPopoverPlacement.top,
				BoPopoverPlacement.bottom,
				BoPopoverPlacement.left,
				BoPopoverPlacement.right,
				BoPopoverPlacement.top_start,
				BoPopoverPlacement.bottom_end,
			];

			for (const placement of placements) {
				wrapper = mount(BoPopover, {
					props: {
						placement,
						title: 'Test',
						arrow: true,
					},
					slots: {
						trigger: '<button>Trigger</button>',
					},
					global: {
						components: {
							'bo-text': BoTextMock,
						},
					},
				});

				await wrapper.find('.bo-popover-trigger').trigger('click');
				await nextTick();

				const arrow = document.querySelector('[data-testid*="popover-arrow"]');
				expect(arrow).toBeTruthy();

				// Clean up for next iteration
				await wrapper.find('.bo-popover-trigger').trigger('click');
				await nextTick();
			}
		});
	});

	suite('Sizes', () => {
		test('should apply size classes correctly', async () => {
			const sizes = [
				{ size: BoSize.small, expectedClass: 'text-xs' },
				{ size: BoSize.default, expectedClass: 'text-sm' },
				{ size: BoSize.large, expectedClass: 'text-base' },
			];

			for (const { size, expectedClass } of sizes) {
				wrapper = mount(BoPopover, {
					props: {
						size,
						title: 'Test',
					},
					slots: {
						trigger: '<button>Trigger</button>',
					},
					global: {
						components: {
							'bo-text': BoTextMock,
						},
					},
				});

				await wrapper.find('.bo-popover-trigger').trigger('click');
				await nextTick();

				const popover = document.querySelector('[data-testid*="popover-content"]');
				expect(popover?.classList.contains(expectedClass)).toBe(true);

				// Clean up for next iteration
				await wrapper.find('.bo-popover-trigger').trigger('click');
				await nextTick();
			}
		});
	});

	suite('Visual States', () => {
		test('should show/hide shadow based on shadow prop', async () => {
			wrapper = mount(BoPopover, {
				props: {
					shadow: true,
					title: 'Test',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			await wrapper.find('.bo-popover-trigger').trigger('click');
			await nextTick();

			const popover = document.querySelector('[data-testid*="popover-content"]');
			expect(popover?.classList.contains('shadow-lg')).toBe(true);
		});

		test('should show/hide border based on border prop', async () => {
			wrapper = mount(BoPopover, {
				props: {
					border: true,
					title: 'Test',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			await wrapper.find('.bo-popover-trigger').trigger('click');
			await nextTick();

			const popover = document.querySelector('[data-testid*="popover-content"]');
			expect(popover?.classList.contains('border')).toBe(true);
		});

		test('should show/hide arrow based on arrow prop', async () => {
			wrapper = mount(BoPopover, {
				props: {
					arrow: true,
					title: 'Test',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			await wrapper.find('.bo-popover-trigger').trigger('click');
			await nextTick();

			expect(document.querySelector('[data-testid*="popover-arrow"]')).toBeTruthy();

			// Test without arrow
			await wrapper.find('.bo-popover-trigger').trigger('click');
			await nextTick();

			wrapper = mount(BoPopover, {
				props: {
					arrow: false,
					title: 'Test',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			await wrapper.find('.bo-popover-trigger').trigger('click');
			await nextTick();

			expect(document.querySelector('[data-testid*="popover-arrow"]')).toBeNull();
		});
	});

	suite('Events', () => {
		test('should emit opened event when popover opens', async () => {
			wrapper = mount(BoPopover, {
				props: {
					title: 'Test Popover',
					content: 'Test content',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			await wrapper.find('.bo-popover-trigger').trigger('click');
			await nextTick();

			expect(wrapper.emitted('opened')).toBeTruthy();
			expect(wrapper.emitted('opened')).toHaveLength(1);
		});

		test('should emit closed event when popover closes', async () => {
			wrapper = mount(BoPopover, {
				props: {
					title: 'Test Popover',
					content: 'Test content',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			// Open first
			await wrapper.find('.bo-popover-trigger').trigger('click');
			await nextTick();

			// Then close
			await wrapper.find('.bo-popover-trigger').trigger('click');
			await nextTick();

			expect(wrapper.emitted('closed')).toBeTruthy();
			expect(wrapper.emitted('closed')).toHaveLength(1);
		});
	});

	suite('Accessibility', () => {
		test('should have correct role attribute', async () => {
			wrapper = mount(BoPopover, {
				props: {
					title: 'Test Popover',
					content: 'Test content',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			await wrapper.find('.bo-popover-trigger').trigger('click');
			await nextTick();

			const popover = document.querySelector('[data-testid*="popover-content"]');
			expect(popover?.getAttribute('role')).toBe('dialog');
		});

		test('should have correct tabindex when interactive', async () => {
			wrapper = mount(BoPopover, {
				props: {
					interactive: true,
					title: 'Test',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			await wrapper.find('.bo-popover-trigger').trigger('click');
			await nextTick();

			const popover = document.querySelector('[data-testid*="popover-content"]');
			expect(popover?.getAttribute('tabindex')).toBe('0');
		});

		test('should have correct tabindex when not interactive', async () => {
			wrapper = mount(BoPopover, {
				props: {
					interactive: false,
					title: 'Test',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			await wrapper.find('.bo-popover-trigger').trigger('click');
			await nextTick();

			const popover = document.querySelector('[data-testid*="popover-content"]');
			expect(popover?.getAttribute('tabindex')).toBe('-1');
		});
	});

	suite('Custom Classes', () => {
		test('should apply custom popover class', async () => {
			wrapper = mount(BoPopover, {
				props: {
					popoverClass: 'custom-popover-class',
					title: 'Test',
				},
				slots: {
					trigger: '<button>Trigger</button>',
				},
				global: {
					components: {
						'bo-text': BoTextMock,
					},
				},
			});

			await wrapper.find('.bo-popover-trigger').trigger('click');
			await nextTick();

			const popover = document.querySelector('[data-testid*="popover-content"]');
			expect(popover?.classList.contains('custom-popover-class')).toBe(true);
		});
	});
});
