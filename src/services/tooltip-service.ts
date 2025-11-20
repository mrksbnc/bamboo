import type { Component } from 'vue';

export interface TooltipPosition {
	top: number;
	left: number;
}

export enum BoTooltipPlacement {
	top = 'top',
	right = 'right',
	bottom = 'bottom',
	left = 'left',
}

export interface TooltipConfig {
	content: string;
	position?: BoTooltipPlacement;
	delay?: number;
	customComponent?: Component;
	customProps?: Record<string, unknown>;
}

export interface TooltipState {
	isVisible: boolean;
	content: string;
	position: TooltipPosition;
	placement: BoTooltipPlacement;
	customComponent?: Component;
	customProps?: Record<string, unknown>;
}

type TooltipListener = (state: TooltipState) => void;

let instance: TooltipService;

export class TooltipService {
	private listeners: Set<TooltipListener> = new Set();
	private currentState: TooltipState = {
		isVisible: false,
		content: '',
		position: { top: 0, left: 0 },
		placement: BoTooltipPlacement.top,
	};
	private showTimeout: number | null = null;
	private hideTimeout: number | null = null;

	static get instance(): TooltipService {
		if (!instance) {
			instance = new TooltipService();
		}
		return instance;
	}

	subscribe(listener: TooltipListener): () => void {
		this.listeners.add(listener);
		return () => this.listeners.delete(listener);
	}

	private notify(): void {
		this.listeners.forEach((listener) => listener({ ...this.currentState }));
	}

	show(
		element: HTMLElement,
		content: string | TooltipConfig,
		placement?: BoTooltipPlacement,
		delay?: number,
		customComponent?: Component,
		customProps?: Record<string, unknown>,
	): void {
		this.clearTimeouts();

		const config: TooltipConfig =
			typeof content === 'string'
				? {
						content,
						position: placement,
						delay,
						customComponent,
						customProps,
					}
				: content;

		const showTooltip = () => {
			const rect = element.getBoundingClientRect();
			const position = this.calculatePosition(rect, config.position || BoTooltipPlacement.top);

			this.currentState = {
				isVisible: true,
				content: config.content,
				position,
				placement: config.position || BoTooltipPlacement.top,
				customComponent: config.customComponent,
				customProps: config.customProps,
			};

			this.notify();
		};

		if (config.delay) {
			this.showTimeout = window.setTimeout(showTooltip, config.delay);
		} else {
			showTooltip();
		}
	}

	hide(delay = 0): void {
		this.clearTimeouts();

		const hideTooltip = () => {
			this.currentState = {
				...this.currentState,
				isVisible: false,
			};
			this.notify();
		};

		if (delay > 0) {
			this.hideTimeout = window.setTimeout(hideTooltip, delay);
		} else {
			hideTooltip();
		}
	}

	private clearTimeouts(): void {
		if (this.showTimeout !== null) {
			clearTimeout(this.showTimeout);
			this.showTimeout = null;
		}
		if (this.hideTimeout !== null) {
			clearTimeout(this.hideTimeout);
			this.hideTimeout = null;
		}
	}

	private calculatePosition(rect: DOMRect, placement: BoTooltipPlacement): TooltipPosition {
		const offset = 4;
		const arrowSize = 4;
		const tooltipMaxWidth = 300;
		const tooltipEstimatedHeight = 50;

		let top = 0;
		let left = 0;

		// Use viewport coordinates (rect.top/left) directly since we're using position: fixed
		switch (placement) {
			case 'top':
				top = rect.top - tooltipEstimatedHeight - offset - arrowSize;
				left = rect.left + rect.width / 2;
				break;
			case 'bottom':
				top = rect.bottom + offset + arrowSize;
				left = rect.left + rect.width / 2;
				break;
			case 'left':
				top = rect.top + rect.height / 2;
				left = rect.left - tooltipMaxWidth - offset - arrowSize;
				break;
			case 'right':
				top = rect.top + rect.height / 2;
				left = rect.right + offset + arrowSize;
				break;
		}

		// Ensure tooltip stays within viewport
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		const padding = 8;

		// Horizontal bounds - account for transform: translateX(-50%) for top/bottom
		if (placement === 'top' || placement === 'bottom') {
			const minLeft = padding + tooltipMaxWidth / 2;
			const maxLeft = viewportWidth - padding - tooltipMaxWidth / 2;
			left = Math.max(minLeft, Math.min(left, maxLeft));
		} else {
			// For left/right placement - account for transform: translateY(-50%)
			if (placement === 'left') {
				if (left < padding) left = padding + tooltipMaxWidth;
			} else if (placement === 'right') {
				if (left + tooltipMaxWidth > viewportWidth - padding) {
					left = viewportWidth - tooltipMaxWidth - padding;
				}
			}
		}

		// Vertical bounds - account for transform: translateY(-50%) for left/right
		if (placement === 'left' || placement === 'right') {
			const minTop = padding + tooltipEstimatedHeight / 2;
			const maxTop = viewportHeight - padding - tooltipEstimatedHeight / 2;
			top = Math.max(minTop, Math.min(top, maxTop));
		} else {
			// For top/bottom placement
			if (top < padding) {
				top = padding;
			}
			if (top + tooltipEstimatedHeight > viewportHeight - padding) {
				top = viewportHeight - tooltipEstimatedHeight - padding;
			}
		}

		return { top, left };
	}

	getState(): TooltipState {
		return { ...this.currentState };
	}
}
