import { fileURLToPath } from 'url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Bamboo',
	description: 'Lightweight, and flexible UI library for Vue.',
	themeConfig: {
		logo: '/logo.webp',
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/en/guide/what-is-bamboo' },
			{ text: 'Components', link: '/en/components/default' },
			{ text: 'Services', link: '/en/services/default' },
			{ text: 'Globals', link: '/en/globals/default' },
		],

		sidebar: [
			{
				text: 'Guide',
				items: [
					{ text: 'What is Bamboo?', link: '/en/guide/what-is-bamboo' },
					{ text: 'Getting Started', link: '/en/guide/getting-started' },
				],
			},
			{
				text: 'Components',
				items: [
					{ text: 'Overview', link: '/en/components/default' },
					{ text: 'Icon', link: '/en/components/icon' },
					{ text: 'Loading Spinner', link: '/en/components/loading-spinner' },
					{ text: 'Text', link: '/en/components/text' },
				],
			},
			{
				text: 'Services',
				items: [
					{ text: 'Overview', link: '/en/services/default' },
					{ text: 'Identity Service', link: '/en/services/identity-service' },
					{ text: 'String Service', link: '/en/services/string-service' },
				],
			},
			{
				text: 'Globals',
				items: [
					{ text: 'Overview', link: '/en/globals/default' },
					{ text: 'useColor', link: '/en/globals/use-color' },
					{ text: 'useCss', link: '/en/globals/use-css' },
				],
			},
			{
				text: 'Styles',
				items: [
					{ text: 'Colors', link: '/en/styles/colors' },
					{ text: 'Typography', link: '/en/styles/typography' },
				],
			},
		],
		socialLinks: [{ icon: 'github', link: 'https://github.com/mrksbnc/bamboo' }],
		footer: {
			message:
				'Released under the <a href="https://github.com/mrksbnc/bamboo/blob/main/LICENSE">MIT License</a>.',
		},
	},
	vite: {
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('../../src/', import.meta.url)),
			},
		},
	},
})
