import { Icon } from '@/components/BoIcon';
import { BoIconButton } from '@/components/BoIconButton';
import { BoSize, BoVariant } from '@/constants';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, test } from 'vitest';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoIconButton, {
		props: {
			icon: Icon.activity,
			size: BoSize.default,
			disabled: false,
			variant: BoVariant.primary,
		},
	});
});

describe('BoIconButton', () => {
	test('should match snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	test('should render the icon', () => {
		expect(wrapper.find('svg')).toBeTruthy();
	});

	test('should have the default size', () => {
		expect(wrapper.find('w-6')).toBeTruthy();
		expect(wrapper.find('h-6')).toBeTruthy();
	});

	test('should have the default type', () => {
		expect(wrapper.find('bg-blue-500')).toBeTruthy();
		expect(wrapper.find('rounded-lg')).toBeTruthy();
	});

	test('should be able to change the size', async () => {
		await wrapper.setProps({ size: BoSize.large });
		expect(wrapper.find('w-8')).toBeTruthy();
		expect(wrapper.find('h-8')).toBeTruthy();
	});
});
