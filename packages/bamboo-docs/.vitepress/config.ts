import { defineConfig } from 'vitepress';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';
/**
 * Import locale-specific configs
 */
import { en } from './locales/en';
/**
 * https://vitepress.dev/reference/site-config
 */
export default defineConfig({
	title: 'Bamboo',
	description: 'Lightweight and flexible design system for the web.',
	srcDir: './src',
	cleanUrls: true,
	metaChunk: true,
	lastUpdated: true,
	outDir: '.vitepress/dist',
	base: process.env['VP_BASE'] || '/',
	head: [
		['script', { src: 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4' }],
		['style', { type: 'text/tailwindcss' }, '@custom-variant dark (&:where(.dark, .dark *));'],
		['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
	],
	sitemap: {
		hostname: 'https://mrksbnc.github.io/bamboo/',
	},
	markdown: {
		config(md) {
			md.use(groupIconMdPlugin);
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
		root: {
			label: 'English',
			lang: 'en-US',
			...en,
		},
	},
	vite: {
		plugins: [groupIconVitePlugin()],
	},
});
