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
					{ text: 'Text', link: '/en/components/text' },
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
