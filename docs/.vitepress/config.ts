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
			items: [...getComponents()],
		},
	];
}

function getComponents() {
	return [
		{ text: 'Avatar', link: '/components/avatar' },
		{ text: 'Badge', link: '/components/badge' },
		{ text: 'Button', link: '/components/button' },
		{ text: 'Card', link: '/components/card' },
		{ text: 'Checkbox', link: '/components/checkbox' },
		{ text: 'Divider', link: '/components/divider' },
		{ text: 'Dropdown', link: '/components/dropdown' },
		{ text: 'Icon', link: '/components/icon' },
		{ text: 'Input', link: '/components/input' },
		{ text: 'Loading Pulse', link: '/components/loading-pulse' },
		{ text: 'Loading Spinner', link: '/components/loading-spinner' },
		{ text: 'Modal', link: '/components/modal' },
		{ text: 'Radio', link: '/components/radio' },
		{ text: 'Text', link: '/components/text' },
		{ text: 'Textarea', link: '/components/textarea' },
		{ text: 'Toast', link: '/components/toast' },
	];
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Bamboo',
	description: 'UI library built with Vue and Tailwind CSS',
	base: '/',
	cleanUrls: true,
	head: [
		['link', { rel: 'icon', type: 'image/x-icon', href: '/assets/logo.ico' }],
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
			copyright: 'Bence Markus',
		},
	},
});
