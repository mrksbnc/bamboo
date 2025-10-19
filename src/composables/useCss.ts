// oxlint-disable consistent-function-scoping
import type { ConditionalCssProperties } from '@/core/css'

export interface UseCss {
	merge(css: string | string[] | ConditionalCssProperties): void
}

export function useCss(): UseCss {
	const merge = (css: string | string[] | ConditionalCssProperties) => {
		if (typeof css === 'string') {
			return css
		}

		if (Array.isArray(css)) {
			return css.filter(Boolean).join(' ')
		}

		return Object.entries(css)
			.map(([key, value]) => {
				return value ? key : null
			})
			.filter(Boolean)
			.join(' ')
	}

	return {
		merge,
	}
}
