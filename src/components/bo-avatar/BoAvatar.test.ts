import { BoSize } from '@/shared/bo-size';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoAvatar from './BoAvatar.vue';
import { BoAvatarIndicatorStatus, BoAvatarShape, BoAvatarType } from './bo-avatar';

describe('BoAvatar.vue', () => {
	it('renders with default size', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'Test' },
			},
		});
		const sizeClass = `w-${BoSize.default} h-${BoSize.default}`;
		expect(wrapper.classes().some((c) => c.includes(sizeClass))).toBe(true);
	});

	it('renders with specified size', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'Test' },
				size: BoSize.large,
			},
		});
		const sizeClass = `w-${BoSize.large} h-${BoSize.large}`;
		expect(wrapper.classes().some((c) => c.includes(sizeClass))).toBe(true);
	});

	it('renders with image when src is provided', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { src: 'test.jpg' },
				type: BoAvatarType.image,
			},
		});
		const img = wrapper.find('img');
		expect(img.exists()).toBe(true);
		expect(img.attributes('src')).toBe('test.jpg');
	});

	it('renders initials when label is provided', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'John Doe' },
				type: BoAvatarType.initials,
			},
		});
		expect(wrapper.text()).toBe('JD');
	});

	it('renders with custom color', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'Test' },
				color: { bgColorHex: '#ff0000', colorHex: '#ffffff' },
			},
		});
		expect(wrapper.classes()).toContain('bg-transparent');
	});

	it('renders with online indicator', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'Test' },
				indicator: { status: BoAvatarIndicatorStatus.online },
			},
		});
		const status = wrapper.find('.status-indicator');
		expect(status.exists()).toBe(true);
		expect(status.classes()).toContain('bg-green-500');
	});

	it('renders with offline indicator', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'Test' },
				indicator: { status: BoAvatarIndicatorStatus.offline },
			},
		});
		const status = wrapper.find('.status-indicator');
		expect(status.exists()).toBe(true);
		expect(status.classes()).toContain('bg-gray-400');
	});

	it('renders with square shape', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'Test' },
				shape: BoAvatarShape.flat,
			},
		});
		expect(wrapper.classes()).toContain('rounded-none');
	});

	it('renders with custom class', () => {
		const wrapper = mount(BoAvatar, {
			props: {
				data: { label: 'Test' },
				class: 'custom-class',
			},
		});
		expect(wrapper.classes()).toContain('custom-class');
	});
});
