import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import DsLoadingSpinner from '../DsLoadingSpinner.vue';
import { LoadingSpinnerColor, LoadingSpinnerSize } from '..';

describe('DsLoadingSpinner', () => {
	test('renders correctly', () => {
		const wrapper = mount(DsLoadingSpinner);
		expect(wrapper).toMatchSnapshot();
	});

	test('renders correctly with color', () => {
		const wrapper = mount(DsLoadingSpinner, {
			props: {
				color: LoadingSpinnerColor.green,
			},
		});
		expect(wrapper).toMatchSnapshot(wrapper.html());
	});

	test('renders correctly with size', () => {
		const wrapper = mount(DsLoadingSpinner, {
			props: {
				size: LoadingSpinnerSize.normal,
			},
		});
		expect(wrapper).toMatchSnapshot(wrapper.html());
	});
});
