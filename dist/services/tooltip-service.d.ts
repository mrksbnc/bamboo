import { Component } from 'vue';
export interface TooltipPosition {
    top: number;
    left: number;
}
export declare enum BoTooltipPlacement {
    top = "top",
    right = "right",
    bottom = "bottom",
    left = "left"
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
export declare class TooltipService {
    private listeners;
    private currentState;
    private showTimeout;
    private hideTimeout;
    static get instance(): TooltipService;
    subscribe(listener: TooltipListener): () => void;
    private notify;
    show(element: HTMLElement, content: string | TooltipConfig, placement?: BoTooltipPlacement, delay?: number, customComponent?: Component, customProps?: Record<string, unknown>): void;
    hide(delay?: number): void;
    private clearTimeouts;
    private calculatePosition;
    getState(): TooltipState;
}
export {};
