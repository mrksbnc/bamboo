import { BoIcon, Icon } from '@/components/bo_icon';
import { BoSize } from '@/shared';

import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, test } from 'vitest';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoIcon, {
		props: {
			icon: Icon.activity,
			size: BoSize.default,
			color: '#123456',
		},
	});
});

describe('bo_icon.vue', () => {
	test('should render the icon', () => {
		expect(wrapper.find('activity')).toBeTruthy();
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
});
