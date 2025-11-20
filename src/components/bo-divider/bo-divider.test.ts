import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import BoDivider from './bo-divider.vue';

describe('BoDivider', () => {
	test('should render horizontal divider by default', () => {
		const wrapper = mount(BoDivider);
		expect(wrapper.classes()).toContain('bo-divider--horizontal');
	});

	test('should render vertical divider', () => {
		const wrapper = mount(BoDivider, {
			props: {
				orientation: 'vertical',
			},
		});
		expect(wrapper.classes()).toContain('bo-divider--vertical');
	});

	test('should render with text', () => {
		const wrapper = mount(BoDivider, {
			props: {
				text: 'OR',
			},
		});
		const textComponent = wrapper.findComponent({ name: 'BoText' });
		expect(textComponent.exists()).toBe(true);
		expect(textComponent.props('value')).toBe('OR');
	});

	test('should render with slot content', () => {
		const wrapper = mount(BoDivider, {
			slots: {
				default: 'Custom Text',
			},
		});
		expect(wrapper.find('.bo-divider__text').text()).toBe('Custom Text');
	});
});
