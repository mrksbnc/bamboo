import { BoBadge, BoBadgeShape, BoBadgeType, BoBadgeVariant } from '@/components/bo_badge';
import { BoIcon, Icon } from '@/components/bo_icon';
import BoText from '@/components/bo_text/BoText.vue';
import { BoSize } from '@/shared';
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
		expect(wrapper.find('span').classes()).contains('bo-badge');
	});

	test('the badge container should have the default classes', () => {
		expect(wrapper.classes()).contains('inline-flex');
		expect(wrapper.classes()).contains('items-center');
		expect(wrapper.classes()).contains('justify-center');
		expect(wrapper.classes()).contains('select-none');
		expect(wrapper.classes()).contains('max-h-fit');
	});

	test('the badge should render the label', () => {
		expect(wrapper.findComponent(BoText).exists()).toBe(true);
	});

	suite('badge types', () => {
		test('the badge should have the default type', async () => {
			await wrapper.setProps({ type: BoBadgeType.default });
			expect(wrapper.classes()).contains('bg-blue-100');
			expect(wrapper.classes()).contains('text-blue-800');
			expect(wrapper.classes()).contains('border');
			expect(wrapper.classes()).contains('border-blue-200');
		});

		test('the badge should support outline type', async () => {
			await wrapper.setProps({ type: BoBadgeType.outline });
			expect(wrapper.classes()).contains('border');
			expect(wrapper.classes()).contains('border-blue-600');
		});
	});

	suite('badge sizes', () => {
		suite('default', () => {
			const testWrapper = mount(BoBadge, {
				props: {
					label: 'Label',
					type: BoBadgeType.default,
					variant: BoBadgeVariant.primary,
				},
			});

			test('the badge should support extra small size related classes', async () => {
				await testWrapper.setProps({ size: BoSize.extra_small });
				expect(testWrapper.classes()).contains('px-1.5');
				expect(testWrapper.classes()).contains('py-0');
			});

			test('the badge should support small size related classes', async () => {
				await testWrapper.setProps({ size: BoSize.small });
				expect(testWrapper.classes()).contains('px-2');
				expect(testWrapper.classes()).contains('py-0.5');
			});

			test('the badge should have the default size related classes', async () => {
				await testWrapper.setProps({ size: BoSize.default });
				expect(testWrapper.classes()).contains('px-2.5');
				expect(testWrapper.classes()).contains('py-1');
			});

			test('the badge should support large size related classes', async () => {
				await testWrapper.setProps({ size: BoSize.large });
				expect(testWrapper.classes()).contains('px-3');
				expect(testWrapper.classes()).contains('py-1.5');
			});

			test('the badge should support default size related classes', async () => {
				await testWrapper.setProps({ size: BoSize.extra_large });
				expect(testWrapper.classes()).contains('px-3.5');
				expect(testWrapper.classes()).contains('py-2');
			});
		});

		suite('icon only', () => {
			suite('default', () => {
				const testWrapper = mount(BoBadge, {
					props: {
						prefixIcon: Icon.activity,
						type: BoBadgeType.default,
						variant: BoBadgeVariant.primary,
					},
				});

				test('extra small size classes', async () => {
					await testWrapper.setProps({ size: BoSize.extra_small });
					expect(testWrapper.classes()).contains('px-1.5');
					expect(testWrapper.classes()).contains('py-0');
				});

				test('small size classes', async () => {
					await testWrapper.setProps({ size: BoSize.small });
					expect(testWrapper.classes()).contains('px-2');
					expect(testWrapper.classes()).contains('py-0.5');
				});

				test('default size classes', async () => {
					await testWrapper.setProps({ size: BoSize.default });
					expect(testWrapper.classes()).contains('px-2.5');
					expect(testWrapper.classes()).contains('py-1');
				});

				test('large size classes', async () => {
					await testWrapper.setProps({ size: BoSize.large });
					expect(testWrapper.classes()).contains('px-3');
					expect(testWrapper.classes()).contains('py-1.5');
				});

				test('extra large size classes', async () => {
					await testWrapper.setProps({ size: BoSize.extra_large });
					expect(testWrapper.classes()).contains('px-3.5');
					expect(testWrapper.classes()).contains('py-2');
				});
			});

			suite('circle', () => {
				const testWrapper = mount(BoBadge, {
					props: {
						prefixIcon: Icon.activity,
						shape: BoBadgeShape.circle,
						type: BoBadgeType.default,
						variant: BoBadgeVariant.primary,
					},
				});

				test('the badge should support extra small size related classes', async () => {
					await testWrapper.setProps({ size: BoSize.extra_small });
					expect(testWrapper.classes()).contains('p-0');
				});

				test('the badge should support small size related classes', async () => {
					await testWrapper.setProps({ size: BoSize.small });
					expect(testWrapper.classes()).contains('p-0.5');
				});

				test('the badge should have the default size related classes', async () => {
					await testWrapper.setProps({ size: BoSize.default });
					expect(testWrapper.classes()).contains('p-1');
				});

				test('the badge should support large size related classes', async () => {
					await testWrapper.setProps({ size: BoSize.large });
					expect(testWrapper.classes()).contains('p-1.5');
				});

				test('the badge should support default size related classes', async () => {
					await testWrapper.setProps({ size: BoSize.extra_large });
					expect(testWrapper.classes()).contains('p-2.5');
				});
			});
		});
	});

	suite('badge shapes', () => {
		test('the badge should have the default shape', () => {
			expect(wrapper.classes()).contains('rounded-md');
		});

		test('the badge should support circle shape', async () => {
			await wrapper.setProps({ shape: BoBadgeShape.circle });
			expect(wrapper.classes()).contains('rounded-full');
		});

		test('the badge should support pill shape', async () => {
			await wrapper.setProps({ shape: BoBadgeShape.pill });
			expect(wrapper.classes()).contains('rounded-full');
		});

		test('the badge should support flat shape', async () => {
			await wrapper.setProps({ shape: BoBadgeShape.flat });
			expect(wrapper.classes()).contains('rounded-none');
		});
	});

	suite('badge variants', () => {
		suite('default', () => {
			const testWrapper = mount(BoBadge, {
				props: {
					label: 'Label',
					type: BoBadgeType.default,
					variant: BoBadgeVariant.primary,
				},
			});

			test('the badge should have the default variant', async () => {
				expect(testWrapper.classes()).contains('bg-blue-100');
				expect(testWrapper.classes()).contains('text-blue-800');
				expect(testWrapper.classes()).contains('border');
				expect(testWrapper.classes()).contains('border-blue-200');
			});

			test('the badge should support primary variant', async () => {
				await testWrapper.setProps({ variant: BoBadgeVariant.primary });
				expect(testWrapper.classes()).contains('bg-blue-100');
				expect(testWrapper.classes()).contains('text-blue-800');
				expect(testWrapper.classes()).contains('border');
				expect(testWrapper.classes()).contains('border-blue-200');
			});

			test('the badge should support secondary variant', async () => {
				await testWrapper.setProps({ variant: BoBadgeVariant.secondary });
				expect(testWrapper.classes()).contains('bg-neutral-100');
				expect(testWrapper.classes()).contains('text-neutral-800');
				expect(testWrapper.classes()).contains('border');
				expect(testWrapper.classes()).contains('border-neutral-200');
			});

			test('the badge should support danger variant', async () => {
				await testWrapper.setProps({ variant: BoBadgeVariant.danger });
				expect(testWrapper.classes()).contains('bg-red-100');
				expect(testWrapper.classes()).contains('text-red-800');
				expect(testWrapper.classes()).contains('border');
				expect(testWrapper.classes()).contains('border-red-200');
			});

			test('the badge should support warning variant', async () => {
				await testWrapper.setProps({ variant: BoBadgeVariant.warning });
				expect(testWrapper.classes()).contains('bg-yellow-100');
				expect(testWrapper.classes()).contains('text-yellow-800');
				expect(testWrapper.classes()).contains('border');
				expect(testWrapper.classes()).contains('border-yellow-200');
			});

			test('the badge should support success variant', async () => {
				await testWrapper.setProps({ variant: BoBadgeVariant.success });
				expect(testWrapper.classes()).contains('bg-green-100');
				expect(testWrapper.classes()).contains('text-green-800');
				expect(testWrapper.classes()).contains('border');
				expect(testWrapper.classes()).contains('border-green-200');
			});

			test('the badge should support dark variant', async () => {
				await testWrapper.setProps({ variant: BoBadgeVariant.dark });
				expect(testWrapper.classes()).contains('bg-black');
				expect(testWrapper.classes()).contains('text-white');
				expect(testWrapper.classes()).contains('border');
				expect(testWrapper.classes()).contains('border-black');
			});
		});

		suite('outline', () => {
			const testWrapper = mount(BoBadge, {
				props: {
					label: 'Label',
					type: BoBadgeType.outline,
					variant: BoBadgeVariant.primary,
				},
			});

			test('the badge should have the default variant', () => {
				expect(testWrapper.classes()).contains('border');
				expect(testWrapper.classes()).contains('border-blue-600');
				expect(testWrapper.classes()).contains('text-blue-600');
			});

			test('the badge should support primary variant', async () => {
				await testWrapper.setProps({ variant: BoBadgeVariant.primary });

				expect(testWrapper.classes()).contains('border');
				expect(testWrapper.classes()).contains('border-blue-600');
				expect(testWrapper.classes()).contains('text-blue-600');
			});

			test('the badge should support secondary variant', async () => {
				await testWrapper.setProps({ variant: BoBadgeVariant.secondary });
				expect(testWrapper.classes()).contains('border');
				expect(testWrapper.classes()).contains('border-neutral-600');
				expect(testWrapper.classes()).contains('text-neutral-600');
			});

			test('the badge should support danger variant', async () => {
				await testWrapper.setProps({ variant: BoBadgeVariant.danger });
				expect(testWrapper.classes()).contains('border');
				expect(testWrapper.classes()).contains('border-red-600');
				expect(testWrapper.classes()).contains('text-red-600');
			});

			test('the badge should support warning variant', async () => {
				await testWrapper.setProps({ variant: BoBadgeVariant.warning });
				expect(testWrapper.classes()).contains('border');
				expect(testWrapper.classes()).contains('border-yellow-600');
				expect(testWrapper.classes()).contains('text-yellow-600');
			});

			test('the badge should support success variant', async () => {
				await testWrapper.setProps({ variant: BoBadgeVariant.success });
				expect(testWrapper.classes()).contains('border');
				expect(testWrapper.classes()).contains('border-green-600');
				expect(testWrapper.classes()).contains('text-green-600');
			});

			test('the badge should support dark variant', async () => {
				await testWrapper.setProps({ variant: BoBadgeVariant.dark });
				expect(testWrapper.classes()).contains('border');
				expect(testWrapper.classes()).contains('border-black');
				expect(testWrapper.classes()).contains('text-black');
			});
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
	});
});
