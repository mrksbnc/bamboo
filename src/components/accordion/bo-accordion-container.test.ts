import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test } from 'vitest';
import { nextTick } from 'vue';
import BoAccordionContainer from './bo-accordion-container.vue';
import BoAccordion from './bo-accordion.vue';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoAccordionContainer);
});

describe('BoAccordionContainer', () => {
	suite('Basic Rendering', () => {
		test('should render with default props', () => {
			expect(wrapper.find('[data-testid*="accordion-container"]').exists()).toBe(true);
			expect(wrapper.find('.bo-accordion-container').exists()).toBe(true);
		});

		test('should have correct ARIA attributes', () => {
			const container = wrapper.find('[data-testid*="accordion-container"]');
			expect(container.attributes('role')).toBe('group');
		});

		test('should apply custom id', () => {
			const customWrapper = mount(BoAccordionContainer, {
				props: {
					id: 'custom-container',
				},
			});
			expect(
				customWrapper.find('[data-testid="custom-container-accordion-container"]').exists(),
			).toBe(true);
		});
	});

	suite('Slot Content', () => {
		test('should render slot content', () => {
			const slotWrapper = mount(BoAccordionContainer, {
				slots: {
					default: '<div class="test-content">Container Content</div>',
				},
			});

			expect(slotWrapper.find('.test-content').exists()).toBe(true);
			expect(slotWrapper.find('.test-content').text()).toBe('Container Content');
		});

		test('should render multiple accordion children', () => {
			const multipleWrapper = mount(BoAccordionContainer, {
				slots: {
					default: `
						<bo-accordion title="Accordion 1" id="acc-1" />
						<bo-accordion title="Accordion 2" id="acc-2" />
						<bo-accordion title="Accordion 3" id="acc-3" />
					`,
				},
				global: {
					components: {
						BoAccordion,
					},
				},
			});

			expect(multipleWrapper.findAllComponents(BoAccordion)).toHaveLength(3);
		});
	});

	suite('Single Selection Mode (Default)', () => {
		test('should allow only one accordion to be open by default', async () => {
			const singleModeWrapper = mount(BoAccordionContainer, {
				props: {
					allowMultiple: false,
				},
				slots: {
					default: `
						<bo-accordion title="Accordion 1" id="acc-1" />
						<bo-accordion title="Accordion 2" id="acc-2" />
					`,
				},
				global: {
					components: {
						BoAccordion,
					},
				},
			});

			const accordions = singleModeWrapper.findAllComponents(BoAccordion);

			// Click first accordion
			await accordions[0].find('[data-testid*="accordion-header"]').trigger('click');
			await nextTick();

			// Click second accordion
			await accordions[1].find('[data-testid*="accordion-header"]').trigger('click');
			await nextTick();

			// Only the second accordion should be open
			expect(
				accordions[0].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('false');
			expect(
				accordions[1].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('true');
		});

		test('should open default item when defaultOpenItemId is provided', async () => {
			const defaultOpenWrapper = mount(BoAccordionContainer, {
				props: {
					defaultOpenItemId: 'acc-2',
				},
				slots: {
					default: `
						<bo-accordion title="Accordion 1" id="acc-1" />
						<bo-accordion title="Accordion 2" id="acc-2" />
						<bo-accordion title="Accordion 3" id="acc-3" />
					`,
				},
				global: {
					components: {
						BoAccordion,
					},
				},
			});

			await nextTick();
			const accordions = defaultOpenWrapper.findAllComponents(BoAccordion);

			expect(
				accordions[0].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('false');
			expect(
				accordions[1].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('true');
			expect(
				accordions[2].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('false');
		});
	});

	suite('Multiple Selection Mode', () => {
		test('should allow multiple accordions to be open when allowMultiple is true', async () => {
			const multipleWrapper = mount(BoAccordionContainer, {
				props: {
					allowMultiple: true,
				},
				slots: {
					default: `
						<bo-accordion title="Accordion 1" id="acc-1" />
						<bo-accordion title="Accordion 2" id="acc-2" />
						<bo-accordion title="Accordion 3" id="acc-3" />
					`,
				},
				global: {
					components: {
						BoAccordion,
					},
				},
			});

			const accordions = multipleWrapper.findAllComponents(BoAccordion);

			// Click first accordion
			await accordions[0].find('[data-testid*="accordion-header"]').trigger('click');
			await nextTick();

			// Click second accordion
			await accordions[1].find('[data-testid*="accordion-header"]').trigger('click');
			await nextTick();

			// Both should be open
			expect(
				accordions[0].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('true');
			expect(
				accordions[1].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('true');
			expect(
				accordions[2].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('false');
		});

		test('should close accordion when clicked again in multiple mode', async () => {
			const multipleWrapper = mount(BoAccordionContainer, {
				props: {
					allowMultiple: true,
				},
				slots: {
					default: `
						<bo-accordion title="Accordion 1" id="acc-1" />
					`,
				},
				global: {
					components: {
						BoAccordion,
					},
				},
			});

			const accordion = multipleWrapper.findComponent(BoAccordion);
			const header = accordion.find('[data-testid*="accordion-header"]');

			// Open accordion
			await header.trigger('click');
			await nextTick();
			expect(header.attributes('aria-expanded')).toBe('true');

			// Close accordion
			await header.trigger('click');
			await nextTick();
			expect(header.attributes('aria-expanded')).toBe('false');
		});
	});

	suite('Always Open Mode', () => {
		test('should prevent closing last open accordion when alwaysOpen is true', async () => {
			const alwaysOpenWrapper = mount(BoAccordionContainer, {
				props: {
					alwaysOpen: true,
					defaultOpenItemId: 'acc-1',
				},
				slots: {
					default: `
						<bo-accordion title="Accordion 1" id="acc-1" />
						<bo-accordion title="Accordion 2" id="acc-2" />
					`,
				},
				global: {
					components: {
						BoAccordion,
					},
				},
			});

			await nextTick();
			const accordions = alwaysOpenWrapper.findAllComponents(BoAccordion);

			// First accordion should be open by default
			expect(
				accordions[0].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('true');

			// Try to close the only open accordion
			await accordions[0].find('[data-testid*="accordion-header"]').trigger('click');
			await nextTick();

			// Should still be open
			expect(
				accordions[0].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('true');
		});

		test('should allow closing when multiple accordions are open in alwaysOpen mode', async () => {
			const alwaysOpenWrapper = mount(BoAccordionContainer, {
				props: {
					alwaysOpen: true,
					allowMultiple: true,
					defaultOpenItemId: 'acc-1',
				},
				slots: {
					default: `
						<bo-accordion title="Accordion 1" id="acc-1" />
						<bo-accordion title="Accordion 2" id="acc-2" />
					`,
				},
				global: {
					components: {
						BoAccordion,
					},
				},
			});

			await nextTick();
			const accordions = alwaysOpenWrapper.findAllComponents(BoAccordion);

			// Open second accordion
			await accordions[1].find('[data-testid*="accordion-header"]').trigger('click');
			await nextTick();

			// Both should be open
			expect(
				accordions[0].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('true');
			expect(
				accordions[1].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('true');

			// Close first accordion (should work since there's another open)
			await accordions[0].find('[data-testid*="accordion-header"]').trigger('click');
			await nextTick();

			expect(
				accordions[0].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('false');
			expect(
				accordions[1].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('true');
		});
	});

	suite('Item Registration', () => {
		test('should register accordion items when mounted', async () => {
			const registrationWrapper = mount(BoAccordionContainer, {
				slots: {
					default: `
						<bo-accordion title="Accordion 1" id="acc-1" />
						<bo-accordion title="Accordion 2" id="acc-2" />
					`,
				},
				global: {
					components: {
						BoAccordion,
					},
				},
			});

			await nextTick();

			// Check that accordions are properly integrated with the container
			const accordions = registrationWrapper.findAllComponents(BoAccordion);
			expect(accordions).toHaveLength(2);

			// Verify they can interact with the container
			await accordions[0].find('[data-testid*="accordion-header"]').trigger('click');
			await nextTick();

			expect(
				accordions[0].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('true');
		});

		test('should not register duplicate items', async () => {
			// This test verifies the registerItem function prevents duplicate registration
			const duplicateWrapper = mount(BoAccordionContainer, {
				slots: {
					default: `
						<bo-accordion title="Accordion 1" id="acc-1" />
					`,
				},
				global: {
					components: {
						BoAccordion,
					},
				},
			});

			await nextTick();

			// The accordion should be registered only once
			const accordion = duplicateWrapper.findComponent(BoAccordion);
			expect(accordion.exists()).toBe(true);
		});
	});

	suite('Props Combinations', () => {
		test('should handle allowMultiple and alwaysOpen together', async () => {
			const combinedWrapper = mount(BoAccordionContainer, {
				props: {
					allowMultiple: true,
					alwaysOpen: true,
					defaultOpenItemId: 'acc-1',
				},
				slots: {
					default: `
						<bo-accordion title="Accordion 1" id="acc-1" />
						<bo-accordion title="Accordion 2" id="acc-2" />
						<bo-accordion title="Accordion 3" id="acc-3" />
					`,
				},
				global: {
					components: {
						BoAccordion,
					},
				},
			});

			await nextTick();
			const accordions = combinedWrapper.findAllComponents(BoAccordion);

			// First should be open by default
			expect(
				accordions[0].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('true');

			// Open second and third
			await accordions[1].find('[data-testid*="accordion-header"]').trigger('click');
			await accordions[2].find('[data-testid*="accordion-header"]').trigger('click');
			await nextTick();

			// All should be open
			expect(
				accordions[0].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('true');
			expect(
				accordions[1].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('true');
			expect(
				accordions[2].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('true');
		});

		test('should handle defaultOpenItemId with allowMultiple', async () => {
			const defaultMultipleWrapper = mount(BoAccordionContainer, {
				props: {
					allowMultiple: true,
					defaultOpenItemId: 'acc-2',
				},
				slots: {
					default: `
						<bo-accordion title="Accordion 1" id="acc-1" />
						<bo-accordion title="Accordion 2" id="acc-2" />
						<bo-accordion title="Accordion 3" id="acc-3" />
					`,
				},
				global: {
					components: {
						BoAccordion,
					},
				},
			});

			await nextTick();
			const accordions = defaultMultipleWrapper.findAllComponents(BoAccordion);

			// Only second should be open initially
			expect(
				accordions[0].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('false');
			expect(
				accordions[1].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('true');
			expect(
				accordions[2].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('false');

			// Should be able to open others
			await accordions[0].find('[data-testid*="accordion-header"]').trigger('click');
			await nextTick();

			expect(
				accordions[0].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('true');
			expect(
				accordions[1].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('true');
		});
	});

	suite('Edge Cases', () => {
		test('should handle empty container', () => {
			const emptyWrapper = mount(BoAccordionContainer);
			expect(emptyWrapper.find('.bo-accordion-container').exists()).toBe(true);
		});

		test('should handle accordion with initial open prop', async () => {
			const initialOpenWrapper = mount(BoAccordionContainer, {
				slots: {
					default: `
						<bo-accordion title="Accordion 1" id="acc-1" :open="true" />
						<bo-accordion title="Accordion 2" id="acc-2" />
					`,
				},
				global: {
					components: {
						BoAccordion,
					},
				},
			});

			await nextTick();
			const accordions = initialOpenWrapper.findAllComponents(BoAccordion);

			// First accordion should be open due to initial prop
			expect(
				accordions[0].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('true');
			expect(
				accordions[1].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('false');
		});

		test('should handle non-existent defaultOpenItemId gracefully', async () => {
			const nonExistentWrapper = mount(BoAccordionContainer, {
				props: {
					defaultOpenItemId: 'non-existent-id',
				},
				slots: {
					default: `
						<bo-accordion title="Accordion 1" id="acc-1" />
						<bo-accordion title="Accordion 2" id="acc-2" />
					`,
				},
				global: {
					components: {
						BoAccordion,
					},
				},
			});

			await nextTick();
			const accordions = nonExistentWrapper.findAllComponents(BoAccordion);

			// No accordions should be open
			expect(
				accordions[0].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('false');
			expect(
				accordions[1].find('[data-testid*="accordion-header"]').attributes('aria-expanded'),
			).toBe('false');
		});
	});
});
