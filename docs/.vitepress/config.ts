import { defineConfig } from 'vitepress';

function buildSidebar() {
	return [
		{
			text: 'Bamboo',
			items: [
				{ text: 'Home', link: '/' },
				{ text: 'Get Started', link: '/pages/get-started' },
			],
		},
		{
			text: 'Components',
			items: [...getComponents()],
		},
	];
}

function getComponents() {
	return [
		{ text: 'Avatar', link: '/components/avatar/avatar' },
		{ text: 'Badge', link: '/components/badge/badge' },
		{ text: 'Button', link: '/components/button/button' },
		{ text: 'Card', link: '/components/card/card' },
		{ text: 'Divider', link: '/components/divider/divider' },
	];
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Bamboo',
	description: 'UI library built with Vue and Tailwind CSS',
	head: [
		['link', { rel: 'icon', type: 'image/svg', href: '/assets/logo.webp' }],
		[
			'script',
			{
				src: 'https://cdn.tailwindcss.com',
			},
		],
	],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: '/assets/logo.webp',
		sidebar: buildSidebar(),
		socialLinks: [{ icon: 'github', link: 'https://github.com/mrksbnc/bamboo' }],
		footer: {
			message:
				'Released under the <a href="https://github.com/mrksbnc/bamboo/blob/main/LICENSE">MIT License</a>.',
			copyright: `Bence Markus`,
		},
	},
});
