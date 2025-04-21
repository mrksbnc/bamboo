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
				{ text: 'Badge', link: '/pages/components/badge' },
				{ text: 'Button', link: '/pages/components/button' },
				{ text: 'Card', link: '/pages/components/card' },
				{ text: 'Divider', link: '/pages/components/divider' },
				{ text: 'Dropdown', link: '/pages/components/dropdown' },
				{ text: 'Icon', link: '/pages/components/icon' },
				{ text: 'Input', link: '/pages/components/input' },
				{ text: 'Loading Pulse', link: '/pages/components/loading-pulse' },
				{ text: 'Loading Spinner', link: '/pages/components/loading-spinner' },
				{ text: 'Modal', link: '/pages/components/modal' },
				{ text: 'Popover', link: '/pages/components/popover' },
				{ text: 'Progress Bar', link: '/pages/components/progress-bar' },
				{ text: 'Table', link: '/pages/components/table' },
				{ text: 'Text', link: '/pages/components/text' },
				{ text: 'Textarea', link: '/pages/components/textarea' },
				{ text: 'Timeline', link: '/pages/components/timeline' },
			],
		},
		{
			text: 'Directives',
			items: [
				{ text: 'Overview', link: '/pages/directives/index' },
				{ text: 'Tooltip', link: '/pages/directives/tooltip' },
			],
		},
		{
			text: 'Types & Utilities',
			items: [
				{ text: 'Overview', link: '/pages/types/index' },
				{ text: 'Color System', link: '/pages/types/colors' },
				{ text: 'Size System', link: '/pages/types/sizes' },
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
