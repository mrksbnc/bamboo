import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoText from './BoText.vue';
import {
	BoFontFamily,
	BoFontSize,
	BoFontWeight,
	BoTextAlign,
	BoTextColor,
	BoTextWhiteSpace,
} from './bo-text';

describe('BoText', () => {
	it('renders correctly with default props', () => {
		const wrapper = mount(BoText, {
			props: {
				text: 'Hello World',
			},
		});

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.text()).toBe('Hello World');
		expect(wrapper.classes()).toContain('bo-text');
	});

	it('applies different font sizes correctly', async () => {
		const wrapper = mount(BoText, {
			props: {
				text: 'Hello World',
				size: BoFontSize.base,
			},
		});

		expect(wrapper.classes()).toContain('text-base');

		await wrapper.setProps({ size: BoFontSize.xs });
		expect(wrapper.classes()).toContain('text-xs');

		await wrapper.setProps({ size: BoFontSize.sm });
		expect(wrapper.classes()).toContain('text-sm');

		await wrapper.setProps({ size: BoFontSize.lg });
		expect(wrapper.classes()).toContain('text-lg');

		await wrapper.setProps({ size: BoFontSize.xl });
		expect(wrapper.classes()).toContain('text-xl');

		await wrapper.setProps({ size: BoFontSize['2xl'] });
		expect(wrapper.classes()).toContain('text-2xl');
	});

	it('applies different font weights correctly', async () => {
		const wrapper = mount(BoText, {
			props: {
				text: 'Hello World',
				weight: BoFontWeight.regular,
			},
		});

		expect(wrapper.classes()).toContain('font-normal');

		await wrapper.setProps({ weight: BoFontWeight.light });
		expect(wrapper.classes()).toContain('font-light');

		await wrapper.setProps({ weight: BoFontWeight.medium });
		expect(wrapper.classes()).toContain('font-medium');

		await wrapper.setProps({ weight: BoFontWeight.semibold });
		expect(wrapper.classes()).toContain('font-semibold');

		await wrapper.setProps({ weight: BoFontWeight.bold });
		expect(wrapper.classes()).toContain('font-bold');
	});

	it('applies different font families correctly', async () => {
		const wrapper = mount(BoText, {
			props: {
				text: 'Hello World',
				fontFamily: BoFontFamily.sans,
			},
		});

		expect(wrapper.classes()).toContain('font-sans');

		await wrapper.setProps({ fontFamily: BoFontFamily.mono });
		expect(wrapper.classes()).toContain('font-mono');

		await wrapper.setProps({ fontFamily: BoFontFamily.serif });
		expect(wrapper.classes()).toContain('font-serif');
	});

	it('applies different text colors correctly', async () => {
		const wrapper = mount(BoText, {
			props: {
				text: 'Hello World',
				color: BoTextColor.current,
			},
		});

		expect(wrapper.classes()).toContain('text-current');

		await wrapper.setProps({ color: BoTextColor.default });
		expect(wrapper.classes()).toContain('text-neutral-900');

		await wrapper.setProps({ color: BoTextColor.primary });
		expect(wrapper.classes()).toContain('text-blue-600');

		await wrapper.setProps({ color: BoTextColor.secondary });
		expect(wrapper.classes()).toContain('text-neutral-600');

		await wrapper.setProps({ color: BoTextColor.success });
		expect(wrapper.classes()).toContain('text-green-600');

		await wrapper.setProps({ color: BoTextColor.warning });
		expect(wrapper.classes()).toContain('text-yellow-600');

		await wrapper.setProps({ color: BoTextColor.danger });
		expect(wrapper.classes()).toContain('text-red-600');
	});

	it('applies custom color when provided', () => {
		const wrapper = mount(BoText, {
			props: {
				text: 'Hello World',
				customColor: '#ff0000',
			},
		});

		const style = wrapper.attributes('style');
		expect(style).toContain('color: rgb(255, 0, 0)');
	});

	it('applies different text alignments correctly', async () => {
		const wrapper = mount(BoText, {
			props: {
				text: 'Hello World',
				textAlign: BoTextAlign.justify,
			},
		});

		expect(wrapper.classes()).toContain('text-justify');

		await wrapper.setProps({ textAlign: BoTextAlign.left });
		expect(wrapper.classes()).toContain('text-left');

		await wrapper.setProps({ textAlign: BoTextAlign.center });
		expect(wrapper.classes()).toContain('text-center');

		await wrapper.setProps({ textAlign: BoTextAlign.right });
		expect(wrapper.classes()).toContain('text-right');
	});

	it('applies different white space styles correctly', async () => {
		const wrapper = mount(BoText, {
			props: {
				text: 'Hello World',
				whiteSpace: BoTextWhiteSpace.normal,
			},
		});

		expect(wrapper.classes()).toContain('whitespace-normal');

		await wrapper.setProps({ whiteSpace: BoTextWhiteSpace.nowrap });
		expect(wrapper.classes()).toContain('truncate');

		await wrapper.setProps({ whiteSpace: BoTextWhiteSpace.pre });
		expect(wrapper.classes()).toContain('whitespace-pre');

		await wrapper.setProps({ whiteSpace: BoTextWhiteSpace.pre_line });
		expect(wrapper.classes()).toContain('whitespace-pre-line');

		await wrapper.setProps({ whiteSpace: BoTextWhiteSpace.pre_wrap });
		expect(wrapper.classes()).toContain('whitespace-pre-wrap');

		await wrapper.setProps({ whiteSpace: BoTextWhiteSpace.break_spaces });
		expect(wrapper.classes()).toContain('break-spaces');
	});

	it('applies clickable cursor style when clickable is true', async () => {
		const wrapper = mount(BoText, {
			props: {
				text: 'Hello World',
				clickable: false,
			},
		});

		expect(wrapper.classes()).toContain('cursor-default');

		await wrapper.setProps({ clickable: true });
		expect(wrapper.classes()).toContain('cursor-pointer');
	});

	it('applies selectable state correctly', async () => {
		const wrapper = mount(BoText, {
			props: {
				text: 'Hello World',
				selectable: false,
			},
		});

		expect(wrapper.classes()).toContain('select-none');

		await wrapper.setProps({ selectable: true });
		expect(wrapper.classes()).toContain('select-auto');
	});

	it('applies custom CSS class when provided', () => {
		const wrapper = mount(BoText, {
			props: {
				text: 'Hello World',
				cssClass: 'custom-class',
			},
		});

		expect(wrapper.classes()).toContain('custom-class');
	});
});
