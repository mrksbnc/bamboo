import { BoLoadingSpinner } from '@/components/bo_loading_spinner';
import { BoSize } from '@/data/bo_size.constant';
import { BoLoaderVariant } from '@/data/loader.constant';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, test } from 'vitest';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoLoadingSpinner, {
		props: {
			size: BoSize.default,
			variant: BoLoaderVariant.primary,
		},
	});
});

describe('bo_loading_spinner.vue', () => {
	test('should match snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot();
	});
});
