import { fileURLToPath } from 'node:url';
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

const bambooTestConfig = mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			globals: true,
			environment: 'jsdom',
			include: ['./src/**/*.test.ts'],
			root: fileURLToPath(new URL('./', import.meta.url)),
			alias: {
				'@/': new URL('./src/', import.meta.url).pathname,
			},
			coverage: {
				provider: 'v8',
				reporter: ['json', 'html', 'lcov'],
			},
			environmentOptions: {
				jsdom: {
					resources: 'usable',
				},
			},
		},
	}),
);

export default bambooTestConfig;
