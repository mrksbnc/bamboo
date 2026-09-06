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
		await wrapper.find('[role="menuitem"]').trigger('click');
		expect(wrapper.find('[role="menu"]').exists()).toBe(true);
	});
});
