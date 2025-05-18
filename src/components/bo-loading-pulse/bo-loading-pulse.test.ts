import { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo-loader';
import { BoSize } from '@/shared/bo-size.js';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoLoadingPulse from './bo-loading-pulse.vue';

describe('BoLoadingPulse.vue', () => {
	// Basic Rendering Tests
	it('renders with default props', () => {
		const wrapper = mount(BoLoadingPulse);
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.attributes('role')).toBe('status');
		expect(wrapper.find('.bo-loading-pulse__container').exists()).toBe(true);
	});

	// Size Tests
	describe('size prop', () => {
		it('renders with default size', () => {
			const wrapper = mount(BoLoadingPulse);
			expect(wrapper.find('.size-[16px]').exists()).toBe(true);
		});

		it('renders with extra small size', () => {
			const wrapper = mount(BoLoadingPulse, {
				props: { size: BoSize.extra_small },
			});
			expect(wrapper.find('.size-[8px]').exists()).toBe(true);
		});

		it('renders with small size', () => {
			const wrapper = mount(BoLoadingPulse, {
				props: { size: BoSize.small },
			});
			expect(wrapper.find('.size-[12px]').exists()).toBe(true);
		});

		it('renders with large size', () => {
			const wrapper = mount(BoLoadingPulse, {
				props: { size: BoSize.large },
			});
			expect(wrapper.find('.size-[20px]').exists()).toBe(true);
		});

		it('renders with extra large size', () => {
			const wrapper = mount(BoLoadingPulse, {
				props: { size: BoSize.extra_large },
			});
			expect(wrapper.find('.size-[24px]').exists()).toBe(true);
		});
	});

	// Variant Tests
	describe('variant prop', () => {
		it('renders with primary variant by default', () => {
			const wrapper = mount(BoLoadingPulse);
			expect(wrapper.find('.bg-blue-600').exists()).toBe(true);
		});

		it('renders with secondary variant', () => {
			const wrapper = mount(BoLoadingPulse, {
				props: { variant: BoLoaderVariant.secondary },
			});
			expect(wrapper.find('.bg-gray-600').exists()).toBe(true);
		});

		it('renders with danger variant', () => {
			const wrapper = mount(BoLoadingPulse, {
				props: { variant: BoLoaderVariant.danger },
			});
			expect(wrapper.find('.bg-red-600').exists()).toBe(true);
		});

		it('renders with warning variant', () => {
			const wrapper = mount(BoLoadingPulse, {
				props: { variant: BoLoaderVariant.warning },
			});
			expect(wrapper.find('.bg-yellow-600').exists()).toBe(true);
		});

		it('renders with success variant', () => {
			const wrapper = mount(BoLoadingPulse, {
				props: { variant: BoLoaderVariant.success },
			});
			expect(wrapper.find('.bg-green-600').exists()).toBe(true);
		});

		it('renders with dark variant', () => {
			const wrapper = mount(BoLoadingPulse, {
				props: { variant: BoLoaderVariant.dark },
			});
			expect(wrapper.find('.bg-black').exists()).toBe(true);
		});

		it('renders with white variant', () => {
			const wrapper = mount(BoLoadingPulse, {
				props: { variant: BoLoaderVariant.white },
			});
			expect(wrapper.find('.bg-white').exists()).toBe(true);
		});
	});

	// Custom Color Tests
	describe('customColor prop', () => {
		it('renders with custom color', () => {
			const wrapper = mount(BoLoadingPulse, {
				props: { customColor: '#FF0000' },
			});
			const pulseElement = wrapper.find('.bo-loading-pulse__outer-pulse-absolute');
			expect(pulseElement.attributes('style')).toContain('background-color: rgb(255, 0, 0)');
		});

		it('overrides variant color when custom color is provided', () => {
			const wrapper = mount(BoLoadingPulse, {
				props: {
					variant: BoLoaderVariant.primary,
					customColor: '#FF0000',
				},
			});
			const pulseElement = wrapper.find('.bo-loading-pulse__outer-pulse-absolute');
			expect(pulseElement.attributes('style')).toContain('background-color: rgb(255, 0, 0)');
			expect(pulseElement.classes()).not.toContain('bg-blue-600');
		});
	});

	// Text Tests
	describe('text handling', () => {
		it('renders without text by default', () => {
			const wrapper = mount(BoLoadingPulse);
			expect(wrapper.find('.bo-loading-pulse__text').exists()).toBe(false);
		});

		it('renders with loader text', () => {
			const wrapper = mount(BoLoadingPulse, {
				props: { loaderText: 'Loading...' },
			});
			expect(wrapper.find('.bo-loading-pulse__text').exists()).toBe(true);
			expect(wrapper.text()).toContain('Loading...');
		});

		it('renders text at bottom position by default', () => {
			const wrapper = mount(BoLoadingPulse, {
				props: { loaderText: 'Loading...' },
			});
			expect(wrapper.classes()).toContain('flex-col');
		});

		it('renders text at side position', () => {
			const wrapper = mount(BoLoadingPulse, {
				props: {
					loaderText: 'Loading...',
					textPosition: BoLoaderTextPosition.side,
				},
			});
			expect(wrapper.classes()).toContain('flex-row');
		});
	});

	// Slot Tests
	describe('slot handling', () => {
		it('renders custom content through default slot', () => {
			const wrapper = mount(BoLoadingPulse, {
				slots: {
					default: '<span class="custom-content">Custom Loading Text</span>',
				},
			});
			expect(wrapper.find('.custom-content').exists()).toBe(true);
			expect(wrapper.text()).toContain('Custom Loading Text');
		});

		it('prioritizes slot content over loader text prop', () => {
			const wrapper = mount(BoLoadingPulse, {
				props: { loaderText: 'Loading...' },
				slots: {
					default: '<span>Custom Content</span>',
				},
			});
			expect(wrapper.text()).toContain('Custom Content');
			expect(wrapper.text()).not.toContain('Loading...');
		});
	});

	// Animation Tests
	describe('animation classes', () => {
		it('has animate-ping class on outer pulse', () => {
			const wrapper = mount(BoLoadingPulse);
			expect(wrapper.find('.animate-ping').exists()).toBe(true);
		});

		it('maintains proper structure with inner and outer pulse elements', () => {
			const wrapper = mount(BoLoadingPulse);
			expect(wrapper.find('.bo-loading-pulse__inner-pulse-relative').exists()).toBe(true);
			expect(wrapper.find('.bo-loading-pulse__outer-pulse-absolute').exists()).toBe(true);
		});
	});

	// Accessibility Tests
	describe('accessibility', () => {
		it('has correct ARIA role', () => {
			const wrapper = mount(BoLoadingPulse);
			expect(wrapper.attributes('role')).toBe('status');
		});

		it('has accessible text when loader text is provided', () => {
			const wrapper = mount(BoLoadingPulse, {
				props: { loaderText: 'Loading content' },
			});
			expect(wrapper.find('[role="text"]').exists()).toBe(true);
			expect(wrapper.text()).toContain('Loading content');
		});
	});
});
