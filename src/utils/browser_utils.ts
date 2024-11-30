let instance: BrowserUtils | null = null;

export class BrowserUtils {
	static get instance(): BrowserUtils {
		if (instance == null) {
			instance = new BrowserUtils();
		}

		return instance;
	}

	trapTabKey(e: KeyboardEvent, id: string): void {
		if (e.keyCode === 9) {
			const focusable = document
				?.querySelector(`#${id}`)
				?.querySelectorAll('input,button,select,textarea');
			if (focusable?.length) {
				const first = focusable[0] as HTMLElement;
				const last = focusable[focusable.length - 1] as HTMLElement;
				const shift = e.shiftKey;
				if (shift) {
					if (e.target === first) {
						// shift-tab pressed on first input in dialog
						last.focus();
						e.preventDefault();
					}
				} else {
					if (e.target === last) {
						// tab pressed on last input in dialog
						first.focus();
						e.preventDefault();
					}
				}
			}
		}
	}
}
