import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress';

export const en: LocaleSpecificConfig<DefaultTheme.Config> = {
	title: 'Bamboo',
	description: 'Flexible and type-safe component library for Vue 3',

	themeConfig: {
		nav: nav(),
		sidebar: {
			'/en/guide/': { base: '/en/guide/', items: sidebarGuide() },
			'/en/components/': { base: '/en/components/', items: sidebarComponents() },
		},

		editLink: {
			pattern: 'https://github.com/mrksbnc/bamboo/edit/main/packages/bamboo-docs/src/en/:path',
			text: 'Edit this page on GitHub',
		},

		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2024-present Bence Markus',
		},

		docFooter: {
			prev: 'Previous page',
			next: 'Next page',
		},

		outline: {
			label: 'On this page',
		},

		lastUpdated: {
			text: 'Last updated',
		},

		langMenuLabel: 'Change language',
		returnToTopLabel: 'Return to top',
		sidebarMenuLabel: 'Menu',
		darkModeSwitchLabel: 'Appearance',
		lightModeSwitchTitle: 'Switch to light theme',
		darkModeSwitchTitle: 'Switch to dark theme',
	},
};

function nav(): DefaultTheme.NavItem[] {
	return [
		{
			text: 'Guide',
			link: '/en/guide/what-is-bamboo',
			activeMatch: '/en/guide/',
		},
		{
			text: 'Components',
			link: '/en/components/',
			activeMatch: '/en/components/',
		},
		{
			text: 'Resources',
			items: [
				{
					text: 'Changelog',
					link: 'https://github.com/mrksbnc/bamboo/blob/main/CHANGELOG.md',
				},
				{
					text: 'Contributing',
					link: 'https://github.com/mrksbnc/bamboo/blob/main/CONTRIBUTING.md',
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

function sidebarComponents(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Components',
			items: [
				// Add your components here
			],
		},
	];
}
