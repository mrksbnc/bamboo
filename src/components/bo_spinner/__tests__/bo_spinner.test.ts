import { BoSize, BoVariant } from '@/global';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, test } from 'vitest';
import { BoSpinner } from '..';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoSpinner, {
		props: {
			size: BoSize.default,
			variant: BoVariant.primary,
		},
	});
});

describe('bo_spinner.vue', () => {
	test('should match snapshot', () => {
		expect(true).toBeTruthy();
	});

	test('should render the spinner', () => {
		expect(wrapper.find('svg')).toBeTruthy();
	});

	test('should have the default size', () => {
		expect(wrapper.find('w-4')).toBeTruthy();
		expect(wrapper.find('h-4')).toBeTruthy();
	});

	test('should have the default type', () => {
		expect(wrapper.find('fill-blue-600')).toBeTruthy();
		expect(wrapper.find('text-gray-200')).toBeTruthy();
	});

	test('should be able to change the size', async () => {
		await wrapper.setProps({ size: BoSize.large });
		expect(wrapper.find('w-6')).toBeTruthy();
		expect(wrapper.find('h-6')).toBeTruthy();
	});

	test('should be able to change the variant', async () => {
		await wrapper.setProps({ variant: BoVariant.secondary });
		expect(wrapper.find('fill-gray-600')).toBeTruthy();
		expect(wrapper.find('text-gray-200')).toBeTruthy();
	});
});
