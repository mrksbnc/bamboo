import { useAttributes } from '@/composables/use-attributes.js';
import { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo-loader.js';
import { BoSize } from '@/shared/bo-size.js';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test } from 'vitest';
import BoLoadingDots from './bo-loading-dots.vue';

const { constructAttribute } = useAttributes();
let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoLoadingDots);
});

function getComponentId(wrapper: ReturnType<typeof mount>): string {
	const testId = wrapper.attributes('data-testid');
	if (!testId) throw new Error('data-testid attribute not found');
	return testId.split('-container')[0];
}

describe('BoLoadingDots', () => {
	suite('Basic Rendering', () => {
		test('should render loading dots container', () => {
			const id = getComponentId(wrapper);
			expect(wrapper.find(`[data-testid="${constructAttribute(id, 'container')}"]`).exists()).toBe(
				true,
			);
		});

		test('should have correct base classes', () => {
			const container = wrapper.find('.bo-loading-dots__container');
			expect(container.classes()).toContain('flex');
			expect(container.classes()).toContain('items-center');
			expect(container.classes()).toContain('justify-center');
		});

		test('should render with custom id', () => {
			const customId = 'custom-dots';
			const customWrapper = mount(BoLoadingDots, {
				props: {
					id: customId,
				},
			});
			expect(
				customWrapper.find(`[data-testid="${constructAttribute(customId, 'container')}"]`).exists(),
			).toBe(true);
		});

		test('should render correct number of dots', () => {
			const id = getComponentId(wrapper);
			const dots = wrapper.findAll(`[data-testid^="${constructAttribute(id, 'dot-')}"]`);
			expect(dots.length).toBe(3);
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
				const sizeWrapper = mount(BoLoadingDots, {
					props: {
						size: size as BoSize,
					},
				});
				const id = getComponentId(sizeWrapper);
				const dot = sizeWrapper.find(`[data-testid="${constructAttribute(id, 'dot-1')}"]`);
				expect(dot.classes()).toContain(expectedClass);
			}
		});

		test('should apply correct variant classes with dark mode', () => {
			const variants = {
				[BoLoaderVariant.primary]: ['bg-blue-600', 'dark:bg-blue-500'],
				[BoLoaderVariant.secondary]: ['bg-gray-600', 'dark:bg-gray-400'],
				[BoLoaderVariant.success]: ['bg-green-600', 'dark:bg-green-500'],
				[BoLoaderVariant.danger]: ['bg-red-600', 'dark:bg-red-500'],
				[BoLoaderVariant.warning]: ['bg-yellow-600', 'dark:bg-yellow-500'],
				[BoLoaderVariant.white]: ['bg-white', 'dark:bg-gray-300'],
				[BoLoaderVariant.dark]: ['bg-black', 'dark:bg-white'],
			};

			for (const [variant, expectedClasses] of Object.entries(variants)) {
				const variantWrapper = mount(BoLoadingDots, {
					props: {
						variant: variant as BoLoaderVariant,
					},
				});
				const id = getComponentId(variantWrapper);
				const dot = variantWrapper.find(`[data-testid="${constructAttribute(id, 'dot-1')}"]`);
				expectedClasses.forEach((className) => {
					expect(dot.classes()).toContain(className);
				});
			}
		});

		test('should apply custom color', () => {
			const customWrapper = mount(BoLoadingDots, {
				props: {
					customColor: 'rgb(255, 0, 255)',
				},
			});
			const id = getComponentId(customWrapper);
			const dot = customWrapper.find(`[data-testid="${constructAttribute(id, 'dot-1')}"]`);
			expect(dot.attributes('class')).toContain('bg-[rgb(255, 0, 255)]');
		});
	});

	suite('Text Display', () => {
		test('should render loader text when provided', () => {
			const textWrapper = mount(BoLoadingDots, {
				props: {
					loaderText: 'Loading...',
				},
			});
			const id = getComponentId(textWrapper);
			const textElement = textWrapper.find(`[data-testid="${constructAttribute(id, 'text')}"]`);
			expect(textElement.exists()).toBe(true);
			expect(textWrapper.text()).toContain('Loading...');
		});

		test('should not render text element when no text provided', () => {
			const id = getComponentId(wrapper);
			expect(wrapper.find(`[data-testid="${constructAttribute(id, 'text')}"]`).exists()).toBe(
				false,
			);
		});

		test('should apply correct text position classes', () => {
			const sideTextWrapper = mount(BoLoadingDots, {
				props: {
					loaderText: 'Loading...',
					textPosition: BoLoaderTextPosition.side,
				},
			});
			expect(sideTextWrapper.classes()).toContain('flex-row');

			const bottomTextWrapper = mount(BoLoadingDots, {
				props: {
					loaderText: 'Loading...',
					textPosition: BoLoaderTextPosition.bottom,
				},
			});
			expect(bottomTextWrapper.classes()).toContain('flex-col');
		});
	});

	suite('Animation', () => {
		test('should have bounce animation class', () => {
			const id = getComponentId(wrapper);
			const dots = wrapper.findAll(`[data-testid^="${constructAttribute(id, 'dot-')}"]`);
			dots.forEach((dot) => {
				expect(dot.classes()).toContain('animate-bounce');
			});
		});
	});

	suite('Accessibility', () => {
		test('should have correct ARIA role', () => {
			expect(wrapper.attributes('role')).toBe('status');
		});

		test('should have text role when text is present', () => {
			const textWrapper = mount(BoLoadingDots, {
				props: {
					loaderText: 'Loading...',
				},
			});
			const textElement = textWrapper.find('[role="text"]');
			expect(textElement.exists()).toBe(true);
		});
	});

	suite('Dark Mode', () => {
		test('should apply correct dark mode classes for each variant', () => {
			const darkModeClasses = {
				[BoLoaderVariant.primary]: 'dark:bg-blue-500',
				[BoLoaderVariant.secondary]: 'dark:bg-gray-400',
				[BoLoaderVariant.success]: 'dark:bg-green-500',
				[BoLoaderVariant.danger]: 'dark:bg-red-500',
				[BoLoaderVariant.warning]: 'dark:bg-yellow-500',
				[BoLoaderVariant.white]: 'dark:bg-gray-300',
				[BoLoaderVariant.dark]: 'dark:bg-white',
			};

			for (const [variant, expectedClass] of Object.entries(darkModeClasses)) {
				const variantWrapper = mount(BoLoadingDots, {
					props: {
						variant: variant as BoLoaderVariant,
					},
				});
				const id = getComponentId(variantWrapper);
				const dot = variantWrapper.find(`[data-testid="${constructAttribute(id, 'dot-1')}"]`);
				expect(dot.classes()).toContain(expectedClass);
			}
		});
	});

	suite('Slot Content', () => {
		test('should render custom slot content', () => {
			const slotWrapper = mount(BoLoadingDots, {
				slots: {
					default: '<div class="custom-content">Custom Loading Text</div>',
				},
			});
			expect(slotWrapper.find('.custom-content').exists()).toBe(true);
			expect(slotWrapper.text()).toContain('Custom Loading Text');
		});

		test('should not render default text when using slot', () => {
			const slotWrapper = mount(BoLoadingDots, {
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
