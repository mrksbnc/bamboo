import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import BoAlert from './bo-alert.vue';
import { BoVariant } from '@/shared/variant';

describe('BoAlert', () => {
	test('should render with message', () => {
		const wrapper = mount(BoAlert, {
			props: {
				message: 'Test message',
			},
		});

		expect(wrapper.text()).toContain('Test message');
	});

	test('should render with title and message', () => {
		const wrapper = mount(BoAlert, {
			props: {
				title: 'Test Title',
				message: 'Test message',
			},
		});

		expect(wrapper.text()).toContain('Test Title');
		expect(wrapper.text()).toContain('Test message');
	});

	test('should apply correct variant classes', () => {
		const variants = [
			BoVariant.primary,
			BoVariant.secondary,
			BoVariant.success,
			BoVariant.warning,
			BoVariant.danger,
			BoVariant.light,
			BoVariant.dark,
		];

		for (const variant of variants) {
			const wrapper = mount(BoAlert, {
				props: {
					message: 'Test',
					variant,
				},
			});

			expect(wrapper.classes()).toContain(`bo-alert--variant-${variant}`);
		}
	});

	test('should show dismiss button when dismissible', () => {
		const wrapper = mount(BoAlert, {
			props: {
				message: 'Test',
				dismissible: true,
			},
		});

		expect(wrapper.find('.bo-alert__close').exists()).toBe(true);
	});

	test('should emit dismiss event when close button clicked', async () => {
		const wrapper = mount(BoAlert, {
			props: {
				message: 'Test',
				dismissible: true,
			},
		});

		await wrapper.find('.bo-alert__close').trigger('click');

		expect(wrapper.emitted('dismiss')).toBeTruthy();
	});

	test('should hide alert when dismissed', async () => {
		const wrapper = mount(BoAlert, {
			props: {
				message: 'Test',
				dismissible: true,
			},
		});

		await wrapper.find('.bo-alert__close').trigger('click');
		await wrapper.vm.$nextTick();

		expect(wrapper.find('.bo-alert').exists()).toBe(false);
	});

	test('should show icon by default', () => {
		const wrapper = mount(BoAlert, {
			props: {
				message: 'Test',
			},
		});

		expect(wrapper.find('.bo-alert__icon-wrapper').exists()).toBe(true);
	});

	test('should hide icon when showIcon is false', () => {
		const wrapper = mount(BoAlert, {
			props: {
				message: 'Test',
				showIcon: false,
			},
		});

		expect(wrapper.find('.bo-alert__icon-wrapper').exists()).toBe(false);
	});

	test('should render slot content', () => {
		const wrapper = mount(BoAlert, {
			slots: {
				default: '<div class="custom-content">Custom content</div>',
			},
		});

		expect(wrapper.find('.custom-content').exists()).toBe(true);
		expect(wrapper.text()).toContain('Custom content');
	});
});
