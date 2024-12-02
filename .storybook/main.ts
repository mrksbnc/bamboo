import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-themes',
        '@storybook/theming',
        '@storybook/addon-coverage',
        '@storybook/experimental-addon-test'
    ],
	framework: {
		name: '@storybook/vue3-vite',
		options: {},
	},
	docs: {},
	core: {
		disableTelemetry: true,
		enableCrashReports: false,
		crossOriginIsolated: true,
	},
	build: {
		test: {
			disabledAddons: [
				'@storybook/addon-docs',
				'@storybook/addon-essentials/docs',
			],
		},
	},
};
export default config;
