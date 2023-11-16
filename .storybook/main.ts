import type { StorybookConfig } from '@storybook/vue3-vite';

export const config: StorybookConfig = {
	stories: ['../documentation/**/*.mdx', '../src/**/**/__stories__/*.stories.ts'],
	addons: [
        'storybook-tailwind-dark-mode',
        '@storybook/addon-a11y',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-designs',
        '@storybook/addon-themes'
    ],
	staticDirs: ['../src/assets'],
	framework: {
		name: '@storybook/vue3-vite',
		options: {},
	},
	typescript: {
		check: true,
		skipBabel: true,
	},
	docs: {
		autodocs: true,
		defaultName: 'Documentation',
	},
	core: {
		disableTelemetry: true,
		disableProjectJson: true,
		enableCrashReports: true,
		disableWhatsNewNotifications: true,
	},
};

export default config;
