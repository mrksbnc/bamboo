import { BoSize } from '@/shared';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoAvatar from './BoAvatar.vue';
import {
	BoAvatarIndicatorPosition,
	BoAvatarIndicatorStatus,
	BoAvatarShape,
	BoAvatarType,
	BoAvatarVariant,
} from './bo-avatar';

describe('BoAvatar', () => {
	// Basic rendering tests
	it('renders properly with image source', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: {
					src: 'https://example.com/avatar.jpg',
					alt: 'Test Avatar',
				},
			},
		});

		const img = wrapper.find('img');
		expect(img.exists()).toBe(true);
		expect(img.attributes('src')).toBe('https://example.com/avatar.jpg');
		expect(img.attributes('alt')).toBe('Test Avatar');
	});

	it('renders properly with initials', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				type: BoAvatarType.initials,
				data: {
					label: 'JD',
				},
			},
		});

		expect(wrapper.text()).toContain('JD');
		expect(wrapper.find('img').exists()).toBe(false);
	});

	// Shape tests
	it('applies circle shape', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				shape: BoAvatarShape.circle,
				data: {
					src: 'https://example.com/avatar.jpg',
					alt: 'Circle Avatar',
				},
			},
		});

		expect(wrapper.classes()).toContain('rounded-full');
	});

	it('applies flat shape', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				shape: BoAvatarShape.flat,
				data: {
					src: 'https://example.com/avatar.jpg',
					alt: 'Flat Avatar',
				},
			},
		});

		expect(wrapper.classes()).toContain('rounded-none');
	});

	it('applies rounded shape', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				shape: BoAvatarShape.rounded,
				data: {
					src: 'https://example.com/avatar.jpg',
					alt: 'Rounded Avatar',
				},
			},
		});

		expect(wrapper.classes()).toContain('rounded-md');
	});

	it('applies outline shape', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				shape: BoAvatarShape.outline_circle,
				data: {
					src: 'https://example.com/avatar.jpg',
					alt: 'Outline Avatar',
				},
			},
		});

		expect(wrapper.classes()).toContain('rounded-full');
		expect(wrapper.classes()).toContain('border');
	});

	// Size tests
	it('applies small size', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				size: BoSize.small,
				data: {
					src: 'https://example.com/avatar.jpg',
					alt: 'Small Avatar',
				},
			},
		});

		expect(wrapper.classes()).toContain('h-8');
		expect(wrapper.classes()).toContain('w-8');
	});

	it('applies default size', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				size: BoSize.default,
				data: {
					src: 'https://example.com/avatar.jpg',
					alt: 'Default Avatar',
				},
			},
		});

		expect(wrapper.classes()).toContain('h-10');
		expect(wrapper.classes()).toContain('w-10');
	});

	it('applies large size', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				size: BoSize.large,
				data: {
					src: 'https://example.com/avatar.jpg',
					alt: 'Large Avatar',
				},
			},
		});

		expect(wrapper.classes()).toContain('h-12');
		expect(wrapper.classes()).toContain('w-12');
	});

	// Variant tests
	it('applies primary variant', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				type: BoAvatarType.initials,
				variant: BoAvatarVariant.primary,
				data: {
					label: 'P',
				},
			},
		});

		expect(wrapper.classes()).toContain('bg-blue-500');
	});

	it('applies danger variant', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				type: BoAvatarType.initials,
				variant: BoAvatarVariant.danger,
				data: {
					label: 'D',
				},
			},
		});

		expect(wrapper.classes()).toContain('bg-red-500');
	});

	// Custom color test
	it('applies custom colors', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				type: BoAvatarType.initials,
				data: {
					label: 'C',
				},
				color: {
					bgColorHex: '#8B5CF6',
					colorHex: '#FFFFFF',
				},
			},
		});

		expect(wrapper.attributes('style')).toContain('background-color: rgb(139, 92, 246)');
		expect(wrapper.attributes('style')).toContain('color: rgb(255, 255, 255)');
	});

	// Status indicator tests
	it('renders status indicator', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: {
					src: 'https://example.com/avatar.jpg',
					alt: 'Avatar with Status',
				},
				indicator: {
					status: BoAvatarIndicatorStatus.online,
					position: BoAvatarIndicatorPosition.bottomRight,
				},
			},
		});

		const indicator = wrapper.find('.status-indicator');
		expect(indicator.exists()).toBe(true);
		expect(indicator.classes()).toContain('bg-green-500');
	});

	it('positions indicator correctly', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: {
					src: 'https://example.com/avatar.jpg',
					alt: 'Avatar with Status',
				},
				indicator: {
					status: BoAvatarIndicatorStatus.online,
					position: BoAvatarIndicatorPosition.topLeft,
				},
			},
		});

		const indicator = wrapper.find('.status-indicator');
		expect(indicator.classes()).toContain('top-0');
		expect(indicator.classes()).toContain('left-0');
	});

	// Clickable test
	it('applies clickable styles', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: {
					src: 'https://example.com/avatar.jpg',
					alt: 'Clickable Avatar',
				},
				clickable: true,
			},
		});

		expect(wrapper.classes()).toContain('cursor-pointer');
		expect(wrapper.classes()).toContain('hover:opacity-80');
	});

	// Default image fallback test
	it('handles image load error with default image', async () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: {
					src: 'https://example.com/nonexistent.jpg',
					alt: 'Missing Avatar',
				},
				withDefaultImage: true,
			},
		});

		const img = wrapper.find('img');
		await img.trigger('error');

		// After error, should show default image
		expect(img.attributes('src')).not.toBe('https://example.com/nonexistent.jpg');
	});
});
