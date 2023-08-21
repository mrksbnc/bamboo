import './storybook.scss';
import '../src/assets/index.scss';
import type { Preview } from '@storybook/vue3';

const preview: Preview = {
	globalTypes: {
		darkMode: {
			defaultValue: true,
		},
		className: {
			defaultValue: 'dark',
		},
	},
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
};

export default preview;
