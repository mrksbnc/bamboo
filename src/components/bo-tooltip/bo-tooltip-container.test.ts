import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import BoTooltipContainer from './bo-tooltip-container.vue';
import { TooltipService } from '@/services/tooltip-service';
import { AriaLive } from '@/shared/accessibility';

describe('bo-tooltip-container', () => {
	let tooltipService: TooltipService;

	beforeEach(() => {
		tooltipService = TooltipService.instance;
		tooltipService.hide();
	});

	it('should render tooltip when visible', async () => {
		const wrapper = mount(BoTooltipContainer, { attachTo: document.body });

		const mockElement = document.createElement('div');
		tooltipService.show(mockElement, 'Test tooltip', 'top');

		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for subscription update
		expect(document.querySelector('.bo-tooltip')).toBeTruthy();
		wrapper.unmount();
	});

	it('should not render tooltip when not visible', () => {
		const wrapper = mount(BoTooltipContainer);
		expect(wrapper.find('.bo-tooltip').exists()).toBe(false);
	});

	it('should display tooltip content', async () => {
		const wrapper = mount(BoTooltipContainer, { attachTo: document.body });
		const mockElement = document.createElement('div');

		tooltipService.show(mockElement, 'Test content', 'top');
		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for subscription update

		expect(document.body.textContent).toContain('Test content');
		wrapper.unmount();
	});

	it('should apply correct placement class', async () => {
		const wrapper = mount(BoTooltipContainer, { attachTo: document.body });
		const mockElement = document.createElement('div');

		tooltipService.show(mockElement, 'Test', 'bottom');
		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for subscription update

		expect(document.querySelector('.bo-tooltip--bottom')).toBeTruthy();
		wrapper.unmount();
	});

	it('should apply correct position styles', async () => {
		const wrapper = mount(BoTooltipContainer, { attachTo: document.body });
		const mockElement = document.createElement('div');
		mockElement.getBoundingClientRect = vi.fn(() => ({
			top: 100,
			left: 200,
			width: 50,
			height: 30,
			right: 250,
			bottom: 130,
			x: 200,
			y: 100,
			toJSON: () => {},
		}));

		tooltipService.show(mockElement, 'Test', 'top');
		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for subscription update

		const tooltip = document.querySelector('.bo-tooltip') as HTMLElement;
		const style = tooltip?.getAttribute('style');
		expect(style).toContain('top:');
		expect(style).toContain('left:');
		wrapper.unmount();
	});

	it('should render custom component when provided', async () => {
		const wrapper = mount(BoTooltipContainer, { attachTo: document.body });
		const mockElement = document.createElement('div');
		const CustomComponent = { template: '<div class="custom-tooltip">Custom</div>' };

		tooltipService.show(mockElement, '', 'top', 0, CustomComponent);
		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for subscription update

		expect(document.querySelector('.custom-tooltip')).toBeTruthy();
		wrapper.unmount();
	});

	it('should have aria-live attribute', async () => {
		const wrapper = mount(BoTooltipContainer, { attachTo: document.body });
		const mockElement = document.createElement('div');

		tooltipService.show(mockElement, 'Test', 'top');
		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for subscription update

		const tooltip = document.querySelector('.bo-tooltip');
		expect(tooltip?.getAttribute('aria-live')).toBe(AriaLive.polite);
		wrapper.unmount();
	});

	it('should have role tooltip', async () => {
		const wrapper = mount(BoTooltipContainer, { attachTo: document.body });
		const mockElement = document.createElement('div');

		tooltipService.show(mockElement, 'Test', 'top');
		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for subscription update

		const tooltip = document.querySelector('.bo-tooltip');
		expect(tooltip?.getAttribute('role')).toBe('tooltip');
		wrapper.unmount();
	});

	it('should render arrow with correct placement', async () => {
		const wrapper = mount(BoTooltipContainer, { attachTo: document.body });
		const mockElement = document.createElement('div');

		tooltipService.show(mockElement, 'Test', 'left');
		await wrapper.vm.$nextTick();
		await wrapper.vm.$nextTick(); // Need extra tick for subscription update

		expect(document.querySelector('.bo-tooltip__arrow--left')).toBeTruthy();
		wrapper.unmount();
	});
});
