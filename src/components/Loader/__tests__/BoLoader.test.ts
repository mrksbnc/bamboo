import { BoSpinner, SpinnerSize, SpinnerVariant } from '@/components/Loader';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('BoIcon', () => {
	it('renders properly', () => {
		const wrapper = mount(BoSpinner, {
			props: {
				size: SpinnerSize.MD,
				variant: SpinnerVariant.Info,
			},
		});
		expect(wrapper.html()).toMatchSnapshot();
	});
});
