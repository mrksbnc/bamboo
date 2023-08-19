import type { StorybookConfig } from '@storybook/vue3-vite';

export const config: StorybookConfig = {
	stories: [
		'../src/docs/**/*.mdx',
		'../src/**/**/__stories__/*.mdx',
		'../src/**/**/__stories__/*.stories.ts',
	],
	addons: [
		'@storybook/addon-controls',
		'@storybook/addon-a11y',
		'@storybook/addon-links',
		'@storybook/addon-actions',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-styling',
			options: {},
		},
	],
	framework: {
		name: '@storybook/vue3-vite',
		options: {},
	},
	typescript: {
		check: true,
	},
	docs: {
		autodocs: 'tag',
	},
	core: {
		disableTelemetry: true, // 👈 Disables telemetry
	},
};

export default config;
