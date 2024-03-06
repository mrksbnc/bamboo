import './storybook.scss';

import '../src/index.css';

import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/vue3';

const preview: Preview = {
	parameters: {
		layout: 'padded',
		docs: {
			toc: true,
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			default: 'light',
			values: [
				{ name: 'light', value: '#f0f0f0' },
				{ name: 'dark', value: '#333' },
			],
		},
	},
	decorators: [
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
