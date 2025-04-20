/**
 * Mock implementation of localStorage for testing
 */
class LocalStorageMock {
	private store: Record<string, string> = {};
	public simulateError: boolean = false;

	constructor() {
		this.reset();
	}

	reset() {
		this.store = {};
		this.simulateError = false;
	}

	clear(): void {
		if (this.simulateError) {
			throw new Error('Mock localStorage error: clear');
		}
		this.store = {};
	}

	getItem(key: string): string | null {
		if (this.simulateError) {
			throw new Error('Mock localStorage error: getItem');
		}
		return this.store[key] || null;
	}

	setItem(key: string, value: string): void {
		if (this.simulateError) {
			throw new Error('Mock localStorage error: setItem');
		}
		this.store[key] = value;
	}

	removeItem(key: string): void {
		if (this.simulateError) {
			throw new Error('Mock localStorage error: removeItem');
		}
		delete this.store[key];
	}

	key(index: number): string | null {
		if (this.simulateError) {
			throw new Error('Mock localStorage error: key');
		}
		return Object.keys(this.store)[index] || null;
	}

	get length(): number {
		if (this.simulateError) {
			throw new Error('Mock localStorage error: length');
		}
		return Object.keys(this.store).length;
	}
}

export default LocalStorageMock;
