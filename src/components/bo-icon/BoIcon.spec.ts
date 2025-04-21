import { BoSize } from '@/shared';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import BoIcon from '../BoIcon.vue';
import type { AccessibilityDefinition } from '../bo-icon';
import { Icon } from '../bo-icon';

// Mock the icon loading functionality
vi.mock('@/components/bo-icon/bo-icon', async () => {
	const actual = await vi.importActual('@/components/bo-icon/bo-icon');
	return {
		...actual,
		icons: {
			'/src/assets/icons/heart.svg': () => Promise.resolve('<svg>mocked heart icon</svg>'),
			'/src/assets/icons/check.svg': () => Promise.resolve('<svg>mocked check icon</svg>'),
		},
	};
});

describe('BoIcon', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	// Basic rendering tests
	it('renders properly with default settings', async () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.heart,
			},
		});

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.classes()).toContain('bo-icon');

		// Wait for any async operations to complete
		await wrapper.vm.$nextTick();
	});

	// Size tests
	it('applies small size class', () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.heart,
				size: BoSize.small,
			},
		});

		expect(wrapper.classes()).toContain('w-4');
		expect(wrapper.classes()).toContain('h-4');
	});

	it('applies default size class', () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.heart,
				size: BoSize.default,
			},
		});

		expect(wrapper.classes()).toContain('w-5');
		expect(wrapper.classes()).toContain('h-5');
	});

	it('applies large size class', () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.heart,
				size: BoSize.large,
			},
		});

		expect(wrapper.classes()).toContain('w-6');
		expect(wrapper.classes()).toContain('h-6');
	});

	// Color tests
	it('applies custom color', () => {
		const color = 'red';
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.heart,
				color,
			},
		});

		expect(wrapper.attributes('style')).toContain(`color: ${color}`);
	});

	it('applies hex color', () => {
		const color = '#3B82F6';
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.heart,
				color,
			},
		});

		expect(wrapper.attributes('style')).toContain(`color: ${color}`);
	});

	it('applies rgb color', () => {
		const color = 'rgb(16, 185, 129)';
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.heart,
				color,
			},
		});

		expect(wrapper.attributes('style')).toContain(`color: ${color}`);
	});

	// Accessibility tests
	it('adds title for accessibility when provided', () => {
		const accessibility: AccessibilityDefinition = {
			title: 'Heart Icon',
		};

		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.heart,
				accessibility,
			},
		});

		const title = wrapper.find('title');
		expect(title.exists()).toBe(true);
		expect(title.text()).toBe(accessibility.title);
	});

	it('marks icon as decorative when specified', () => {
		const accessibility: AccessibilityDefinition = {
			decorative: true,
		};

		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.heart,
				accessibility,
			},
		});

		expect(wrapper.attributes('aria-hidden')).toBe('true');
	});

	it('handles different icons', async () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.check,
			},
		});

		expect(wrapper.exists()).toBe(true);

		// Wait for any async operations to complete
		await wrapper.vm.$nextTick();
	});

	it('handles non-existent icon gracefully', async () => {
		const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

		const wrapper = mount(BoIcon, {
			props: {
				icon: 'non-existent-icon' as any,
			},
		});

		expect(wrapper.exists()).toBe(true);

		// Wait for any async operations to complete
		await wrapper.vm.$nextTick();

		consoleErrorSpy.mockRestore();
	});
});
