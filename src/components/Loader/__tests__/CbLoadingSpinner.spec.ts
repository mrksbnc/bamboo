import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import ClLoadingSpinner from '../ClLoadingSpinner.vue';
import { LoadingSpinnerColor, LoadingSpinnerSize } from '..';

describe('ClLoadingSpinner', () => {
	test('renders correctly', () => {
		const wrapper = mount(ClLoadingSpinner);
		expect(wrapper).toMatchSnapshot();
	});

	test('renders correctly with color', () => {
		const wrapper = mount(ClLoadingSpinner, {
			props: {
				color: LoadingSpinnerColor.green,
			},
		});
		expect(wrapper).toMatchSnapshot(wrapper.html());
	});

	test('renders correctly with size', () => {
		const wrapper = mount(ClLoadingSpinner, {
			props: {
				size: LoadingSpinnerSize.NORMAL,
			},
		});
		expect(wrapper).toMatchSnapshot(wrapper.html());
	});
});
