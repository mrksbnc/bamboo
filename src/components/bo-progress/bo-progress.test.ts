import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import BoProgress from './bo-progress.vue';
import { BoSize } from '@/shared/size';
import { BoVariant } from '@/shared/variant';

describe('BoProgress', () => {
	test('should render with value', () => {
		const wrapper = mount(BoProgress, {
			props: {
				value: 50,
			},
		});

		const bar = wrapper.find('.bo-progress__bar');
		expect(bar.attributes('style')).toContain('width: 50%');
	});

	test('should clamp value between 0 and 100', () => {
		const wrapper1 = mount(BoProgress, {
			props: {
				value: -10,
			},
		});
		expect(wrapper1.find('.bo-progress__bar').attributes('style')).toContain('width: 0%');

		const wrapper2 = mount(BoProgress, {
			props: {
				value: 150,
			},
		});
		expect(wrapper2.find('.bo-progress__bar').attributes('style')).toContain('width: 100%');
	});

	test('should show label when provided', () => {
		const wrapper = mount(BoProgress, {
			props: {
				value: 50,
				label: 'Loading',
			},
		});

		expect(wrapper.find('.bo-progress__header').text()).toContain('Loading');
	});

	test('should show value when showValue is true', () => {
		const wrapper = mount(BoProgress, {
			props: {
				value: 75,
				showValue: true,
			},
		});

		expect(wrapper.find('.bo-progress__header').text()).toContain('75%');
	});

	test('should apply size classes', () => {
		const sizes = [BoSize.xs, BoSize.sm, BoSize.md, BoSize.lg, BoSize.xl];

		for (const size of sizes) {
			const wrapper = mount(BoProgress, {
				props: {
					value: 50,
					size,
				},
			});

			expect(wrapper.find('.bo-progress__track').classes()).toContain(
				`bo-progress__track--size-${size}`,
			);
		}
	});

	test('should apply variant classes', () => {
		const variants = [
			BoVariant.primary,
			BoVariant.secondary,
			BoVariant.success,
			BoVariant.warning,
			BoVariant.danger,
		];

		for (const variant of variants) {
			const wrapper = mount(BoProgress, {
				props: {
					value: 50,
					variant,
				},
			});

			expect(wrapper.find('.bo-progress__bar').classes()).toContain(
				`bo-progress__bar--variant-${variant}`,
			);
		}
	});
});
