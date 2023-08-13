import '../src/assets/index.css';

import type { Preview } from '@storybook/vue3';

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
		themes: {
			light: 'light',
			dark: 'dark',
		},
		defaultTheme: 'light',
	},
};

export default preview;
