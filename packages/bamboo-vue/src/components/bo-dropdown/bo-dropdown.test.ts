import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoDropdown from './bo-dropdown.vue';

describe('BoDropdown', () => {
	it('opens its menu from the trigger', async () => {
		const wrapper = mount(BoDropdown, { slots: { default: 'Item', trigger: 'Open' } });
		await wrapper.find('button').trigger('click');
		expect(wrapper.find('[role="menu"]').exists()).toBe(true);
	});
});
