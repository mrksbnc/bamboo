export class StorybookUtils {
	/**
	 * @description
	 * This method generates a string representation of an enum in
	 * a readable format.
	 *
	 * @param stringEnum - The enum to be formatted.
	 * @param name - The name of the enum.
	 *
	 * @returns The formatted string.
	 */
	static stringEnumFormatter(
		stringEnum: { [key: string]: string },
		name: string,
	): string {
		return `enum ${name} {\n${
			Object.keys(stringEnum)
				.map(
					(m: string) =>
						`  ${m} = "${stringEnum[m as keyof typeof stringEnum]}",`,
				)
				.join('\r\n') + '\r\n}'
		}`;
	}
	/**
	 * @description
	 * This method generates a string representation of an array in
	 * a readable format.
	 *
	 * @param array - The array to be formatted.
	 * @param name - The name of the array.
	 *
	 * @returns The formatted string.
	 */
	static arrayFormatter(array: string[], name: string): string {
		return `array ${name} {\n${array.map((m: string) => `  ${m},`).join('\r\n')}\r\n}`;
	}
}
