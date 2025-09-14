import { fileURLToPath } from 'url';
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: 'docs',
	title: 'Bamboo',
	description: 'UI library built with Vue and Tailwind CSS',
	base: '/',
	cleanUrls: true,
	themeConfig: {
		logo: '/logo.ico',
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Components', link: '/pages/components/default' },
		],

		sidebar: [
			{
				text: 'Get started',
				items: [{ text: 'Installation', link: '/pages/get-started' }],
			},
			{
				text: 'Components',
				items: [
					{ text: 'Icon', link: '/pages/components/icon' },
					{ text: 'Text', link: '/pages/components/text' },
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
				'@': fileURLToPath(new URL('../src/', import.meta.url)),
			},
		},
	},
});
