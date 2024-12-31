import eslint from '@eslint/js';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';
/**
 * Bamboo root Vue.js ESLint configuration.
 */
const config = typescriptEslint.config(
	{
		ignores: [
			'*.d.ts',
			'**/coverage',
			'**/dist',
			'*.config.js',
			'*.config.ts',
			'*.workspace.js',
			'*.workspace.ts',
			'*.setup.ts',
		],
	},
	{
		extends: [
			eslint.configs.recommended,
			...eslintPluginVue.configs['flat/recommended'],
			...typescriptEslint.configs.recommendedTypeChecked,
		],
		files: ['**/*.{ts,vue}'],
		languageOptions: {
			sourceType: 'module',
			ecmaVersion: 'latest',
			globals: globals.browser,
			parserOptions: {
				projectService: true,
				parser: typescriptEslint.parser,
				tsconfigRootDir: import.meta.dirname,
				extraFileExtensions: ['.vue'],
			},
		},
		rules: {
			'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			quotes: [2, 'single', 'avoid-escape'],
			'no-unused-expressions': 1,
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/no-unused-vars': 1,
		},
	},
	...vueTsEslintConfig({ extends: ['recommendedTypeChecked'] }),
	eslintConfigPrettier,
);

export default config;
