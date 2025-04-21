import { fileURLToPath } from 'node:url';
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

const bambooTestConfig = mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			globals: true,
			environment: '',
			include: ['./src/**/*.test.ts', './test/**/*.test.ts'],
			exclude: [
				...configDefaults.exclude,
				'**/node_modules/**',
				'**/dist/**',
				'**/{vite,vitest,playwright}.config.*',
			],
			root: fileURLToPath(new URL('./', import.meta.url)),
			alias: {
				'@/': new URL('./src/', import.meta.url).pathname,
			},
			coverage: {
				provider: 'v8',
				reporter: ['json', 'html', 'lcov'],
				thresholds: {
					lines: 80,
					functions: 80,
					branches: 80,
					statements: 80,
				},
			},
			environmentOptions: {
				jsdom: {
					resources: 'usable',
				},
			},
			setupFiles: ['./test/setup.ts'],
			reporters: ['default', 'html'],
			outputFile: {
				html: './coverage/html/index.html',
			},
		},
	}),
);

export default bambooTestConfig;
