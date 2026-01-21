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
			},
			environment: 'jsdom',
			exclude: [...configDefaults.exclude],
			root: fileURLToPath(new URL('./', import.meta.url)),
		},
	}),
);
