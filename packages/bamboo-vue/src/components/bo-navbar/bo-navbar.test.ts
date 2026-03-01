import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BoNavbar from './bo-navbar.vue';

describe('BoNavbar', () => {
	it('renders brand, nav and action slots', () => {
		const wrapper = mount(BoNavbar, {
			slots: {
				brand: '<div>Brand</div>',
				default: '<div>Main</div>',
				actions: '<button>Action</button>',
			},
		});

		expect(wrapper.text()).toContain('Brand');
		expect(wrapper.text()).toContain('Main');
		expect(wrapper.text()).toContain('Action');
	});

	it('applies floating variant styles by default', () => {
		const wrapper = mount(BoNavbar);
		const shell = wrapper.find('nav > div');

		expect(shell.classes()).toContain('backdrop-blur-xl');
		expect(shell.classes()).toContain('bg-white/80');
	});

	it('respects position and offset props', () => {
		const wrapper = mount(BoNavbar, {
			props: {
				position: 'fixed',
				offset: 'lg',
			},
		});

		const nav = wrapper.find('nav');
		expect(nav.classes()).toContain('fixed');
		expect(nav.classes()).toContain('top-6');
	});

	it('toggles rounded, shadow and border classes', () => {
		const wrapper = mount(BoNavbar, {
			props: {
				rounded: false,
				shadow: false,
				border: false,
			},
		});

		const shell = wrapper.find('nav > div');
		expect(shell.classes()).not.toContain('rounded-2xl');
		expect(shell.classes()).not.toContain('shadow-lg');
		expect(shell.classes().some((cls) => cls.startsWith('border'))).toBe(false);
	});

	it('sets accessibility attributes', () => {
		const wrapper = mount(BoNavbar, {
			props: {
				ariaLabel: 'Primary navigation',
				ariaLabelledBy: 'nav-title',
				ariaDescribedBy: 'nav-helper',
			},
		});

		const nav = wrapper.find('nav');
		expect(nav.attributes('aria-label')).toBe('Primary navigation');
		expect(nav.attributes('aria-labelledby')).toBe('nav-title');
		expect(nav.attributes('aria-describedby')).toBe('nav-helper');
	});
});
