import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoBreadcrumb from './bo-breadcrumb.vue';

describe('BoBreadcrumb', () => {
	it('renders links, current page, separators and label', () => {
		const w = mount(BoBreadcrumb, {
			props: {
				items: [
					{ label: 'Home', href: '/' },
					{ label: 'Settings', href: '/settings' },
					{ label: 'Profile' },
				],
				separator: '>',
			},
		});
		expect(w.find('nav').attributes('aria-label')).toBe('Breadcrumb');
		expect(w.findAll('a')).toHaveLength(2);
		expect(w.find('[aria-current="page"]').text()).toBe('Profile');
		expect(w.findAll('[aria-hidden="true"]')).toHaveLength(2);
	});
});
