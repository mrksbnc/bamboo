import { BoButton, BoButtonShape, BoButtonVariant } from '@/components/bo_button';
import { Icon } from '@/components/bo_icon';
import BoIcon from '@/components/bo_icon/BoIcon.vue';
import BoLoadingPulse from '@/components/bo_loading_pulse/BoLoadingPulse.vue';
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
		expect(globalWrapper.classes()).contains('bo-button');
		expect(globalWrapper.classes()).contains('inline-flex');
		expect(globalWrapper.classes()).contains('items-center');
		expect(globalWrapper.classes()).contains('justify-center');
		expect(globalWrapper.classes()).contains('cursor-pointer');
	});

	test('the button should render the label', () => {
		expect(globalWrapper.findComponent(BoText).text()).toBe('Label');
	});

	suite('when the button is disabled', () => {
		test('the button should have the disabled class', async () => {
			await globalWrapper.setProps({ disabled: true });

			expect(globalWrapper.classes()).contains('disabled:opacity-50');
			expect(globalWrapper.classes()).contains('disabled:cursor-not-allowed');
		});

		test('the button should not be clickable', async () => {
			await globalWrapper.setProps({ disabled: true });
			expect(globalWrapper.classes()).contains('disabled:pointer-events-none');
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
			expect(wrapper.classes()).contains('bg-blue-600');
			expect(wrapper.classes()).contains('dark:bg-blue-700');
			expect(wrapper.classes()).contains('hover:opacity-80');
			expect(wrapper.classes()).contains('focus:ring-transparent');
			expect(wrapper.classes()).contains('border');
			expect(wrapper.classes()).contains('border-blue-600');
			expect(wrapper.classes()).contains('dark:border-blue-800');
			expect(wrapper.classes()).contains('text-white');
			expect(wrapper.classes()).contains('disabled:opacity-50');
		});

		test('secondary button should have the correct color | background | focus classes', async () => {
			await wrapper.setProps({ variant: BoButtonVariant.secondary });
			expect(wrapper.classes()).contains('bg-gray-400');
			expect(wrapper.classes()).contains('dark:bg-gray-700');
			expect(wrapper.classes()).contains('hover:opacity-80');
			expect(wrapper.classes()).contains('focus:ring-transparent');
			expect(wrapper.classes()).contains('border');
			expect(wrapper.classes()).contains('border-gray-400');
			expect(wrapper.classes()).contains('dark:border-neutral-800');
			expect(wrapper.classes()).contains('text-white');
		});

		test('danger button should have the correct color | background | focus classes', async () => {
			await wrapper.setProps({ variant: BoButtonVariant.danger });
			expect(wrapper.classes()).contains('bg-red-600');
			expect(wrapper.classes()).contains('dark:bg-red-700');
			expect(wrapper.classes()).contains('focus:ring-transparent');
			expect(wrapper.classes()).contains('border');
			expect(wrapper.classes()).contains('border-red-600');
			expect(wrapper.classes()).contains('dark:border-red-800');
			expect(wrapper.classes()).contains('text-white');
		});

		test('warning button should have the correct color | background | focus classes', async () => {
			await wrapper.setProps({ variant: BoButtonVariant.warning });
			expect(wrapper.classes()).contains('bg-yellow-500');
			expect(wrapper.classes()).contains('dark:bg-yellow-600');
			expect(wrapper.classes()).contains('hover:opacity-80');
			expect(wrapper.classes()).contains('focus:ring-transparent');
			expect(wrapper.classes()).contains('border');
			expect(wrapper.classes()).contains('border-yellow-500');
			expect(wrapper.classes()).contains('dark:border-yellow-600');
			expect(wrapper.classes()).contains('text-white');
		});

		test('success button should have the correct color | background | focus classes', async () => {
			await wrapper.setProps({ variant: BoButtonVariant.success });
			expect(wrapper.classes()).contains('bg-green-600');
			expect(wrapper.classes()).contains('dark:bg-green-700');
			expect(wrapper.classes()).contains('hover:opacity-80');
			expect(wrapper.classes()).contains('focus:ring-transparent');
			expect(wrapper.classes()).contains('border');
			expect(wrapper.classes()).contains('border-green-600');
			expect(wrapper.classes()).contains('dark:border-green-800');
			expect(wrapper.classes()).contains('text-white');
		});

		test('light button should have the correct color | background | focus classes', async () => {
			await wrapper.setProps({ variant: BoButtonVariant.light });
			expect(wrapper.classes()).contains('bg-white');
			expect(wrapper.classes()).contains('dark:bg-white');
			expect(wrapper.classes()).contains('hover:opacity-80');
			expect(wrapper.classes()).contains('focus:ring-transparent');
			expect(wrapper.classes()).contains('border');
			expect(wrapper.classes()).contains('border-white');
			expect(wrapper.classes()).contains('dark:border-white');
			expect(wrapper.classes()).contains('text-black');
		});

		test('dark button should have the correct color | background | focus classes', async () => {
			await wrapper.setProps({ variant: BoButtonVariant.dark });
			expect(wrapper.classes()).contains('bg-black');
			expect(wrapper.classes()).contains('dark:bg-black');
			expect(wrapper.classes()).contains('hover:opacity-80');
			expect(wrapper.classes()).contains('focus:ring-transparent');
			expect(wrapper.classes()).contains('border');
			expect(wrapper.classes()).contains('border-black');
			expect(wrapper.classes()).contains('dark:border-black');
		});
	});

	suite('button size & padding', () => {
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
			expect(wrapper.classes()).contains('px-4');
			expect(wrapper.classes()).contains('py-2.5');
		});

		test('the button should have the correct padding classes if a the size is extra small', async () => {
			await wrapper.setProps({ size: BoSize.extra_small });

			expect(wrapper.classes()).contains('py-1.5');
			expect(wrapper.classes()).contains('px-3');
		});

		test('the button should have the correct padding classes if a the size is small', async () => {
			await wrapper.setProps({ size: BoSize.small });

			expect(wrapper.classes()).contains('py-2');
			expect(wrapper.classes()).contains('px-3');
		});

		test('the button should have the correct padding classes if a the size is default', async () => {
			await wrapper.setProps({ size: BoSize.default });

			expect(wrapper.classes()).contains('px-4');
			expect(wrapper.classes()).contains('py-2.5');
		});

		test('the button should have the correct size classes if a the size is large', async () => {
			await wrapper.setProps({ size: BoSize.large });

			expect(wrapper.classes()).contains('py-3');
			expect(wrapper.classes()).contains('px-5');
		});

		test('the button should have the correct padding classes if a the size is extra large', async () => {
			await wrapper.setProps({ size: BoSize.extra_large });

			expect(wrapper.classes()).contains('py-4');
			expect(wrapper.classes()).contains('px-6');
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
				expect(wrapper.classes()).contains('p-2');
			});

			test('the button should have the correct padding classes if a the size is small', async () => {
				await wrapper.setProps({ size: BoSize.small });
				expect(wrapper.classes()).contains('p-2.5');
			});

			test('the button should have the correct padding classes if a the size is default', async () => {
				await wrapper.setProps({ size: BoSize.default });
				expect(wrapper.classes()).contains('p-3');
			});

			test('the button should have the correct padding classes if a the size is large', async () => {
				await wrapper.setProps({ size: BoSize.large });
				expect(wrapper.classes()).contains('p-3.5');
			});

			test('the button should have the correct padding classes if a the size is extra large', async () => {
				await wrapper.setProps({ size: BoSize.extra_large });
				expect(wrapper.classes()).contains('p-4');
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
			expect(wrapper.classes()).contains('rounded-lg');
		});

		test('pill button should have the correct border radius classes', async () => {
			await wrapper.setProps({ shape: BoButtonShape.pill });
			expect(wrapper.classes()).contains('rounded-full');
		});

		test('outline button should have the correct border radius classes', async () => {
			await wrapper.setProps({ shape: BoButtonShape.outline });
			expect(wrapper.classes()).contains('rounded-lg');
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

		suite('The filled and outline button should have a shadow', () => {
			test('The button should have the correct shadow classes without any external props', () => {
				expect(wrapper.classes()).contains('shadow-lg');
				expect(wrapper.classes()).contains('inset-shadow-sm');
				expect(wrapper.classes()).contains('inset-shadow-white/20');
			});

			test('The primary button should have the correct shadow classes', () => {
				expect(wrapper.classes()).contains('shadow-lg');
				expect(wrapper.classes()).contains('inset-shadow-sm');
				expect(wrapper.classes()).contains('inset-shadow-white/20');
			});

			test('The secondary button should have the correct shadow classes', () => {
				expect(wrapper.classes()).contains('shadow-lg');
				expect(wrapper.classes()).contains('inset-shadow-sm');
				expect(wrapper.classes()).contains('inset-shadow-white/20');
			});

			test('The danger button should have the correct shadow classes', () => {
				expect(wrapper.classes()).contains('shadow-lg');
				expect(wrapper.classes()).contains('inset-shadow-sm');
				expect(wrapper.classes()).contains('inset-shadow-white/20');
			});

			test('The warning button should have the correct shadow classes', () => {
				expect(wrapper.classes()).contains('shadow-lg');
				expect(wrapper.classes()).contains('inset-shadow-sm');
				expect(wrapper.classes()).contains('inset-shadow-white/20');
			});

			test('The success button should have the correct shadow classes', () => {
				expect(wrapper.classes()).contains('shadow-lg');
				expect(wrapper.classes()).contains('inset-shadow-sm');
				expect(wrapper.classes()).contains('inset-shadow-white/20');
			});

			test('The dark button should have the correct shadow classes', () => {
				expect(wrapper.classes()).contains('shadow-lg');
				expect(wrapper.classes()).contains('inset-shadow-sm');
				expect(wrapper.classes()).contains('inset-shadow-white/20');
			});

			test('The light button should have the correct shadow classes', () => {
				expect(wrapper.classes()).contains('shadow-lg');
				expect(wrapper.classes()).contains('inset-shadow-sm');
				expect(wrapper.classes()).contains('inset-shadow-white/20');
			});
		});

		suite('The link button should not have a shadow', () => {
			test('by default the link types button should not have a shadow', async () => {
				await wrapper.setProps({ shape: BoButtonShape.link });
				expect(wrapper.classes()).contains('shadow-none');
			});

			test('the link types button should not have a shadow if the link variant is set', async () => {
				await wrapper.setProps({ variant: BoButtonVariant.primary, shape: BoButtonShape.link });
				expect(wrapper.classes()).contains('shadow-none');
				await wrapper.setProps({ variant: BoButtonVariant.secondary, shape: BoButtonShape.link });
				expect(wrapper.classes()).contains('shadow-none');
				await wrapper.setProps({ variant: BoButtonVariant.danger, shape: BoButtonShape.link });
				expect(wrapper.classes()).contains('shadow-none');
				await wrapper.setProps({ variant: BoButtonVariant.warning, shape: BoButtonShape.link });
				expect(wrapper.classes()).contains('shadow-none');
				await wrapper.setProps({ variant: BoButtonVariant.success, shape: BoButtonShape.link });
				expect(wrapper.classes()).contains('shadow-none');
				await wrapper.setProps({ variant: BoButtonVariant.dark, shape: BoButtonShape.link });
				expect(wrapper.classes()).contains('shadow-none');
				await wrapper.setProps({ variant: BoButtonVariant.light, shape: BoButtonShape.link });
				expect(wrapper.classes()).contains('shadow-none');
			});
		});
	});

	suite('button loader variants', () => {
		suite('The button should support different loader animations', () => {
			const loaderAnimationsWrapper = mount(BoButton, {
				props: {
					label: 'Label',
				},
			});

			test('The button should have the correct default loader if no other loader is provided', () => {
				expect(loaderAnimationsWrapper.findComponent(BoLoadingSpinner)).toBeTruthy();
			});

			test('The button should support a spinner type loader', () => {
				loaderAnimationsWrapper.setProps({ isLoading: true, loaderType: 'spinner' });
				expect(loaderAnimationsWrapper.findComponent(BoLoadingSpinner)).toBeTruthy();
			});

			test('The button should support a pulse type loader', () => {
				loaderAnimationsWrapper.setProps({ isLoading: true, loaderType: 'pulse' });
				expect(loaderAnimationsWrapper.findComponent(BoLoadingPulse)).toBeTruthy();
			});
		});

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
			expect(loader.props('size')).toBe(BoSize.small);
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
