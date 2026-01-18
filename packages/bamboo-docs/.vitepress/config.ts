import { defineConfig } from 'vitepress';
import { fileURLToPath, URL } from 'node:url';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Bamboo',
	srcDir: './src',
	outDir: '.vitepress/dist',
	base: process.env.VP_BASE || '/',
	description: 'Lightweight and flexible design system for the web.',
	head: [['script', { src: 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4' }]],
	vite: {
		resolve: {
			alias: {
				'@mrksbnc/bamboo-vue': fileURLToPath(
					new URL('../../bamboo-vue/src/index.ts', import.meta.url),
				),
				'@mrksbnc/bamboo-vue/lib.css': fileURLToPath(
					new URL('../../bamboo-vue/src/lib.css', import.meta.url),
				),
				'@workspace/bamboo-core': fileURLToPath(
					new URL('../../bamboo-core/src/index.ts', import.meta.url),
				),
			},
		},
	},
	themeConfig: {
		logo: '/assets/logo.webp',
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/markdown-examples' },
		],
		sidebar: [
			{
				text: 'Components',
				items: [
					{
						text: 'Avatar',
						link: '/en/components/avatar',
					},
					{
						text: 'Text',
						link: '/en/components/text',
					},
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
