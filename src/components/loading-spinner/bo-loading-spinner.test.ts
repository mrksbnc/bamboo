import { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo-loader.js';
import { BoSize } from '@/shared/bo-size.js';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test } from 'vitest';
import BoLoadingSpinner from './bo-loading-spinner.vue';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoLoadingSpinner);
});

describe('BoLoadingSpinner', () => {
	suite('Basic Rendering', () => {
		test('should render loading spinner container', () => {
			const id = wrapper.attributes('data-testid');
			expect(id).toBeDefined();
			expect(wrapper.find(`[data-testid="${id}"]`).exists()).toBe(true);
		});

		test('should have correct base classes', () => {
			const container = wrapper.find('.bo-loading-spinner__container');
			expect(container.classes()).toContain('flex');
			expect(container.classes()).toContain('items-center');
			expect(container.classes()).toContain('justify-center');
		});

		test('should render with custom id', () => {
			const customWrapper = mount(BoLoadingSpinner, {
				props: {
					id: 'custom-spinner',
				},
			});
			expect(customWrapper.find('[data-testid*="custom-spinner"]').exists()).toBe(true);
		});
	});

	suite('Props and Attributes', () => {
		test('should apply correct size classes', () => {
			const sizes = {
				[BoSize.extra_small]: 'size-[8px]',
				[BoSize.small]: 'size-[12px]',
				[BoSize.default]: 'size-[16px]',
				[BoSize.large]: 'size-[20px]',
				[BoSize.extra_large]: 'size-[24px]',
			};

			for (const [size, expectedClass] of Object.entries(sizes)) {
				const sizeWrapper = mount(BoLoadingSpinner, {
					props: {
						size: size as BoSize,
					},
				});
				const spinner = sizeWrapper.find('.bo-loading-spinner__animation');
				expect(spinner.classes()).toContain(expectedClass);
			}
		});

		test('should apply correct variant classes', () => {
			const variants = {
				[BoLoaderVariant.primary]: 'text-blue-600 dark:text-blue-500',
				[BoLoaderVariant.secondary]: 'text-gray-600 dark:text-gray-400',
				[BoLoaderVariant.success]: 'text-green-600 dark:text-green-500',
				[BoLoaderVariant.danger]: 'text-red-600 dark:text-red-500',
				[BoLoaderVariant.warning]: 'text-yellow-600 dark:text-yellow-500',
				[BoLoaderVariant.white]: 'text-white dark:text-gray-300',
				[BoLoaderVariant.dark]: 'text-black dark:text-white',
			};

			for (const [variant, expectedClass] of Object.entries(variants)) {
				const variantWrapper = mount(BoLoadingSpinner, {
					props: {
						variant: variant as BoLoaderVariant,
					},
				});
				const spinner = variantWrapper.find('.bo-loading-spinner__animation');
				const classes = expectedClass.split(' ');
				classes.forEach((className) => {
					expect(spinner.classes()).toContain(className);
				});
			}
		});

		test('should apply custom color', () => {
			const customWrapper = mount(BoLoadingSpinner, {
				props: {
					customColor: '#ff00ff',
				},
			});
			const spinner = customWrapper.find('.bo-loading-spinner__animation');
			expect(spinner.attributes('style')).toContain('rgb(255, 0, 255);');
		});
	});

	suite('Text Display', () => {
		test('should render loader text when provided', () => {
			const textWrapper = mount(BoLoadingSpinner, {
				props: {
					loaderText: 'Loading...',
				},
			});
			expect(textWrapper.text()).toContain('Loading...');
		});

		test('should not render text element when no text provided', () => {
			expect(wrapper.find('.bo-loading-spinner__text').exists()).toBe(false);
		});

		test('should apply correct text position classes', () => {
			const sideTextWrapper = mount(BoLoadingSpinner, {
				props: {
					loaderText: 'Loading...',
					textPosition: BoLoaderTextPosition.side,
				},
			});
			expect(sideTextWrapper.classes()).toContain('flex-row');

			const bottomTextWrapper = mount(BoLoadingSpinner, {
				props: {
					loaderText: 'Loading...',
					textPosition: BoLoaderTextPosition.bottom,
				},
			});
			expect(bottomTextWrapper.classes()).toContain('flex-col');
		});
	});

	suite('Animation', () => {
		test('should have spin animation class', () => {
			const spinner = wrapper.find('.bo-loading-spinner__animation');
			expect(spinner.classes()).toContain('animate-spin');
		});

		test('should have correct border styles', () => {
			const spinner = wrapper.find('.bo-loading-spinner__animation');
			expect(spinner.classes()).toContain('border-[2px]');
			expect(spinner.classes()).toContain('border-current');
			expect(spinner.classes()).toContain('border-t-transparent');
		});
	});

	suite('Accessibility', () => {
		test('should have correct ARIA role', () => {
			expect(wrapper.attributes('role')).toBe('status');
		});

		test('should have text role when text is present', () => {
			const textWrapper = mount(BoLoadingSpinner, {
				props: {
					loaderText: 'Loading...',
				},
			});
			const textElement = textWrapper.find('span.bo-loading-spinner__text');
			expect(textElement.exists()).toBe(true);
		});
	});

	suite('Slot Content', () => {
		test('should render custom slot content', () => {
			const slotWrapper = mount(BoLoadingSpinner, {
				slots: {
					default: '<div class="custom-content">Custom Loading Text</div>',
				},
			});
			expect(slotWrapper.find('.custom-content').exists()).toBe(true);
			expect(slotWrapper.text()).toContain('Custom Loading Text');
		});

		test('should not render default text when using slot', () => {
			const slotWrapper = mount(BoLoadingSpinner, {
				props: {
					loaderText: 'Default Text',
				},
				slots: {
					default: '<div>Custom Text</div>',
				},
			});
			expect(slotWrapper.text()).not.toContain('Default Text');
			expect(slotWrapper.text()).toContain('Custom Text');
		});
	});
});
