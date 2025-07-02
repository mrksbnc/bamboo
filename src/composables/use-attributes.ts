export const useAttributes = () => {
	const constructAttribute = (id: string, desc: string) => {
		return [id, desc].join('-');
	};

	const optionalWithDefault = (id: string, fallBack?: string) => {
		const consturct = fallBack ?? `unknown-component-${Date.now()}`;

		return id ?? consturct;
	};

	return {
		constructAttribute,
		optionalWithDefault,
	};
};
