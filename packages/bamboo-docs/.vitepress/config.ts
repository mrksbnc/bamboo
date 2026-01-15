import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
const base = process.env.VP_BASE ?? '/';

export default defineConfig({
	base,
	srcDir: 'src',
	outDir: '.vitepress/dist',
	title: 'Bamboo',
	description: 'Lightweight, and flexible UI library for Vue.',
	head: [['script', { src: 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4' }]],
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
				text: 'Components',
				items: [
					{ text: 'Overview', link: '/en/components/default' },
					{ text: 'Button', link: '/en/components/button' },
				],
			},
		],
		socialLinks: [{ icon: 'github', link: 'https://github.com/mrksbnc/bamboo' }],
		footer: {
			message:
				'Released under the <a href="https://github.com/mrksbnc/bamboo/blob/main/LICENSE">MIT License</a>.',
		},
	},
});
