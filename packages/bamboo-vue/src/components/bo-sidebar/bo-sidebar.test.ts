import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { BoIcon } from '../bo-icon';
import BoSidebarContent from './bo-sidebar-content.vue';
import BoSidebarMenuItem from './bo-sidebar-menu-item.vue';
import BoSidebarMenu from './bo-sidebar-menu.vue';
import BoSidebarTrigger from './bo-sidebar-trigger.vue';
import BoSidebar from './bo-sidebar.vue';

describe('BoSidebar', () => {
	it('renders navigation content and toggles its collapsed model', async () => {
		const wrapper = mount(BoSidebar, {
			global: {
				components: {
					BoSidebarContent,
					BoSidebarMenu,
					BoSidebarMenuItem,
					BoSidebarTrigger,
					BoIcon,
				},
			},
			props: { collapsible: true },
			slots: {
				default:
					'<bo-sidebar-content><bo-sidebar-menu><bo-sidebar-menu-item href="/" label="Home" /></bo-sidebar-menu></bo-sidebar-content><bo-sidebar-trigger />',
			},
		});
		expect(wrapper.find('a').attributes('href')).toBe('/');
		await wrapper.find('button').trigger('click');
		expect(wrapper.emitted('update:collapsed')).toEqual([[true]]);
	});
});
