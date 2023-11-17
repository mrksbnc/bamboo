import {
	AvatarSize,
	AvatarType,
	AvatarVariant,
	BoAvatar,
} from '@/components/Avatar';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('BoIcon', () => {
	it('renders properly', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				src: undefined,
				initial: undefined,
				size: AvatarSize.MD,
				type: AvatarType.Image,
				initialProps: undefined,
				indicatorProps: undefined,
				variant: AvatarVariant.Rounded,
			},
		});
		expect(wrapper.html()).toMatchSnapshot();
	});
});
