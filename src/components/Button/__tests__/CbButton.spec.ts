import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { ButtonSize, ButtonType, CbButton } from '..';

describe('CbButton', () => {
	test('renders correctly', () => {
		const wrapper = mount(CbButton);
		expect(wrapper).toMatchSnapshot();
	});

	test('renders correctly with color', () => {
		const wrapper = mount(CbButton, {
			props: {
				label: 'Test',
				color: ButtonType.DANGER,
			},
		});
		expect(wrapper).toMatchSnapshot(wrapper.html());
	});

	test('renders correctly with size', () => {
		const wrapper = mount(CbButton, {
			props: {
				label: 'Test',
				size: ButtonSize.LARGE,
			},
		});
		expect(wrapper).toMatchSnapshot(wrapper.html());
	});
});
