import { BoButton, BoButtonVariant } from '@/components/bo_button';
import { Icon } from '@/components/bo_icon';
import BoIcon from '@/components/bo_icon/BoIcon.vue';
import BoLoadingSpinner from '@/components/bo_loading_spinner/BoLoadingSpinner.vue';
import { BoText } from '@/components/bo_text';
import { BoSize } from '@/data/bo_size.constant';
import { HtmlButtonType } from '@/global';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test } from 'vitest';

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

describe('bo_button.vue', () => {
	test('the button should render properly', () => {
		expect(wrapper).toBeTruthy();
	});

	test('the container should have the correct default classes', () => {
		expect(wrapper.classes()).toContain('bo-button');
		expect(wrapper.classes()).toContain('inline-flex');
		expect(wrapper.classes()).toContain('items-center');
		expect(wrapper.classes()).toContain('justify-center');
		expect(wrapper.classes()).toContain('cursor-pointer');
	});

	test('the button should render the label', () => {
		expect(wrapper.findComponent(BoText).text()).toBe('Label');
	});

	suite('when the button is disabled', () => {
		test('the button should have the disabled class', async () => {
			await wrapper.setProps({ disabled: true });

			expect(wrapper.classes()).toContain('disabled:opacity-50');
			expect(wrapper.classes()).toContain('disabled:cursor-not-allowed');
		});

		test('the button should not be clickable', async () => {
			await wrapper.setProps({ disabled: true });
			expect(wrapper.classes()).toContain('disabled:pointer-events-none');
		});
	});

	suite('loading state', () => {
		test('the loading spinner should be rendered', async () => {
			await wrapper.setProps({ isLoading: true });
			expect(wrapper.findAllComponents(BoLoadingSpinner)).toHaveLength(1);
		});

		test('the spinner should be hidden if the button is not loading', async () => {
			await wrapper.setProps({ isLoading: false });
			expect(wrapper.find('bo-loading-spinner').exists()).toBe(false);
		});
	});

	suite('icon button', () => {
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

		test('the button should have the correct default classes', () => {
			const element = wrapper.find('.bo-button__content');
			expect(element.classes()).toContain('p-2.5');
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
		test('the button should render the icon properly', () => {
			expect(wrapper.findComponent(BoIcon)).toBeTruthy();
		});
	});
});
