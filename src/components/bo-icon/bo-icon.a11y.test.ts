import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { fixture, expect as chaiExpect } from '@open-wc/testing';
import BoIcon from './bo-icon.vue';
import { Icon } from './bo-icon';

describe('BoIcon - a11y', () => {
	it('should have no violations for decorative icon', async () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.check,
				decorative: true,
			},
		});

		// Wait for icon to load
		await wrapper.vm.$nextTick();
		await new Promise((resolve) => setTimeout(resolve, 100));

		const element = await fixture(wrapper.element.outerHTML);
		// Disable region rule for isolated component testing
		await chaiExpect(element).to.be.accessible({
			ignoredRules: ['region'],
		});
	});

	it('should have no violations for informative icon with aria-label', async () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.check,
				decorative: false,
				ariaLabel: 'Success',
			},
		});

		await wrapper.vm.$nextTick();
		await new Promise((resolve) => setTimeout(resolve, 100));

		const element = await fixture(wrapper.element.outerHTML);
		// Disable region rule for isolated component testing
		await chaiExpect(element).to.be.accessible({
			ignoredRules: ['region'],
		});
	});

	it('should hide decorative icons from screen readers', async () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.chevron_down,
				decorative: true,
			},
		});

		await wrapper.vm.$nextTick();
		await new Promise((resolve) => setTimeout(resolve, 100));

		const icon = wrapper.find('i');
		expect(icon.attributes('aria-hidden')).toBe('true');
		expect(icon.attributes('role')).toBeUndefined();
	});

	it('should expose informative icons to screen readers', async () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.info,
				decorative: false,
				ariaLabel: 'Information',
			},
		});

		await wrapper.vm.$nextTick();
		await new Promise((resolve) => setTimeout(resolve, 100));

		const icon = wrapper.find('i');
		expect(icon.attributes('aria-hidden')).toBeUndefined();
		expect(icon.attributes('role')).toBe('img');
		expect(icon.attributes('aria-label')).toBe('Information');
	});
});
