import { BoButton, BoButtonType } from '@/components/BoButton';
import { BoSize, BoVariant } from '@/constants';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, test } from 'vitest';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoButton, {
		props: {
			label: 'Label',
			size: BoSize.default,
			disabled: false,
			type: BoButtonType.default,
			variant: BoVariant.primary,
		},
	});
});

describe('BoButton', () => {
	test('should match snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	test('should render the label', () => {
		expect(wrapper.text()).toBe('Label');
	});

	test('should have the default size', () => {
		expect(wrapper.find('px-3')).toBeTruthy();
		expect(wrapper.find('py-2')).toBeTruthy();
	});

	test('should have the default type', () => {
		expect(wrapper.find('bg-blue-500')).toBeTruthy();
		expect(wrapper.find('rounded-lg')).toBeTruthy();
	});

	test('should have the default text classes', () => {
		expect(wrapper.find('text-white')).toBeTruthy();
		expect(wrapper.find('text-sm')).toBeTruthy();
	});

	test('should be able to change the size', async () => {
		await wrapper.setProps({ size: BoSize.large });
		expect(wrapper.find('px-4')).toBeTruthy();
		expect(wrapper.find('py-3')).toBeTruthy();
	});

	test('should be able to change the type', async () => {
		await wrapper.setProps({ type: BoButtonType.outline });
		expect(wrapper.find('border')).toBeTruthy();
	});
});
