import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { ButtonSize, ButtonType, ClButton } from '..';

describe('ClButton', () => {
	test('renders correctly', () => {
		const wrapper = mount(ClButton);
		expect(wrapper).toMatchSnapshot();
	});

	test('renders correctly with color', () => {
		const wrapper = mount(ClButton, {
			props: {
				label: 'Test',
				color: ButtonType.DANGER,
			},
		});
		expect(wrapper).toMatchSnapshot(wrapper.html());
	});

	test('renders correctly with size', () => {
		const wrapper = mount(ClButton, {
			props: {
				label: 'Test',
				size: ButtonSize.LARGE,
			},
		});
		expect(wrapper).toMatchSnapshot(wrapper.html());
	});
});
