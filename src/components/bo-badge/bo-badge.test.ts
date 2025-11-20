import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoBadge from './bo-badge.vue';
import { BoSize } from '@/shared/size';
import { BoVariant } from '@/shared/variant';
import { Icon } from '@/components/bo-icon';

describe('BoBadge', () => {
	it('renders badge element', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test' },
		});
		expect(wrapper.find('.bo-badge').exists()).toBe(true);
	});

	it('displays label text', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Badge Text' },
		});
		expect(wrapper.text()).toContain('Badge Text');
	});

	it('applies all size classes', () => {
		const sizes = [BoSize.xs, BoSize.sm, BoSize.md, BoSize.lg, BoSize.xl];

		for (const size of sizes) {
			const wrapper = mount(BoBadge, {
				props: { label: 'Test', size },
			});
			expect(wrapper.find(`.bo-badge--size-${size}`).exists()).toBe(true);
		}
	});

	it('applies default size', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test' },
		});
		expect(wrapper.find('.bo-badge--size-md').exists()).toBe(true);
	});

	it('applies all variant classes', () => {
		const variants = [
			BoVariant.primary,
			BoVariant.secondary,
			BoVariant.success,
			BoVariant.warning,
			BoVariant.danger,
			BoVariant.light,
			BoVariant.dark,
		];

		for (const variant of variants) {
			const wrapper = mount(BoBadge, {
				props: { label: 'Test', variant },
			});
			expect(wrapper.find(`.bo-badge--variant-${variant}`).exists()).toBe(true);
		}
	});

	it('applies default variant', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test' },
		});
		expect(wrapper.find('.bo-badge--variant-primary').exists()).toBe(true);
	});

	it('shows dot when showDot is true', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test', showDot: true },
		});
		expect(wrapper.find('.bo-badge__dot').exists()).toBe(true);
		expect(wrapper.find('.bo-badge--with-dot').exists()).toBe(true);
	});

	it('does not show dot by default', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test' },
		});
		expect(wrapper.find('.bo-badge__dot').exists()).toBe(false);
	});

	it('renders with prefix icon', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test', prefixIcon: Icon.check },
		});
		const icons = wrapper.findAllComponents({ name: 'BoIcon' });
		expect(icons.length).toBeGreaterThan(0);
	});

	it('renders with suffix icon', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test', suffixIcon: Icon.x },
		});
		const icons = wrapper.findAllComponents({ name: 'BoIcon' });
		expect(icons.length).toBeGreaterThan(0);
	});

	it('renders with both prefix and suffix icons', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test', prefixIcon: Icon.check, suffixIcon: Icon.x },
		});
		const icons = wrapper.findAllComponents({ name: 'BoIcon' });
		expect(icons.length).toBe(2);
	});

	it('applies custom CSS class', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test', customCssClass: 'custom-class' },
		});
		expect(wrapper.classes()).toContain('custom-class');
	});

	it('has default id', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test' },
		});
		expect(wrapper.attributes('id')).toBeDefined();
	});

	it('has default data-testid', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test' },
		});
		expect(wrapper.attributes('data-testid')).toBeDefined();
	});

	it('applies custom id', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test', id: 'custom-id' },
		});
		expect(wrapper.attributes('id')).toBe('custom-id');
	});

	it('applies custom data-testid', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test', dataTestId: 'custom-testid' },
		});
		expect(wrapper.attributes('data-testid')).toBe('custom-testid');
	});

	it('applies aria-label when provided', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test', ariaLabel: 'Custom label' },
		});
		expect(wrapper.attributes('aria-label')).toBe('Custom label');
	});

	it('uses label as aria-label when ariaLabel not provided', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test Badge' },
		});
		expect(wrapper.attributes('aria-label')).toBe('Test Badge');
	});

	it('applies role when provided', () => {
		const wrapper = mount(BoBadge, {
			props: { label: 'Test', role: 'status' },
		});
		expect(wrapper.attributes('role')).toBe('status');
	});

	it('renders slot content', () => {
		const wrapper = mount(BoBadge, {
			slots: { default: '<span class="custom-content">Custom</span>' },
		});
		expect(wrapper.find('.custom-content').exists()).toBe(true);
		expect(wrapper.text()).toContain('Custom');
	});
});
