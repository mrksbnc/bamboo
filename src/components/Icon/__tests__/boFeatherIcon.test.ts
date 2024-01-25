import {
	BoFeatherIcon,
	Icon,
	IconSize,
	IconStrokeStyle,
} from '@/components/Icon';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('BoIcon', () => {
	it('renders properly', () => {
		const wrapper = mount(BoFeatherIcon, {
			props: {
				name: Icon.activity,
				size: IconSize.md,
				strokeStyle: IconStrokeStyle.normal,
			},
		});
		expect(wrapper.html()).toMatchSnapshot();
	});
});
