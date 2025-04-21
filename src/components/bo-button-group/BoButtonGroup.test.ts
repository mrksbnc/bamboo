import { BoSize } from '@/shared/bo-size';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoButtonGroup from './BoButtonGroup.vue';

describe('BoButtonGroup.vue', () => {
	const buttons = [
		{ value: '1', label: 'Button 1' },
		{ value: '2', label: 'Button 2' },
		{ value: '3', label: 'Button 3' },
	];

	it('renders buttons', () => {
		const wrapper = mount(BoButtonGroup, {
			props: { buttons },
		});
		expect(wrapper.findAll('.bo-button')).toHaveLength(3);
		expect(wrapper.text()).toContain('Button 1');
		expect(wrapper.text()).toContain('Button 2');
		expect(wrapper.text()).toContain('Button 3');
	});

	it('selects button when modelValue matches', () => {
		const wrapper = mount(BoButtonGroup, {
			props: { buttons, modelValue: '2' },
		});
		const button = wrapper.find('button[value="2"]');
		expect(button.classes()).toContain('bo-button--active');
	});

	it('emits update:modelValue when button is clicked', async () => {
		const wrapper = mount(BoButtonGroup, {
			props: { buttons },
		});
		await wrapper.find('button[value="2"]').trigger('click');
		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
		expect(wrapper.emitted('update:modelValue')![0]).toEqual(['2']);
	});

	it('renders as disabled', () => {
		const wrapper = mount(BoButtonGroup, {
			props: { buttons, disabled: true },
		});
		wrapper.findAll('button').forEach((button) => {
			expect(button.attributes('disabled')).toBeDefined();
		});
	});

	it('applies custom class', () => {
		const wrapper = mount(BoButtonGroup, {
			props: { buttons, class: 'custom-class' },
		});
		expect(wrapper.classes()).toContain('custom-class');
	});

	it('renders with specified variant', () => {
		const wrapper = mount(BoButtonGroup, {
			props: { buttons, variant: 'outline' },
		});
		expect(wrapper.find('.bo-button').classes()).toContain('bo-button--outline');
	});

	it('renders with specified size', () => {
		const wrapper = mount(BoButtonGroup, {
			props: { buttons, size: BoSize.large },
		});
		expect(wrapper.find('.bo-button').classes()).toContain('bo-button--large');
	});

	it('renders with specified color', () => {
		const wrapper = mount(BoButtonGroup, {
			props: { buttons, color: 'primary' },
		});
		expect(wrapper.find('.bo-button').classes()).toContain('bo-button--primary');
	});

	it('renders with custom button class', () => {
		const wrapper = mount(BoButtonGroup, {
			props: { buttons, buttonClass: 'custom-button-class' },
		});
		expect(wrapper.find('.bo-button').classes()).toContain('custom-button-class');
	});

	it('renders with custom active button class', () => {
		const wrapper = mount(BoButtonGroup, {
			props: { buttons, activeButtonClass: 'custom-active-class' },
		});
		const button = wrapper.find('button[value="1"]');
		expect(button.classes()).toContain('custom-active-class');
	});
});
