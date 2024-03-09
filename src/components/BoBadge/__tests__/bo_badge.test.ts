import { BoBadge } from '@/components/BoBadge';
import { BoVariant } from '@/constants';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('BoBadge', () => {
	it('should match the snapshot', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Badge',
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it('should render the correct label', () => {
		const label = 'Badge';
		const wrapper = mount(BoBadge, {
			props: {
				label,
			},
		});

		expect(wrapper.text()).toBe(label);
	});

	it('should render the correct variant', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Badge',
				variant: BoVariant.success,
			},
		});

		expect(wrapper.classes()).toContain('bg-green-600');
	});
});
