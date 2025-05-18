// @vitest-environment jsdom

import { BoSize } from '@/shared/bo-size.js';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { BoAvatarShape, BoAvatarType, BoAvatarVariant } from './bo-avatar.js';
import BoAvatar from './bo-avatar.vue';

describe('BoAvatar.vue', () => {
	it('renders with default props', () => {
		const wrapper = mount(BoAvatar, {
			props: { data: { label: 'JD' } },
		});
		expect(wrapper.text()).toContain('JD');
		expect(wrapper.classes()).toContain('bo-avatar');
	});

	it('renders with image type', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				type: BoAvatarType.image,
				data: {
					src: 'test.jpg',
					alt: 'Test Image',
				},
			},
		});
		const img = wrapper.find('img');
		expect(img.exists()).toBe(true);
		expect(img.attributes('src')).toBe('test.jpg');
		expect(img.attributes('alt')).toBe('Test Image');
	});

	it('renders with circle shape', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'JD' },
				shape: BoAvatarShape.circle,
			},
		});
		expect(wrapper.classes()).toContain('rounded-full');
	});

	it('renders with custom size', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'JD' },
				size: BoSize.large,
			},
		});
		expect(wrapper.classes()).toContain('w-12');
		expect(wrapper.classes()).toContain('h-12');
	});

	it('renders with custom variant', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'JD' },
				variant: BoAvatarVariant.success,
			},
		});
		expect(wrapper.classes()).toContain('bg-green-600');
	});

	it('applies clickable styles when clickable', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'JD' },
				clickable: true,
			},
		});
		expect(wrapper.classes()).toContain('cursor-pointer');
		expect(wrapper.classes()).toContain('hover:opacity-80');
	});

	it('shows default image when withDefaultImage is true', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'JD' },
				withDefaultImage: true,
			},
		});
		expect(wrapper.find('img').exists()).toBe(true);
	});

	it('applies custom colors when provided', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'JD' },
				color: {
					bgColorHex: '#ff0000',
					colorHex: '#ffffff',
				},
			},
		});
		expect(wrapper.attributes('style')).toContain('background-color: #ff0000');
		expect(wrapper.attributes('style')).toContain('color: #ffffff');
	});

	it('renders with outline shape', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'JD' },
				shape: BoAvatarShape.outline_rounded,
			},
		});
		expect(wrapper.classes()).toContain('border');
		expect(wrapper.classes()).toContain('rounded-md');
	});
});
