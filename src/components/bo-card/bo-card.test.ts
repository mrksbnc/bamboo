import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import BoCard from './bo-card.vue';

describe('BoCard', () => {
	test('should render with title', () => {
		const wrapper = mount(BoCard, {
			props: {
				title: 'Card Title',
			},
		});

		expect(wrapper.text()).toContain('Card Title');
	});

	test('should render with subtitle', () => {
		const wrapper = mount(BoCard, {
			props: {
				title: 'Title',
				subtitle: 'Subtitle',
			},
		});

		expect(wrapper.text()).toContain('Subtitle');
	});

	test('should render slot content', () => {
		const wrapper = mount(BoCard, {
			slots: {
				default: '<div class="test-content">Content</div>',
			},
		});

		expect(wrapper.find('.test-content').exists()).toBe(true);
	});

	test('should apply hoverable class', () => {
		const wrapper = mount(BoCard, {
			props: {
				hoverable: true,
			},
		});

		expect(wrapper.classes()).toContain('bo-card--hoverable');
	});

	test('should apply clickable class', () => {
		const wrapper = mount(BoCard, {
			props: {
				clickable: true,
			},
		});

		expect(wrapper.classes()).toContain('bo-card--clickable');
	});

	test('should emit click event when clickable', async () => {
		const wrapper = mount(BoCard, {
			props: {
				clickable: true,
			},
		});

		await wrapper.trigger('click');

		expect(wrapper.emitted('click')).toBeTruthy();
	});
});
