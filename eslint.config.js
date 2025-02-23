import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import pluginVitest from '@vitest/eslint-plugin';
import oxlint from 'eslint-plugin-oxlint';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default [
	{
		files: ['**/*.{ts,mts,tsx,vue}'],
	},
	{
		ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
	},
	...pluginVue.configs['flat/essential'],
	...vueTsEslintConfig(),
	{
		...pluginVitest.configs.recommended,
		files: ['src/**/__tests__/*'],
	},
	oxlint.configs['flat/recommended'],
	skipFormatting,
];
