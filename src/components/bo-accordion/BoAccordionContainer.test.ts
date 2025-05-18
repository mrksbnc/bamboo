import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoAccordion from './BoAccordion.vue';
import BoAccordionContainer from './BoAccordionContainer.vue';

describe('BoAccordionContainer.vue', () => {
	it('renders with default props', () => {
		const wrapper = mount(BoAccordionContainer);
		expect(wrapper.classes()).toContain('bo-accordion-container');
	});

	it('renders with multiple accordion items', () => {
		const wrapper = mount(BoAccordionContainer, {
			slots: {
				default: [
					'<bo-accordion title="Item 1">Content 1</bo-accordion>',
					'<bo-accordion title="Item 2">Content 2</bo-accordion>',
				],
			},
			global: {
				components: {
					BoAccordion,
				},
			},
		});
		const accordions = wrapper.findAllComponents(BoAccordion);
		expect(accordions).toHaveLength(2);
	});

	it('allows multiple items to be open when allowMultiple is true', async () => {
		const wrapper = mount(BoAccordionContainer, {
			props: { allowMultiple: true },
			slots: {
				default: [
					'<bo-accordion title="Item 1">Content 1</bo-accordion>',
					'<bo-accordion title="Item 2">Content 2</bo-accordion>',
				],
			},
			global: {
				components: {
					BoAccordion,
				},
			},
		});

		const accordions = wrapper.findAllComponents(BoAccordion);
		await accordions[0].find('.bo-accordion__header').trigger('click');
		await accordions[1].find('.bo-accordion__header').trigger('click');

		expect(accordions[0].emitted('toggle')).toBeTruthy();
		expect(accordions[1].emitted('toggle')).toBeTruthy();
	});

	it('keeps at least one item open when alwaysOpen is true', async () => {
		const wrapper = mount(BoAccordionContainer, {
			props: { alwaysOpen: true },
			slots: {
				default: [
					'<bo-accordion title="Item 1" :open="true">Content 1</bo-accordion>',
					'<bo-accordion title="Item 2">Content 2</bo-accordion>',
				],
			},
			global: {
				components: {
					BoAccordion,
				},
			},
		});

		const accordions = wrapper.findAllComponents(BoAccordion);
		await accordions[0].find('.bo-accordion__header').trigger('click');
		expect(accordions[0].emitted('toggle')).toBeFalsy();
	});

	it('opens default item when defaultOpen is set', () => {
		const wrapper = mount(BoAccordionContainer, {
			props: { defaultOpen: 'item-2' },
			slots: {
				default: [
					'<bo-accordion id="item-1" title="Item 1">Content 1</bo-accordion>',
					'<bo-accordion id="item-2" title="Item 2">Content 2</bo-accordion>',
				],
			},
			global: {
				components: {
					BoAccordion,
				},
			},
		});

		const accordions = wrapper.findAllComponents(BoAccordion);
		expect(accordions[1].props('open')).toBe(true);
	});

	it('registers and unregisters accordion items', async () => {
		const wrapper = mount(BoAccordionContainer, {
			slots: {
				default: '<bo-accordion title="Item 1">Content 1</bo-accordion>',
			},
			global: {
				components: {
					BoAccordion,
				},
			},
		});

		const accordion = wrapper.findComponent(BoAccordion);
		expect(accordion.exists()).toBe(true);

		await wrapper.setProps({ defaultOpenItemId: accordion.props('id') });
		expect(accordion.props('open')).toBe(true);
	});
});
