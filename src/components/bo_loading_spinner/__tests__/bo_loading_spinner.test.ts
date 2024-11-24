import { BoLoadingSpinnerVariant } from '@/components/bo_loading_spinner/bo_loading_spinner.constant';
import { BoSize } from '@/data/bo_size.constant';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, test } from 'vitest';
import BoLoadingSpinner from '../BoLoadingSpinner.vue';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoLoadingSpinner, {
		props: {
			size: BoSize.default,
			variant: BoLoadingSpinnerVariant.primary,
		},
	});
});

describe('bo_loading_spinner.vue', () => {
	test('should match snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot();
	});
});
