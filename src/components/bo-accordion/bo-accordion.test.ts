import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BoAccordion from './bo-accordion.vue';
import BoAccordionItem from './bo-accordion-item.vue';

describe('BoAccordion', () => {
	describe('Rendering', () => {
		it('renders accordion element', () => {
			const wrapper = mount(BoAccordion);
			expect(wrapper.find('.bo-accordion').exists()).toBe(true);
		});

		it('has default id', () => {
			const wrapper = mount(BoAccordion);
			expect(wrapper.attributes('id')).toBeDefined();
		});

		it('has default data-testid', () => {
			const wrapper = mount(BoAccordion);
			expect(wrapper.attributes('data-testid')).toBeDefined();
		});

		it('applies custom id', () => {
			const wrapper = mount(BoAccordion, {
				props: {
					id: 'custom-accordion-id',
				},
			});
			expect(wrapper.attributes('id')).toBe('custom-accordion-id');
		});

		it('applies custom data-testid', () => {
			const wrapper = mount(BoAccordion, {
				props: {
					dataTestId: 'custom-testid',
				},
			});
			expect(wrapper.attributes('data-testid')).toBe('custom-testid');
		});

		it('applies custom CSS class', () => {
			const wrapper = mount(BoAccordion, {
				props: {
					customCssClass: 'my-custom-class',
				},
			});
			expect(wrapper.find('.my-custom-class').exists()).toBe(true);
		});

		it('renders slot content', () => {
			const wrapper = mount(BoAccordion, {
				slots: {
					default: '<div class="test-content">Content</div>',
				},
			});
			expect(wrapper.find('.test-content').exists()).toBe(true);
		});
	});

	describe('Single Mode', () => {
		it('emits update:modelValue when item is toggled', async () => {
			const wrapper = mount(BoAccordion, {
				props: {
					modelValue: '',
					multiple: false,
				},
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Item 1">Content 1</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			const item = wrapper.findComponent(BoAccordionItem);
			await item.find('.bo-accordion-item__header').trigger('click');

			expect(wrapper.emitted('update:modelValue')).toBeTruthy();
			expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['item1']);
		});

		it('closes item when clicked again', async () => {
			const wrapper = mount(BoAccordion, {
				props: {
					modelValue: 'item1',
					multiple: false,
				},
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Item 1">Content 1</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			const item = wrapper.findComponent(BoAccordionItem);
			await item.find('.bo-accordion-item__header').trigger('click');

			expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['']);
		});

		it('closes previous item when opening new item', async () => {
			const wrapper = mount(BoAccordion, {
				props: {
					modelValue: 'item1',
					multiple: false,
				},
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Item 1">Content 1</bo-accordion-item>
						<bo-accordion-item value="item2" title="Item 2">Content 2</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			const items = wrapper.findAllComponents(BoAccordionItem);
			await items[1]!.find('.bo-accordion-item__header').trigger('click');

			expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['item2']);
		});
	});

	describe('Multiple Mode', () => {
		it('allows multiple items to be open', async () => {
			const wrapper = mount(BoAccordion, {
				props: {
					modelValue: ['item1'],
					multiple: true,
				},
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Item 1">Content 1</bo-accordion-item>
						<bo-accordion-item value="item2" title="Item 2">Content 2</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			const items = wrapper.findAllComponents(BoAccordionItem);
			await items[1]!.find('.bo-accordion-item__header').trigger('click');

			expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['item1', 'item2']]);
		});

		it('toggles item off in multiple mode', async () => {
			const wrapper = mount(BoAccordion, {
				props: {
					modelValue: ['item1', 'item2'],
					multiple: true,
				},
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Item 1">Content 1</bo-accordion-item>
						<bo-accordion-item value="item2" title="Item 2">Content 2</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			const items = wrapper.findAllComponents(BoAccordionItem);
			await items[0]!.find('.bo-accordion-item__header').trigger('click');

			expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['item2']]);
		});

		it('handles empty array as modelValue', async () => {
			const wrapper = mount(BoAccordion, {
				props: {
					modelValue: [],
					multiple: true,
				},
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Item 1">Content 1</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			const item = wrapper.findComponent(BoAccordionItem);
			await item.find('.bo-accordion-item__header').trigger('click');

			expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['item1']]);
		});
	});

	describe('Accordion Item', () => {
		it('renders item with title', () => {
			const wrapper = mount(BoAccordion, {
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Test Title">Content</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			expect(wrapper.text()).toContain('Test Title');
		});

		it('applies open class when item is open', () => {
			const wrapper = mount(BoAccordion, {
				props: {
					modelValue: 'item1',
				},
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Test">Content</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			const item = wrapper.findComponent(BoAccordionItem);
			expect(item.find('.bo-accordion-item--open').exists()).toBe(true);
		});

		it('applies open class to content when item is open', () => {
			const wrapper = mount(BoAccordion, {
				props: {
					modelValue: 'item1',
				},
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Test">Content</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			const item = wrapper.findComponent(BoAccordionItem);
			expect(item.find('.bo-accordion-item__content--open').exists()).toBe(true);
		});

		it('applies open class to chevron when item is open', () => {
			const wrapper = mount(BoAccordion, {
				props: {
					modelValue: 'item1',
				},
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Test">Content</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			const item = wrapper.findComponent(BoAccordionItem);
			expect(item.find('.bo-accordion-item__chevron--open').exists()).toBe(true);
		});

		it('renders item content', () => {
			const wrapper = mount(BoAccordion, {
				props: {
					modelValue: 'item1',
				},
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Test">
							<p class="test-content">Test Content</p>
						</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			expect(wrapper.find('.test-content').exists()).toBe(true);
			expect(wrapper.text()).toContain('Test Content');
		});

		it('does not show leading icon when icon prop is not provided', () => {
			const wrapper = mount(BoAccordion, {
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Test">Content</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			const item = wrapper.findComponent(BoAccordionItem);
			expect(item.find('.bo-accordion-item__leading-icon').exists()).toBe(false);
		});
	});

	describe('Disabled State', () => {
		it('does not toggle when disabled item is clicked', async () => {
			const wrapper = mount(BoAccordion, {
				props: {
					modelValue: '',
				},
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Test" disabled>Content</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			const item = wrapper.findComponent(BoAccordionItem);
			await item.find('.bo-accordion-item__header').trigger('click');

			expect(wrapper.emitted('update:modelValue')).toBeFalsy();
		});

		it('applies disabled attribute to button', () => {
			const wrapper = mount(BoAccordion, {
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Test" disabled>Content</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			const item = wrapper.findComponent(BoAccordionItem);
			const button = item.find('.bo-accordion-item__header');
			expect(button.attributes('disabled')).toBeDefined();
		});
	});

	describe('ARIA Attributes', () => {
		it('has proper aria-expanded attribute when open', () => {
			const wrapper = mount(BoAccordion, {
				props: {
					modelValue: 'item1',
				},
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Test">Content</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			const item = wrapper.findComponent(BoAccordionItem);
			const button = item.find('.bo-accordion-item__header');
			expect(button.attributes('aria-expanded')).toBe('true');
		});

		it('has proper aria-expanded attribute when closed', () => {
			const wrapper = mount(BoAccordion, {
				props: {
					modelValue: '',
				},
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Test">Content</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			const item = wrapper.findComponent(BoAccordionItem);
			const button = item.find('.bo-accordion-item__header');
			expect(button.attributes('aria-expanded')).toBe('false');
		});

		it('has proper aria-controls attribute', () => {
			const wrapper = mount(BoAccordion, {
				props: {
					id: 'test-accordion',
				},
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Test">Content</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			const item = wrapper.findComponent(BoAccordionItem);
			const button = item.find('.bo-accordion-item__header');
			expect(button.attributes('aria-controls')).toBe('test-accordion-content-item1');
		});

		it('has proper aria-labelledby attribute on content', () => {
			const wrapper = mount(BoAccordion, {
				props: {
					id: 'test-accordion',
					modelValue: 'item1',
				},
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Test">Content</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			const item = wrapper.findComponent(BoAccordionItem);
			const content = item.find('.bo-accordion-item__content');
			expect(content.attributes('aria-labelledby')).toBe('test-accordion-header-item1');
		});

		it('has proper aria-hidden attribute when closed', () => {
			const wrapper = mount(BoAccordion, {
				props: {
					modelValue: '',
				},
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Test">Content</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			const item = wrapper.findComponent(BoAccordionItem);
			const content = item.find('.bo-accordion-item__content');
			expect(content.attributes('aria-hidden')).toBe('true');
		});

		it('has proper aria-hidden attribute when open', () => {
			const wrapper = mount(BoAccordion, {
				props: {
					modelValue: 'item1',
				},
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Test">Content</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			const item = wrapper.findComponent(BoAccordionItem);
			const content = item.find('.bo-accordion-item__content');
			expect(content.attributes('aria-hidden')).toBe('false');
		});

		it('has role="region" on content', () => {
			const wrapper = mount(BoAccordion, {
				props: {
					modelValue: 'item1',
				},
				slots: {
					default: `
						<bo-accordion-item value="item1" title="Test">Content</bo-accordion-item>
					`,
				},
				global: {
					components: {
						BoAccordionItem,
					},
				},
			});

			const item = wrapper.findComponent(BoAccordionItem);
			const content = item.find('.bo-accordion-item__content');
			expect(content.attributes('role')).toBe('region');
		});
	});
});
