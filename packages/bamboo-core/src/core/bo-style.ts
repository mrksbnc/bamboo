export class BoTailwindClassFactory {
	#classes: Set<string> = new Set();

	add(...classes: string[]) {
		const classFlatMap = classes
			.map((c) => c?.split(' ') ?? [])
			.flatMap((c) => c)
			.filter(Boolean);
		this.#classes = new Set([...this.#classes, ...classFlatMap]);
	}

	delete(...classes: string[]) {
		const classFlatMap = classes
			.map((c) => c?.split(' ') ?? [])
			.flatMap((c) => c)
			.filter(Boolean);
		this.#classes = new Set([...this.#classes].filter((c) => !classFlatMap.includes(c)));
	}

	build() {
		return Array.from(this.#classes).join(' ');
	}
}
