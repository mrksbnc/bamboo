import { BoBadge, BoBadgeShape, BoBadgeType, BoBadgeVariant } from '@/components/bo_badge';
import { BoIcon, Icon } from '@/components/bo_icon';
import BoText from '@/components/bo_text/BoText.vue';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test } from 'vitest';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoBadge, {
		props: {
			label: 'Label',
			icon: Icon.none,
			variant: BoBadgeVariant.primary,
			type: BoBadgeType.default,
		},
	});
});

describe('bo_badge.vue', () => {
	test('the badge should be rendered', () => {
		expect(wrapper.find('span')).toBeTruthy();
	});

	test('the badge container should have the default classes', () => {
		expect(wrapper.find('.bo-badge').classes()).contains('flex');
		expect(wrapper.find('.bo-badge').classes()).contains('items-center');
		expect(wrapper.find('.bo-badge').classes()).contains('justify-center');
		expect(wrapper.find('.bo-badge').classes()).contains('select-none');
		expect(wrapper.find('.bo-badge').classes()).contains('max-w-fit');
	});

	test('the badge should render the label', () => {
		expect(wrapper.findComponent(BoText).exists()).toBe(true);
	});

	suite('badge types', () => {
		test('the badge should have the default type', async () => {
			await wrapper.setProps({ type: BoBadgeType.default });
			expect(wrapper.find('bg-blue-500')).toBeTruthy();
		});

		test('the badge should support outline type', async () => {
			await wrapper.setProps({ type: BoBadgeType.outline });
			expect(wrapper.find('border')).toBeTruthy();
		});
	});

	suite('badge sizes', () => {
		test('the badge should have the default size', () => {
			expect(wrapper.find('w-6')).toBeTruthy();
			expect(wrapper.find('h-6')).toBeTruthy();
		});

		test('the badge should support extra small size', () => {
			expect(wrapper.find('w-4')).toBeTruthy();
			expect(wrapper.find('h-4')).toBeTruthy();
		});

		test('the badge should support small size', () => {
			expect(wrapper.find('w-8')).toBeTruthy();
			expect(wrapper.find('h-8')).toBeTruthy();
		});

		test('the badge should support large size', () => {
			expect(wrapper.find('w-12')).toBeTruthy();
			expect(wrapper.find('h-12')).toBeTruthy();
		});

		test('the badge should support extra large size', () => {
			expect(wrapper.find('w-16')).toBeTruthy();
			expect(wrapper.find('h-16')).toBeTruthy();
		});
	});

	suite('badge shapes', () => {
		test('the badge should have the default shape', () => {
			expect(wrapper.find('rounded-lg')).toBeTruthy();
		});

		test('the badge should support circle shape', async () => {
			await wrapper.setProps({ shape: BoBadgeShape.circle });
			expect(wrapper.find('rounded-full')).toBeTruthy();
		});

		test('the badge should support pill shape', async () => {
			await wrapper.setProps({ shape: BoBadgeShape.pill });
			expect(wrapper.find('rounded-full')).toBeTruthy();
		});

		test('the badge should support flat shape', async () => {
			await wrapper.setProps({ shape: BoBadgeShape.flat });
			expect(wrapper.find('rounded-none')).toBeTruthy();
		});
	});

	suite('badge variants', () => {
		test('the badge should have the default variant', () => {
			expect(wrapper.find('bg-blue-500')).toBeTruthy();
		});

		test('the badge should support primary variant', () => {
			expect(wrapper.find('bg-blue-600')).toBeTruthy();
		});

		test('the badge should support secondary variant', () => {
			expect(wrapper.find('bg-gray-600')).toBeTruthy();
		});

		test('the badge should support danger variant', () => {
			expect(wrapper.find('bg-red-600')).toBeTruthy();
		});

		test('the badge should support warning variant', () => {
			expect(wrapper.find('bg-yellow-600')).toBeTruthy();
		});

		test('the badge should support success variant', () => {
			expect(wrapper.find('bg-green-600')).toBeTruthy();
		});

		test('the badge should support dark variant', () => {
			expect(wrapper.find('bg-black')).toBeTruthy();
		});
	});

	suite('badge icons', () => {
		test('the badge should not have any default icon', () => {
			const icon = wrapper.findComponent(BoIcon);
			expect(icon.exists()).toBe(false);
		});

		test('the badge should be able to display a prefix icon', async () => {
			await wrapper.setProps({ prefixIcon: Icon.activity });
			expect(wrapper.findComponent(BoIcon).exists()).toBe(true);
		});

		test('the badge should be able to display a suffix icon', async () => {
			await wrapper.setProps({ suffixIcon: Icon.activity });
			expect(wrapper.findComponent(BoIcon).exists()).toBe(true);
		});

		test('the badge should be able to display both prefix and suffix icons', async () => {
			await wrapper.setProps({
				prefixIcon: Icon.activity,
				suffixIcon: Icon.airplay,
			});
			expect(wrapper.findComponent(BoIcon).exists()).toBe(true);
		});
	});
});
