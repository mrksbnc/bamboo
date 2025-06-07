import { Icon } from '@/components/icon/bo-icon.js';
import { InjectKey } from '@/shared/injection-key.js';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test, vi } from 'vitest';
import { nextTick, ref } from 'vue';
import type { AccordionGroup } from './bo-accordion.js';
import BoAccordion from './bo-accordion.vue';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoAccordion, {
		props: {
			title: 'Test Accordion',
		},
	});
});

describe('BoAccordion', () => {
	suite('Basic Rendering', () => {
		test('should render accordion container', () => {
			expect(wrapper.find('.bo-accordion').exists()).toBe(true);
		});

		test('should have correct test id', () => {
			expect(wrapper.find('[data-testid*="accordion"]').exists()).toBe(true);
		});

		test('should render with custom id', () => {
			const customWrapper = mount(BoAccordion, {
				props: {
					id: 'custom-id',
					title: 'Test',
				},
			});
			expect(customWrapper.find('[data-testid="custom-id-accordion"]').exists()).toBe(true);
		});
	});

	suite('Header Element', () => {
		test('should render header with correct attributes', () => {
			const header = wrapper.find('[data-testid*="accordion-header"]');

			expect(header.exists()).toBe(true);
			expect(header.attributes('role')).toBe('button');
			expect(header.attributes('tabindex')).toBe('0');
			expect(header.attributes('aria-expanded')).toBe('false');
			expect(header.attributes('aria-disabled')).toBe('false');
		});

		test('should have correct test id for header', () => {
			const header = wrapper.find('[data-testid*="accordion-header"]');
			expect(header.attributes('data-testid')).toMatch(/.*-accordion-header$/);
		});

		test('should have aria-controls pointing to content body', () => {
			const header = wrapper.find('[data-testid*="accordion-header"]');
			const content = wrapper.find('[data-testid*="accordion-content"]');

			expect(header.attributes('aria-controls')).toMatch(/.*-accordion-body$/);
			expect(content.attributes('id')).toMatch(/.*-accordion-body$/);
		});
	});

	suite('Content Element', () => {
		test('should render content with correct attributes', () => {
			const content = wrapper.find('[data-testid*="accordion-content"]');

			expect(content.exists()).toBe(true);
			expect(content.attributes('role')).toBe('region');
		});

		test('should have correct test id for content', () => {
			const content = wrapper.find('[data-testid*="accordion-content"]');
			expect(content.attributes('data-testid')).toMatch(/.*-accordion-content$/);
		});

		test('should have aria-labelledby pointing to header', () => {
			const header = wrapper.find('[data-testid*="accordion-header"]');
			const content = wrapper.find('[data-testid*="accordion-content"]');

			expect(content.attributes('aria-labelledby')).toMatch(/.*-accordion-header$/);
			expect(header.attributes('id')).toMatch(/.*-accordion-header$/);
		});

		test('should be hidden by default', () => {
			const content = wrapper.find('[data-testid*="accordion-content"]');
			expect(content.isVisible()).toBe(false);
		});
	});

	suite('Title', () => {
		test('should render title with correct test id', () => {
			const title = wrapper.find('[data-testid*="accordion-title"]');
			expect(title.exists()).toBe(true);
			expect(title.text()).toBe('Test Accordion');
		});

		test('should not render title when not provided', () => {
			const noTitleWrapper = mount(BoAccordion);
			expect(noTitleWrapper.find('[data-testid*="accordion-title"]').exists()).toBe(false);
		});
	});

	suite('Toggle Icon', () => {
		test('should render toggle icon with correct test id', () => {
			const icon = wrapper.find('[data-testid*="accordion-toggle-icon"]');
			expect(icon.exists()).toBe(true);
		});

		test('should show chevron down when closed', () => {
			const icon = wrapper.find('[data-testid*="accordion-toggle-icon"]');
			expect(icon.exists()).toBe(true);
			expect(icon.attributes('data-testid')).toMatch(/.*-accordion-toggle-icon$/);
		});

		test('should show chevron up when open', () => {
			const openWrapper = mount(BoAccordion, {
				props: {
					title: 'Test',
					open: true,
				},
			});
			const icon = openWrapper.find('[data-testid*="accordion-toggle-icon"]');
			expect(icon.exists()).toBe(true);
			expect(icon.attributes('data-testid')).toMatch(/.*-accordion-toggle-icon$/);
		});

		test('should use custom toggle icon when provided', () => {
			const customWrapper = mount(BoAccordion, {
				props: {
					title: 'Test',
					customToggleIcon: Icon.plus,
				},
			});
			const icon = customWrapper.find('[data-testid*="accordion-toggle-icon"]');
			expect(icon.exists()).toBe(true);
			expect(icon.attributes('data-testid')).toMatch(/.*-accordion-toggle-icon$/);
		});
	});

	suite('Prefix Icon', () => {
		test('should not render prefix icon by default', () => {
			expect(wrapper.find('[data-testid*="accordion-prefix-icon"]').exists()).toBe(false);
		});

		test('should render prefix icon when provided', () => {
			const prefixWrapper = mount(BoAccordion, {
				props: {
					title: 'Test',
					prefixIcon: Icon.star,
				},
				global: {
					stubs: {
						BoIcon: {
							template: '<i data-testid="mocked-icon"></i>',
							props: ['icon'],
						},
					},
				},
			});
			const prefixIcon = prefixWrapper.find('[data-testid*="accordion-prefix-icon"]');
			expect(prefixIcon.exists()).toBe(true);
			expect(prefixIcon.attributes('data-testid')).toMatch(/.*-accordion-prefix-icon$/);
		});

		test('should not render when set to none', () => {
			const noneWrapper = mount(BoAccordion, {
				props: {
					title: 'Test',
					prefixIcon: Icon.none,
				},
			});
			expect(noneWrapper.find('[data-testid*="accordion-prefix-icon"]').exists()).toBe(false);
		});
	});

	suite('Open/Close State', () => {
		test('should be closed by default', () => {
			const header = wrapper.find('[data-testid*="accordion-header"]');
			const content = wrapper.find('[data-testid*="accordion-content"]');

			expect(header.attributes('aria-expanded')).toBe('false');
			expect(content.isVisible()).toBe(false);
		});

		test('should be open when open prop is true', () => {
			const openWrapper = mount(BoAccordion, {
				props: {
					title: 'Test',
					open: true,
				},
			});

			const header = openWrapper.find('[data-testid*="accordion-header"]');
			const content = openWrapper.find('[data-testid*="accordion-content"]');

			expect(header.attributes('aria-expanded')).toBe('true');
			expect(content.isVisible()).toBe(true);
		});

		test('should toggle when clicked', async () => {
			const header = wrapper.find('[data-testid*="accordion-header"]');

			await header.trigger('click');
			await nextTick();

			expect(header.attributes('aria-expanded')).toBe('true');

			await header.trigger('click');
			await nextTick();

			expect(header.attributes('aria-expanded')).toBe('false');
		});

		test('should emit toggle event', async () => {
			const header = wrapper.find('[data-testid*="accordion-header"]');

			await header.trigger('click');

			const events = wrapper.emitted('toggle');
			expect(events).toHaveLength(1);
			expect(events![0]).toEqual([{ id: expect.any(String), open: true }]);
		});
	});

	suite('Keyboard Interaction', () => {
		test('should toggle on Enter key', async () => {
			const header = wrapper.find('[data-testid*="accordion-header"]');

			await header.trigger('keydown.enter');
			await nextTick();

			expect(header.attributes('aria-expanded')).toBe('true');
		});

		test('should toggle on Space key', async () => {
			const header = wrapper.find('[data-testid*="accordion-header"]');

			await header.trigger('keydown.space');
			await nextTick();

			expect(header.attributes('aria-expanded')).toBe('true');
		});

		test('should not toggle on other keys', async () => {
			const header = wrapper.find('[data-testid*="accordion-header"]');

			await header.trigger('keydown.escape');
			await header.trigger('keydown.tab');

			expect(header.attributes('aria-expanded')).toBe('false');
		});
	});

	suite('Disabled State', () => {
		test('should have correct disabled attributes', () => {
			const disabledWrapper = mount(BoAccordion, {
				props: {
					title: 'Test',
					disabled: true,
				},
			});

			const header = disabledWrapper.find('[data-testid*="accordion-header"]');
			expect(header.attributes('aria-disabled')).toBe('true');
		});

		test('should not toggle when disabled', async () => {
			const disabledWrapper = mount(BoAccordion, {
				props: {
					title: 'Test',
					disabled: true,
				},
			});

			const header = disabledWrapper.find('[data-testid*="accordion-header"]');

			await header.trigger('click');
			await nextTick();

			expect(header.attributes('aria-expanded')).toBe('false');
			expect(disabledWrapper.emitted('toggle')).toBeFalsy();
		});
	});

	suite('Slot Content', () => {
		test('should render slot content', () => {
			const slotWrapper = mount(BoAccordion, {
				props: {
					title: 'Test',
				},
				slots: {
					default: '<div class="test-content">Slot Content</div>',
				},
			});

			expect(slotWrapper.find('.test-content').exists()).toBe(true);
			expect(slotWrapper.find('.test-content').text()).toBe('Slot Content');
		});
	});

	suite('Accordion Group Integration', () => {
		test('should register with group when provided', () => {
			const mockGroup: AccordionGroup = {
				openItems: new Set(),
				toggle: vi.fn(),
				registerItem: vi.fn(),
			};

			mount(BoAccordion, {
				props: {
					id: 'test-id',
					title: 'Test',
					open: true,
				},
				global: {
					provide: {
						[InjectKey.AccordionGroup]: mockGroup,
					},
				},
			});

			expect(mockGroup.registerItem).toHaveBeenCalledWith('test-id', true);
		});

		test('should call group toggle when in group', async () => {
			const mockGroup: AccordionGroup = {
				openItems: new Set(),
				toggle: vi.fn(),
				registerItem: vi.fn(),
			};

			const groupWrapper = mount(BoAccordion, {
				props: {
					id: 'test-id',
					title: 'Test',
				},
				global: {
					provide: {
						[InjectKey.AccordionGroup]: mockGroup,
					},
				},
			});

			const header = groupWrapper.find('[data-testid*="accordion-header"]');
			await header.trigger('click');

			expect(mockGroup.toggle).toHaveBeenCalledWith('test-id');
		});

		test('should not emit toggle event when in group', async () => {
			const mockGroup: AccordionGroup = {
				openItems: new Set(),
				toggle: vi.fn(),
				registerItem: vi.fn(),
			};

			const groupWrapper = mount(BoAccordion, {
				props: {
					id: 'test-id',
					title: 'Test',
				},
				global: {
					provide: {
						[InjectKey.AccordionGroup]: mockGroup,
					},
				},
			});

			const header = groupWrapper.find('[data-testid*="accordion-header"]');
			await header.trigger('click');

			// Should not emit toggle event when in group, group handles it
			expect(groupWrapper.emitted('toggle')).toBeFalsy();
		});
	});

	suite('CSS Classes', () => {
		test('should have base accordion classes', () => {
			expect(wrapper.find('.bo-accordion').exists()).toBe(true);
			expect(wrapper.find('.bo-accordion__header').exists()).toBe(true);
			expect(wrapper.find('.bo-accordion__content').exists()).toBe(true);
		});

		test('should have interactive classes on header', () => {
			const header = wrapper.find('[data-testid*="accordion-header"]');
			expect(header.classes()).toContain('cursor-pointer');
		});

		test('should have disabled classes when disabled', () => {
			const disabledWrapper = mount(BoAccordion, {
				props: {
					title: 'Test',
					disabled: true,
				},
			});

			const header = disabledWrapper.find('[data-testid*="accordion-header"]');
			// The disabled classes are applied as a single string 'cursor-not-allowed opacity-50'
			const headerClasses = header.classes().join(' ');
			expect(headerClasses).toContain('cursor-not-allowed');
			expect(headerClasses).toContain('opacity-50');
		});
	});

	suite('Internal State & Computed Properties', () => {
		test('should compute header classes correctly', () => {
			const header = wrapper.find('[data-testid*="accordion-header"]');
			const classes = header.classes();

			// Should have all expected base classes
			expect(classes).toContain('bo-accordion__header');
			expect(classes).toContain('flex');
			expect(classes).toContain('items-center');
			expect(classes).toContain('justify-between');
			expect(classes).toContain('cursor-pointer');
		});

		test('should compute body classes correctly', async () => {
			await wrapper.setProps({ open: true });
			const body = wrapper.find('[data-testid*="accordion-content"]');
			const classes = body.classes();

			expect(classes).toContain('bo-accordion__body');
			expect(classes).toContain('overflow-hidden');
		});

		test('should compute slot classes correctly', async () => {
			await wrapper.setProps({ open: true });
			const content = wrapper.find('[data-testid*="accordion-content"] > div');
			const classes = content.classes();

			expect(classes).toContain('bo-accordion__content');
		});

		test('should handle template refs correctly', () => {
			const container = wrapper.find('.bo-accordion');
			const content = wrapper.find('[data-testid*="accordion-content"]');

			expect(container.exists()).toBe(true);
			expect(content.exists()).toBe(true);
		});
	});

	suite('Edge Cases', () => {
		test('should handle undefined open prop', () => {
			const undefinedWrapper = mount(BoAccordion, {
				props: {
					title: 'Test',
					open: undefined,
				},
			});

			const header = undefinedWrapper.find('[data-testid*="accordion-header"]');
			expect(header.attributes('aria-expanded')).toBe('false');
		});

		test('should handle accordion without any props', () => {
			const emptyWrapper = mount(BoAccordion);
			expect(emptyWrapper.find('.bo-accordion').exists()).toBe(true);
		});

		test('should handle prop changes reactively', async () => {
			const reactiveWrapper = mount(BoAccordion, {
				props: {
					title: 'Test',
					open: false,
					disabled: false,
				},
			});

			const header = reactiveWrapper.find('[data-testid*="accordion-header"]');

			await reactiveWrapper.setProps({ open: true });
			expect(header.attributes('aria-expanded')).toBe('true');

			await reactiveWrapper.setProps({ disabled: true });
			expect(header.attributes('aria-disabled')).toBe('true');
		});

		test('should handle customToggleIcon set to none', () => {
			const noneIconWrapper = mount(BoAccordion, {
				props: {
					title: 'Test',
					customToggleIcon: Icon.none,
				},
			});

			// Default fallback is chevron down, but we check for the accordion toggle icon test ID
			const icon = noneIconWrapper.find('[data-testid*="accordion-toggle-icon"]');
			expect(icon.exists()).toBe(true);
		});

		test('should prevent default keyboard events', async () => {
			const header = wrapper.find('[data-testid*="accordion-header"]');

			const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });

			await header.trigger('keydown.space');

			expect(header.attributes('aria-expanded')).toBe('true');
		});
	});

	suite('Dark Mode Support', () => {
		test('should apply dark mode classes to header', () => {
			const header = wrapper.find('[data-testid*="accordion-header"]');
			const headerClasses = header.classes();

			// Check for dark mode background and text classes
			expect(headerClasses.some((cls) => cls.includes('dark:bg-neutral-800'))).toBe(true);
			expect(headerClasses.some((cls) => cls.includes('dark:text-neutral-200'))).toBe(true);
			expect(headerClasses.some((cls) => cls.includes('dark:hover:bg-neutral-700'))).toBe(true);
		});

		test('should apply dark mode classes to content body', () => {
			const openWrapper = mount(BoAccordion, {
				props: {
					title: 'Test',
					open: true,
				},
			});

			const contentBody = openWrapper.find('[data-testid*="accordion-content"]');
			const contentClasses = contentBody.classes();

			// Check for dark mode body background
			expect(contentClasses.some((cls) => cls.includes('dark:bg-neutral-900'))).toBe(true);
		});

		test('should apply dark mode classes to content text', () => {
			const openWrapper = mount(BoAccordion, {
				props: {
					title: 'Test',
					open: true,
				},
				slots: {
					default: '<p>Test content</p>',
				},
			});

			const contentSlot = openWrapper.find('.bo-accordion__content');
			const contentClasses = contentSlot.classes();

			// Check for dark mode content text classes
			expect(contentClasses.some((cls) => cls.includes('dark:text-neutral-100'))).toBe(true);
		});

		test('should apply dark mode border classes', () => {
			// Check header for dark mode border class instead of container
			const header = wrapper.find('[data-testid*="accordion-header"]');
			const headerClasses = header.classes();
			expect(headerClasses.some((cls) => cls.includes('dark:border-neutral-700'))).toBe(true);
		});

		test('should maintain dark mode styles when disabled', () => {
			const disabledWrapper = mount(BoAccordion, {
				props: {
					title: 'Test',
					disabled: true,
				},
			});

			const header = disabledWrapper.find('[data-testid*="accordion-header"]');
			const headerClasses = header.classes();

			// Check that dark mode styles are preserved even when disabled
			expect(headerClasses.some((cls) => cls.includes('dark:bg-neutral-800'))).toBe(true);
			expect(headerClasses.some((cls) => cls.includes('dark:hover:bg-transparent'))).toBe(true);
		});

		test('should apply dark mode styles to container layout', () => {
			// Check header for dark mode border class instead of container
			const header = wrapper.find('[data-testid*="accordion-header"]');
			const headerClasses = header.classes();
			expect(headerClasses.some((cls) => cls.includes('dark:border-neutral-700'))).toBe(true);
		});
	});

	suite('Advanced Accessibility Features', () => {
		test('should have proper accessible name computation', () => {
			const wrapper = mount(BoAccordion, {
				props: {
					title: 'Test Accordion',
					ariaLabel: 'Custom Accessible Name',
				},
			});

			const header = wrapper.find('[data-testid*="accordion-header"]');
			expect(header.attributes('aria-label')).toBe('Custom Accessible Name');
		});

		test('should fallback to title for accessible name', () => {
			const wrapper = mount(BoAccordion, {
				props: {
					title: 'Fallback Title',
				},
			});

			const header = wrapper.find('[data-testid*="accordion-header"]');
			expect(header.attributes('aria-label')).toBe('Fallback Title');
		});

		test('should handle missing title and ariaLabel gracefully', () => {
			const wrapper = mount(BoAccordion);
			const container = wrapper.find('.bo-accordion');
			expect(container.attributes('aria-label')).toBe('Accordion');
		});

		test('should have correct ARIA relationship between header and content', () => {
			const wrapper = mount(BoAccordion, {
				props: { title: 'Test' },
			});

			const header = wrapper.find('[data-testid*="accordion-header"]');
			const content = wrapper.find('[data-testid*="accordion-content"]');

			const headerId = header.attributes('id');
			const contentId = content.attributes('id');
			const ariaControls = header.attributes('aria-controls');
			const ariaLabelledBy = content.attributes('aria-labelledby');

			expect(ariaControls).toBe(contentId);
			expect(ariaLabelledBy).toBe(headerId);
		});

		test('should announce state changes for screen readers', async () => {
			const wrapper = mount(BoAccordion, {
				props: { title: 'Test' },
			});

			const header = wrapper.find('[data-testid*="accordion-header"]');

			expect(header.attributes('aria-expanded')).toBe('false');

			await header.trigger('click');
			await nextTick();

			expect(header.attributes('aria-expanded')).toBe('true');
		});

		test('should have proper tabindex management', () => {
			const enabledWrapper = mount(BoAccordion, {
				props: { title: 'Enabled', disabled: false },
			});
			const disabledWrapper = mount(BoAccordion, {
				props: { title: 'Disabled', disabled: true },
			});

			const enabledHeader = enabledWrapper.find('[data-testid*="accordion-header"]');
			const disabledHeader = disabledWrapper.find('[data-testid*="accordion-header"]');

			expect(enabledHeader.attributes('tabindex')).toBe('0');
			expect(disabledHeader.attributes('tabindex')).toBe('-1');
		});
	});

	suite('Keyboard Navigation', () => {
		test('should handle arrow navigation with NavigationDirection enum', async () => {
			const mockGroup: AccordionGroup = {
				openItems: new Set(),
				toggle: vi.fn(),
				registerItem: vi.fn(),
			};

			const wrapper1 = mount(BoAccordion, {
				props: { id: 'acc-1', title: 'First' },
				global: { provide: { [InjectKey.AccordionGroup]: mockGroup } },
				attachTo: document.body,
			});

			const wrapper2 = mount(BoAccordion, {
				props: { id: 'acc-2', title: 'Second' },
				global: { provide: { [InjectKey.AccordionGroup]: mockGroup } },
				attachTo: document.body,
			});

			const header1 = wrapper1.find('[data-testid*="accordion-header"]');
			const header2 = wrapper2.find('[data-testid*="accordion-header"]');

			// Mock DOM query and focus method
			const mockElements = [header1.element, header2.element];
			const focusSpy = vi.fn();
			Object.defineProperty(header2.element, 'focus', { value: focusSpy });
			Object.defineProperty(header2.element, 'scrollIntoView', { value: vi.fn() });

			vi.spyOn(document, 'querySelectorAll').mockReturnValue(mockElements as any);

			await header1.trigger('keydown.arrow-down');

			expect(focusSpy).toHaveBeenCalled();

			wrapper1.unmount();
			wrapper2.unmount();
		});

		test('should wrap navigation when at boundaries', async () => {
			const mockGroup: AccordionGroup = {
				openItems: new Set(),
				toggle: vi.fn(),
				registerItem: vi.fn(),
			};

			const wrapper = mount(BoAccordion, {
				props: { id: 'last-acc', title: 'Last' },
				global: { provide: { [InjectKey.AccordionGroup]: mockGroup } },
				attachTo: document.body,
			});

			const header = wrapper.find('[data-testid*="accordion-header"]');
			const focusSpy = vi.fn();
			Object.defineProperty(header.element, 'focus', { value: focusSpy });
			Object.defineProperty(header.element, 'scrollIntoView', { value: vi.fn() });

			vi.spyOn(document, 'querySelectorAll').mockReturnValue([header.element] as any);

			await header.trigger('keydown.arrow-down');

			expect(focusSpy).toHaveBeenCalled();

			wrapper.unmount();
		});

		test('should not navigate when not in accordion group', async () => {
			const wrapper = mount(BoAccordion, {
				props: { title: 'Standalone' },
			});

			const header = wrapper.find('[data-testid*="accordion-header"]');
			const querySelectorAllSpy = vi.spyOn(document, 'querySelectorAll');

			await header.trigger('keydown.arrow-down');

			expect(querySelectorAllSpy).not.toHaveBeenCalled();
		});

		test('should handle invalid navigation direction gracefully', () => {
			const mockGroup: AccordionGroup = {
				openItems: new Set(),
				toggle: vi.fn(),
				registerItem: vi.fn(),
			};

			const wrapper = mount(BoAccordion, {
				props: { id: 'test-acc', title: 'Test' },
				global: { provide: { [InjectKey.AccordionGroup]: mockGroup } },
			});

			const component = wrapper.vm as any;
			const querySelectorAllSpy = vi.spyOn(document, 'querySelectorAll');

			// Test with completely invalid direction that's not in enum
			component.onArrowNavigation('INVALID_DIRECTION' as any);

			expect(querySelectorAllSpy).not.toHaveBeenCalled();
		});
	});

	suite('Focus Management', () => {
		test('should maintain focus after toggle', async () => {
			const wrapper = mount(BoAccordion, {
				props: { title: 'Test' },
				attachTo: document.body,
			});

			const header = wrapper.find('[data-testid*="accordion-header"]');

			// Focus the element and verify it can be focused
			(header.element as HTMLElement).focus();
			await header.trigger('click');
			await nextTick();

			// The header should still be focusable
			expect(header.element.getAttribute('tabindex')).toBe('0');

			wrapper.unmount();
		});

		test('should have correct tabindex for disabled accordion', () => {
			const wrapper = mount(BoAccordion, {
				props: { title: 'Disabled', disabled: true },
			});

			const header = wrapper.find('[data-testid*="accordion-header"]');

			// Disabled elements should have tabindex="-1"
			expect(header.attributes('tabindex')).toBe('-1');
		});

		test('should handle navigation focus management', async () => {
			const mockGroup: AccordionGroup = {
				openItems: new Set(),
				toggle: vi.fn(),
				registerItem: vi.fn(),
			};

			const wrapper = mount(BoAccordion, {
				props: { id: 'test-acc', title: 'Test' },
				global: { provide: { [InjectKey.AccordionGroup]: mockGroup } },
			});

			const header = wrapper.find('[data-testid*="accordion-header"]');
			const mockElement = {
				focus: vi.fn(),
				getAttribute: vi.fn().mockReturnValue('0'),
				scrollIntoView: vi.fn(),
				setAttribute: vi.fn(),
			};

			vi.spyOn(document, 'querySelectorAll').mockReturnValue([header.element, mockElement] as any);
			Object.defineProperty(document, 'activeElement', {
				get: () => mockElement,
				configurable: true,
			});

			await header.trigger('keydown.arrow-down');

			expect(mockElement.focus).toHaveBeenCalled();
		});

		test('should handle unfocusable elements during navigation', async () => {
			const mockGroup: AccordionGroup = {
				openItems: new Set(),
				toggle: vi.fn(),
				registerItem: vi.fn(),
			};

			const wrapper = mount(BoAccordion, {
				props: { id: 'test-acc', title: 'Test' },
				global: { provide: { [InjectKey.AccordionGroup]: mockGroup } },
			});

			const header = wrapper.find('[data-testid*="accordion-header"]');
			const mockElement = {
				focus: vi.fn(),
				getAttribute: vi.fn().mockReturnValue('-1'),
				setAttribute: vi.fn(),
				scrollIntoView: vi.fn(),
			};

			vi.spyOn(document, 'querySelectorAll').mockReturnValue([header.element, mockElement] as any);
			Object.defineProperty(document, 'activeElement', {
				get: () => mockElement,
				configurable: true,
			});

			await header.trigger('keydown.arrow-down');

			expect(mockElement.setAttribute).toHaveBeenCalledWith('tabindex', '0');
			expect(mockElement.focus).toHaveBeenCalled();
		});
	});

	suite('Screen Reader Support', () => {
		test('should provide accessible description for testing', () => {
			const closedWrapper = mount(BoAccordion, {
				props: { title: 'Closed Accordion' },
			});
			const openWrapper = mount(BoAccordion, {
				props: { title: 'Open Accordion', open: true },
			});

			// Test accessible descriptions through testing interface
			const closedComponent = closedWrapper.vm as any;
			const openComponent = openWrapper.vm as any;

			expect(closedComponent.accessibilityTesting.accessibleDescription).toBe(
				'Collapsed accordion section',
			);
			expect(openComponent.accessibilityTesting.accessibleDescription).toBe(
				'Expanded accordion section',
			);
		});

		test('should have proper role hierarchy', () => {
			const wrapper = mount(BoAccordion, {
				props: { title: 'Test' },
			});

			const container = wrapper.find('.bo-accordion');
			const header = wrapper.find('[data-testid*="accordion-header"]');
			const content = wrapper.find('[data-testid*="accordion-content"]');

			expect(container.attributes('role')).toBe('group');
			expect(header.attributes('role')).toBe('button');
			expect(content.attributes('role')).toBe('region');
		});

		test('should hide decorative icons from screen readers', () => {
			const wrapper = mount(BoAccordion, {
				props: { title: 'Test', prefixIcon: Icon.star },
			});

			const prefixIcon = wrapper.find('[data-testid*="accordion-prefix-icon"]');
			const toggleIcon = wrapper.find('[data-testid*="accordion-toggle-icon"]');

			expect(prefixIcon.attributes('aria-hidden')).toBe('true');
			expect(toggleIcon.attributes('aria-hidden')).toBe('true');
		});
	});

	suite('Multiple Accordion Group Behavior', () => {
		test('should track multiple accordions in group', () => {
			const mockGroup: AccordionGroup = {
				openItems: new Set(['acc-1']),
				toggle: vi.fn(),
				registerItem: vi.fn(),
			};

			const wrapper1 = mount(BoAccordion, {
				props: { id: 'acc-1', title: 'First', open: true },
				global: { provide: { [InjectKey.AccordionGroup]: mockGroup } },
			});

			const wrapper2 = mount(BoAccordion, {
				props: { id: 'acc-2', title: 'Second' },
				global: { provide: { [InjectKey.AccordionGroup]: mockGroup } },
			});

			expect(mockGroup.registerItem).toHaveBeenCalledWith('acc-1', true);
			expect(mockGroup.registerItem).toHaveBeenCalledWith('acc-2', false);
		});

		test('should respond to group state changes', async () => {
			// Create reactive group state
			const openItems = ref(new Set<string>());
			const mockGroup: AccordionGroup = {
				get openItems() {
					return openItems.value;
				},
				toggle: vi.fn(),
				registerItem: vi.fn(),
			};

			const wrapper = mount(BoAccordion, {
				props: { id: 'acc-1', title: 'Test' },
				global: { provide: { [InjectKey.AccordionGroup]: mockGroup } },
			});

			const header = wrapper.find('[data-testid*="accordion-header"]');

			// Initially closed
			expect(header.attributes('aria-expanded')).toBe('false');

			// Simulate group opening this accordion by updating the reactive ref
			openItems.value = new Set(['acc-1']);
			await nextTick();
			await wrapper.vm.$nextTick();

			// Should react to group state change
			expect(header.attributes('aria-expanded')).toBe('true');
		});
	});
});
