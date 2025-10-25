import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BoLoadingSpinner from './bo-loading-spinner.vue';
import { BoLoaderTextPosition } from '@/shared/loader.js';
import { BoVariant } from '@/shared/variant.js';
import { BoSize } from '@/shared/size.js';
import { AriaLive } from '@/shared/accessibility.js';
import { BoFontSize } from '@/components/bo-text/bo-text.js';

describe('bo-loading-spinner', () => {
	it('should render the loading spinner component', () => {
		const wrapper = mount(BoLoadingSpinner);
		expect(wrapper.find('[class*="bo-loader"]').exists()).toBe(true);
	});

	it('should render the spinner element', () => {
		const wrapper = mount(BoLoadingSpinner);
		expect(wrapper.find('.bo-loader__spinner').exists()).toBe(true);
	});

	it('should have a default id', () => {
		const wrapper = mount(BoLoadingSpinner);
		expect(wrapper.attributes('id')).toBeDefined();
	});

	it('should have a default data-testid', () => {
		const wrapper = mount(BoLoadingSpinner);
		expect(wrapper.attributes('data-testid')).toBeDefined();
	});

	describe('loader size', () => {
		it.each(Object.values(BoSize))('should apply size class for %s', (size) => {
			const wrapper = mount(BoLoadingSpinner, {
				props: { size },
			});
			expect(wrapper.find(`.bo-loader__spinner__${size}`).exists()).toBe(true);
		});

		it('should default to BoSize.default if no size is provided', () => {
			const wrapper = mount(BoLoadingSpinner);
			expect(wrapper.find('.bo-loader__spinner__default').exists()).toBe(true);
		});
	});

	describe('loader variants', () => {
		it.each(Object.values(BoVariant))('should apply variant class for %s', (variant) => {
			const wrapper = mount(BoLoadingSpinner, {
				props: { variant },
			});
			expect(wrapper.find(`.bo-loader__spinner__${variant}`).exists()).toBe(true);
		});

		it('should default to BoVariant.primary if no variant is provided', () => {
			const wrapper = mount(BoLoadingSpinner);
			expect(wrapper.find('.bo-loader__spinner__primary').exists()).toBe(true);
		});
	});

	describe('loader text position', () => {
		it.each(Object.values(BoLoaderTextPosition))(
			'should apply text position class for %s',
			(position) => {
				const wrapper = mount(BoLoadingSpinner, {
					props: { textPosition: position },
				});
				expect(wrapper.find(`.bo-loader__${position}`).exists()).toBe(true);
			},
		);

		it('should default to BoLoaderTextPosition.after if no textPosition is provided', () => {
			const wrapper = mount(BoLoadingSpinner);
			expect(wrapper.find('.bo-loader__after').exists()).toBe(true);
		});
	});

	describe('loader text', () => {
		it('should render BoText component when loaderText is provided', () => {
			const wrapper = mount(BoLoadingSpinner, {
				props: { loaderText: 'Loading...' },
			});
			const boText = wrapper.findComponent({ name: 'BoText' });
			expect(boText.exists()).toBe(true);
		});

		it('should not render BoText component when loaderText is not provided', () => {
			const wrapper = mount(BoLoadingSpinner);
			const boText = wrapper.findComponent({ name: 'BoText' });
			expect(boText.exists()).toBe(false);
		});

		it('should pass loaderText to BoText component', () => {
			const text = 'Loading...';
			const wrapper = mount(BoLoadingSpinner, {
				props: { loaderText: text },
			});
			const boText = wrapper.findComponent({ name: 'BoText' });
			expect(boText.props('value')).toBe(text);
		});
	});

	describe('custom loader color', () => {
		it('should apply custom color to border-color style', () => {
			const customColor = '#ff0000';
			const wrapper = mount(BoLoadingSpinner, {
				props: { customColor },
			});
			const spinner = wrapper.find('.bo-loader__spinner');
			const style = spinner.attributes('style');
			expect(style).toContain(`border-color: rgb(255, 0, 0) rgb(255, 0, 0) transparent;`);
		});

		it('should set border-bottom-color to transparent when customColor is provided', () => {
			const customColor = '#ff0000';
			const wrapper = mount(BoLoadingSpinner, {
				props: { customColor },
			});
			const spinner = wrapper.find('.bo-loader__spinner');
			const style = spinner.attributes('style');
			expect(style).toContain('border-color: rgb(255, 0, 0) rgb(255, 0, 0) transparent;');
		});

		it('should not apply color style when customColor is not provided', () => {
			const wrapper = mount(BoLoadingSpinner);
			const spinner = wrapper.find('.bo-loader__spinner');
			const style = spinner.attributes('style');
			expect(style).toBeUndefined();
		});
	});

	describe('custom CSS classes', () => {
		it('should apply custom container CSS class', () => {
			const customClass = 'custom-container-class';
			const wrapper = mount(BoLoadingSpinner, {
				props: { customContainerCssClass: customClass },
			});
			expect(wrapper.find(`.${customClass}`).exists()).toBe(true);
		});

		it('should apply custom spinner CSS class if none provided', () => {
			const customClass = 'custom-spinner-class';
			const wrapper = mount(BoLoadingSpinner, {
				props: { customSpinnerCssClass: customClass },
			});
			expect(wrapper.find(`.${customClass}`).exists()).toBe(true);
		});
	});

	describe('custom id and data-testid', () => {
		it('should apply custom id', () => {
			const customId = 'my-spinner-id';
			const wrapper = mount(BoLoadingSpinner, {
				props: { id: customId },
			});
			expect(wrapper.attributes('id')).toBe(customId);
		});

		it('should apply custom data-testid', () => {
			const customTestId = 'my-spinner-testid';
			const wrapper = mount(BoLoadingSpinner, {
				props: { dataTestId: customTestId },
			});
			expect(wrapper.attributes('data-testid')).toBe(customTestId);
		});
	});

	describe('loader accessibility', () => {
		it('should apply aria-live attribute', () => {
			const wrapper = mount(BoLoadingSpinner, {
				props: { ariaLive: AriaLive.polite },
			});
			expect(wrapper.attributes('aria-live')).toBe(AriaLive.polite);
		});

		it('should apply aria-label attribute', () => {
			const label = 'Loading content';
			const wrapper = mount(BoLoadingSpinner, {
				props: { ariaLabel: label },
			});
			expect(wrapper.attributes('aria-label')).toBe(label);
		});

		it('should apply aria-busy attribute', () => {
			const wrapper = mount(BoLoadingSpinner, {
				props: { ariaBusy: true },
			});
			expect(wrapper.attributes('aria-busy')).toBe('true');
		});
	});

	describe('props - BoText font size mapping', () => {
		const sizeMapping = [
			{ size: BoSize.extra_small, expectedFontSize: BoFontSize.xs },
			{ size: BoSize.small, expectedFontSize: BoFontSize.sm },
			{ size: BoSize.default, expectedFontSize: BoFontSize.lg },
			{ size: BoSize.large, expectedFontSize: BoFontSize.xl },
			{ size: BoSize.extra_large, expectedFontSize: BoFontSize['2xl'] },
		];

		it.each(sizeMapping)(
			'should map size $size to BoText font size $expectedFontSize',
			({ size, expectedFontSize }) => {
				const wrapper = mount(BoLoadingSpinner, {
					props: { size, loaderText: 'Loading...' },
				});
				const boText = wrapper.findComponent({ name: 'BoText' });
				expect(boText.props('fontSize')).toBe(expectedFontSize);
			},
		);
	});

	describe('bo-text variant', () => {
		it('should always render BoText with secondary variant', () => {
			const wrapper = mount(BoLoadingSpinner, {
				props: { loaderText: 'Loading...' },
			});
			const boText = wrapper.findComponent({ name: 'BoText' });
			expect(boText.props('variant')).toBe(BoVariant.secondary);
		});
	});

	describe('slot', () => {
		it('should render default slot when provided', () => {
			const wrapper = mount(BoLoadingSpinner, {
				slots: {
					default: '<span class="custom-slot">Custom Content</span>',
				},
			});
			expect(wrapper.find('.custom-slot').exists()).toBe(true);
			expect(wrapper.text()).toContain('Custom Content');
		});

		it('should use default slot over loaderText', () => {
			const wrapper = mount(BoLoadingSpinner, {
				props: { loaderText: 'Loading...' },
				slots: {
					default: '<span class="slot-content">Slot Content</span>',
				},
			});
			expect(wrapper.find('.slot-content').exists()).toBe(true);
		});
	});

	describe('combined props', () => {
		it('should work with multiple props combined', () => {
			const wrapper = mount(BoLoadingSpinner, {
				props: {
					size: BoSize.large,
					variant: BoVariant.success,
					textPosition: BoLoaderTextPosition.top,
					loaderText: 'Loading...',
					customColor: '#00ff00',
					customContainerCssClass: 'my-container',
					customSpinnerCssClass: 'my-spinner',
					id: 'spinner-1',
					dataTestId: 'spinner-test-1',
					ariaLabel: 'Please wait',
					ariaBusy: true,
				},
			});

			expect(wrapper.attributes('id')).toBe('spinner-1');
			expect(wrapper.attributes('data-testid')).toBe('spinner-test-1');
			expect(wrapper.find('.bo-loader__spinner__large').exists()).toBe(true);
			expect(wrapper.find('.bo-loader__spinner__success').exists()).toBe(true);
			expect(wrapper.find('.bo-loader__top').exists()).toBe(true);
			expect(wrapper.find('.my-container').exists()).toBe(true);
			expect(wrapper.find('.my-spinner').exists()).toBe(true);
			expect(wrapper.attributes('aria-label')).toBe('Please wait');
			expect(wrapper.attributes('aria-busy')).toBe('true');
		});
	});
});
