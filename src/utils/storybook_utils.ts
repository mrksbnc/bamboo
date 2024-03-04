export const stringEnumFormatter = (
	stringEnum: { [key: string]: string },
	name: string,
): string => {
	return `enum ${name} {\n${
		Object.keys(stringEnum)
			.map(
				(m: string) =>
					`  ${m} = "${stringEnum[m as keyof typeof stringEnum]}",`,
			)
			.join('\r\n') + '\r\n}'
	}`;
};

export const arrayFormatter = (array: string[], name: string): string => {
	return `array ${name} {\n${array.map((m: string) => `  ${m},`).join('\r\n')}\r\n}`;
};
