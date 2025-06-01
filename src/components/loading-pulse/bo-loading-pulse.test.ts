import { useAttributes } from '@/composables/use-attributes.js';
import { BoLoaderTextPosition, BoLoaderVariant } from '@/shared/bo-loader.js';
import { BoSize } from '@/shared/bo-size.js';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test } from 'vitest';
import BoLoadingPulse from './bo-loading-pulse.vue';

const { constructAttribute } = useAttributes();
let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoLoadingPulse);
});

function getComponentId(wrapper: ReturnType<typeof mount>): string {
	const testId = wrapper.attributes('data-testid');
	if (!testId) throw new Error('data-testid attribute not found');
	return testId.split('-container')[0];
}

describe('BoLoadingPulse', () => {
	suite('Basic Rendering', () => {
		test('should render loading pulse container', () => {
			const id = getComponentId(wrapper);
			expect(wrapper.find(`[data-testid="${constructAttribute(id, 'container')}"]`).exists()).toBe(
				true,
			);
		});

		test('should have correct base classes', () => {
			const container = wrapper.find('.bo-loading-pulse__container');
			expect(container.classes()).toContain('flex');
			expect(container.classes()).toContain('items-center');
			expect(container.classes()).toContain('justify-center');
		});

		test('should render with custom id', () => {
			const customId = 'custom-pulse';
			const customWrapper = mount(BoLoadingPulse, {
				props: {
					id: customId,
				},
			});
			expect(
				customWrapper.find(`[data-testid="${constructAttribute(customId, 'container')}"]`).exists(),
			).toBe(true);
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
				const sizeWrapper = mount(BoLoadingPulse, {
					props: {
						size: size as BoSize,
					},
				});
				const id = getComponentId(sizeWrapper);
				const pulse = sizeWrapper.find(`[data-testid="${constructAttribute(id, 'inner')}"]`);
				expect(pulse.classes()).toContain(expectedClass);
			}
		});

		test('should apply correct variant classes', () => {
			const variants = {
				[BoLoaderVariant.primary]: 'bg-blue-600 dark:bg-blue-500',
				[BoLoaderVariant.secondary]: 'bg-gray-600 dark:bg-gray-400',
				[BoLoaderVariant.success]: 'bg-green-600 dark:bg-green-500',
				[BoLoaderVariant.danger]: 'bg-red-600 dark:bg-red-500',
				[BoLoaderVariant.warning]: 'bg-yellow-600 dark:bg-yellow-500',
				[BoLoaderVariant.white]: 'bg-white dark:bg-gray-300',
				[BoLoaderVariant.dark]: 'bg-black dark:bg-white',
			};

			for (const [variant, expectedClass] of Object.entries(variants)) {
				const variantWrapper = mount(BoLoadingPulse, {
					props: {
						variant: variant as BoLoaderVariant,
					},
				});
				const id = getComponentId(variantWrapper);
				const pulse = variantWrapper.find(`[data-testid="${constructAttribute(id, 'outer')}"]`);
				const classes = expectedClass.split(' ');
				classes.forEach((className) => {
					expect(pulse.classes()).toContain(className);
				});
			}
		});

		test('should apply custom color', () => {
			const customWrapper = mount(BoLoadingPulse, {
				props: {
					customColor: 'rgb(255, 0, 255)',
				},
			});
			const id = getComponentId(customWrapper);
			const pulse = customWrapper.find(`[data-testid="${constructAttribute(id, 'outer')}"]`);
			expect(pulse.attributes('style')).toContain('background-color: rgb(255, 0, 255)');
		});
	});

	suite('Text Display', () => {
		test('should render loader text when provided', () => {
			const textWrapper = mount(BoLoadingPulse, {
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
			const sideTextWrapper = mount(BoLoadingPulse, {
				props: {
					loaderText: 'Loading...',
					textPosition: BoLoaderTextPosition.side,
				},
			});
			expect(sideTextWrapper.classes()).toContain('flex-row');

			const bottomTextWrapper = mount(BoLoadingPulse, {
				props: {
					loaderText: 'Loading...',
					textPosition: BoLoaderTextPosition.bottom,
				},
			});
			expect(bottomTextWrapper.classes()).toContain('flex-col');
		});
	});

	suite('Animation', () => {
		test('should have ping animation class', () => {
			const id = getComponentId(wrapper);
			const pulse = wrapper.find(`[data-testid="${constructAttribute(id, 'outer')}"]`);
			expect(pulse.classes()).toContain('animate-ping');
		});

		test('should have correct opacity for outer pulse', () => {
			const id = getComponentId(wrapper);
			const pulse = wrapper.find(`[data-testid="${constructAttribute(id, 'outer')}"]`);
			expect(pulse.classes()).toContain('opacity-75');
		});
	});

	suite('Accessibility', () => {
		test('should have correct ARIA role', () => {
			expect(wrapper.attributes('role')).toBe('status');
		});

		test('should have text role when text is present', () => {
			const textWrapper = mount(BoLoadingPulse, {
				props: {
					loaderText: 'Loading...',
				},
			});
			const textElement = textWrapper.find('[role="text"]');
			expect(textElement.exists()).toBe(true);
		});
	});

	suite('Slot Content', () => {
		test('should render custom slot content', () => {
			const slotWrapper = mount(BoLoadingPulse, {
				slots: {
					default: '<div class="custom-content">Custom Loading Text</div>',
				},
			});
			expect(slotWrapper.find('.custom-content').exists()).toBe(true);
			expect(slotWrapper.text()).toContain('Custom Loading Text');
		});

		test('should not render default text when using slot', () => {
			const slotWrapper = mount(BoLoadingPulse, {
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
