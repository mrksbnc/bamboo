import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	test: {
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json-summary', 'json'],
		},
		environment: 'jsdom',
		globals: false,
	},
});
