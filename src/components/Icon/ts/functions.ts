export const createSvgMap = (): Map<string, unknown> => {
	const getSvgNameFromPath = (path: string): string => {
		const pathSplit = path.split('/');
		const fileName = pathSplit[pathSplit.length - 1] || '';
		const svgName = fileName.replace('.svg', '');

		return svgName;
	};

	const modules = import.meta.glob('@/assets/icon/**/*.svg', {
		import: 'default',
		eager: true,
	});

	const svgMap: Map<string, unknown> = new Map();

	Object.keys(modules).forEach((path) => {
		const svgName = getSvgNameFromPath(path);
		svgMap.set(svgName, modules[path]);
	});

	return svgMap;
};
