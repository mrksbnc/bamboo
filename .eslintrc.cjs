module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		node: false,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'plugin:storybook/recommended',
		'plugin:prettier/recommended',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
	},
	plugins: ['@typescript-eslint', 'prettier'],
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
		'@typescript-eslint/no-unused-vars': 0,
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
	},
};
