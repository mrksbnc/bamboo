import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress';
import { generateSidebar } from '../internal/sidebar';

export const en: LocaleSpecificConfig<DefaultTheme.Config> = {
	title: 'Bamboo',
	description: 'Flexible and type-safe component library for Vue 3',

	themeConfig: {
		nav: nav(),
		sidebar: {
			'/en': {
				base: '/en/',
				items: sidebar(),
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

function sidebar(): DefaultTheme.SidebarItem[] {
	return generateSidebar({
		locale: 'en',
		srcDir: 'src',
		collapsed: false,
		useFrontmatterTitle: true,
		sortBy: 'name',
		sortOrder: 'asc',
	});
}
