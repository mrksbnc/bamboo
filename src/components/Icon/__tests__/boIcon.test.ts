import { BoIcon, Icon, IconSize } from '@/components/Icon';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('BoIcon', () => {
	it('renders properly', () => {
		const wrapper = mount(BoIcon, {
			props: {
				name: Icon.activity,
				size: IconSize.MD,
			},
		});
		expect(wrapper.html()).toMatchSnapshot();
	});
});
