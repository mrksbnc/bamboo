export class KeyboardUtils {
	static trapTabKey(e: KeyboardEvent, id: string): void {
		const isTab = e.key === 'Tab' || e.keyCode === 9;

		if (isTab) {
			const focusable: NodeListOf<Element> | undefined = document
				?.querySelector(`#${id}`)
				?.querySelectorAll('[tabindex]');

			if (!focusable?.length) {
				return;
			}

			const sorted = [...focusable].sort((a, b) => {
				return (
					parseInt(a.getAttribute('tabindex') ?? '0') - parseInt(b.getAttribute('tabindex') ?? '0')
				);
			});

			const shift = e.shiftKey;
			const first = sorted[0];
			const last = sorted[sorted.length - 1];

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

	static registerEnterKeyHandler(e: KeyboardEvent, handler: () => void): void {
		e.preventDefault();

		const isEnter = e.key === 'Enter' || e.keyCode === 13;

		if (!isEnter) {
			return;
		}

		handler();
	}
}
