import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { BoIcon } from '@/components/Icon';

describe('BoIcon', () => {
	test('renders correctly', () => {
		const wrapper = mount(BoIcon);
		expect(wrapper).toMatchSnapshot();
	});
});
