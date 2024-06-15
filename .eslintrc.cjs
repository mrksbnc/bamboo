/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier/skip-formatting',
		'plugin:storybook/recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
		parser: '@typescript-eslint/parser',
	},
	plugins: ['prettier'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		quotes: [2, 'single', 'avoid-escape'],
		'vue/multi-word-component-names': 0,
		'@typescript-eslint/explicit-function-return-type': [
			2,
			{
				allowExpressions: true,
			},
		],
		'@typescript-eslint/no-unused-vars': 1,
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
		'@typescript-eslint/consistent-type-imports': 'error',
	},
	ignorePatterns: [
		'*.snap',
		'*.js',
		'*.cjs',
		'scripts/*',
		'dist/*',
		'node_modules/*',
		'docs/*',
		'static/*	',
	],
};
