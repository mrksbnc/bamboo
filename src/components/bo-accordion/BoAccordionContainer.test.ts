import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoAccordion from './BoAccordion.vue';
import BoAccordionContainer from './BoAccordionContainer.vue';

describe('BoAccordionContainer.vue', () => {
	it('renders accordion items', () => {
		const wrapper = mount(BoAccordionContainer, {
			slots: {
				default: `
          <bo-accordion title="Item 1" />
          <bo-accordion title="Item 2" />
          <bo-accordion title="Item 3" />
        `,
			},
			global: {
				components: {
					BoAccordion,
				},
			},
		});
		expect(wrapper.findAllComponents(BoAccordion)).toHaveLength(3);
	});

	it('allows multiple items to be open when allowMultiple is true', async () => {
		const wrapper = mount(BoAccordionContainer, {
			props: { allowMultiple: true },
			slots: {
				default: `
          <bo-accordion title="Item 1" />
          <bo-accordion title="Item 2" />
        `,
			},
			global: {
				components: {
					BoAccordion,
				},
			},
		});

		const accordions = wrapper.findAllComponents(BoAccordion);
		await accordions[0].find('.bo-accordion-header').trigger('click');
		await accordions[1].find('.bo-accordion-header').trigger('click');

		expect(accordions[0].find('.bo-accordion-body').exists()).toBe(true);
		expect(accordions[1].find('.bo-accordion-body').exists()).toBe(true);
	});

	it('only allows one item to be open when allowMultiple is false', async () => {
		const wrapper = mount(BoAccordionContainer, {
			props: { allowMultiple: false },
			slots: {
				default: `
          <bo-accordion title="Item 1" />
          <bo-accordion title="Item 2" />
        `,
			},
			global: {
				components: {
					BoAccordion,
				},
			},
		});

		const accordions = wrapper.findAllComponents(BoAccordion);
		await accordions[0].find('.bo-accordion-header').trigger('click');
		await accordions[1].find('.bo-accordion-header').trigger('click');

		expect(accordions[0].find('.bo-accordion-body').exists()).toBe(false);
		expect(accordions[1].find('.bo-accordion-body').exists()).toBe(true);
	});

	it('keeps at least one item open when alwaysOpen is true', async () => {
		const wrapper = mount(BoAccordionContainer, {
			props: { alwaysOpen: true },
			slots: {
				default: `
          <bo-accordion title="Item 1" />
          <bo-accordion title="Item 2" />
        `,
			},
			global: {
				components: {
					BoAccordion,
				},
			},
		});

		const accordions = wrapper.findAllComponents(BoAccordion);
		await accordions[0].find('.bo-accordion-header').trigger('click');
		await accordions[1].find('.bo-accordion-header').trigger('click');
		await accordions[1].find('.bo-accordion-header').trigger('click');

		// At least one accordion should be open
		const openAccordions = accordions.filter((accordion) =>
			accordion.find('.bo-accordion-body').exists(),
		);
		expect(openAccordions.length).toBeGreaterThan(0);
	});

	it('opens default accordion when defaultOpen is provided', () => {
		const wrapper = mount(BoAccordionContainer, {
			props: { defaultOpen: 'item-2' },
			slots: {
				default: `
          <bo-accordion title="Item 1" id="item-1" />
          <bo-accordion title="Item 2" id="item-2" />
        `,
			},
			global: {
				components: {
					BoAccordion,
				},
			},
		});

		const accordions = wrapper.findAllComponents(BoAccordion);
		expect(accordions[0].find('.bo-accordion-body').exists()).toBe(false);
		expect(accordions[1].find('.bo-accordion-body').exists()).toBe(true);
	});

	it('updates open items when accordions are toggled', async () => {
		const wrapper = mount(BoAccordionContainer, {
			props: { allowMultiple: true },
			slots: {
				default: `
          <bo-accordion title="Item 1" id="item-1" />
          <bo-accordion title="Item 2" id="item-2" />
        `,
			},
			global: {
				components: {
					BoAccordion,
				},
			},
		});

		const accordions = wrapper.findAllComponents(BoAccordion);
		await accordions[0].find('.bo-accordion-header').trigger('click');
		await accordions[1].find('.bo-accordion-header').trigger('click');

		// Check that both items are open
		expect(accordions[0].find('.bo-accordion-body').exists()).toBe(true);
		expect(accordions[1].find('.bo-accordion-body').exists()).toBe(true);

		// Close one item
		await accordions[0].find('.bo-accordion-header').trigger('click');
		expect(accordions[0].find('.bo-accordion-body').exists()).toBe(false);
		expect(accordions[1].find('.bo-accordion-body').exists()).toBe(true);
	});
});
