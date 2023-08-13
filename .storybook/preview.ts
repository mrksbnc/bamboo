import type { Preview } from '@storybook/vue3';
import { withThemeByClassName } from '@storybook/addon-styling';
import '../src/assets/index.css';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		docs: {
			toc: true, // 👈 Enables the table of contents
		},
		backgrounds: {
			default: 'white',
			values: [
				{
					name: 'white',
					value: '#ffffff',
				},
				{
					name: 'black',
					value: '#000000',
				},
			],
		},
	},
	decorators: [
		// Adds theme switching support.
		// NOTE: requires setting "darkMode" to "class" in your tailwind config
		withThemeByClassName({
			themes: {
				light: 'light',
				dark: 'dark',
			},
			defaultTheme: 'light',
		}),
	],
};

export default preview;
