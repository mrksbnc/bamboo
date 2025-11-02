import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BoLoadingRing from './bo-loading-ring.vue';
import { BoLoaderTextPosition } from '@/shared/loader.js';
import { BoVariant } from '@/shared/variant.js';
import { BoSize } from '@/shared/size.js';
import { AriaLive } from '@/shared/accessibility.js';
import { BoFontSize } from '@/components/bo-text/bo-text.js';

describe('bo-loading-ring', () => {
	it('should render the loader ring component', () => {
		const wrapper = mount(BoLoadingRing);
		expect(wrapper.find('[class*="bo-loader-ring"]').exists()).toBe(true);
	});

	it('should render the spinner element', () => {
		const wrapper = mount(BoLoadingRing);
		expect(wrapper.find('.bo-loader-ring__spinner').exists()).toBe(true);
	});

	it('should have a default id', () => {
		const wrapper = mount(BoLoadingRing);
		expect(wrapper.attributes('id')).toBeDefined();
	});

	it('should have a default data-testid', () => {
		const wrapper = mount(BoLoadingRing);
		expect(wrapper.attributes('data-testid')).toBeDefined();
	});

	describe('loader size', () => {
		it.each([BoSize.extra_small, BoSize.small, BoSize.default, BoSize.large, BoSize.extra_large])(
			'should apply size class for %s',
			(size) => {
				const wrapper = mount(BoLoadingRing, {
					props: { size },
				});
				expect(wrapper.find(`.bo-loader-ring__spinner--${size}`).exists()).toBe(true);
			},
		);

		it('should default to BoSize.default', () => {
			const wrapper = mount(BoLoadingRing);
			expect(wrapper.find('.bo-loader-ring__spinner--default').exists()).toBe(true);
		});
	});

	describe('loader variants', () => {
		it.each(Object.values(BoVariant))('should apply variant class for %s', (variant) => {
			const wrapper = mount(BoLoadingRing, {
				props: { variant },
			});
			expect(wrapper.find(`.bo-loader-ring__spinner--${variant}`).exists()).toBe(true);
		});

		it('should default to BoVariant.primary', () => {
			const wrapper = mount(BoLoadingRing);
			expect(wrapper.find('.bo-loader-ring__spinner--primary').exists()).toBe(true);
		});
	});

	describe('loader text position', () => {
		it.each(Object.values(BoLoaderTextPosition))(
			'should apply text position class for %s',
			(position) => {
				const wrapper = mount(BoLoadingRing, {
					props: { textPosition: position },
				});
				expect(wrapper.find(`.bo-loader-ring--${position}`).exists()).toBe(true);
			},
		);

		it('should default to BoLoaderTextPosition.after', () => {
			const wrapper = mount(BoLoadingRing);
			expect(wrapper.find('.bo-loader-ring--after').exists()).toBe(true);
		});
	});

	describe('loader text', () => {
		it('should render BoText component when loaderText is provided', () => {
			const wrapper = mount(BoLoadingRing, {
				props: { loaderText: 'Loading...' },
			});
			const boText = wrapper.findComponent({ name: 'BoText' });
			expect(boText.exists()).toBe(true);
		});

		it('should not render BoText component when loaderText is not provided', () => {
			const wrapper = mount(BoLoadingRing);
			const boText = wrapper.findComponent({ name: 'BoText' });
			expect(boText.exists()).toBe(false);
		});

		it('should pass loaderText to BoText component', () => {
			const text = 'Loading...';
			const wrapper = mount(BoLoadingRing, {
				props: { loaderText: text },
			});
			const boText = wrapper.findComponent({ name: 'BoText' });
			expect(boText.props('value')).toBe(text);
		});
	});

	describe('custom color', () => {
		it('should apply custom color as inline style', () => {
			const customColor = '#ff0000';
			const wrapper = mount(BoLoadingRing, {
				props: { customColor },
			});
			const spinner = wrapper.find('.bo-loader-ring__spinner');
			expect(spinner.attributes('style')).toContain('color: rgb(255, 0, 0);');
		});

		it('should not apply color style when customColor is not provided', () => {
			const wrapper = mount(BoLoadingRing);
			const spinner = wrapper.find('.bo-loader-ring__spinner');
			const style = spinner.attributes('style');
			expect(style).toBeUndefined();
		});
	});

	describe('custom css', () => {
		it('should apply custom container CSS class', () => {
			const customClass = 'custom-container-class';
			const wrapper = mount(BoLoadingRing, {
				props: { customContainerCssClass: customClass },
			});
			expect(wrapper.find(`.${customClass}`).exists()).toBe(true);
		});

		it('should apply custom ring CSS class', () => {
			const customClass = 'custom-ring-class';
			const wrapper = mount(BoLoadingRing, {
				props: { customRingClass: customClass },
			});
			expect(wrapper.find(`.${customClass}`).exists()).toBe(true);
		});
	});

	describe('id and data-testid', () => {
		it('should apply custom id', () => {
			const customId = 'my-loader-id';
			const wrapper = mount(BoLoadingRing, {
				props: { id: customId },
			});
			expect(wrapper.attributes('id')).toBe(customId);
		});

		it('should apply custom data-testid', () => {
			const customTestId = 'my-loader-testid';
			const wrapper = mount(BoLoadingRing, {
				props: { dataTestId: customTestId },
			});
			expect(wrapper.attributes('data-testid')).toBe(customTestId);
		});
	});

	describe('accessibility', () => {
		it('should apply aria-live attribute', () => {
			const wrapper = mount(BoLoadingRing, {
				props: { ariaLive: AriaLive.polite },
			});
			expect(wrapper.attributes('aria-live')).toBe(AriaLive.polite);
		});

		it('should apply aria-label attribute', () => {
			const label = 'Loading content';
			const wrapper = mount(BoLoadingRing, {
				props: { ariaLabel: label },
			});
			expect(wrapper.attributes('aria-label')).toBe(label);
		});

		it('should apply aria-busy attribute', () => {
			const wrapper = mount(BoLoadingRing, {
				props: { ariaBusy: true },
			});
			expect(wrapper.attributes('aria-busy')).toBe('true');
		});
	});

	describe('font size mapping depending on loader size', () => {
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
				const wrapper = mount(BoLoadingRing, {
					props: { size, loaderText: 'Loading...' },
				});
				const boText = wrapper.findComponent({ name: 'BoText' });
				expect(boText.props('fontSize')).toBe(expectedFontSize);
			},
		);
	});

	describe('slot', () => {
		it('should render default slot when provided', () => {
			const wrapper = mount(BoLoadingRing, {
				slots: {
					default: '<span class="custom-slot">Custom Content</span>',
				},
			});
			expect(wrapper.find('.custom-slot').exists()).toBe(true);
			expect(wrapper.text()).toContain('Custom Content');
		});

		it('should use default slot over loaderText', () => {
			const wrapper = mount(BoLoadingRing, {
				props: { loaderText: 'Loading...' },
				slots: {
					default: '<span class="slot-content">Slot Content</span>',
				},
			});
			expect(wrapper.find('.slot-content').exists()).toBe(true);
			expect(wrapper.text()).toContain('Slot Content');
			expect(wrapper.text()).not.toContain('Loading...');
		});
	});

	describe('combined props', () => {
		it('should work with multiple props combined', () => {
			const wrapper = mount(BoLoadingRing, {
				props: {
					size: BoSize.large,
					variant: BoVariant.success,
					textPosition: BoLoaderTextPosition.top,
					loaderText: 'Loading...',
					customColor: '#00ff00',
					customContainerCssClass: 'my-container',
					customRingClass: 'my-ring',
					id: 'loader-1',
					dataTestId: 'loader-test-1',
					ariaLabel: 'Please wait',
					ariaBusy: true,
				},
			});

			expect(wrapper.attributes('id')).toBe('loader-1');
			expect(wrapper.attributes('data-testid')).toBe('loader-test-1');
			expect(wrapper.find('.bo-loader-ring__spinner--large').exists()).toBe(true);
			expect(wrapper.find('.bo-loader-ring__spinner--success').exists()).toBe(true);
			expect(wrapper.find('.bo-loader-ring--top').exists()).toBe(true);
			expect(wrapper.find('.my-container').exists()).toBe(true);
			expect(wrapper.find('.my-ring').exists()).toBe(true);
			expect(wrapper.attributes('aria-label')).toBe('Please wait');
			expect(wrapper.attributes('aria-busy')).toBe('true');
		});
	});
});
