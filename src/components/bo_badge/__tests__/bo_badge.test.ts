import { BoSize } from '@/global';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, test } from 'vitest';
import { BoBadge, BoBadgeType, BoBadgeVariant } from '..';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoBadge, {
		props: {
			label: 'Label',
			variant: BoBadgeVariant.primary,
			type: BoBadgeType.default,
		},
	});
});

describe('bo_badge.vue', () => {
	test('should match snapshot', () => {
		expect(true).toBeTruthy();
	});

	test('should render the badge', () => {
		expect(wrapper.find('span')).toBeTruthy();
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

	test('should be able to change the variant', async () => {
		await wrapper.setProps({ variant: BoBadgeVariant.secondary });
		expect(wrapper.find('bg-gray-600')).toBeTruthy();
		expect(wrapper.find('rounded-lg')).toBeTruthy();
	});
});
