import { beforeEach, describe, expect, it, vi } from 'vitest';
import { BoTooltipPlacement, TooltipService } from './tooltip-service';

describe('TooltipService', () => {
	let service: TooltipService;
	let mockElement: HTMLElement;

	beforeEach(() => {
		service = TooltipService.instance;
		vi.clearAllTimers();
		vi.useFakeTimers();

		// Create a mock element
		mockElement = document.createElement('div');
		mockElement.getBoundingClientRect = vi.fn(() => ({
			top: 100,
			left: 100,
			right: 200,
			bottom: 150,
			width: 100,
			height: 50,
			x: 100,
			y: 100,
			toJSON: () => ({}),
		}));
		document.body.appendChild(mockElement);
	});

	describe('singleton pattern', () => {
		it('returns the same instance', () => {
			const instance1 = TooltipService.instance;
			const instance2 = TooltipService.instance;
			expect(instance1).toBe(instance2);
		});
	});

	describe('subscribe', () => {
		it('adds listener and returns unsubscribe function', () => {
			const listener = vi.fn();
			const unsubscribe = service.subscribe(listener);

			expect(typeof unsubscribe).toBe('function');
		});

		it('notifies listeners on state change', () => {
			const listener = vi.fn();
			service.subscribe(listener);

			service.show(mockElement, { content: 'Test' });
			vi.runAllTimers();

			expect(listener).toHaveBeenCalled();
		});

		it('unsubscribe removes listener', () => {
			const listener = vi.fn();
			const unsubscribe = service.subscribe(listener);

			unsubscribe();
			service.show(mockElement, { content: 'Test' });
			vi.runAllTimers();

			expect(listener).not.toHaveBeenCalled();
		});
	});

	describe('show', () => {
		it('shows tooltip immediately when no delay', () => {
			const listener = vi.fn();
			service.subscribe(listener);

			service.show(mockElement, { content: 'Test tooltip' });

			expect(listener).toHaveBeenCalledWith(
				expect.objectContaining({
					isVisible: true,
					content: 'Test tooltip',
				}),
			);
		});

		it('shows tooltip after delay', () => {
			const listener = vi.fn();
			service.subscribe(listener);

			service.show(mockElement, { content: 'Test tooltip', delay: 500 });

			expect(listener).not.toHaveBeenCalled();

			vi.advanceTimersByTime(500);

			expect(listener).toHaveBeenCalledWith(
				expect.objectContaining({
					isVisible: true,
					content: 'Test tooltip',
				}),
			);
		});

		it('calculates position for top placement', () => {
			const listener = vi.fn();
			service.subscribe(listener);

			service.show(mockElement, { content: 'Test', position: BoTooltipPlacement.top });

			expect(listener).toHaveBeenCalledWith(
				expect.objectContaining({
					placement: 'top',
					position: expect.objectContaining({
						top: expect.any(Number),
						left: expect.any(Number),
					}),
				}),
			);
		});

		it('calculates position for bottom placement', () => {
			const listener = vi.fn();
			service.subscribe(listener);

			service.show(mockElement, { content: 'Test', position: BoTooltipPlacement.bottom });

			expect(listener).toHaveBeenCalledWith(
				expect.objectContaining({
					placement: 'bottom',
				}),
			);
		});

		it('calculates position for left placement', () => {
			const listener = vi.fn();
			service.subscribe(listener);

			service.show(mockElement, { content: 'Test', position: BoTooltipPlacement.left });

			expect(listener).toHaveBeenCalledWith(
				expect.objectContaining({
					placement: 'left',
				}),
			);
		});

		it('calculates position for right placement', () => {
			const listener = vi.fn();
			service.subscribe(listener);

			service.show(mockElement, { content: 'Test', position: BoTooltipPlacement.right });

			expect(listener).toHaveBeenCalledWith(
				expect.objectContaining({
					placement: 'right',
				}),
			);
		});

		it('supports custom component', () => {
			const listener = vi.fn();
			service.subscribe(listener);
			const customComponent = { template: '<div>Custom</div>' };

			service.show(mockElement, {
				content: 'Test',
				customComponent,
				customProps: { foo: 'bar' },
			});

			expect(listener).toHaveBeenCalledWith(
				expect.objectContaining({
					customComponent,
					customProps: { foo: 'bar' },
				}),
			);
		});

		it('clears existing timeouts before showing', () => {
			const listener = vi.fn();
			service.subscribe(listener);

			service.show(mockElement, { content: 'First', delay: 500 });
			service.show(mockElement, { content: 'Second', delay: 500 });

			vi.advanceTimersByTime(500);

			expect(listener).toHaveBeenCalledTimes(1);
			expect(listener).toHaveBeenCalledWith(
				expect.objectContaining({
					content: 'Second',
				}),
			);
		});
	});

	describe('hide', () => {
		it('hides tooltip immediately when no delay', () => {
			const listener = vi.fn();
			service.subscribe(listener);

			service.show(mockElement, { content: 'Test' });
			listener.mockClear();

			service.hide();

			expect(listener).toHaveBeenCalledWith(
				expect.objectContaining({
					isVisible: false,
				}),
			);
		});

		it('hides tooltip after delay', () => {
			const listener = vi.fn();
			service.subscribe(listener);

			service.show(mockElement, { content: 'Test' });
			listener.mockClear();

			service.hide(300);

			expect(listener).not.toHaveBeenCalled();

			vi.advanceTimersByTime(300);

			expect(listener).toHaveBeenCalledWith(
				expect.objectContaining({
					isVisible: false,
				}),
			);
		});

		it('clears existing timeouts before hiding', () => {
			const listener = vi.fn();
			service.subscribe(listener);

			service.show(mockElement, { content: 'Test', delay: 500 });
			service.hide();

			vi.advanceTimersByTime(500);

			expect(listener).toHaveBeenCalledTimes(1);
			expect(listener).toHaveBeenCalledWith(
				expect.objectContaining({
					isVisible: false,
				}),
			);
		});
	});

	describe('getState', () => {
		it('returns current state', () => {
			const state = service.getState();

			expect(state).toHaveProperty('isVisible');
			expect(state).toHaveProperty('content');
			expect(state).toHaveProperty('position');
			expect(state).toHaveProperty('placement');
		});

		it('returns copy of state', () => {
			const state1 = service.getState();
			const state2 = service.getState();

			expect(state1).not.toBe(state2);
			expect(state1).toEqual(state2);
		});
	});
});
