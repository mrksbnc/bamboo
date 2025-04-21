import { config } from '@vue/test-utils';
import { vi } from 'vitest';

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn(),
}));

// Global mocks
config.global.mocks = {
	$t: (key: string) => key,
	$i18n: {
		locale: 'en',
	},
};

// Global components
config.global.components = {
	'router-link': {
		template: '<a :href="to"><slot /></a>',
		props: ['to'],
	},
};

// Global stubs
config.global.stubs = {
	'bo-icon': true,
	transition: true,
	'transition-group': true,
};
