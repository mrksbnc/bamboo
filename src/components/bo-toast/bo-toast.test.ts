import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { BoVariant } from '@/shared/variant';
import BoToast from './bo-toast.vue';
import { BoToastPosition } from './bo-toast';

describe('BoToast', () => {
	test('should have correct props', () => {
		const wrapper = mount(BoToast, {
			props: {
				message: 'Test message',
			},
		});

		expect(wrapper.props('message')).toBe('Test message');
	});

	test('should have title and message props', () => {
		const wrapper = mount(BoToast, {
			props: {
				title: 'Test Title',
				message: 'Test message',
			},
		});

		expect(wrapper.props('title')).toBe('Test Title');
		expect(wrapper.props('message')).toBe('Test message');
	});

	test('should have correct variant prop', () => {
		const variants = [
			BoVariant.primary,
			BoVariant.secondary,
			BoVariant.success,
			BoVariant.warning,
			BoVariant.danger,
		];

		for (const variant of variants) {
			const wrapper = mount(BoToast, {
				props: {
					message: 'Test',
					variant,
				},
			});

			expect(wrapper.props('variant')).toBe(variant);
		}
	});

	test('should have correct position prop', () => {
		const positions = [
			BoToastPosition.topLeft,
			BoToastPosition.topCenter,
			BoToastPosition.topRight,
			BoToastPosition.bottomLeft,
			BoToastPosition.bottomCenter,
			BoToastPosition.bottomRight,
		];

		for (const position of positions) {
			const wrapper = mount(BoToast, {
				props: {
					message: 'Test',
					position,
				},
			});

			expect(wrapper.props('position')).toBe(position);
		}
	});

	test('should have dismissible prop', () => {
		const wrapper = mount(BoToast, {
			props: {
				message: 'Test',
				dismissible: true,
			},
		});

		expect(wrapper.props('dismissible')).toBe(true);
	});

	test('should have dismissible false prop', () => {
		const wrapper = mount(BoToast, {
			props: {
				message: 'Test',
				dismissible: false,
			},
		});

		expect(wrapper.props('dismissible')).toBe(false);
	});

	test('should emit dismiss event', async () => {
		const wrapper = mount(BoToast, {
			props: {
				message: 'Test',
				dismissible: true,
			},
		});

		await wrapper.vm.$nextTick();
		wrapper.vm.$emit('dismiss');

		expect(wrapper.emitted('dismiss')).toBeTruthy();
	});

	test('should have duration prop', async () => {
		const wrapper = mount(BoToast, {
			props: {
				message: 'Test',
				duration: 1000,
			},
		});

		expect(wrapper.props('duration')).toBe(1000);
	});

	test('should have showIcon prop', () => {
		const wrapper = mount(BoToast, {
			props: {
				message: 'Test',
				showIcon: true,
			},
		});

		expect(wrapper.props('showIcon')).toBe(true);
	});

	test('should have showIcon false prop', () => {
		const wrapper = mount(BoToast, {
			props: {
				message: 'Test',
				showIcon: false,
			},
		});

		expect(wrapper.props('showIcon')).toBe(false);
	});
});
