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
	it('renders correctly with default props', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'BO' },
			},
		});

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('.bo-avatar__initials').exists()).toBe(true);
	});

	it('renders initials type correctly', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'BO' },
				type: BoAvatarType.initials,
			},
		});

		expect(wrapper.find('.bo-avatar__initials').exists()).toBe(true);
	});

	it('renders image type correctly', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { src: 'image-url.jpg', alt: 'User image' },
				type: BoAvatarType.image,
			},
		});

		expect(wrapper.find('.bo-avatar__unknown').exists()).toBe(true);
		const img = wrapper.find('.bo-avatar__unknown img');
		expect(img.exists()).toBe(true);
		expect(img.attributes('src')).toBe('image-url.jpg');
		expect(img.attributes('alt')).toBe('User image');
	});

	it('uses default alt text for image when not provided', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { src: 'image-url.jpg' },
				type: BoAvatarType.image,
			},
		});

		const img = wrapper.find('.bo-avatar__unknown img');
		expect(img.attributes('alt')).toBe('avatar');
	});

	it('renders default avatar when no data is provided', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: {},
				withDefaultImage: true,
			},
		});

		expect(wrapper.find('.bo-avatar__default').exists()).toBe(true);
		const img = wrapper.find('.bo-avatar__default img');
		expect(img.exists()).toBe(true);
	});

	it('applies different shapes correctly', async () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'BO' },
				shape: BoAvatarShape.circle,
			},
		});

		expect(wrapper.classes()).toContain('rounded-full');

		await wrapper.setProps({ shape: BoAvatarShape.rounded });
		expect(wrapper.classes()).toContain('rounded-md');

		await wrapper.setProps({ shape: BoAvatarShape.flat });
		expect(wrapper.classes()).toContain('rounded-none');
	});

	it('applies outline shapes correctly', async () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'BO' },
				shape: BoAvatarShape.outline_circle,
			},
		});

		expect(wrapper.classes()).toContain('border');
		expect(wrapper.classes()).toContain('rounded-full');
		expect(wrapper.classes()).not.toContain('shadow-sm');

		await wrapper.setProps({ shape: BoAvatarShape.outline_rounded });
		expect(wrapper.classes()).toContain('border');
		expect(wrapper.classes()).toContain('rounded-md');
		expect(wrapper.classes()).not.toContain('shadow-sm');
	});

	it('applies different sizes correctly', async () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'BO' },
				size: BoSize.small,
			},
		});

		expect(wrapper.classes()).toContain('w-8');
		expect(wrapper.classes()).toContain('h-8');

		await wrapper.setProps({ size: BoSize.extra_small });
		expect(wrapper.classes()).toContain('w-6');
		expect(wrapper.classes()).toContain('h-6');

		await wrapper.setProps({ size: BoSize.default });
		expect(wrapper.classes()).toContain('w-10');
		expect(wrapper.classes()).toContain('h-10');

		await wrapper.setProps({ size: BoSize.large });
		expect(wrapper.classes()).toContain('w-20');
		expect(wrapper.classes()).toContain('h-20');

		await wrapper.setProps({ size: BoSize.extra_large });
		expect(wrapper.classes()).toContain('w-36');
		expect(wrapper.classes()).toContain('h-36');
	});

	// Test extra sizes
	it('applies extra small and extra large sizes correctly', async () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'BO' },
				size: BoSize.extra_small,
			},
		});

		expect(wrapper.classes()).toContain('w-6');
		expect(wrapper.classes()).toContain('h-6');

		await wrapper.setProps({ size: BoSize.extra_large });
		expect(wrapper.classes()).toContain('w-36');
		expect(wrapper.classes()).toContain('h-36');
	});

	// Test clickable
	it('applies clickable style when enabled', async () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'BO' },
				clickable: true,
			},
		});

		expect(wrapper.classes()).toContain('cursor-pointer');

		await wrapper.setProps({ clickable: false });
		expect(wrapper.classes()).toContain('cursor-default');
	});

	// Test variants
	it('applies different variants correctly', async () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'BO' },
				variant: BoAvatarVariant.primary,
			},
		});
		expect(wrapper.classes()).toContain('bg-blue-600');

		await wrapper.setProps({ variant: BoAvatarVariant.secondary });
		expect(wrapper.classes()).toContain('bg-gray-400');

		await wrapper.setProps({ variant: BoAvatarVariant.success });
		expect(wrapper.classes()).toContain('bg-green-600');

		await wrapper.setProps({ variant: BoAvatarVariant.danger });
		expect(wrapper.classes()).toContain('bg-red-600');

		await wrapper.setProps({ variant: BoAvatarVariant.warning });
		expect(wrapper.classes()).toContain('bg-yellow-500');

		await wrapper.setProps({ variant: BoAvatarVariant.dark });
		expect(wrapper.classes()).toContain('bg-black');
	});

	it('applies custom colors when provided', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'BO' },
				color: {
					bgColorHex: '#ff0000', // rgb(255, 0, 0);
					colorHex: '#ffffff', // rgb(255, 255, 255);
				},
			},
		});

		const style = wrapper.attributes('style');
		expect(style).toContain('background-color: rgb(255, 0, 0)');
		expect(style).toContain('color: rgb(255, 255, 255)');
	});

	it('renders indicator when enabled', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'BO' },
				indicator: {
					status: BoAvatarIndicatorStatus.online,
					position: BoAvatarIndicatorPosition.topRight,
				},
			},
		});

		const indicator = wrapper.find('.absolute.rounded-full');
		expect(indicator.exists()).toBe(true);
		expect(indicator.classes()).toContain('bg-green-500');
		expect(indicator.classes()).toContain('top-0');
		expect(indicator.classes()).toContain('right-0');
	});

	it('applies different indicator statuses correctly', async () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'BO' },
				indicator: {
					status: BoAvatarIndicatorStatus.online,
				},
			},
		});

		let indicator = wrapper.find('.absolute.rounded-full');
		expect(indicator.classes()).toContain('bg-green-500');

		await wrapper.setProps({
			indicator: {
				status: BoAvatarIndicatorStatus.offline,
			},
		});
		indicator = wrapper.find('.absolute.rounded-full');
		expect(indicator.classes()).toContain('bg-gray-400');

		await wrapper.setProps({
			indicator: {
				status: BoAvatarIndicatorStatus.busy,
			},
		});
		indicator = wrapper.find('.absolute.rounded-full');
		expect(indicator.classes()).toContain('bg-red-500');

		await wrapper.setProps({
			indicator: {
				status: BoAvatarIndicatorStatus.away,
			},
		});
		indicator = wrapper.find('.absolute.rounded-full');
		expect(indicator.classes()).toContain('bg-yellow-500');
	});

	it('does not render indicator when status is none', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'BO' },
				indicator: {
					status: BoAvatarIndicatorStatus.none,
				},
			},
		});

		const indicator = wrapper.find('.absolute.rounded-full');
		expect(indicator.exists()).toBe(false);
	});

	it('renders default avatar when label is empty', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: '' },
			},
		});

		expect(wrapper.find('.bo-avatar__default').exists()).toBe(true);
	});

	it('renders default avatar when image src is undefined', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { src: undefined },
				type: BoAvatarType.image,
			},
		});

		expect(wrapper.find('.bo-avatar__default').exists()).toBe(true);
	});
});
