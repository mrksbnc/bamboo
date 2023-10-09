import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { ButtonSize, ButtonType, RuiButton } from '..';

const btnType = ButtonType.primary;
const btnSize = ButtonSize.base;

describe('RuiButton', () => {
	test('renders correctly', () => {
		const wrapper = mount(RuiButton, {
			props: {
				label: 'Test',
				size: 'small' as ButtonSize,
				type: 'primary' as ButtonType,
			},
		});
		expect(wrapper.html()).toMatchSnapshot();
	});
});
