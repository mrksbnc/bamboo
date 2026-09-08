import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoDropdownContent from './bo-dropdown-content.vue';
import BoDropdownItem from './bo-dropdown-item.vue';
import BoDropdownLabel from './bo-dropdown-label.vue';
import BoDropdownSeparator from './bo-dropdown-separator.vue';
import BoDropdownTrigger from './bo-dropdown-trigger.vue';
import BoDropdown from './bo-dropdown.vue';

describe('BoDropdown', () => {
	it('opens its menu from the trigger', async () => {
		const wrapper = mount(BoDropdown, { slots: { default: 'Item', trigger: 'Open' } });
		await wrapper.find('button').trigger('click');
		expect(wrapper.find('[role="menu"]').exists()).toBe(true);
	});

	it('renders compound parts and closes after selecting an item', async () => {
		const wrapper = mount(BoDropdown, {
			attachTo: document.body,
			global: {
				components: {
					BoDropdownContent,
					BoDropdownItem,
					BoDropdownLabel,
					BoDropdownSeparator,
					BoDropdownTrigger,
				},
			},
			slots: {
				default:
					'<bo-dropdown-trigger>More</bo-dropdown-trigger><bo-dropdown-content><bo-dropdown-label>Actions</bo-dropdown-label><bo-dropdown-separator /><bo-dropdown-item>Delete</bo-dropdown-item></bo-dropdown-content>',
			},
		});
		const rootTrigger = wrapper.find('button');
		await rootTrigger.trigger('click');
		await wrapper.findAll('button')[1]!.trigger('click');
		await rootTrigger.trigger('click');
		expect(wrapper.text()).toContain('Actions');
		await wrapper.find('[role="menuitem"]').trigger('click');
		expect(wrapper.find('[role="menu"]').exists()).toBe(false);
		wrapper.unmount();
	});

	it('supports keyboard navigation, disabled items, and outside dismissal', async () => {
		const wrapper = mount(BoDropdown, {
			attachTo: document.body,
			global: { components: { BoDropdownItem } },
			slots: {
				default:
					'<bo-dropdown-item disabled>Disabled</bo-dropdown-item><bo-dropdown-item>First</bo-dropdown-item><bo-dropdown-item>Second</bo-dropdown-item>',
			},
		});
		const trigger = wrapper.find('button');
		await trigger.trigger('keydown', { key: 'ArrowDown' });
		await wrapper.vm.$nextTick();
		expect(document.activeElement?.textContent).toBe('First');
		await wrapper.find('[role="menu"]').trigger('keydown', { key: 'End' });
		await wrapper.vm.$nextTick();
		expect(document.activeElement?.textContent).toBe('Second');
		await wrapper.find('[role="menu"]').trigger('keydown', { key: 'Escape' });
		expect(wrapper.find('[role="menu"]').exists()).toBe(false);

		await trigger.trigger('click');
		document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
		await wrapper.vm.$nextTick();
		expect(wrapper.find('[role="menu"]').exists()).toBe(false);
		wrapper.unmount();
	});

	it('does not open when disabled', async () => {
		const wrapper = mount(BoDropdown, { props: { disabled: true } });
		await wrapper.find('button').trigger('click');
		expect(wrapper.find('[role="menu"]').exists()).toBe(false);
	});
});
