import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BoSidebar from './bo-sidebar.vue';

describe('BoSidebar', () => {
	it('renders header, default and footer slots', () => {
		const wrapper = mount(BoSidebar, {
			slots: {
				header: '<div>Header</div>',
				default: '<div>Body</div>',
				footer: '<div>Footer</div>',
			},
		});

		expect(wrapper.text()).toContain('Header');
		expect(wrapper.text()).toContain('Body');
		expect(wrapper.text()).toContain('Footer');
	});

	it('applies floating variant styles by default', () => {
		const wrapper = mount(BoSidebar);
		const panel = wrapper.find('aside > div');

		expect(panel.classes()).toContain('backdrop-blur-xl');
		expect(panel.classes()).toContain('bg-white/80');
	});

	it('applies width classes and collapsed state', () => {
		const expanded = mount(BoSidebar, { props: { width: 'wide' } });
		expect(expanded.classes()).toContain('w-72');

		const collapsed = mount(BoSidebar, { props: { collapsed: true, collapsedWidth: 'icon' } });
		expect(collapsed.classes()).toContain('w-16');
	});

	it('applies max width classes', () => {
		const wrapper = mount(BoSidebar, { props: { maxWidth: 'md' } });
		const panel = wrapper.find('aside > div');
		expect(panel.classes()).toContain('max-w-md');
	});

	it('respects position and side props', () => {
		const wrapper = mount(BoSidebar, {
			props: { position: 'fixed', side: 'right', offset: 'sm' },
		});

		expect(wrapper.classes()).toContain('fixed');
		expect(wrapper.classes()).toContain('right-0');
		expect(wrapper.classes()).toContain('top-2');
	});

	it('toggles scrollable content', () => {
		const scrollable = mount(BoSidebar, { props: { scrollable: true } });
		const content = scrollable.find('div.grow');
		expect(content.exists()).toBe(true);
		expect(content.classes()).toContain('overflow-y-auto');

		const nonScrollable = mount(BoSidebar, { props: { scrollable: false } });
		const content2 = nonScrollable.find('div.grow');
		expect(content2.exists()).toBe(true);
		expect(content2.classes()).not.toContain('overflow-y-auto');
	});

	it('sets accessibility attributes', () => {
		const wrapper = mount(BoSidebar, {
			props: {
				ariaLabel: 'Auxiliary navigation',
				ariaLabelledBy: 'sidebar-heading',
				ariaDescribedBy: 'sidebar-desc',
			},
		});

		const aside = wrapper.find('aside');
		expect(aside.attributes('aria-label')).toBe('Auxiliary navigation');
		expect(aside.attributes('aria-labelledby')).toBe('sidebar-heading');
		expect(aside.attributes('aria-describedby')).toBe('sidebar-desc');
	});
});
