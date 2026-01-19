import { defineConfig } from 'vitepress';
import { fileURLToPath, URL } from 'node:url';

// Import locale-specific configs
import { en } from './locales/en';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Bamboo',
	description: 'Lightweight and flexible design system for the web.',

	srcDir: './src',

	cleanUrls: true,
	metaChunk: true,
	lastUpdated: true,

	outDir: '.vitepress/dist',

	base: process.env.VP_BASE || '/',

	head: [
		['script', { src: 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4' }],
		['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
	],

	sitemap: {
		hostname: 'https://mrksbnc.github.io/bamboo/',
	},

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
		socialLinks: [{ icon: 'github', link: 'https://github.com/mrksbnc/bamboo' }],
		search: {
			provider: 'local',
		},
	},

	locales: {
		en: {
			label: 'English',
			lang: 'en',
			link: '/en/',
			...en,
		},
	},
});
