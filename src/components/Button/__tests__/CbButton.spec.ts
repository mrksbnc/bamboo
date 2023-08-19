import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { ButtonSize, ButtonType, ClButton } from '..';

const btnType = ButtonType.primary;
const btnSize = ButtonSize.base;

describe('ClButton', () => {
	test('renders correctly', () => {
		const wrapper = mount(ClButton, {
			props: {
				label: 'Test',
				size: 'small' as ButtonSize,
				type: 'primary' as ButtonType,
			},
		});
		expect(wrapper.html()).toMatchSnapshot();
	});
});
