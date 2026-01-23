import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress';

export const en: LocaleSpecificConfig<DefaultTheme.Config> = {
	title: 'Bamboo',
	description: 'Flexible and type-safe component library for Vue 3',

	themeConfig: {
		nav: nav(),
		sidebar: {
			'/en': {
				base: '/en/',
				items: [...sidebarGuide(), ...sidebarComponents(), ...sidebarResources()],
			},
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
			link: '/en/guide/getting-started',
			activeMatch: '/en/guide/',
		},
		{
			text: 'Components',
			link: '/en/components/index',
			activeMatch: '/en/components/',
		},
		{
			text: 'Resources',
			link: '/en/resources/index',
			activeMatch: '/en/resources/',
		},
	];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
	return [
		{
			collapsed: false,
			text: 'Introduction',
			items: [{ text: 'Getting Started', link: '/guide/getting-started' }],
		},
	];
}

function sidebarComponents(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Design System',
			items: [{ text: 'Sizing System', link: '/design/sizing-system' }],
		},
		{
			text: 'Components',
			link: '/components/index',
			items: [
				{ text: 'Alert', link: '/components/alert' },
				{ text: 'Avatar', link: '/components/avatar' },
				{ text: 'Badge', link: '/components/badge' },
				{ text: 'Button', link: '/components/button' },
				{ text: 'Button Group', link: '/components/button-group' },
				{ text: 'Card', link: '/components/card' },
				{ text: 'Carousel', link: '/components/carousel' },
				{ text: 'Checkbox', link: '/components/checkbox' },
				{ text: 'Checkbox Group', link: '/components/checkbox-group' },
				{ text: 'Divider', link: '/components/divider' },
				{ text: 'Dropdown', link: '/components/dropdown' },
				{ text: 'Icon', link: '/components/icon' },
				{ text: 'Input', link: '/components/input' },
				{ text: 'Loading Pulse', link: '/components/loading-pulse' },
				{ text: 'Loading Spinner', link: '/components/loading-spinner' },
				{ text: 'Modal', link: '/components/modal' },
				{ text: 'Navbar', link: '/components/navbar' },
				{ text: 'Progress', link: '/components/progress' },
				{ text: 'Radio', link: '/components/radio' },
				{ text: 'Radio Group', link: '/components/radio-group' },
				{ text: 'Table', link: '/components/table' },
				{ text: 'Text', link: '/components/text' },
				{ text: 'Textarea', link: '/components/textarea' },
				{ text: 'Timeline', link: '/components/timeline' },
				{ text: 'Tooltip', link: '/components/tooltip' },
			],
		},
	];
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Resources',
			link: '/resources/index',
			items: [
				{ text: 'Changelog', link: 'https://github.com/mrksbnc/bamboo/blob/main/CHANGELOG.md' },
			],
		},
	];
}
