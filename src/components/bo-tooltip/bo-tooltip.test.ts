import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import BoTooltip from './bo-tooltip.vue';
import { TooltipService } from '@/services/tooltip-service';

describe('BoTooltip', () => {
	let tooltipService: TooltipService;

	beforeEach(() => {
		tooltipService = TooltipService.instance;
		vi.clearAllTimers();
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	describe('rendering', () => {
		it('renders trigger element with slot content', () => {
			const wrapper = mount(BoTooltip, {
				props: { content: 'Test tooltip' },
				slots: {
					default: '<button>Hover me</button>',
				},
			});
			expect(wrapper.find('button').exists()).toBe(true);
			expect(wrapper.text()).toContain('Hover me');
		});

		it('applies custom CSS class', () => {
			const wrapper = mount(BoTooltip, {
				props: {
					content: 'Test tooltip',
					customCssClass: 'custom-class',
				},
				slots: {
					default: '<button>Hover me</button>',
				},
			});
			expect(wrapper.find('.custom-class').exists()).toBe(true);
		});
	});

	describe('interaction', () => {
		it('shows tooltip on mouse enter', async () => {
			const showSpy = vi.spyOn(tooltipService, 'show');
			const wrapper = mount(BoTooltip, {
				props: { content: 'Test tooltip' },
				slots: {
					default: '<button>Hover me</button>',
				},
			});

			await wrapper.find('.bo-tooltip__trigger').trigger('mouseenter');
			expect(showSpy).toHaveBeenCalled();
		});

		it('hides tooltip on mouse leave', async () => {
			const hideSpy = vi.spyOn(tooltipService, 'hide');
			const wrapper = mount(BoTooltip, {
				props: { content: 'Test tooltip' },
				slots: {
					default: '<button>Hover me</button>',
				},
			});

			await wrapper.find('.bo-tooltip__trigger').trigger('mouseleave');
			expect(hideSpy).toHaveBeenCalled();
		});

		it('shows tooltip on focus', async () => {
			const showSpy = vi.spyOn(tooltipService, 'show');
			const wrapper = mount(BoTooltip, {
				props: { content: 'Test tooltip' },
				slots: {
					default: '<button>Hover me</button>',
				},
			});

			await wrapper.find('.bo-tooltip__trigger').trigger('focus');
			expect(showSpy).toHaveBeenCalled();
		});

		it('hides tooltip on blur', async () => {
			const hideSpy = vi.spyOn(tooltipService, 'hide');
			const wrapper = mount(BoTooltip, {
				props: { content: 'Test tooltip' },
				slots: {
					default: '<button>Hover me</button>',
				},
			});

			await wrapper.find('.bo-tooltip__trigger').trigger('blur');
			expect(hideSpy).toHaveBeenCalled();
		});

		it('respects delay prop', async () => {
			const showSpy = vi.spyOn(tooltipService, 'show');
			const wrapper = mount(BoTooltip, {
				props: {
					content: 'Test tooltip',
					delay: 500,
				},
				slots: {
					default: '<button>Hover me</button>',
				},
			});

			await wrapper.find('.bo-tooltip__trigger').trigger('mouseenter');
			expect(showSpy).toHaveBeenCalledWith(
				expect.anything(),
				expect.objectContaining({ delay: 500 }),
			);
		});
	});

	describe('disabled state', () => {
		it('does not show tooltip when disabled', async () => {
			const showSpy = vi.spyOn(tooltipService, 'show');
			const wrapper = mount(BoTooltip, {
				props: {
					content: 'Test tooltip',
					disabled: true,
				},
				slots: {
					default: '<button>Hover me</button>',
				},
			});

			await wrapper.find('.bo-tooltip__trigger').trigger('mouseenter');
			expect(showSpy).not.toHaveBeenCalled();
		});

		it('does not hide tooltip when disabled', async () => {
			const hideSpy = vi.spyOn(tooltipService, 'hide');
			const wrapper = mount(BoTooltip, {
				props: {
					content: 'Test tooltip',
					disabled: true,
				},
				slots: {
					default: '<button>Hover me</button>',
				},
			});

			await wrapper.find('.bo-tooltip__trigger').trigger('mouseleave');
			expect(hideSpy).not.toHaveBeenCalled();
		});
	});

	describe('positioning', () => {
		it('passes position prop to tooltip service', async () => {
			const showSpy = vi.spyOn(tooltipService, 'show');
			const wrapper = mount(BoTooltip, {
				props: {
					content: 'Test tooltip',
					position: 'bottom',
				},
				slots: {
					default: '<button>Hover me</button>',
				},
			});

			await wrapper.find('.bo-tooltip__trigger').trigger('mouseenter');
			expect(showSpy).toHaveBeenCalledWith(
				expect.anything(),
				expect.objectContaining({ position: 'bottom' }),
			);
		});

		it('defaults to top position', async () => {
			const showSpy = vi.spyOn(tooltipService, 'show');
			const wrapper = mount(BoTooltip, {
				props: { content: 'Test tooltip' },
				slots: {
					default: '<button>Hover me</button>',
				},
			});

			await wrapper.find('.bo-tooltip__trigger').trigger('mouseenter');
			expect(showSpy).toHaveBeenCalledWith(
				expect.anything(),
				expect.objectContaining({ position: 'top' }),
			);
		});
	});

	describe('custom component', () => {
		it('passes custom component to tooltip service', async () => {
			const CustomComponent = { template: '<div>Custom</div>' };
			const showSpy = vi.spyOn(tooltipService, 'show');
			const wrapper = mount(BoTooltip, {
				props: {
					content: 'Test tooltip',
					customComponent: CustomComponent,
					customProps: { foo: 'bar' },
				},
				slots: {
					default: '<button>Hover me</button>',
				},
			});

			await wrapper.find('.bo-tooltip__trigger').trigger('mouseenter');
			expect(showSpy).toHaveBeenCalledWith(
				expect.anything(),
				expect.objectContaining({
					customComponent: CustomComponent,
					customProps: { foo: 'bar' },
				}),
			);
		});
	});

	describe('cleanup', () => {
		it('hides tooltip on unmount', () => {
			const hideSpy = vi.spyOn(tooltipService, 'hide');
			const wrapper = mount(BoTooltip, {
				props: { content: 'Test tooltip' },
				slots: {
					default: '<button>Hover me</button>',
				},
			});

			wrapper.unmount();
			expect(hideSpy).toHaveBeenCalled();
		});
	});
});
