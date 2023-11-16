export const stringEnumFormatter = (
	stringEnum: { [key: string]: string },
	name: string,
): string => {
	return `enum ${name} {\n${
		Object.keys(stringEnum)
			.map((m: string) => `\t${m} = "${stringEnum[m as keyof typeof stringEnum]}",`)
			.join('\r\n') + '\r\n}'
	}`;
};
