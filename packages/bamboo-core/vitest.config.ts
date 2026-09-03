import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			coverage: {
				provider: 'v8',
				reporter: ['text', 'json-summary', 'json'],
				thresholds: {
					statements: 60,
					branches: 50,
					functions: 60,
					lines: 60,
				},
			},
			environment: 'jsdom',
			exclude: [...configDefaults.exclude],
			root: fileURLToPath(new URL('./', import.meta.url)),
		},
	}),
);
