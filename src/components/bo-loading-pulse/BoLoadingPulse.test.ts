import { BoSize } from '@/shared';
import { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo-loader';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoLoadingPulse from './BoLoadingPulse.vue';

describe('BoLoadingPulse', () => {
	it('renders correctly with default props', () => {
		const wrapper = mount(BoLoadingPulse);

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.classes()).toContain('bo-loading-pulse__container');
		expect(wrapper.attributes('role')).toBe('status');

		// Should have the inner pulse element
		expect(wrapper.find('.bo-loading-pulse__inner-pulse-relative').exists()).toBe(true);
		expect(wrapper.find('.bo-loading-pulse__outer-pulse-absolute').exists()).toBe(true);
	});

	it('applies different sizes correctly', async () => {
		const wrapper = mount(BoLoadingPulse, {
			props: {
				size: BoSize.default,
			},
		});

		const pulseElement = wrapper.find('.bo-loading-pulse__inner-pulse-relative');
		expect(pulseElement.classes()).toContain('size-[16px]');

		await wrapper.setProps({ size: BoSize.small });
		expect(pulseElement.classes()).toContain('size-[12px]');

		await wrapper.setProps({ size: BoSize.large });
		expect(pulseElement.classes()).toContain('size-[20px]');

		await wrapper.setProps({ size: BoSize.extra_small });
		expect(pulseElement.classes()).toContain('size-[8px]');

		await wrapper.setProps({ size: BoSize.extra_large });
		expect(pulseElement.classes()).toContain('size-[24px]');
	});

	it('applies different variants correctly', async () => {
		const wrapper = mount(BoLoadingPulse, {
			props: {
				variant: BoLoaderVariant.primary,
			},
		});

		const pulseElement = wrapper.find('.bo-loading-pulse__outer-pulse-absolute');
		expect(pulseElement.classes()).toContain('bg-blue-600');

		await wrapper.setProps({ variant: BoLoaderVariant.secondary });
		expect(pulseElement.classes()).toContain('bg-gray-600');

		await wrapper.setProps({ variant: BoLoaderVariant.danger });
		expect(pulseElement.classes()).toContain('bg-red-600');

		await wrapper.setProps({ variant: BoLoaderVariant.warning });
		expect(pulseElement.classes()).toContain('bg-yellow-600');

		await wrapper.setProps({ variant: BoLoaderVariant.success });
		expect(pulseElement.classes()).toContain('bg-green-600');

		await wrapper.setProps({ variant: BoLoaderVariant.dark });
		expect(pulseElement.classes()).toContain('bg-black');

		await wrapper.setProps({ variant: BoLoaderVariant.white });
		expect(pulseElement.classes()).toContain('bg-white');
	});

	it('applies custom color when provided', () => {
		const wrapper = mount(BoLoadingPulse, {
			props: {
				customColor: '#ff0000',
			},
		});

		const pulseElement = wrapper.find('.bo-loading-pulse__outer-pulse-absolute');
		expect(pulseElement.attributes('style')).toContain('background-color: rgb(255, 0, 0);');
	});

	it('displays loader text when provided', () => {
		const wrapper = mount(BoLoadingPulse, {
			props: {
				loaderText: 'Loading...',
			},
		});

		const textElement = wrapper.find('.bo-loading-pulse__text');
		expect(textElement.exists()).toBe(true);
		expect(textElement.text()).toContain('Loading...');
	});

	it('applies different text positions correctly', async () => {
		const wrapper = mount(BoLoadingPulse, {
			props: {
				loaderText: 'Loading...',
				textPosition: BoLoaderTextPosition.bottom,
			},
		});

		expect(wrapper.classes()).toContain('flex-col');

		await wrapper.setProps({ textPosition: BoLoaderTextPosition.side });
		expect(wrapper.classes()).toContain('flex-row');
	});

	it('renders custom slot content when provided', () => {
		const wrapper = mount(BoLoadingPulse, {
			slots: {
				default: '<div data-test="custom-content">Custom loading text</div>',
			},
		});

		expect(wrapper.find('[data-test="custom-content"]').exists()).toBe(true);
		expect(wrapper.find('[data-test="custom-content"]').text()).toBe('Custom loading text');
	});
});
