import { Icon } from '@/components/bo-icon';
import { BoSize } from '@/shared';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoBadge from './BoBadge.vue';
import { BoBadgeShape, BoBadgeType, BoBadgeVariant } from './bo-badge';

describe('BoBadge', () => {
	// Basic rendering test
	it('renders properly with label', () => {
		const label = 'Test Badge';
		const wrapper = mount(BoBadge, {
			props: { label },
		});

		expect(wrapper.text()).toContain(label);
	});

	// Props tests
	it('applies the correct variant class', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Variant Test',
				variant: BoBadgeVariant.danger,
			},
		});

		expect(wrapper.classes()).toContain('bg-red-500');
	});

	it('applies the correct type class', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Type Test',
				type: BoBadgeType.outline,
			},
		});

		expect(wrapper.classes()).toContain('border');
		expect(wrapper.classes()).toContain('bg-transparent');
	});

	it('applies the correct shape class', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Shape Test',
				shape: BoBadgeShape.pill,
			},
		});

		expect(wrapper.classes()).toContain('rounded-full');
	});

	it('applies the circle shape correctly', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'C',
				shape: BoBadgeShape.circle,
			},
		});

		expect(wrapper.classes()).toContain('rounded-full');
		expect(wrapper.classes()).toContain('aspect-square');
	});

	it('applies the flat shape correctly', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Flat Test',
				shape: BoBadgeShape.flat,
			},
		});

		expect(wrapper.classes()).toContain('rounded-none');
	});

	it('applies the correct size class', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Size Test',
				size: BoSize.large,
			},
		});

		expect(wrapper.classes()).toContain('text-base');
		expect(wrapper.classes()).toContain('px-4');
		expect(wrapper.classes()).toContain('py-2');
	});

	// Icon rendering tests
	it('renders prefix icon correctly', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Icon Test',
				icon: {
					prefix: Icon.check,
				},
			},
		});

		expect(wrapper.findComponent({ name: 'BoIcon' }).exists()).toBe(true);
	});

	it('renders suffix icon correctly', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Icon Test',
				icon: {
					suffix: Icon.check,
				},
			},
		});

		expect(wrapper.findComponent({ name: 'BoIcon' }).exists()).toBe(true);
	});

	it('renders both icons correctly', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Icon Test',
				icon: {
					prefix: Icon.check,
					suffix: Icon.arrow_right,
				},
			},
		});

		const icons = wrapper.findAllComponents({ name: 'BoIcon' });
		expect(icons.length).toBe(2);
	});
});
