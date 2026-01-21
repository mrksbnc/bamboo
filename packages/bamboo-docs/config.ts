import { defineAdditionalConfig, type DefaultTheme } from 'vitepress';

function nav(): DefaultTheme.NavItem[] {
	return [
		{
			text: 'Guide',
			link: '/guide/what-is-vitepress',
			activeMatch: '/guide/',
		},
		{
			text: 'Reference',
			link: '/reference/site-config',
			activeMatch: '/reference/',
		},
		{
			text: pkg.version,
			items: [
				{
					text: '1.6.4',
					link: 'https://vuejs.github.io/vitepress/v1/',
				},
				{
					text: 'Changelog',
					link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
				},
				{
					text: 'Contributing',
					link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
				},
			],
		},
	];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Introduction',
			collapsed: false,
			items: [
				{ text: 'What is Bamboo?', link: 'what-is-bamboo' },
				{ text: 'Getting Started', link: 'getting-started' },
			],
		},
	];
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Components',
			items: [],
		},
	];
}

export default defineAdditionalConfig({
	themeConfig: {
		nav: nav(),

		sidebar: {
			'/guide/': { base: '/guide/', items: sidebarGuide() },
			'/components/': { base: '/components/', items: sidebarReference() },
		},

		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2024-present Bence Markus',
		},
	},
});
