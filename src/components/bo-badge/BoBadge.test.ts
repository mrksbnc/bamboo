import { Icon } from '@/components/bo-icon';
import { BoSize } from '@/shared';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoBadge from './BoBadge.vue';
import { BoBadgeShape, BoBadgeType, BoBadgeVariant } from './bo-badge';

describe('BoBadge', () => {
	it('renders correctly with default props', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Badge',
			},
		});

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.classes()).toContain('bo-badge');
	});

	it('renders with different variants', async () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Badge',
				variant: BoBadgeVariant.primary,
			},
		});

		expect(wrapper.classes()).toContain('bg-blue-600');

		await wrapper.setProps({ variant: BoBadgeVariant.secondary });
		expect(wrapper.classes()).toContain('bg-neutral-600');

		await wrapper.setProps({ variant: BoBadgeVariant.danger });
		expect(wrapper.classes()).toContain('bg-red-600');

		await wrapper.setProps({ variant: BoBadgeVariant.warning });
		expect(wrapper.classes()).toContain('bg-yellow-600');

		await wrapper.setProps({ variant: BoBadgeVariant.success });
		expect(wrapper.classes()).toContain('bg-green-600');

		await wrapper.setProps({ variant: BoBadgeVariant.light });
		expect(wrapper.classes()).toContain('bg-neutral-100');

		await wrapper.setProps({ variant: BoBadgeVariant.dark });
		expect(wrapper.classes()).toContain('bg-neutral-800');
	});

	it('renders with different types', async () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Badge',
				type: BoBadgeType.default,
			},
		});

		await wrapper.setProps({ type: BoBadgeType.outline });
		expect(wrapper.classes()).toContain('bg-transparent');
	});

	it('renders with different shapes', async () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Badge',
				shape: BoBadgeShape.default,
			},
		});

		expect(wrapper.classes()).toContain('rounded-md');

		await wrapper.setProps({ shape: BoBadgeShape.pill });
		expect(wrapper.classes()).toContain('rounded-full');

		await wrapper.setProps({ shape: BoBadgeShape.flat });
		expect(wrapper.classes()).toContain('rounded-none');

		await wrapper.setProps({ shape: BoBadgeShape.circle });
		expect(wrapper.classes()).toContain('rounded-full');
	});

	it('renders with different sizes', async () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Badge',
				size: BoSize.default,
			},
		});

		expect(wrapper.classes()).toContain('px-2');
		expect(wrapper.classes()).toContain('py-0.75');

		await wrapper.setProps({ size: BoSize.small });
		expect(wrapper.classes()).toContain('px-1.5');
		expect(wrapper.classes()).toContain('py-0.5');

		await wrapper.setProps({ size: BoSize.large });
		expect(wrapper.classes()).toContain('px-2.5');
		expect(wrapper.classes()).toContain('py-1');

		await wrapper.setProps({ size: BoSize.extra_small });
		expect(wrapper.classes()).toContain('px-1');
		expect(wrapper.classes()).toContain('py-0');

		await wrapper.setProps({ size: BoSize.extra_large });
		expect(wrapper.classes()).toContain('px-3');
		expect(wrapper.classes()).toContain('py-1.5');
	});

	it('renders with prefix icon', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Badge',
				icon: {
					prefix: Icon.check,
				},
			},
		});

		const icon = wrapper.findComponent({ name: 'bo-icon' });
		expect(icon.exists()).toBe(true);
	});

	it('renders with suffix icon', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Badge',
				icon: {
					suffix: Icon.check,
				},
			},
		});

		const icon = wrapper.findComponent({ name: 'bo-icon' });
		expect(icon.exists()).toBe(true);
	});

	it('renders circle shape with icon only correctly', () => {
		const wrapper = mount(BoBadge, {
			props: {
				icon: {
					prefix: Icon.check,
				},
				shape: BoBadgeShape.circle,
			},
			global: {
				stubs: {
					'bo-icon': true,
				},
			},
		});

		expect(wrapper.classes()).toContain('rounded-full');
		const icon = wrapper.findComponent({ name: 'bo-icon' });
		expect(icon.exists()).toBe(true);
	});

	it('applies correct padding for circle shape with different sizes', async () => {
		const wrapper = mount(BoBadge, {
			props: {
				icon: {
					prefix: Icon.check,
				},
				shape: BoBadgeShape.circle,
				size: BoSize.default,
			},
			global: {
				stubs: {
					'bo-icon': true,
				},
			},
		});

		expect(wrapper.classes()).toContain('p-0.75');

		await wrapper.setProps({ size: BoSize.small });
		expect(wrapper.classes()).toContain('p-0.5');

		await wrapper.setProps({ size: BoSize.large });
		expect(wrapper.classes()).toContain('p-1.25');

		await wrapper.setProps({ size: BoSize.extra_small });
		expect(wrapper.classes()).toContain('p-0');

		await wrapper.setProps({ size: BoSize.extra_large });
		expect(wrapper.classes()).toContain('p-2');
	});

	it('has correct font size based on badge size', async () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Badge',
				size: BoSize.default,
			},
		});

		let boText = wrapper.findComponent({ name: 'bo-text' });
		expect(boText.props('size')).toBe('xs');

		await wrapper.setProps({ size: BoSize.large });
		boText = wrapper.findComponent({ name: 'bo-text' });
		expect(boText.props('size')).toBe('base');

		await wrapper.setProps({ size: BoSize.extra_large });
		boText = wrapper.findComponent({ name: 'bo-text' });
		expect(boText.props('size')).toBe('lg');
	});

	it('uses slot content when provided', () => {
		const wrapper = mount(BoBadge, {
			props: {
				label: 'Badge',
			},
			slots: {
				default: '<span data-test="custom-content">Custom Content</span>',
			},
		});

		expect(wrapper.find('[data-test="custom-content"]').exists()).toBe(true);
	});
});
