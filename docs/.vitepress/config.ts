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
				{ text: 'Overview', link: '/pages/utilities' },
				{ text: 'Accessibility Utils', link: '/pages/utilities/accessibility-utils' },
				{ text: 'Identity Utils', link: '/pages/utilities/identity-utils' },
				{ text: 'Keyboard Utils', link: '/pages/utilities/keyboard-utils' },
				{ text: 'LocalStorage Utils', link: '/pages/utilities/local-storage-utils' },
				{ text: 'String Utils', link: '/pages/utilities/string-utils' },
				{ text: 'Tailwind Utils', link: '/pages/utilities/tailwind-utils' },
				{ text: 'Theme Utils', link: '/pages/utilities/theme-utils' },
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
		{ text: 'Checkbox', link: '/components/checkbox/checkbox' },
		{ text: 'Divider', link: '/components/divider/divider' },
		{ text: 'Dropdown', link: '/components/dropdown/dropdown' },
		{ text: 'Icon', link: '/components/icon/icon' },
		{ text: 'Input', link: '/components/input/input' },
		{ text: 'Loading Pulse', link: '/components/loading-pulse/loading-pulse' },
		{ text: 'Loading Spinner', link: '/components/loading-spinner/loading-spinner' },
		{ text: 'Modal', link: '/components/modal/modal' },
		{ text: 'Radio', link: '/components/radio/radio' },
		{ text: 'Table', link: '/components/table/index' },
		{ text: 'Text', link: '/components/text/text' },
		{ text: 'Textarea', link: '/components/textarea/textarea' },
		{ text: 'Toast', link: '/components/toast/toast' },
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
