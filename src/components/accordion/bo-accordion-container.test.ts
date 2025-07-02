import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoAccordionContainer from './bo-accordion-container.vue';
import BoAccordion from './bo-accordion.vue';

describe('BoAccordionContainer', () => {
	const defaultProps = {
		id: 'test-container',
	};

	const createAccordion = (id: string, title: string) => ({
		template: `
			<bo-accordion
				:id="id"
				:title="title"
				@toggle="$emit('toggle', $event)"
			>
				Content for ${title}
			</bo-accordion>
		`,
		components: {
			BoAccordion,
		},
		props: ['id', 'title'],
		emits: ['toggle'],
	});

	it('renders with default props', () => {
		const wrapper = mount(BoAccordionContainer, {
			props: defaultProps,
		});

		expect(wrapper.find('.bo-accordion-container').exists()).toBe(true);
	});

	it('renders multiple accordions', () => {
		const wrapper = mount(BoAccordionContainer, {
			props: defaultProps,
			slots: {
				default: [createAccordion('acc1', 'Accordion 1'), createAccordion('acc2', 'Accordion 2')],
			},
		});

		const accordions = wrapper.findAllComponents(BoAccordion);
		expect(accordions).toHaveLength(2);
	});

	it('handles single accordion open at a time by default', async () => {
		const wrapper = mount(BoAccordionContainer, {
			props: defaultProps,
			slots: {
				default: [createAccordion('acc1', 'Accordion 1'), createAccordion('acc2', 'Accordion 2')],
			},
		});

		const accordions = wrapper.findAllComponents(BoAccordion);
		await accordions[0].find('.bo-accordion__header').trigger('click');
		await wrapper.vm.$nextTick();
		expect(accordions[0].classes()).toContain('bo-accordion--open');
		expect(accordions[1].classes()).not.toContain('bo-accordion--open');

		await accordions[1].find('.bo-accordion__header').trigger('click');
		await wrapper.vm.$nextTick();
		expect(accordions[0].classes()).not.toContain('bo-accordion--open');
		expect(accordions[1].classes()).toContain('bo-accordion--open');
	});

	it('allows multiple accordions open when allowMultiple is true', async () => {
		const wrapper = mount(BoAccordionContainer, {
			props: {
				...defaultProps,
				allowMultiple: true,
			},
			slots: {
				default: [createAccordion('acc1', 'Accordion 1'), createAccordion('acc2', 'Accordion 2')],
			},
		});

		const accordions = wrapper.findAllComponents(BoAccordion);
		await accordions[0].find('.bo-accordion__header').trigger('click');
		await wrapper.vm.$nextTick();
		await accordions[1].find('.bo-accordion__header').trigger('click');
		await wrapper.vm.$nextTick();

		expect(accordions[0].classes()).toContain('bo-accordion--open');
		expect(accordions[1].classes()).toContain('bo-accordion--open');
	});

	it('keeps one accordion open when alwaysOpen is true', async () => {
		const wrapper = mount(BoAccordionContainer, {
			props: {
				...defaultProps,
				alwaysOpen: true,
			},
			slots: {
				default: [createAccordion('acc1', 'Accordion 1')],
			},
		});

		const accordion = wrapper.findComponent(BoAccordion);
		await accordion.find('.bo-accordion__header').trigger('click');
		await wrapper.vm.$nextTick();
		expect(accordion.classes()).toContain('bo-accordion--open');

		await accordion.find('.bo-accordion__header').trigger('click');
		await wrapper.vm.$nextTick();
		expect(accordion.classes()).toContain('bo-accordion--open');
	});

	it('opens default accordion on mount', async () => {
		const wrapper = mount(BoAccordionContainer, {
			props: {
				...defaultProps,
				defaultOpenItemId: 'acc1',
			},
			slots: {
				default: [createAccordion('acc1', 'Accordion 1'), createAccordion('acc2', 'Accordion 2')],
			},
		});

		await wrapper.vm.$nextTick();
		const accordions = wrapper.findAllComponents(BoAccordion);
		expect(accordions[0].classes()).toContain('bo-accordion--open');
		expect(accordions[1].classes()).not.toContain('bo-accordion--open');
	});

	it('sets first/last props on accordions correctly', () => {
		const wrapper = mount(BoAccordionContainer, {
			props: defaultProps,
			slots: {
				default: [
					createAccordion('acc1', 'Accordion 1'),
					createAccordion('acc2', 'Accordion 2'),
					createAccordion('acc3', 'Accordion 3'),
				],
			},
		});

		const accordions = wrapper.findAllComponents(BoAccordion);
		expect(accordions[0].props('isFirst')).toBe(true);
		expect(accordions[0].props('isLast')).toBe(false);
		expect(accordions[1].props('isFirst')).toBe(false);
		expect(accordions[1].props('isLast')).toBe(false);
		expect(accordions[2].props('isFirst')).toBe(false);
		expect(accordions[2].props('isLast')).toBe(true);
	});
});
