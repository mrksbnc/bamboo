// Example: How to add a new locale (e.g., Spanish)
// Create a file like .vitepress/locales/es.ts

import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress';
import { generateSidebar } from '../internal/sidebar';

function nav(): DefaultTheme.NavItem[] {
	return [
		{ text: 'Inicio', link: '/es/' },
		{ text: 'Acerca de', link: '/es/about/' },
	];
}

function sidebar(): DefaultTheme.SidebarItem[] {
	return generateSidebar({
		locale: 'es',
		srcDir: 'src',
		collapsed: false, // Keep sections expanded
		ignoreList: ['draft'], // Ignore draft folders
		useFrontmatterTitle: true,
	});
}

export const es: LocaleSpecificConfig<DefaultTheme.Config> = {
	title: 'Mi Sitio',
	description: 'Descripción del sitio',

	themeConfig: {
		nav: nav(),
		sidebar: {
			'/es/': sidebar(),
		},
		editLink: {
			pattern: 'https://github.com/user/repo/edit/main/src/es/:path',
			text: 'Editar esta página en GitHub',
		},
		footer: {
			message: 'Publicado bajo la Licencia MIT.',
			copyright: 'Copyright © 2024-presente',
		},
	},
};
