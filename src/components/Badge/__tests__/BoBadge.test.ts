import {
	BadgeSize,
	BadgeType,
	BadgeVariant,
	BoBadge,
} from '@/components/Badge';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('BoIcon', () => {
	it('renders properly', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'test',
			},
		});
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders with 'test' label", () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'test',
			},
		});
		expect(wrapper.text()).toBe('test');
	});

	it('renders with correct size', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'test',
				size: BadgeSize.XS,
			},
		});
		expect(wrapper.classes()).toContain('xs');
	});

	it('renders with correct variant', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'test',
				variant: BadgeVariant.Info,
			},
		});
		expect(wrapper.classes()).toContain('info');
	});

	it('renders with correct type', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'test',
				type: BadgeType.Filled,
			},
		});
		expect(wrapper.classes()).toContain('filled');
	});
});
