import { defineConfig } from 'vitepress';

function buildSidebar() {
	return [
		{
			text: 'Bamboo',
			items: [
				{ text: 'Get Started', link: '/pages/get-started' },
				{ text: 'Accessibility', link: '/pages/accessibility' },
			],
		},
		{
			text: 'Components',
			items: [
				{ text: 'Avatar', link: '/pages/components/avatar' },
				{ text: 'Input', link: '/pages/components/input' },
			],
		},
	];
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Bamboo',
	description: 'UI library built with Vue and Tailwind CSS',
	base: '/',
	cleanUrls: true,
	head: [
		['link', { rel: 'icon', href: '/assets/logo.ico' }],
		[
			'script',
			{
				src: 'https://cdn.tailwindcss.com',
			},
		],
	],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: '/assets/logo.ico',
		sidebar: buildSidebar(),
		socialLinks: [{ icon: 'github', link: 'https://github.com/mrksbnc/bamboo' }],
		footer: {
			message:
				'Released under the <a href="https://github.com/mrksbnc/bamboo/blob/main/LICENSE">MIT License</a>.',
			copyright: 'Bence Markus',
		},
	},
});
