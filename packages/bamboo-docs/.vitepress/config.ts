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
				'@mrksbnc/bamboo-core': fileURLToPath(
					new URL('../../bamboo-core/src/index.ts', import.meta.url),
				),
			},
		},
		ssr: {
			noExternal: ['@mrksbnc/bamboo-vue', '@mrksbnc/bamboo-core'],
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
					{ text: 'Avatar', link: '/en/components/avatar' },
					{ text: 'Badge', link: '/en/components/badge' },
					{ text: 'Button', link: '/en/components/button' },
					{ text: 'Icon', link: '/en/components/icon' },
					{ text: 'Input', link: '/en/components/input' },
					{ text: 'Loading Pulse', link: '/en/components/loading-pulse' },
					{ text: 'Loading Spinner', link: '/en/components/loading-spinner' },
					{ text: 'Text', link: '/en/components/text' },
					{ text: 'Textarea', link: '/en/components/textarea' },
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
