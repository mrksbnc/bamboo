import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

/**
 * Bamboo root Vue.js ESLint configuration.
 */
const config = typescriptEslint.config(
	{
		ignores: ['*.d.ts', '**/coverage', '**/dist', '*.config.js', '*.config.ts'],
	},
	{
		extends: [
			eslint.configs.recommended,
			...typescriptEslint.configs.recommended,
			...eslintPluginVue.configs['flat/recommended'],
		],
		files: ['**/*.{ts,vue}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: globals.browser,
			parserOptions: {
				parser: typescriptEslint.parser,
			},
		},
		rules: {
			// your rules
		},
	},
	eslintConfigPrettier,
);

export default config;
