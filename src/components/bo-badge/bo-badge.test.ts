import { BoIcon, Icon } from '@/components/bo-icon';
import { BoSize } from '@/shared/bo-size.js';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { BoBadgeShape, BoBadgeType, BoBadgeVariant } from './bo-badge';
import BoBadge from './bo-badge.vue';

describe('BoBadge.vue', () => {
	it('renders with default variant', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Badge' },
		});
		expect(wrapper.classes()).toContain('bg-blue-600');
	});

	it('renders with specified variant', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Badge',
				variant: BoBadgeVariant.success,
			},
		});
		expect(wrapper.classes()).toContain('bg-green-600');
	});

	it('renders with circle shape', () => {
		const wrapper = mount(BoBadge, {
			props: {
				shape: BoBadgeShape.circle,
				icon: { prefix: Icon.check },
			},
		});
		expect(wrapper.classes()).toContain('rounded-full');
	});

	it('renders with custom size', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Badge',
				size: BoSize.large,
			},
		});
		expect(wrapper.classes()).toContain('px-2.5');
	});

	it('renders with custom class', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Badge',
				class: 'custom-class',
			},
		});
		expect(wrapper.classes()).toContain('custom-class');
	});

	it('renders with prefix icon', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Badge',
				icon: { prefix: Icon.check },
			},
		});
		const icon = wrapper.findComponent(BoIcon);
		expect(icon.exists()).toBe(true);
		expect(icon.props('icon')).toBe(Icon.check);
	});

	it('renders with suffix icon', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Badge',
				icon: { suffix: Icon.check },
			},
		});
		const icon = wrapper.findComponent(BoIcon);
		expect(icon.exists()).toBe(true);
		expect(icon.props('icon')).toBe(Icon.check);
	});

	it('renders with custom content', () => {
		const wrapper = mount(BoBadge, {
			slots: { default: 'Custom Content' },
		});
		expect(wrapper.text()).toBe('Custom Content');
	});

	it('renders with outline type', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Badge',
				type: BoBadgeType.outline,
				variant: BoBadgeVariant.primary,
			},
		});
		expect(wrapper.classes()).toContain('bg-transparent');
		expect(wrapper.classes()).toContain('border-blue-600');
	});
});
