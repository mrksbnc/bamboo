import { fileURLToPath } from 'node:url';
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

const bambooTestConfig = mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			globals: true,
			environment: 'jsdom',
			include: ['./src/**/*.{test}.{js,ts}', './test/**/*.{test}.{js,ts}'],
			exclude: [
				...configDefaults.exclude,
				'**/node_modules/**',
				'**/dist/**',
				'**/.{git,cache}/**',
				'**/{vite,vitest,playwright}.config.*',
			],
			root: fileURLToPath(new URL('./', import.meta.url)),
			alias: {
				'@/': new URL('./src/', import.meta.url).pathname,
			},
			coverage: {
				provider: 'v8',
				reporter: ['json', 'html', 'lcov'],
				exclude: [
					'**/node_modules/**',
					'**/dist/**',
					'**/*.d.ts',
					'**/*.test.ts',
					'**/types.ts',
					'**/index.ts',
					'**/vite-env.d.ts',
					'**/env.d.ts',
				],
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
