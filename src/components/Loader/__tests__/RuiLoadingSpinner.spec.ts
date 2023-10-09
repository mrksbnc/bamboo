import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import RuiLoadingSpinner from '../RuiLoadingSpinner.vue';
import { LoadingSpinnerColor, LoadingSpinnerSize } from '..';

describe('RuiLoadingSpinner', () => {
	test('renders correctly', () => {
		const wrapper = mount(RuiLoadingSpinner);
		expect(wrapper).toMatchSnapshot();
	});

	test('renders correctly with color', () => {
		const wrapper = mount(RuiLoadingSpinner, {
			props: {
				color: LoadingSpinnerColor.green,
			},
		});
		expect(wrapper).toMatchSnapshot(wrapper.html());
	});

	test('renders correctly with size', () => {
		const wrapper = mount(RuiLoadingSpinner, {
			props: {
				size: LoadingSpinnerSize.normal,
			},
		});
		expect(wrapper).toMatchSnapshot(wrapper.html());
	});
});
