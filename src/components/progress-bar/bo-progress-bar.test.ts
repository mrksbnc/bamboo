import { BoSize } from '@/shared/bo-size.js';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoProgressBar from './bo-progress-bar.vue';

describe('BoProgressBar.vue', () => {
	it('renders with default value', () => {
		const wrapper = mount(BoProgressBar, {
			props: { value: 50 },
		});
		expect(wrapper.find('.bo-progress-bar__fill').attributes('style')).toContain('width: 50%');
	});

	it('renders with specified color', () => {
		const wrapper = mount(BoProgressBar, {
			props: { value: 50, color: 'primary' },
		});
		expect(wrapper.find('.bo-progress-bar__fill').classes()).toContain('bg-blue-600');
	});

	it('renders with specified size', () => {
		const wrapper = mount(BoProgressBar, {
			props: { value: 50, size: BoSize.large },
		});
		expect(wrapper.classes()).toContain('bo-progress-bar--large');
	});

	it('renders with custom class', () => {
		const wrapper = mount(BoProgressBar, {
			props: { value: 50, class: 'custom-class' },
		});
		expect(wrapper.classes()).toContain('custom-class');
	});

	it('renders with label', () => {
		const wrapper = mount(BoProgressBar, {
			props: { value: 50, showLabel: true },
		});
		expect(wrapper.find('.bo-progress-bar__label').text()).toBe('50%');
	});

	it('renders with custom label format', () => {
		const wrapper = mount(BoProgressBar, {
			props: {
				value: 0.5,
				showLabel: true,
				labelFormat: (value) => `${(value * 100).toFixed(1)}%`,
			},
		});
		expect(wrapper.find('.bo-progress-bar__label').text()).toBe('50.0%');
	});

	it('renders with indeterminate state', () => {
		const wrapper = mount(BoProgressBar, {
			props: { indeterminate: true },
		});
		expect(wrapper.classes()).toContain('bo-progress-bar--indeterminate');
	});

	it('renders with striped style', () => {
		const wrapper = mount(BoProgressBar, {
			props: { value: 50, striped: true },
		});
		expect(wrapper.find('.bo-progress-bar__fill').classes()).toContain(
			'bo-progress-bar__fill--striped',
		);
	});

	it('renders with animated stripes', () => {
		const wrapper = mount(BoProgressBar, {
			props: { value: 50, striped: true, animated: true },
		});
		expect(wrapper.find('.bo-progress-bar__fill').classes()).toContain(
			'bo-progress-bar__fill--animated',
		);
	});

	it('renders with custom background color', () => {
		const wrapper = mount(BoProgressBar, {
			props: { value: 50, backgroundColor: '#f0f0f0' },
		});
		expect(wrapper.find('.bo-progress-bar__track').attributes('style')).toContain(
			'background-color: rgb(240, 240, 240)',
		);
	});
});
