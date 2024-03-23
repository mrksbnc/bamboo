import { BoSize } from '@/constants';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, test } from 'vitest';
import { BoIcon, Icon } from '..';

let wrapper: ReturnType<typeof mount>;

beforeEach(() => {
	wrapper = mount(BoIcon, {
		props: {
			icon: Icon.activity,
			size: BoSize.default,
			color: '#000000',
		},
	});
});

describe('BoIcon', () => {
	test('should match snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	test('should render the icon', () => {
		expect(wrapper.find('activity')).toBeTruthy();
	});
});
