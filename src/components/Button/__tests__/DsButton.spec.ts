import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { ButtonSize, ButtonType, DsButton } from '..';

const btnType = ButtonType.primary;
const btnSize = ButtonSize.base;

describe('DsButton', () => {
	test('renders correctly', () => {
		const wrapper = mount(DsButton, {
			props: {
				label: 'Test',
				size: 'small' as ButtonSize,
				type: 'primary' as ButtonType,
			},
		});
		expect(wrapper.html()).toMatchSnapshot();
	});
});
