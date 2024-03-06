export class TailwindUtils {
	static merge(...classes: (string | null | undefined)[]): string {
		return Array.from(
			new Set([
				...classes
					.filter(Boolean)
					.map((c) => {
						return c?.split(' ');
					})
					.flat(),
			]),
		).join(' ');
	}
}
