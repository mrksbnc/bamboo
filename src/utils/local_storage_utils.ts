export class LocalStorageUtils {
	static getItem(key: string): string | null {
		if (typeof window === 'undefined') {
			return null
		}

		try {
			return localStorage.getItem(key)
		} catch (error) {
			console.error(`Error getting item from localStorage: ${error}`)
			return null
		}
	}

	static setItem(key: string, value: string): boolean {
		if (typeof window === 'undefined') {
			return false
		}

		try {
			localStorage.setItem(key, value)
			return true
		} catch (error) {
			console.error(`Error setting item in localStorage: ${error}`)
			return false
		}
	}

	static removeItem(key: string): boolean {
		if (typeof window === 'undefined') {
			return false
		}

		try {
			localStorage.removeItem(key)
			return true
		} catch (error) {
			console.error(`Error removing item from localStorage: ${error}`)
			return false
		}
	}

	static clear(): boolean {
		if (typeof window === 'undefined') return false

		try {
			localStorage.clear()
			return true
		} catch (error) {
			console.error(`Error clearing localStorage: ${error}`)
			return false
		}
	}

	static isAvailable(): boolean {
		if (typeof window === 'undefined') return false

		try {
			const testKey = '__test_key__'
			localStorage.setItem(testKey, 'test')
			localStorage.removeItem(testKey)
			return true
		} catch (error) {
			console.error(`Error checking localStorage availability: ${error}`)
			return false
		}
	}

	static getJSON<T>(key: string): T | null {
		const value = this.getItem(key)

		if (value === null) return null

		try {
			return JSON.parse(value) as T
		} catch (error) {
			console.error(`Error parsing JSON from localStorage: ${error}`)
			return null
		}
	}

	static setJSON<T>(key: string, value: T): boolean {
		try {
			const stringValue = JSON.stringify(value)
			return this.setItem(key, stringValue)
		} catch (error) {
			console.error(`Error stringifying JSON for localStorage: ${error}`)
			return false
		}
	}
}
