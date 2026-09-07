import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { BoIcon } from '../bo-icon';
import BoMenubarItem from './bo-menubar-item.vue';
import BoMenubarTrigger from './bo-menubar-trigger.vue';
import BoMenubar from './bo-menubar.vue';

describe('BoMenubar', () => {
	it('renders a labelled menubar and opens a menu', async () => {
		const wrapper = mount(BoMenubar, {
			global: { components: { BoMenubarTrigger, BoMenubarItem, BoIcon } },
			slots: {
				default:
					'<bo-menubar-trigger label="File"><bo-menubar-item value="Open" /></bo-menubar-trigger>',
			},
		});
		expect(wrapper.find('[role="menubar"]').exists()).toBe(true);
		expect(wrapper.attributes('data-placement')).toBe('top');
		await wrapper.find('[role="menuitem"]').trigger('click');
		expect(wrapper.find('[role="menu"]').exists()).toBe(true);
		expect(wrapper.attributes('data-state')).toBe('open');
	});

	it('renders start, main, and end slots in a floating shell', () => {
		const wrapper = mount(BoMenubar, {
			slots: {
				start: '<span data-slot="start">Brand</span>',
				main: '<span data-slot="main">Menus</span>',
				end: '<span data-slot="end">Actions</span>',
			},
		});

		expect(wrapper.element.tagName).toBe('NAV');
		expect(wrapper.find('[data-slot="start"]').exists()).toBe(true);
		expect(wrapper.find('[data-slot="main"]').exists()).toBe(true);
		expect(wrapper.find('[data-slot="end"]').exists()).toBe(true);
		expect(wrapper.classes()).toContain('bo-menubar--top');
	});

	it('supports menubar and dropdown keyboard navigation', async () => {
		const wrapper = mount(BoMenubar, {
			attachTo: document.body,
			global: { components: { BoMenubarTrigger, BoMenubarItem, BoIcon } },
			slots: {
				default:
					'<bo-menubar-trigger label="File"><bo-menubar-item value="Open" /></bo-menubar-trigger><bo-menubar-trigger label="Edit"><bo-menubar-item value="Undo" /></bo-menubar-trigger>',
			},
		});
		const triggers = wrapper.findAll('[data-menubar-trigger]');

		await triggers[0]!.trigger('keydown', { key: 'ArrowRight' });
		expect(document.activeElement).toBe(triggers[1]!.element);
		await triggers[1]!.trigger('keydown', { key: 'Home' });
		expect(document.activeElement).toBe(triggers[0]!.element);
		await triggers[0]!.trigger('keydown', { key: 'End' });
		expect(document.activeElement).toBe(triggers[1]!.element);
		await triggers[1]!.trigger('keydown', { key: 'ArrowLeft' });
		expect(document.activeElement).toBe(triggers[0]!.element);

		await triggers[1]!.trigger('keydown', { key: 'ArrowDown' });
		const secondMenu = wrapper.find('[role="menu"]');
		const secondItem = secondMenu.find('[role="menuitem"]');
		expect(triggers[1]!.attributes('aria-expanded')).toBe('true');
		expect(triggers[1]!.attributes('aria-controls')).toBe(secondMenu.attributes('id'));
		expect(document.activeElement).toBe(secondItem.element);

		await secondItem.trigger('keydown', { key: 'Escape' });
		expect(triggers[1]!.attributes('aria-expanded')).toBe('false');
		expect(document.activeElement).toBe(triggers[1]!.element);
	});
});
