import { BoLoadingSpinner } from '@/components/bo_loading_spinner';
import BoText from '@/components/bo_text/BoText.vue';
import { BoSize, BoLoaderTextPosition, BoLoaderVariant } from '@/shared';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test } from 'vitest';

let globalWrapper: ReturnType<typeof mount>;

beforeEach(() => {
	globalWrapper = mount(BoLoadingSpinner, {
		props: {
			size: BoSize.default,
			variant: BoLoaderVariant.primary,
		},
	});
});

describe('bo_loading_spinner.vue', () => {
	test('teh spinner should be rendered', () => {
		expect(globalWrapper).toBeTruthy();
	});

	test('the spinner container should have the default classes', () => {
		expect(globalWrapper.classes()).toContain('flex');
		expect(globalWrapper.classes()).toContain('h-full');
		expect(globalWrapper.classes()).toContain('w-full');
		expect(globalWrapper.classes()).toContain('content-center');
		expect(globalWrapper.classes()).toContain('items-center');
		expect(globalWrapper.classes()).toContain('justify-center');
		expect(globalWrapper.classes()).toContain('gap-1');
	});

	test('the spinner animation should have the default classes', () => {
		expect(globalWrapper.find('.bo-loading-spinner__animation').classes()).toContain('inline-flex');
		expect(globalWrapper.find('.bo-loading-spinner__animation').classes()).toContain(
			'animate-spin',
		);
		expect(globalWrapper.find('.bo-loading-spinner__animation').classes()).toContain(
			'rounded-full',
		);
		expect(globalWrapper.find('.bo-loading-spinner__animation').classes()).toContain(
			'border-[2px]',
		);
		expect(globalWrapper.find('.bo-loading-spinner__animation').classes()).toContain(
			'border-current',
		);
		expect(globalWrapper.find('.bo-loading-spinner__animation').classes()).toContain(
			'border-t-transparent',
		);
	});

	suite('spinner variants', () => {
		test('the spinner should have the default variant', () => {
			expect(globalWrapper.find('text-blue-600')).toBeTruthy();
		});

		test('the spinner should support primary variant', () => {
			expect(globalWrapper.find('text-blue-600')).toBeTruthy();
		});

		test('the spinner should support secondary variant', () => {
			expect(globalWrapper.find('text-gray-600')).toBeTruthy();
		});

		test('the spinner should support danger variant', () => {
			expect(globalWrapper.find('text-red-600')).toBeTruthy();
		});

		test('the spinner should support warning variant', () => {
			expect(globalWrapper.find('text-yellow-600')).toBeTruthy();
		});

		test('the spinner should support success variant', () => {
			expect(globalWrapper.find('text-green-600')).toBeTruthy();
		});

		test('the spinner should support dark variant', () => {
			expect(globalWrapper.find('text-black')).toBeTruthy();
		});

		test('the spinner should support white variant', () => {
			expect(globalWrapper.find('text-white')).toBeTruthy();
		});
	});

	suite('loading spinner with text', () => {
		let wrapper: ReturnType<typeof mount>;

		beforeEach(() => {
			wrapper = mount(BoLoadingSpinner, {
				props: {
					size: BoSize.default,
					variant: BoLoaderVariant.primary,
					loaderText: 'Loading...',
				},
			});
		});

		test('spinner should render the text', () => {
			expect(wrapper.findComponent(BoText).exists()).toBe(true);
		});

		test('the default text position should be under the spinner', () => {
			expect(wrapper.find('.bo-loading-spinner__container').classes()).toContain('flex-col');
		});

		test('should support text under the loader', async () => {
			await wrapper.setProps({ textPosition: BoLoaderTextPosition.bottom });
			expect(wrapper.find('.bo-loading-spinner__container').classes()).toContain('flex-col');
		});

		test('should support text side the loader', async () => {
			await wrapper.setProps({ textPosition: BoLoaderTextPosition.side });
			expect(wrapper.find('.bo-loading-spinner__container').classes()).toContain('flex-row');
		});
	});

	suite('spinner should support custom color', () => {
		test('the spinner should support custom color', async () => {
			const element = globalWrapper.find('.bo-loading-spinner__animation');

			await globalWrapper.setProps({ customColor: 'red' });
			const attributes = element.attributes();
			expect(attributes['style']).toContain('color: red');

			await globalWrapper.setProps({ customColor: '#000000' });
			const attribute2 = element.attributes();
			expect(attribute2['style']).toContain('color: rgb(0, 0, 0);');

			await globalWrapper.setProps({ customColor: '#432121' });
			const attribute3 = element.attributes();
			expect(attribute3['style']).toContain('color: rgb(67, 33, 33);');
		});
	});
});
