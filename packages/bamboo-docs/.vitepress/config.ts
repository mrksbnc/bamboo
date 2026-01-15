import { defineConfig } from 'vitepress';
import tailwindcss from '@tailwindcss/vite';

// https://vitepress.dev/reference/site-config
const base = process.env.VP_BASE ?? '/';

export default defineConfig({
	base,
	srcDir: 'src',
	outDir: '.vitepress/dist',
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
					{ text: 'BoText', link: '/en/components/bo-text' },
				],
			},
			{
				text: 'Services',
				items: [
					{ text: 'Identity Service', link: '/en/services/identity-service' },
					{ text: 'Color Service', link: '/en/services/color-service' },
					{ text: 'Theme Service', link: '/en/services/theme-service' },
				],
			},
			{
				text: 'Styles',
				items: [
					{ text: 'Colors', link: '/en/styles/colors' },
					{ text: 'Typography', link: '/en/styles/typography' },
					{ text: 'Design Tokens', link: '/en/styles/tokens' },
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
		plugins: [tailwindcss()],
		css: {
			postcss: {
				plugins: [],
			},
		},
	},
});
