export class KeyboardUtils {
	static trapTabKey(e: KeyboardEvent, id: string): void {
		const isTab = e.key === 'Tab' || e.keyCode === 9;

		if (isTab) {
			const focusable: NodeListOf<Element> | null =
				document
					?.querySelector(`#${id}`)
					?.querySelectorAll('input,button,select,textarea') ?? null;

			if (focusable === null) {
				return;
			}

			if (focusable.length) {
				const shift = e.shiftKey;
				const first = focusable[0];
				const last = focusable[focusable.length - 1];

				const firstHtmlElement = first as HTMLElement;
				const lastHtmlElement = last as HTMLElement;

				if (shift) {
					if (e.target === first) {
						lastHtmlElement.focus();
						e.preventDefault();
					}
				} else {
					if (e.target === last) {
						firstHtmlElement.focus();
						e.preventDefault();
					}
				}
			}
		}
	}

	static registerEnterKeyHandler(e: KeyboardEvent, handler: () => void): void {
		e.preventDefault();

		const isEnter = e.key === 'Enter' || e.keyCode === 13;

		if (!isEnter) {
			return;
		}

		handler();
	}
}
