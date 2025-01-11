import { BoButton, BoButtonShape, BoButtonVariant } from '@/components/bo_button';
import { Icon } from '@/components/bo_icon';
import BoIcon from '@/components/bo_icon/BoIcon.vue';
import BoLoadingSpinner from '@/components/bo_loading_spinner/BoLoadingSpinner.vue';
import { BoText } from '@/components/bo_text';
import { BoSize } from '@/shared';
import { BoLoaderVariant } from '@/shared';
import { HtmlButtonType } from '@/shared';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test } from 'vitest';

let globalWrapper: ReturnType<typeof mount>;

beforeEach(() => {
	globalWrapper = mount(BoButton, {
		props: {
			label: 'Label',
			disabled: false,
			size: BoSize.default,
			type: HtmlButtonType.button,
			variant: BoButtonVariant.primary,
		},
	});
});

describe('bo_button.vue', () => {
	test('the button should render properly', () => {
		expect(globalWrapper).toBeTruthy();
	});

	test('the container should have the correct default classes', () => {
		expect(globalWrapper.classes()).toContain('bo-button');
		expect(globalWrapper.classes()).toContain('inline-flex');
		expect(globalWrapper.classes()).toContain('items-center');
		expect(globalWrapper.classes()).toContain('justify-center');
		expect(globalWrapper.classes()).toContain('cursor-pointer');
	});

	test('the button should render the label', () => {
		expect(globalWrapper.findComponent(BoText).text()).toBe('Label');
	});

	suite('when the button is disabled', () => {
		test('the button should have the disabled class', async () => {
			await globalWrapper.setProps({ disabled: true });

			expect(globalWrapper.classes()).toContain('disabled:opacity-50');
			expect(globalWrapper.classes()).toContain('disabled:cursor-not-allowed');
		});

		test('the button should not be clickable', async () => {
			await globalWrapper.setProps({ disabled: true });
			expect(globalWrapper.classes()).toContain('disabled:pointer-events-none');
		});
	});

	suite('loading state', () => {
		test('the loading spinner should be rendered', async () => {
			await globalWrapper.setProps({ isLoading: true });
			expect(globalWrapper.findAllComponents(BoLoadingSpinner)).toHaveLength(1);
		});

		test('the spinner should be hidden if the button is not loading', async () => {
			await globalWrapper.setProps({ isLoading: false });
			expect(globalWrapper.find('bo-loading-spinner').exists()).toBe(false);
		});
	});

	suite('icon button', () => {
		let wrapper: ReturnType<typeof mount>;

		beforeEach(() => {
			wrapper = mount(BoButton, {
				props: {
					size: BoSize.default,
					type: HtmlButtonType.button,
					variant: BoButtonVariant.primary,
					prefixIcon: Icon.activity,
				},
			});
		});

		test('the button should render the icon properly', () => {
			expect(wrapper.findComponent(BoIcon)).toBeTruthy();
		});

		test('the button should have the correct icon size', () => {
			expect(wrapper.findComponent(BoIcon).props('size')).toBe(BoSize.default);
		});

		test('the button should have the correct icon color', () => {
			expect(wrapper.findComponent(BoIcon).props('color')).toBe('currentColor');
		});

		test('the label should be hidden if the button is an icon button', async () => {
			await wrapper.setProps({ label: null });
			expect(wrapper.find('.bo-button__label').exists()).toBe(false);
		});
	});

	suite('button with prefix icon', () => {
		test('the button should render the prefix icon properly', () => {
			expect(globalWrapper.findComponent(BoIcon)).toBeTruthy();
		});
	});

	suite('button with suffix icon', () => {
		test('the button should render the suffix icon properly', () => {
			expect(globalWrapper.findComponent(BoIcon)).toBeTruthy();
		});
	});

	suite('button variants', () => {
		let wrapper: ReturnType<typeof mount>;

		beforeEach(() => {
			wrapper = mount(BoButton, {
				props: {
					label: 'Label',
					disabled: false,
					size: BoSize.default,
					type: HtmlButtonType.button,
					variant: BoButtonVariant.primary,
				},
			});
		});

		test('primary button should have the correct color | background | focus classes', () => {
			expect(wrapper.classes()).toContain('bg-blue-600');
			expect(wrapper.classes()).toContain('hover:bg-blue-700');
			expect(wrapper.classes()).toContain('focus:ring-transparent');
			expect(wrapper.classes()).toContain('text-white');
		});

		test('secondary button should have the correct color | background | focus classes', async () => {
			await wrapper.setProps({ variant: BoButtonVariant.secondary });
			expect(wrapper.classes()).toContain('bg-gray-400');
			expect(wrapper.classes()).toContain('hover:bg-gray-700');
			expect(wrapper.classes()).toContain('focus:ring-transparent');
			expect(wrapper.classes()).toContain('text-white');
		});

		test('danger button should have the correct color | background | focus classes', async () => {
			await wrapper.setProps({ variant: BoButtonVariant.danger });
			expect(wrapper.classes()).toContain('bg-red-600');
			expect(wrapper.classes()).toContain('hover:bg-red-700');
			expect(wrapper.classes()).toContain('focus:ring-transparent');
			expect(wrapper.classes()).toContain('text-white');
		});

		test('warning button should have the correct color | background | focus classes', async () => {
			await wrapper.setProps({ variant: BoButtonVariant.warning });
			expect(wrapper.classes()).toContain('bg-yellow-500');
			expect(wrapper.classes()).toContain('hover:bg-yellow-700');
			expect(wrapper.classes()).toContain('focus:ring-transparent');
			expect(wrapper.classes()).toContain('text-white');
		});

		test('success button should have the correct color | background | focus classes', async () => {
			await wrapper.setProps({ variant: BoButtonVariant.success });
			expect(wrapper.classes()).toContain('bg-green-600');
			expect(wrapper.classes()).toContain('hover:bg-green-700');
			expect(wrapper.classes()).toContain('focus:ring-transparent');
			expect(wrapper.classes()).toContain('text-white');
		});

		test('dark button should have the correct color | background | focus classes', async () => {
			await wrapper.setProps({ variant: BoButtonVariant.dark });
			expect(wrapper.classes()).toContain('bg-black');
			expect(wrapper.classes()).toContain('hover:bg-black/50');
			expect(wrapper.classes()).toContain('focus:ring-transparent');
			expect(wrapper.classes()).toContain('text-white');
		});

		test('link button should have the correct color | background | focus classes', async () => {
			await wrapper.setProps({ variant: BoButtonVariant.link });
			expect(wrapper.classes()).toContain('bg-transparent');
			expect(wrapper.classes()).toContain('hover:bg-transparent');
			expect(wrapper.classes()).toContain('focus:ring-transparent');
			expect(wrapper.classes()).toContain('text-blue-500');
			expect(wrapper.classes()).toContain('hover:text-blue-700');
			expect(wrapper.classes()).toContain('focus:ring-transparent');
		});

		test('link-secondary button should have the correct color | background | focus classes', async () => {
			await wrapper.setProps({ variant: BoButtonVariant.link_secondary });
			expect(wrapper.classes()).toContain('bg-transparent');
			expect(wrapper.classes()).toContain('hover:bg-transparent');
			expect(wrapper.classes()).toContain('focus:ring-transparent');
			expect(wrapper.classes()).toContain('text-gray-600');
			expect(wrapper.classes()).toContain('hover:text-gray-700');
			expect(wrapper.classes()).toContain('focus:ring-transparent');
		});

		test('link-danger button should have the correct color | background | focus classes', async () => {
			await wrapper.setProps({ variant: BoButtonVariant.link_danger });
			expect(wrapper.classes()).toContain('bg-transparent');
			expect(wrapper.classes()).toContain('hover:bg-transparent');
			expect(wrapper.classes()).toContain('focus:ring-transparent');
			expect(wrapper.classes()).toContain('text-red-600');
			expect(wrapper.classes()).toContain('hover:text-red-700');
			expect(wrapper.classes()).toContain('focus:ring-transparent');
		});

		test('link-warning button should have the correct color | background | focus classes', async () => {
			await wrapper.setProps({ variant: BoButtonVariant.link_warning });
			expect(wrapper.classes()).toContain('bg-transparent');
			expect(wrapper.classes()).toContain('hover:bg-transparent');
			expect(wrapper.classes()).toContain('focus:ring-transparent');
			expect(wrapper.classes()).toContain('text-yellow-500');
			expect(wrapper.classes()).toContain('hover:text-yellow-700');
			expect(wrapper.classes()).toContain('focus:ring-transparent');
		});

		test('link-success button should have the correct color | background | focus classes', async () => {
			await wrapper.setProps({ variant: BoButtonVariant.link_success });
			expect(wrapper.classes()).toContain('bg-transparent');
			expect(wrapper.classes()).toContain('hover:bg-transparent');
			expect(wrapper.classes()).toContain('focus:ring-transparent');
			expect(wrapper.classes()).toContain('text-green-600');
			expect(wrapper.classes()).toContain('hover:text-green-700');
			expect(wrapper.classes()).toContain('focus:ring-transparent');
		});

		test('link-dark button should have the correct color | background | focus classes', async () => {
			await wrapper.setProps({ variant: BoButtonVariant.link_dark });
			expect(wrapper.classes()).toContain('bg-transparent');
			expect(wrapper.classes()).toContain('hover:bg-transparent');
			expect(wrapper.classes()).toContain('focus:ring-transparent');
			expect(wrapper.classes()).toContain('text-black');
			expect(wrapper.classes()).toContain('hover:text-black/50');
			expect(wrapper.classes()).toContain('focus:ring-transparent');
		});
	});

	suite('button padding & size', () => {
		let wrapper: ReturnType<typeof mount>;

		beforeEach(() => {
			wrapper = mount(BoButton, {
				props: {
					label: 'Label',
					disabled: false,
					size: BoSize.default,
					type: HtmlButtonType.button,
					variant: BoButtonVariant.primary,
				},
			});
		});

		test('the button should have the correct default padding classes', () => {
			expect(wrapper.classes()).toContain('px-[16px]');
			expect(wrapper.classes()).toContain('py-[10px]');
		});

		test('the button should have the correct padding classes if a the size is extra small', async () => {
			await wrapper.setProps({ size: BoSize.extra_small });

			expect(wrapper.classes()).toContain('py-[6px]');
			expect(wrapper.classes()).toContain('px-[8px]');
		});

		test('the button should have the correct padding classes if a the size is small', async () => {
			await wrapper.setProps({ size: BoSize.small });

			expect(wrapper.classes()).toContain('py-[8px]');
			expect(wrapper.classes()).toContain('px-[12px]');
		});

		test('the button should have the correct padding classes if a the size is default', async () => {
			await wrapper.setProps({ size: BoSize.default });

			expect(wrapper.classes()).toContain('px-[16px]');
			expect(wrapper.classes()).toContain('py-[10px]');
		});

		test('the button should have the correct size classes if a the size is large', async () => {
			await wrapper.setProps({ size: BoSize.large });

			expect(wrapper.classes()).toContain('py-[12px]');
			expect(wrapper.classes()).toContain('px-[20px]');
		});

		test('the button should have the correct padding classes if a the size is extra large', async () => {
			await wrapper.setProps({ size: BoSize.extra_large });

			expect(wrapper.classes()).toContain('py-[14px]');
			expect(wrapper.classes()).toContain('px-[24px]');
		});

		suite('button padding classes icon only', () => {
			let wrapper: ReturnType<typeof mount>;

			beforeEach(() => {
				wrapper = mount(BoButton, {
					props: {
						disabled: false,
						size: BoSize.default,
						prefixIcon: Icon.activity,
						type: HtmlButtonType.button,
						variant: BoButtonVariant.primary,
					},
				});
			});

			test('the button should have the correct padding classes if a the size is extra small', async () => {
				await wrapper.setProps({ size: BoSize.extra_small });

				expect(wrapper.classes()).toContain('p-[6px]');
			});

			test('the button should have the correct padding classes if a the size is small', async () => {
				await wrapper.setProps({ size: BoSize.small });

				expect(wrapper.classes()).toContain('p-[8px]');
			});

			test('the button should have the correct padding classes if a the size is default', async () => {
				await wrapper.setProps({ size: BoSize.default });

				expect(wrapper.classes()).toContain('p-[10px]');
			});

			test('the button should have the correct padding classes if a the size is large', async () => {
				await wrapper.setProps({ size: BoSize.large });

				expect(wrapper.classes()).toContain('p-[12px]');
			});

			test('the button should have the correct padding classes if a the size is extra large', async () => {
				await wrapper.setProps({ size: BoSize.extra_large });

				expect(wrapper.classes()).toContain('p-[14px]');
			});
		});
	});

	suite('button shapes', () => {
		let wrapper: ReturnType<typeof mount>;

		beforeEach(() => {
			wrapper = mount(BoButton, {
				props: {
					label: 'Label',
					disabled: false,
					size: BoSize.default,
					type: HtmlButtonType.button,
					shape: BoButtonShape.default,
					variant: BoButtonVariant.primary,
				},
			});
		});

		test('default button should have the correct border radius classes', () => {
			expect(wrapper.classes()).toContain('rounded-lg');
		});

		test('pill button should have the correct border radius classes', async () => {
			await wrapper.setProps({ shape: BoButtonShape.pill });
			expect(wrapper.classes()).toContain('rounded-full');
		});

		test('outline button should have the correct border radius classes', async () => {
			await wrapper.setProps({ shape: BoButtonShape.outline });
			expect(wrapper.classes()).toContain('rounded-lg');
		});
	});

	suite('button shadows', () => {
		let wrapper: ReturnType<typeof mount>;

		beforeEach(() => {
			wrapper = mount(BoButton, {
				props: {
					label: 'Label',
					disabled: false,
					size: BoSize.default,
					type: HtmlButtonType.button,
					variant: BoButtonVariant.primary,
				},
			});
		});

		test('default button should have the correct shadow classes', () => {
			expect(wrapper.classes()).toContain('shadow-lg');
		});

		test('the button should have the correct shadow classes', () => {
			expect(wrapper.classes()).toContain('shadow-lg');
		});

		test('by default the link types buttton should not have a shadow', async () => {
			await wrapper.setProps({ variant: BoButtonVariant.link });
			expect(wrapper.classes()).toContain('shadow-none');
		});
	});

	suite('button loader variants', () => {
		suite('outline button', () => {
			let wrapper: ReturnType<typeof mount>;

			beforeEach(() => {
				wrapper = mount(BoButton, {
					props: {
						label: 'Label',
						disabled: false,
						isLoading: true,
						size: BoSize.default,
						type: HtmlButtonType.button,
						shape: BoButtonShape.outline,
						variant: BoButtonVariant.primary,
					},
				});
			});

			test('the button should have the correct default loader if no other loader is provided', () => {
				const loader = wrapper.findComponent(BoLoadingSpinner);
				expect(loader.props('variant')).toBe(BoLoaderVariant.primary);
			});

			test('the button should have the correct loader if a different loader is provided', () => {
				const loader = wrapper.findComponent(BoLoadingSpinner);
				expect(loader.props('variant')).toBe(BoLoaderVariant.primary);
			});

			test('the button should be able to render a blue primary loader', async () => {
				await wrapper.setProps({ variant: BoLoaderVariant.primary });
				const loader = wrapper.findComponent(BoLoadingSpinner);
				expect(loader.props('variant')).toBe(BoLoaderVariant.primary);
			});

			test('the button should be able to render a gray secondary loader', async () => {
				await wrapper.setProps({ variant: BoLoaderVariant.secondary });
				const loader = wrapper.findComponent(BoLoadingSpinner);
				expect(loader.props('variant')).toBe(BoLoaderVariant.secondary);
			});

			test('the button should be able to render a red danger loader', async () => {
				await wrapper.setProps({ variant: BoLoaderVariant.danger });
				const loader = wrapper.findComponent(BoLoadingSpinner);
				expect(loader.props('variant')).toBe(BoLoaderVariant.danger);
			});

			test('the button should be able to render a yellow warning loader', async () => {
				await wrapper.setProps({ variant: BoLoaderVariant.warning });
				const loader = wrapper.findComponent(BoLoadingSpinner);
				expect(loader.props('variant')).toBe(BoLoaderVariant.warning);
			});

			test('the button should be able to render a green success loader', async () => {
				await wrapper.setProps({ variant: BoLoaderVariant.success });
				const loader = wrapper.findComponent(BoLoadingSpinner);
				expect(loader.props('variant')).toBe(BoLoaderVariant.success);
			});

			test('the button should be able to render a dark dark loader', async () => {
				await wrapper.setProps({ variant: BoLoaderVariant.dark });
				const loader = wrapper.findComponent(BoLoadingSpinner);
				expect(loader.props('variant')).toBe(BoLoaderVariant.dark);
			});
		});

		suite('pill button', () => {
			let wrapper: ReturnType<typeof mount>;

			beforeEach(() => {
				wrapper = mount(BoButton, {
					props: {
						label: 'Label',
						disabled: false,
						isLoading: true,
						size: BoSize.default,
						type: HtmlButtonType.button,
						shape: BoButtonShape.pill,
						variant: BoButtonVariant.primary,
					},
				});
			});

			test('the button should render a white loader with the default button variant', () => {
				const loader = wrapper.findComponent(BoLoadingSpinner);
				expect(loader.props('variant')).toBe(BoLoaderVariant.white);
			});

			test('the button should render a white loader with the primary button variant', async () => {
				await wrapper.setProps({ variant: BoLoaderVariant.primary });
				const loader = wrapper.findComponent(BoLoadingSpinner);
				expect(loader.props('variant')).toBe(BoLoaderVariant.white);
			});

			test('the button should render a white loader with the secondary button variant', async () => {
				await wrapper.setProps({ variant: BoLoaderVariant.secondary });
				const loader = wrapper.findComponent(BoLoadingSpinner);
				expect(loader.props('variant')).toBe(BoLoaderVariant.white);
			});

			test('the button should render a white loader with the danger button variant', async () => {
				await wrapper.setProps({ variant: BoLoaderVariant.danger });
				const loader = wrapper.findComponent(BoLoadingSpinner);
				expect(loader.props('variant')).toBe(BoLoaderVariant.white);
			});

			test('the button should render a white loader with the warning button variant', async () => {
				await wrapper.setProps({ variant: BoLoaderVariant.warning });
				const loader = wrapper.findComponent(BoLoadingSpinner);
				expect(loader.props('variant')).toBe(BoLoaderVariant.white);
			});

			test('the button should render a white loader with the success button variant', async () => {
				await wrapper.setProps({ variant: BoLoaderVariant.success });
				const loader = wrapper.findComponent(BoLoadingSpinner);
				expect(loader.props('variant')).toBe(BoLoaderVariant.white);
			});

			test('the button should render a white loader with the dark button variant', async () => {
				await wrapper.setProps({ variant: BoLoaderVariant.dark });
				const loader = wrapper.findComponent(BoLoadingSpinner);
				expect(loader.props('variant')).toBe(BoLoaderVariant.white);
			});
		});
	});

	suite('loader size', () => {
		let wrapper: ReturnType<typeof mount>;

		beforeEach(() => {
			wrapper = mount(BoButton, {
				props: {
					label: 'Label',
					disabled: false,
					isLoading: true,
					size: BoSize.default,
					type: HtmlButtonType.button,
					shape: BoButtonShape.outline,
					variant: BoButtonVariant.primary,
				},
			});
		});

		test('the button should have the correct default loader size', () => {
			const loader = wrapper.findComponent(BoLoadingSpinner);
			expect(loader.props('size')).toBe(BoSize.default);
		});

		test('the button should have the correct loader size if a different size is provided', async () => {
			await wrapper.setProps({ size: BoSize.small });
			const loader = wrapper.findComponent(BoLoadingSpinner);
			expect(loader.props('size')).toBe(BoSize.extra_small);
		});

		test('the button should be able to render a large loader', async () => {
			await wrapper.setProps({ size: BoSize.large });
			const loader = wrapper.findComponent(BoLoadingSpinner);
			expect(loader.props('size')).toBe(BoSize.default);
		});
	});
});
