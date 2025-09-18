import { fileURLToPath } from 'url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Bamboo',
	description: 'Lightweight, and flexible UI library for Vue.',
	themeConfig: {
		logo: '../assets/logo.webp',
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Components', link: '/pages/components/default.md' },
		],

		sidebar: [
			{
				text: 'Components',
				items: [
					{ text: 'Icon', link: '/pages/components/icon.md' },
					{ text: 'Text', link: '/pages/components/text.md' },
				],
			},
			{
				text: 'Theme',
				items: [{ text: 'Colors', link: '/pages/theme/colors.md' }],
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
