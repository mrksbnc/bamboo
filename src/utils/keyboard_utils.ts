export class KeyboardUtils {
	static trapTabKey(e: KeyboardEvent, id: string): void {
		const isTab = e.key === 'Tab' || e.keyCode === 9

		if (!isTab) {
			return
		}

		try {
			const container = document.querySelector(`#${id}`)

			if (!container) {
				return
			}

			// Standard focusable elements selector
			const focusableElementsString =
				'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

			// Get all focusable elements
			const focusableElements = container.querySelectorAll<HTMLElement>(focusableElementsString)

			if (!focusableElements || focusableElements.length === 0) {
				return
			}

			// Convert NodeList to array and sort by tabindex
			const sortedFocusable = Array.from(focusableElements).sort((a, b) => {
				const aTabIndex = a.getAttribute('tabindex')
				const bTabIndex = b.getAttribute('tabindex')

				// Elements without tabindex get treated as having tabindex 0
				const aValue = aTabIndex === null ? 0 : parseInt(aTabIndex, 10)
				const bValue = bTabIndex === null ? 0 : parseInt(bTabIndex, 10)

				// Elements with negative tabindex should be sorted after other elements
				if (aValue < 0 && bValue >= 0) return 1
				if (aValue >= 0 && bValue < 0) return -1

				return aValue - bValue
			})

			// Filter out elements with tabindex < 0 (not in tab order)
			const tabbableFocusable = sortedFocusable.filter((element) => {
				const tabIndex = element.getAttribute('tabindex')
				return tabIndex === null || parseInt(tabIndex, 10) >= 0
			})

			if (tabbableFocusable.length === 0) {
				return
			}

			// Get first and last focusable elements
			const first = tabbableFocusable[0]
			const last = tabbableFocusable[tabbableFocusable.length - 1]

			// Handle shift+tab (backward)
			if (e.shiftKey) {
				if (document.activeElement === first || document.activeElement === container) {
					last.focus()
					e.preventDefault()
				}
			}
			// Handle tab (forward)
			else {
				if (document.activeElement === last) {
					first.focus()
					e.preventDefault()
				}
			}
		} catch (error) {
			console.error('Error in trapTabKey:', error)
		}
	}

	static registerEnterKeyHandler(e: KeyboardEvent, handler: () => void): void {
		e.preventDefault()

		const isEnter = e.key === 'Enter' || e.keyCode === 13

		if (!isEnter) {
			return
		}

		handler()
	}
}
