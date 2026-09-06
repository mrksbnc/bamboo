import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { BoIcon } from '../bo-icon';
import BoNavigationMenuItem from './bo-navigation-menu-item.vue';
import BoNavigationMenuTrigger from './bo-navigation-menu-trigger.vue';
import BoNavigationMenu from './bo-navigation-menu.vue';

describe('BoNavigationMenu', () => {
	it('renders links and trigger content', async () => {
		const wrapper = mount(BoNavigationMenu, {
			global: { components: { BoNavigationMenuItem, BoNavigationMenuTrigger, BoIcon } },
			slots: {
				default:
					'<bo-navigation-menu-item href="/" label="Home" /><bo-navigation-menu-trigger label="Products"><p>Flyout</p></bo-navigation-menu-trigger>',
			},
		});
		expect(wrapper.find('nav').exists()).toBe(true);
		expect(wrapper.find('a').text()).toContain('Home');
		await wrapper.find('[data-slot="navigation-menu-trigger"]').trigger('click');
		expect(wrapper.text()).toContain('Flyout');
	});
});
