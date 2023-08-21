export const isDarkMode = (): boolean => {
	const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	return isDarkMode;
};
