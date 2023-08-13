import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import CbLoadingSpinner from '../CbLoadingSpinner.vue';
import { LoadingSpinnerColor, LoadingSpinnerSize } from '..';

describe('CbLoadingSpinner', () => {
	test('renders correctly', () => {
		const wrapper = mount(CbLoadingSpinner);
		expect(wrapper).toMatchSnapshot();
	});

	test('renders correctly with color', () => {
		const wrapper = mount(CbLoadingSpinner, {
			props: {
				color: LoadingSpinnerColor.GREEN,
			},
		});
		expect(wrapper).toMatchSnapshot(wrapper.html());
	});

	test('renders correctly with size', () => {
		const wrapper = mount(CbLoadingSpinner, {
			props: {
				size: LoadingSpinnerSize.MEDIUM,
			},
		});
		expect(wrapper).toMatchSnapshot(wrapper.html());
	});
});
