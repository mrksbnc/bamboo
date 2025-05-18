import { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo-loader';
import { BoSize } from '@/shared/bo-size.js';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoLoadingSpinner from './bo-loading-spinner.vue';

describe('BoLoadingSpinner.vue', () => {
	it('renders with default size', () => {
		const wrapper = mount(BoLoadingSpinner);
		expect(wrapper.find('div').classes()).toContain('size-[16px]');
	});

	it('renders with specified size', () => {
		const wrapper = mount(BoLoadingSpinner, {
			props: { size: BoSize.large },
		});
		expect(wrapper.find('div').classes()).toContain('size-[20px]');
	});

	it('renders with specified variant', () => {
		const wrapper = mount(BoLoadingSpinner, {
			props: { variant: BoLoaderVariant.primary },
		});
		expect(wrapper.find('div').classes()).toContain('text-blue-600');
	});

	it('renders with custom color', () => {
		const wrapper = mount(BoLoadingSpinner, {
			props: { customColor: '#ff0000' },
		});
		expect(wrapper.find('div').attributes('style')).toContain('color: rgb(255, 0, 0)');
	});

	it('renders with custom class', () => {
		const wrapper = mount(BoLoadingSpinner, {
			props: { class: 'custom-class' },
		});
		expect(wrapper.classes()).toContain('custom-class');
	});

	it('renders with loader text', () => {
		const wrapper = mount(BoLoadingSpinner, {
			props: { loaderText: 'Loading...' },
		});
		expect(wrapper.find('.bo-loading-spinner__text').text()).toBe('Loading...');
	});

	it('renders with text position side', () => {
		const wrapper = mount(BoLoadingSpinner, {
			props: {
				loaderText: 'Loading...',
				textPosition: BoLoaderTextPosition.side,
			},
		});
		expect(wrapper.classes()).toContain('flex-row');
	});

	it('renders with custom content slot', () => {
		const wrapper = mount(BoLoadingSpinner, {
			slots: {
				default: '<span class="custom-content">Custom Content</span>',
			},
		});
		expect(wrapper.find('.custom-content').exists()).toBe(true);
	});
});
