import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptESLintParser from '@typescript-eslint/parser';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	resolvePluginsRelativeTo: __dirname,
});

export default [
	{
		ignores: [
			'*.snap',
			'*.js',
			'*.cjs',
			'scripts/*',
			'dist/*',
			'node_modules/*',
			'docs/*',
			'static/*	',
		],
	},
	{
		linterOptions: {
			reportUnusedDisableDirectives: 'error',
		},
	},
	js.configs.recommended,
	...compat
		.extends('plugin:@typescript-eslint/recommended')
		// Workaround for not limiting rules to specific files
		// See https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		.map(({ files, ...config }) => config),
	{
		files: ['**/*.{vue,ts}'],
		rules: {
			'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			'@typescript-eslint/no-duplicate-enum-values': 'off',
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
	},
	...compat.extends('plugin:vue/vue3-recommended').map((config) => {
		return {
			...config,
			files: ['**/*.vue'],
			languageOptions: {
				...config.languageOptions,
				parserOptions: {
					...config.languageOptions?.parserOptions,
					parser: typescriptESLintParser,
				},
			},
		};
	}),
	...compat.extends('eslint-config-prettier'),
];
