let instance: StringService | null = null

export class StringService {
	static get instance(): StringService {
		if (!instance) {
			instance = new StringService()
		}

		return instance
	}

	isEmpty(value: string | null | undefined): boolean {
		return !!value && value.trim().length === 0
	}
}
