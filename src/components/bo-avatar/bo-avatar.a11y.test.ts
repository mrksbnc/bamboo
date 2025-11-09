import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { fixture, expect as chaiExpect } from '@open-wc/testing';
import BoAvatar from './bo-avatar.vue';
import { BoAvatarShape } from './bo-avatar';
import { BoSize, BoVariant } from '@/shared';

describe('BoAvatar - a11y', () => {
	it('should have no violations with image and alt text', async () => {
		const wrapper = mount(BoAvatar, {
			props: {
				src: 'https://example.com/avatar.jpg',
				alt: 'User profile picture',
			},
		});

		await wrapper.vm.$nextTick();
		const element = await fixture(wrapper.element.outerHTML);
		await chaiExpect(element).to.be.accessible({
			ignoredRules: ['region'],
		});
	});

	it('should have no violations with text initials', async () => {
		const wrapper = mount(BoAvatar, {
			props: {
				text: 'JD',
			},
		});

		await wrapper.vm.$nextTick();
		const element = await fixture(wrapper.element.outerHTML);
		await chaiExpect(element).to.be.accessible({
			ignoredRules: ['region'],
		});
	});

	it('should have no violations with indicator', async () => {
		const wrapper = mount(BoAvatar, {
			props: {
				text: 'AB',
				showIndicator: true,
				indicatorVariant: BoVariant.success,
			},
		});

		await wrapper.vm.$nextTick();
		const element = await fixture(wrapper.element.outerHTML);
		await chaiExpect(element).to.be.accessible({
			ignoredRules: ['region'],
		});
	});

	it('should have no violations with different sizes', async () => {
		for (const size of Object.values(BoSize)) {
			const wrapper = mount(BoAvatar, {
				props: {
					text: 'AB',
					size,
				},
			});

			await wrapper.vm.$nextTick();
			const element = await fixture(wrapper.element.outerHTML);
			await chaiExpect(element).to.be.accessible({
				ignoredRules: ['region'],
			});
		}
	});

	it('should have no violations with different shapes', async () => {
		for (const shape of Object.values(BoAvatarShape)) {
			const wrapper = mount(BoAvatar, {
				props: {
					text: 'AB',
					shape,
				},
			});

			await wrapper.vm.$nextTick();
			const element = await fixture(wrapper.element.outerHTML);
			await chaiExpect(element).to.be.accessible({
				ignoredRules: ['region'],
			});
		}
	});

	it('should have no violations with custom colors', async () => {
		const wrapper = mount(BoAvatar, {
			props: {
				text: 'AB',
				customBackgroundColor: '#1e293b',
				customTextColor: '#f1f5f9',
			},
		});

		await wrapper.vm.$nextTick();
		const element = await fixture(wrapper.element.outerHTML);
		await chaiExpect(element).to.be.accessible({
			ignoredRules: ['region'],
		});
	});

	it('should include alt text for images', async () => {
		const wrapper = mount(BoAvatar, {
			props: {
				src: 'https://example.com/avatar.jpg',
				alt: 'John Doe profile picture',
			},
		});

		await wrapper.vm.$nextTick();
		const img = wrapper.find('img');
		expect(img.attributes('alt')).toBe('John Doe profile picture');
	});

	it('should have proper semantic structure', async () => {
		const wrapper = mount(BoAvatar, {
			props: {
				text: 'JD',
			},
		});

		await wrapper.vm.$nextTick();
		expect(wrapper.find('.bo-avatar').exists()).toBe(true);
		expect(wrapper.attributes('id')).toBeDefined();
		expect(wrapper.attributes('data-testid')).toBeDefined();
	});
});
