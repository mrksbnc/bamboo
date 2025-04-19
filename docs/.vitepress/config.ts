import { defineConfig } from 'vitepress'

function buildSidebar() {
	return [
		{
			text: 'Bamboo',
			items: [
				{ text: 'Get Started', link: '/pages/get-started' },
				{ text: 'Accessibility', link: '/pages/accessibility' },
				{ text: 'Testing & QA', link: '/pages/testing' },
			],
		},
		{
			text: 'Theming',
			items: [
				{ text: 'Overview', link: '/components/theming/' },
				{ text: 'Dark Mode', link: '/components/theming/dark-mode' },
				{ text: 'Sizing', link: '/components/theming/sizing' },
			],
		},
		{
			text: 'Components',
			items: [...getComponents()],
		},
		{
			text: 'Utilities',
			items: [
				{ text: 'All Utilities', link: '/pages/utilities' },
				{ text: 'Accessibility Utils', link: '/pages/accessibility' },
			],
		},
	]
}

function getComponents() {
	return [
		{ text: 'Avatar', link: '/components/avatar/avatar' },
		{ text: 'Badge', link: '/components/badge/badge' },
		{ text: 'Button', link: '/components/button/button' },
		{ text: 'Card', link: '/components/card/card' },
		{ text: 'Divider', link: '/components/divider/divider' },
		{ text: 'Dropdown', link: '/components/dropdown/dropdown' },
		{ text: 'Icon', link: '/components/icon/icon' },
		{ text: 'Input', link: '/components/input/input' },
		{ text: 'Loading Pulse', link: '/components/loading-pulse/loading-pulse' },
		{ text: 'Loading Spinner', link: '/components/loading-spinner/loading-spinner' },
		{ text: 'Modal', link: '/components/modal/modal' },
		{ text: 'Text', link: '/components/text/text' },
		{ text: 'Textarea', link: '/components/textarea/textarea' },
	]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Bamboo',
	description: 'UI library built with Vue and Tailwind CSS',
	base: '/',
	cleanUrls: true,
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
			copyright: 'Bence Markus',
		},
	},
})
