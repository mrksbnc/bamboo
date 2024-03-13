import {
	BoBadge,
	BoBadgeSize,
	BoBadgeType,
	BoBadgeVariant,
} from '@/components/BoBadge';
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
				variant: BoBadgeVariant.green,
			},
		});

		expect(wrapper.classes()).toContain('bg-green-700');
	});

	it('should render the correct size', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Badge',
				size: BoBadgeSize.large,
			},
		});

		console.log(wrapper.html());
		expect(wrapper.classes()).toContain('py-1.5');
	});

	it('should render the correct type', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Badge',
				type: BoBadgeType.outline,
			},
		});

		expect(wrapper.classes()).toContain('border-blue-700');
	});
});
