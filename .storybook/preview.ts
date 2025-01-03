import type { Preview } from '@storybook/vue3'
import '../src/lib.css'
import './storybook.css'

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export default preview
