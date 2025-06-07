import { IdentityService } from '@/services/identity-service.js';
import type { DirectiveBinding, ObjectDirective } from 'vue';

export enum TooltipPlacement {
	top = 'top',
	topStart = 'top-start',
	topEnd = 'top-end',
	right = 'right',
	rightStart = 'right-start',
	rightEnd = 'right-end',
	bottom = 'bottom',
	bottomStart = 'bottom-start',
	bottomEnd = 'bottom-end',
	left = 'left',
	leftStart = 'left-start',
	leftEnd = 'left-end',
}

export enum TooltipTrigger {
	hover = 'hover',
	click = 'click',
	focus = 'focus',
}

export interface TooltipOptions {
	content: string;
	placement?: TooltipPlacement;
	offset?: number;
	animation?: boolean;
	trigger?: TooltipTrigger;
	delay?: number;
	class?: string;
}

const defaultOptions: Partial<TooltipOptions> = {
	class: '',
	offset: 10,
	delay: 200,
	animation: true,
	trigger: TooltipTrigger.hover,
	placement: TooltipPlacement.bottom,
};

const createTooltip = (
	el: HTMLElement,
	binding: DirectiveBinding<TooltipOptions | string>,
): HTMLElement => {
	const options =
		typeof binding.value === 'string'
			? { ...defaultOptions, content: binding.value }
			: { ...defaultOptions, ...binding.value };

	el.dataset.tooltip = JSON.stringify(options);

	let tooltip = document.getElementById(`tooltip-${el.id}`);

	if (!tooltip) {
		tooltip = document.createElement('div');
		tooltip.id = `tooltip-${el.id ?? IdentityService.instance.getComponentId()}`;
		tooltip.setAttribute('role', 'tooltip');
		tooltip.className = `invisible absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none ${options.class}`;

		if (options.animation) {
			tooltip.classList.add('opacity-0', 'transition-opacity', 'duration-300');
		}

		tooltip.textContent = options.content;
		document.body.appendChild(tooltip);
	} else {
		tooltip.textContent = options.content;
		tooltip.className = `invisible absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none ${options.class}`;

		if (options.animation) {
			tooltip.classList.add('opacity-0', 'transition-opacity', 'duration-300');
		}
	}

	return tooltip;
};

const positionTooltip = (el: HTMLElement, tooltip: HTMLElement) => {
	const options = JSON.parse(el.dataset.tooltip || '{}') as TooltipOptions;
	const rect = el.getBoundingClientRect();
	const tooltipRect = tooltip.getBoundingClientRect();
	const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
	const scrollTop = window.scrollY || document.documentElement.scrollTop;

	let top = 0;
	let left = 0;

	switch (options.placement) {
		case 'top':
			top = rect.top - tooltipRect.height - (options.offset || 0) + scrollTop;
			left = rect.left + rect.width / 2 - tooltipRect.width / 2 + scrollLeft;
			break;
		case 'top-start':
			top = rect.top - tooltipRect.height - (options.offset || 0) + scrollTop;
			left = rect.left + scrollLeft;
			break;
		case 'top-end':
			top = rect.top - tooltipRect.height - (options.offset || 0) + scrollTop;
			left = rect.left + rect.width - tooltipRect.width + scrollLeft;
			break;
		case 'right':
			top = rect.top + rect.height / 2 - tooltipRect.height / 2 + scrollTop;
			left = rect.right + (options.offset || 0) + scrollLeft;
			break;
		case 'right-start':
			top = rect.top + scrollTop;
			left = rect.right + (options.offset || 0) + scrollLeft;
			break;
		case 'right-end':
			top = rect.top + rect.height - tooltipRect.height + scrollTop;
			left = rect.right + (options.offset || 0) + scrollLeft;
			break;
		case 'bottom':
			top = rect.bottom + (options.offset || 0) + scrollTop;
			left = rect.left + rect.width / 2 - tooltipRect.width / 2 + scrollLeft;
			break;
		case 'bottom-start':
			top = rect.bottom + (options.offset || 0) + scrollTop;
			left = rect.left + scrollLeft;
			break;
		case 'bottom-end':
			top = rect.bottom + (options.offset || 0) + scrollTop;
			left = rect.left + rect.width - tooltipRect.width + scrollLeft;
			break;
		case 'left':
			top = rect.top + rect.height / 2 - tooltipRect.height / 2 + scrollTop;
			left = rect.left - tooltipRect.width - (options.offset || 0) + scrollLeft;
			break;
		case 'left-start':
			top = rect.top + scrollTop;
			left = rect.left - tooltipRect.width - (options.offset || 0) + scrollLeft;
			break;
		case 'left-end':
			top = rect.top + rect.height - tooltipRect.height + scrollTop;
			left = rect.left - tooltipRect.width - (options.offset || 0) + scrollLeft;
			break;
		default:
			top = rect.top - tooltipRect.height - (options.offset || 0) + scrollTop;
			left = rect.left + rect.width / 2 - tooltipRect.width / 2 + scrollLeft;
	}

	tooltip.style.top = `${top}px`;
	tooltip.style.left = `${left}px`;
};

