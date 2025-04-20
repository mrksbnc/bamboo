import { BoSize } from '@/shared';
import { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo-loader';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoLoadingSpinner from './BoLoadingSpinner.vue';

describe('BoLoadingSpinner', () => {
	it('renders correctly with default props', () => {
		const wrapper = mount(BoLoadingSpinner);

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.classes()).toContain('bo-loading-spinner__container');
		expect(wrapper.attributes('role')).toBe('status');

		// Should have the spinner element
		expect(wrapper.find('.bo-loading-spinner__animation').exists()).toBe(true);
	});

	it('applies different sizes correctly', async () => {
		const wrapper = mount(BoLoadingSpinner, {
			props: {
				size: BoSize.default,
			},
		});

		const spinnerElement = wrapper.find('.bo-loading-spinner__animation');
		expect(spinnerElement.classes()).toContain('size-[16px]');

		await wrapper.setProps({ size: BoSize.extra_small });
		expect(spinnerElement.classes()).toContain('size-[8px]');

		await wrapper.setProps({ size: BoSize.small });
		expect(spinnerElement.classes()).toContain('size-[12px]');

		await wrapper.setProps({ size: BoSize.large });
		expect(spinnerElement.classes()).toContain('size-[20px]');

		await wrapper.setProps({ size: BoSize.extra_large });
		expect(spinnerElement.classes()).toContain('size-[24px]');
	});

	it('applies different variants correctly', async () => {
		const wrapper = mount(BoLoadingSpinner, {
			props: {
				variant: BoLoaderVariant.primary,
			},
		});

		const spinnerElement = wrapper.find('.bo-loading-spinner__animation');
		expect(spinnerElement.classes()).toContain('text-blue-600');

		await wrapper.setProps({ variant: BoLoaderVariant.secondary });
		expect(spinnerElement.classes()).toContain('text-gray-600');

		await wrapper.setProps({ variant: BoLoaderVariant.danger });
		expect(spinnerElement.classes()).toContain('text-red-600');

		await wrapper.setProps({ variant: BoLoaderVariant.warning });
		expect(spinnerElement.classes()).toContain('text-yellow-600');

		await wrapper.setProps({ variant: BoLoaderVariant.success });
		expect(spinnerElement.classes()).toContain('text-green-600');

		await wrapper.setProps({ variant: BoLoaderVariant.dark });
		expect(spinnerElement.classes()).toContain('text-black');

		await wrapper.setProps({ variant: BoLoaderVariant.white });
		expect(spinnerElement.classes()).toContain('text-white');
	});

	it('applies custom color when provided', () => {
		const wrapper = mount(BoLoadingSpinner, {
			props: {
				customColor: '#ff0000',
			},
		});

		const spinnerElement = wrapper.find('.bo-loading-spinner__animation');
		expect(spinnerElement.attributes('style')).toContain('color: rgb(255, 0, 0);');
	});

	it('displays loader text when provided', () => {
		const wrapper = mount(BoLoadingSpinner, {
			props: {
				loaderText: 'Loading...',
			},
		});

		const textElement = wrapper.find('.bo-loading-spinner__text');
		expect(textElement.exists()).toBe(true);
		expect(textElement.text()).toContain('Loading...');
	});

	it('applies different text positions correctly', async () => {
		const wrapper = mount(BoLoadingSpinner, {
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
		const wrapper = mount(BoLoadingSpinner, {
			slots: {
				default: '<div data-test="custom-content">Custom loading text</div>',
			},
		});

		expect(wrapper.find('[data-test="custom-content"]').exists()).toBe(true);
		expect(wrapper.find('[data-test="custom-content"]').text()).toBe('Custom loading text');
	});
});
