import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { BoFontSize, BoFontWeight, BoTextAlign, BoTextColor } from './bo-text';
import BoText from './bo-text.vue';

describe('BoText.vue', () => {
	it('renders with default size', () => {
		const wrapper = mount(BoText, {
			props: { value: 'Text' },
		});
		expect(wrapper.classes()).toContain('text-base');
	});

	it('renders with specified size', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Text',
				size: BoFontSize.lg,
			},
		});
		expect(wrapper.classes()).toContain('text-lg');
	});

	it('renders with specified weight', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Text',
				weight: BoFontWeight.bold,
			},
		});
		expect(wrapper.classes()).toContain('font-bold');
	});

	it('renders with specified color', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Text',
				color: BoTextColor.primary,
			},
		});
		expect(wrapper.classes()).toContain('text-blue-600');
	});

	it('renders with custom color', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Text',
				customColor: '#ff0000',
			},
		});
		expect(wrapper.attributes('style')).toContain('color: rgb(255, 0, 0)');
	});

	it('renders with specified alignment', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Text',
				textAlign: BoTextAlign.center,
			},
		});
		expect(wrapper.classes()).toContain('text-center');
	});

	it('renders with custom class', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Text',
				cssClass: 'custom-class',
			},
		});
		expect(wrapper.classes()).toContain('custom-class');
	});

	it('renders with custom content', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Custom Content',
			},
		});
		expect(wrapper.text()).toBe('Custom Content');
	});

	it('renders as clickable', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Text',
				clickable: true,
			},
		});
		expect(wrapper.classes()).toContain('cursor-pointer');
	});

	it('renders as selectable', () => {
		const wrapper = mount(BoText, {
			props: {
				value: 'Text',
				selectable: true,
			},
		});
		expect(wrapper.classes()).toContain('select-text');
	});
});
