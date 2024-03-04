export class TailwindUtils {
	static merge(...classes: (string | null | undefined)[]): string {
		return classes.filter(Boolean).join(' ');
	}
}
