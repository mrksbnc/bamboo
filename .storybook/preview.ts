import '../src/index.css';

import {
	withThemeByClassName,
	withThemeByDataAttribute,
} from '@storybook/addon-themes';
import type { Preview } from '@storybook/vue3';

export const decorators = [
	withThemeByClassName({
		themes: {
			light: 'light',
			dark: 'dark',
		},
		defaultTheme: 'light',
	}),
	withThemeByDataAttribute({
		themes: {
			light: 'light',
			dark: 'dark',
		},
		defaultTheme: 'light',
		attributeName: 'data-mode',
	}),
];

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
