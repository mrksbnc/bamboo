import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import BoLoadingSpinner from '../BoLoadingSpinner.vue';
import { LoadingSpinnerColor, LoadingSpinnerSize } from '..';

describe('BoLoadingSpinner', () => {
	test('renders correctly', () => {
		const wrapper = mount(BoLoadingSpinner);
		expect(wrapper).toMatchSnapshot();
	});

	test('renders correctly with color', () => {
		const wrapper = mount(BoLoadingSpinner, {
			props: {
				color: LoadingSpinnerColor.green,
			},
		});
		expect(wrapper).toMatchSnapshot(wrapper.html());
	});

	test('renders correctly with size', () => {
		const wrapper = mount(BoLoadingSpinner, {
			props: {
				size: LoadingSpinnerSize.normal,
			},
		});
		expect(wrapper).toMatchSnapshot(wrapper.html());
	});
});
