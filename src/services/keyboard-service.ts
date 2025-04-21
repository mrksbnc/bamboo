import { onBeforeUnmount } from 'vue';

export type KeyboardHandler = (event: KeyboardEvent) => void;

export class KeyboardService {
	private static _instance: KeyboardService;
	private handlers: Map<string, Set<KeyboardHandler>> = new Map();
	private isInitialized = false;

	private constructor() {}

	public static get instance(): KeyboardService {
		if (!KeyboardService._instance) {
			KeyboardService._instance = new KeyboardService();
		}
		return KeyboardService._instance;
	}

	private initialize() {
		if (this.isInitialized) return;

		document.addEventListener('keydown', this.handleKeyDown);
		document.addEventListener('keyup', this.handleKeyUp);
		this.isInitialized = true;
	}

	private cleanup() {
		if (!this.isInitialized) return;

		document.removeEventListener('keydown', this.handleKeyDown);
		document.removeEventListener('keyup', this.handleKeyUp);
		this.handlers.clear();
		this.isInitialized = false;
	}

	private handleKeyDown = (event: KeyboardEvent) => {
		this.dispatchEvent('keydown', event);
	};

	private handleKeyUp = (event: KeyboardEvent) => {
		this.dispatchEvent('keyup', event);
	};

	private dispatchEvent(type: string, event: KeyboardEvent) {
		const handlers = this.handlers.get(type);
		if (handlers) {
			handlers.forEach((handler) => handler(event));
		}
	}

	public useKey(type: 'keydown' | 'keyup', key: string, handler: KeyboardHandler) {
		this.initialize();

		const keyHandlers = this.handlers.get(type) || new Set();
		keyHandlers.add(handler);
		this.handlers.set(type, keyHandlers);

		onBeforeUnmount(() => {
			const handlers = this.handlers.get(type);
			if (handlers) {
				handlers.delete(handler);
				if (handlers.size === 0) {
					this.handlers.delete(type);
				}
			}
			if (this.handlers.size === 0) {
				this.cleanup();
			}
		});
	}

	public useEscapeKey(handler: KeyboardHandler) {
		this.useKey('keydown', 'Escape', handler);
	}

	public useEnterKey(handler: KeyboardHandler) {
		this.useKey('keydown', 'Enter', handler);
	}

	public useSpaceKey(handler: KeyboardHandler) {
		this.useKey('keydown', ' ', handler);
	}

	public useTabKey(handler: KeyboardHandler) {
		this.useKey('keydown', 'Tab', handler);
	}

	public useArrowUpKey(handler: KeyboardHandler) {
		this.useKey('keydown', 'ArrowUp', handler);
	}

	public useArrowDownKey(handler: KeyboardHandler) {
		this.useKey('keydown', 'ArrowDown', handler);
	}

	public useArrowLeftKey(handler: KeyboardHandler) {
		this.useKey('keydown', 'ArrowLeft', handler);
	}

	public useArrowRightKey(handler: KeyboardHandler) {
		this.useKey('keydown', 'ArrowRight', handler);
	}
}