const showTooltip = (el: HTMLElement) => {
	const tooltip = document.getElementById(`tooltip-${el.id || ''}`);
	const options = JSON.parse(el.dataset.tooltip || '{}') as TooltipOptions;

	if (tooltip) {
		positionTooltip(el, tooltip);
		tooltip.classList.remove('invisible');

		if (options.animation) {
			setTimeout(() => {
				tooltip.classList.remove('opacity-0');
				tooltip.classList.add('opacity-100');
			}, 10);
		}
	}
};

const hideTooltip = (el: HTMLElement) => {
	const tooltip = document.getElementById(`tooltip-${el.id || ''}`);
	const options = JSON.parse(el.dataset.tooltip || '{}') as TooltipOptions;

	if (tooltip) {
		if (options.animation) {
			tooltip.classList.remove('opacity-100');
			tooltip.classList.add('opacity-0');

			setTimeout(() => {
				tooltip.classList.add('invisible');
			}, options.delay || 200);
		} else {
			tooltip.classList.add('invisible');
		}
	}
};

const attachListeners = (el: HTMLElement, binding: DirectiveBinding<TooltipOptions | string>) => {
	const options =
		typeof binding.value === 'string'
			? { ...defaultOptions, content: binding.value }
			: { ...defaultOptions, ...binding.value };

	switch (options.trigger) {
		case 'hover':
			el.addEventListener('mouseenter', () => showTooltip(el));
			el.addEventListener('mouseleave', () => hideTooltip(el));
			break;
		case 'click':
			el.addEventListener('click', () => showTooltip(el));
			document.addEventListener('click', (e) => {
				if (e.target !== el) {
					hideTooltip(el);
				}
			});
			break;
		case 'focus':
			el.addEventListener('focus', () => showTooltip(el));
			el.addEventListener('blur', () => hideTooltip(el));
			break;
		default:
			el.addEventListener('mouseenter', () => showTooltip(el));
			el.addEventListener('mouseleave', () => hideTooltip(el));
	}
};

export const vTooltip: ObjectDirective<HTMLElement, TooltipOptions | string> = {
	mounted(el: HTMLElement, binding: DirectiveBinding<TooltipOptions | string>) {
		if (!el.id) {
			el.id = `el-${IdentityService.instance.getComponentId()}`;
		}

		createTooltip(el, binding);
		attachListeners(el, binding);
	},

	updated(el: HTMLElement, binding: DirectiveBinding<TooltipOptions | string>) {
		createTooltip(el, binding);
	},

	unmounted(el: HTMLElement) {
		const tooltip = document.getElementById(`tooltip-${el.id ?? ''}`);
		if (tooltip) {
			document.body.removeChild(tooltip);
		}
	},
};
