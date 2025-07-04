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
				{ text: 'Accordion', link: '/pages/components/accordion' },
				{ text: 'Avatar', link: '/pages/components/avatar' },
				{ text: 'Badge', link: '/pages/components/badge' },
				{ text: 'Button', link: '/pages/components/button' },
				{ text: 'Button Group', link: '/pages/components/button-group' },
				{ text: 'Checkbox', link: '/pages/components/checkbox' },
				{ text: 'Dropdown', link: '/pages/components/dropdown' },
				{ text: 'Icon', link: '/pages/components/icon' },
				{ text: 'Input', link: '/pages/components/input' },
				{ text: 'Loading Dots', link: '/pages/components/loading-dots' },
				{ text: 'Loading Pulse', link: '/pages/components/loading-pulse' },
				{ text: 'Loading Spinner', link: '/pages/components/loading-spinner' },
				{ text: 'Modal', link: '/pages/components/modal' },
				{ text: 'Popover', link: '/pages/components/popover' },
				{ text: 'Progress Bar', link: '/pages/components/progress-bar' },
				{ text: 'Radio', link: '/pages/components/radio' },
				{ text: 'Table', link: '/pages/components/table' },
				{ text: 'Tree', link: '/pages/components/tree' },
				{ text: 'Text', link: '/pages/components/text' },
				{ text: 'Textarea', link: '/pages/components/textarea' },
				{ text: 'Timeline', link: '/pages/components/timeline' },
				{ text: 'Toast', link: '/pages/components/toast' },
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
		[
			'script',
			{},
			`
			// Set initial dark mode class based on VitePress theme
			if (typeof window !== 'undefined') {
				const setDarkMode = () => {
					const isDark = document.documentElement.classList.contains('dark');
					document.documentElement.classList.toggle('dark', isDark);
				};

				// Set initial state
				setDarkMode();

				// Listen for theme changes
				const observer = new MutationObserver(setDarkMode);
				observer.observe(document.documentElement, {
					attributes: true,
					attributeFilter: ['class']
				});
			}
			`,
		],
	],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: '/assets/logo.ico',
		sidebar: buildSidebar(),
		search: {
			provider: 'local',
		},
		socialLinks: [{ icon: 'github', link: 'https://github.com/mrksbnc/bamboo' }],
		footer: {
			message:
				'Released under the <a href="https://github.com/mrksbnc/bamboo/blob/main/LICENSE">MIT License</a>.',
			copyright: 'Bence Markus',
		},
	},
});
