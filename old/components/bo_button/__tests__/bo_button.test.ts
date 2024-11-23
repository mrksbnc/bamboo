import { Icon } from '@/components/bo_icon';
import { BoSize } from '@/global';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, test } from 'vitest';
import {
	BoButton,
	BoButtonBorderRadiusClasses,
	BoButtonFilledColorClasses,
	BoButtonType,
	BoButtonVariant,
} from '..';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoButton, {
		props: {
			label: 'Label',
			variant: BoButtonVariant.primary,
			type: BoButtonType.default,
			disabled: false,
			size: BoSize.default,
		},
	});
});

describe('bo_button.vue', () => {
	test('should match snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	test('should render the button', () => {
		expect(wrapper.find('button')).toBeTruthy();
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

	test('should be able to change the type', async () => {
		await wrapper.setProps({ type: BoSize.large });
		expect(wrapper.find('bg-blue-500')).toBeTruthy();
		expect(wrapper.find('rounded-lg')).toBeTruthy();
	});

	test('should be able to change the color', async () => {
		await wrapper.setProps({ color: '#000000' });
		expect(wrapper.find('bg-blue-500')).toBeTruthy();
		expect(wrapper.find('rounded-lg')).toBeTruthy();
	});

	test('should be able to change the variant', async () => {
		await wrapper.setProps({ variant: BoButtonVariant.secondary });
		expect(wrapper.find('bg-gray-600')).toBeTruthy();
		expect(wrapper.find('rounded-lg')).toBeTruthy();
	});

	test('should be able to change the type', async () => {
		await wrapper.setProps({ type: BoButtonType.pill });
		expect(wrapper.find('bg-blue-600')).toBeTruthy();
		expect(wrapper.find('rounded-full')).toBeTruthy();
	});

	test('should be able to change the disabled', async () => {
		await wrapper.setProps({ disabled: true });
		expect(wrapper.find('disabled')).toBeTruthy();
	});

	test('should be able to change the prefix icon', async () => {
		await wrapper.setProps({ prefixIcon: Icon.alert_circle });
		expect(wrapper.find('svg')).toBeTruthy();
	});

	test('should be able to change the suffix icon', async () => {
		await wrapper.setProps({ suffixIcon: Icon.alert_circle });
		expect(wrapper.find('svg')).toBeTruthy();
	});

	test('should be able to change the border radius', async () => {
		await wrapper.setProps({ borderRadius: BoButtonBorderRadiusClasses.pill });
		expect(wrapper.find('rounded-full')).toBeTruthy();
	});

	test('should be able to change the fill color', async () => {
		await wrapper.setProps({ fillColor: BoButtonFilledColorClasses.primary });
		expect(wrapper.classes().join(' ')).includes(
			'bg-blue-600 hover:bg-blue-700 focus:ring-blue-600 text-white',
		);
	});
});
